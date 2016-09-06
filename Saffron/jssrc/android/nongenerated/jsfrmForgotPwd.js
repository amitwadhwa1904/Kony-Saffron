var forgotPwdPresenter = null;

function frmForgotPwd_init() {
    appscore.print.start();
    forgotPwdPresenter = new ForgotPwdPresenter();
    jsfrmForgotPwd_presenter_link();
    appscore.print.stop();
}

function frmForgotPwd_preShow() {
    appscore.print.start();
    frmForgotPwd_setUI();
    appscore.print.stop();
}

function frmForgotPwd_setUI() {
    appscore.print.start();
    appscore.print.stop();
}

function frmForgotPwd_postShow() {
    appscore.print.start();
    appscore.print.stop();
}

function frmForgotPwd_onSendEmailBtnClick() {
    appscore.print.start();
    if (frmForgotPwd_validateData() == true) {
        userManager.setUserData(forgotPwdPresenter.getForgotPwdDetails());
        userManager.resetPassword(function() {
            appscore.alert.info("Email Sent", "Your password has been sent to your email.", function(response) {
                if (response) {
                    frmLogin.show();
                }
            });
        });
    }
    appscore.print.stop();
}

function frmForgotPwd_validateData() {
    appscore.print.start();
    if (utils.validate.isStringNullEmpty(frmForgotPwd.txtEmail) || !utils.validate.email(frmForgotPwd.txtEmail.text)) {
        appscore.alert.error("Invalid Email", "Please provide valid email address.");
        return false;
    }
    appscore.print.stop();
    return true;
}

function jsfrmForgotPwd_presenter_link() {
    forgotPwdPresenter.txtEmail = frmForgotPwd.txtEmail;
}