var loginPresenter = null;

function frmLogin_init() {
    appscore.print.start();
    loginPresenter = new LoginPresenter();
    jsfrmLogin_presenter_link();
    appscore.print.stop();
}

function frmLogin_preShow() {
    appscore.print.start();
    frmLogin_setUI();
    appscore.print.stop();
}

function frmLogin_setUI() {
    appscore.print.start();
    appscore.print.stop();
}

function frmLogin_postShow() {
    appscore.print.start();
    appscore.print.stop();
}

function frmLogin_onLoginBtnClick() {
    appscore.print.start();
    if (frmlogin_validateData() == true) {
        loginManager.setLogin(loginPresenter.getLoginDetails());
        loginManager.validateMember(function() {
            appscore.print.log("-- validateMember callback --");
            loginManager.saveLogin();
            frmHome.show();
            frmLogin.destroy();
        });
    }
    appscore.print.stop();
}

function frmlogin_validateData() {
    appscore.print.start();
    if (utils.validate.isStringNullEmpty(frmLogin.txtEmail) || !utils.validate.email(frmLogin.txtEmail.text)) {
        appscore.alert.error("Invalid Email", "Please provide valid email address.");
        return false;
    }
    if (utils.validate.isStringNullEmpty(frmLogin.txtPassword)) {
        appscore.alert.error("Password Required", "Please enter your password.");
        return false;
    }
    appscore.print.stop();
    return true;
}

function jsfrmLogin_presenter_link() {
    loginPresenter.txtEmail = frmLogin.txtEmail;
    loginPresenter.txtPassword = frmLogin.txtPassword;
}