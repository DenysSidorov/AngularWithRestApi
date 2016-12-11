// controller read user form and verify data

export default ($scope, $state, authService)=> {

    $scope.addNewUser = (userDetails) => {
        $scope.message = userDetails.name
            + " (" + userDetails.email + ") (" + userDetails.agreed + ")";
    };

    $scope.message = "Ready";

    $scope.getError = function (error) {
        if (angular.isDefined(error)) {
            if (error.required) {
                return "Field must be not empty ";
            } else if (error.email) {
                return "Wrong email";

            }
        }
    };
    // if new user ok to state movie
    $scope.submit = (newUser)=> {
        if (authService.isAuth(newUser.name, newUser.email)) {
            $state.go('movies');
        } else {
            $scope.newUser = {};
            // something do
            console.log('no');
        }
    }
};
