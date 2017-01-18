(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["angular-checkbox"] = factory();
	else
		root["angular-checkbox"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Checkboxer = __webpack_require__(1);
	
	var _Checkboxer2 = _interopRequireDefault(_Checkboxer);
	
	var _CheckAll = __webpack_require__(2);
	
	var _CheckAll2 = _interopRequireDefault(_CheckAll);
	
	var _CheckItem = __webpack_require__(3);
	
	var _CheckItem2 = _interopRequireDefault(_CheckItem);
	
	var _CheckDirective = __webpack_require__(4);
	
	var _CheckDirective2 = _interopRequireDefault(_CheckDirective);
	
	var _CheckAll3 = __webpack_require__(5);
	
	var _CheckAll4 = _interopRequireDefault(_CheckAll3);
	
	var _CheckItem3 = __webpack_require__(6);
	
	var _CheckItem4 = _interopRequireDefault(_CheckItem3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('angularCheckbox', []).factory('Checkboxer', _Checkboxer2.default).factory('CheckAll', _CheckAll2.default).factory('CheckItem', _CheckItem2.default).factory('CheckDirective', _CheckDirective2.default).directive('checkAll', _CheckAll4.default).directive('checkItem', _CheckItem4.default);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __func;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular,
	    extend = _angular.extend,
	    forEach = _angular.forEach;
	function __func() {
	    var Checkboxer = function () {
	        /**
	         * Creates instance of {Checkboxer} object
	         * @param {Object} options
	         * @param {Object} options.checkboxer
	         * @param {Boolean} options.checkAll
	         * @param {Array} options.items
	         * @constructor
	         */
	        function Checkboxer(options) {
	            _classCallCheck(this, Checkboxer);
	
	            extend(this, {
	                items: [],
	                isAllChecked: false
	            }, options);
	        }
	
	        /**
	         * Get selectd item
	         */
	
	
	        Checkboxer.prototype.getSeletedItems = function getSeletedItems() {
	            var returnArr = [];
	            if (this.items) {
	                forEach(this.items, function (item) {
	                    if (item.checked) {
	                        returnArr.push(item);
	                    }
	                });
	            }
	
	            return returnArr;
	        };
	
	        /**
	         * Check all checkbox
	         */
	
	
	        Checkboxer.prototype.checkAllItem = function checkAllItem() {
	            var self = this;
	            forEach(this.items, function (item) {
	                item.check(self.checkAll);
	            });
	        };
	
	        /*
	         * check the main checkbox
	         */
	
	
	        Checkboxer.prototype._checkTheAll = function _checkTheAll(check) {
	            this.allChecker.check(check);
	            // this.checkAll = check;
	        };
	
	        /*
	         * add check item to list
	         */
	
	
	        Checkboxer.prototype.addToList = function addToList(item) {
	            this.items.push(item);
	        };
	
	        /**
	         * general method for check
	         */
	
	
	        Checkboxer.prototype.check = function check(ngModel, _check) {
	            ngModel.$setViewValue(_check);
	            ngModel.$render();
	        };
	
	        /**
	         * check the queue whether it all checked or not
	         */
	
	
	        Checkboxer.prototype.checkQueue = function checkQueue() {
	            var _isAllChecked = true;
	            forEach(this.items, function (item) {
	                if (!item._checked) {
	                    _isAllChecked = false;
	                }
	            });
	
	            this.isAllChecked = _isAllChecked;
	            this._checkTheAll(_isAllChecked);
	        };
	
	        /**
	        * Clear the list
	        */
	
	
	        Checkboxer.prototype.clearQueue = function clearQueue() {
	            this.items = [];
	        };
	
	        return Checkboxer;
	    }();
	
	    return Checkboxer;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular,
	    extend = _angular.extend;
	function __func(CheckDirective) {
	    return function (_CheckDirective) {
	        _inherits(CheckAll, _CheckDirective);
	
	        /**
	         * Creates instance of {CheckAll} object
	         * @param {Object} options
	         * @param {Object} options.checkboxer
	         * @param {HTMLElement} options.element
	         * @param {Object} options.events
	         * @param {Object} options.ngModel
	         * @constructor
	         */
	        function CheckAll(options) {
	            _classCallCheck(this, CheckAll);
	
	            var entended = extend(options, {
	                _checked: false,
	                events: {
	                    change: 'onChange'
	                }
	            });
	
	            var _this = _possibleConstructorReturn(this, _CheckDirective.call(this, entended));
	
	            _this._init();
	            return _this;
	        }
	
	        /**
	         * Initialize
	         */
	
	
	        CheckAll.prototype._init = function _init() {
	            this.checkboxer.allChecker = this;
	            this.checkboxer.checkAll = this._checked;
	        };
	
	        /**
	         * Event handler
	         */
	
	
	        CheckAll.prototype.onChange = function onChange() {
	            this._checked = this.ngModel.$modelValue;
	            this.checkboxer.checkAllItem();
	        };
	
	        CheckAll.prototype.check = function check(_check) {
	            this.checkboxer.check(this.ngModel, _check);
	            this._checked = _check;
	        };
	
	        return CheckAll;
	    }(CheckDirective);
	}
	
	exports.default = __func;
	__func.$inject = ['CheckDirective'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _angular = angular,
	    extend = _angular.extend;
	function __func(CheckDirective) {
	    return function (_CheckDirective) {
	        _inherits(CheckItem, _CheckDirective);
	
	        /**
	         * Creates instance of {CheckItem} object
	         * @param {Object} options
	         * @param {Object} options.checkboxer
	         * @param {HTMLElement} options.element
	         * @constructor
	         */
	        function CheckItem(options) {
	            _classCallCheck(this, CheckItem);
	
	            var entended = extend(options, {
	                _checked: false,
	                events: {
	                    change: 'onChange'
	                }
	            });
	
	            var _this = _possibleConstructorReturn(this, _CheckDirective.call(this, entended));
	
	            _this._init();
	            return _this;
	        }
	        /**
	         *Push check item into checkboxer
	         */
	
	
	        CheckItem.prototype._init = function _init() {
	            !this.disabled && this.checkboxer.addToList(this);
	        };
	
	        /**
	         * Event handler
	         */
	
	
	        CheckItem.prototype.onChange = function onChange(event) {
	            this._checked = this.ngModel.$modelValue;
	            this.checkboxer.checkQueue();
	        };
	
	        CheckItem.prototype.check = function check(_check) {
	            this.checkboxer.check(this.ngModel, _check);
	            this._checked = _check;
	        };
	
	        return CheckItem;
	    }(CheckDirective);
	}
	
	exports.default = __func;
	__func.$inject = ['CheckDirective'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __func;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _angular = angular,
	    extend = _angular.extend;
	function __func() {
	    return function () {
	        function CheckDirective(options) {
	            _classCallCheck(this, CheckDirective);
	
	            extend(this, {
	                events: {}
	            }, options);
	
	            this._saveLinks();
	            this.bind();
	        }
	        /**
	         * Bind events
	         */
	
	
	        CheckDirective.prototype.bind = function bind() {
	            for (var key in this.events) {
	                var prop = this.events[key];
	                this.element.bind(key, this[prop]);
	            }
	        };
	        /**
	        * Saves links to functions
	        * @private
	        */
	
	
	        CheckDirective.prototype._saveLinks = function _saveLinks() {
	            for (var key in this.events) {
	                var prop = this.events[key];
	                this[prop] = this[prop].bind(this);
	            }
	        };
	
	        return CheckDirective;
	    }();
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __func;
	function __func(CheckAll, Checkboxer) {
	
	    return {
	        require: 'ngModel',
	        link: function link(scope, element, attrs, ngModel) {
	            var checkboxer = scope.$eval(attrs.checkboxer);
	            if (!checkboxer instanceof Checkboxer) {
	                throw new TypeError('"checkboxer" must be an instance of Checkboxer');
	            }
	
	            var check = new CheckAll({
	                checkboxer: checkboxer,
	                element: element,
	                ngModel: ngModel
	            });
	        }
	    };
	}
	
	__func.$inject = ['CheckAll', 'Checkboxer'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = __func;
	function __func(CheckItem, Checkboxer) {
	
	    return {
	        require: 'ngModel',
	        link: function link(scope, element, attrs, ngModel) {
	            var checkboxer = scope.$eval(attrs.checkboxer);
	            var disabled = scope.$eval(attrs['ngDisabled']);
	
	            if (!checkboxer instanceof Checkboxer) {
	                throw new TypeError('"checkboxer" must be an instance of Checkboxer');
	            }
	
	            var check = new CheckItem({
	                checkboxer: checkboxer,
	                element: element,
	                ngModel: ngModel,
	                disabled: disabled
	            });
	        }
	    };
	}
	
	__func.$inject = ['CheckItem', 'Checkboxer'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-checkbox.js.map