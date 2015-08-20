angular.module( 'app.services' )
.factory( 'Bookmarks', function () {

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
});