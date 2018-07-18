var app = angular.module('myApp', []);



app.controller('customersCtrl', function($scope, $http) {
    $http.get("MOCK_DATA.JSON").then(function (response) {
        $scope.myData = response.data;

    });
});


