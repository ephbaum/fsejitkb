angular.module( 'app.controllers' )
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
} );