// edit item controller
export default (popUpService, $scope, $http, $state, $stateParams, countAdrsService)=> {

    // get item with id
    countAdrsService.getAddressById($stateParams.id).then(function (val) {
        $scope.movie = val[0];
        console.log($scope.movie, ' item');
    }, function (err) {
        console.log(err);
    });

    // form valid address for request
    let fullApiLink = 'http://demo.aser360.com/api/v1/counter-addresses';
    let linkForOneItem = fullApiLink + '/' + $stateParams.id;

    let data = $scope.movie;

    // if user form ok to update user
    $scope.updateMovie = ()=> {
        if ($scope.dataform.$valid) {
            let data = $scope.movie;
            countAdrsService.updateById($stateParams.id, data).then((val)=> {
                console.log(val, ' val');
                $state.go('movies');
            }, (err)=> {
                console.log(err);
            });
        } else {
            // if user form bad showMessage
            $scope.statusMessage = "Input all stars value";
            popUpService.openPopUp();
        }
    };

    $scope.cancel = () => {
        $state.go('movies');
    };

    $scope.closePopUp = popUpService.closePopUp;

}