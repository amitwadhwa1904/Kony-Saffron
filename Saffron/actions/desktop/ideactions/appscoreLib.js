

/**
 * Application id
 */
var gAppId = "CuscalConf";


/**
 * Variable to now if we are calling APIs or simulating APIs calls and generating test datas on the application
 */
var gUseApi = true;


/**
 * Debug or Release mode
 */
var gDebug = true;



/**
 * Appscore Library defining a base logic for the application
 * @namespace
 */
appscore={};
/**
 * Methods related to the application
 * @namespace
 */
appscore.app = {
	/**
	 * isDebugMode - check if we are in debug mode or not
	 * @return {bool}  true if we are in debug mode
	 */
	isDebugMode : function(){
		return gDebug;
	},

	/**
	 * getString - return the string associated to a key. If Internationalisation is not used, the key is returned directly
	 *
	 * @param  {String} key key
	 * @return {String}     value associated to the key. return the key if internationalisation is not used.
	 */
	getString : function(key){
		return key;
	},

	/**
	 * isNetworkAvailable - check if the network is available. if no parameter is passed, it checks if any network is availlable
	 *
	 * @param  {} type  take : null,<br>constants.NETWORK_TYPE_ANY,<br>constants.NETWORK_TYPE_ANY,<br>constants.NETWORK_TYPE_WIFI,<br>constants.NETWORK_TYPE_3G
	 * @return {bool}      true if choosen network type available, false otherwise
	 */
	isNetworkAvailable : function(type){
		if(type == undefined || type == null || type == "")type = constants.NETWORK_TYPE_ANY;
		if(kony.net.isNetworkAvailable(type) == true){
			return true;
		}else{
			appscore.alert.error("No Network","Network is not availlable");
			return false;
		}
	},

	/**
	 * getDeviceID - return the device unique identifier
	 *
	 * @return {String}  unique id
	 */
	getDeviceID:function(){
		//TODO : manage id for ios 6 or less and android
		//http://docs.kony.com/6_5/konylibrary/studio/kony_studio_api_reference_guide/Default.htm#operating_system.htm#kony.os.%3FTocPath%3DOperating%2520System%2520APIs|_____11
		//#ifdef iphone
			appscore.print.log("device id :" + kony.os.deviceInfo().identifierForVendor);
			return kony.os.deviceInfo().identifierForVendor
		//#else
			return kony.os.deviceInfo().deviceid
		//#endif
	},
	getNotificationType:function(){
		//#ifdef iphone
			return "apns";
		//#else
			return "gcm";
		//#endif
	}

}


/**
 * Methods to print logs
 * @namespace
 */
appscore.print = {

	/**
	 * start - To use in the begining of a method. Print the name of the method called
	 */
	start : function () {
		if (appscore.app.isDebugMode()) {
			kony.print("---" + arguments.callee.caller.name + ": enter");
		}
	},

	/**
	 * stop - To use in the end of a method. Print the name of the method called
	 *
	 */
	stop : function () {
		if (appscore.app.isDebugMode()) {
			kony.print("---" + arguments.callee.caller.name + ": exit");
		}
	},

	/**
	 * log - Print a custom message
	 *
	 * @param  {String} msg message to print
	 */
	log : function (msg) {
		if (appscore.app.isDebugMode()) {
			kony.print("---" + arguments.callee.caller.name + ": " + msg);
		}
	},

	/**
	 * error - Print an error message
	 *
	 * @param  {String} msg Error message to print
	 */
	error : function (msg) {
		if (appscore.app.isDebugMode()) {
			kony.print("---" + arguments.callee.caller.name + ": __________________________________");
			kony.print("---" + arguments.callee.caller.name + ": " + msg);
			kony.print("---" + arguments.callee.caller.name + ": __________________________________");

		}
	}
}


/**
 * Manage the loading indicator
 * @namespace
 */
appscore.loadingScreen = {

  /**
   * show - Show the loading indicator. In case of a new project, a skin may need to be created to replace BlockedUIScreen and change the style of the loading screen
   *
   * @param  {String} title
   * @param  {type} msg
   */
  show : function(title, msg){
		var prop = {};
		//#ifdef iphone
			prop = {separatorHeight:15};
		//#endif
		if(msg == undefined || msg == null || msg == "")msg = appscore.app.getString("");

		//#ifdef android
			msg = "  " + msg + "  ";
		//#endif
		kony.application.showLoadingScreen("BlockedUIScreen",msg,constants.LOADING_SCREEN_POSITION_ONLY_CENTER,true,true,prop);
	},

	/**
	 * dismiss - Dismiss the  loading indicator
	 *
	 */
	dismiss : function(){
		kony.application.dismissLoadingScreen();
	}
}


/**
 * Manage alert
 * @namespace
 */
appscore.alert = {

  /**
   * confirm - Confirm type of alert with 2 buttons, Yes and No
   *
   * @param  {String} titleKey title of the alert
   * @param  {String} msgKey   message to display
   * @param  {alertCallback} callBack method to call once the user click on a button
   */
  confirm : function(titleKey, msgKey, callBack) {
		kony.ui.Alert({message:appscore.app.getString(msgKey), alertType: constants.ALERT_TYPE_CONFIRMATION, alertTitle:appscore.app.getString(titleKey), yesLabel:appscore.app.getString("YES") ,noLabel: appscore.app.getString("NO"), alertHandler: callBack},{});
    },

    /**
     * confirmWithCustomLabel - Confirm type of alert with 2 buttons with custom text for the buttons
     *
     * @param  {String} titleKey title of the alert
     * @param  {String} msgKey   message to display
     * @param  {alertCallback} callBack method to call once the user click on a button
     * @param  {String} yesLabelKey
     * @param  {String} noLabelKey
     */
    confirmWithCustomLabel : function(titleKey, msgKey, callBack, yesLabelKey, noLabelKey) {
		kony.ui.Alert({message:appscore.app.getString(msgKey), alertType: constants.ALERT_TYPE_CONFIRMATION, alertTitle:appscore.app.getString(titleKey), yesLabel:appscore.app.getString(yesLabelKey), noLabel: appscore.app.getString(noLabelKey), alertHandler: callBack},{});
    },

	/**
	 * info - Information type of alert with only 1 button
	 *
   * @param  {String} titleKey title of the alert
   * @param  {String} msgKey   message to display
   * @param  {alertCallback} callBack method to call once the user click on a button
	 */
	info : function(titleKey, msgKey, callBack) {
		kony.ui.Alert({message: appscore.app.getString(msgKey), alertType: constants.ALERT_TYPE_INFO, alertTitle: appscore.app.getString(titleKey), yesLabel:appscore.app.getString("OK"),noLabel: appscore.app.getString("Cancel"), alertHandler: callBack},{});
	},

	/**
	 * error - Error type of alert with only 1 button
	 *
   * @param  {String} titleKey title of the alert
   * @param  {String} msgKey   message to display
	 */
	error : function(titleKey, msgKey) {
		kony.ui.Alert({message:appscore.app.getString(msgKey), alertType: constants.ALERT_TYPE_ERROR, alertTitle: appscore.app.getString(titleKey),yesLabel:appscore.app.getString("OK"),noLabel: appscore.app.getString("Cancel"), alertHandler: null},{});
	},
	dismiss : function dismissAlert() {
		//popAlert.dismiss();
	}

  /**
   * @callback alertCallback
   * @param {bool} yesLabelClicked return true if yes label clicked false otherwise
   */
}
  
  
 /**
 * Methods related to the application
 * @namespace
 */
 appscore.dao = {
 	/**
	 * request - Returns the value stored in Kony Store
	 * @return {Object}  the value stored in Kony Store
	 */
	request : function(key){
		return kony.store.getItem(key);
	},
	/**
	 * update - Sets the value in the Kony Store with its key
	 */
	update : function(key, obj){
		kony.store.setItem(key, obj);
	},
	/**
	 * remove - Removes the value stored in Kony Store
	 */
	remove : function(key){
		kony.store.removeItem(key);
	}
}
