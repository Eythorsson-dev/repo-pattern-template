var keyboardShortcut = (function () {
    'use strict';

    var keyCombos = [];
    var keyComboTimeoutMs = 500
    var timeout = undefined;

    // These are the global shortcuts
    // Shortcut: The shortcuts must not include any spaces
    var _shortcuts = [
        // General
        // { Category: "General", ShortcutId: 1, Name: "Show Keyboard Shortcuts", Description: "", Shortcut: "ctrl+k", Action: () => $("#ddmShortcut").siblings("button[data-toggle=dropdown]").click() },

        // Booking
        { Category: "Booking", ShortcutId: 1, Name: "Open Booking Plan", Description: "", Shortcut: "alt+p", Action: () => goToPage("/booking/calendar", 0) },
        { Category: "Booking", ShortcutId: 2, Name: "Create New Booking", Description: "", Shortcut: "alt+n", Action: () => goToPage("/booking/new", 0) },
        { Category: "Booking", ShortcutId: 3, Name: "Edit Booking", Description: "", Shortcut: "alt+e", Action: () => goToPage("/booking/edit", 0) },
        { Category: "Booking", ShortcutId: 4, Name: "Open CheckIn List", Description: "", Shortcut: "alt+c,alt+i", Action: () => goToPage("/booking/checkin", 0) },
        { Category: "Booking", ShortcutId: 5, Name: "Open CheckOut List", Description: "", Shortcut: "alt+c,alt+o", Action: () => goToPage("/booking/checkout", 0) },
    ]

    /// GoToPage routes the user to the specified page
    /// targetType; 0: Current window, 1: new Tab, 2: new window

    function goToPage(url, targetType = 0) {

        if (!url.match(/https{0,1}:\/\//) != null)
            url = location.origin + "/" + url.substr(url[0] == "/" ? 1 : 0);

        switch (targetType) {
            case 0: location.href = url; break;
            case 1: break;
            case 2: window.open(url, '_blank').focus(); break;
            default: console.error("KeyboardShortcut::The targetType is not valid");
        }
    };


    function fireEvent(event) {

        function performAction(allowExact = true) {
            var shortcuts = keyboardShortcut.ShortcutList.filter(item => (item.Shortcut || "").startsWith(keyCombos.join(",")));

            var notLegalShortcuts = keyCombos
                .reduce((arr, combo) => arr.concat(combo.split(/\+[0123456789abcdefghijklmnopqrstuvwxyz],{0,1}/)), [])
                .filter(x => x)
                .filter(x => ["ctrl", "shift", "alt"].indexOf(x) == -1);

            if (notLegalShortcuts.length > 0 || shortcuts.length == 0) return clearShortcut();
            else event.preventDefault();

            timeout = setTimeout(performAction, keyComboTimeoutMs);

            if (shortcuts.length > 1 && !allowExact) {
                event.preventDefault();
                return false;
            }
            if (shortcuts.length == 1 || allowExact) {
                event.preventDefault();

                var shortcut = shortcuts.find(x => x.Shortcut == keyCombos.join(","));
                if (shortcut === undefined) {
                    if (!allowExact) return false;
                }
                else
                    shortcuts[0].Action();

                clearTimeout(timeout);
                clearShortcut();
            }
            if (allowExact) clearShortcut();

            return true;
        }

        return performAction(false);
    };

    function clearShortcut() {
        keyCombos = [];
    };

    function validateShortcuts() {
        var duplicates = _shortcuts.filter((item, index, arr) => arr.some((x, i) => i !== index && item.Shortcut == x.Shortcut));

        if (duplicates.length > 0) {
            console.error("KeyboardShortcut::Duplicates in the registered shortcuts");
            console.table(duplicates.map(x => { return { Name: x.Name, Shortcut: x.Shortcut } }))
        }

        var legalCharacters = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z", "ctrl", "shift", "alt"
        ];

        var invalid = _shortcuts.filter(item => !item?.Shortcut?.split(/\+|,/).every(char => legalCharacters.indexOf(char) > -1));
        if (invalid.length > 0) {
            console.error("KeyboardShortcut::Invalid shortcut in the registered shortcuts");
            console.table(invalid.map(x => { return { Name: x.Name, Shortcut: x.Shortcut } }))
        }
    }

    function parseInput(event) {

        var key = event.key.toLowerCase();
        var legalCharachters = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z"
        ];

        if (legalCharachters.indexOf(key) > -1) {
            var keys = [];
            if (event.ctrlKey) keys.push("ctrl");
            if (event.shiftKey) keys.push("shift");
            if (event.altKey) keys.push("alt");
            keys.push(key);

            return keys.join("+");
        }

        return "";
    };

    function registerShortcuts(shortcut) {
        if (!Array.isArray(shortcut)) {
            if (typeof shortcut === "object") shortcut = [shortcut];
            else return console.error("KeyboardShortcut::The registered parameter is not valid");
        }

        _shortcuts.push(...shortcut.map(item => {
            item.Shortcut = item.Shortcut.split(" ").join("");
            return item;
        }));

        validateShortcuts();
    };

    function init() {
        validateShortcuts();

        var isNewCombo = true;
        document.addEventListener("keyup", function () { isNewCombo = true });
        document.addEventListener("keydown", function (event) {
            var keyCombo = parseInput(event);

            if (keyCombo !== "" && isNewCombo) {
                clearTimeout(timeout);
                isNewCombo = false;
                keyCombos.push(keyCombo);

                if (fireEvent(event))
                    isNewCombo = true;
            }
        });
    }
    init();

    return {
        Register: registerShortcuts,
        GoToPage: goToPage,

        /// RETURNS: a dictionary of category shortcuts; Shortcut[CategoryName]
        get Shortcuts() {
            return _shortcuts.reduce(function (obj, curr) {
                if (curr.Category == undefined) curr.Category = "Other"
                if (obj[curr.Category] == undefined) obj[curr.Category] = [curr]
                else obj[curr.Category].push(curr);
                return obj;
            }, {});
        },

        get ShortcutList() { return _shortcuts; }
    };
})();