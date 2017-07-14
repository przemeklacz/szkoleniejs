'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {

	var AjaxService = app.services.AjaxService;

	var LoginService = function () {
		function LoginService() {
			_classCallCheck(this, LoginService);

			this.ajax = new AjaxService(app.settings.API_END_POINT_LOGIN);
		}

		_createClass(LoginService, [{
			key: 'login',
			value: function login(data) {
				this.ajax.do('post', function (response) {}, data);
			}
		}]);

		return LoginService;
	}();

	app.models.LoginService = LoginService;
})(App);