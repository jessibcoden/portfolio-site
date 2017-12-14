"use strict";

app.controller("BlogCtrl", function($scope, $window, DataService){
 
    $(document).ready(function() {
        $('.parallax').parallax();
      });

    const displayBlogs = () => {
        DataService.getAllBlogs().then((results) => {
            $scope.blogs = results;
        });
        
    };

    $window.onload = displayBlogs();

});

