'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [
  '$css',
  function($css) {
  $css.removeAll();
  $css.add('home/home.css');

  $('.thumb').mouseover(function() {
    var self = $(this);
    setTimeout(function() {
      self.removeClass("shake-opacity");
    }, 200);
  });
  $('.thumb').mouseout(function() {
    var self = $(this);
    setTimeout(function() {
      self.addClass("shake-opacity");
    }, 200);
  });

}]);
