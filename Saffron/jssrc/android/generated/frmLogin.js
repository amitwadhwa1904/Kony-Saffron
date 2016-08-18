function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var FlexContainer03de438e5fa574e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexContainer03de438e5fa574e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer03de438e5fa574e.setDefaultUnit(kony.flex.DP);
    var FlexContainer06dc7ef4d4a494b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "68.07%",
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
        "width": "75%"
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
        "width": "75%",
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
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "Button01ecb6c0c852646",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_f3855abb3b464ff5a595cfd745eec005,
        "skin": "CopyslButtonGlossBlue01763c2c96ba941",
        "text": "Login",
        "top": "50dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Label05b229a7bc00a4b = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label05b229a7bc00a4b",
        "isVisible": true,
        "left": "140dp",
        "skin": "CopyslLabel0fce4dce149cb4d",
        "text": "Forgot Password",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": "40%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyButton09a24aed5924741 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "CopyButton09a24aed5924741",
        "isVisible": true,
        "left": "58dp",
        "skin": "CopyslButtonGlossBlue015902fd302bd41",
        "text": "Register",
        "top": "20dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer06dc7ef4d4a494b.add(txtEmail, txtPassword, Button01ecb6c0c852646, Label05b229a7bc00a4b, CopyButton09a24aed5924741);
    var flexBoxFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1dp",
        "clipBounds": true,
        "height": 140,
        "id": "flexBoxFooter",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
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
        "height": "35%",
        "id": "CopyImage0841740ee407a43",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "call.png",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var RichText0231a8a746a6f4e = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichText0231a8a746a6f4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText01dafd406fa6d4c",
        "text": "Call <br>Now\n\n\n",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0b9de7f44ab4145.add(CopyImage0841740ee407a43, RichText0231a8a746a6f4e);
    var CopyFlexContainer06cff06e1b15142 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer06cff06e1b15142",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer06cff06e1b15142.setDefaultUnit(kony.flex.DP);
    var CopyImage02957109dfd8f49 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage02957109dfd8f49",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "fb.png",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText0cd55c3bc5c0b4e = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText0cd55c3bc5c0b4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText01dafd406fa6d4c",
        "text": "Like on<br>Facebook\n\n\n",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer06cff06e1b15142.add(CopyImage02957109dfd8f49, CopyRichText0cd55c3bc5c0b4e);
    var CopyFlexContainer0f7e18488b20344 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0f7e18488b20344",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer0f7e18488b20344.setDefaultUnit(kony.flex.DP);
    var CopyImage0a590da7a421542 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage0a590da7a421542",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "twitter.png",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText0edccdabe14b740 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText0edccdabe14b740",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText01dafd406fa6d4c",
        "text": "Follow on<br>Twitter\n\n\n",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0f7e18488b20344.add(CopyImage0a590da7a421542, CopyRichText0edccdabe14b740);
    var CopyFlexContainer06a4e6ade7a164c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer06a4e6ade7a164c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "CopyslFbox01e119060c68645",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer06a4e6ade7a164c.setDefaultUnit(kony.flex.DP);
    var CopyImage0abb821de979844 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage0abb821de979844",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "instagram.png",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText07ae37432aa2e45 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText07ae37432aa2e45",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslRichText01dafd406fa6d4c",
        "text": "Follow on<br>Instagram\n\n\n\n\n",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer06a4e6ade7a164c.add(CopyImage0abb821de979844, CopyRichText07ae37432aa2e45);
    flexSocialButtons.add(CopyFlexContainer0b9de7f44ab4145, CopyFlexContainer06cff06e1b15142, CopyFlexContainer0f7e18488b20344, CopyFlexContainer06a4e6ade7a164c);
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
    var CopyRichText091ac43d974cc43 = new kony.ui.RichText({
        "centerY": "65%",
        "id": "CopyRichText091ac43d974cc43",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslRichText01dafd406fa6d4c",
        "text": "@Copyright <br>gg\n\n\n\n\n",
        "top": "5dp",
        "width": "46%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyRichText0ed482804f98a48 = new kony.ui.RichText({
        "centerY": "65%",
        "id": "CopyRichText0ed482804f98a48",
        "isVisible": true,
        "left": "52%",
        "skin": "CopyslRichText01dafd406fa6d4c",
        "text": "Call <br>Now\n\n\n",
        "top": "5dp",
        "width": "46%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage03330d1d1649d4c = new kony.ui.Image2({
        "height": "35%",
        "id": "CopyImage03330d1d1649d4c",
        "isVisible": true,
        "left": "22%",
        "skin": "slImage",
        "src": "copyrights.png",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0045959e292fb41 = new kony.ui.Image2({
        "height": "35%",
        "id": "CopyImage0045959e292fb41",
        "isVisible": true,
        "left": "72%",
        "skin": "slImage",
        "src": "map.png",
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer0bf6527be8edc4f.add(FlexContainer0edfd4fe8a07b42, CopyRichText091ac43d974cc43, CopyRichText0ed482804f98a48, CopyImage03330d1d1649d4c, CopyImage0045959e292fb41);
    FlexContainer05097c80182204d.add(FlexContainer0bf6527be8edc4f);
    flexCopyright.add(FlexContainer05097c80182204d);
    flexBoxFooter.add(flexSocialButtons, flexCopyright);
    FlexContainer03de438e5fa574e.add(FlexContainer06dc7ef4d4a494b, flexBoxFooter);
    frmLogin.add(FlexContainer03de438e5fa574e);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "allowHorizontalBounce": false,
        "allowVerticalBounce": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "headers": [flxContainerNoOption],
        "id": "frmLogin",
        "init": AS_Form_6d9892a1c9604296a5cd04773f4904b1,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "postShow": AS_Form_a763c435a8874298a41f3d4c56024164,
        "preShow": AS_Form_3d5d406272d34ed29f9dd02ec6949b76,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmLogin.info = {
        "kuid": "36f5225924db42d387dd619732bc21b3"
    };
};