<a name="utils"></a>

## utils : <code>object</code>
Utility methods

**Kind**: global namespace  

* [utils](#utils) : <code>object</code>
    * [.date](#utils.date) : <code>object</code>
        * [.getTimeZoneOffset()](#utils.date.getTimeZoneOffset) ⇒ <code>String</code>
        * [.isValidDate(dateString)](#utils.date.isValidDate) ⇒ <code>bool</code>
        * [.validateFutureDate(date)](#utils.date.validateFutureDate) ⇒ <code>bool</code>
    * [.string](#utils.string) : <code>object</code>
        * [.isAlphanumeric(data, max)](#utils.string.isAlphanumeric) ⇒ <code>bool</code>
        * [.capitalizeFirstLetter(myString)](#utils.string.capitalizeFirstLetter) ⇒ <code>String</code>
    * [.validate](#utils.validate) : <code>object</code>
        * [.isStringNullEmpty(text)](#utils.validate.isStringNullEmpty) ⇒ <code>bool</code>
        * [.email(email)](#utils.validate.email) ⇒ <code>bool</code>
        * [.phone(phone)](#utils.validate.phone) ⇒ <code>bool</code>
    * [.object](#utils.object) : <code>object</code>
        * [.setValues(obj, dict)](#utils.object.setValues)
        * [.isEmpty(obj)](#utils.object.isEmpty) ⇒ <code>bool</code>
        * [.sortJsonArrayByProperty(objArray, prop, direction)](#utils.object.sortJsonArrayByProperty) ⇒ <code>Array</code>
    * [.other](#utils.other) : <code>object</code>
        * [.generateId(text)](#utils.other.generateId) ⇒ <code>String</code>
        * [.generateDataForCollectionView(segmentData)](#utils.other.generateDataForCollectionView) ⇒ <code>Array</code>

<a name="utils.date"></a>

### utils.date : <code>object</code>
Methods related to the application

**Kind**: static namespace of <code>[utils](#utils)</code>  

* [.date](#utils.date) : <code>object</code>
    * [.getTimeZoneOffset()](#utils.date.getTimeZoneOffset) ⇒ <code>String</code>
    * [.isValidDate(dateString)](#utils.date.isValidDate) ⇒ <code>bool</code>
    * [.validateFutureDate(date)](#utils.date.validateFutureDate) ⇒ <code>bool</code>

<a name="utils.date.getTimeZoneOffset"></a>

#### date.getTimeZoneOffset() ⇒ <code>String</code>
getTimeZoneOffset - Returns the time zone offset in Hours

**Kind**: static method of <code>[date](#utils.date)</code>  
**Returns**: <code>String</code> - the time zone offset in Hours (e.g.: +11:00 for Melbourne, Sydney)  
<a name="utils.date.isValidDate"></a>

#### date.isValidDate(dateString) ⇒ <code>bool</code>
isValidDate - validate a string is a valid date

**Kind**: static method of <code>[date](#utils.date)</code>  
**Returns**: <code>bool</code> - true if it is a valid date  

| Param | Type | Description |
| --- | --- | --- |
| dateString | <code>String</code> | string of a date |

<a name="utils.date.validateFutureDate"></a>

#### date.validateFutureDate(date) ⇒ <code>bool</code>
validateFutureDate - check if the date is a date in the future

**Kind**: static method of <code>[date](#utils.date)</code>  
**Returns**: <code>bool</code> - true if it is a future date  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>String</code> | a date |

<a name="utils.string"></a>

### utils.string : <code>object</code>
Methods related to the application

**Kind**: static namespace of <code>[utils](#utils)</code>  

* [.string](#utils.string) : <code>object</code>
    * [.isAlphanumeric(data, max)](#utils.string.isAlphanumeric) ⇒ <code>bool</code>
    * [.capitalizeFirstLetter(myString)](#utils.string.capitalizeFirstLetter) ⇒ <code>String</code>

<a name="utils.string.isAlphanumeric"></a>

#### string.isAlphanumeric(data, max) ⇒ <code>bool</code>
isAlphanumeric - check if a string is alphanumeric

**Kind**: static method of <code>[string](#utils.string)</code>  
**Returns**: <code>bool</code> - return true if the text is alphanumeric  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | text to test |
| max | <code>number</code> | max length (optional) |

<a name="utils.string.capitalizeFirstLetter"></a>

#### string.capitalizeFirstLetter(myString) ⇒ <code>String</code>
capitalizeFirstLetter - capitalize the first letter of a text

**Kind**: static method of <code>[string](#utils.string)</code>  
**Returns**: <code>String</code> - formatted text  

| Param | Type | Description |
| --- | --- | --- |
| myString | <code>String</code> | text to capitalize |

<a name="utils.validate"></a>

### utils.validate : <code>object</code>
Methods to print logs

**Kind**: static namespace of <code>[utils](#utils)</code>  

* [.validate](#utils.validate) : <code>object</code>
    * [.isStringNullEmpty(text)](#utils.validate.isStringNullEmpty) ⇒ <code>bool</code>
    * [.email(email)](#utils.validate.email) ⇒ <code>bool</code>
    * [.phone(phone)](#utils.validate.phone) ⇒ <code>bool</code>

<a name="utils.validate.isStringNullEmpty"></a>

#### validate.isStringNullEmpty(text) ⇒ <code>bool</code>
isStringNullEmpty - check if the text is a widget is null or empty

**Kind**: static method of <code>[validate](#utils.validate)</code>  
**Returns**: <code>bool</code> - true if the text is null or empty  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | field to check |

<a name="utils.validate.email"></a>

#### validate.email(email) ⇒ <code>bool</code>
email - check if the text is an email is valid

**Kind**: static method of <code>[validate](#utils.validate)</code>  
**Returns**: <code>bool</code> - true if the text is a valid email  

| Param | Type | Description |
| --- | --- | --- |
| email | <code>String</code> | text to check |

<a name="utils.validate.phone"></a>

#### validate.phone(phone) ⇒ <code>bool</code>
phone - check if the text is a valid phone number

**Kind**: static method of <code>[validate](#utils.validate)</code>  
**Returns**: <code>bool</code> - true if the text is a valid phone number  

| Param | Type | Description |
| --- | --- | --- |
| phone | <code>String</code> | text to check |

<a name="utils.object"></a>

### utils.object : <code>object</code>
Methods to print logs

**Kind**: static namespace of <code>[utils](#utils)</code>  

* [.object](#utils.object) : <code>object</code>
    * [.setValues(obj, dict)](#utils.object.setValues)
    * [.isEmpty(obj)](#utils.object.isEmpty) ⇒ <code>bool</code>
    * [.sortJsonArrayByProperty(objArray, prop, direction)](#utils.object.sortJsonArrayByProperty) ⇒ <code>Array</code>

<a name="utils.object.setValues"></a>

#### object.setValues(obj, dict)
setValues - take an object with default values and a dictionary with the same keys as the object. 
fill the object with dictionary values or keep default value if the dictionary doesn't provide a value

**Kind**: static method of <code>[object](#utils.object)</code>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | default values |
| dict | <code>Object</code> | object to set |

<a name="utils.object.isEmpty"></a>

#### object.isEmpty(obj) ⇒ <code>bool</code>
Checks for empty json objects

**Kind**: static method of <code>[object](#utils.object)</code>  
**Returns**: <code>bool</code> - true if the object is empty  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | object to check |

<a name="utils.object.sortJsonArrayByProperty"></a>

#### object.sortJsonArrayByProperty(objArray, prop, direction) ⇒ <code>Array</code>
sortJsonArrayByProperty - take a list of object and sort them by one of their property

**Kind**: static method of <code>[object](#utils.object)</code>  
**Returns**: <code>Array</code> - sorted array  

| Param | Type | Description |
| --- | --- | --- |
| objArray | <code>Array</code> | array of object |
| prop | <code>String</code> | property of the objects to use for sorting the array |
| direction | <code>Number</code> | 0 for descending, 1 for ascending. |

<a name="utils.other"></a>

### utils.other : <code>object</code>
Methods to print logs

**Kind**: static namespace of <code>[utils](#utils)</code>  

* [.other](#utils.other) : <code>object</code>
    * [.generateId(text)](#utils.other.generateId) ⇒ <code>String</code>
    * [.generateDataForCollectionView(segmentData)](#utils.other.generateDataForCollectionView) ⇒ <code>Array</code>

<a name="utils.other.generateId"></a>

#### other.generateId(text) ⇒ <code>String</code>
generateId - append a random number to a text to generate a random id

**Kind**: static method of <code>[other](#utils.other)</code>  
**Returns**: <code>String</code> - random id  

| Param | Type |
| --- | --- |
| text | <code>String</code> | 

<a name="utils.other.generateDataForCollectionView"></a>

#### other.generateDataForCollectionView(segmentData) ⇒ <code>Array</code>
generateDataForCollectionView - take an array of data for a segment
transform the datas to put 2 element of the array into 1 row
array of data and the segment template must have matching key.
example : if you want your segment to have 2 label : call them in your segment template lblCat0 and lblCat1
the array of data needs to have a key call lblCat.

**Kind**: static method of <code>[other](#utils.other)</code>  
**Returns**: <code>Array</code> - list of object formatted for 2 cell per line segment ([obj1+2,obj3])  

| Param | Type | Description |
| --- | --- | --- |
| segmentData | <code>Array</code> | list of object formatted for a segment ([obj1,obj2,obj3]) |

