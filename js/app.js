/*!
 ** Flickr App
 ** Licensed under the Apache License v2.0
 ** http://www.apache.org/licenses/LICENSE-2.0
 ** Built by Jay Kanakiya ( @techiejayk )
 **/

"use strict";

var App = angular.module("flickr", ["ngRoute"]);

/* jsonFlickrFeed is a workaround required because Flickrs service returns a function that directly calls jsonFlickrFeed
* 	Open http://api.flickr.com/services/feeds/photos_public.gne?format=json in the browser
*/

var jsonFlickrFeed = function  (data) {
	window.feeds = data;
};

App.controller("FlickrCtrl", function($scope, $http) {

	$http.jsonp("http://api.flickr.com/services/feeds/photos_public.gne?format=json").error(function  () {
		$scope.feeds = window.feeds;
	});
});

App.controller("AuthorCtrl", function($scope, $http ,$route) {

	$http.jsonp("http://api.flickr.com/services/feeds/photos_public.gne?format=json&id="+$route.current.params.id).error(function  () {
		$scope.feeds = window.feeds;
	});

});

App.controller("FriendCtrl",function  ($scope,$http,$route) {

	$scope.author = $route.current.params.id;

	$http.jsonp("http://api.flickr.com/services/feeds/photos_friends.gne?format=json&user_id="+$route.current.params.id).error(function  () {
		$scope.feeds = window.feeds;
	});
});

/* Routes Configuration */

App.config(function  ($routeProvider) {
	$routeProvider.when("/author/:id",{
		templateUrl : "js/author.html" ,
		controller : "AuthorCtrl"
	}).when("/author/:id/friend",{
		templateUrl : "js/friend.html",
		controller : "FriendCtrl"
	})
	.otherwise({
		templateUrl : "js/gallery.html",
		controller : "FlickrCtrl"
	});
});

// TODO : Angular-js Service for FlickrFeed