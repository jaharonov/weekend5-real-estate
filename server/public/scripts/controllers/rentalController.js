myApp.controller('rentalController', ['$http', function ($http) {
    console.log('rentalController sourced');

    var vm = this;
    vm.rental = [];
    

    vm.newRental = function (newR) {

        console.log('new rental added');
        console.log(newR);
        $http.post('/rentals', newR).then(function (response) {
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
            console.log(response.data);
        }).catch(function (error) {
            console.log('Failure!', error);
        })
    }
    vm.refreshRentals();

}]);