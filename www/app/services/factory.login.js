angular.module( 'app.services' )
.factory( 'Login', function ( $http ) {
  return {
    post: function ( userObject ) {
      var options = {
        url: 'https://dev.mtsecho.com/knowledge/login',
        // url: 'https://echo.localhost/knowledge/login',
        headers: {
          'X-Security-Tag': 'fsejitkb'
        },
        method: 'post',
        data: userObject
      }
      return $http( options );
    }
  }
} );