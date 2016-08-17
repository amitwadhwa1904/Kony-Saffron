function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var MenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-82%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "80%",
        "zIndex": 2
    }, {}, {});
    MenuContainer.setDefaultUnit(kony.flex.DP);
    MenuContainer.add();
    var flxCntrHome = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxCntrHome",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCntrHome.setDefaultUnit(kony.flex.DP);
    var FlexContainer06dc7ef4d4a494b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "FlexContainer06dc7ef4d4a494b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer06dc7ef4d4a494b.setDefaultUnit(kony.flex.DP);
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "left": "42dp",
        "placeholder": "Email",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "67dp",
        "width": "260dp"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "height": "40dp",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "41dp",
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "20dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var Button01ecb6c0c852646 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button01ecb6c0c852646",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_31c5965093c2414b931ba7fe9d585e3a,
        "skin": "CopyslButtonGlossBlue01763c2c96ba941",
        "text": "Logindd",
        "top": "30dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton09a24aed5924741 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "CopyButton09a24aed5924741",
        "isVisible": true,
        "left": "58dp",
        "skin": "CopyslButtonGlossBlue015902fd302bd41",
        "text": "Register",
        "top": "325dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label05b229a7bc00a4b = new kony.ui.Label({
        "centerX": "49.96%",
        "id": "Label05b229a7bc00a4b",
        "isVisible": true,
        "left": "140dp",
        "skin": "CopyslLabel0fce4dce149cb4d",
        "text": "Forgot Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "286dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer06dc7ef4d4a494b.add(txtEmail, txtPassword, Button01ecb6c0c852646, CopyButton09a24aed5924741, Label05b229a7bc00a4b);
    var flexBoxFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": 0,
        "clipBounds": true,
        "height": 140,
        "id": "flexBoxFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2%",
        "width": "100%"
    }, {}, {});
    flexBoxFooter.setDefaultUnit(kony.flex.DP);
    var flexSocialButtons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "clipBounds": true,
        "height": "49%",
        "id": "flexSocialButtons",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flexSocialButtons.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0b9de7f44ab4145 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0b9de7f44ab4145",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3%",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer0b9de7f44ab4145.setDefaultUnit(kony.flex.DP);
    var CopyImage0841740ee407a43 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "CopyImage0841740ee407a43",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_check.png",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel07e0dabb638d84a = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel07e0dabb638d84a",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0332856b8a8da4f",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0b9de7f44ab4145.add(CopyImage0841740ee407a43, CopyLabel07e0dabb638d84a);
    var CopyFlexContainer032d61b33af5f40 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer032d61b33af5f40",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer032d61b33af5f40.setDefaultUnit(kony.flex.DP);
    var CopyImage0e7f92edb10b440 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "CopyImage0e7f92edb10b440",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_check.png",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0f0cc5a34c91343 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel0f0cc5a34c91343",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0332856b8a8da4f",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer032d61b33af5f40.add(CopyImage0e7f92edb10b440, CopyLabel0f0cc5a34c91343);
    var CopyFlexContainer045dc28f1ab6e49 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer045dc28f1ab6e49",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer045dc28f1ab6e49.setDefaultUnit(kony.flex.DP);
    var CopyImage04535f57ba15049 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "CopyImage04535f57ba15049",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_check.png",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel04d1b91500a1545 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel04d1b91500a1545",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0332856b8a8da4f",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer045dc28f1ab6e49.add(CopyImage04535f57ba15049, CopyLabel04d1b91500a1545);
    var CopyFlexContainer0076e73e737f64d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0076e73e737f64d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer0076e73e737f64d.setDefaultUnit(kony.flex.DP);
    var CopyImage0cbf575a32d4442 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "50%",
        "id": "CopyImage0cbf575a32d4442",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_check.png",
        "top": 0,
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0b12f35373f7241 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel0b12f35373f7241",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0332856b8a8da4f",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0076e73e737f64d.add(CopyImage0cbf575a32d4442, CopyLabel0b12f35373f7241);
    flexSocialButtons.add(CopyFlexContainer0b9de7f44ab4145, CopyFlexContainer032d61b33af5f40, CopyFlexContainer045dc28f1ab6e49, CopyFlexContainer0076e73e737f64d);
    var flexCopyright = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "47%",
        "id": "flexCopyright",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "right": "0%",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%"
    }, {}, {});
    flexCopyright.setDefaultUnit(kony.flex.DP);
    var FlexContainer05097c80182204d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer05097c80182204d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "right": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "94%"
    }, {}, {});
    FlexContainer05097c80182204d.setDefaultUnit(kony.flex.DP);
    var FlexContainer0bf6527be8edc4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer0bf6527be8edc4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    FlexContainer0bf6527be8edc4f.setDefaultUnit(kony.flex.DP);
    var Image0b6bb3101240649 = new kony.ui.Image2({
        "height": "50%",
        "id": "Image0b6bb3101240649",
        "isVisible": true,
        "left": "20%",
        "skin": "slImage",
        "src": "icon_check.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage05336b1d8737c49 = new kony.ui.Image2({
        "height": "50%",
        "id": "CopyImage05336b1d8737c49",
        "isVisible": true,
        "right": "20%",
        "skin": "slImage",
        "src": "icon_check.png",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label00661b20d66cf4e = new kony.ui.Label({
        "height": "50%",
        "id": "Label00661b20d66cf4e",
        "isVisible": true,
        "left": "50%",
        "skin": "CopyslLabel0332856b8a8da4f",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel03fd4ef465d9a48 = new kony.ui.Label({
        "height": "50%",
        "id": "CopyLabel03fd4ef465d9a48",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0332856b8a8da4f",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "50%",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexContainer0edfd4fe8a07b42 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "FlexContainer0edfd4fe8a07b42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "CopyslFbox033ff03d29a1e43",
        "top": "0%",
        "width": "0.50%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0edfd4fe8a07b42.setDefaultUnit(kony.flex.DP);
    FlexContainer0edfd4fe8a07b42.add();
    FlexContainer0bf6527be8edc4f.add(Image0b6bb3101240649, CopyImage05336b1d8737c49, Label00661b20d66cf4e, CopyLabel03fd4ef465d9a48, FlexContainer0edfd4fe8a07b42);
    FlexContainer05097c80182204d.add(FlexContainer0bf6527be8edc4f);
    flexCopyright.add(FlexContainer05097c80182204d);
    flexBoxFooter.add(flexSocialButtons, flexCopyright);
    flxCntrHome.add(FlexContainer06dc7ef4d4a494b, flexBoxFooter);
    frmHome.add(MenuContainer, flxCntrHome);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "headers": [flxContainerThreeOptions],
        "id": "frmHome",
        "init": AS_Form_d55fa7467c0a4098aa60cdbcc50e946e,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_f0d7f46342d944f8a5b67ccbec538c1e,
        "preShow": AS_Form_bfa8fecdbef84c5fa8d39d5ada65ffed,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": AS_Form_69b1eec07d0d42658e84b57a5f372709,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmHome.info = {
        "kuid": "979e555fb19d4cd7a7ffcaf53cf45019"
    };
};