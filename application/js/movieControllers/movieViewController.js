//view one item controller
export default ($scope, $state, $stateParams, countAdrsService)=> {

    //get item by id
    countAdrsService.getAddressById($stateParams.id).then((val) => {
        $scope.movie = val[0];
    }, (err)=> {
        console.log(err);
    });

    $scope.cancel = () => {
        // do something
        $state.go('movies');
    };
}