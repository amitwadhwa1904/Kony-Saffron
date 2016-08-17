function frmHome_init(){
	appscore.print.start();
	
	appscore.print.stop();
}

function frmHome_preShow(){
	appscore.print.start();
  
	frmHome.headers[0].vBoxLeft.isVisible = false;
  	frmHome.headers[0].lblHeader.text = HEADER_TITLE;
  	frmHome.headers[0].vBoxRight.onClick = frmHome_onLogout;
    frmHome.headers[0].lblRight.text = LOGOUT_TITLE;
  
	appscore.print.stop();
}

function frmHome_postShow(){
	appscore.print.start();
	
	appscore.print.stop();
}

function frmHome_onLogout(){
  	loginManager.logout();
  	frmLogin.show();
}