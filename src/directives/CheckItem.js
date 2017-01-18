
export default function __func(CheckItem, Checkboxer) {

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            var checkboxer = scope.$eval(attrs.checkboxer);

            if (!checkboxer instanceof Checkboxer) {
                throw new TypeError('"checkboxer" must be an instance of Checkboxer');
            }

            var check = new CheckItem({
                checkboxer: checkboxer,
                element: element,
                ngModel: ngModel
            });
        }
    }

}

__func.$inject = [
    'CheckItem',
    'Checkboxer'
];