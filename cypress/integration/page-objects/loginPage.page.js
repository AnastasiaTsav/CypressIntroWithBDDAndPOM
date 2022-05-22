class LoginPage{

    getUsername(){
        return '[data-test="username"]';
    }

    getPassword(){
        return '[data-test="password"]';
    }

    getLoginButton(){
        return '[data-test="login-button"]';
    }

    getError(){
        return '[data-test="error"]';
    }

}

export default new LoginPage();