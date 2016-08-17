## Functions

<dl>
<dt><a href="#invokeHTTPService">invokeHTTPService(method, URL, data, callback, info, backgroundMode)</a></dt>
<dd><p>invokeHTTPService - Invoke Http service service without passing by kony server</p>
</dd>
<dt><a href="#HandleHTTPResponse">HandleHTTPResponse(URL, obj, callback)</a></dt>
<dd><p>HandleHTTPResponse - callback method to handle the response from HTTP API call</p>
</dd>
<dt><a href="#invokeAppService">invokeAppService(serviceId, data, callback)</a></dt>
<dd><p>invokeAppService - invoke kony service</p>
</dd>
<dt><a href="#serviceStatusCallback">serviceStatusCallback(status, resultTable, info)</a></dt>
<dd><p>serviceStatusCallback - callback method to handle the response from kony service</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ServiceCallback">ServiceCallback</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="invokeHTTPService"></a>

## invokeHTTPService(method, URL, data, callback, info, backgroundMode)
invokeHTTPService - Invoke Http service service without passing by kony server

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> |  |
| URL | <code>String</code> | url of the service |
| data | <code>Object</code> | data to send |
| callback | <code>[ServiceCallback](#ServiceCallback)</code> | method to call once service call is finish |
| info | <code>type</code> | data to pass to the callback |
| backgroundMode | <code>bool</code> | add this param if you don't want to show a loading screen |

<a name="HandleHTTPResponse"></a>

## HandleHTTPResponse(URL, obj, callback)
HandleHTTPResponse - callback method to handle the response from HTTP API call

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| URL | <code>String</code> | URL of the HTTP service |
| obj | <code>Object</code> | response object from HTTP API call |
| callback | <code>[ServiceCallback](#ServiceCallback)</code> | method to call once the request is sent |

<a name="invokeAppService"></a>

## invokeAppService(serviceId, data, callback)
invokeAppService - invoke kony service

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| serviceId | <code>String</code> | id of the service |
| data | <code>Object</code> | data to send |
| callback | <code>[ServiceCallback](#ServiceCallback)</code> | method to call once the request is sent |

<a name="serviceStatusCallback"></a>

## serviceStatusCallback(status, resultTable, info)
serviceStatusCallback - callback method to handle the response from kony service

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>Integer</code> | an integer value indicating the status |
| resultTable | <code>Object</code> | response object with key-value pairs |
| info | <code>Object</code> | user data passed to async service |

<a name="ServiceCallback"></a>

## ServiceCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>String</code> | API status |
| resultTable | <code>Object</code> | data sent back by the API |

