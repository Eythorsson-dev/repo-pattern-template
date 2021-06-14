var apiService = (function () {
    const http = axios.create({
        baseURL: '/api/',
        //timeout: 5000,
        withCredentials: true,
    })


    var GetRequest = function (throwError, url, data = {}) {
        return new Promise((resolve, reject) => {
            http.get(url, {
                params: data
            }).then(function (data) {
                resolve(data.data);
            }).catch(err => {
                if (throwError)
                    feedback.DisplayError(err.response.data);

                reject(err);
            })
        });
    };

    const PostRequest = function (throwError, url, data = {}) {
        return new Promise((resolve, reject) => {
            http.post(url, data)
                .then(function (data) {
                    resolve(data.data);
                })
                .catch(err => {
                    if (throwError)
                        feedback.DisplayError(err.response.data)

                    reject(err);
                })
        })
    }

    return {
        Get: (url, data) => GetRequest(true, url, data),
        Post: (url, data) => PostRequest(true, url, data),

        BlindGet: (url, data) => GetRequest(false, url, data),
        BlindPost: (url, data) => PostRequest(false, url, data),
    }
})();
