// create new item
export default (popUpService, $scope, $timeout, $http, $state) => {

    let fullApiLink = 'http://demo.aser360.com/api/v1/counter-addresses';
    // data from user form
    let data = $scope.movie;

    $scope.addMovie = () => {
        // if form ok write new user
        if ($scope.dataform.$valid) {
            let data = $scope.movie;
            let req = {
                method: 'POST',
                url: fullApiLink,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            $http(req).then((respond)=> {
                console.log(respond.data);
                console.log(respond.status);
            }, (er)=> {
                console.log(er);
                console.log(er.status);
            });
            $state.go('movies');

        } else {
            // if form bad write error message
            $scope.statusMessage = "Input all stars value";
            popUpService.openPopUp();
        }
    };

    $scope.closePopUp = popUpService.closePopUp;

    $scope.cancel = ()=> {
        $state.go('movies');
    };
}