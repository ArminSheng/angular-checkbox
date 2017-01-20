'use strict';

let {
    extend,
    forEach
} = angular;

export default function __func($rootScope) {

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
                checkAll: false,
                hasNoChecked: true,
                size: 'm'
            }, options);
        }

        /**
         * Get selectd item
         */
        getSeletedItems() {
            var returnArr = [];
            if (this.items.length > 0) {
                forEach(this.items, function(item) {
                    if (item._checked) {
                        returnArr.push(item._item);
                    }
                });
            }

            return returnArr;
        }

        /**
         * Check all checkbox
         */
        checkAllItem(check) {
            this.checkAll = check;
            if (this.items.length === 0) return;

            forEach(this.items, function(item) {
                item.check(check);
            });

            this._apply();
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
        check(element, check) {
            element.checked = check;
        }

        /**
         * check the queue whether it all checked or not
         */
        traverseQueue() {
            if (this.items.length === 0) return;

            var _isAllChecked = true,
                _hasNoChecked = true;

            forEach(this.items, function(item) {
                if (!item._checked) {
                    _isAllChecked = false;
                } else {
                    _hasNoChecked = false;
                }
            });

            this.hasNoChecked = _hasNoChecked;
            this._checkTheAll(_isAllChecked);
         }

         /**
         * Clear the list
         */
         clearQueue() {
            forEach(this.items, function(item) {
                item.unbind();
            });

            this.items = [];
            this.hasNoChecked = true;
            this._checkTheAll(false);
         }

         /*
         * check the main checkbox
         */
        _checkTheAll(check) {
            this.allChecker && this.allChecker.check(check);
            this.checkAll = check;
            this._apply();
        }

         /**
         * Apply the changes
         * @private
         */
        _apply() {
            if(!$rootScope.$$phase) $rootScope.$apply();
        }
    }

    return Checkboxer;
}

__func.$inject = [
    '$rootScope'
];