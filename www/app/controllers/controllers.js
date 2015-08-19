angular.module( 'app.controllers', [] )
.controller( 'LoginCtrl', function ( $scope, $state, $localstorage, Login ) {

  var storedUser = $localstorage.getObject( 'user' );

  if ( typeof storedUser.username !== 'undefined' && typeof storedUser.password !== 'undefined' ) {
    Login
      .post( storedUser )
      .then( function ( response ) {
        console.dir( ['Success', response] );
        $state.go( 'tab.dashboard' );
      }, function ( error ) {
        console.error( 'Error', error );
    } );
   }

  $scope.login = function ( user ) {

    Login
      .post( user )
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
    //inital questions 
    $scope.questions  = Questions.getAll(); 
    
   $scope.search = ionic.debounce(function() {
                $scope.questions = Questions.search( $scope.query );
        }, 500);
    })
.controller( 'BookmarksCtrl', function ( $scope, Bookmarks ) {
  $scope.bookmarks = Bookmarks.all();
  $scope.remove = function( bookmark ) {
    Bookmarks.remove( bookmark );
  }

})
.controller( 'NewQuestionCtrl',function( $scope){ 
    
}) 
.controller( 'QuestionDetailCtrl', function ( $scope, $stateParams, Questions ) {
  console.log( $stateParams.questionId );
  $scope.question = Questions.getById( $stateParams.questionId );
} )

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
