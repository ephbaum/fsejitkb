angular.module( 'app.controllers' )
.controller( 'BookmarksDetailCtrl', function ( $scope, $stateParams, Bookmarks ) {
  $scope.bookmark = Bookmarks.get( $stateParams.bookmarkId );
} );