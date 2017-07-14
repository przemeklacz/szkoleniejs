'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {

	var Validate = app.tools.Validate;

	var ViewLoginForm = function () {
		function ViewLoginForm() {
			var _this = this;

			_classCallCheck(this, ViewLoginForm);

			this.form = document.forms['loginForm'];
			this.validate = new Validate(this.form);
			this.form.querySelector('button').addEventListener('click', function () {
				_this.validate.checkForm(function (data) {
					this.login(data);
				}.bind(_this));
			});
		}

		_createClass(ViewLoginForm, [{
			key: 'login',
			value: function login(loginData) {
				document.dispatchEvent(new CustomEvent(app.settings.EVENTS.LOGIN, { detail: loginData }));
			}
		}]);

		return ViewLoginForm;
	}();

	app.views.ViewLoginForm = ViewLoginForm;
})(App);