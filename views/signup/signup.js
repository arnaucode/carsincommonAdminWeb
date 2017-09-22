'use strict';

angular.module('app.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'views/signup/signup.html',
    controller: 'SignupCtrl'
  });
}])

.controller('SignupCtrl', function($scope, $http, $routeParams) {
    $scope.user = {};
    $scope.doLogin = function() {
      console.log('Doing login', $scope.user);

      $http({
          url: urlapi + 'admin/signup',
          method: "POST",
          data: $scope.user
      })
      .then(function(response) {
              console.log("response: ");
              console.log(response.data);
              if (response.data.success == true)
              {
                  localStorage.setItem("cic_admin_token", response.data.token);
                  localStorage.setItem("cic_admin_userdata", JSON.stringify(response.data.user));
                  window.location.reload();
              }else{
                  console.log("login failed");
              }


      },
      function(response) { // optional
              // failed
              console.log(response);
      });

    };
});
