//actions.js file 
function AS_AppEvents_06113dfd1e1f409cb9b10f462d0e6efc(eventobject) {
    return application_post_init.call(this);
}

function AS_AppEvents_f9602e9d9cb043e5b51fdc82c60a70e3(eventobject) {}

function AS_Button_24117989d6364f85a62685be56bf1939(eventobject) {
    return frmForgotPassword_SendEmailBtnClick.call(this);
}

function AS_Button_bd2a357e9287422fa5e96376b6d5bc2b(eventobject) {
    frmLogin.show();
}

function AS_Button_d132486b95844d1abb452fa5fa1c6b8e(eventobject) {
    Form08b5c72c3b48248.show();
}

function AS_Form_0244ac674d7c4f429633ff1a5a30325e(eventobject) {
    return splashScreenCheck.call(this);
}

function AS_Form_3fe366b938e6491d95ff7b327d1aa84f(eventobject, neworientation) {}

function AS_Form_505fd00863f4448dbef9d9f7876131d7(eventobject) {
    return frmForgotPassword_postShow.call(this);
}

function AS_Form_5dc8c54fb06b4a4c97205bbd410cc3b3(eventobject) {
    return frmForgotPassword_preShow.call(this);
}

function AS_Form_98909c99fc344e1b86765c83af4d5649(eventobject) {
    return frmHome_preShow.call(this);
}

function AS_Form_b96de85f9589402195a817e2b9032843(eventobject) {
    return frmLogin_init.call(this);
}

function AS_Form_bfa8fecdbef84c5fa8d39d5ada65ffed(eventobject) {
    Form08b5c72c3b48248.headers[0].lblHeader.text = "mycaption";
}

function AS_Form_d54c66f87c724af4b14f1d9b20b262f3(eventobject) {
    return frmHome_preShow.call(this);
}

function AS_Form_de69cbd9765c48ffa19f9448a6abfa05(eventobject) {
    return frmForgotPassword_init.call(this);
}

function AS_Form_f763e968278246eb913154bf2ba1dd9b(eventobject, neworientation) {
    // do nothing
}

function AS_Form_f77ddb81de0049369632ccf69bfaa45f(eventobject) {
    return frmHome_init.call(this);
}

function AS_Link_0abdbf95f2c842d08e34e8705506c4d4(eventobject) {
    frmForgotPassword.show();
}

function p2kwiet120482477619_btnLogin_onClick_seq0(eventobject) {
    return frmLogin_onLoginBtnClick.call(this);
}

function p2kwiet120482477619_frmLogin_postshow_seq0(eventobject, neworientation) {
    return frmLogin_postShow.call(this);
}

function p2kwiet120482477619_frmLogin_preshow_seq0(eventobject, neworientation) {
    return frmLogin_preShow.call(this);
}

function p2kwiet120482477619_vBoxImgRememberMe_onClick_seq0(eventobject) {
    return on_off_switch_widget.call(this, frmLogin.imgRememberMe);
}

function p2kwiet120482477619_vboxRememberMe_onClick_seq0(eventobject) {
    return on_off_switch_widget.call(this, null);
}