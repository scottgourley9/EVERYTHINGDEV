angular.module('ecommerce').service('myService', function($http, $q){

  this.addToCart = function(product, currentUser){

    return $http({
      method: 'PUT',
      url: '/api/cart/' + currentUser._id,
      data: product
    })
  }
  this.getCartItems = function(currentUser){
    return $http({
      method: 'GET',
      url: '/api/cart/' + currentUser._id
    })
  }
  this.removeCartItem = function(id, user){
    return $http({
      method: 'PUT',
      url: '/api/removeItem/' + id,
      data: user
    })
  }

  this.getProducts = function(){
    return $http({
      method: 'GET',
      url: '/api/products'
    })
  }
  this.delete = function(id){
    return $http({
      method: 'DELETE',
      url: '/api/products/' + id
    })
  }
  this.add = function(userInput){
    return $http({
      method: 'POST',
      url: '/api/products',
      data: userInput
    })
  }
  this.update = function(id, updateObj){
    return $http({
      method: "PUT",
      url: '/api/products/' + id,
      data: updateObj
    })
  }
  this.getItem = function(id){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: '/api/products/' + id
    }).then(function(response){
      var data = response.data;
      deferred.resolve(data);
    })
    return deferred.promise;
  }


  this.addUser = function(user){
    return $http({
      method: "POST",
      url: "/api/users",
      data: {username: user}
    })
  }
  this.getUser = function(username){
    return $http({
      method: "GET",
      url: "/api/users/" + username
    })
  }
  this.getAllUsers = function(){
    return $http({
      method: "GET",
      url: "/api/users"
    })
  }
  this.deleteUser = function(id){
    return $http({
      method: 'DELETE',
      url: '/api/users/' + id
    })
  }


this.currentUser = 0;





})
