require('angular');

(function () {
  "use strict";

  var app = angular.module("blog", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/posts", {
      templateUrl: "partials/posts/posts_list.html",
      controller: "PostsCtrl as vm",
    })
    .when("/posts/new", {
      templateUrl: "partials/posts/post_form.html",
      controller: "PostFormCtrl as vm",
    })
    .when("/posts/:post_id/edit", {
      templateUrl: "partials/posts/post_form.html",
      controller: "PostFormCtrl as vm",
    })
    .when("/posts/:post_id", {
      templateUrl: "partials/posts/post_detail.html",
      controller: "PostCtrl as vm",
    })
    .otherwise({
      redirectTo: "/posts",
    });
  }]);

  app.controller('DateCtrl', ['$scope', function($scope) {
      $scope.date = new Date();
    }
  ]);
}());

require('angular-route');
require('./posts/index.js');
