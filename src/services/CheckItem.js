'use strict';
let {
    extend
} = angular;

export default function __func(CheckDirective) {
    return class CheckItem extends CheckDirective {
        /**
         * Creates instance of {CheckItem} object
         * @param {Object} options
         * @param {Object} options.checkboxer
         * @param {HTMLElement} options.element
         * @constructor
         */
        constructor(options) {
            var entended = extend(options, {
                _checked: false,
                events: {
                    change: 'onChange'
                }
            });

            super(entended);
            this._init();
        }
        /**
         *Push check item into checkboxer
         */
        _init() {
            !this.disabled && this.checkboxer.addToList(this);
        }

        /**
         * Event handler
         */
         onChange(event) {
            this._checked = this.ngModel.$modelValue;
            this.checkboxer.checkQueue();
         }

         check(check) {
            this.checkboxer.check(this.ngModel, check);
            this._checked = check;
         }
    }
}

__func.$inject = [
    'CheckDirective'
];