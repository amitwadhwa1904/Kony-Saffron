function addWidgetsfrmSplash() {
    frmSplash.add();
};

function frmSplashGlobals() {
    frmSplash = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSplash,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmSplash",
        "needAppMenu": true,
        "postShow": AS_Form_0244ac674d7c4f429633ff1a5a30325e,
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
    frmSplash.info = {
        "kuid": "p2kwiet120482477621"
    };
};