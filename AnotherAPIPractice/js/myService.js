angular.module('app').service('myService', function($http, $q){
  this.getData = function(userSelection){
    var deferred = $q.defer();
    $http({
      method: "GET",
      url: "http://swapi.co/api/" + userSelection
    }).then(function(response){
      var theData = response.data;
      deferred.resolve(theData);
    })
    return deferred.promise;
  }


})
