function frmAboutUs_setUI() {
    // 	header_setUI(frmAboutUs);
}

function frmAboutUs_preShow() {
    appscore.print.start();
    header_setUI(frmAboutUs);
    appscore.print.stop();
}

function frmAboutUs_postShow() {
    appscore.print.start();
    hideMenu(frmAboutUs);
    appscore.print.stop();
}