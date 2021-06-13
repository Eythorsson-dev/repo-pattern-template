(function () {
    Vue.directive('on-submit', {
        bind: function (el, binding, vnode) {
            if (typeof binding.value !== 'function') {
                const compName = vnode.context.name
                let warn = `[Vue-on-submit:] provided expression '${binding.expression}' is not a function, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }

            // DEFINE HANDLER AND CACHE IT ON THE ELEMENT
            const handler = (e) => {
                var items = Array.from(el.querySelectorAll("input[required], select[required], textarea[required]"));

                function validateInput(input) {
                    var isValid = input.checkValidity();

                    if (isValid && input.__vueOnSubmit__) {
                        if (typeof (input.__vueOnSubmit__.validator) === "function")
                            isValid = input.__vueOnSubmit__.validator();
                    }

                    return isValid;
                }

                var isValid = !items.map(item => {
                    var isValid = validateInput(item);

                    // IF ITEM IS INSIDE A FORM CONTROL GROUP SHOUD THE ERROR CLASS GO IN IT IN STEAD
                    // OF THE ELEMENT ITSELF.
                    var rootElement = item;
                    if (Array.from(item.parentElement.classList).indexOf("form-control-group") > -1)
                        rootElement = item.parentElement;

                    // ADD THE input-error CLASS IF THE INPUT IS NOT VALID
                    if (!isValid)
                        rootElement.classList.add("input-error");
                    else
                        rootElement.classList.remove("input-error");

                    // ADD REACTIVITY
                    item.__vueOnSubmit__ = Object.assign(
                        {
                            RootElement: rootElement,
                            InputHandler: function (ev) {
                                var _isValid = validateInput(ev.target);

                                var _rootElement = ev.target.__vueOnSubmit__.RootElement;
                                if (_isValid) _rootElement.classList.remove("input-error");
                                else _rootElement.classList.add("input-error");
                            }
                        },
                        item.__vueOnSubmit__);

                    item.addEventListener("input", item.__vueOnSubmit__.InputHandler);

                    return isValid;
                }).some(x => !x);

                if (isValid)
                    binding.value(e)
            }

            const button = el.querySelector("button[type=submit]");

            el.__vueOnSubmit__ = {
                button: button,
                handler: handler
            }


            button.addEventListener("click", handler);
        },

        unbind: function (el) {
            const cache = el.__vueOnSubmit__;
            cache.button.removeEventListener('click', cache.handler);
            el.__vueOnSubmit__ = null;
        }
    });
})();