'use strict';

angular.module('myApp.purple', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/purple', {
    templateUrl: 'purple/purple.html',
    controller: 'PurpleCtrl'
  });
}])

.controller('PurpleCtrl', [function() {

}]);
