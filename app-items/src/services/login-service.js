(function (app) {

	let AjaxService = app.services.AjaxService;

	class LoginService {
		constructor() {
			this.ajax = new AjaxService(app.settings.API_END_POINT_LOGIN);
		}
		login(data) {
			this.ajax.do('post', (response) => {

			}, data);
		}
	}

	app.models.LoginService = LoginService;

})(App);