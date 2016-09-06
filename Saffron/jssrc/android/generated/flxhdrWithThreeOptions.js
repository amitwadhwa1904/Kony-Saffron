function initializeflxhdrWithThreeOptions() {
    flxContainerThreeOptions = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flxContainerThreeOptions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "sknFCWhiteBG"
    }, {}, {});
    flxContainerThreeOptions.setDefaultUnit(kony.flex.DP);
    var flxBoxLeft = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "flxBoxLeft",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "13%"
    }, {}, {});
    flxBoxLeft.setDefaultUnit(kony.flex.DP);
    var imgLeft = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50%",
        "id": "imgLeft",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslImage056512607672942",
        "src": "menus.png",
        "top": "0dp",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblLoginTxt = new kony.ui.RichText({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblLoginTxt",
        "isVisible": true,
        "left": "0dp",
        "skin": "sknRichFooterTxt",
        "text": "<b>Log In-></b>\n\n\n",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBoxLeft.add(imgLeft, lblLoginTxt);
    var CopyflxBoxLeft027e81a001e5b41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "29%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "CopyflxBoxLeft027e81a001e5b41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_85c668c9207d4beeb8f290cc9aad5715,
        "skin": "sknFCTransparent",
        "top": "0dp",
        "width": "50%"
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
    var Button0693d64276a7b4b = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnOrange",
        "height": "60%",
        "id": "Button0693d64276a7b4b",
        "isVisible": true,
        "left": "2%",
        "skin": "sknBtnOrange",
        "text": "Order Now",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxContainerThreeOptions.add(flxBoxLeft, CopyflxBoxLeft027e81a001e5b41, Button0693d64276a7b4b);
}