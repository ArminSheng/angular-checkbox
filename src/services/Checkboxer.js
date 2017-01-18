let {
    extend,
    forEach
} = angular;

export default function __func() {

    class Checkboxer {
        /**
         * Creates instance of {Checkboxer} object
         * @param {Object} options
         * @param {Object} options.checkboxer
         * @param {Boolean} options.checkAll
         * @param {Array} options.items
         * @constructor
         */
        constructor(options) {
            extend(this, {
                items: [],
                isAllChecked : false
            }, options);
        }

        /**
         * Get selectd item
         */
        getSeletedItems() {
            var returnArr = [];
            if (this.items) {
                forEach(this.items, function(item) {
                    if (item.checked) {
                        returnArr.push(item);
                    }
                });
            }

            return returnArr;
        }
        /**
         * Check all checkbox
         */
        checkAll() {
            var self = this;
            forEach(this.items, function(item) {
                item.check(this.checkAll);
            });
        }
        /*
         * Checkboxer all
         */
        checkAll(check) {
            this.checkAll.check(check);
        }

        /**
         * general method for check
         */
        check(ngModel, check) {
            ngModel.$setViewValue(check);
            ngModel.$render();
        }
    }

    return Checkboxer;
}
