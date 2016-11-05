'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {


    $('#purpleMenu').click(function() {
      $('head').append('<link rel="stylesheet" href="purple/purple.css" type="text/css" />');
    });

}]);
