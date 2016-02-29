// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('atudo', ['ionic', 'ngCordova', 'highway.controllers', 'surroundings.controllers', 'map.controllers', ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusbar.styleColor('white');
    }
    
    if(window.StatusBar) {
      StatusBar.styleLightContent();
    }

  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
}])

.config(function($stateProvider, $urlRouterProvider) {
  document.body.classList.remove("platform-ios");
  document.body.classList.remove("platform-android");
  document.body.classList.add("platform-ios");
  document.body.classList.add("platform-android");
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('highway', {
    url: '/highway',
    templateUrl: 'templates/highway.html',
    controller: 'highwayCtrl'
  })

  .state('surroundings', {
    url: '/surroundings',
    templateUrl: 'templates/surroundings.html',
    controller: 'surroundingsCtrl'
  })

  .state('map', {
    url: '/map',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/highway');

});