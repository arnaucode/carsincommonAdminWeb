'use strict';

angular.module('app.travel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travel/:travelid', {
    templateUrl: 'views/travel/travel.html',
    controller: 'TravelCtrl'
  });
}])

.controller('TravelCtrl', function($scope, $http, $routeParams) {
    $scope.travel = {};
    $http.get(urlapi + 'travels/id/' + $routeParams.travelid)
      .then(function(data, status, headers, config) {
        console.log('data success');
        console.log(data);

        $scope.travel = data.data;
      }, function(data, status, headers, config) {
        console.log('data error');
      });
});
