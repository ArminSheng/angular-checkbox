
export default function __func(CheckAll, Checkboxer) {

    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
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
    }

}

__func.$inject = [
    'CheckAll',
    'Checkboxer'
];