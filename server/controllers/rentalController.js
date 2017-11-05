myApp.controller('rentalController', ['$http', function ($http) {
    console.log('rentalController sourced');

    var vm = this;
    var rental = [];

    vm.newRental = function (rent, sqft, city) {
        var newRental = {
            rent: vm.rent,
            sqft: vm.sqft,
            city: vm.city
        }

        console.log('new rental added');
        rental.push(newRental);
        console.log(rental);
        $http.post('/rental', rental).then(function (response) {
            console.log('success');

        }).catch(function (error) {
            console.log('failure');
        })
    }

}]);