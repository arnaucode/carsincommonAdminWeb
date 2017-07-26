'use strict';

angular.module('app.user', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user/:userid', {
            templateUrl: 'views/user/user.html',
            controller: 'UserCtrl'
        });
    }])

    .controller('UserCtrl', function($scope, $http, $routeParams) {
        $scope.user = {};
        $scope.likes = {};
        $http.get(urlapi + 'users/id/' + $routeParams.userid)
            .then(function(data, status, headers, config) {
                console.log('data success');
                console.log(data);

                $scope.user = data.data;
            }, function(data, status, headers, config) {
                console.log('data error');
            });
        $http.get(urlapi + 'users/id/likes/' + $routeParams.userid)
            .then(function(data, status, headers, config) {
                console.log('data success');
                console.log(data);
                $scope.likes = data.data;
                $scope.$broadcast('scroll.refreshComplete'); //refresher stop
            }, function(data, status, headers, config) {
                console.log('data error');
                $scope.$broadcast('scroll.refreshComplete'); //refresher stop
            });
    });
