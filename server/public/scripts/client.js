var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider.when('/rentals', {
        templateUrl: '/templates/rentals.html',
        controller: 'rentalController as rental'

    }).when('/listings', {
        templateUrl: '/templates/listings.html',
        controller: 'listingController as listing'
    })
});