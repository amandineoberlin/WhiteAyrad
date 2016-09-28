(function() {
  'use strict';

  angular.module('myApp')

    .directive('electric', function() {
      return {
        templateUrl: '/components/electric.html',
        scope: {
          color: '@'
        },
      };
    });
})();
