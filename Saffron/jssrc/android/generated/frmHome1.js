function addWidgetsfrmHome1() {
    var lblHeading = new kony.ui.Label({
        "id": "lblHeading",
        "isVisible": true,
        "skin": "CopyslLabel08e26d59f60544e",
        "text": "Home Page",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
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
        "textCopyable": false
    });
    frmHome1.add(lblHeading);
};

function frmHome1Globals() {
    frmHome1 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome1,
        "enabledForIdleTimeout": false,
        "headers": [hBoxHeader],
        "id": "frmHome1",
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
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "onDeviceBack": AS_Form_f763e968278246eb913154bf2ba1dd9b,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmHome1.info = {
        "kuid": "p2kwiet12048247761"
    };
};