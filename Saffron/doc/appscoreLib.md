## Objects

<dl>
<dt><a href="#appscore">appscore</a> : <code>object</code></dt>
<dd><p>Appscore Library defining a base logic for the application</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#alertCallback">alertCallback</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="appscore"></a>

## appscore : <code>object</code>
Appscore Library defining a base logic for the application

**Kind**: global namespace  

* [appscore](#appscore) : <code>object</code>
    * [.app](#appscore.app) : <code>object</code>
        * [.isDebugMode()](#appscore.app.isDebugMode) ⇒ <code>bool</code>
        * [.getString(key)](#appscore.app.getString) ⇒ <code>String</code>
        * [.isNetworkAvailable(type)](#appscore.app.isNetworkAvailable) ⇒ <code>bool</code>
        * [.getDeviceID()](#appscore.app.getDeviceID) ⇒ <code>String</code>
    * [.print](#appscore.print) : <code>object</code>
        * [.start()](#appscore.print.start)
        * [.stop()](#appscore.print.stop)
        * [.log(msg)](#appscore.print.log)
        * [.error(msg)](#appscore.print.error)
    * [.loadingScreen](#appscore.loadingScreen) : <code>object</code>
        * [.show(title, msg)](#appscore.loadingScreen.show)
        * [.dismiss()](#appscore.loadingScreen.dismiss)
    * [.alert](#appscore.alert) : <code>object</code>
        * [.confirm(titleKey, msgKey, callBack)](#appscore.alert.confirm)
        * [.confirmWithCustomLabel(titleKey, msgKey, callBack, yesLabelKey, noLabelKey)](#appscore.alert.confirmWithCustomLabel)
        * [.info(titleKey, msgKey, callBack)](#appscore.alert.info)
        * [.error(titleKey, msgKey)](#appscore.alert.error)
    * [.dao](#appscore.dao) : <code>object</code>
        * [.request()](#appscore.dao.request) ⇒ <code>Object</code>
        * [.update(key, obj)](#appscore.dao.update)
        * [.remove(key)](#appscore.dao.remove)

<a name="appscore.app"></a>

### appscore.app : <code>object</code>
Methods related to the application

**Kind**: static namespace of <code>[appscore](#appscore)</code>  

* [.app](#appscore.app) : <code>object</code>
    * [.isDebugMode()](#appscore.app.isDebugMode) ⇒ <code>bool</code>
    * [.getString(key)](#appscore.app.getString) ⇒ <code>String</code>
    * [.isNetworkAvailable(type)](#appscore.app.isNetworkAvailable) ⇒ <code>bool</code>
    * [.getDeviceID()](#appscore.app.getDeviceID) ⇒ <code>String</code>

<a name="appscore.app.isDebugMode"></a>

#### app.isDebugMode() ⇒ <code>bool</code>
isDebugMode - check if we are in debug mode or not

**Kind**: static method of <code>[app](#appscore.app)</code>  
**Returns**: <code>bool</code> - true if we are in debug mode  
<a name="appscore.app.getString"></a>

#### app.getString(key) ⇒ <code>String</code>
getString - return the string associated to a key. If Internationalisation is not used, the key is returned directly

**Kind**: static method of <code>[app](#appscore.app)</code>  
**Returns**: <code>String</code> - value associated to the key. return the key if internationalisation is not used.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | key |

<a name="appscore.app.isNetworkAvailable"></a>

#### app.isNetworkAvailable(type) ⇒ <code>bool</code>
isNetworkAvailable - check if the network is available. if no parameter is passed, it checks if any network is availlable

**Kind**: static method of <code>[app](#appscore.app)</code>  
**Returns**: <code>bool</code> - true if choosen network type available, false otherwise  

| Param | Description |
| --- | --- |
| type | take : null,<br>constants.NETWORK_TYPE_ANY,<br>constants.NETWORK_TYPE_ANY,<br>constants.NETWORK_TYPE_WIFI,<br>constants.NETWORK_TYPE_3G |

<a name="appscore.app.getDeviceID"></a>

#### app.getDeviceID() ⇒ <code>String</code>
getDeviceID - return the device unique identifier

**Kind**: static method of <code>[app](#appscore.app)</code>  
**Returns**: <code>String</code> - unique id  
<a name="appscore.print"></a>

### appscore.print : <code>object</code>
Methods to print logs

**Kind**: static namespace of <code>[appscore](#appscore)</code>  

* [.print](#appscore.print) : <code>object</code>
    * [.start()](#appscore.print.start)
    * [.stop()](#appscore.print.stop)
    * [.log(msg)](#appscore.print.log)
    * [.error(msg)](#appscore.print.error)

<a name="appscore.print.start"></a>

#### print.start()
start - To use in the begining of a method. Print the name of the method called

**Kind**: static method of <code>[print](#appscore.print)</code>  
<a name="appscore.print.stop"></a>

#### print.stop()
stop - To use in the end of a method. Print the name of the method called

**Kind**: static method of <code>[print](#appscore.print)</code>  
<a name="appscore.print.log"></a>

#### print.log(msg)
log - Print a custom message

**Kind**: static method of <code>[print](#appscore.print)</code>  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>String</code> | message to print |

<a name="appscore.print.error"></a>

#### print.error(msg)
error - Print an error message

**Kind**: static method of <code>[print](#appscore.print)</code>  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>String</code> | Error message to print |

<a name="appscore.loadingScreen"></a>

### appscore.loadingScreen : <code>object</code>
Manage the loading indicator

**Kind**: static namespace of <code>[appscore](#appscore)</code>  

* [.loadingScreen](#appscore.loadingScreen) : <code>object</code>
    * [.show(title, msg)](#appscore.loadingScreen.show)
    * [.dismiss()](#appscore.loadingScreen.dismiss)

<a name="appscore.loadingScreen.show"></a>

#### loadingScreen.show(title, msg)
show - Show the loading indicator. In case of a new project, a skin may need to be created to replace BlockedUIScreen and change the style of the loading screen

**Kind**: static method of <code>[loadingScreen](#appscore.loadingScreen)</code>  

| Param | Type |
| --- | --- |
| title | <code>String</code> | 
| msg | <code>type</code> | 

<a name="appscore.loadingScreen.dismiss"></a>

#### loadingScreen.dismiss()
dismiss - Dismiss the  loading indicator

**Kind**: static method of <code>[loadingScreen](#appscore.loadingScreen)</code>  
<a name="appscore.alert"></a>

### appscore.alert : <code>object</code>
Manage alert

**Kind**: static namespace of <code>[appscore](#appscore)</code>  

* [.alert](#appscore.alert) : <code>object</code>
    * [.confirm(titleKey, msgKey, callBack)](#appscore.alert.confirm)
    * [.confirmWithCustomLabel(titleKey, msgKey, callBack, yesLabelKey, noLabelKey)](#appscore.alert.confirmWithCustomLabel)
    * [.info(titleKey, msgKey, callBack)](#appscore.alert.info)
    * [.error(titleKey, msgKey)](#appscore.alert.error)

<a name="appscore.alert.confirm"></a>

#### alert.confirm(titleKey, msgKey, callBack)
confirm - Confirm type of alert with 2 buttons, Yes and No

**Kind**: static method of <code>[alert](#appscore.alert)</code>  

| Param | Type | Description |
| --- | --- | --- |
| titleKey | <code>String</code> | title of the alert |
| msgKey | <code>String</code> | message to display |
| callBack | <code>[alertCallback](#alertCallback)</code> | method to call once the user click on a button |

<a name="appscore.alert.confirmWithCustomLabel"></a>

#### alert.confirmWithCustomLabel(titleKey, msgKey, callBack, yesLabelKey, noLabelKey)
confirmWithCustomLabel - Confirm type of alert with 2 buttons with custom text for the buttons

**Kind**: static method of <code>[alert](#appscore.alert)</code>  

| Param | Type | Description |
| --- | --- | --- |
| titleKey | <code>String</code> | title of the alert |
| msgKey | <code>String</code> | message to display |
| callBack | <code>[alertCallback](#alertCallback)</code> | method to call once the user click on a button |
| yesLabelKey | <code>String</code> |  |
| noLabelKey | <code>String</code> |  |

<a name="appscore.alert.info"></a>

#### alert.info(titleKey, msgKey, callBack)
info - Information type of alert with only 1 button

**Kind**: static method of <code>[alert](#appscore.alert)</code>  

| Param | Type | Description |
| --- | --- | --- |
| titleKey | <code>String</code> | title of the alert |
| msgKey | <code>String</code> | message to display |
| callBack | <code>[alertCallback](#alertCallback)</code> | method to call once the user click on a button |

<a name="appscore.alert.error"></a>

#### alert.error(titleKey, msgKey)
error - Error type of alert with only 1 button

**Kind**: static method of <code>[alert](#appscore.alert)</code>  

| Param | Type | Description |
| --- | --- | --- |
| titleKey | <code>String</code> | title of the alert |
| msgKey | <code>String</code> | message to display |

<a name="appscore.dao"></a>

### appscore.dao : <code>object</code>
DAO Methods to access Kony local storage

**Kind**: static namespace of <code>[appscore](#appscore)</code>  

* [.dao](#appscore.dao) : <code>object</code>
    * [.request()](#appscore.dao.request) ⇒ <code>Object</code>
    * [.update(key, obj)](#appscore.dao.update)
    * [.remove(key)](#appscore.dao.remove)

<a name="appscore.dao.request"></a>

#### dao.request() ⇒ <code>Object</code>
request - Returns the value stored in Kony Store

**Kind**: static method of <code>[dao](#appscore.dao)</code>  
**Returns**: <code>Object</code> - the value stored in Kony Store  
<a name="appscore.dao.update"></a>

#### dao.update(key, obj)
update - Sets the value in the Kony Store with its key

**Kind**: static method of <code>[dao](#appscore.dao)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | access key of the object to store |
| obj | <code>Object</code> | An Object to store in the kony storage |

<a name="appscore.dao.remove"></a>

#### dao.remove(key)
remove - Removes the value stored in Kony Store

**Kind**: static method of <code>[dao](#appscore.dao)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | access key of the object to remove |

<a name="alertCallback"></a>

## alertCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| yesLabelClicked | <code>bool</code> | return true if yes label clicked false otherwise |

