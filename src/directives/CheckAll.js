
export default function __func(CheckAll, Checkboxer) {

    return {
        link: function(scope, element, attrs) {
            var checkboxer = scope.$eval(attrs.checkboxer);
            if (!checkboxer instanceof Checkboxer) {
                throw new TypeError('"checkboxer" must be an instance of Checkboxer');
            }

            var check = new CheckAll({
                checkboxer: checkboxer,
                element: element,
                scope: scope
            });
        }
    }

}

__func.$inject = [
    'CheckAll',
    'Checkboxer'
];