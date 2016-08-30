angular.module('ecommerce').controller('updateCtrl', function($scope, myService, $document){
  $scope.hidden = true;

  $scope.getProducts = function(){
    myService.getProducts().then(function(response){
      $scope.products = response.data.reverse();
    })
  };
  $scope.getProducts();
  $scope.delete = function(product, index){
    myService.delete(product._id).then(function(){
      $scope.products.splice(index, 1);
    });
  }

  $scope.add = function(productInput){
    myService.add(productInput).then(function(response){
      $scope.products.unshift(response.data);
    })

      $scope.productInput = '';
    }


    $scope.selected = -1;
    $scope.select = function(index){
        $scope.selected = index;
    }
    $scope.cancel = function(){


      $scope.selected = -1;
    }
    $scope.theUpdate = function(product, updateObj, index){
      var id = product._id;
      myService.update(id, updateObj).then(function(){
        $scope.getProducts();
      });
      $scope.selected = -1;


    }
  })
