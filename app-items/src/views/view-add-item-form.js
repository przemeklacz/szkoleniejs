(function (app) {

	const Validate = app.tools.Validate;

	class ViewAddItemForm {

		constructor() {

			this.form = document.forms['addItemForm'];
            this.validate = new Validate(this.form);
			this.form
				.querySelector('button')
				.addEventListener('click', () => {
					this.validate.checkForm(this.addItem.bind(this));
					// var title = this.form.title.value;
					// var description = this.form.description.value;
					// var price = this.form.price.value;
					// var category = "food";
					// this.addItem({title,description,price, category}); //przeniesienie dodania itemu do walidacji

				});

		}
		addItem(data) {
			document.dispatchEvent(new CustomEvent(
				app.settings.EVENTS.ADD_ITEM,
				{detail: data}
			))
		}



	}

	app.views.ViewAddItemForm = ViewAddItemForm;


})(App)