angular.module("demo1")
.controller("SecondCtrl", function($scope){
  $scope.country = "austria";
  $scope.yourCountry = function() {
    return $scope.country + " is your country "
  }
})