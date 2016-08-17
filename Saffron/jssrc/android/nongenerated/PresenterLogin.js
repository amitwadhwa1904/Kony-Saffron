function LoginPresenter() {
    this.txtEmail = null;
    this.txtMobile = null;
    this.txtPassword = null;
    this.loginManager = null;
    this.reloadData = function() {
        var login = this.loginManager.getLogin();
        this.txtEmail.text = login.email;
        this.txtMobile.text = login.mobile;
        this.txtPassword.text = "";
    };
    this.setLoginData = function(newLoginManager) {
        this.loginManager = newLoginManager;
        this.reloadData();
    };
    this.getLoginDetails = function() {
        return {
            "email": this.txtEmail.text,
            "mobile": this.txtMobile.text,
            "password": this.txtPassword.text
        };
    };
}