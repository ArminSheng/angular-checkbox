export default function __func(CheckItem, Checkboxer) {

    return {
        link: function(scope, element, attrs) {
            var checkboxer = scope.$eval(attrs.checkboxer),
                disabled = scope.$eval(attrs['ngDisabled']),
                item = scope.$eval(attrs['checkItem']);

            if (!checkboxer instanceof Checkboxer) {
                throw new TypeError('"checkboxer" must be an instance of Checkboxer');
            }

            var check = new CheckItem({
                checkboxer: checkboxer,
                element: element,
                disabled: disabled,
                _item: item
            });
        }
    }

}

__func.$inject = [
    'CheckItem',
    'Checkboxer'
];
