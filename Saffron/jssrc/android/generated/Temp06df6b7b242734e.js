function initializeTemp06df6b7b242734e() {
    FlexContainer098980dc380cb47 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainer098980dc380cb47",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox"
    }, {}, {});
    FlexContainer098980dc380cb47.setDefaultUnit(kony.flex.DP);
    var Image08814168447bd42 = new kony.ui.Image2({
        "centerX": "50%",
        "height": "60%",
        "id": "Image08814168447bd42",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "80%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var RichText09900695711024d = new kony.ui.RichText({
        "centerX": "50%",
        "id": "RichText09900695711024d",
        "isVisible": true,
        "left": "0dp",
        "skin": "slRichText",
        "text": "RichText",
        "top": "1dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexContainer098980dc380cb47.add(Image08814168447bd42, RichText09900695711024d);
}