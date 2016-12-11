// main application

// import css files
import "./css/app.css";
import "./css/loginStyle.css";

// import angular module tools
import angular from "angular";
import uirouter from "angular-ui-router";
import angularanimate from "angular-animate";

// import angular components
import routing from "./js/configApp";
import logOutController from "./js/auth/logOutController";
import authService from "./js/auth/authService";
import countAdrsService from "./js/restBackServices/countAdrsService";
import popUpService from "./js/tools/popUpService";
import showMessageService from "./js/tools/showMessageService";

export var app = angular.module('movieApp', [uirouter, angularanimate]);

// config application
angular.module('movieApp')
    .controller('logOutController', logOutController)
    .factory('authService', authService)
    .factory('countAdrsService', countAdrsService)
    .factory('popUpService', popUpService)
    .service('showMessageService', showMessageService)
    .config(routing)

    // function run start with all application
    .run(function ($timeout, $state, $rootScope, authService) {

        // keep track of changes our state
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

            // verify login-tocken and login state
            if (toState.name != 'login' && !authService.isAuthorized()) {

                $timeout( ()=> {
                    $state.go('login');
                }, 1);

            } else if (toState.name == 'login' && authService.isAuthorized()) {

                $state.go('movies');
            }
        });
        $state.go('movies');
    });



