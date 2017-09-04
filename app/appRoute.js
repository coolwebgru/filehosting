angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {
  	$routeProvider
  		// home page
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'HomeController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'HomeController'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'HomeController'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HomeController'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'HomeController'
      })
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'HomeController'
      })
  		.otherwise('/', {
  			templateUrl: 'views/home.html',
  			controller: 'HomeController'
  		});
}]);
