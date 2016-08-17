function frmForgotPassword_init() {
    appscore.print.start();
    appscore.print.stop();
}

function frmForgotPassword_preShow() {
    appscore.print.start();
    frmForgotPassword.headers[0].vBoxLeft.onClick = onDeviceBackClicked;
    frmForgotPassword.headers[0].lblHeader.text = FORGOT_PWD_TITLE;
    appscore.print.stop();
}

function frmForgotPassword_postShow() {
    appscore.print.start();
    appscore.print.stop();
}

function onDeviceBackClicked() {
    frmLogin.show();
}

function frmForgotPassword_SendEmailBtnClick() {
    appscore.print.start();
    if (frmForgotPassword_validateData() == true) {
        appscore.alert.info("Email Sent", "Your password has been sent to your email.", function(response) {
            if (response) {
                frmLogin.show();
            }
        });
    }
    appscore.print.stop();
}

function frmForgotPassword_validateData() {
    appscore.print.start();
    if (utils.validate.isStringNullEmpty(frmForgotPassword.txtEmail) || !utils.validate.email(frmForgotPassword.txtEmail.text)) {
        appscore.alert.error("Invalid Email", "Please provide valid email address.");
        return false;
    }
    appscore.print.stop();
    return true;
}