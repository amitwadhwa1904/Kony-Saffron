function initializeflxhdrWithTwoOptions() {
    flxContainerTwoOptions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxContainerTwoOptions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "CopyslFbox03c9f9fc4a8704d"
    }, {}, {});
    flxContainerTwoOptions.setDefaultUnit(kony.flex.DP);
    var flxBoxLeft = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxBoxLeft",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "CopyslFbox0d1eab10cd2e942",
        "top": "0dp",
        "width": "13%"
    }, {}, {});
    flxBoxLeft.setDefaultUnit(kony.flex.DP);
    var imgLeft = new kony.ui.Image2({
        "centerY": "50%",
        "id": "imgLeft",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_back.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBoxLeft.add(imgLeft);
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
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 4, 0, 4],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxBoxRight = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxBoxRight",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0f70fff0b991c43",
        "top": "0dp",
        "width": "13%"
    }, {}, {});
    flxBoxRight.setDefaultUnit(kony.flex.DP);
    var CopyimgLeft05b1c72790a6e4b = new kony.ui.Image2({
        "centerY": "50%",
        "id": "CopyimgLeft05b1c72790a6e4b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "icon_back.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBoxRight.add(CopyimgLeft05b1c72790a6e4b);
    flxContainerTwoOptions.add(flxBoxLeft, lblHeader, flxBoxRight);
}