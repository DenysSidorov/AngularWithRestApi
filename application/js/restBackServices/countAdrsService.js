// Back-End service for CRUD
export default function ($http, $timeout, $q) {

        // shaping link
        let fullApiLink = 'http://demo.aser360.com/api/v1/counter-addresses';

        return {
            // get all items
            getAll: function (page) {
                let deferred = $q.defer();  // создаем обьект deferred
                $http({
                    method: 'GET',
                    url: 'http://demo.aser360.com/api/v1/counter-addresses' + '?page=' + page
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    deferred.resolve(response);
                    // when the response is available
                }, function errorCallback(response) {
                    throw response;
                });
                return deferred.promise;
            },

            //search item
            getAllSearched: function (page, searchWord) {
                console.log('getAll');
                let deferred = $q.defer();  // создаем обьект deferred
                $http({
                    method: 'GET',
                    url: 'http://demo.aser360.com/api/v1/counter-addresses'
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    deferred.resolve(response);
                    // when the response is available
                }, function errorCallback(response) {
                    throw response;
                });
                return deferred.promise;
            },
            // get one item by id
            getAddressById: function (id) {

                let linkForOneItem = fullApiLink + '?id=' + id;

                let deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: linkForOneItem
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    console.log(response.data, ' res');
                    deferred.resolve(response.data);
                    // when the response is available
                }, function errorCallback(response) {
                    throw response;
                });
                return deferred.promise;
            },
            // update one item
            updateById: function (id, data) {

                let linkForOneItem = fullApiLink + '/' + id;
                console.log(linkForOneItem);
                let deferred = $q.defer();
                $http({
                    method: 'PUT',
                    url: linkForOneItem,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    deferred.resolve(response);
                    // when the response is available
                }, (response) => {
                    throw response;
                });
                return deferred.promise;
            },
        }
    }