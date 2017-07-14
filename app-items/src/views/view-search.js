(function (app) {

    class ViewSearch {
        constructor() {
            this.searchInput = document
                .querySelector('.search')
                .addEventListener('input', (evt) => {
                    let value = evt.target.value;
                    document.dispatchEvent(new CustomEvent (
                        app.settings.EVENTS.SEARCH_ITEMS,
                        {detail: value}
                    ))
                });
        }

    }
    app.views.ViewSearch = ViewSearch;
})(App)