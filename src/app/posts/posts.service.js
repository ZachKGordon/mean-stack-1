require('../app');
require('../github-adapter.js');

(function () {
  "use strict";

  angular.module("blog").service("PostsService", ["$http", '$githubGist', function ($http, $githubGist) {
    var urlRoot = "/api/posts";

    var Post = {
      get: function (id) {
        if (angular.isDefined(id)) {
          // return $http.get(urlRoot + "/" + id);
          return $githubGist(id).read();
        } else {
          return $http.get(urlRoot);
          console.warn('root url');
        }
      },
      update: function (model) {
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        return $http.post(urlRoot, model); // ideal, but doesn't work
      },
      delete: function (model) {
        return $http.delete(urlRoot + "/" + model._id);
      }
    };
    return Post;
  }]);
}());
