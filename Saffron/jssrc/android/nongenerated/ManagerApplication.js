/**
 * Application id
 */
var gAppId = "KonyTemplate";
var gUseApi = false;
var gDebug = true;
var gRememberMe_Support = true;
var googleAnalytics = null;
var callbacksObj = {
    onbackground: onAppBackground,
    onforeground: onAppForeground
};
var menuVisibility = false;
/**
 * application_post_init - for executing the business logic at the Post App Init of the application
 */
function application_post_init() {
    appscore.print.start();
    menuVisibility = false;
    //	googleAnalytics = new ganalytics.GAnalyticsLib("dsfhjdfhsdhskh"); //UA-80818309-1 for MyPower
    kony.application.setApplicationCallbacks(callbacksObj);
    if (loginManager.getLogin() != null) {
        // Validate token
        var token = loginManager.getLogin().token;
        // If token is valid  then navigate to FormMenu
        // invokeAppService("Login", {"token":token}, function(){status, resultTable});
        // else navigate to FormLogin
        return frmSplash;
    }
    appscore.print.stop();
}
/**
 * on_off_switch_widget - For toggling the ON/OFF switch
 *
 * @param  {widget} imageWidget Image widget ID whose src needs to be modified 
 */
function on_off_switch_widget(imageWidget) {
    if (imageWidget.src == IMG_SRC_CHECK) {
        imageWidget.src = IMG_SRC_UNCHECK;
    } else {
        imageWidget.src = IMG_SRC_CHECK;
    }
}
/**
 * onAppBackground - for executing the business logic when App goes in background
 */
function onAppBackground() {
    appscore.print.start();
    appscore.print.stop();
}
/**
 * onAppForeground - for executing the business logic when App comes in foreground
 */
function onAppForeground() {
    appscore.print.start();
    appscore.print.stop();
}

function getformTrackerName() {
    switch (kony.application.getCurrentForm().id) {
        case "FormPowerOutageBrowser":
            return "Power Outage"
            break;
        case "FormAboutUs2":
            return "About Us"
            break;
        default:
            return kony.application.getCurrentForm().id;
            break;
    }
}
// call this below method in every postshow
function trackForm() {
    googleAnalytics.trackForm(getformTrackerName());
}

function openFacebookLink() {
    kony.application.openURL("fb://page/facebook.com/SaffronSouthMorang/");
}

function openWebLink() {
    kony.application.openURL("https://www.eatatsaffron.com.au/");
}

function dialMyNumber() {
    kony.phone.dial("0394041844");
}

function openMapApp() {
    kony.application.openURL("http://maps.google.com/maps?daddr=1/5+Danaher+Dr,+South+Morang+VIC+3752");
}