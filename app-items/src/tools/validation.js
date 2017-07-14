(function (app) {
    class Validate {
        constructor(form) {
            this.data = {};
            this.form = form;
            this.formOK = true;
        }

        checkForm(callback) {
            this.formOK = true;
            Array.from(this.form, (field) => {
                let name = field.getAttribute('name');
                if(name) {
                    this.data[name] = field.value;
                    if(field.hasAttribute('required')) {
                        this.clearError(field);
                        this.checkField(field);
                    }
                }
            });
            if (this.formOK) {
                callback(this.data);
                this.form.reset();
            }
            // this.formOK && callback(this.data);
        }
        checkField(field) {
            switch (true) {
                case /INPUT/.test(field.tagName):  //RegExp
                    !field.value && this.setError(field); //true pierwszy wykonuje drugi z automatu
                    break;
                case /SELECT/.test(field.tagName):
                    !(!!field.selectedIndex) && this.setError(field); // !! - rzutowanie na boolean
                    break;
            }
            // switch (field.tagName) {
            //     case 'INPUT':
            //         !field.value && this.setError(field); //true pierwszy wykonuje drugi z automatu
            //         break;
            //     case 'SELECT':
            //         !(!!field.selectedIndex) && this.setError(field); // !! - rzutowanie na boolean
            //         break;
            // }
        }
        clearError(field){
            // field.style.border = '';
            let parent = field.parentElement;
            let error = parent.querySelector('.text-danger');
            if (error)
               parent.removeChild(error);
        }
        setError(field) {
            this.formOK = false; //flaga zawsze ustawiana na false, jeśli weszło w error
            // field.style.border = '2px solid red';
            let error = document.createElement('div');
            error.innerText = "Pole wymagane";
            error.classList.add('text-danger');
            let parent = field.parentElement;
            parent.appendChild(error);
        }
    }
    app.tools.Validate = Validate;
})(App);