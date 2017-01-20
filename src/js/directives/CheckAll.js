export default function __func(CheckAll, Checkboxer) {

    return {
        template: '<div class="arm-checkbox-wrap">' +
        '<input type="checkbox">' +
        '<span class="arm-check-icon"></span>' +
        '</div>',
        replace: true,
        restrict: 'E',
        link: function(scope, element, attrs) {
            var checkboxer = scope.$eval(attrs.checkboxer),
                input = element.find('input');

            if (!checkboxer instanceof Checkboxer) {
                throw new TypeError('"checkboxer" must be an instance of Checkboxer');
            }

            var check = new CheckAll({
                checkboxer: checkboxer,
                element: element,
                scope: scope,
                _input: input
            });
        }
    }

}

__func.$inject = [
    'CheckAll',
    'Checkboxer'
];