/*
  @author Diogo Giomo
  @since 06/08/2016
*/
angular.module('app.login', [])
  .controller('LoginCtrl', function ($scope, $location) {
      $scope.title = 'View 1';
      $scope.body = 'View 1';

      $scope.login = function(){
        localStorage.setItem("logged", "true");
        $location.url('home');
      }
  })
