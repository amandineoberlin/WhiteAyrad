'use strict';

angular.module('myApp.yellow', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/yellow', {
    templateUrl: 'yellow/yellow.html',
    controller: 'YellowCtrl'
  });
}])

.controller('YellowCtrl', [function() {

}]);
