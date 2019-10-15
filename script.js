var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences").then(function (response) {
    $scope.myData = response.data.Paid;
      if($scope.fee=="Paid"){
                $scope.myData = response.data.paid;
      }
      else{
              $scope.myData = response.data.free;
      }
      // $scope.myData+=response.data.free;
      // $scope.myData += response.data.free;
  });
});
