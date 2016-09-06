function invokeHTTPService(method, URL, data, callback, info, backgroundMode) {
    if (appscore.app.isNetworkAvailable() == true) {
        if (backgroundMode == null) appscore.loadingScreen.show();
        var _frmData = new kony.net.FormData();
        if (data == undefined || data == null) {
            _frmData = new kony.net.FormData();
        } else {
            for (i in data) {
                _frmData.append(i.toString(), data[i].toString());
            }
        }
        appscore.print.log("invokeHTTPService : " + URL + " : " + JSON.stringify(data));
        if (gUseApi) {
            var httpclient = new kony.net.HttpRequest();
            httpclient.open(method, URL);
            //	httpclient.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            //	httpclient.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
            httpclient.send(_frmData);
            httpclient.onReadyStateChange = function() {
                HandleHTTPResponse(URL, httpclient, callback);
            };
        } else {
            simulateService(URL, data, function(obj) {
                HandleHTTPResponse(URL, obj, callback);
            }, info);
        }
    }
}

function HandleHTTPResponse(URL, obj, callback) {
    if (obj.readyState == 1) {
        appscore.print.log("status " + obj.readyState);
    } else if (obj.readyState == 2) {
        appscore.print.log("status " + obj.readyState);
    } else if (obj.readyState == 3) {
        appscore.print.log("status " + obj.readyState);
    } else if (obj.readyState == 4) {
        appscore.print.log("Service == " + URL + "status " + obj.readyState);
        var resultTable = {};
        resultTable["main"] = obj.response;
        resultTable["opstatus"] = obj.status.toString();
        appscore.loadingScreen.dismiss();
        callback(obj.readyState, resultTable);
        return;
    } else {
        appscore.print.error("No Status!\nerrcode :" + obj["status"] + " \n errmsg : " + obj["response"])
    }
}

function invokeAppService(serviceId, data, callback) {
    if (appscore.app.isNetworkAvailable() == true) {
        appscore.loadingScreen.show();
        if (data == undefined || data == null) {
            data = {
                appID: gAppId,
                serviceID: serviceId,
                channel: "rc"
            };
        } else {
            data.appID = gAppId;
            data.serviceID = serviceId;
            data.channel = "rc";
        }
        appscore.print.log("invokeAppService : " + JSON.stringify(data));
        var info = {
            callback: callback
        };
        /*var myhttpheaders={"Content-Type":"application/json"};
        data.httpheaders = myhttpheaders;
        data.httpconfig = {timeout: 600};*/
        if (false) {
            connHandle = kony.net.invokeServiceAsync(appConfig.url, data, serviceStatusCallback, info);
        } else {
            simulateService(serviceId, data, serviceStatusCallback, info);
        }
    }
}

function serviceStatusCallback(status, resultTable, info) {
    if (status == 100) {
        appscore.print.log("status " + status);
    } else if (status == 200) {
        appscore.print.log("status " + status);
    } else if (status == 300) {
        appscore.print.log("status " + status);
        appscore.print.error("\nerrcode :" + results["errcode"] + " \nerrmsg : " + results["errmsg"])
    } else if (status == 400) {
        appscore.print.log("status " + status);
        appscore.print.log("resultTable==" + JSON.stringify({
            "data": resultTable
        }));
        appscore.loadingScreen.dismiss();
        info.callback(status, resultTable);
    } else {
        appscore.print.error("No Status!\nerrcode :" + results["errcode"] + " \n errmsg : " + results["errmsg"])
    }
}