## Members

<dl>
<dt><a href="#gAppId">gAppId</a></dt>
<dd><p>Application id</p>
</dd>
<dt><a href="#gUseApi">gUseApi</a></dt>
<dd><p>Variable to now if we are calling APIs or simulating APIs calls and generating test datas on the application</p>
</dd>
<dt><a href="#gDebug">gDebug</a></dt>
<dd><p>Debug or Release mode</p>
</dd>
<dt><a href="#gRememberMe_Support">gRememberMe_Support</a></dt>
<dd><p>RememberMe Support flag to turn the feature ON/OFF</p>
</dd>
<dt><a href="#callbacksObj">callbacksObj</a></dt>
<dd><p>Callback object for handling App foreground and App background methods</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#application_post_init">application_post_init()</a></dt>
<dd><p>application_post_init - for executing the business logic at the Post App Init of the application</p>
</dd>
<dt><a href="#on_off_switch_widget">on_off_switch_widget(imageWidget)</a></dt>
<dd><p>on_off_switch_widget - For toggling the ON/OFF switch</p>
</dd>
<dt><a href="#onAppBackground">onAppBackground()</a></dt>
<dd><p>onAppBackground - for executing the business logic when App goes in background</p>
</dd>
<dt><a href="#onAppForeground">onAppForeground()</a></dt>
<dd><p>onAppForeground - for executing the business logic when App comes in foreground</p>
</dd>
</dl>

<a name="gAppId"></a>

## gAppId
Application id

**Kind**: global variable  
<a name="gUseApi"></a>

## gUseApi
Variable to now if we are calling APIs or simulating APIs calls and generating test datas on the application

**Kind**: global variable  
<a name="gDebug"></a>

## gDebug
Debug or Release mode

**Kind**: global variable  
<a name="gRememberMe_Support"></a>

## gRememberMe_Support
RememberMe Support flag to turn the feature ON/OFF

**Kind**: global variable  
<a name="callbacksObj"></a>

## callbacksObj
Callback object for handling App foreground and App background methods

**Kind**: global variable  
<a name="application_post_init"></a>

## application_post_init()
application_post_init - for executing the business logic at the Post App Init of the application

**Kind**: global function  
<a name="on_off_switch_widget"></a>

## on_off_switch_widget(imageWidget)
on_off_switch_widget - For toggling the ON/OFF switch

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| imageWidget | <code>widget</code> | Image widget ID whose src needs to be modified |

<a name="onAppBackground"></a>

## onAppBackground()
onAppBackground - for executing the business logic when App goes in background

**Kind**: global function  
<a name="onAppForeground"></a>

## onAppForeground()
onAppForeground - for executing the business logic when App comes in foreground

**Kind**: global function  
