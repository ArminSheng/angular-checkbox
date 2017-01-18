'use strict';

import serviceCheckboxer from './services/Checkboxer';
import serviceCheckAll from './services/CheckAll';
import serviceCheckItem from './services/CheckItem';
import serviceCheckDirective from './services/CheckDirective';

import CheckAllDirective from './directives/CheckAll';
import CheckItemDirective from './directives/CheckItem';



angular
    .module('angularCheckbox', [])
    .factory('Checkboxer', serviceCheckboxer)
    .factory('CheckAll', serviceCheckAll)
    .factory('CheckItem', serviceCheckItem)
    .factory('CheckDirective', serviceCheckDirective)
    .directive('checkAll', CheckAllDirective)
    .directive('checkItem', CheckItemDirective);