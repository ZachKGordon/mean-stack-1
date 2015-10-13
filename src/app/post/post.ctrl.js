require('../app');

angular.module("blog").controller("PostCtrl", ["PostsService", "$routeParams", function (PostsService, $routeParams) {
  var vm = this;

  initialize();

  function initialize() {
    PostsService
      .get($routeParams.post_id)
      .then(function (resp) {
        // vm.post = resp.data;
        console.log(resp);

        vm.post = {};
        vm.post.content = "";
        for (file in resp.files) {
          vm.post.content += resp.files[file].content;
        }

        vm.post.date = resp.updated_at;
        vm.post.author = resp.owner.login;
      });
  }
}]);
