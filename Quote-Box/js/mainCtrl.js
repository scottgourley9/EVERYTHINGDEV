angular.module("app").controller("mainCtrl", function($scope, myService){

  $scope.getQuoteList = (function(){
    $scope.list = myService.getData();
  })();
$scope.remove = function(i){
  myService.delete(i);

}

$scope.add = function(input){
myService.addData(input);

}

$scope.removeQuote = function(input){
  myService.removeData(input);

}

})
