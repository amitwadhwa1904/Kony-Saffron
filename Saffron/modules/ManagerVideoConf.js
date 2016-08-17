var notificationManager = new NotificationManager();
var videoConfManager = null;// initiated upon notification and destroyed after feedback
//var androidAzure = null;

var oneSignalAppID = "ff1069c5-b211-4f21-9a73-2d4350d88a50";
var RESTAPIKey = "YmYxMzc3NGYtYWFiNS00YTAyLWFjMjUtMjQ2MjhlNDI5NWZh";

function NotificationManager(){
	this.onSuccess=function(token){
		kony.print("---pushNotification Token:"+token);
		appscore.print.log("device id : "+ appscore.app.getDeviceID());
		
			kony.print("OnSuccess Token : " + token);
	
			if (kony.os.deviceInfo()["name"] == "android") {
				kony.print("---One Signal.register:"+token);
				var dataDic = {
	                            "app_id":oneSignalAppID,
	                            "device_type":1,
	                            "identifier":token
	                          };
	            var URL = "https://onesignal.com/api/v1/players";              
				invokeHTTPService("POST", URL, dataDic, function(status, resultTable){
					appscore.print.start();
					appscore.print.log("resultTable=="+JSON.stringify({data:resultTable["main"]}) + " optstatus=="+resultTable["opstatus"]);
					if(resultTable["opstatus"].charAt(0) == "2"){ // HTTP Success Status code starts with 2
						appscore.print.log("==Done==");
						
			     	}else{
			 			appscore.print.error("errcode :" + resultTable["opstatus"] + " \n errmsg : " + resultTable["main"]);
			     	}
				});
			}	
			
		
		
	};
	this.onFailure=function(error){
		kony.print("---Exception:"+JSON.stringify(error));
	};
	this.onNotified=function(infos){
		kony.print("************\n\n onNotified:\n\n****************");
		kony.print("---onNotified:"+JSON.stringify(infos));
		var titleText = null;
		var messageText = null;
		var messageKey = null;
		if(infos != null){
		 	titleText = infos.title;
			messageText = infos.alert;
			if(infos.custom != null){
				var customData = JSON.parse(infos.custom);
				if(customData["a"] != null && customData["a"]["pnkey"] != null){
					messageKey = customData["a"]["pnkey"]; //push notification key
				}
			}
		}
	
		appscore.print.log("titleText id : " + titleText);
		appscore.print.log("messageText id : " + messageText);
		appscore.print.log("messageKey id : " + messageKey);
		
		appscore.alert.confirmWithCustomLabel("CAFE SAFFRON", titleText + messageKey +  " PUSH NOTIFICATION CLICKED!!! " + messageText, function(response){
			appscore.print.log(response)
			if(response == true){
				
			}
		}, "YES", "NO");

	};
	this.onDeregisterSuccess=function(){
		kony.print("************\n\n onderegsuccess:\n\n****************");
	};
	this.onDeregisterFailure=function(errortable){
		kony.print("************\n\n onderegfailure:\n\n****************");
	};
	this.register=function(){
		var object = {
				onsuccessfulregistration:this.onSuccess, 
				onfailureregistration:this.onFailure , 
				onlinenotification:this.onNotified , 
				offlinenotification:this.onNotified,
				onsuccessfulderegistration:this.onDeregisterSuccess , 
				onfailurederegistration:this.onDeregisterFailure
				};
	
		//#ifdef iphone
	//		kony.push.setCallbacks(object);
			//cuscal.pushNotificationRegister();
	//		var config=[0,1,2];
	//		kony.push.register(config);
		//#else
			
			var config={senderid:"747714528948"};// AIzaSyD63Y56LkEztT0fe3SEyLzGkP9pfziAPEE
			kony.push.setCallbacks(object);
			kony.push.register(config);
		//#endif
	};
	
}
