function LoginPresenter(login){
	this.email = "",
	this.mobile = "",
	this.password = "",
	this.token = null;
	
	if (login != null) {
		setValues(this, login);
	}
}