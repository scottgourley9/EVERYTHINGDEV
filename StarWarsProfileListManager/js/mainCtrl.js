angular.module("app").controller("mainCtrl", function($scope, myService){

  $scope.getParseData = function(){
    myService.getData().then(function(response){
      $scope.charList = response.data.results;


    })
  }
$scope.getParseData();


$scope.hidden = "hide";


$scope.hide = function(){
$scope.hideIt = !$scope.hideIt;
if($scope.hideIt){
  $scope.hidden = "show";

}
else {
  $scope.hidden = "hide";
}
}


$scope.remove = function(i) {
  $scope.charList.splice(i, 1);
}





})
