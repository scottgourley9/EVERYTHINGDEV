angular.module("app").service("myService", function($http){

  this.getData = function(){
      var promise = $http({
        method: "GET",
        url: 'http://swapi.co/api/people/'
      })
      return promise;
    }


});
