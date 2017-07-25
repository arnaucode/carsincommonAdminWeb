'use strict';

angular.module('app.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'views/user/user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', [function() {

}]);
