let App = {
    services: {}
};

(function(app) {
    class AjaxService {
        constructor(url) {
            this.xhr = new XMLHttpRequest();
            this.xhr.withCredentials = true;
            this.url = url;
        }
        do(type = 'get', callback, data) {
            this.xhr.addEventListener('load', function(response) {
                let data = response.target.response;
                callback(JSON.parse(data));

            });
            this.xhr.open(type, this.url);
            this.xhr.send(JSON.stringify(data));

        }
    }
    app.services.AjaxService = AjaxService;

})(App);
