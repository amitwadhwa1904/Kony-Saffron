function simulateService(serviceId, params, callback, info) {
    if (serviceId == SERV_AUTHENTICATE) simulateCallAuthenticate(appConfig.url, params, callback, info);
    else if (serviceId == SERV_VALIDATE) simulateCallValidate(appConfig.url, params, callback, info);
    else {
        //if(serviceId == undefined || serviceId == null || serviceId == ""){
        var results = [];
        results["opstatus"] = -1;
        results["errcode"] = -1;
        results["errmsg"] = "ERROR : no simulation method implemented";
        results["result"] = "false";
        results["main"] = {};
        callback(400, results, info);
    }
}

function simulateCallAuthenticate(serviceId, params, callback, info) {
    var results = [];
    results["opstatus"] = 0;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["main"] = [{
        id: 1,
        firstName: "Mark",
        lastName: "Nido",
        mobile: "0470527300",
        email: "mark.nido@appscore.com.au"
    }];
    callback(400, results, info);
}

function simulateCallValidate(serviceId, params, callback, info) {
    var results = [];
    results["opstatus"] = 0;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["main"] = [{
        id: 1,
        time: "8:00 AM"
    }, {
        id: 2,
        time: "8:30 AM"
    }, {
        id: 3,
        time: "9:00 AM"
    }, {
        id: 4,
        time: "9:30 AM"
    }, {
        id: 5,
        time: "10:00 AM"
    }];
    callback(400, results, info);
}