angular.module('ecommerce').controller('cartCtrl', function($scope, myService){
$scope.getCartItems = (function(){
  myService.getCartItems(myService.currentUser).then(function(response){
    $scope.cartItems = response.data;
  })
})();

$scope.removeItem = function(id, index){
  myService.removeCartItem(id, myService.currentUser).then(function(){
    $scope.cartItems.splice(index, 1);
  });
}


})
