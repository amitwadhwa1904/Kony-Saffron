function addWidgetsMenuForm() {
    MenuForm.setDefaultUnit(kony.flex.DP);
    var flxSideMenu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxSideMenu",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFCSideMenu",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    flxSideMenu.setDefaultUnit(kony.flex.DP);
    var FlexContainer0c8627ae6a3f741 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "FlexContainer0c8627ae6a3f741",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFCDark",
        "top": "30dp",
        "width": "100%"
    }, {}, {});
    FlexContainer0c8627ae6a3f741.setDefaultUnit(kony.flex.DP);
    var Label0a787c655778f46 = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0a787c655778f46",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl120Normal",
        "text": "Menu",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [8, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0c8627ae6a3f741.add(Label0a787c655778f46);
    var CopyFlexContainer0bbca421a029d4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer0bbca421a029d4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "30dp",
        "skin": "sknFCTransparent",
        "top": "30dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0bbca421a029d4d.setDefaultUnit(kony.flex.DP);
    var Image0ffbd2c64f69b42 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0ffbd2c64f69b42",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "userprofile.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel04402b9409fd745 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel04402b9409fd745",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl120Normal",
        "text": "My Account",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0bbca421a029d4d.add(Image0ffbd2c64f69b42, CopyLabel04402b9409fd745);
    var FlexContainer028a645779a7f4f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "FlexContainer028a645779a7f4f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFCLine",
        "top": "5dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexContainer028a645779a7f4f.setDefaultUnit(kony.flex.DP);
    FlexContainer028a645779a7f4f.add();
    var CopyFlexContainer0005529c7f8f84c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer0005529c7f8f84c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "30dp",
        "skin": "sknFCTransparent",
        "top": "5dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0005529c7f8f84c.setDefaultUnit(kony.flex.DP);
    var CopyImage09e32b719d65246 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage09e32b719d65246",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "pastorder.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel0f21c6536eb6441 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0f21c6536eb6441",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl120Normal",
        "text": "Past Orders",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0005529c7f8f84c.add(CopyImage09e32b719d65246, CopyLabel0f21c6536eb6441);
    var CopyFlexContainer084c0abf5431343 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer084c0abf5431343",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFCLine",
        "top": "5dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer084c0abf5431343.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer084c0abf5431343.add();
    var CopyFlexContainer0b0ff2e0ff20c4e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer0b0ff2e0ff20c4e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "30dp",
        "skin": "sknFCTransparent",
        "top": "5dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0b0ff2e0ff20c4e.setDefaultUnit(kony.flex.DP);
    var CopyImage0aa83af7b03f346 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0aa83af7b03f346",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "order.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel00a8c3ca79fdd46 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel00a8c3ca79fdd46",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl120Normal",
        "text": "Order Now",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0b0ff2e0ff20c4e.add(CopyImage0aa83af7b03f346, CopyLabel00a8c3ca79fdd46);
    var CopyFlexContainer064a3de00993243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer064a3de00993243",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFCLine",
        "top": "5dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer064a3de00993243.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer064a3de00993243.add();
    var CopyFlexContainer039ffc7990c2442 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer039ffc7990c2442",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "30dp",
        "skin": "sknFCTransparent",
        "top": "5dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer039ffc7990c2442.setDefaultUnit(kony.flex.DP);
    var CopyImage0d50c74f3834a41 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0d50c74f3834a41",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "settings.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel06d082374422840 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel06d082374422840",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl120Normal",
        "text": "Settings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer039ffc7990c2442.add(CopyImage0d50c74f3834a41, CopyLabel06d082374422840);
    var CopyFlexContainer08ac6b3d0d48847 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer08ac6b3d0d48847",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFCLine",
        "top": "5dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer08ac6b3d0d48847.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer08ac6b3d0d48847.add();
    var CopyFlexContainer0df8ee9e2e7ff43 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer0df8ee9e2e7ff43",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "30dp",
        "onClick": AS_FlexContainer_773f1d2a705f4bbb89a6ccadd7d11787,
        "skin": "sknFCTransparent",
        "top": "5dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer0df8ee9e2e7ff43.setDefaultUnit(kony.flex.DP);
    var CopyImage0d49b19e91b6447 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0d49b19e91b6447",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "about.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel099233fa9fde14f = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel099233fa9fde14f",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl120Normal",
        "text": "About Us",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer0df8ee9e2e7ff43.add(CopyImage0d49b19e91b6447, CopyLabel099233fa9fde14f);
    var CopyFlexContainer0155bbe9a6af044 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2dp",
        "id": "CopyFlexContainer0155bbe9a6af044",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "30dp",
        "skin": "sknFCLine",
        "top": "5dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0155bbe9a6af044.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0155bbe9a6af044.add();
    var CopyFlexContainer09a9fd8846c834d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30dp",
        "id": "CopyFlexContainer09a9fd8846c834d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "30dp",
        "onClick": AS_FlexContainer_83369bb9de1e47b3984339d2cdd55061,
        "skin": "sknFCTransparent",
        "top": "5dp",
        "width": "100%"
    }, {}, {});
    CopyFlexContainer09a9fd8846c834d.setDefaultUnit(kony.flex.DP);
    var CopyImage08aa93ce8af924e = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage08aa93ce8af924e",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "logout.png",
        "top": "0dp",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyLabel072a0cec598b84d = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel072a0cec598b84d",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknLbl120Normal",
        "text": "Sign Out",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [5, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer09a9fd8846c834d.add(CopyImage08aa93ce8af924e, CopyLabel072a0cec598b84d);
    flxSideMenu.add(FlexContainer0c8627ae6a3f741, CopyFlexContainer0bbca421a029d4d, FlexContainer028a645779a7f4f, CopyFlexContainer0005529c7f8f84c, CopyFlexContainer084c0abf5431343, CopyFlexContainer0b0ff2e0ff20c4e, CopyFlexContainer064a3de00993243, CopyFlexContainer039ffc7990c2442, CopyFlexContainer08ac6b3d0d48847, CopyFlexContainer0df8ee9e2e7ff43, CopyFlexContainer0155bbe9a6af044, CopyFlexContainer09a9fd8846c834d);
    MenuForm.add(flxSideMenu);
};

function MenuFormGlobals() {
    MenuForm = new kony.ui.Form2({
        "addWidgets": addWidgetsMenuForm,
        "enabledForIdleTimeout": false,
        "id": "MenuForm",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
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
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    MenuForm.info = {
        "kuid": "9713f86d5dc249ffba137afbe6d96d7f"
    };
};