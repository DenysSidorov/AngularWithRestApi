// popUp service window on JQuery
export default function ($timeout) {
    return {
        openPopUp: function () {

            var buttonElement = document.querySelector('#pop-up-btn');
            var popUpElement = document.querySelector('#pop-up');

            popUpElement.style.width = buttonElement.offsetWidth + 'px';
            popUpElement.style.height = buttonElement.offsetHeight + 'px';
            popUpElement.style.top = buttonElement.getBoundingClientRect().top + 'px';
            popUpElement.style.left = buttonElement.getBoundingClientRect().left + 'px';
            popUpElement.style.display = "block";

            buttonElement.style.visibility = "hidden";

            $timeout(function () {
                angular.element(buttonElement).toggleClass('pop-up-open');
                angular.element(popUpElement).toggleClass('pop-up-open');
                angular.element(document.querySelector('#pop-up-bg')).toggleClass('pop-up-open');
            });

            $timeout(function () {
                popUpElement.querySelector('.content-wrap').style.opacity = 1;
            }, 0);
        },

        closePopUp: function () {
            var buttonElement = document.querySelector('#pop-up-btn');
            var popUpElement = document.querySelector('#pop-up');

            popUpElement.querySelector('.content-wrap').style.opacity = 0;

            popUpElement.style.visibility = "visible";
            popUpElement.style.padding = "0";

            angular.element(buttonElement).toggleClass('pop-up-open');
            angular.element(popUpElement).toggleClass('pop-up-open');
            angular.element(document.querySelector('#pop-up-bg')).toggleClass('pop-up-open');

            $timeout(function () {
                buttonElement.style.visibility = "visible";
                popUpElement.removeAttribute("style");
            }, 100);
        }
    }
}