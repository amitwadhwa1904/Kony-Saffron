function addWidgetsfrmLogin() {
    var imgLogo = new kony.ui.Image2({
        "id": "imgLogo",
        "imageWhenFailed": "rsz_appscore_logo.png",
        "imageWhileDownloading": "rsz_appscore_logo.png",
        "isVisible": true,
        "src": "rsz_appscore_logo.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [4, 8, 4, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 35,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "text": "Kony Template"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 2, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTxtTransparent",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "placeholder": "Email",
        "secureTextEntry": false,
        "skin": "sknTxtTransparent",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 3, 0, 0],
        "marginInPixel": false,
        "padding": [8, 6, 6, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Line0131c0493207443 = new kony.ui.Line({
        "id": "Line0131c0493207443",
        "isVisible": true,
        "skin": "CopynoSkinLine05917fcd6d5e94c"
    }, {
        "margin": [5, 1, 5, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var txtMobile = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTxtTransparent",
        "id": "txtMobile",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_PHONE_PAD,
        "maxTextLength": 10,
        "placeholder": "Mobile",
        "secureTextEntry": false,
        "skin": "sknTxtTransparent",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [8, 6, 6, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Line05a267c10ddf04e = new kony.ui.Line({
        "id": "Line05a267c10ddf04e",
        "isVisible": true,
        "skin": "CopynoSkinLine05917fcd6d5e94c"
    }, {
        "margin": [5, 1, 5, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTxtTransparent",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "sknTxtTransparent",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [8, 6, 6, 2],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Line0e109d319292241 = new kony.ui.Line({
        "id": "Line0e109d319292241",
        "isVisible": true,
        "skin": "CopynoSkinLine05917fcd6d5e94c"
    }, {
        "margin": [5, 1, 5, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var btnLogin = new kony.ui.Button({
        "focusSkin": "sknButtonBlue",
        "id": "btnLogin",
        "isVisible": true,
        "onClick": p2kwiet120482477619_btnLogin_onClick_seq0,
        "skin": "sknButtonBlue",
        "text": "LOGIN"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [18, 10, 18, 7],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var HBoxRememberMe = new kony.ui.Box({
        "id": "HBoxRememberMe",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var vboxRememberMe = new kony.ui.Box({
        "id": "vboxRememberMe",
        "isVisible": true,
        "onClick": p2kwiet120482477619_vboxRememberMe_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hboxLblRememberMe = new kony.ui.Box({
        "id": "hboxLblRememberMe",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblRememberMe = new kony.ui.Label({
        "id": "lblRememberMe",
        "isVisible": true,
        "text": "Remember Me"
    }, {
        "containerWeight": 57,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_MIDDLE_RIGHT
    }, {
        "textCopyable": false
    });
    var vBoxImgRememberMe = new kony.ui.Box({
        "id": "vBoxImgRememberMe",
        "isVisible": true,
        "onClick": p2kwiet120482477619_vBoxImgRememberMe_onClick_seq0,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 43,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var imgRememberMe = new kony.ui.Image2({
        "id": "imgRememberMe",
        "isVisible": true,
        "src": "icon_check.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 20,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    vBoxImgRememberMe.add(imgRememberMe);
    hboxLblRememberMe.add(lblRememberMe, vBoxImgRememberMe);
    vboxRememberMe.add(hboxLblRememberMe);
    HBoxRememberMe.add(vboxRememberMe);
    var hBoxForgotPwd = new kony.ui.Box({
        "id": "hBoxForgotPwd",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "slHbox"
    }, {
        "containerWeight": 100,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 2, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_RIGHT
    }, {});
    var lblBlank = new kony.ui.Label({
        "id": "lblBlank",
        "isVisible": true,
        "skin": "slLabel",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 64,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var linkForgotPassword = new kony.ui.Link({
        "focusSkin": "sknLinkBlue",
        "id": "linkForgotPassword",
        "isVisible": true,
        "onClick": AS_Link_0abdbf95f2c842d08e34e8705506c4d4,
        "skin": "sknLinkBlue",
        "text": "Forgot Password"
    }, {
        "containerWeight": 36,
        "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_RIGHT,
        "hExpand": true,
        "margin": [0, 0, 5, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_RIGHT
    }, {});
    hBoxForgotPwd.add(lblBlank, linkForgotPassword);
    var Button012771e9387b74b = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "id": "Button012771e9387b74b",
        "isVisible": true,
        "onClick": AS_Button_d132486b95844d1abb452fa5fa1c6b8e,
        "skin": "slButtonGlossBlue",
        "text": "Button"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmLogin.add(imgLogo, lblTitle, txtEmail, Line0131c0493207443, txtMobile, Line05a267c10ddf04e, txtPassword, Line0e109d319292241, btnLogin, HBoxRememberMe, hBoxForgotPwd, Button012771e9387b74b);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "headers": [hBoxHeaderNoOption],
        "id": "frmLogin",
        "init": AS_Form_b96de85f9589402195a817e2b9032843,
        "needAppMenu": true,
        "postShow": p2kwiet120482477619_frmLogin_postshow_seq0,
        "preShow": p2kwiet120482477619_frmLogin_preshow_seq0,
        "skin": "sknWhiteBackground"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": AS_Form_3fe366b938e6491d95ff7b327d1aa84f,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmLogin.info = {
        "kuid": "p2kwiet120482477619"
    };
};