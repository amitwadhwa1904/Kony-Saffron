function LoginPresenter(){
	this.txtEmail = null;
	this.txtPassword = null;
  	this.loginManager = null;
  	
	this.reloadData = function(){
      var login = this.loginManager.getLogin();
      this.txtEmail.text = login.email;
      this.txtPassword.text = "";
    };
  
  	this.setLoginData = function(newLoginManager){
      this.loginManager = newLoginManager;
      this.reloadData();
    };
  
  	this.getLoginDetails = function(){
      	return {
          	"email" : this.txtEmail.text,
	        "password" : this.txtPassword.text
        };
    };
}


function UserPresenter(){
	this.txtName = null;
  	this.txtEmail = null;
  	this.txtMobile = null;
	this.txtPassword = null;
  	this.txtConfirmPassword = null;
  
  	this.registerManager = null;
  	
	this.reloadData = function(){
        var userData = this.userManager.getUserData();
        this.txtName.text = userData.name;
        this.txtEmail.text = userData.email;
        this.txtMobile.text = userData.mobile;
        this.txtPassword.text = userData.password;    
    };
  
  	this.setUserData = function(newUserManager){
      this.userManager = newUserManager;
      this.reloadData();
    };
  
  	this.getRegisterDetails = function(){
      	return {
          	"name" : this.txtName.text,
	        "email" : this.txtEmail.text,          
          	"mobile" : this.txtMobile.text,
	        "password" : this.txtPassword.text
        };
    };
}