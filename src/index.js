import Checkboxer from './services/Checkboxer';
import CheckAll from './services/CheckAll';

angular
    .module('angular-checkbox', [])
    .factory('serviceCheckboxer', Checkboxer)
    .factory('serviceCheckAll', CheckAll)