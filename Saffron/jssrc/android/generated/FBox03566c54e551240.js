function initializeFBox03566c54e551240() {
    FBox03566c54e551240 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FBox03566c54e551240",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {}, {});
    FBox03566c54e551240.setDefaultUnit(kony.flex.DP);
    var imgPromoBanner = new kony.ui.Image2({
        "height": "100%",
        "id": "imgPromoBanner",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    FBox03566c54e551240.add(imgPromoBanner);
}