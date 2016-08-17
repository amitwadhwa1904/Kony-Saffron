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
    var results = {};
    results["opstatus"] = 0;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["main"] = {
        "token": "3578943653h3vbvhffhifhweirh8"
    };
    callback(400, results, info);
}

function simulateCallValidate(serviceId, params, callback, info) {
    var results = {};
    if (params.token == "3578943653h3vbvhffhifhweirh8") {
        results["opstatus"] = 0;
        results["errcode"] = 0;
        results["errmsg"] = "";
        results["main"] = {
            "result": "success"
        };
    } else {
        results["opstatus"] = -1;
        results["errcode"] = -1;
        results["errmsg"] = "ERROR : token not matched";
        results["main"] = {
            "result": "fail"
        };
    }
    callback(400, results, info);
}