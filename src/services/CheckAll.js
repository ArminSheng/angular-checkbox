let {
    extend,
    forEach
    } = angular;

export default function __func(CheckDirective) {
    return class CheckAll extends CheckDirective {
        /**
         * Creates instance of {CheckAll} object
         * @param {Object} options
         * @param {Object} options.checkboxer
         * @param {HTMLElement} options.element
         * @param {Object} options.events
         * @constructor
         */
        constructor(options) {
            var entended = extend(this, options, {
                events: {
                    click: 'onClick'
                }
            });

            super(entended);
            init();
        }

        /**
         * Initialize
         */
         init() {
            this.checkboxer.checkAll = this;
         }

        /**
         * Event handler
         */
         onClick(event) {
            this.checkboxer.checkAll();
         }
    }
}

__func.$inject = [
    'CheckDirective'
];