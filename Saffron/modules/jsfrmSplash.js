
/**
* splashScreenCheck
*/
function splashScreenCheck(){
  	appscore.print.start();
	if(appscore.app.isNetworkAvailable() == true){
		loginManager.validateLogin(function(){
			if(loginManager.getLogin() == null){
				frmHome.show()
			}else{
				frmHome.show();
			}
		});
	}else{
		frmLogin.show()
	}
  	appscore.print.stop();	
}