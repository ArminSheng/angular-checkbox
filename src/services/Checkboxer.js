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
                isAllChecked: false
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
                item.check(self.checkAll);
            });
        }

        /*
         * check the main checkbox
         */
        _checkTheAll(check) {
            this.checkAll.check(check);
        }

        /*
         * add check item to list
         */
        addToList(item) {
            this.items.push(item);
        }

        /**
         * general method for check
         */
        check(ngModel, check) {
            ngModel.$setViewValue(check);
            ngModel.$render();
        }

        /**
         * check the queue whether it all checked or not
         */
        checkQueue() {
            var _isAllChecked = true;
            forEach(this.items, function(item) {
                if (!item.checked) {
                    _isAllChecked = false;
                }
            });

            this.isAllChecked = _isAllChecked;
            this._checkTheAll(_isAllChecked);
         }

         /**
         * Clear the list
         */
         clearQueue() {
            this.items = [];
         }
    }

    return Checkboxer;
}
