angular.module( 'app.controllers' )
.controller( 'SettingsCtrl', function ( $scope, $state, $localstorage ) {
  $scope.settings = {
    enablePush: true,
    enableSMS: true,
    enableEmail: true
  };
  $scope.logout = function () {
    $localstorage.remove( 'user' );
    $state.go( 'login' );
  };
} );