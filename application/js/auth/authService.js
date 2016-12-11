// authService Factory verify user auth
export default  ($state) => {
    // user tocken
    let isLogin = false;

    if (localStorage.getItem("isAuthorized")) {
        isLogin = true;
    }

    return {

        isAuth: (name, mail)=> {
            if (name == 'admin' && mail == 'admin@gmail.com') {
                localStorage.setItem("isAuthorized", true);
                isLogin = true;
            } else {
                isLogin = false;
            }
            return isLogin;
        },

        logOut: () => {
            isLogin = false;
            localStorage.setItem("isAuthorized", false);
            $state.go('login');
        },

        isAuthorized: function () {
            return isLogin;
        }
    }
}