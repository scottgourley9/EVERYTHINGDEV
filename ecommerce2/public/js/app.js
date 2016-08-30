angular.module('ecommerce', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('products', {
    url: '/',
    templateUrl: 'views/products.html',
    controller: 'productsCtrl'
  })
  .state('update', {
    url: '/update',
    templateUrl: 'views/update.html',
    controller: 'updateCtrl'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: 'views/cart.html',
    controller: 'cartCtrl'
  })




})
