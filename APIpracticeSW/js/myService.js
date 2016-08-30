angular.module("app").service("myService", function($http, $q){
this.getData = function(){
  var deferred = $q.defer();
  $http({
    method: "GET",
    url: "http://swapi.co/api/people/"
  }).then(function(response){
    var people = response.data.results;
    var picArr = ["http://www.disneyme.com/sites/default/files/Star%20Wars/In%20page%20assets/sw_cutout_luke-skywalker.jpg", "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png", "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png", "http://cdn.shopify.com/s/files/1/0346/5761/products/sw-esb-vader-1.png", "http://vignette4.wikia.nocookie.net/disney/images/7/7f/Princess_Leia_render.png", "http://2.bp.blogspot.com/-AVdOOZtVWRQ/UU77qfmYkJI/AAAAAAAAARc/bIsuZnNzdPw/s1600/owenlars_detail%5B1%5D.png", "https://s-media-cache-ak0.pinimg.com/236x/ed/ab/bf/edabbf144f737a254da7e169c893e1be.jpg", "http://www.jeditemplearchives.com/swexperience/toyfair2011/hasbro/press/images/020-TVC-R5-D4.jpg", "http://www.toysrus.com/graphics/tru_prod_images/Star-Wars-The-Black-Series--pTRU1-15547123dt.jpg", "http://www.disney.co.uk/sites/default/files/Star%20Wars/In%20page%20assets/sw_cutout_obi-wan.jpg"];
for(var i = 0; i < people.length; i++){
  people[i].pic = picArr[i];

  
}
    deferred.resolve(people);
  })
return deferred.promise;

}



})
