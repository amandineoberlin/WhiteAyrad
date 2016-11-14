'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularCSS',
  'myApp.home',
  'myApp.purple',
  'myApp.red',
  'myApp.version',
  'plangular'
]).
config(['$locationProvider', '$routeProvider', 'plangularConfigProvider',
  function($locationProvider, $routeProvider, plangularConfigProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
    plangularConfigProvider.clientId = '[d30a1fa416f07759091d5c6bcbe97e48]';
  }]);
