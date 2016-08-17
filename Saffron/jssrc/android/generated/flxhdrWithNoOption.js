function initializeflxhdrWithNoOption() {
    flxContainerNoOption = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxContainerNoOption",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox03c9f9fc4a8704d"
    }, {}, {});
    flxContainerNoOption.setDefaultUnit(kony.flex.DP);
    var flxBoxLeft = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxBoxLeft",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d1eab10cd2e942",
        "top": "0dp",
        "width": "18%"
    }, {}, {});
    flxBoxLeft.setDefaultUnit(kony.flex.DP);
    flxBoxLeft.add();
    var lblHeader = new kony.ui.Label({
        "bottom": 0,
        "centerY": "50%",
        "id": "lblHeader",
        "isVisible": true,
        "left": "0dp",
        "right": 0,
        "skin": "CopyslLabel0fadfeb7e6a1349",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxBoxRight = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxBoxRight",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "right": "2%",
        "skin": "CopyslFbox0f70fff0b991c43",
        "top": "0dp",
        "width": "18%"
    }, {}, {});
    flxBoxRight.setDefaultUnit(kony.flex.DP);
    flxBoxRight.add();
    flxContainerNoOption.add(flxBoxLeft, lblHeader, flxBoxRight);
}