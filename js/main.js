'use strict';

var app = angular.module('portfolioApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'html/home.html',
      controller: 'homeCtrl'
    })
    .state('bio', {
      url:'/bio',
      templateUrl: 'html/bio.html'
    })
    .state('hire-me', {
      url:'/hire-me',
      templateUrl: 'html/hire-me.html'
    })
    .state('work', {
      url:'/work',
      templateUrl: 'html/work.html'
    })
    .state('item1', {
      url:'/item1',
      templateUrl: 'html/item1.html'
    })
    .state('item2', {
      url:'/item2',
      templateUrl: 'html/item2.html'
    })
    .state('item3', {
      url:'/item3',
      templateUrl: 'html/item3.html'
    })
    .state('item4', {
      url:'/item4',
      templateUrl: 'html/item4.html'
    })
    .state('item5', {
      url:'/item5',
      templateUrl: 'html/item5.html'
    })
    .state('item6', {
      url:'/item6',
      templateUrl: 'html/item6.html'
    })
    .state('item7', {
      url:'/item7',
      templateUrl: 'html/item7.html'
    })
    .state('thanks', {
      url:'/thanks',
      templateUrl: 'html/thanks.html'
    })
  $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function($scope, $state, $window, $rootScope, $location) {
  console.log('home works!');
   $rootScope.$on('$stateChangeStart', function() { $window.scrollTo(0,0) });

   $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
});
