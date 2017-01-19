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
         onChange(event) {
            this._checked = this.element[0].checked;
            this.checkboxer.checkAllItem(this._checked);
            this.checkboxer.traverseQueue();
         }

         check(check) {
            this._checked = check;
            this.checkboxer.check(this.element[0], check);
         }


    }
}

__func.$inject = [
    'CheckDirective'
];