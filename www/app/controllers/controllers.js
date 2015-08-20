angular.module( 'app.controllers', [] )
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
})
.controller( 'DashboardCtrl', function ( $scope, $state, Questions ) {
  $scope.questions = Questions.getAll();
  $state.go( 'tab.dashboard.question-list' );
  $scope.search = ionic.debounce( function () {
    $scope.questions = Questions.search( $scope.query );
  }, 500 );
} )
.controller( 'BookmarksCtrl', function ( $scope, Bookmarks ) {
  $scope.bookmarks = Bookmarks.all();
  $scope.remove = function( bookmark ) {
    Bookmarks.remove( bookmark );
  }
})
.controller( 'NewQuestionCtrl',function( $scope){ 
    
}) 
.controller( 'QuestionDetailCtrl', function ( $scope, $stateParams, Questions ) {
  $scope.questions = {};
  $scope.answers = [];
  var response = Questions.getById( $stateParams.questionId );
  response
    .$promise
    .then( function ( data ) {
      for ( var i = data.length - 1; i >= 0; i-- ) {
        if ( data[i].postIsQuestion == 1 ) {
          $scope.question = data[i];
        } else {
          $scope.answers.push( data[i] );
        }
      }
    } );
} )

.controller( 'BookmarksDetailCtrl', function( $scope, $stateParams, Bookmarks ) {
  $scope.bookmark = Bookmarks.get( $stateParams.bookmarkId );
})
.controller( 'SettingsCtrl', function( $scope, $localstorage ) {
  $scope.settings = {
    enablePush: true,
    enableSMS: true,
    enableEmail: true
  };
  $scope.logout = function () {
    $localstorage.remove( 'user' );
    $window.location.reload( false );
  };
});
