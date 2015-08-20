angular.module( 'app.services' )
.factory( 'Questions', function ( $resource ) {
  var resource = $resource( 'https://dev.mtsecho.com/knowledge/question/:query'
    , { query: '@query' }
    , { 'get': { method: 'GET', isArray: true } }
  );

  return {
    search: function( query ) {
      return resource.get( { query: query }, function () { } );
    },
    getById: function( id ) {
      return resource.get( { query: id }, function () { } );
    },
    getAll: function() {
      return resource.query();
    }
  };    
});
