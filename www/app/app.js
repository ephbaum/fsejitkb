angular.module( 'FSE-JiTKb-App', [ 'ionic', 'app.controllers', 'app.services', 'ngResource' ] )

.run( function( $ionicPlatform ) {
  $ionicPlatform.ready( function() {
    if ( window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard ) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
    }
    if ( window.StatusBar ) {
      StatusBar.styleLightContent();
    }
  });
})

.config( function( $stateProvider, $urlRouterProvider ) {

  $stateProvider
    // Login and Forgot Password are outside tab states
    .state('login', {
      url: '/login',
      templateUrl: '/app/templates/login.html',
      controller: 'LoginCtrl'
    })
    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: '/app/templates/forgot-password.html'
    })


    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "/app/templates/tabs.html"
    })

    .state('tab.dashboard', {
      url: '/dashboard',
      views: {
        'tab-dashboard': {
          templateUrl: '/app/templates/tab-dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    } )
    .state( 'tab.dashboard.question-list', {
      url: 'question-list',
      views: {
        'question-list': {
          templateUurl: '/app/templates/question-list.html'
        }
        
      }
    } )
    .state( 'tab.dashboard.question-detail', {
      url: '/question/:questionId',
        views: {
            'tab-dashboard': {
              templateUrl: '/app/templates/question-detail.html',
              controller: 'QuestionDetailCtrl'
            }
          }
        } )
    .state('tab.bookmarks', {
      url: '/bookmarks',
      views: {
        'tab-bookmarks': {
          templateUrl: '/app/templates/tab-bookmarks.html',
          controller: 'BookmarksCtrl'
        }
      }
    })
    .state('tab.bookmarks-detail', {
      url: '/bookmarks/:bookmarkId',
      views: {
        'tab-bookmarks': {
          templateUrl: '/app/templates/bookmarks-detail.html',
          controller: 'BookmarksDetailCtrl'
        }
      }
    })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: '/app/templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
