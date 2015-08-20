angular.module( 'app.controllers' )
.controller( 'LoginCtrl', function ( $scope, $state, $ionicPopup, $localstorage, Login ) {
  var storedUser = $localstorage.getObject( 'user' );
  $scope.showLogin = false;
  $scope.showErrorAlert = function ( title, template ) {
    var alertPopup = $ionicPopup.alert( {
      title: ( title.length > 0 ) ? title : 'Error',
      template: ( template.length > 0 ) ? template : 'There was an unknown error, which is a little terrifying.'
    } );
    alertPopup.then( function ( res ) {
      console.log( 'Alert dismissed.' );
    } );
  };
  $scope.login = function ( user ) {
    Login
      .post( user )
      .then( function ( response ) {
        if ( response.data.response === 'success' ) {
          $localstorage.setObject( 'user', user );
          $state.go( 'tab.dashboard' );
        } else {
          $scope.showLogin = true;
          $scope.showErrorAlert( 'Login Error', response.data.msg );
        }
      }, function ( error ) {
        $scope.showLogin = true;
        $scope.showErrorAlert( 'Login Error', 'There was an error communicating with the server. Please try again later.' );
        console.error( 'Error', error );
      } );
  };
  if ( typeof storedUser.login !== 'undefined' && typeof storedUser.password !== 'undefined' ) {
    $scope.login( storedUser );
  } else {
    $scope.showLogin = true;
  }
} );