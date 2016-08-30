angular.module('ecommerce').controller('productsCtrl', function($scope, myService){
  $scope.hidden = false;
  $scope.getProducts = (function(){
    myService.getProducts().then(function(response){
      $scope.products = response.data;

    })
  })();
  $scope.addItem = function(product, currentUser){

    myService.addToCart(product, currentUser);
  }

  $scope.addUser = function(user){
    myService.addUser(user).then(function(response){
      $scope.currentUser = response.data;
      myService.currentUser = $scope.currentUser;
    })
  }
  $scope.getUser = function(user){
    myService.getUser(user).then(function(response){
      $scope.currentUser = response.data;
      myService.currentUser = $scope.currentUser;
  })

}

$scope.getAllUsers = function(){
  myService.getAllUsers().then(function(response){
    $scope.usernames = response.data;

})
}

$scope.deleteUser = function(user, index){
  myService.deleteUser(user._id).then(function(){
    $scope.usernames.splice(index, 1);
  });
}

})
