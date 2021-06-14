window.onload = function () {
    new Vue({
        el: "#app",
        data: function () {
            return {
                Code: "",
            }
        },
        methods: {
            resendVerifyEmail: function (email) {
                return apiService.Post("account/resendAccountVerify", { Email: email })
            },
            verifyEmail: function () {
                return apiService.Post("account/accountVerify", { Email: this.Email, Code: this.Code })
                    .then(() => window.location.href = window.location.origin);
            },
            logout: function () {
                return apiService.Post("account/logout")
                    .then(() => window.location.href = window.location.origin);
            }
        },
        mounted: function () {
            const urlParams = new URLSearchParams(window.location.search);
            this.Code = urlParams.get('code');
            this.Email = urlParams.get('email');

            if (this.Code) {
                this.verifyEmail();
            }
        }
    });
};

