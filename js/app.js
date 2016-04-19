var phonecatApp = angular.module('phonecatApp', ['ngRoute','HomePageController']);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/home', {
        templateUrl: 'partials/insideHome.html',
        controller: 'insideHomeController'
      }).
      otherwise({
        redirectTo: ''
      });
  }]);
