## Classes

<dl>
<dt><a href="#IdentityService">IdentityService</a></dt>
<dd><p>Identity service instance for handling login/logout calls.</p>
</dd>
<dt><a href="#IntegrationService">IntegrationService</a></dt>
<dd><p>Integration service instance for invoking the integration services.</p>
</dd>
<dt><a href="#MessagingService">MessagingService</a></dt>
<dd><p>Messaging service instance for invoking the Messaging services.</p>
</dd>
<dt><a href="#MetricsService">MetricsService</a></dt>
<dd><p>Metrics service instance for invoking the Metrics services.</p>
</dd>
<dt><a href="#ReportingService">ReportingService</a></dt>
<dd><p>Reporting service instance for invoking the reporting services.</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#overrideNetworkFlag">overrideNetworkFlag</a> : <code>boolean</code></dt>
<dd><p>Flag used to override the network availability api for automation testing.</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#kony">kony</a> : <code>object</code></dt>
<dd><p>Kony namespace</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#initSuccessCallback">initSuccessCallback</a> : <code>function</code></dt>
<dd><p>Init success callback method.</p>
</dd>
<dt><a href="#initFailureCallback">initFailureCallback</a> : <code>function</code></dt>
<dd><p>Init failure callback method.</p>
</dd>
<dt><a href="#loginSuccessCallback">loginSuccessCallback</a> : <code>function</code></dt>
<dd><p>Login success callback method.</p>
</dd>
<dt><a href="#loginFailureCallback">loginFailureCallback</a> : <code>function</code></dt>
<dd><p>Login failure callback method.</p>
</dd>
<dt><a href="#logoutSuccessCallback">logoutSuccessCallback</a> : <code>function</code></dt>
<dd><p>Logout success callback method.</p>
</dd>
<dt><a href="#logoutFailureCallback">logoutFailureCallback</a> : <code>function</code></dt>
<dd><p>Logout failure callback method.</p>
</dd>
<dt><a href="#fetchBackendTokenSuccessCallback">fetchBackendTokenSuccessCallback</a> : <code>function</code></dt>
<dd><p>Fetch backend token callback method.</p>
</dd>
<dt><a href="#fetchBackendTokenFailureCallback">fetchBackendTokenFailureCallback</a> : <code>function</code></dt>
<dd><p>Fetch backend token callback method.</p>
</dd>
<dt><a href="#getProfileSuccessCallback">getProfileSuccessCallback</a> : <code>function</code></dt>
<dd><p>Get profile callback method.</p>
</dd>
<dt><a href="#getProfileFailureCallback">getProfileFailureCallback</a> : <code>function</code></dt>
<dd><p>Get profile callback method.</p>
</dd>
<dt><a href="#integrationSuccessCallback">integrationSuccessCallback</a> : <code>function</code></dt>
<dd><p>Integration service success callback method.</p>
</dd>
<dt><a href="#integrationFailureCallback">integrationFailureCallback</a> : <code>function</code></dt>
<dd><p>Integration service failure callback method.</p>
</dd>
<dt><a href="#registerSuccessCallback">registerSuccessCallback</a> : <code>function</code></dt>
<dd><p>register success callback method.</p>
</dd>
<dt><a href="#registerFailureCallback">registerFailureCallback</a> : <code>function</code></dt>
<dd><p>Register service failure callback method.</p>
</dd>
<dt><a href="#registerSuccessCallback">registerSuccessCallback</a> : <code>function</code></dt>
<dd><p>register success callback method.</p>
</dd>
<dt><a href="#registerFailureCallback">registerFailureCallback</a> : <code>function</code></dt>
<dd><p>Register service failure callback method.</p>
</dd>
<dt><a href="#unregisterSuccessCallback">unregisterSuccessCallback</a> : <code>function</code></dt>
<dd><p>unregister success callback method.</p>
</dd>
<dt><a href="#unregisterFailureCallback">unregisterFailureCallback</a> : <code>function</code></dt>
<dd><p>unregister service failure callback method.</p>
</dd>
<dt><a href="#fetchAllMessagesSuccessCallback">fetchAllMessagesSuccessCallback</a> : <code>function</code></dt>
<dd><p>Fetch all messages success callback method.</p>
</dd>
<dt><a href="#fetchAllMessagesFailureCallback">fetchAllMessagesFailureCallback</a> : <code>function</code></dt>
<dd><p>Fetch all messages service failure callback method.</p>
</dd>
<dt><a href="#updateLocationSuccessCallback">updateLocationSuccessCallback</a> : <code>function</code></dt>
<dd><p>Update location service success callback method.</p>
</dd>
<dt><a href="#updateLocationFailureCallback">updateLocationFailureCallback</a> : <code>function</code></dt>
<dd><p>Update location service failure callback method.</p>
</dd>
<dt><a href="#markReadSuccessCallback">markReadSuccessCallback</a> : <code>function</code></dt>
<dd><p>Mark meesage as read service success callback method.</p>
</dd>
<dt><a href="#markReadFailureCallback">markReadFailureCallback</a> : <code>function</code></dt>
<dd><p>Mark meesage as read service failure callback method.</p>
</dd>
<dt><a href="#messageContentSuccessCallback">messageContentSuccessCallback</a> : <code>function</code></dt>
<dd><p>Message content service success callback method.</p>
</dd>
<dt><a href="#messageContentFailureCallback">messageContentFailureCallback</a> : <code>function</code></dt>
<dd><p>Message content service failure callback method.</p>
</dd>
</dl>

<a name="IdentityService"></a>

## IdentityService
Identity service instance for handling login/logout calls.

**Kind**: global class  

* [IdentityService](#IdentityService)
    * [new IdentityService()](#new_IdentityService_new)
    * [.login(options, successCallback, failureCallback)](#IdentityService+login)
    * [.anonymousLoginSync(options)](#IdentityService+anonymousLoginSync)
    * [.logout(successCallback, failureCallback)](#IdentityService+logout)
    * [.getBackendToken(fromserver, options, successCallback, failureCallback)](#IdentityService+getBackendToken)
    * [.getProfile(fromserver, successCallback, failureCallback)](#IdentityService+getProfile)
    * [.getProviderName()](#IdentityService+getProviderName) ⇒ <code>string</code>
    * [.getProviderType()](#IdentityService+getProviderType) ⇒ <code>string</code>
    * [.getUserData()](#IdentityService+getUserData) ⇒ <code>string</code>
    * [.getUserAttributes()](#IdentityService+getUserAttributes) ⇒ <code>string</code>
    * [.getSecurityAttributes()](#IdentityService+getSecurityAttributes) ⇒ <code>string</code>

<a name="new_IdentityService_new"></a>

### new IdentityService()
Should not be called by the developer.

<a name="IdentityService+login"></a>

### identityService.login(options, successCallback, failureCallback)
Login with the given credentials asynchronously and executes the given callback.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | User name and password |
| successCallback | <code>[loginSuccessCallback](#loginSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[loginFailureCallback](#loginFailureCallback)</code> | Callback method on failure |

<a name="IdentityService+anonymousLoginSync"></a>

### identityService.anonymousLoginSync(options)
Login anonymous with the given credentials synchronously and executes the given callback.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | User name and password |

<a name="IdentityService+logout"></a>

### identityService.logout(successCallback, failureCallback)
Logout and executes the given callback.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>[logoutSuccessCallback](#logoutSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[logoutFailureCallback](#logoutFailureCallback)</code> | Callback method on failure |

<a name="IdentityService+getBackendToken"></a>

### identityService.getBackendToken(fromserver, options, successCallback, failureCallback)
Fetch the backend datasource token.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fromserver | <code>boolean</code> | Flag to force fetch from server only. |
| options | <code>object</code> | Options |
| successCallback | <code>[fetchBackendTokenSuccessCallback](#fetchBackendTokenSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[fetchBackendTokenFailureCallback](#fetchBackendTokenFailureCallback)</code> | Callback method on failure |

<a name="IdentityService+getProfile"></a>

### identityService.getProfile(fromserver, successCallback, failureCallback)
Get profile.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fromserver | <code>boolean</code> | Flag to force fetch from server only. |
| successCallback | <code>[getProfileSuccessCallback](#getProfileSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[getProfileFailureCallback](#getProfileFailureCallback)</code> | Callback method on failure |

<a name="IdentityService+getProviderName"></a>

### identityService.getProviderName() ⇒ <code>string</code>
Get the provider name.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  
**Returns**: <code>string</code> - Provider name.  
<a name="IdentityService+getProviderType"></a>

### identityService.getProviderType() ⇒ <code>string</code>
Get the provider type.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  
**Returns**: <code>string</code> - Provider type.  
<a name="IdentityService+getUserData"></a>

### identityService.getUserData() ⇒ <code>string</code>
Get the generic session data type.

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  
**Returns**: <code>string</code> - session data.  
<a name="IdentityService+getUserAttributes"></a>

### identityService.getUserAttributes() ⇒ <code>string</code>
Get the user attributes returned by a provider

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  
**Returns**: <code>string</code> - user attributes.  
<a name="IdentityService+getSecurityAttributes"></a>

### identityService.getSecurityAttributes() ⇒ <code>string</code>
Get the security attributes returned by a provider

**Kind**: instance method of <code>[IdentityService](#IdentityService)</code>  
**Returns**: <code>string</code> - security attributes.  
<a name="IntegrationService"></a>

## IntegrationService
Integration service instance for invoking the integration services.

**Kind**: global class  

* [IntegrationService](#IntegrationService)
    * [new IntegrationService()](#new_IntegrationService_new)
    * [.invokeOperation(operationName, headers, data, successCallback, failureCallback, options)](#IntegrationService+invokeOperation)

<a name="new_IntegrationService_new"></a>

### new IntegrationService()
Should not be called by the developer.

<a name="IntegrationService+invokeOperation"></a>

### integrationService.invokeOperation(operationName, headers, data, successCallback, failureCallback, options)
invoke the specified operation

**Kind**: instance method of <code>[IntegrationService](#IntegrationService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| operationName | <code>string</code> | Name of the operation |
| headers | <code>object</code> | Input headers for the operation |
| data | <code>object</code> | Input data for the operation |
| successCallback | <code>[integrationSuccessCallback](#integrationSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[integrationFailureCallback](#integrationFailureCallback)</code> | Callback method on failure |
| options | <code>object</code> | Integration service options |

<a name="MessagingService"></a>

## MessagingService
Messaging service instance for invoking the Messaging services.

**Kind**: global class  

* [MessagingService](#MessagingService)
    * [new MessagingService(reference)](#new_MessagingService_new)
    * [.register(osType, deviceId, pnsToken, successCallback, failureCallback)](#MessagingService+register)
    * [.registerWithAuthToken(osType, deviceId, authToken, pnsToken, successCallback, failureCallback)](#MessagingService+registerWithAuthToken)
    * [.unregister(successCallback, failureCallback)](#MessagingService+unregister)
    * [.unregisterWithAuthToken(successCallback, failureCallback)](#MessagingService+unregisterWithAuthToken)
    * [.fetchAllMessages(successCallback, failureCallback)](#MessagingService+fetchAllMessages)
    * [.updateGeoLocationWithAuthToken(latitude, longitude, locationName, successCallback, failureCallback)](#MessagingService+updateGeoLocationWithAuthToken)
    * [.markMessageRead(messageId, successCallback, failureCallback)](#MessagingService+markMessageRead)
    * [.fetchMessageContent(messageId, successCallback, failureCallback)](#MessagingService+fetchMessageContent)

<a name="new_MessagingService_new"></a>

### new MessagingService(reference)
Should not be called by the developer.


| Param | Description |
| --- | --- |
| reference | to kony object |

<a name="MessagingService+register"></a>

### messagingService.register(osType, deviceId, pnsToken, successCallback, failureCallback)
register to messaging service

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| osType | <code>string</code> | Type of the operating system |
| deviceId | <code>string</code> | Device Id |
| pnsToken | <code>string</code> | Token value |
| successCallback | <code>[registerSuccessCallback](#registerSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[registerFailureCallback](#registerFailureCallback)</code> | Callback method on failure |

<a name="MessagingService+registerWithAuthToken"></a>

### messagingService.registerWithAuthToken(osType, deviceId, authToken, pnsToken, successCallback, failureCallback)
register to messaging service

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| osType | <code>string</code> | Type of the operating system |
| deviceId | <code>string</code> | Device Id |
| authToken | <code>string</code> | Authorization Token |
| pnsToken | <code>string</code> | Token value |
| successCallback | <code>[registerSuccessCallback](#registerSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[registerFailureCallback](#registerFailureCallback)</code> | Callback method on failure |

<a name="MessagingService+unregister"></a>

### messagingService.unregister(successCallback, failureCallback)
unregister to messaging service

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>[unregisterSuccessCallback](#unregisterSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[unregisterFailureCallback](#unregisterFailureCallback)</code> | Callback method on failure |

<a name="MessagingService+unregisterWithAuthToken"></a>

### messagingService.unregisterWithAuthToken(successCallback, failureCallback)
unregister to messaging service

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>[unregisterSuccessCallback](#unregisterSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[unregisterFailureCallback](#unregisterFailureCallback)</code> | Callback method on failure |

<a name="MessagingService+fetchAllMessages"></a>

### messagingService.fetchAllMessages(successCallback, failureCallback)
Fetch all messages

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>[fetchAllMessagesSuccessCallback](#fetchAllMessagesSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[fetchAllMessagesFailureCallback](#fetchAllMessagesFailureCallback)</code> | Callback method on failure |

<a name="MessagingService+updateGeoLocationWithAuthToken"></a>

### messagingService.updateGeoLocationWithAuthToken(latitude, longitude, locationName, successCallback, failureCallback)
Update the location

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| latitude | <code>string</code> | Latitude value |
| longitude | <code>string</code> | Longitude value |
| locationName | <code>string</code> | Location name |
| successCallback | <code>[updateLocationSuccessCallback](#updateLocationSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[updateLocationFailureCallback](#updateLocationFailureCallback)</code> | Callback method on failure |

<a name="MessagingService+markMessageRead"></a>

### messagingService.markMessageRead(messageId, successCallback, failureCallback)
Mark the message as read for a given message id

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| messageId | <code>string</code> | Message id |
| successCallback | <code>[markReadSuccessCallback](#markReadSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[markReadFailureCallback](#markReadFailureCallback)</code> | Callback method on failure |

<a name="MessagingService+fetchMessageContent"></a>

### messagingService.fetchMessageContent(messageId, successCallback, failureCallback)
Fetches the message conetent for a given message id

**Kind**: instance method of <code>[MessagingService](#MessagingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| messageId | <code>string</code> | Message id |
| successCallback | <code>[messageContentSuccessCallback](#messageContentSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[messageContentFailureCallback](#messageContentFailureCallback)</code> | Callback method on failure |

<a name="MetricsService"></a>

## MetricsService
Metrics service instance for invoking the Metrics services.

**Kind**: global class  

* [MetricsService](#MetricsService)
    * [new MetricsService()](#new_MetricsService_new)
    * [.getUserId()](#MetricsService+getUserId)
    * [.setFlowTag(flowTag)](#MetricsService+setFlowTag)
    * [.clearFlowTag()](#MetricsService+clearFlowTag)
    * [.getFlowTag()](#MetricsService+getFlowTag) ⇒ <code>string</code>
    * [.setEventConfig(confType, eventBufferAutoFlushCount, eventBufferMaxCount)](#MetricsService+setEventConfig)
    * [.sendEvent(evttype, evtSubType, formID, widgetID, flowTag, metaData)](#MetricsService+sendEvent)
    * [.flushEvents()](#MetricsService+flushEvents)
    * [.getEventsInBuffer()](#MetricsService+getEventsInBuffer) ⇒ <code>object</code>
    * [.sendCustomMetrics(reportingGroupID, metrics)](#MetricsService+sendCustomMetrics)
    * [.reportError(errorCode, errorType, errorMessage, errorDetails)](#MetricsService+reportError)
    * [.reportHandledException(exceptionCode, exceptionType, exceptionMessage, exceptionDetails)](#MetricsService+reportHandledException)
    * [.setSessionId(sessionId)](#MetricsService+setSessionId)
    * [.getSessionId()](#MetricsService+getSessionId)
    * [.setEventTracking()](#MetricsService+setEventTracking)

<a name="new_MetricsService_new"></a>

### new MetricsService()
Should not be called by the developer.

<a name="MetricsService+getUserId"></a>

### metricsService.getUserId()
invoke the getUserId operation

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
<a name="MetricsService+setFlowTag"></a>

### metricsService.setFlowTag(flowTag)
This method will take the a String to set a Flow Tag for the reported events.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| flowTag | <code>string</code> | sets flow tag for reporting the events. |

<a name="MetricsService+clearFlowTag"></a>

### metricsService.clearFlowTag()
This method will clear the flow tag set by the user previously.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
<a name="MetricsService+getFlowTag"></a>

### metricsService.getFlowTag() ⇒ <code>string</code>
This method will return the a String to set a Flow Tag for the reported events.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
**Returns**: <code>string</code> - flowTag - flow tag set by the user for reporting the events.  
<a name="MetricsService+setEventConfig"></a>

### metricsService.setEventConfig(confType, eventBufferAutoFlushCount, eventBufferMaxCount)
This method will take the required values to set the event Configuration values.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| confType | <code>string</code> | sets the Current Configuration Type 					possible values BUFFER or INSTANT. |
| eventBufferAutoFlushCount | <code>number</code> | event buffer count to auto flush the events 								possible values any positive integer 								Default value 15 |
| eventBufferMaxCount | <code>number</code> | Maximum event buffer count to store the events 								possible values any positive integer 								Default value 1000 |

<a name="MetricsService+sendEvent"></a>

### metricsService.sendEvent(evttype, evtSubType, formID, widgetID, flowTag, metaData)
This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
**Throws**:

- Exception


| Param | Type | Description |
| --- | --- | --- |
| evttype | <code>string</code> | Event Type for the reported event. |
| evtSubType | <code>string</code> | string literal for eventSubType(max 256 Chars) |
| formID | <code>string</code> | string literal for formID(max 256 Chars) |
| widgetID | <code>string</code> | string literal for widgetID(max 256 Chars) |
| flowTag | <code>string</code> | string literal to override flow tag (max 256 Chars) |
| metaData | <code>string</code> | string to describe metaData |

<a name="MetricsService+flushEvents"></a>

### metricsService.flushEvents()
This method will send the buffered events to the server at once.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
<a name="MetricsService+getEventsInBuffer"></a>

### metricsService.getEventsInBuffer() ⇒ <code>object</code>
This method will return the a List of the buffered events.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
**Returns**: <code>object</code> - events - list of events stored in buffer.  
<a name="MetricsService+sendCustomMetrics"></a>

### metricsService.sendCustomMetrics(reportingGroupID, metrics)
invoke the sendCustomMetrics operation

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| reportingGroupID | <code>string</code> | reporting Group ID |
| metrics | <code>object</code> | metrics being reported |

<a name="MetricsService+reportError"></a>

### metricsService.reportError(errorCode, errorType, errorMessage, errorDetails)
This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
**Throws**:

- Exception


| Param | Type | Description |
| --- | --- | --- |
| errorCode | <code>string</code> | errorCode of the reported error. Can be empty if not applicable |
| errorType | <code>string</code> | errorType of the reported error. Can be empty if not applicable |
| errorMessage | <code>string</code> | errorMessage of the reported error. Can be empty if not applicable |
| errorDetails | <code>json</code> | errorDetails of the reported error as a json string that can have key-value pairs for the following 					keys errfile, errmethod, errline, errstacktrace, formID, widgetID, flowTag. |

<a name="MetricsService+reportHandledException"></a>

### metricsService.reportHandledException(exceptionCode, exceptionType, exceptionMessage, exceptionDetails)
This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
**Throws**:

- Exception


| Param | Type | Description |
| --- | --- | --- |
| exceptionCode | <code>string</code> | Code for the reported exception. Can be empty if not applicable |
| exceptionType | <code>string</code> | Type of the reported exception. Can be empty if not applicable |
| exceptionMessage | <code>string</code> | Message of the reported exception. Can be empty if not applicable |
| exceptionDetails | <code>json</code> | Details of the reported exception as a JSON string that can have key-value pairs for the 					following keys exceptioncode, exceptionfile, exceptionmethod, exceptionline, 					exceptionstacktrace, formID, widgetID, flowTag. |

<a name="MetricsService+setSessionId"></a>

### metricsService.setSessionId(sessionId)
sets the current sessionId

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  

| Param | Type |
| --- | --- |
| sessionId | <code>string</code> | 

<a name="MetricsService+getSessionId"></a>

### metricsService.getSessionId()
get the current sessionID

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
<a name="MetricsService+setEventTracking"></a>

### metricsService.setEventTracking()
stub method used for event tracking

**Kind**: instance method of <code>[MetricsService](#MetricsService)</code>  
<a name="ReportingService"></a>

## ReportingService
Reporting service instance for invoking the reporting services.

**Kind**: global class  

* [ReportingService](#ReportingService)
    * [new ReportingService()](#new_ReportingService_new)
    * [.setUserId(userId)](#ReportingService+setUserId)
    * [.getUserId()](#ReportingService+getUserId)
    * [.report(reportingGroupID, metrics)](#ReportingService+report)

<a name="new_ReportingService_new"></a>

### new ReportingService()
Should not be called by the developer.

<a name="ReportingService+setUserId"></a>

### reportingService.setUserId(userId)
invoke the setUserId operation

**Kind**: instance method of <code>[ReportingService](#ReportingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | userId specified by user |

<a name="ReportingService+getUserId"></a>

### reportingService.getUserId()
invoke the getUserId operation

**Kind**: instance method of <code>[ReportingService](#ReportingService)</code>  
<a name="ReportingService+report"></a>

### reportingService.report(reportingGroupID, metrics)
invoke the report operation

**Kind**: instance method of <code>[ReportingService](#ReportingService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| reportingGroupID | <code>string</code> | reporting Group ID |
| metrics | <code>object</code> | metrics being reported |

<a name="overrideNetworkFlag"></a>

## overrideNetworkFlag : <code>boolean</code>
Flag used to override the network availability api for automation testing.

**Kind**: global variable  
<a name="kony"></a>

## kony : <code>object</code>
Kony namespace

**Kind**: global namespace  

* [kony](#kony) : <code>object</code>
    * [.sdk](#kony.sdk)
        * [new kony.sdk()](#new_kony.sdk_new)
        * _instance_
            * [.init(appKey, appSecret, serviceUrl, successCallback, failureCallback)](#kony.sdk+init)
            * [.getObjectService(serviceName, options)](#kony.sdk+getObjectService) ⇒
            * [.getIntegrationService(serviceName)](#kony.sdk+getIntegrationService) ⇒ <code>[IntegrationService](#IntegrationService)</code>
            * [.getMessagingService()](#kony.sdk+getMessagingService) ⇒ <code>[MessagingService](#MessagingService)</code>
            * [.getMetricsService()](#kony.sdk+getMetricsService) ⇒ <code>[MetricsService](#MetricsService)</code>
            * [.getReportingService()](#kony.sdk+getReportingService) ⇒ <code>[ReportingService](#ReportingService)</code>
            * [.getSyncService()](#kony.sdk+getSyncService) ⇒ <code>SyncService</code>
        * _static_
            * [.OfflineObjectService](#kony.sdk.OfflineObjectService)
                * [new kony.sdk.OfflineObjectService(konyRef, serviceName)](#new_kony.sdk.OfflineObjectService_new)
                * [.create(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+create)
                * [.fetch(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+fetch)
                * [.update(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+update)
                * [.deleteRecord(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+deleteRecord)
                * [.getMetadataOfAllObjects(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getMetadataOfAllObjects)
                * [.getMetadataOfObject(objectName, options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getMetadataOfObject)
                * [.executeSelectQuery(queryStr, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+executeSelectQuery)
                * [.getBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getBinaryContent)
            * [.OnlineObjectService](#kony.sdk.OnlineObjectService)
                * [new kony.sdk.OnlineObjectService(konyRef, serviceName)](#new_kony.sdk.OnlineObjectService_new)
                * [.create(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+create)
                * [.fetch(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+fetch)
                * [.update(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+update)
                * [.partialUpdate(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+partialUpdate)
                * [.deleteRecord(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+deleteRecord)
                * [.customVerb(verbName, options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+customVerb)
                * [.getMetadataOfAllObjects(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getMetadataOfAllObjects)
                * [.getMetadataOfObject(objectName, options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getMetadataOfObject)
                * [.getBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getBinaryContent)
                * [.createBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+createBinaryContent)
                * [.updateBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+updateBinaryContent)
            * [.offline](#kony.sdk.offline) ⇒ <code>[IdentityService](#IdentityService)</code>
                * [.loginOffline()](#kony.sdk.offline.loginOffline)
                * [.saveUserAuthInformation()](#kony.sdk.offline.saveUserAuthInformation)
                * [.saveTempUserCredentials()](#kony.sdk.offline.saveTempUserCredentials)
                * [.updateSuccessUserCredentials()](#kony.sdk.offline.updateSuccessUserCredentials)
                * [.getKey()](#kony.sdk.offline.getKey)
                * [.getClaimsToken()](#kony.sdk.offline.getClaimsToken)
                * [.updateClaimsToken()](#kony.sdk.offline.updateClaimsToken)
                * [.updateBackEndToken()](#kony.sdk.offline.updateBackEndToken)
                * [.removeUserCredentials()](#kony.sdk.offline.removeUserCredentials)
                * [.removeUserAuthInformation()](#kony.sdk.offline.removeUserAuthInformation)
            * [.isNetworkAvailable()](#kony.sdk.isNetworkAvailable)
            * [.overrideNetworkFlag()](#kony.sdk.overrideNetworkFlag)
            * [.resetNetworkFlag()](#kony.sdk.resetNetworkFlag)

<a name="kony.sdk"></a>

### kony.sdk
kony Class

**Kind**: static class of <code>[kony](#kony)</code>  

* [.sdk](#kony.sdk)
    * [new kony.sdk()](#new_kony.sdk_new)
    * _instance_
        * [.init(appKey, appSecret, serviceUrl, successCallback, failureCallback)](#kony.sdk+init)
        * [.getObjectService(serviceName, options)](#kony.sdk+getObjectService) ⇒
        * [.getIntegrationService(serviceName)](#kony.sdk+getIntegrationService) ⇒ <code>[IntegrationService](#IntegrationService)</code>
        * [.getMessagingService()](#kony.sdk+getMessagingService) ⇒ <code>[MessagingService](#MessagingService)</code>
        * [.getMetricsService()](#kony.sdk+getMetricsService) ⇒ <code>[MetricsService](#MetricsService)</code>
        * [.getReportingService()](#kony.sdk+getReportingService) ⇒ <code>[ReportingService](#ReportingService)</code>
        * [.getSyncService()](#kony.sdk+getSyncService) ⇒ <code>SyncService</code>
    * _static_
        * [.OfflineObjectService](#kony.sdk.OfflineObjectService)
            * [new kony.sdk.OfflineObjectService(konyRef, serviceName)](#new_kony.sdk.OfflineObjectService_new)
            * [.create(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+create)
            * [.fetch(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+fetch)
            * [.update(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+update)
            * [.deleteRecord(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+deleteRecord)
            * [.getMetadataOfAllObjects(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getMetadataOfAllObjects)
            * [.getMetadataOfObject(objectName, options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getMetadataOfObject)
            * [.executeSelectQuery(queryStr, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+executeSelectQuery)
            * [.getBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getBinaryContent)
        * [.OnlineObjectService](#kony.sdk.OnlineObjectService)
            * [new kony.sdk.OnlineObjectService(konyRef, serviceName)](#new_kony.sdk.OnlineObjectService_new)
            * [.create(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+create)
            * [.fetch(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+fetch)
            * [.update(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+update)
            * [.partialUpdate(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+partialUpdate)
            * [.deleteRecord(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+deleteRecord)
            * [.customVerb(verbName, options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+customVerb)
            * [.getMetadataOfAllObjects(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getMetadataOfAllObjects)
            * [.getMetadataOfObject(objectName, options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getMetadataOfObject)
            * [.getBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getBinaryContent)
            * [.createBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+createBinaryContent)
            * [.updateBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+updateBinaryContent)
        * [.offline](#kony.sdk.offline) ⇒ <code>[IdentityService](#IdentityService)</code>
            * [.loginOffline()](#kony.sdk.offline.loginOffline)
            * [.saveUserAuthInformation()](#kony.sdk.offline.saveUserAuthInformation)
            * [.saveTempUserCredentials()](#kony.sdk.offline.saveTempUserCredentials)
            * [.updateSuccessUserCredentials()](#kony.sdk.offline.updateSuccessUserCredentials)
            * [.getKey()](#kony.sdk.offline.getKey)
            * [.getClaimsToken()](#kony.sdk.offline.getClaimsToken)
            * [.updateClaimsToken()](#kony.sdk.offline.updateClaimsToken)
            * [.updateBackEndToken()](#kony.sdk.offline.updateBackEndToken)
            * [.removeUserCredentials()](#kony.sdk.offline.removeUserCredentials)
            * [.removeUserAuthInformation()](#kony.sdk.offline.removeUserAuthInformation)
        * [.isNetworkAvailable()](#kony.sdk.isNetworkAvailable)
        * [.overrideNetworkFlag()](#kony.sdk.overrideNetworkFlag)
        * [.resetNetworkFlag()](#kony.sdk.resetNetworkFlag)

<a name="new_kony.sdk_new"></a>

#### new kony.sdk()
Constructor for creating the kony client instance.

<a name="kony.sdk+init"></a>

#### sdk.init(appKey, appSecret, serviceUrl, successCallback, failureCallback)
Initialization method for the kony SDK.This method will fetch the app configuration from the kony server and stores in memory.This method has to be invoked before invoking any other SDK methods.

**Kind**: instance method of <code>[sdk](#kony.sdk)</code>  

| Param | Type | Description |
| --- | --- | --- |
| appKey | <code>string</code> | Appkey of the kony application |
| appSecret | <code>string</code> | App Secret of the kony application |
| serviceUrl | <code>string</code> | URL of the kony Server |
| successCallback | <code>[initSuccessCallback](#initSuccessCallback)</code> | Callback method on success |
| failureCallback | <code>[initFailureCallback](#initFailureCallback)</code> | Callback method on failure |

<a name="kony.sdk+getObjectService"></a>

#### sdk.getObjectService(serviceName, options) ⇒
Method to create the object service instance with the provided service name.

**Kind**: instance method of <code>[sdk](#kony.sdk)</code>  
**Returns**: [/ @link kony.sdk.OfflineObjectService](#kony.sdk.OnlineObjectService) Object service instance  
**Throws**:

- Exception if the serviceName or access is invalid.


| Param | Type | Description |
| --- | --- | --- |
| serviceName | <code>string</code> | Name of the service |
| options | <code>map</code> | Map of key values like {"access":"offline"/"online"/"registered Object Service Name"} |

<a name="kony.sdk+getIntegrationService"></a>

#### sdk.getIntegrationService(serviceName) ⇒ <code>[IntegrationService](#IntegrationService)</code>
Method to create the integration service instance with the provided service name.

**Kind**: instance method of <code>[sdk](#kony.sdk)</code>  
**Returns**: <code>[IntegrationService](#IntegrationService)</code> - Integration service instance  

| Param | Type | Description |
| --- | --- | --- |
| serviceName | <code>string</code> | Name of the service |

<a name="kony.sdk+getMessagingService"></a>

#### sdk.getMessagingService() ⇒ <code>[MessagingService](#MessagingService)</code>
Method to create the messaging service instance.

**Kind**: instance method of <code>[sdk](#kony.sdk)</code>  
**Returns**: <code>[MessagingService](#MessagingService)</code> - Messaging service instance  
<a name="kony.sdk+getMetricsService"></a>

#### sdk.getMetricsService() ⇒ <code>[MetricsService](#MetricsService)</code>
Method to create the Metrics service instance with the provided service name.

**Kind**: instance method of <code>[sdk](#kony.sdk)</code>  
**Returns**: <code>[MetricsService](#MetricsService)</code> - Metrics service instance  
<a name="kony.sdk+getReportingService"></a>

#### sdk.getReportingService() ⇒ <code>[ReportingService](#ReportingService)</code>
Method to create the Reporting service instance with the provided service name.

**Kind**: instance method of <code>[sdk](#kony.sdk)</code>  
**Returns**: <code>[ReportingService](#ReportingService)</code> - Reporting service instance  
<a name="kony.sdk+getSyncService"></a>

#### sdk.getSyncService() ⇒ <code>SyncService</code>
Method to create the sync service instance.

**Kind**: instance method of <code>[sdk](#kony.sdk)</code>  
**Returns**: <code>SyncService</code> - sync service instance  
<a name="kony.sdk.OfflineObjectService"></a>

#### sdk.OfflineObjectService
**Kind**: static class of <code>[sdk](#kony.sdk)</code>  

* [.OfflineObjectService](#kony.sdk.OfflineObjectService)
    * [new kony.sdk.OfflineObjectService(konyRef, serviceName)](#new_kony.sdk.OfflineObjectService_new)
    * [.create(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+create)
    * [.fetch(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+fetch)
    * [.update(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+update)
    * [.deleteRecord(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+deleteRecord)
    * [.getMetadataOfAllObjects(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getMetadataOfAllObjects)
    * [.getMetadataOfObject(objectName, options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getMetadataOfObject)
    * [.executeSelectQuery(queryStr, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+executeSelectQuery)
    * [.getBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OfflineObjectService+getBinaryContent)

<a name="new_kony.sdk.OfflineObjectService_new"></a>

##### new kony.sdk.OfflineObjectService(konyRef, serviceName)
Method which returns the offline ObjectService object


| Param |
| --- |
| konyRef | 
| serviceName | 

<a name="kony.sdk.OfflineObjectService+create"></a>

##### offlineObjectService.create(options, successCallback, failureCallback)
This method is used to create a record on the object

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject)} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OfflineObjectService+fetch"></a>

##### offlineObjectService.fetch(options, successCallback, failureCallback)
This method is used to fetch records from the object

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject)} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OfflineObjectService+update"></a>

##### offlineObjectService.update(options, successCallback, failureCallback)
This method is used to update a record in the object

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject)} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OfflineObjectService+deleteRecord"></a>

##### offlineObjectService.deleteRecord(options, successCallback, failureCallback)
This method is used to delete a record in the object

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject)} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OfflineObjectService+getMetadataOfAllObjects"></a>

##### offlineObjectService.getMetadataOfAllObjects(options, successCallback, failureCallback)
This method is used to retrieve metadata of all objects

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param |
| --- |
| options | 
| successCallback | 
| failureCallback | 

<a name="kony.sdk.OfflineObjectService+getMetadataOfObject"></a>

##### offlineObjectService.getMetadataOfObject(objectName, options, successCallback, failureCallback)
This method is used to retrive metadata of a specific object

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param |
| --- |
| objectName | 
| options | 
| successCallback | 
| failureCallback | 

<a name="kony.sdk.OfflineObjectService+executeSelectQuery"></a>

##### offlineObjectService.executeSelectQuery(queryStr, successCallback, failureCallback)
This method is used to execute an sql query

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param |
| --- |
| queryStr | 
| successCallback | 
| failureCallback | 

<a name="kony.sdk.OfflineObjectService+getBinaryContent"></a>

##### offlineObjectService.getBinaryContent(options, successCallback, failureCallback)
Helps to get the binary content of the specified column on the Object

**Kind**: instance method of <code>[OfflineObjectService](#kony.sdk.OfflineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject), "responsetype":"base64string/filepath(Default)", "binaryAttrName":columnName} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService"></a>

#### sdk.OnlineObjectService
**Kind**: static class of <code>[sdk](#kony.sdk)</code>  

* [.OnlineObjectService](#kony.sdk.OnlineObjectService)
    * [new kony.sdk.OnlineObjectService(konyRef, serviceName)](#new_kony.sdk.OnlineObjectService_new)
    * [.create(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+create)
    * [.fetch(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+fetch)
    * [.update(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+update)
    * [.partialUpdate(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+partialUpdate)
    * [.deleteRecord(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+deleteRecord)
    * [.customVerb(verbName, options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+customVerb)
    * [.getMetadataOfAllObjects(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getMetadataOfAllObjects)
    * [.getMetadataOfObject(objectName, options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getMetadataOfObject)
    * [.getBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+getBinaryContent)
    * [.createBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+createBinaryContent)
    * [.updateBinaryContent(options, successCallback, failureCallback)](#kony.sdk.OnlineObjectService+updateBinaryContent)

<a name="new_kony.sdk.OnlineObjectService_new"></a>

##### new kony.sdk.OnlineObjectService(konyRef, serviceName)
Method which returns the online ObjectService object


| Param |
| --- |
| konyRef | 
| serviceName | 

<a name="kony.sdk.OnlineObjectService+create"></a>

##### onlineObjectService.create(options, successCallback, failureCallback)
This method is used to create a record on the object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject),"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+fetch"></a>

##### onlineObjectService.fetch(options, successCallback, failureCallback)
This method is used to fetch a record on the object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject),"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+update"></a>

##### onlineObjectService.update(options, successCallback, failureCallback)
This method is used to update a record on the object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject),"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+partialUpdate"></a>

##### onlineObjectService.partialUpdate(options, successCallback, failureCallback)
This method is used to partial update a record on the object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject),"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+deleteRecord"></a>

##### onlineObjectService.deleteRecord(options, successCallback, failureCallback)
This method is used to delete a record on the object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject),"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+customVerb"></a>

##### onlineObjectService.customVerb(verbName, options, successCallback, failureCallback)
This method is used to for performing custom operation

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| verbName | <code>string</code> | custom verb identifier |
| options | <code>map</code> | includes {"dataObject":(@link kony.sdk.dto.DataObject),"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+getMetadataOfAllObjects"></a>

##### onlineObjectService.getMetadataOfAllObjects(options, successCallback, failureCallback)
This method is used to retrive metadata of all objects

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"getFromServer":boolean,"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+getMetadataOfObject"></a>

##### onlineObjectService.getMetadataOfObject(objectName, options, successCallback, failureCallback)
This method is used to retrive metadata of a specific object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| objectName |  |  |
| options | <code>map</code> | includes {"getFromServer":boolean,"headers":<map of http headers>} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+getBinaryContent"></a>

##### onlineObjectService.getBinaryContent(options, successCallback, failureCallback)
Helps to get the binary content of the specified column on the Object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject":[DataObject](#kony.sdk.dto.DataObject), "binaryAttrName":columnName} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+createBinaryContent"></a>

##### onlineObjectService.createBinaryContent(options, successCallback, failureCallback)
Helps to create the binary content of the specified column on the Object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject": [DataObject](#kony.sdk.dto.DataObject), "binaryAttrName":columnName} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.OnlineObjectService+updateBinaryContent"></a>

##### onlineObjectService.updateBinaryContent(options, successCallback, failureCallback)
Helps to update the binary content of the specified column on the Object

**Kind**: instance method of <code>[OnlineObjectService](#kony.sdk.OnlineObjectService)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>map</code> | includes {"dataObject": [DataObject](#kony.sdk.dto.DataObject), "binaryAttrName":columnName} |
| successCallback |  |  |
| failureCallback |  |  |

<a name="kony.sdk.offline"></a>

#### sdk.offline ⇒ <code>[IdentityService](#IdentityService)</code>
Method to create the Identity service instance with the provided provider name.

**Kind**: static property of <code>[sdk](#kony.sdk)</code>  
**Returns**: <code>[IdentityService](#IdentityService)</code> - Identity service instance  

| Param | Type | Description |
| --- | --- | --- |
| providerName | <code>string</code> | Name of the provider |


* [.offline](#kony.sdk.offline) ⇒ <code>[IdentityService](#IdentityService)</code>
    * [.loginOffline()](#kony.sdk.offline.loginOffline)
    * [.saveUserAuthInformation()](#kony.sdk.offline.saveUserAuthInformation)
    * [.saveTempUserCredentials()](#kony.sdk.offline.saveTempUserCredentials)
    * [.updateSuccessUserCredentials()](#kony.sdk.offline.updateSuccessUserCredentials)
    * [.getKey()](#kony.sdk.offline.getKey)
    * [.getClaimsToken()](#kony.sdk.offline.getClaimsToken)
    * [.updateClaimsToken()](#kony.sdk.offline.updateClaimsToken)
    * [.updateBackEndToken()](#kony.sdk.offline.updateBackEndToken)
    * [.removeUserCredentials()](#kony.sdk.offline.removeUserCredentials)
    * [.removeUserAuthInformation()](#kony.sdk.offline.removeUserAuthInformation)

<a name="kony.sdk.offline.loginOffline"></a>

##### offline.loginOffline()
This Utility API to be used for the user to be able to login offline into the application.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.saveUserAuthInformation"></a>

##### offline.saveUserAuthInformation()
This API is to be used to store the user login success response to the device and read it in the offline auth success scenario.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.saveTempUserCredentials"></a>

##### offline.saveTempUserCredentials()
This api saves the temporary user credentials to the device store.  This is to be called only if the app is offline auth enabled.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.updateSuccessUserCredentials"></a>

##### offline.updateSuccessUserCredentials()
This Util method reads the temporarily stored user credentials and updates the actual store of user credentials. This should be called on successful onlnine login.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.getKey"></a>

##### offline.getKey()
This API generates the PBKDF2 key by reading the options passed as argument.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.getClaimsToken"></a>

##### offline.getClaimsToken()
This Utility API is to enable the developer read the claims token when the device is in offline mode.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.updateClaimsToken"></a>

##### offline.updateClaimsToken()
This Utility API is to update the the claims token.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.updateBackEndToken"></a>

##### offline.updateBackEndToken()
This Utility API is to update the the backend token.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.removeUserCredentials"></a>

##### offline.removeUserCredentials()
This API removes the user credentials from the device store.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.offline.removeUserAuthInformation"></a>

##### offline.removeUserAuthInformation()
Removes the user auth information from device store.

**Kind**: static method of <code>[offline](#kony.sdk.offline)</code>  
<a name="kony.sdk.isNetworkAvailable"></a>

#### sdk.isNetworkAvailable()
Utility Method for the application to check the network availability.

**Kind**: static method of <code>[sdk](#kony.sdk)</code>  
<a name="kony.sdk.overrideNetworkFlag"></a>

#### sdk.overrideNetworkFlag()
Utility method to set the network flag for offline testing.

**Kind**: static method of <code>[sdk](#kony.sdk)</code>  
<a name="kony.sdk.resetNetworkFlag"></a>

#### sdk.resetNetworkFlag()
Utility method to reset the network flag set for offline testing.

**Kind**: static method of <code>[sdk](#kony.sdk)</code>  
<a name="initSuccessCallback"></a>

## initSuccessCallback : <code>function</code>
Init success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| mainRef | <code>json</code> | Application Configuration |

<a name="initFailureCallback"></a>

## initFailureCallback : <code>function</code>
Init failure callback method.

**Kind**: global typedef  
<a name="loginSuccessCallback"></a>

## loginSuccessCallback : <code>function</code>
Login success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| claimsToken | <code>string</code> | Claims token value |

<a name="loginFailureCallback"></a>

## loginFailureCallback : <code>function</code>
Login failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

<a name="logoutSuccessCallback"></a>

## logoutSuccessCallback : <code>function</code>
Logout success callback method.

**Kind**: global typedef  
<a name="logoutFailureCallback"></a>

## logoutFailureCallback : <code>function</code>
Logout failure callback method.

**Kind**: global typedef  
<a name="fetchBackendTokenSuccessCallback"></a>

## fetchBackendTokenSuccessCallback : <code>function</code>
Fetch backend token callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| providerToken | <code>string</code> | Provider token value |

<a name="fetchBackendTokenFailureCallback"></a>

## fetchBackendTokenFailureCallback : <code>function</code>
Fetch backend token callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

<a name="getProfileSuccessCallback"></a>

## getProfileSuccessCallback : <code>function</code>
Get profile callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>object</code> | Profile object |

<a name="getProfileFailureCallback"></a>

## getProfileFailureCallback : <code>function</code>
Get profile callback method.

**Kind**: global typedef  
<a name="integrationSuccessCallback"></a>

## integrationSuccessCallback : <code>function</code>
Integration service success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>object</code> | Integration service response |

<a name="integrationFailureCallback"></a>

## integrationFailureCallback : <code>function</code>
Integration service failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | Error information |

<a name="registerSuccessCallback"></a>

## registerSuccessCallback : <code>function</code>
register success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>json</code> | register response |

<a name="registerFailureCallback"></a>

## registerFailureCallback : <code>function</code>
Register service failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

<a name="registerSuccessCallback"></a>

## registerSuccessCallback : <code>function</code>
register success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>json</code> | register response |

<a name="registerFailureCallback"></a>

## registerFailureCallback : <code>function</code>
Register service failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

<a name="unregisterSuccessCallback"></a>

## unregisterSuccessCallback : <code>function</code>
unregister success callback method.

**Kind**: global typedef  
<a name="unregisterFailureCallback"></a>

## unregisterFailureCallback : <code>function</code>
unregister service failure callback method.

**Kind**: global typedef  
<a name="fetchAllMessagesSuccessCallback"></a>

## fetchAllMessagesSuccessCallback : <code>function</code>
Fetch all messages success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>json</code> | Fetch all messages response |

<a name="fetchAllMessagesFailureCallback"></a>

## fetchAllMessagesFailureCallback : <code>function</code>
Fetch all messages service failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

<a name="updateLocationSuccessCallback"></a>

## updateLocationSuccessCallback : <code>function</code>
Update location service success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>json</code> | Update location response |

<a name="updateLocationFailureCallback"></a>

## updateLocationFailureCallback : <code>function</code>
Update location service failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

<a name="markReadSuccessCallback"></a>

## markReadSuccessCallback : <code>function</code>
Mark meesage as read service success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>json</code> | Mark meesage as read service response |

<a name="markReadFailureCallback"></a>

## markReadFailureCallback : <code>function</code>
Mark meesage as read service failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

<a name="messageContentSuccessCallback"></a>

## messageContentSuccessCallback : <code>function</code>
Message content service success callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>json</code> | Message content service response |

<a name="messageContentFailureCallback"></a>

## messageContentFailureCallback : <code>function</code>
Message content service failure callback method.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>json</code> | Error information |

