export default function __func(CheckItem, Checkboxer) {

    return {
        template: '<div class="arm-checkbox-wrap">' +
        '<input type="checkbox">' +
        '<span class="arm-check-icon"></span>' +
        '</div>',
        replace: true,
        restrict: 'E',
        link: function(scope, element, attrs) {
            var checkboxer = scope.$eval(attrs.checkboxer),
                disabled = scope.$eval(attrs['ngDisabled']),
                item = scope.$eval(attrs['item']),
                input = element.find('input');

            if (!checkboxer instanceof Checkboxer) {
                throw new TypeError('"checkboxer" must be an instance of Checkboxer');
            }

            var check = new CheckItem({
                checkboxer: checkboxer,
                element: element,
                disabled: disabled,
                _item: item,
                _input: input
            });
        }
    }

}

__func.$inject = [
    'CheckItem',
    'Checkboxer'
];
