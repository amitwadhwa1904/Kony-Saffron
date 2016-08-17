
/**
 * invokeHTTPService - Invoke Http service service without passing by kony server
 *
 * @param  {String} method
 * @param  {String} URL            url of the service
 * @param  {Object} data           data to send
 * @param	 {ServiceCallback}	callback       method to call once service call is finish
 * @param  {type} info           data to pass to the callback
 * @param  {bool} backgroundMode add this param if you don't want to show a loading screen
 */
function invokeHTTPService(method, URL, data, callback, info, backgroundMode) {
	if(appscore.app.isNetworkAvailable() == true){
		if(backgroundMode == null)appscore.loadingScreen.show();
		var _frmData = new kony.net.FormData();
		if(data == undefined || data == null){
			_frmData = new kony.net.FormData();
		} else {
			for (i in data) {
		       _frmData.append(i.toString(), data[i].toString());
		    }
		}
		appscore.print.log("invokeHTTPService : " + URL + " : " + JSON.stringify(data));
		if(gUseApi){
			var httpclient = new kony.net.HttpRequest();
			httpclient.open(method, URL);
		//	httpclient.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		//	httpclient.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
			httpclient.send(_frmData);
			httpclient.onReadyStateChange = function(){ HandleHTTPResponse(URL, httpclient, callback);};
		}else{
//			simulateService(serviceId, data, serviceStatusCallback, info);
		}
	}
}

/**
 * HandleHTTPResponse - callback method to handle the response from HTTP API call
 *
 * @param  {String} URL URL of the HTTP service
 * @param  {Object} obj      response object from HTTP API call
 * @param  {ServiceCallback} callback  method to call once the request is sent
 */
function HandleHTTPResponse(URL, obj, callback) {
	if (obj.readyState == 1){
 		appscore.print.log("status " + obj.readyState);
 	}else if (obj.readyState == 2){
 		appscore.print.log("status " + obj.readyState);
 	}else if (obj.readyState == 3){
 		appscore.print.log("status " + obj.readyState);
 	}else if (obj.readyState == 4){
 		appscore.print.log("Service == " + URL + "status " + obj.readyState + " Content-Type " + JSON.stringify(obj.getAllResponseHeaders()));
 		var resultTable = {};
 		resultTable["main"]  = obj.response;
 		resultTable["opstatus"] = obj.status.toString();
    	appscore.loadingScreen.dismiss();
    	callback(obj.readyState, resultTable);
    	return;
	}else{
		appscore.print.error("No Status!\nerrcode :" + obj["status"] + " \n errmsg : " + obj["response"])
	}
}

/**
* Invoke application service
*/

/**
 * invokeAppService - invoke kony service
 *
 * @param  {String} serviceId id of the service
 * @param  {Object} data      data to send
 * @param  {ServiceCallback} callback  method to call once the request is sent
 */
function invokeAppService(serviceId, data, callback) {
	if(appscore.app.isNetworkAvailable() == true){
		appscore.loadingScreen.show();
		if(data == undefined || data == null){
			data = {appID:gAppId, serviceID:serviceId, channel:"rc"};
		}else{
			data.appID=gAppId;
			data.serviceID=serviceId;
			data.channel="rc";
		}
		appscore.print.log("invokeAppService : " + JSON.stringify(data));
		var info = {callback:callback};
		/*var myhttpheaders={"Content-Type":"application/json"};
		data.httpheaders = myhttpheaders;
		data.httpconfig = {timeout: 600};*/
		if(false) {
			connHandle = kony.net.invokeServiceAsync(appConfig.url, data, serviceStatusCallback, info);
		} else {
			simulateService(serviceId, data, serviceStatusCallback, info);
		}
	}
}


/**
 * serviceStatusCallback - callback method to handle the response from kony service
 *
 * @param  {Integer} status an integer value indicating the status
 * @param  {Object} resultTable      response object with key-value pairs
 * @param  {Object} info  user data passed to async service
 */
function serviceStatusCallback(status, resultTable, info) {

 	if (status == 100){
 		appscore.print.log("status " + status);
 	}else if (status == 200){
 		appscore.print.log("status " + status);
 	}else if (status == 300){
 		appscore.print.log("status " + status);
 		appscore.print.error("\nerrcode :" + results["errcode"] + " \nerrmsg : " + results["errmsg"])
 	}else if (status == 400){
 		appscore.print.log("status " + status);
 		appscore.print.log("resultTable=="+JSON.stringify({"data":resultTable}));
    	appscore.loadingScreen.dismiss();
    	info.callback(status, resultTable);
	}else{
		appscore.print.error("No Status!\nerrcode :" + results["errcode"] + " \n errmsg : " + results["errmsg"])
	}
 }


/**
 * @callback ServiceCallback
 * @param  {String} status    API status
 * @param  {Object} resultTable    data sent back by the API
 */