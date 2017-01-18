'use strict';
let {
    extend
} = angular;

export default function __func(CheckDirective) {
    return class CheckAll extends CheckDirective {
        /**
         * Creates instance of {CheckAll} object
         * @param {Object} options
         * @param {Object} options.checkboxer
         * @param {HTMLElement} options.element
         * @param {Object} options.events
         * @param {Object} options.ngModel
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
         * Initialize
         */
         _init() {
            this.checkboxer.allChecker = this;
            this.checkboxer.checkAll = this._checked;
         }

        /**
         * Event handler
         */
         onChange() {
            this._checked = this.ngModel.$modelValue;
            this.checkboxer.checkAllItem();
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