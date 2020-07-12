window.base = {
    baseUrl: 'http://127.0.0.1:88/BJUTIDCheck/BJUTChecker_Server/public/index.php/api/v1/',

    getData: function(params, exactUrl) {
        const toUrl = this.baseUrl.concat(exactUrl);
        console.warn(toUrl);
        if (!params.type) {
            params.type = 'get';
        }
        var that = this;
        $.ajax({
            type: params.type,
            url: toUrl + params.url,
            data: params.data,
            beforeSend: function(XMLHttpRequest) {
                if (params.tokenFlag) {
                    XMLHttpRequest.setRequestHeader('token', that.getLocalStorage('token'));
                }
            },
            success: function(res) {
                console.log("From server: ", res);
                params.sCallback && params.sCallback(res);
            },
            error: function(res) {
                console.log(res.responseText);
                params.eCallback && params.eCallback(res);
            }
        });
    },

    setLocalStorage: function(key, val) {
        var exp = new Date().getTime() + 2 * 24 * 60 * 60 * 100; //令牌过期时间
        var obj = {
            val: val,
            exp: exp
        };
        localStorage.setItem(key, JSON.stringify(obj));
    },

    getLocalStorage: function(key) {
        var info = localStorage.getItem(key);
        if (info) {
            info = JSON.parse(info);
            if (info.exp > new Date().getTime()) {
                return info.val;
            } else {
                this.deleteLocalStorage('token');
            }
        }
        return '';
    },

    deleteLocalStorage: function(key) {
        return localStorage.removeItem(key);
    },
}