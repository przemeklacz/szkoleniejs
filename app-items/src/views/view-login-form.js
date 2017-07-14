(function (app) {

    const Validate = app.tools.Validate;

	class ViewLoginForm {
		constructor() {
			this.form = document.forms['loginForm'];
            this.validate = new Validate(this.form);
            this.form
                .querySelector('button')
                .addEventListener('click', () => {
                    this.validate.checkForm(function (data) {
                    	this.login(data);
                    }.bind(this));
                });
		}



		login(loginData) {
			document.dispatchEvent(new CustomEvent (
				app.settings.EVENTS.LOGIN,
				{detail: loginData}
			));
		}

	}

	app.views.ViewLoginForm = ViewLoginForm;


})(App)