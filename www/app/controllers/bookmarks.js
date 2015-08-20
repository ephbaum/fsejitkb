angular.module( 'app.controllers' )
.controller( 'BookmarksCtrl', function ( $scope, Bookmarks ) {
  $scope.bookmarks = Bookmarks.all();
  $scope.remove = function ( bookmark ) {
    Bookmarks.remove( bookmark );
  }
} );
