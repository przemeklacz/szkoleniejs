(function (app) {

	// Import
	const ItemsListView 	= app.views.ItemsListView;
	const itemsStorage 		= new app.models.ItemsStorage();
	const viewLoginForm 	= new app.views.ViewLoginForm();
    const viewSearch	= new app.views.ViewSearch();
	const loginService 		= new app.models.LoginService();
	const viewAddItemForm 	= new app.views.ViewAddItemForm();

    const itemsListView = new ItemsListView();

	class ItemsController {

		constructor() {

			this.refreshView();

			// Listeners
			document.addEventListener(app.settings.EVENTS.REMOVE_ITEM, (evt) => {
				itemsStorage.remove(evt.detail, this.refreshView);
			});

			document.addEventListener(app.settings.EVENTS.LOGIN, (evt) => {
				loginService.login(evt.detail);
			});

			document.addEventListener(app.settings.EVENTS.ADD_ITEM, (evt) => {
				//loginService.login(evt.detail);
				itemsStorage.add(evt.detail,  this.refreshView);
			});

			document.addEventListener(app.settings.EVENTS.SEARCH_ITEMS, (evt) => {
				itemsStorage.search(evt.detail, (data) => {
					itemsListView.render(data);
				});
			});



        }
			refreshView() {
                itemsStorage.fetch((data) => {
                    itemsListView.render(data);
                });
			}
	}

	// Export
	app.controllers.ItemsController = ItemsController;


})(App)