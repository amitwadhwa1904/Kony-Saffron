var userPresenter = null;

function frmRegister_init(){
	appscore.print.start();
	userPresenter = new UserPresenter();
  	jsfrmRegister_presenter_link();
	appscore.print.stop();
}

function frmRegister_preShow(){
	appscore.print.start();
  	frmRegister_setUI();
	appscore.print.stop();
}

function frmRegister_setUI() {
  	appscore.print.start();
	frmRegister.headers[0].lblHeader.text = LOGIN_TITLE;
	appscore.print.stop();
}

function frmRegister_postShow(){
	appscore.print.start();
	appscore.print.stop();
}

function frmRegister_onRegisterBtnClick() {
	appscore.print.start();
	if(frmRegister_validateData() == true){
		userManager.setUserData(userPresenter.getRegisterDetails());
		
		userManager.registerUser(function(){
			appscore.print.log("-- registerUser callback --");
		});
	}
 	appscore.print.stop();
}

function frmRegister_validateData(){
  	appscore.print.start();

  	if(utils.validate.isStringNullEmpty(frmRegister.txtName)) {
			appscore.alert.error("Name Required", "Please enter your Name.");
			return false;
	}
  
  	if(utils.validate.isStringNullEmpty(frmRegister.txtEmail) || !utils.validate.email(frmRegister.txtEmail.text)){
			appscore.alert.error("Invalid Email", "Please provide valid email address.");
			return false;
	}

	if(utils.validate.isStringNullEmpty(frmRegister.txtMobile) || !utils.validate.phone(frmRegister.txtMobile.text)){
			appscore.alert.error("Invalid Phone", "Please provide valid phone number.");
			return false;
	}
  
  	if(utils.validate.isStringNullEmpty(frmRegister.txtPassword)) {
			appscore.alert.error("Password Required", "Please enter your password.");
			return false;
	}
  
	if(utils.validate.isStringNullEmpty(frmRegister.txtConfirmPassword)){
			appscore.alert.error("Confirm Password Required", "Please enter confirm password.");
			return false;
	} 
	appscore.print.stop();
	return true;
}

function jsfrmRegister_presenter_link(){
  	userPresenter.txtName = frmRegister.txtName;
  	userPresenter.txtEmail = frmRegister.txtEmail;  
  	userPresenter.txtMobile = frmRegister.txtMobile;
  	userPresenter.txtPassword = frmRegister.txtPassword; 
  	userPresenter.txtConfirmPassword = frmRegister.txtConfirmPassword;
}