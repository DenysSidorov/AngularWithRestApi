// init all template with $templateCache
(function () {
    angular.module("movieApp").run(["$templateCache", ($templateCache) => {
        // $templateCache.put("components/modal.html", "<div class=\"btf-modal demo-modal\"> <h2>hi</h2> <a class=\"demo-modal-close\" href ng-click=\"modal.closeMe()\">x</a> <p>Closing in {{modal.tickCount}}...</p></div> ");
    }]);
})();