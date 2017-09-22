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
        $scope.pageUsers = 0;
        $http.get(urlapi + 'users?page=' + $scope.pageUsers)
            .then(function(data) {
                console.log('data success');
                console.log(data);
                $scope.users = data.data;

            }, function(data) {
                console.log('data error');
            });

        $scope.travels = [];
        $scope.pageTravels = 0;
        $http.get(urlapi + 'travels?page=' + $scope.pageTravels)
            .then(function(data) {
                console.log('data success');
                console.log(data);
                $scope.travels = data.data;

            }, function(data) {
                console.log('data error');
            });

        $scope.admins=[];
        $scope.pageAdmins = 0;
        $http.get(urlapi + 'admins?page=' + $scope.pageAdmins)
            .then(function(data) {
                console.log('data success');
                console.log(data);
                $scope.admins = data.data;

            }, function(data) {
                console.log('data error');
            });
    });
