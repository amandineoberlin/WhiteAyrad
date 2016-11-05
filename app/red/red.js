'use strict';

angular.module('myApp.red', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/red', {
    templateUrl: 'red/red.html',
    controller: 'RedCtrl'
  });
}])

.controller('RedCtrl', [
  '$scope',
  '$css',
  function($scope, $css) {
    $css.removeAll();
    $css.add('red/red.css');

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
