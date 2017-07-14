(function (app) {


	class ItemsListView {
		constructor() {

			this.tpl 		= document.querySelector('script#view-list-tpl')
			this.container 	= document.querySelector('.container-list');

			this.container.addEventListener('click', (evt) => {

				let btn = event.target;

				if (btn.className.includes('btn-danger')) {

					this.removeItem(btn.dataset.id);
				}

			});

			this.linkFn = Handlebars.compile(this.tpl.innerHTML);

		}

		removeItem(id) {
			document.dispatchEvent(new CustomEvent(
				app.settings.EVENTS.REMOVE_ITEM,
				{detail: id}
			))
		}

		render(data) {

			this.container.innerHTML = this.linkFn(data);

		}
	}

	app.views.ItemsListView = ItemsListView;


})(App)