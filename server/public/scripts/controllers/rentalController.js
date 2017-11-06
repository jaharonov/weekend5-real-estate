myApp.controller('rentalController', ['$http', function ($http) {
    console.log('rentalController sourced');

    var vm = this;
    vm.rental = [];
    

    vm.newRental = function (rent, sqft, city) {
        var newR = {
            rent: vm.rent,
            sqft: vm.sqft,
            city: vm.city
        }

        console.log('new rental added');
        rental.push(newR);
        console.log(rental);
        $http.post('/rentals', rental).then(function (response) {
            console.log('success');
            vm.refreshRentals();
        }).catch(function (error) {
            console.log('failure');
        })
    }

    vm.deleteRental = function (rentalId) {
        $http.delete('/rentals/' + rentalId).then(function (response) {
            console.log('Success!');
            vm.refreshRentals();
        }).catch(function (error) {
            console.log('Failure!');
        })
    }

    vm.refreshRentals = function () {
        $http.get('/rentals').then(function (response) {
            console.log('Success!');
            vm.rental = response.data;
        }).catch(function (error) {
            console.log('Failure!', error);
        })
    }
    //vm.refreshRentals();

}]);