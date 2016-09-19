'use strict';

angular.module('myApp.red', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/red', {
    templateUrl: 'red/red.html',
    controller: 'RedCtrl'
  });
}])

.controller('RedCtrl', [function() {

}]);
