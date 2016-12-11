// read items controller
export default function
    ($stateParams, $http, $timeout, $scope, $state, showMessageService, $window, countAdrsService) {

    // pagination data
    $scope.countPage = 1;
    $scope.activClass = $stateParams.page;
    $scope.activeHref = 1;

    // get all items
    countAdrsService.getAll($stateParams.page).then((response)=> {
        // console.log(response.headers(), '   heaaders');
        // console.log(response.headers('x-pagination-current-page'), '   currrentPage'); //1
        // console.log(response.headers('x-pagination-page-count'), '   countPage'); // 3
        // console.log(response.headers('x-pagination-per-page'), '   perPage'); // 25
        // console.log(response.headers('x-pagination-total-count'), '   totalCount'); // 58

        // hook for ng-repeat
        $scope.getNumber = (num)=> {
            let arr = [];
            for (let i = 0; i < num; i++) {
                arr.push(i);
            }
            return arr;
        };
        $scope.countPage = response.headers('x-pagination-page-count');

        //data for items
        $scope.movies = response.data;
    }, (err) => {
        console.log(err);
    });

    // delete item form list
    $scope.deleteMovie = (movie)=> {
        if (showMessageService.showPopup('Really delete this?')) {
            console.log('delete');
        }
    }
}
