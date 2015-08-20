angular.module( 'app.controllers' )
.controller( 'DashboardCtrl', function ( $scope, $state, Questions ) {
  $scope.questions = Questions.getAll();
  $scope.search = ionic.debounce( function () {
    $scope.questions = Questions.search( $scope.query );
  }, 500 );
} );