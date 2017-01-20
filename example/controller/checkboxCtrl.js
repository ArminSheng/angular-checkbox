var checkbox = angular.module("checkbox", ['angularCheckbox']);

checkbox
    .controller('checkboxCtrl', function($scope, Checkboxer) {
        // init checkboxer
        var checkboxer = $scope.checkboxer = new Checkboxer({
            scope: $scope,
            size: 's'
        });

        $scope.list = [
            { id: 1, name: 'item1', status: false },
            { id: 2, name: 'item2', status: false },
            { id: 3, name: 'item3', status: false },
            { id: 4, name: 'item4', status: true },
            { id: 5, name: 'item5', status: true },
            { id: 6, name: 'item6', status: false },
            { id: 7, name: 'item7', status: true },
            { id: 8, name: 'item8', status: false },
            { id: 9, name: 'item9', status: false },
            { id: 10, name: 'item10', status: false },
            { id: 11, name: 'item10', status: false },
            { id: 12, name: 'item10', status: false },
        ];

        $scope.doClick = function() {
            console.log($scope.checkboxer.getSeletedItems())
            $scope.selectedItems = $scope.checkboxer.getSeletedItems()
            // checkboxer.clearQueue();
        }

        $scope.$watch('checkboxer.checkAll', function(olval, newVal) {
            console.log(olval, newVal)
        })
    });