"use strict";

app.controller("HomeCtrl", function($scope, $window, DataService){
    
    $(document).ready(function() {
      $('.parallax').parallax();
    });

    const displayProjects = () => {
        DataService.getAllProjects().then((results) => {
            $scope.projects = results;
            console.log('$scope.projects', $scope.projects);
        });
        
    };

    $window.onload = displayProjects();

});