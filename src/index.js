'usr strict';

import serviceCheckboxer from './services/Checkboxer';
import CheckAll from './services/CheckAll';
import CheckItem from './services/CheckItem';
import CheckDirective from './services/CheckDirective';

import CheckAllDirective from './directives/CheckAll';
import CheckItemDirective from './directives/CheckItem';



angular
    .module('angular-checkbox', [])
    .factory('Checkboxer', serviceCheckboxer)
    .factory('CheckAll', serviceCheckAll)
    .factory('CheckItem', serviceCheckItem)
    .factory('CheckDirective', serviceCheckDirective)
    .directive('CheckAll', CheckAllDirective)
    .directive('CheckItem', CheckItemDirective);