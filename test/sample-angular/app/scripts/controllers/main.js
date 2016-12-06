'use strict';

/**
 * @ngdoc function
 * @name sampleAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAngularApp
 */
angular.module('sampleAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
