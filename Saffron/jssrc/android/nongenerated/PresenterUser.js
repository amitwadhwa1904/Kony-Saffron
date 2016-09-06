function LoginPresenter() {
    this.txtEmail = null;
    this.txtPassword = null;
    this.loginManager = null;
    this.reloadData = function() {
        var login = this.loginManager.getLogin();
        this.txtEmail.text = login.email;
        this.txtPassword.text = "";
    };
    this.setLoginData = function(newLoginManager) {
        this.loginManager = newLoginManager;
        this.reloadData();
    };
    this.getLoginDetails = function() {
        return {
            "email": this.txtEmail.text,
            "password": this.txtPassword.text
        };
    };
}

function RegisterPresenter() {
    this.txtName = null;
    this.txtEmail = null;
    this.txtMobile = null;
    this.txtPassword = null;
    this.txtConfirmPassword = null;
    this.getRegisterDetails = function() {
        return {
            "name": this.txtName.text,
            "email": this.txtEmail.text,
            "mobile": this.txtMobile.text,
            "password": this.txtPassword.text,
            "confirmpassword": this.txtConfirmPassword.text
        };
    };
}

function ForgotPwdPresenter() {
    this.txtEmail = null;
    this.forgotPwdManager = null;
    this.getForgotPwdDetails = function() {
        return {
            "email": this.txtEmail.text
        };
    };
}