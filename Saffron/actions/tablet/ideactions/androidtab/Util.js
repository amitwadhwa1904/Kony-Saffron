/**
 * Utility methods
 * @namespace
 */
var utils = {};
/**
 * Methods related to the application
 * @namespace
 */
utils.date = {
    /**
     * getTimeZoneOffset - Returns the time zone offset in Hours
     * @return {String}  the time zone offset in Hours (e.g.: +11:00 for Melbourne, Sydney)
     */
    getTimeZoneOffset: function() {
        var date = new Date();
        var sign = (date.getTimezoneOffset() > 0) ? "-" : "+";
        var offset = Math.abs(date.getTimezoneOffset());
        var hours = leftPad(Math.floor(offset / 60));
        var minutes = leftPad(offset % 60);
        return sign + hours + ":" + minutes;
    },
    /**
     * isValidDate - validate a string is a valid date
     * @param  {String} dateString string of a date
     * @return {bool}            true if it is a valid date
     */
    isValidDate: function(dateString) {
        // First check for the pattern
        if (!/^(\d{2}|\d{1})\/(\d{2}|\d{1})\/\d{4}$/.test(dateString)) return false;
        // Parse the date parts to integers
        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);
        // Check the ranges of month and year
        if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Adjust for leap years
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;
        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    },
    /**
     * validateFutureDate - check if the date is a date in the future
     * @param  {String} date a date
     * @return {bool}      true if it is a future date
     */
    validateFutureDate: function(date) {
        var chkdate = date;
        var edate = chkdate.split("/");
        var spdate = new Date();
        var sdd = spdate.getDate();
        var smm = spdate.getMonth();
        var syyyy = spdate.getFullYear();
        var today = new Date(syyyy, smm, sdd).getTime();
        var e_date = new Date(edate[2], edate[1] - 1, edate[0]).getTime();
        if (e_date > today) {
            return false;
        } else {
            return true;
        }
    }
}
/**
 * Methods related to the application
 * @namespace
 */
utils.string = {
    /**
     * isAlphanumeric - check if a string is alphanumeric
     * @param  {String} data text to test
     * @param  {number} max  max length (optional)
     * @return {bool}      return true if the text is alphanumeric
     */
    isAlphanumeric: function(data, max) {
        appscore.print.start();
        var reg;
        if (max == null) {
            reg = new RegExp("^[a-zA-Z0-9]*$")
        } else {
            reg = new RegExp("^[a-zA-Z0-9]{0," + max + "}$")
        }
        return reg.test(data);
    },
    /**
     * capitalizeFirstLetter - capitalize the first letter of a text
     * @param  {String} myString text to capitalize
     * @return {String}          formatted text
     */
    capitalizeFirstLetter: function(myString) {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    }
}
/**
 * Methods to print logs
 * @namespace
 */
utils.validate = {
    /**
     * validateEmail - check if the text is an email is valid
     * @param  {String} email text to check
     * @return {bool}       true if the text is a valid email
     */
    email: function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    /**
     * validatePhoneNumber - check if the text is a valid phone number
     * @param  {String} phone text to check
     * @return {bool}       true if the text is a valid phone number
     */
    phone: function(phone) {
        return /^04\d{8}/.test(phone) && phone.length == 10;
    }
}
/**
 * Methods to print logs
 * @namespace
 */
utils.object = {
    /**
     * setValues - take an object with default values and a dictionary with the same keys as the object. 
     * fill the object with dictionary values or keep default value if the dictionary doesn't provide a value
     *
     * @param  {Object} obj  default values
     * @param  {Object} dict object to set
     */
    setValues: function(obj, dict) {
        if (dict != null) {
            for (var key in obj) {
                obj[key] = dict[key] == null ? obj[key] : dict[key];
            }
        }
    },
    /**
     * Checks for empty json objects
     *
     * @param {Object} obj object to check
     * @returns {bool} true if the object is empty
     */
    isEmpty: function(obj) {
        try {
            return Object.keys(obj).length === 0;
        } catch (e) {
            return true;
        }
    },
    /**
     * sortJsonArrayByProperty - take a list of object and sort them by one of their property
     *
     * @param  {Array} objArray  array of object
     * @param  {String} prop      property of the objects to use for sorting the array
     * @param  {Number} direction 0 for descending, 1 for ascending.
     * @return {Array}           sorted array
     */
    sortJsonArrayByProperty: function(objArray, prop, direction) {
        if (arguments.length < 2) throw new Error("sortJsonArrayByProp requires 2 arguments");
        var direct = arguments.length > 2 ? arguments[2] : 1; //Default to ascending
        if (objArray && objArray.constructor === Array) {
            var propPath = (prop.constructor === Array) ? prop : prop.split(".");
            objArray.sort(function(a, b) {
                for (var p in propPath) {
                    if (a[propPath[p]] && b[propPath[p]]) {
                        a = a[propPath[p]];
                        b = b[propPath[p]];
                    }
                }
                // convert numeric strings to integers
                a = a.match(/^\d+$/) ? +a : a;
                b = b.match(/^\d+$/) ? +b : b;
                return ((a < b) ? -1 * direct : ((a > b) ? 1 * direct : 0));
            });
        }
    }
}
/**
 * Methods to print logs
 * @namespace
 */
utils.other = {
    /**
     * generateId - append a random number to a text to generate a random id
     * 
     * @param  {String} text
     * @return {String}      random id
     */
    generateId: function(text) {
        if (text == undefined || text == null || text == "") text = "widget";
        return text + Math.floor((Math.random() * 10000) + 1);
    },
    /**
     * generateDataForCollectionView - take an array of data for a segment
     * transform the datas to put 2 element of the array into 1 row
     * array of data and the segment template must have matching key.
     * example : if you want your segment to have 2 label : call them in your segment template lblCat0 and lblCat1
     * the array of data needs to have a key call lblCat.
     *
     * @param  {Array} segmentData list of object formatted for a segment ([obj1,obj2,obj3])
     * @return {Array}             list of object formatted for 2 cell per line segment ([obj1+2,obj3])
     */
    generateDataForCollectionView: function(segmentData) {
        var segmentRows = [];
        var segmentRow = {};
        for (var i = 0; i < segmentData.length; i++) {
            var cellData = segmentData[i]
            var pos = i % 2; // pos will be 0 or 1
            for (var key in cellData) {
                segmentRow[key + pos] = cellData[key]
            }
            if (pos == 1) {
                segmentRows.push(segmentRow);
                segmentRow = {};
            }
        }
        if (Object.keys(segmentRow).length > 0) {
            for (var key in cellData) {
                segmentRow[key + 1] = {
                    isVisible: false
                }
            }
            segmentRows.push(segmentRow);
        }
        return segmentRows;
    }
}