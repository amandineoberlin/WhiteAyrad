(function() {
  'use strict';

  angular.module('myApp')

    .directive('social', function() {
      return {
        templateUrl: '/components/social.html'
      };
    });
})();
