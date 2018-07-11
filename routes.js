var app = angular.module('main', [
    'ngRoute']);
  
  app.config(['$routeProvider',
    function($routeProvider) {

      $routeProvider.when('/home', {
          templateUrl: 'views/home.html',
          controller: 'Home'
        })
        .when('/', {
            templateUrl: 'views/landing.html',
            controller: 'Landing'
          })
        .otherwise({
          redirectTo: '/'
        });
    }]);
  