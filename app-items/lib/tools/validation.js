'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
    var Validate = function () {
        function Validate(form) {
            _classCallCheck(this, Validate);

            this.data = {};
            this.form = form;
            this.formOK = true;
        }

        _createClass(Validate, [{
            key: 'checkForm',
            value: function checkForm(callback) {
                var _this = this;

                this.formOK = true;
                Array.from(this.form, function (field) {
                    var name = field.getAttribute('name');
                    if (name) {
                        _this.data[name] = field.value;
                        if (field.hasAttribute('required')) {
                            _this.clearError(field);
                            _this.checkField(field);
                        }
                    }
                });
                if (this.formOK) {
                    callback(this.data);
                    this.form.reset();
                }
                // this.formOK && callback(this.data);
            }
        }, {
            key: 'checkField',
            value: function checkField(field) {
                switch (field.tagName) {
                    case 'INPUT':
                        !field.value && this.setError(field); //true pierwszy wykonuje drugi z automatu
                        break;
                    case 'SELECT':
                        !!!field.selectedIndex && this.setError(field); // !! - rzutowanie na boolean
                        break;
                }
            }
        }, {
            key: 'clearError',
            value: function clearError(field) {
                // field.style.border = '';
                var parent = field.parentElement;
                var error = parent.querySelector('.text-danger');
                if (error) parent.removeChild(error);
            }
        }, {
            key: 'setError',
            value: function setError(field) {
                this.formOK = false; //flaga zawsze ustawiana na false, jeśli weszło w error
                // field.style.border = '2px solid red';
                var error = document.createElement('div');
                error.innerText = "Pole wymagane";
                error.classList.add('text-danger');
                var parent = field.parentElement;
                parent.appendChild(error);
            }
        }]);

        return Validate;
    }();

    app.tools.Validate = Validate;
})(App);