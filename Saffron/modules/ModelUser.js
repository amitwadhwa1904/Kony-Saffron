function Login(login){
  	this.email = "";
  	this.password = "";
  	this.token = null; 

	if (login != null) {
		utils.object.setValues(this, login);
	}  
}


function UserData(userData){
  	this.name = "";
  	this.email = "";
  	this.mobile = "";
  	this.password = "";
  	this.confirmpassword = "";  
  	this.loyaltyPoints = null;  

	if (registerData != null) {
		utils.object.setValues(this, userData);
	}  
}