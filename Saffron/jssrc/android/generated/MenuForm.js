function addWidgetsMenuForm() {
    MenuForm.setDefaultUnit(kony.flex.DP);
    var MainMenuContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MainMenuContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%"
    }, {}, {});
    MainMenuContainer.setDefaultUnit(kony.flex.DP);
    var Label003a6ebb6aa324e = new kony.ui.Label({
        "id": "Label003a6ebb6aa324e",
        "isVisible": true,
        "left": "62dp",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "165dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    MainMenuContainer.add(Label003a6ebb6aa324e);
    MenuForm.add(MainMenuContainer);
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