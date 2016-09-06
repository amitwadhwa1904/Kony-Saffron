function addWidgetsfrmChangePwd() {
    frmChangePwd.setDefaultUnit(kony.flex.DP);
    frmChangePwd.add();
};

function frmChangePwdGlobals() {
    frmChangePwd = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmChangePwd,
        "enabledForIdleTimeout": false,
        "id": "frmChangePwd",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
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
    frmChangePwd.info = {
        "kuid": "d4a38d5b138a4e9593119025688db651"
    };
};