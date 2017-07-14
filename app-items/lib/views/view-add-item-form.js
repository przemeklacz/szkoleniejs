'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {

	var Validate = app.tools.Validate;

	var ViewAddItemForm = function () {
		function ViewAddItemForm() {
			var _this = this;

			_classCallCheck(this, ViewAddItemForm);

			this.form = document.forms['addItemForm'];
			this.validate = new Validate(this.form);
			this.form.querySelector('button').addEventListener('click', function () {
				_this.validate.checkForm(_this.addItem.bind(_this));
				// var title = this.form.title.value;
				// var description = this.form.description.value;
				// var price = this.form.price.value;
				// var category = "food";
				// this.addItem({title,description,price, category}); //przeniesienie dodania itemu do walidacji
			});
		}

		_createClass(ViewAddItemForm, [{
			key: 'addItem',
			value: function addItem(data) {
				document.dispatchEvent(new CustomEvent(app.settings.EVENTS.ADD_ITEM, { detail: data }));
			}
		}]);

		return ViewAddItemForm;
	}();

	app.views.ViewAddItemForm = ViewAddItemForm;
})(App);