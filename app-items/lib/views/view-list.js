'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
	var ItemsListView = function () {
		function ItemsListView() {
			var _this = this;

			_classCallCheck(this, ItemsListView);

			this.tpl = document.querySelector('script#view-list-tpl');
			this.container = document.querySelector('.container-list');

			this.container.addEventListener('click', function (evt) {

				var btn = event.target;

				if (btn.className.includes('btn-danger')) {

					_this.removeItem(btn.dataset.id);
				}
			});

			this.linkFn = Handlebars.compile(this.tpl.innerHTML);
		}

		_createClass(ItemsListView, [{
			key: 'removeItem',
			value: function removeItem(id) {
				document.dispatchEvent(new CustomEvent(app.settings.EVENTS.REMOVE_ITEM, { detail: id }));
			}
		}, {
			key: 'render',
			value: function render(data) {

				this.container.innerHTML = this.linkFn(data);
			}
		}]);

		return ItemsListView;
	}();

	app.views.ItemsListView = ItemsListView;
})(App);