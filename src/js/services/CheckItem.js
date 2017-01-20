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
         * @param {HTMLElement} options._input
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
            this._input.attr('disabled', this.disabled);
            this.element.addClass('arm-size-' + this.checkboxer.size);

            if (this.disabled) {
                this.element.addClass('arm-check-disabled');
            } else {
                this.checkboxer.addToList(this)
            }
        }

        /**
         * Event handler
         */
         onChange(event) {
            this._checked = this._input[0].checked;
            this.checkboxer.traverseQueue();
         }

         check(check) {
            this.checkboxer.check(this._input[0], check);
            this._checked = check;
         }
    }
}

__func.$inject = [
    'CheckDirective'
];