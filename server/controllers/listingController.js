myApp.controller('listingController', ['$http', function ($http) {
    console.log('listingController sourced');

    var vm = this;
    var listing = [];

    vm.newListing = function (rent, sqft, city) {
        var newListing = {
            rent: vm.rent,
            sqft: vm.sqft,
            city: vm.city
        }

        console.log('new listing added');
        listing.push(newListing);
        console.log(listing);
        $http.post('/listing', listing).then(function (response) {
            console.log('success');

        }).catch(function (error) {
            console.log('failure');
        })
    }

}]);