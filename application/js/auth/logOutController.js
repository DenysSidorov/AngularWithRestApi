export default ($scope, $state, authService)=> {
    $scope.logOut = authService.logOut;
}