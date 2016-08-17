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
        "top": "165dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
    MenuForm.info = {
        "kuid": "9713f86d5dc249ffba137afbe6d96d7f"
    };
};