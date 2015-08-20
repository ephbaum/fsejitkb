angular.module( 'FSE-JiTKb-App', ['ionic', 'app.controllers', 'app.services', 'ngResource'] )
.run( function ( $ionicPlatform ) {
  $ionicPlatform.ready( function () {
    if ( window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard ) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
    }
    if ( window.StatusBar ) {
      StatusBar.styleLightContent();
    }
  } );
} );

// Create Controllers Module
angular.module( 'app.controllers', [] );

// Create Services Module
angular.module( 'app.services', [] );