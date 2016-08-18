var userManager = new UserManager();

function UserManager(){
	this.userData = null;
	
	this.getUserData = function(){
		return this.userData;
	};
	
	this.setUserData = function(data){
		this.userData = new UserData(data);
	};
	
	this.registerUser = function(callback){
      
    };
  
  	this.changePassword = function(callback){

    };
	
	this.resetPassword = function(callback){
      
    };
  
  	this.updateLoyalty = function(callback){
      
    };
}