angular.module('myApp', ['ngRoute', 'ui.bootstrap'])
  .controller('MainCtrl', function($scope){
    $scope.title = "Index";
    $scope.content = "Main content";
  })

  .controller('UserCtrl', function($scope, $http) {
    $scope.title = "Users"
    $http.get("/data/users").success(function(response){
      console.log(response);
        $scope.users = response;
    });
    $scope.content = "User Page";
  })

  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
          templateUrl: 'partials/main.html',
          controller: 'MainCtrl'
      })
      .when('/users', {
          templateUrl: 'partials/users.html',
          controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
