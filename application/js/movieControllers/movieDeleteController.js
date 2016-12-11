export default ($http, $scope, $state)=> {
    $scope.cancel = ()=> {
        // do something
        $state.go('movies');
    };
}