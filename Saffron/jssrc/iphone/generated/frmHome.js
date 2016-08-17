function addWidgetsfrmHome() {
    var lblHeading = new kony.ui.Label({
        "id": "lblHeading",
        "isVisible": true,
        "skin": "CopyslLabel08e26d59f60544e",
        "text": "Home Page"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 10, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmHome.add(lblHeading);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "headers": [hBoxHeader],
        "id": "frmHome",
        "init": AS_Form_f77ddb81de0049369632ccf69bfaa45f,
        "needAppMenu": true,
        "postShow": AS_Form_d54c66f87c724af4b14f1d9b20b262f3,
        "preShow": AS_Form_98909c99fc344e1b86765c83af4d5649,
        "skin": "sknWhiteBackground"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": false
    });
    frmHome.info = {
        "kuid": "p2kwiet12048247761"
    };
};