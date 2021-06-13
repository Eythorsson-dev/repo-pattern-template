(function () {
    var ce = function (tag, attrs, children) {
        var elm = document.createElement(tag);
        // SET ATTRIBUTES AND ADD CHILDREN
        Object.keys(attrs || {}).forEach(key => elm.setAttribute(key, attrs[key]));
        [].concat(children).filter(x => x).forEach(child => elm.append(child));
        return elm;
    }


    var signOutBtn = document.getElementById("signOut");
    if (signOutBtn) {
        signOutBtn.addEventListener("click", function () {
            apiService.Post("account/logout")
                .then(() => window.location = window.location.origin += "/Account/Login");
        })
    }

    // CLEAR ALL ACTIVE
    document.querySelectorAll("#sidebar .nav-link.active")
        .forEach(x => x.classList.remove("active"))

    // COLLAPSE ALL COLLAPSABLE ITEMS
    document.querySelectorAll("#sidebar li>button~.collapse")
        .forEach(elm => new bootstrap.Collapse(elm, { toggle: false }).hide())

    // HILIGHT THE ACTIVE ITEM
    document.querySelectorAll("#sidebar .nav-link[href='" + window.location.pathname + "']")
        .forEach(function (elm) {
            var collapseElem = elm.closest(".collapse");
            if (collapseElem != null) new bootstrap.Collapse(collapseElem, { toggle: false }).show()
            elm.classList.add("active")
        })


    // SIDE BAR COLLAPSE
    document.querySelector("#btn-sidebar-collapse")
        .addEventListener("click", function () { 
            var sidebarElm = document.querySelector("#sidebar");
            var buttonIcon = document.querySelector("#btn-sidebar-collapse > i")

            // MAKE SHURE THE SIDEBAR ITEMS ARE CLOSED WHEN COLLSPING THE SIDEBAR
            Array.prototype.slice.call(
                document.querySelectorAll("#sidebar .collapse.show")
            ).forEach(x => x.classList.remove("show"))

            if (sidebarElm.classList.contains("minimized")) {
                sidebarElm.classList.remove("minimized");
                buttonIcon.classList.remove("bi-arrow-right-square")
                buttonIcon.classList.add("bi-arrow-left-square")
            }
            else {
                sidebarElm.classList.add("minimized");
                buttonIcon.classList.add("bi-arrow-right-square")
                buttonIcon.classList.remove("bi-arrow-left-square")
            }
        })

    // ADD THE MINIFIED SIDEBAR DROPDOWNS
    Array.prototype.slice.call(
        document.querySelectorAll("#sidebar ul.nav li>[data-bs-toggle='collapse']")
    ).forEach((btn, index) => {
        var ddm = ce("div", { class: "dropdown dropend" }, [
            ce("a", { href: "#", class: "dropdown-toggle text-decoration-none nav-link text-center text-white", "data-bs-toggle": "dropdown", id: "sidebar-ddl-" + index },
                ce("i", { class: btn.querySelector("i").className })
            ),
            ce("ul", { class: "dropdown-menu dropdown-menu-dark shadow", "area-labelledby": "sidebar-ddl-" + index },
                Array.prototype.slice.call(
                    btn.closest("li").querySelectorAll("div > ul > li")
                ).map(x => x.cloneNode(true))
            )
        ])
        btn.parentElement.append(ddm)
    })



})();


