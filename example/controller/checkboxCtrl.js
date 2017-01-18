var checkbox = angular.module("checkbox", []);

checkbox
    .controller('checkboxCtrl', function($scope) {
        $scope.checkAll = false;
        $scope.list = [
            { id: 1, name: 'armin1', status: false },
            { id: 2, name: 'armin1', status: false },
            { id: 2, name: 'armin1', status: false },
            { id: 3, name: 'armin1', status: true },
            { id: 4, name: 'armin4', status: true },
            { id: 2, name: 'armin1', status: false },
            { id: 4, name: 'armin4', status: true },
            { id: 4, name: 'armin4', status: true },
            { id: 4, name: 'armin4', status: true },
            { id: 4, name: 'armin4', status: true },
        ];

        $scope.doClick = function() {
            console.log($scope.list)
        }
    })

.directive('checkAll', function($rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            element.bind('click', function() {
                $rootScope.$broadcast('eventCheck.All', { checkAll: model.$modelValue });
            });

            // scope.$on('eventCheck.item', function(e, data) {
            //     isFull();
            // });

            // function isFull() {
            //   var full = true;
            //   angular.forEach(scope.$eval(attrs.checkAll), function(item) {
            //     if (item.checked === false) {
            //       full = false;
            //     }
            //   });

            //   check(model, full);
            // }

            // function _init() {
            //   var list = scope.$eval(attrs.checkAll);

            //   list.forEach(function(item) {});
            // }
        }
    }
})

.directive('checkItem', function($rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var isDisabled = scope.$eval(attrs['ngDisabled']);

            console.log(element[0].checked)

            scope.$on('eventCheck.All', function(e, data) {
                if (isDisabled) return;
                check(model, data.checkAll)
                // element[0].click()
                // element[0].checked = data.checkAll
                console.log(scope.item.checked + 'all')
            });


            element.bind('click', function() {
              // $rootScope.$broadcast('eventCheck.item');
              console.log(scope.item.checked)
            });



        }
    }
})

function check(model, check) {
    model.$setViewValue(check);
    model.$render();
}
