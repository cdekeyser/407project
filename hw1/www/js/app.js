// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('quizApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('index', {
        url: '/',
        abstract: true,
        templateUrl: 'index.html'
      })
      .state('view1', {
        url: '/',
        templateUrl: 'view1',
        controller:'view1Ctrl'
      })
      .state('view2', {
        url: '/view2',
        params:{
          'imageAnswer':null
        },
        templateUrl: 'view2',
        controller:'view2Ctrl'
      })
      .state('view3', {
        url: '/view3',
        params:{
          'imageAnswer':null,
          'textAnswer': null
        },
        templateUrl: 'view3',
        controller:'view3Ctrl'
      })
      .state('view4', {
        url: '/view4',
        params:{
          'imageAnswer':null,
          'textAnswer': null
        },
        templateUrl: 'view4',
        controller:'view4Ctrl'
      })




    $urlRouterProvider.otherwise('/');
  })

.controller('view1Ctrl', function($scope, $state) {
  $scope.toView2State = function () {
    $state.go("view2");
  }


})

.controller('view2Ctrl', function($scope, $state) {
  $scope.toView3State = function (answer) {
    $state.go("view3", {
      'imageAnswer': answer
    });
  }


})

  .controller('view3Ctrl', function($scope, $state, $stateParams) {
    $scope.answer = "";
    $scope.toView4State = function () {
    $state.go("view4", {

      'imageAnswer': $stateParams.imageAnswer,
      'textAnswer': $scope.answer

    });
      $scope.answer = "";
  }
})

  .controller('view4Ctrl', function($scope, $state, $stateParams) {
    $scope.display = " ";
    if (($stateParams.imageAnswer == 1) && ($stateParams.textAnswer == "Green Bay Packers")) {
      $scope.display = 'You got 2/2 correct!';
    }
    if (($stateParams.imageAnswer == 0) && ($stateParams.textAnswer == "Green Bay Packers")) {
      $scope.display = 'You got 1/2 correct!';
    }
    if (($stateParams.imageAnswer == 1) && ($stateParams.textAnswer != "Green Bay Packers")) {
      $scope.display = 'You got 1/2 correct!';
    }
    if (($stateParams.imageAnswer == 0) && ($stateParams.textAnswer != "Green Bay Packers")) {
      $scope.display = 'You got 0/2 correct!';
    }

  $scope.toView1State = function () {

    $state.go("view1");
  }
});
