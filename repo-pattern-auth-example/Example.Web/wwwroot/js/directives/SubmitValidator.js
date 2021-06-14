(function () {
    Vue.directive('submit-validator', {
        bind: function (el, binding, vnode) {


            if (typeof binding.value !== 'function') {
                const compName = vnode.context.name
                let warn = `[Vue-submit-validator:] provided expression '${binding.expression}' is not a function, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }
            else if (!el.required) {
                const compName = vnode.context.name
                let warn = `[Vue-submit-validator:] provided element is not required, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }
            else if (!["INPUT", "SELECT", "TEXTAREA"].includes(el.tagName)) {
                const compName = vnode.context.name
                let warn = `[Vue-submit-validator:] provided element is not on a input, select or textarea, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }

            el.__vueOnSubmit__ = {
                validator: binding.value
            };
        },

        unbind: function (el) {
            const cache = el.__vueOnSubmit__;
            el.__vueOnSubmit__ = null;
        }
    });
})();