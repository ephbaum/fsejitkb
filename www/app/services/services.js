angular.module('app.services', [])

.factory('Bookmarks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var bookmarks = [{
    id: 0,
    title: 'Question One',
    question: 'Why is the sky blue?',
  }, {
    id: 1,
    title: 'Question Two',
    question: 'Where are my car keys?',
  }, {
    id: 2,
    title: 'Question Three',
    question: 'Where are your car keys?',
  }, {
    id: 3,
    title: 'Question Four',
    question: 'Who am I?',
  }, {
    id: 4,
    title: 'Question Five',
    question: 'What am I doing here?',
  }];

  return {
    all: function() {
      return bookmarks;
    },
    remove: function( bookmark )  {
      bookmarks.splice( bookmarks.indexOf( bookmark ), 1);
    },
    get: function( bookmarkId ) {
      for ( var i = 0; i < bookmarks.length; i++ ) {
        if ( bookmarks[i].id === parseInt( bookmarkId ) ) {
          return bookmarks[i];
        }
      }
      return null;
    }
  };
})
.factory( 'Questions', function( $resource ){
  var resource = $resource( 'https://dev.mtsecho.com/knowledge/question/:query', { query: '@query' }, { 'get': { method: 'GET', isArray: true } } );

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
})
.factory('$localstorage', ['$window', function ( $window ) {
  return {
    set: function ( key, value ) {
      $window.localStorage[key] = value;
    },
    get: function ( key, defaultValue ) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function ( key, value ) {
      $window.localStorage[key] = JSON.stringify( value );
    },
    getObject: function ( key ) {
      return JSON.parse( $window.localStorage[key] || '{}' );
    }
  }
}] )
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
} )
.directive( 'ngEnter', function () {
  return function ( scope, element, attrs ) {
    element.bind( "keydown keypress", function ( event ) {
      if ( event.which === 13 ) {
        scope.$apply( function () {
          scope.$eval( attrs.ngEnter );
        } );

        event.preventDefault();
      }
    } );
  };
} );;
