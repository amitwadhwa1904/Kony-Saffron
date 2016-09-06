function addWidgetsfrmAboutUs() {
    frmAboutUs.setDefaultUnit(kony.flex.DP);
    var flxCntrHome = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxCntrHome",
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
    flxCntrHome.setDefaultUnit(kony.flex.DP);
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
    var CopyFlexContainer00b44d929cb2c48 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "CopyFlexContainer00b44d929cb2c48",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3%",
        "right": "3%",
        "skin": "sknFCAbout",
        "top": "4%",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer00b44d929cb2c48.setDefaultUnit(kony.flex.DP);
    var CopyLabel0414faec4cf3c4d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0414faec4cf3c4d",
        "isVisible": true,
        "skin": "sknLbl130NormalRed",
        "text": "About Cafe Saffron",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel079d9fcd98cb04a = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel079d9fcd98cb04a",
        "isVisible": true,
        "skin": "sknLbl110Normal",
        "text": "Cafe Saffron South Morang is at your service for more than 7 years. We celebrate your birthdays, marriages and anniversaries. We pride ourselves by sharing your joys, your dance, your music. Food is our passion and your satisfaction is our goal.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel08acdedd11aff4d = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel08acdedd11aff4d",
        "isVisible": true,
        "skin": "sknLbl110Bold",
        "text": "A seal of quality food and superior service. You are welcome @ Cafe Saffron in South Morang.",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": "90%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var CopyLabel0a7241f106c054f = new kony.ui.Label({
        "centerX": "50%",
        "id": "CopyLabel0a7241f106c054f",
        "isVisible": true,
        "skin": "sknLbl90NormalRed",
        "text": "Version 1.0.0",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "14%",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer00b44d929cb2c48.add(CopyLabel0414faec4cf3c4d, CopyLabel079d9fcd98cb04a, CopyLabel08acdedd11aff4d, CopyLabel0a7241f106c054f);
    CopyFlexContainer0b5fd561787784b.add(CopyFlexContainer00b44d929cb2c48);
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
        "skin": "sknFCTransparent",
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
        "skin": "sknFCFooterSocialAbout",
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
        "skin": "sknFCFooterSocialAbout",
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
        "skin": "sknFCFooterSocialAbout",
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
        "skin": "sknFCFooterSocialAbout",
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
        "skin": "sknFCTransparent",
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
        "skin": "sknFCFooterSocialAbout",
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
    flxCntrHome.add(CopyFlexContainer0b5fd561787784b, CopyflexBoxFooter04e2e59cb7fac46);
    var MenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-82%",
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "82%",
        "zIndex": 2
    }, {}, {});
    MenuContainer.setDefaultUnit(kony.flex.DP);
    MenuContainer.add();
    frmAboutUs.add(flxCntrHome, MenuContainer);
};

function frmAboutUsGlobals() {
    frmAboutUs = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmAboutUs,
        "enabledForIdleTimeout": false,
        "headers": [flxContainerThreeOptions],
        "id": "frmAboutUs",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "postShow": AS_Form_ac853ebe2a584b06bfe871fdcc6310b8,
        "preShow": AS_Form_a63f4ec3301e4ab492b5b88f06ca84e9,
        "skin": "sknAboutBG"
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
    frmAboutUs.info = {
        "kuid": "a4956118dfbe4a7a98042f85077b04ac"
    };
};