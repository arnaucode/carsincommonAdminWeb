'use strict';

//var urlapi = "http://localhost:3000/api/";
//var urlapi = "http://192.168.1.36:3000/api/";
var urlapi = "http://37.59.123.45:3000/api/";

// Declare app level module which depends on views, and components
angular.module('adminApp', [
  'ngRoute',
  'ngMessages',
  'angularBootstrapMaterial',
  'app.navbar',
  'app.signup',
  'app.login',
  'app.main',
  'app.search',
  'app.travels',
  'app.user',
  'app.travel',
  'app.network',
  'app.userNetwork'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  //$routeProvider.otherwise({redirectTo: '/main'});
  if((localStorage.getItem('cic_admin_token')))
    {
      console.log(window.location.hash);
      if((window.location.hash==='#!/login')||(window.location.hash==='#!/signup'))
      {
        window.location='#!/main';
      }

      $routeProvider.otherwise({redirectTo: '/main'});
    }else{
      if((window.location!=='#!/login')||(window.location!=='#!/signup'))
      {
        console.log('app, user no logged');

        localStorage.removeItem('cic_admin_token');
        localStorage.removeItem('cic_admin_userdata');
        window.location='#!/login';
        $routeProvider.otherwise({redirectTo: '/login'});
      }
    }
}])

.factory('httpInterceptor', function httpInterceptor () {
  return {
    request: function(config) {
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
      return res;
    },

    responseError: function(res) {
      return res;
    }
  };
})
.factory('api', function ($http) {
	return {
		init: function () {
      $http.defaults.headers.common['X-Access-Token'] = localStorage.getItem('cic_admin_token');
      $http.defaults.headers.post['X-Access-Token'] = localStorage.getItem('cic_admin_token');
		}
	};
})
.run(function (api) {
	api.init();
});
