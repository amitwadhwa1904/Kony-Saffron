function Login(login) {
    this.email = "";
    this.mobile = "";
    this.password = "";
    this.token = null;
    if (login != null) {
        utils.object.setValues(this, login);
    }
}