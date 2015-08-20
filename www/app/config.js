angular.module( 'FSE-JiTKb-App' )
.config( function ( $stateProvider, $urlRouterProvider ) {
  $stateProvider
    .state( 'login', {
      url: '/login',
      templateUrl: '/app/templates/login.html',
      controller: 'LoginCtrl'
    } )
    .state( 'forgotpassword', {
      url: '/forgot-password',
      templateUrl: '/app/templates/forgot-password.html'
    } )
    .state( 'tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "/app/templates/tabs.html"
    } )
    .state( 'tab.dashboard', {
      url: '/dashboard',
      views: {
        'tab-dashboard': {
          templateUrl: '/app/templates/tab-dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    } )
    .state( 'tab.question-detail', {
      url: '/question/:questionId',
      views: {
        'tab-dashboard': {
          templateUrl: '/app/templates/question-detail.html',
          controller: 'QuestionDetailCtrl'
        }
      }
    } )
    .state( 'tab.bookmarks', {
      url: '/bookmarks',
      views: {
        'tab-bookmarks': {
          templateUrl: '/app/templates/tab-bookmarks.html',
          controller: 'BookmarksCtrl'
        }
      }
    } )
    .state( 'tab.bookmarks-detail', {
      url: '/bookmarks/:bookmarkId',
      views: {
        'tab-bookmarks': {
          templateUrl: '/app/templates/bookmarks-detail.html',
          controller: 'BookmarksDetailCtrl'
        }
      }
    } )
    .state( 'tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: '/app/templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    } )
    .state( 'tab.new-question', {
      url: '/newQuestion',
      views: {
        'tab-new-question': {
            templateUrl: '/app/templates/tab-new-question.html',
            controller: 'NewQuestionCtrl'
        }
      }
    } );
  $urlRouterProvider.otherwise( '/login' );
} );