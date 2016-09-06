function addWidgetsfrmForgotPwd() {
    frmForgotPwd.setDefaultUnit(kony.flex.DP);
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
        "zIndex": 2
    }, {}, {});
    FlexScrollContainer0b91c374370c64f.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0b5fd561787784b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "68.07%",
        "id": "CopyFlexContainer0b5fd561787784b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0b5fd561787784b.setDefaultUnit(kony.flex.DP);
    var Label0ab3e92380eb74f = new kony.ui.Label({
        "centerX": "50%",
        "id": "Label0ab3e92380eb74f",
        "isVisible": true,
        "skin": "sknLbl110Normal",
        "text": "Enter the email address you used to create your account and we will send you an email with instructions on how to reset your PIN.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtEmail = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "centerX": "50%",
        "focusSkin": "sknTxtGrey",
        "height": "40dp",
        "id": "txtEmail",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_EMAIL,
        "left": "42dp",
        "placeholder": "Email",
        "secureTextEntry": false,
        "skin": "sknTxtGrey",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "80dp",
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
    var CopyButton0849440b0560049 = new kony.ui.Button({
        "centerX": "50.03%",
        "focusSkin": "sknBtnGreen",
        "height": "40dp",
        "id": "CopyButton0849440b0560049",
        "isVisible": true,
        "left": "58dp",
        "onClick": AS_Button_6715165ac7784481822da09dfbe47dcd,
        "skin": "sknBtnGreen",
        "text": "Send Email",
        "top": "20dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0b5fd561787784b.add(Label0ab3e92380eb74f, txtEmail, CopyButton0849440b0560049);
    var CopyflexBoxFooter04e2e59cb7fac46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": 140,
        "id": "CopyflexBoxFooter04e2e59cb7fac46",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFCTransparent",
        "top": "2%",
        "width": "100%"
    }, {}, {});
    CopyflexBoxFooter04e2e59cb7fac46.setDefaultUnit(kony.flex.DP);
    var CopyflexSocialButtons073e7d19afe6747 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "clipBounds": true,
        "height": "49%",
        "id": "CopyflexSocialButtons073e7d19afe6747",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyflexSocialButtons073e7d19afe6747.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer074f35270e34442 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer074f35270e34442",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3%",
        "skin": "sknFCFooterSocial",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer074f35270e34442.setDefaultUnit(kony.flex.DP);
    var CopyImage09df842f4b9f247 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage09df842f4b9f247",
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
    var CopyRichText0dcc9f4de36d241 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText0dcc9f4de36d241",
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
    CopyFlexContainer074f35270e34442.add(CopyImage09df842f4b9f247, CopyRichText0dcc9f4de36d241);
    var CopyFlexContainer07ac816dcfa484c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer07ac816dcfa484c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "sknFCFooterSocial",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer07ac816dcfa484c.setDefaultUnit(kony.flex.DP);
    var CopyImage0b9c99f9d423a4b = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage0b9c99f9d423a4b",
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
    var CopyRichText0a51b10bc4b9947 = new kony.ui.RichText({
        "centerX": "50.00%",
        "id": "CopyRichText0a51b10bc4b9947",
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
    CopyFlexContainer07ac816dcfa484c.add(CopyImage0b9c99f9d423a4b, CopyRichText0a51b10bc4b9947);
    var CopyFlexContainer0699fd285385f47 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0699fd285385f47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "sknFCFooterSocial",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer0699fd285385f47.setDefaultUnit(kony.flex.DP);
    var CopyImage03f897be6f3124f = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage03f897be6f3124f",
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
    var CopyRichText0898deb2386e046 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText0898deb2386e046",
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
    CopyFlexContainer0699fd285385f47.add(CopyImage03f897be6f3124f, CopyRichText0898deb2386e046);
    var CopyFlexContainer031533160ac3646 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer031533160ac3646",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "skin": "sknFCFooterSocial",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer031533160ac3646.setDefaultUnit(kony.flex.DP);
    var CopyImage0ad37780db7c74a = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage0ad37780db7c74a",
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
    var CopyRichText064ecd7a619e646 = new kony.ui.RichText({
        "centerX": "50%",
        "id": "CopyRichText064ecd7a619e646",
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
    CopyFlexContainer031533160ac3646.add(CopyImage0ad37780db7c74a, CopyRichText064ecd7a619e646);
    CopyflexSocialButtons073e7d19afe6747.add(CopyFlexContainer074f35270e34442, CopyFlexContainer07ac816dcfa484c, CopyFlexContainer0699fd285385f47, CopyFlexContainer031533160ac3646);
    var CopyflexCopyright005e09db9aff340 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "47%",
        "id": "CopyflexCopyright005e09db9aff340",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "right": "0%",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%"
    }, {}, {});
    CopyflexCopyright005e09db9aff340.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0d466d0d902ff4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0d466d0d902ff4e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "right": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "94%"
    }, {}, {});
    CopyFlexContainer0d466d0d902ff4e.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer04f077f61894f48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer04f077f61894f48",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFCFooterSocial",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer04f077f61894f48.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer002bd964505834e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyFlexContainer002bd964505834e",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "CopyslFbox033ff03d29a1e43",
        "top": "0%",
        "width": "0.50%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer002bd964505834e.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer002bd964505834e.add();
    var CopyRichText0ff4f69b059144a = new kony.ui.RichText({
        "centerY": "65.00%",
        "id": "CopyRichText0ff4f69b059144a",
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
    var CopyRichText082d4443561c44e = new kony.ui.RichText({
        "centerY": "65%",
        "id": "CopyRichText082d4443561c44e",
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
    var CopyImage071883d31541744 = new kony.ui.Image2({
        "height": "35%",
        "id": "CopyImage071883d31541744",
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
    var CopyImage05ea8e0ecfbc44e = new kony.ui.Image2({
        "height": "35%",
        "id": "CopyImage05ea8e0ecfbc44e",
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
    CopyFlexContainer04f077f61894f48.add(CopyFlexContainer002bd964505834e, CopyRichText0ff4f69b059144a, CopyRichText082d4443561c44e, CopyImage071883d31541744, CopyImage05ea8e0ecfbc44e);
    CopyFlexContainer0d466d0d902ff4e.add(CopyFlexContainer04f077f61894f48);
    CopyflexCopyright005e09db9aff340.add(CopyFlexContainer0d466d0d902ff4e);
    CopyflexBoxFooter04e2e59cb7fac46.add(CopyflexSocialButtons073e7d19afe6747, CopyflexCopyright005e09db9aff340);
    FlexScrollContainer0b91c374370c64f.add(CopyFlexContainer0b5fd561787784b, CopyflexBoxFooter04e2e59cb7fac46);
    frmForgotPwd.add(FlexScrollContainer0b91c374370c64f);
};

function frmForgotPwdGlobals() {
    frmForgotPwd = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmForgotPwd,
        "enabledForIdleTimeout": false,
        "headers": [flxContainerNoOption],
        "id": "frmForgotPwd",
        "init": AS_Form_f4d683ac2d2c409d90734b44636372c8,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_c5c2f11c11b64aac8ad40c0eb79f8074,
        "preShow": AS_Form_abb7b4f353c84ca5931d0b731aee911e,
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
    frmForgotPwd.info = {
        "kuid": "4330a29820124e05a43b6213d57b3353"
    };
};