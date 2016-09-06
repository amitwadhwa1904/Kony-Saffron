function addWidgetsfrmRegister() {
    frmRegister.setDefaultUnit(kony.flex.DP);
    var FlexScrollContainer0b91c374370c64f = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexScrollContainer0b91c374370c64f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "sknSFCTransparent",
        "top": "0dp",
        "verticalScrollIndicator": false,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexScrollContainer0b91c374370c64f.setDefaultUnit(kony.flex.DP);
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
    var txtName = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtGrey",
        "height": "40dp",
        "id": "txtName",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "42dp",
        "placeholder": "Name",
        "secureTextEntry": false,
        "skin": "sknTxtGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "35dp",
        "width": "75%"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtGrey",
        "height": "40dp",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "left": "41dp",
        "placeholder": "Email",
        "secureTextEntry": false,
        "skin": "sknTxtGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "15dp",
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
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtMobile = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtGrey",
        "height": "40dp",
        "id": "txtMobile",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "41dp",
        "placeholder": "Mobile",
        "secureTextEntry": false,
        "skin": "sknTxtGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "top": "15dp",
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
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtGrey",
        "height": "40dp",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "41dp",
        "placeholder": "Password",
        "secureTextEntry": true,
        "skin": "sknTxtGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "15dp",
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
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtConfirmPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtGrey",
        "height": "40dp",
        "id": "txtConfirmPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "41dp",
        "placeholder": "Confirm Password",
        "secureTextEntry": true,
        "skin": "sknTxtGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "15dp",
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
        "placeholderSkin": "sknPlaceholder",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var CopyButton09a24aed5924741 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnGreen",
        "height": "40dp",
        "id": "CopyButton09a24aed5924741",
        "isVisible": true,
        "onClick": AS_Button_bbdc1ecbd03c479388a2833b76329ffb,
        "skin": "sknBtnGreen",
        "text": "Register",
        "top": "25dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer06dc7ef4d4a494b.add(txtName, txtEmail, txtMobile, txtPassword, txtConfirmPassword, CopyButton09a24aed5924741);
    var flexBoxFooter = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
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
        "skin": "sknFCFooterSocial",
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
        "skin": "sknRichFooterTxt",
        "text": "Call Now\n\n\n",
        "top": "8dp",
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
        "skin": "sknFCFooterSocial",
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
        "centerX": "50.00%",
        "id": "CopyRichText0cd55c3bc5c0b4e",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknRichFooterTxt",
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
        "skin": "sknFCFooterSocial",
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
        "skin": "sknRichFooterTxt",
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
        "skin": "sknFCFooterSocial",
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
        "skin": "sknRichFooterTxt",
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
        "skin": "sknFCFooterSocial",
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
        "centerY": "65.00%",
        "id": "CopyRichText091ac43d974cc43",
        "isVisible": true,
        "left": "1.97%",
        "skin": "sknRichFooterTxt",
        "text": "@Copyright <br> Cafe Saffron South Morang\n\n\n\n\n",
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
        "skin": "sknRichFooterTxt",
        "text": "1/5 Danaher Dr, South Morang <br>VIC 3752, Australia\n\n\n",
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
    FlexScrollContainer0b91c374370c64f.add(FlexContainer06dc7ef4d4a494b, flexBoxFooter);
    frmRegister.add(FlexScrollContainer0b91c374370c64f);
};

function frmRegisterGlobals() {
    frmRegister = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRegister,
        "enabledForIdleTimeout": false,
        "headers": [flxContainerNoOption],
        "id": "frmRegister",
        "init": AS_Form_0478c210d53544fab76d1b6d8ce38612,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_eb3023d3c3784b4cac270374a34ef9ea,
        "preShow": AS_Form_6436f290816d4734b88bd9de265e265f,
        "skin": "sknMainBG"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmRegister.info = {
        "kuid": "47027fab70ca4ab3adcaf4a15c9334b6"
    };
};