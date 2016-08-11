var app = angular.module("myApp", ['ngRoute', 'ngResource'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    }).
    when('/about', {
        templateUrl: 'about.html',
        controller: 'MainCtrl'
    }).
    when('/services', {
        templateUrl: 'services.html',
        controller: 'ServicesCtrl'
    }).
    when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
    }).
    otherwise({ redirectTo: '/main' });

    $locationProvider.html5Mode(true);
}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('services.json').then(function(response) {
        $scope.services = response.data;
    });
}])

.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('services.json').then(function(response) {
        $scope.services = response.data;
    });
}])

.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('locations.json').then(function(response) {
        $scope.locations = response.data;
    });
}]);
