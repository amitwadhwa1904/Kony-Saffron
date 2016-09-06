function simulateService(serviceId, params, callback, info) {
    if (serviceId == SERV_AUTHENTICATE) simulateCallAuthenticate(appConfig.url, params, callback, info);
    else if (serviceId == SERV_VALIDATE) simulateCallValidate(appConfig.url, params, callback, info);
    else if (serviceId == SERV_REGISTER_USER) simulateCallRegisterUser(appConfig.url, params, callback, info);
    else if (serviceId == SERV_RESET_PWD) simulateCallResetPwd(appConfig.url, params, callback, info);
    else if (serviceId == SERV_FEATURED_DEALS) simulateCallGetFeaturedDeals(appConfig.url, params, callback, info);
    else if (serviceId == SERV_PROMO_DEALS) simulateCallGetPromoDeals(appConfig.url, params, callback, info);
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

function simulateCallGetPromoDeals(serviceId, params, callback, info) {
    var results = {};
    var response = {};
    results["status"] = 200;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["readyState"] = 4;
    results["response"] = [{
        "imgsrc": "promo1.png",
        "seq": "4",
        "flagged": "Y",
        "active": "Y"
    }, {
        "imgsrc": "promo2.png",
        "seq": "3",
        "flagged": "N",
        "active": "Y"
    }, {
        "imgsrc": "promo3.png",
        "seq": "1",
        "flagged": "N",
        "active": "Y"
    }, {
        "imgsrc": "promo4.png",
        "seq": "2",
        "flagged": "Y",
        "active": "Y"
    }];
    callback(results);
}

function simulateCallResetPwd(serviceId, params, callback, info) {
    var results = {};
    var response = {};
    results["status"] = 200;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["readyState"] = 4;
    response["main"] = {
        "result": "success"
    };
    results["response"] = response;
    callback(results);
}

function simulateCallGetFeaturedDeals(serviceId, params, callback, info) {
    var results = {};
    var response = {};
    results["status"] = 200;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["readyState"] = 4;
    results["response"] = [{
        "name": "Budget Byte",
        "price": "39.90",
        "id": "1001",
        "imgsrc": "deal1.png",
        "seq": "4",
        "flagged": "Y",
        "active": "Y"
    }, {
        "name": "Double Byte",
        "price": "64.90",
        "id": "1002",
        "imgsrc": "deal2.png",
        "seq": "3",
        "flagged": "N",
        "active": "Y"
    }, {
        "name": "Check Byte",
        "price": "64.90",
        "id": "1004",
        "imgsrc": "http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080525/1211728825.png",
        "seq": "1",
        "flagged": "N",
        "active": "N"
    }, {
        "name": "Dosa Combo",
        "price": "19.90",
        "id": "1003",
        "imgsrc": "deal3.png",
        "seq": "2",
        "flagged": "Y",
        "active": "Y"
    }];
    callback(results);
}

function simulateCallRegisterUser(serviceId, params, callback, info) {
    var results = {};
    var response = {};
    results["status"] = 200;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["readyState"] = 4;
    response["main"] = {
        "result": "success"
    };
    results["response"] = response;
    callback(results);
}

function simulateCallAuthenticate(serviceId, params, callback, info) {
    var results = {};
    var response = {};
    appscore.print.log(serviceId + " " + params);
    results["status"] = 200;
    results["errcode"] = 0;
    results["errmsg"] = "";
    results["readyState"] = 4;
    results["response"] = {
        "token": "3578943653h3vbvhffhifhweirh8"
    };
    callback(results);
}

function simulateCallValidate(serviceId, params, callback, info) {
    var results = {};
    var response = {};
    if (params.token == "3578943653h3vbvhffhifhweirh8") {
        results["status"] = 200;
        results["errcode"] = 0;
        results["errmsg"] = "";
        results["readyState"] = 4;
        response["main"] = {
            "result": "success"
        };
    } else {
        results["status"] = 500;
        results["errcode"] = 0;
        results["errmsg"] = "Error";
        results["readyState"] = 4;
        response["main"] = {
            "result": "fail"
        };
    }
    results["response"] = response;
    callback(results);
}