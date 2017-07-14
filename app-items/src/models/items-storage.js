(function (app) {

	let AjaxService = app.services.AjaxService;

	class ItemsStorage {
        constructor() {
            this.ajax = new AjaxService(app.settings.API_END_POINT);
        }

        fetch(cb) {
            this.ajax.do('get', (response) => {
                this.data = response;
                cb(response);

            });
        }

        remove(id, cb) {
            this.ajax.do('delete', (response) => {
                cb();
            }, (id));
        }

        add(data, cb) {
            this.ajax.do('post', (response) => {
                cb();
            }, data);
        }

        search(value, callback) {
            let data = this.data.data.filter((item) => {
                return item.title.includes(value);
            });
			// this.data.data = result;
			callback({data});
        }
    }

	app.models.ItemsStorage = ItemsStorage;

})(App);