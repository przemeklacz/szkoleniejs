"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {

	// Import
	var ItemsListView = app.views.ItemsListView;
	var itemsStorage = new app.models.ItemsStorage();
	var viewLoginForm = new app.views.ViewLoginForm();
	var loginService = new app.models.LoginService();
	var viewAddItemForm = new app.views.ViewAddItemForm();

	var itemsListView = new ItemsListView();

	var ItemsController = function () {
		function ItemsController() {
			var _this = this;

			_classCallCheck(this, ItemsController);

			this.refreshView();

			// Listeners
			document.addEventListener(app.settings.EVENTS.REMOVE_ITEM, function (evt) {
				itemsStorage.remove(evt.detail, _this.refreshView);
			});

			document.addEventListener(app.settings.EVENTS.LOGIN, function (evt) {
				loginService.login(evt.detail);
			});

			document.addEventListener(app.settings.EVENTS.ADD_ITEM, function (evt) {
				//loginService.login(evt.detail);
				itemsStorage.add(evt.detail, _this.refreshView);
			});
		}

		_createClass(ItemsController, [{
			key: "refreshView",
			value: function refreshView() {
				itemsStorage.fetch(function (data) {
					itemsListView.render(data);
				});
			}
		}]);

		return ItemsController;
	}();

	// Export


	app.controllers.ItemsController = ItemsController;
})(App);