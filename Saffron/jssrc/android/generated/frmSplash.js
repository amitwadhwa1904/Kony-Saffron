function addWidgetsfrmSplash() {
    frmSplash.add();
};

function frmSplashGlobals() {
    frmSplash = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSplash,
        "enabledForIdleTimeout": false,
        "id": "frmSplash",
        "needAppMenu": true,
        "postShow": AS_Form_0244ac674d7c4f429633ff1a5a30325e,
        "skin": "sknSplashScreen"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmSplash.info = {
        "kuid": "p2kwiet120482477621"
    };
};