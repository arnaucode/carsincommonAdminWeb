'use strict';

var urlapi = "http://localhost:3000/api/";
//var urlapi = "http://192.168.1.36:3000/api/";
//var urlapi = "http://51.255.193.106:3000/api/";

// Declare app level module which depends on views, and components
angular.module('adminApp', [
  'ngRoute',
  'ngMessages',
  'angularBootstrapMaterial',
  'app.main',
  'app.user',
  'app.travel'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);
