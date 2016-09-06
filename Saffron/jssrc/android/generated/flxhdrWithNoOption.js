function initializeflxhdrWithNoOption() {
    flxContainerNoOption = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxContainerNoOption",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "sknFCWhiteBG"
    }, {}, {});
    flxContainerNoOption.setDefaultUnit(kony.flex.DP);
    var flxBoxLeft = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxBoxLeft",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "2%",
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "18%"
    }, {}, {});
    flxBoxLeft.setDefaultUnit(kony.flex.DP);
    flxBoxLeft.add();
    var CopyflxBoxLeft027e81a001e5b41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "CopyflxBoxLeft027e81a001e5b41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "60%"
    }, {}, {});
    CopyflxBoxLeft027e81a001e5b41.setDefaultUnit(kony.flex.DP);
    var Image058fbe665323643 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "id": "Image058fbe665323643",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "logo.png",
        "top": "0dp",
        "width": "75%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false
    }, {});
    CopyflxBoxLeft027e81a001e5b41.add(Image058fbe665323643);
    var flxBoxRight = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "flxBoxRight",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "right": "2%",
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "18%"
    }, {}, {});
    flxBoxRight.setDefaultUnit(kony.flex.DP);
    flxBoxRight.add();
    flxContainerNoOption.add(flxBoxLeft, CopyflxBoxLeft027e81a001e5b41, flxBoxRight);
}