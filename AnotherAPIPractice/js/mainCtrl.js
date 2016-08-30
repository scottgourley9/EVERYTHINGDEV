angular.module('app').controller("mainCtrl", function($scope, myService){
  $scope.getData = function(){
    myService.getData($scope.userSelection).then(function(responseInfo){
      $scope.items = responseInfo.results;
    })
  }
})
