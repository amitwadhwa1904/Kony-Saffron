//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Saffron",
    appName: "Saffron",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.30.51",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "Saffron",
    isturlbase: "https://appscore.konycloud.com/services",
    isMFApp: true,
    appKey: "cbbc1d8763258b0e6c1198f153ccc6df",
    appSecret: "18a1e827baa4d1fbe5087948ea05ed00",
    serviceUrl: "https://100000005.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "ab345a92-0dea-4956-9281-d274cb138f25",
        "baseId": "92dd98e2-1699-4a7d-b01b-3d97e4747bca",
        "name": "AppMF",
        "selflink": "https://100009418.auth.konycloud.com/appconfig",
        "login": [{
            "type": "oauth2",
            "prov": "FBtesting",
            "url": "https://100009418.auth.konycloud.com",
            "alias": "FBtesting"
        }, {
            "type": "saml",
            "prov": "SAMLtesting",
            "url": "https://100009418.auth.konycloud.com",
            "alias": "SAMLtesting"
        }, {
            "type": "basic",
            "prov": "userstore",
            "url": "https://100009418.auth.konycloud.com",
            "alias": "userstore"
        }],
        "integsvc": {
            "FoxNews": "https://appscore.konycloud.com/services/FoxNews",
            "USWeather": "https://appscore.konycloud.com/services/USWeather",
            "NewService": "https://appscore.konycloud.com/services/NewService",
            "JSONtesting": "https://appscore.konycloud.com/services/JSONtesting",
            "GetDVDMovies": "https://appscore.konycloud.com/services/GetDVDMovies",
            "GetCityFromGPS": "https://appscore.konycloud.com/services/GetCityFromGPS",
            "GetStoreInCity": "https://appscore.konycloud.com/services/GetStoreInCity",
            "SequentialTest": "https://appscore.konycloud.com/services/SequentialTest",
            "Concurrencetest": "https://appscore.konycloud.com/services/Concurrencetest",
            "GetAllDVDMovies": "https://appscore.konycloud.com/services/GetAllDVDMovies",
            "GetStoreInCityForPostprocessor": "https://appscore.konycloud.com/services/GetStoreInCityForPostprocessor"
        },
        "reportingsvc": {
            "custom": "https://appscore.konycloud.com/services/CMS",
            "session": "https://appscore.konycloud.com/services/IST"
        },
        "services_meta": {
            "FoxNews": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/FoxNews",
                "type": "integsvc"
            },
            "USWeather": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/USWeather",
                "type": "integsvc"
            },
            "NewService": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/NewService",
                "type": "integsvc"
            },
            "JSONtesting": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/JSONtesting",
                "type": "integsvc"
            },
            "GetDVDMovies": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/GetDVDMovies",
                "type": "integsvc"
            },
            "GetCityFromGPS": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/GetCityFromGPS",
                "type": "integsvc"
            },
            "GetStoreInCity": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/GetStoreInCity",
                "type": "integsvc"
            },
            "SequentialTest": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/SequentialTest",
                "type": "integsvc"
            },
            "Concurrencetest": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/Concurrencetest",
                "type": "integsvc"
            },
            "GetAllDVDMovies": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/GetAllDVDMovies",
                "type": "integsvc"
            },
            "GetStoreInCityForPostprocessor": {
                "version": "1.0",
                "url": "https://appscore.konycloud.com/services/GetStoreInCityForPostprocessor",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: [],
    url: "https://appscore.konycloud.com/Saffron/MWServlet",
    secureurl: "https://appscore.konycloud.com/Saffron/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeflxhdrWithNoOption();
    initializeflxhdrWithThreeOptions();
    initializeflxhdrWithTwoOptions();
    initializeFBox03566c54e551240();
    initializeTemp06df6b7b242734e();
    frmAboutUsGlobals();
    frmChangePwdGlobals();
    frmForgotPwdGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    frmRegisterGlobals();
    frmSplashGlobals();
    frmUserSettingsGlobals();
    MenuFormGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_06113dfd1e1f409cb9b10f462d0e6efc,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_ganalytics"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;