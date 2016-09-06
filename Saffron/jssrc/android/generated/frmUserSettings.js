function addWidgetsfrmUserSettings() {
    frmUserSettings.setDefaultUnit(kony.flex.DP);
    frmUserSettings.add();
};

function frmUserSettingsGlobals() {
    frmUserSettings = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmUserSettings,
        "enabledForIdleTimeout": false,
        "id": "frmUserSettings",
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
    frmUserSettings.info = {
        "kuid": "f798eea0f928476393e0b7ee3a557e98"
    };
};