"use strict";

app.config (function($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	}).
	when('/blogs', {
		templateUrl: 'partials/blog.html',
		controller: 'BlogCtrl',
	}).
	
	otherwise('/');
});

