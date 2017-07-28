'use strict';

angular.module('app.navbar', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/navbar', {
            templateUrl: 'views/navbar/navbar.html',
            controller: 'NavbarCtrl'
        });
    }])

    .controller('NavbarCtrl', function($scope, $http, $routeParams, $location) {
        $scope.searchString="";
        $scope.locationHash = $location.path();
        console.log($scope.locationHash);
        $scope.goBack = function() {
            console.log("goBack");
            window.history.back();
        };

        $scope.search = function() {
            console.log($scope.searchString);
            window.location.href="#!/search/" + $scope.searchString;
        };
    });
