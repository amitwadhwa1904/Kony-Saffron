var loginManager = new LoginManager();

function LoginManager(){
	this.login = null;
	
	this.getLogin = function(){
		this.login = appscore.dao.request("Creds");
		return this.login;
	};
	
	this.setLogin = function(data){
		this.login = new Login(data);
	};
	
	this.setToken = function(token){
		if(this.login == null) this.login = {};
		this.login.token = token;
	};
	
	this.validateLogin = function(callback){
		var login = this.getLogin();
		var token = null;
		if(login) token = login.token
		if(token){
			invokeAppService(SERV_VALIDATE, {"token":token}, function(status, resultTable){
				appscore.print.log("status :" + status);
				appscore.print.log("resultTable :" + JSON.stringify({"data" : resultTable}));
				if(resultTable["opstatus"] == 0){
					var response =  resultTable["main"];
					appscore.print.log("result :" + response.result);
				}else{
					appscore.print.error("Error", "Token is expired.");
					loginManager.logout();
				}
				if(callback)callback();
			});
		}else{
			if(callback)callback();
		}
	};
	
	this.validateMember = function(callback){
		invokeAppService(SERV_AUTHENTICATE, this.login, function(status, resultTable){
			appscore.print.log("status :" + status);
			appscore.print.log("resultTable :" + JSON.stringify({"data" : resultTable}));
			if(resultTable["opstatus"] == 0) {
				var response =  resultTable["main"];
				appscore.print.log("token :" + response.token);
				loginManager.login.token = response.token;
				callback();
			} else {
				appscore.alert.error("Invalid Credentials","Your login details are incorrect. Please Check your informations.");
			}
		});
	};
	
	this.saveLogin = function(){
		if(this.login == null){
			appscore.dao.remove("Creds");
		}else{
          	if(gRememberMe_Support && frmLogin.imgRememberMe.src == IMG_SRC_CHECK){
              	appscore.dao.update("Creds", this.buildForStorage());
            }
		}
	};
	
  	this.buildForStorage = function(){
      	return {
          	"email":this.login.email,
          	"mobile":this.login.mobile,
          	"token":this.login.token
        };
    };
  
	this.logout = function(){
		appscore.dao.remove("Creds");
		this.login = null;
	};
}