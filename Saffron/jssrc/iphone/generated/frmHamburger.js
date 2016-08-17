function addWidgetsfrmHamburger() {
    frmHamburger.setDefaultUnit(kony.flex.DP);
    var flxCntrHome = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxCntrHome",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxCntrHome.setDefaultUnit(kony.flex.DP);
    var FlexContainer0fd7486239e1243 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0fd7486239e1243",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0",
        "top": "0",
        "width": "100%"
    }, {}, {});
    FlexContainer0fd7486239e1243.setDefaultUnit(kony.flex.DP);
    var lblHeader = new kony.ui.Label({
        "id": "lblHeader",
        "isVisible": true,
        "left": "135dp",
        "text": "Home",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Button04c7bd006b3fb42 = new kony.ui.Button({
        "height": "37dp",
        "id": "Button04c7bd006b3fb42",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_784a2012b36b43ad9ebf95ee76df7ea4,
        "text": "show",
        "top": "0dp",
        "width": "122dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexContainer0fd7486239e1243.add(lblHeader, Button04c7bd006b3fb42);
    flxCntrHome.add(FlexContainer0fd7486239e1243);
    var MenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "-82%",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    MenuContainer.setDefaultUnit(kony.flex.DP);
    MenuContainer.add();
    var Button05176f42b2f7846 = new kony.ui.Button({
        "height": "50dp",
        "id": "Button05176f42b2f7846",
        "isVisible": true,
        "left": "290dp",
        "onClick": AS_Button_0ea6062bf7004dd484f133ae13d9021f,
        "text": "Button",
        "top": "420dp",
        "width": "95dp",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmHamburger.add(flxCntrHome, MenuContainer, Button05176f42b2f7846);
};

function frmHamburgerGlobals() {
    frmHamburger = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHamburger,
        "enabledForIdleTimeout": false,
        "id": "frmHamburger",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
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
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
    frmHamburger.info = {
        "kuid": "fd13093367eb4d44be0e5fad1fc2e348"
    };
};