angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/');


$stateProvider
.state('home', {
  url: '/',
  templateUrl: 'views/home.html',
  controller: 'homeCtrl'
})
.state('about', {
  url: '/about',
  templateUrl: 'views/about.html',
  controller: 'aboutCtrl'
})
.state('pics', {
  url: '/pics/:id',
  templateUrl: 'views/pics.html',
  controller: 'picsCtrl'
})



});
