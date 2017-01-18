let {
    extend,
    forEach
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
            var entended = extend(this, options, {
                checked: false,
                events: {
                    click: 'onClick'
                }
            });

            super(entended);
            init();
        }
        /**
         *Push check item into checkboxer
         */
        init() {
            !this.disabled && this.checkboxer.addToList(this);
        }

        /**
         * Event handler
         */
         onClick(event) {
            this.checkboxer.checkQueue();
            console.log(this)
         }

    }
}

__func.$inject = [
    'CheckDirective'
];