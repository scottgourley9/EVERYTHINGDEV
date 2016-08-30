angular.module('app').controller("mainCtrl", function($scope, myService){

$scope.getPeople = (function(){
  myService.getData().then(function(dataFromService){
    $scope.people = dataFromService;

})
})();






$scope.selected = -1;

    $scope.select = function(index) {
       $scope.selected = index;
    };
})
