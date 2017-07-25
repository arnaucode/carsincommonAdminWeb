'use strict';

// Declare app level module which depends on views, and components
angular.module('adminApp', [
  'ngRoute',
  'ngMessages',
  'angularBootstrapMaterial',
  'app.main',
  'app.user'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/main'});
}]);
