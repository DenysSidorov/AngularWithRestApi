// search items controller
export default function ($stateParams, $http, $timeout, $scope, $state, showMessageService, $window, countAdrsService) {

    //pagination data
    $scope.countPage = 1;
    $scope.filterWord = $stateParams.searchWord;
    $scope.activClass = $stateParams.page;
    $scope.activeHref = 1;

    countAdrsService.getAllSearched($stateParams.page, $stateParams.searchWord)
        .then((response)=> {

            // hook for ng-repeat
            $scope.getNumber = (num)=> {
                let arr = [];
                for (let i = 0; i < num; i++) {
                    arr.push(i);
                }
                return arr;
            };
            $scope.countPage = response.headers('x-pagination-page-count');

            //data from search for view
            $scope.movies = response.data;
        }, (err) => {
            console.log(err);
        });

    $scope.deleteMovie = (movie)=> {
        if (showMessageService.showPopup('Really delete this?')) {
            //do something
            console.log('delete');
        }
    }
}