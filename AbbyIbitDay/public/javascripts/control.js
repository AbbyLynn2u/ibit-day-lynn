var myModule = angular.module('elfApp', ['ngRoute']);  // instantiate the instance of the module

myModule.config(function($routeProvider, $locationProvider) {
    'use strict';

    $routeProvider.when('/', {
        templateUrl: 'home-page',
        controller: 'HomeController'
    }).when('/first', {
        templateUrl: 'first-page',
        controller: 'FirstController'
    }).when('/about', {
        templateUrl: 'about-page',
        controller: 'AboutController'
    }).otherwise({
        redirectTo: '/'
    });
});

$(document).ready(function() {
    'use strict';
    $('.navbar-nav li.trigger-collapse a').click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});
