
var app = angular.module('starter', ['ionic', 'ngCordova'])

app.controller("MainController", function($scope, $http, $q, $cordovaToast) {

  $scope.ListItems = ["LK", "MI", "MM"];

});




/*
  //http REST:
  $scope.makeRequest = function(){
    //make the hhtp request and pass in an object:

    $http(
    {
      url: "https://httpbin.org/get",
      method: "GET"
      // no params: param:
    })
    .then(function(result){
        console.log(JSON.stringify(result));
    }, function(error){
        console.log(JSON.stringify(error));
    });
  }
*/

  /*promises:
  var testFunction = function() {
    var deferred =$q.defer();
    if(1 == 1) {
      //return positive
      deferred.resolve("this was positive");
    } else {
      //return negative
      deferred.reject("this was negative");
    }
    //return promise
    return deferred.promise;

  }

    // testFunction.then(function(result) { console.log(result); }, function(error) {} ); */


  app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("list");

    $stateProvider
      .state("list", {
        "url": "/list",
        "templateUrl": "templates/list.html",
        "controller": "MainController",
        "cache": false
      })
      /*
      .state("accounts", {
        "url": "/accounts",
        "templateUrl": "templates/accounts.html",
        "controller": "AccountsController",
        "cache": false
      });
      */


  })

app.run(function($ionicPlatform) {
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
