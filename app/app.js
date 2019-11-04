'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.service',
  'ngMaterial'
]).
config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/today'});

  $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('teal')
      .warnPalette('red')
      .backgroundPalette('grey');
}]);



