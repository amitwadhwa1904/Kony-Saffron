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
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "82%",
        "zIndex": 2
    }, {}, {});
    MenuContainer.setDefaultUnit(kony.flex.DP);
    MenuContainer.add();
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
        "zIndex": 1
    }, {}, {});
    flxCntrHome.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer099e3b0e81dd54d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "68.07%",
        "id": "CopyFlexContainer099e3b0e81dd54d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer099e3b0e81dd54d.setDefaultUnit(kony.flex.DP);
    var segPromoBanner = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "imgPromoBanner": "picture4.png"
        }, {
            "imgPromoBanner": "masterpass.png"
        }, {
            "imgPromoBanner": "mastercard.png"
        }],
        "groupCells": false,
        "height": "45%",
        "id": "segPromoBanner",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FBox03566c54e551240,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorRequired": false,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "imgPromoBanner": "imgPromoBanner"
        },
        "width": "100%"
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var FCBtns = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "15dp",
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "FCBtns",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "15dp",
        "width": "76%",
        "zIndex": 1
    }, {}, {});
    FCBtns.setDefaultUnit(kony.flex.DP);
    var btnFeaturedDeals = new kony.ui.Button({
        "height": "100%",
        "id": "btnFeaturedDeals",
        "isVisible": true,
        "left": "0.50%",
        "skin": "sknBtnFeaturedDeals",
        "text": "Featured Deals",
        "top": "0dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnViewMenu = new kony.ui.Button({
        "height": "100%",
        "id": "btnViewMenu",
        "isVisible": true,
        "left": "-0.50%",
        "onClick": AS_Button_b9b6b5591c6847b69dd8720a8580fc41,
        "skin": "sknBtnViewMenu",
        "text": "View Menu",
        "top": "0dp",
        "width": "50%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FCBtns.add(btnFeaturedDeals, btnViewMenu);
    var flxSCFeaturedDeals = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": false,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "130dp",
        "horizontalScrollIndicator": false,
        "id": "flxSCFeaturedDeals",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "pagingEnabled": false,
        "right": "3%",
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": false,
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    flxSCFeaturedDeals.setDefaultUnit(kony.flex.DP);
    flxSCFeaturedDeals.add();
    CopyFlexContainer099e3b0e81dd54d.add(segPromoBanner, FCBtns, flxSCFeaturedDeals);
    var CopyflexBoxFooter0adceff23e32d44 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": 140,
        "id": "CopyflexBoxFooter0adceff23e32d44",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "2%",
        "width": "100%"
    }, {}, {});
    CopyflexBoxFooter0adceff23e32d44.setDefaultUnit(kony.flex.DP);
    var CopyflexSocialButtons0be37d670c4714c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "1%",
        "clipBounds": true,
        "height": "49%",
        "id": "CopyflexSocialButtons0be37d670c4714c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyflexSocialButtons0be37d670c4714c.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer009fd893f72c24f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer009fd893f72c24f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "3%",
        "onClick": AS_FlexContainer_5e7f507ed37849a48538c39f195ec980,
        "skin": "sknFCFooterSocial",
        "top": "0dp",
        "width": "22%"
    }, {}, {});
    CopyFlexContainer009fd893f72c24f.setDefaultUnit(kony.flex.DP);
    var CopyImage0310d9ee0201349 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "35%",
        "id": "CopyImage0310d9ee0201349",
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
    CopyFlexContainer009fd893f72c24f.add(CopyImage0310d9ee0201349, RichText0231a8a746a6f4e);
    var CopyFlexContainer06cff06e1b15142 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer06cff06e1b15142",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "2%",
        "onClick": AS_FlexContainer_c9bfd102ec8a4ae1b31c25518163cc64,
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
        "text": "Like us on<br>Facebook\n\n\n",
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
        "onClick": AS_FlexContainer_6066a4ff7f6246c2a7dfd8d6d1693d96,
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
        "src": "applogo.png",
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
        "text": "Visit our<br>Website\n\n\n",
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
        "onClick": AS_FlexContainer_17f294443ce245f68172e7d5035549c4,
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
        "src": "getdirections.png",
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
        "text": "Get<br>Directions\n\n\n\n\n",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer06a4e6ade7a164c.add(CopyImage0abb821de979844, CopyRichText07ae37432aa2e45);
    CopyflexSocialButtons0be37d670c4714c.add(CopyFlexContainer009fd893f72c24f, CopyFlexContainer06cff06e1b15142, CopyFlexContainer0f7e18488b20344, CopyFlexContainer06a4e6ade7a164c);
    var CopyflexCopyright00a2cf0b50ba148 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "47%",
        "id": "CopyflexCopyright00a2cf0b50ba148",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "right": "0%",
        "skin": "slFbox",
        "top": "3%",
        "width": "100%"
    }, {}, {});
    CopyflexCopyright00a2cf0b50ba148.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer06660aa74247047 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer06660aa74247047",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "3%",
        "right": "3%",
        "skin": "slFbox",
        "top": "0%",
        "width": "94%"
    }, {}, {});
    CopyFlexContainer06660aa74247047.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0a0797f28ad9b46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexContainer0a0797f28ad9b46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFCFooterSocial",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0a0797f28ad9b46.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer0ac76f031e13744 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "CopyFlexContainer0ac76f031e13744",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "50%",
        "skin": "CopyslFbox033ff03d29a1e43",
        "top": "0%",
        "width": "0.50%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0ac76f031e13744.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0ac76f031e13744.add();
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
    CopyFlexContainer0a0797f28ad9b46.add(CopyFlexContainer0ac76f031e13744, CopyRichText091ac43d974cc43, CopyRichText0ed482804f98a48, CopyImage03330d1d1649d4c, CopyImage0045959e292fb41);
    CopyFlexContainer06660aa74247047.add(CopyFlexContainer0a0797f28ad9b46);
    CopyflexCopyright00a2cf0b50ba148.add(CopyFlexContainer06660aa74247047);
    CopyflexBoxFooter0adceff23e32d44.add(CopyflexSocialButtons0be37d670c4714c, CopyflexCopyright00a2cf0b50ba148);
    flxCntrHome.add(CopyFlexContainer099e3b0e81dd54d, CopyflexBoxFooter0adceff23e32d44);
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