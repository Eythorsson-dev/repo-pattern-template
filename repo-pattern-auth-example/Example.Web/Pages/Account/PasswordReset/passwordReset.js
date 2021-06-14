window.onload = function () {
    new Vue({
        el: "#app",
        data: function () {
            return {
                Code: "",
                Email: "",
                Password: "",
                Password2: "",
            }
        },
        methods: {
            resetPassword: function () {
                return apiService.Post("account/passwordReset", this.$data)
                    .then(() => window.location.href = window.location.origin)
            }
        },
        mounted: function () {
            const urlParams = new URLSearchParams(window.location.search);
            this.Code = urlParams.get('code');
            this.Email = urlParams.get('email');
        },
    });
};

