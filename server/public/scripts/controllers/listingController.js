myApp.controller('listingController', ['$http', function ($http) {
    console.log('listingController sourced');

    var vm = this;
    vm.listing = [];
    

    vm.newListing = function (newL) {
        // var newL = {
        //     cost: vm.cost,
        //     sqft: vm.sqft,
        //     city: vm.city
        // }

        console.log('new listing added');
        console.log(newL);
        $http.post('/listings', newL).then(function (response) {
            console.log('success');
            vm.refreshListings();
        }).catch(function (error) {
            console.log('failure');
        })
    }

    vm.deleteListing = function (listingId) {
        $http.delete('/listings/' + listingId).then(function (response) {
            console.log('Success!');
            vm.refreshListings();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    vm.refreshListings = function () {
        $http.get('/listings').then(function (response) {
            console.log('Success!');
            vm.listing = response.data;
        }).catch(function (error) {
            console.log('Failure!', error);
        });
    }
    vm.refreshListings();

}]);