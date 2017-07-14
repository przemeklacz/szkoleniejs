'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
	var AjaxService = function () {
		function AjaxService(url) {
			_classCallCheck(this, AjaxService);

			this.url = url;
		}

		_createClass(AjaxService, [{
			key: 'do',
			value: function _do() {
				var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'get';
				var callback = arguments[1];
				var data = arguments[2];

				this.xhr = new XMLHttpRequest();
				this.xhr.withCredentials = true;
				this.xhr.addEventListener('load', function (response) {
					var data = response.target.response;
					callback(JSON.parse(data));
				});
				this.xhr.open(type, this.url);
				this.xhr.send(JSON.stringify(data));
			}
		}]);

		return AjaxService;
	}();

	app.services.AjaxService = AjaxService;
})(App);