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
         * @param {Object} options.ngModel
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
            console.log(this)
         }

         check(check) {
            this.checkboxer.check(this.ngModel, check);
         }


    }
}

__func.$inject = [
    'CheckDirective'
];