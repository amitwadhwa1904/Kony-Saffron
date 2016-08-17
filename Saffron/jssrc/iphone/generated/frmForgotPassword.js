function addWidgetsfrmForgotPassword() {
    var lblHeading = new kony.ui.Label({
        "id": "lblHeading",
        "isVisible": true,
        "skin": "CopyslLabel07953ad2f2e514d",
        "text": "Enter the email address you used to create your account and we will send you an email with instructions on how to reset your PIN."
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [3, 7, 3, 3],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "sknTxtTransparent",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "placeholder": "Enter Email",
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "placeholderSkin": "sknPlaceholder",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
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
    var btnLogin = new kony.ui.Button({
        "focusSkin": "sknButtonBlue",
        "id": "btnLogin",
        "isVisible": true,
        "onClick": AS_Button_24117989d6364f85a62685be56bf1939,
        "skin": "sknButtonBlue",
        "text": "Send Email"
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
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmForgotPassword.add(lblHeading, txtEmail, Line0131c0493207443, btnLogin);
};

function frmForgotPasswordGlobals() {
    frmForgotPassword = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmForgotPassword,
        "enabledForIdleTimeout": false,
        "headers": [hBoxHeaderBack],
        "id": "frmForgotPassword",
        "init": AS_Form_de69cbd9765c48ffa19f9448a6abfa05,
        "needAppMenu": true,
        "postShow": AS_Form_505fd00863f4448dbef9d9f7876131d7,
        "preShow": AS_Form_5dc8c54fb06b4a4c97205bbd410cc3b3,
        "skin": "sknWhiteBackground"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false
    });
    frmForgotPassword.info = {
        "kuid": "713a5fb1981e40909236fd97942ab8de"
    };
};