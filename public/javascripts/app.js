angular.module('myApp', ['ngRoute', 'ui.bootstrap'])

  .controller('MainCtrl', function($scope, $modal){
    $scope.title = "PizzaHut Clone";
    $scope.content = "Select a Pizza to Start";
    $scope.animationsEnabled = true;

    $scope.open = function (size) {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'partials/order.html',
        controller: 'ModalCtrl',
        resolve: {
          items: function () {
            return size;
          }
        }
      });
    };
  })

  .controller('ModalCtrl', function($scope, $modalInstance, items) {
    $scope.title = "Customize - " + items;

    if (items.indexOf("own") > -1 ){
      console.log(items);
    }
    $scope.items = items;

    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  })

  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
          templateUrl: 'partials/main.html',
          controller: 'MainCtrl'
      })
      .when('/customize/:name', {
          templateUrl: 'partials/customize.html',
          controller: 'ModalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
