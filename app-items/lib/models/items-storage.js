'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {

	var AjaxService = app.services.AjaxService;

	var ItemsStorage = function () {
		function ItemsStorage() {
			_classCallCheck(this, ItemsStorage);

			this.data = [];
			this.ajax = new AjaxService(app.settings.API_END_POINT);
		}

		_createClass(ItemsStorage, [{
			key: 'fetch',
			value: function fetch(cb) {
				this.ajax.do('get', function (response) {
					cb(response);
				});
			}
		}, {
			key: 'remove',
			value: function remove(id, cb) {
				this.ajax.do('delete', function (response) {
					cb();
				}, id);
			}
		}, {
			key: 'add',
			value: function add(data, cb) {
				this.ajax.do('post', function (response) {
					cb();
				}, data);
			}
		}]);

		return ItemsStorage;
	}();

	app.models.ItemsStorage = ItemsStorage;
})(App);