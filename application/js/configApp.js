// import controllers for config

import loginController from './auth/loginController'
import movieListController from './movieControllers/movieListController'
import searchListController from './movieControllers/searchListController'
import movieViewController from './movieControllers/movieViewController'
import movieCreateController from './movieControllers/movieCreateController'
import movieEditController from './movieControllers/movieEditController'
import movieDeleteController from './movieControllers/movieDeleteController'

routing.$inject = ['$urlRouterProvider', '$stateProvider'];
export default function routing($urlRouterProvider, $stateProvider) {

    // otherwise link to movies
    $urlRouterProvider.otherwise('movies');

    // set routes
    $stateProvider
        .state('login', {
            url: '/login',
            // templateUrl: 'partials/loginForm.html',
            template: require('../views/loginForm.html'),
            controller: loginController
        })
        .state('movies', {
            url: '/movies?page',
            // templateUrl: 'partials/movies.html',
            template: require('../views/movies.html'),
            controller: movieListController,
            params: {
                page: {
                    value: '0',
                    squash: true
                },
            }
        })
        .state('search', {
            url: '/search?page',
            // templateUrl: 'partials/movie-search.html',
            template: require('../views/movie-search.html'),
            controller: searchListController,
            params: {
                page: {
                    value: '0',
                    squash: true
                },
                searchWord: {
                    value: '0',
                    squash: true
                }
            }
        })
        .state('viewMovie', {
            url: '/movies/:id/view',
            // templateUrl: 'partials/movie-view.html',
            template: require('../views/movie-view.html'),
            controller: movieViewController
        })
        .state('newMovie', {
            url: '/movies/new',
            // templateUrl: 'partials/movie-add.html',
            template: require('../views/movie-add.html'),
            controller: movieCreateController
        })
        .state('editMovie', {
            url: '/movies/:id/edit',
            // templateUrl: 'partials/movie-edit.html',
            template: require('../views/movie-edit.html'),
            controller: movieEditController
        })
        .state('deleteMovie', {
            url: '/movies/:id/delete',
            // templateUrl: 'partials/movie-delete.html',
            template: require('../views/movie-delete.html'),
            controller: movieDeleteController,
        });


}