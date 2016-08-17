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