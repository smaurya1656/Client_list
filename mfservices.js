var app = angular.module('myApp', []);


app.service('myservice',function( $http ) {
   this.getdata=function(){
       return $http.get("MOCK_DATA.JSON");
   };
});

app.controller('customersCtrl', function($scope, myservice) {
    myservice.getdata().then(function (response) {
        $scope.myData = response.data;

    });
});