!function(){"use strict";angular.module("blog").controller("PostFormCtrl",["PostsService","$routeParams","$location",function(t,o,n){function s(){o.post_id&&t.get(o.post_id).then(function(t){i.post=t.data})}function a(){var s;s=o.post_id?"update":"create",t[s](i.post).then(function(t){n.path("/posts/"+t.data._id)})}var i=this;i.save=a,i.post={},s()}])}();