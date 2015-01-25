angular.module("demo1")
.controller("FirstCtrl", function($scope, Auth){
  $scope.name = "darko";
  $scope.lastName = "antic";
  $scope.fullName = function() {
    return $scope.name + " "  + $scope.lastName
  }
})
alert(Auth.login('ale','1234'));