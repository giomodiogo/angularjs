/*
  @author Diogo Giomo
  @since 06/08/2016
*/
angular.module('app', ['app.login', 'app.home', 'app.view1', 'app.view2', 'ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: 'views/login.html', controller: 'LoginCtrl'}).
            when('/home', {templateUrl: 'views/home.html', controller: 'HomeCtrl'}).
            when('/view1', {templateUrl: 'views/view1.html', controller: 'View1Ctrl'}).
            when('/view2', {templateUrl: 'views/view2.html', controller: 'View2Ctrl'})//.
            //otherwise({redirectTo: '/login'});
    })
    .run( function($rootScope, $location) {
      localStorage.setItem("logged", "false");
      $rootScope.view = 'login';
      $location.url('login');
      $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        console.log("Change router!");
        if(localStorage.getItem('logged') === "true"){
          $rootScope.view = 'app';
        }
      });
    })
