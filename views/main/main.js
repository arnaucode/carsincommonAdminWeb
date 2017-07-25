'use strict';

angular.module('app.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'views/main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', function($scope, $http) {
    $scope.users = [];
    $scope.loadMorePagination = true;
    $scope.page = 0;

    $http.get(urlapi + 'users?page=' + $scope.page)
      .then(function(data) {
        console.log('data success');
        console.log(data);
        $scope.users=data.data;

      }, function(data) {
        console.log('data error');
      });
      $http.get(urlapi + 'travels?page=' + $scope.page)
        .then(function(data) {
          console.log('data success');
          console.log(data);
          $scope.travels=data.data;

        }, function(data) {
          console.log('data error');
        });
});
