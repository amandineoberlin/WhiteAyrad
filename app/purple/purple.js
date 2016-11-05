'use strict';

angular.module('myApp.purple', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/purple', {
    templateUrl: 'purple/purple.html',
    controller: 'PurpleCtrl'
  });
}])

.controller('PurpleCtrl', [
  '$scope',
  '$css',
  function($scope, $css) {
  $css.removeAll();
  $css.add('purple/purple.css');

    //svg hide/show logic
    $('#svgActive').css({ display: 'none' });
    $(".menu").mouseover(function() {
      $('#svgActive').css({ display: 'inline' });
      $('#svgStatic').css({ display: 'none' });
    });
    $(".menu").mouseout(function() {
      $('#svgActive').css({ display: 'none' });
      $('#svgStatic').css({ display: 'inline' });
    });
}]);
