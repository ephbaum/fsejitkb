angular.module( 'app.controllers', [] )

.controller('LoginCtrl', function ($scope, $state, $http, $localstorage) {

  var storedUser = $localstorage.getObject( 'user' );
  if ( typeof storedUser.username !== 'undefined' && typeof storedUser.password !== 'undefined' ) {
    $http
      .post( 'https://dev.mtsecho.com/knowledge/login', storedUser )
      .then( function ( response ) {
        console.dir( ['Success', response] );
        $state.go( 'tab.dashboard' );
      }, function ( error ) {
        console.error( 'Error', error );
    } );
   }

  $scope.login = function (user) {

    console.dir( ['Login', user] );

    $http
      .post( 'https://dev.mtsecho.com/knowledge/login', user )
      .then( function ( response ) {
        console.dir( ['Success', response] );
        $localstorage.setObject( 'user', user );
        $state.go( 'tab.dashboard' );
      }, function ( error ) {
       console.error( 'Error', error );
    });

  };
})

.controller( 'DashboardCtrl', function ( $scope, Questions) {
    $scope.questions = Questions.all(); 
} )

.controller( 'BookmarksCtrl', function ( $scope, Bookmarks ) {
  $scope.bookmarks = Bookmarks.all();
  $scope.remove = function( bookmark ) {
    Bookmarks.remove( bookmark );
  }
})

.controller( 'BookmarksDetailCtrl', function( $scope, $stateParams, Bookmarks ) {
  $scope.bookmark = Bookmarks.get( $stateParams.bookmarkId );
})

.controller( 'SettingsCtrl', function( $scope ) {
  $scope.settings = {
    enablePush: true,
    enableSMS: false,
    enableEmail: false
  };
});