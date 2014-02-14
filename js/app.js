/*!
 ** Example App
 ** Licensed under the Apache License v2.0
 ** http://www.apache.org/licenses/LICENSE-2.0
 ** Built by Jay Kanakiya ( @techiejayk )
 **/

'use strict';

var App = angular.module('flickr', []);

var jsonFlickrFeed = function  (data) {
	window.feeds = data;
};

App.controller('FlickrCtrl', function($scope, $http) {

	$http.jsonp("http://api.flickr.com/services/feeds/photos_public.gne?format=json").success(function  (data) {
		console.log(data);
	}).error(function  (res) {
		$scope.feeds = window.feeds;
	});

});

/*
App.config(function  ($routeProvider,$locationProvider) {
    $routeProvider
	.when("/author/:id",{
		templateUrl : "js/author.html" , controller : "AuthorCtrl"
	})
	.otherwise({
		templateUrl : "js/gallery.html"
	});
    $locationProvider.html5Mode(true);
});
*/