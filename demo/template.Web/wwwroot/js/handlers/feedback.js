var feedback = (function () {
    'use strict';
    let hideModalTimeout;
    return {
        DisplayError: displayError,
        DisplayMessage: displayMessage
    };

    function displayError(error, hideAfterMs = 0) {
        var title = "Warning";
        var message = "<p>An error occured during this operation.We are sorry for the inconvenience.</p><p>Please contact system provider.</p>";

        if (error && typeof error == "string")
            message = error
        if (error && error.ExceptionMessage)
            message = error.ExceptionMessage;

        var _message = "<p><strong>" + message + "</strong></p>";

        document.querySelector("#globalModal .modal-title").innerHTML = title;
        document.querySelector("#globalModal .modal-body").innerHTML = _message;
        var modal = new bootstrap.Modal(document.getElementById('globalModal'));
        modal.show();

        if (hideAfterMs > 0) {
            clearTimeout(hideModalTimeout);
            hideModalTimeout = setTimeout(function () {
                modal.hide();
            }, hideAfterMs);
        }
    }

    function displayMessage(title, message, hideAfterMs = 0) {
        var _message = "<p><strong>" + message + "</strong></p>";

        document.querySelector("#globalModal .modal-title").innerHTML = title;
        document.querySelector("#globalModal .modal-body").innerHTML = _message;

        var modal = new bootstrap.Modal(document.getElementById('globalModal'));
        modal.show();

        if (hideAfterMs > 0) {
            clearTimeout(hideModalTimeout);
            hideModalTimeout = setTimeout(function () {
                modal.hide();
            }, hideAfterMs);
        }
    }

})();