!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return $;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(y,(function(t,e){return e||l[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
/* axios v0.21.1 | (c) 2020 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(4);
	var mergeConfig = __webpack_require__(22);
	var defaults = __webpack_require__(10);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(mergeConfig(axios.defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(9);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	// Expose isAxiosError
	axios.isAxiosError = __webpack_require__(26);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a plain Object
	 *
	 * @param {Object} val The value to test
	 * @return {boolean} True if value is a plain Object, otherwise false
	 */
	function isPlainObject(val) {
	  if (toString.call(val) !== '[object Object]') {
	    return false;
	  }
	
	  var prototype = Object.getPrototypeOf(val);
	  return prototype === null || prototype === Object.prototype;
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (isPlainObject(result[key]) && isPlainObject(val)) {
	      result[key] = merge(result[key], val);
	    } else if (isPlainObject(val)) {
	      result[key] = merge({}, val);
	    } else if (isArray(val)) {
	      result[key] = val.slice();
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	/**
	 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	 *
	 * @param {string} content with BOM
	 * @return {string} content value without BOM
	 */
	function stripBOM(content) {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var buildURL = __webpack_require__(5);
	var InterceptorManager = __webpack_require__(6);
	var dispatchRequest = __webpack_require__(7);
	var mergeConfig = __webpack_require__(22);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
	  }
	
	  config = mergeConfig(this.defaults, config);
	
	  // Set config.method
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	Axios.prototype.getUri = function getUri(config) {
	  config = mergeConfig(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(mergeConfig(config || {}, {
	      method: method,
	      url: url,
	      data: (config || {}).data
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(mergeConfig(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }
	
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(8);
	var isCancel = __webpack_require__(9);
	var defaults = __webpack_require__(10);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(11);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(12);
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(12);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	  maxBodyLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(13);
	var cookies = __webpack_require__(16);
	var buildURL = __webpack_require__(5);
	var buildFullPath = __webpack_require__(17);
	var parseHeaders = __webpack_require__(20);
	var isURLSameOrigin = __webpack_require__(21);
	var createError = __webpack_require__(14);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    var fullPath = buildFullPath(config.baseURL, config.url);
	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }
	
	      reject(createError('Request aborted', config, 'ECONNABORTED', request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (!utils.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (!requestData) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(14);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(15);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	
	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;
	
	  error.toJSON = function toJSON() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code
	    };
	  };
	  return error;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));
	
	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }
	
	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }
	
	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }
	
	          if (secure === true) {
	            cookie.push('secure');
	          }
	
	          document.cookie = cookie.join('; ');
	        },
	
	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },
	
	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isAbsoluteURL = __webpack_require__(18);
	var combineURLs = __webpack_require__(19);
	
	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 * @returns {string} The combined full path
	 */
	module.exports = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;
	
	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;
	
	        if (msie) {
	        // IE needs attribute set twice to normalize properties
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }
	
	        urlParsingNode.setAttribute('href', href);
	
	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	        return {
	          href: urlParsingNode.href,
	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	          host: urlParsingNode.host,
	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	          hostname: urlParsingNode.hostname,
	          port: urlParsingNode.port,
	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	            urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname
	        };
	      }
	
	      originURL = resolveURL(window.location.href);
	
	      /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	module.exports = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};
	
	  var valueFromConfig2Keys = ['url', 'method', 'data'];
	  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
	  var defaultToConfig2Keys = [
	    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
	    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
	    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
	    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
	  ];
	  var directMergeKeys = ['validateStatus'];
	
	  function getMergedValue(target, source) {
	    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
	      return utils.merge(target, source);
	    } else if (utils.isPlainObject(source)) {
	      return utils.merge({}, source);
	    } else if (utils.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }
	
	  function mergeDeepProperties(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(config1[prop], config2[prop]);
	    } else if (!utils.isUndefined(config1[prop])) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  }
	
	  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(undefined, config2[prop]);
	    }
	  });
	
	  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
	
	  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
	    if (!utils.isUndefined(config2[prop])) {
	      config[prop] = getMergedValue(undefined, config2[prop]);
	    } else if (!utils.isUndefined(config1[prop])) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  });
	
	  utils.forEach(directMergeKeys, function merge(prop) {
	    if (prop in config2) {
	      config[prop] = getMergedValue(config1[prop], config2[prop]);
	    } else if (prop in config1) {
	      config[prop] = getMergedValue(undefined, config1[prop]);
	    }
	  });
	
	  var axiosKeys = valueFromConfig2Keys
	    .concat(mergeDeepPropertiesKeys)
	    .concat(defaultToConfig2Keys)
	    .concat(directMergeKeys);
	
	  var otherKeys = Object
	    .keys(config1)
	    .concat(Object.keys(config2))
	    .filter(function filterAxiosKeys(key) {
	      return axiosKeys.indexOf(key) === -1;
	    });
	
	  utils.forEach(otherKeys, mergeDeepProperties);
	
	  return config;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	module.exports = function isAxiosError(payload) {
	  return (typeof payload === 'object') && (payload.isAxiosError === true);
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=axios.map
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return $;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(y,(function(t,e){return e||l[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Technically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals. ' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a special value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        if (isDef(data) && isDef(data.nativeOn)) {
          warn(
            ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
            context
          );
        }
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack because all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.11';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes([oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being passed as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:|^#/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (name === 'v-slot' || name[0] === '#') {
              checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stripped = exp.replace(stripStringRE, '');
    var keywordMatch = stripped.match(unaryOperatorsRE);
    if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  function checkFunctionParameterExpression (exp, text, warn, range) {
    try {
      new Function(exp, '');
    } catch (e) {
      warn(
        "invalid function parameter expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

(function (e, t) { "object" === typeof exports && "object" === typeof module ? module.exports = t(require("vue")) : "function" === typeof define && define.amd ? define([], t) : "object" === typeof exports ? exports["v-calendar"] = t(require("vue")) : e["v-calendar"] = t(e["Vue"]) })("undefined" !== typeof self ? self : this, (function (e) { return function (e) { var t = {}; function n(r) { if (t[r]) return t[r].exports; var a = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports } return n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" === typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var a in e) n.d(r, a, function (t) { return e[t] }.bind(null, a)); return r }, n.n = function (e) { var t = e && e.__esModule ? function () { return e["default"] } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = "fb15") }({ "00fd": function (e, t, n) { var r = n("9e69"), a = Object.prototype, o = a.hasOwnProperty, i = a.toString, s = r ? r.toStringTag : void 0; function c(e) { var t = o.call(e, s), n = e[s]; try { e[s] = void 0; var r = !0 } catch (c) { } var a = i.call(e); return r && (t ? e[s] = n : delete e[s]), a } e.exports = c }, "03dd": function (e, t, n) { var r = n("eac5"), a = n("57a5"), o = Object.prototype, i = o.hasOwnProperty; function s(e) { if (!r(e)) return a(e); var t = []; for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n); return t } e.exports = s }, "0621": function (e, t, n) { var r = n("9e69"), a = n("d370"), o = n("6747"), i = r ? r.isConcatSpreadable : void 0; function s(e) { return o(e) || a(e) || !!(i && e && e[i]) } e.exports = s }, "06cf": function (e, t, n) { var r = n("83ab"), a = n("d1e7"), o = n("5c6c"), i = n("fc6a"), s = n("c04e"), c = n("5135"), u = n("0cfb"), l = Object.getOwnPropertyDescriptor; t.f = r ? l : function (e, t) { if (e = i(e), t = s(t, !0), u) try { return l(e, t) } catch (n) { } if (c(e, t)) return o(!a.f.call(e, t), e[t]) } }, "0733": function (e, t, n) { "use strict"; n.d(t, "b", (function () { return o })), n.d(t, "a", (function () { return i })); var r = n("2fa3"), a = n("9404"); const o = function (e, t) { if (!e || !e.addEventListener || !Object(a["k"])(t)) return null; let n = !1, o = !1; const i = function () { return n = !0 }, s = function () { return n = !1 }, c = function (e) { if (n) return n = !1, o = !0, void t(e); "click" !== e.type || o || t(e), o = !1 }; return Object(r["k"])(e, "touchstart", i, { passive: !0 }), Object(r["k"])(e, "touchmove", s, { passive: !0 }), Object(r["k"])(e, "click", c, { passive: !0 }), Object(r["k"])(e, "touchend", c, { passive: !0 }), function () { Object(r["j"])(e, "touchstart", i), Object(r["j"])(e, "touchmove", s), Object(r["j"])(e, "click", c), Object(r["j"])(e, "touchend", c) } }, i = function (e, t, { maxSwipeTime: n, minHorizontalSwipeDistance: o, maxVerticalSwipeDistance: i }) { if (!e || !e.addEventListener || !Object(a["k"])(t)) return null; let s = 0, c = 0, u = null, l = !1; function d(e) { const t = e.changedTouches[0]; s = t.screenX, c = t.screenY, u = (new Date).getTime(), l = !0 } function f(e) { if (!l) return; l = !1; const r = e.changedTouches[0], a = r.screenX - s, d = r.screenY - c, f = (new Date).getTime() - u; if (f < n && Math.abs(a) >= o && Math.abs(d) <= i) { const e = { toLeft: !1, toRight: !1 }; a < 0 ? e.toLeft = !0 : e.toRight = !0, t(e) } } return Object(r["k"])(e, "touchstart", d, { passive: !0 }), Object(r["k"])(e, "touchend", f, { passive: !0 }), function () { Object(r["j"])(e, "touchstart", d), Object(r["j"])(e, "touchend", f) } } }, "07c7": function (e, t) { function n() { return !1 } e.exports = n }, "087d": function (e, t) { function n(e, t) { var n = -1, r = t.length, a = e.length; while (++n < r) e[a + n] = t[n]; return e } e.exports = n }, "08cc": function (e, t, n) { var r = n("1a8c"); function a(e) { return e === e && !r(e) } e.exports = a }, "08de": function (e, t, n) { var r = n("d2e1"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("1921c65a", r, !0, { sourceMap: !1, shadowMode: !1 }) }, "0b07": function (e, t, n) { var r = n("34ac"), a = n("3698"); function o(e, t) { var n = a(e, t); return r(n) ? n : void 0 } e.exports = o }, "0cfb": function (e, t, n) { var r = n("83ab"), a = n("d039"), o = n("cc12"); e.exports = !r && !a((function () { return 7 != Object.defineProperty(o("div"), "a", { get: function () { return 7 } }).a })) }, "0d24": function (e, t, n) { (function (e) { var r = n("2b3e"), a = n("07c7"), o = t && !t.nodeType && t, i = o && "object" == typeof e && e && !e.nodeType && e, s = i && i.exports === o, c = s ? r.Buffer : void 0, u = c ? c.isBuffer : void 0, l = u || a; e.exports = l }).call(this, n("62e4")(e)) }, "0da5": function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-nav-header{display:flex;justify-content:space-between}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--leading-snug);border-width:2px;border-style:solid;border-color:transparent;border-radius:var(--rounded)}.vc-nav-arrow.is-left{margin-right:auto}.vc-nav-arrow.is-right{margin-left:auto}.vc-nav-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-nav-arrow:hover{background-color:var(--gray-900)}.vc-nav-arrow:focus{border-color:var(--accent-600)}.vc-nav-title{color:var(--accent-100);font-weight:var(--font-bold);line-height:var(--leading-snug);padding:4px 8px;border-radius:var(--rounded);border-width:2px;border-style:solid;border-color:transparent;-webkit-user-select:none;user-select:none}.vc-nav-title:hover{background-color:var(--gray-900)}.vc-nav-title:focus{border-color:var(--accent-600)}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px}.vc-nav-item{width:48px;text-align:center;line-height:var(--leading-snug);font-weight:var(--font-semibold);padding:4px 0;cursor:pointer;border-color:transparent;border-width:2px;border-style:solid;border-radius:var(--rounded);-webkit-user-select:none;user-select:none}.vc-nav-item:hover{color:var(--white);background-color:var(--gray-900);box-shadow:var(--shadow-inner)}.vc-nav-item.is-active{color:var(--accent-900);background:var(--accent-100);font-weight:var(--font-bold);box-shadow:var(--shadow)}.vc-nav-item.is-current{color:var(--accent-100);font-weight:var(--bold);border-color:var(--accent-100)}.vc-nav-item:focus{border-color:var(--accent-600)}.vc-nav-item.is-disabled{opacity:.25;pointer-events:none}.vc-is-dark .vc-nav-title{color:var(--gray-900)}.vc-is-dark .vc-nav-title:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-title:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-arrow:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-arrow:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-item:hover{color:var(--gray-900);background-color:var(--gray-200);box-shadow:none}.vc-is-dark .vc-nav-item.is-active{color:var(--white);background:var(--accent-500)}.vc-is-dark .vc-nav-item.is-current{color:var(--accent-600);border-color:var(--accent-500)}.vc-is-dark .vc-nav-item:focus{border-color:var(--accent-400)}", ""]), e.exports = t }, "0f0f": function (e, t, n) { var r = n("8eeb"), a = n("9934"); function o(e, t) { return e && r(t, a(t), e) } e.exports = o }, "0f5c": function (e, t, n) { var r = n("159a"); function a(e, t, n) { return null == e ? e : r(e, t, n) } e.exports = a }, "100e": function (e, t, n) { var r = n("cd9d"), a = n("2286"), o = n("c1c9"); function i(e, t) { return o(a(e, t, r), e + "") } e.exports = i }, 1041: function (e, t, n) { var r = n("8eeb"), a = n("a029"); function o(e, t) { return r(e, a(e), t) } e.exports = o }, 1290: function (e, t) { function n(e) { var t = typeof e; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e } e.exports = n }, 1310: function (e, t) { function n(e) { return null != e && "object" == typeof e } e.exports = n }, 1315: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return d })); var r = n("8bbf"), a = n.n(r), o = n("9404"); function i(e) { return Object(o["n"])(e) && (e = { min: e }), Object(o["h"])(e) || (e = [e]), e.map((function (e) { return Object(o["e"])(e, "raw") ? e.raw : Object(o["q"])(e, (function (e, t) { return t = Object(o["d"])({ min: "min-width", max: "max-width" }, t, t), `(${t}: ${e})` })).join(" and ") })).join(", ") } var s = n("85a9"); let c = !1, u = !1, l = null; function d(e = s, t) { l && !t || c || (c = !0, u = !0, l = new a.a({ data() { return { matches: [], queries: [] } }, methods: { refreshQueries() { var t = this; window && window.matchMedia && (this.queries = Object(o["r"])(e, (function (e) { const n = window.matchMedia(i(e)); return Object(o["k"])(n.addEventListener) ? n.addEventListener("change", t.refreshMatches) : n.addListener(t.refreshMatches), n })), this.refreshMatches()) }, refreshMatches() { this.matches = Object(o["w"])(this.queries).filter((function (e) { return e[1].matches })).map((function (e) { return e[0] })) } } }), c = !1) } a.a.mixin({ beforeCreate() { c || d() }, mounted() { u && l && (l.refreshQueries(), u = !1) }, computed: { $screens() { return function (e, t) { return l.matches.reduce((function (t, n) { return Object(o["e"])(e, n) ? e[n] : t }), Object(o["o"])(t) ? e.default : t) } } } }) }, 1368: function (e, t, n) { var r = n("da03"), a = function () { var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || ""); return e ? "Symbol(src)_1." + e : "" }(); function o(e) { return !!a && a in e } e.exports = o }, 1497: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-svg-icon[data-v-19b6cf78]{display:inline-block;stroke:currentColor;stroke-width:0}.vc-svg-icon path[data-v-19b6cf78]{fill:currentColor}", ""]), e.exports = t }, "14c3": function (e, t, n) { var r = n("c6b6"), a = n("9263"); e.exports = function (e, t) { var n = e.exec; if ("function" === typeof n) { var o = n.call(e, t); if ("object" !== typeof o) throw TypeError("RegExp exec method returned something other than an Object or null"); return o } if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver"); return a.call(e, t) } }, "159a": function (e, t, n) { var r = n("32b3"), a = n("e2e4"), o = n("c098"), i = n("1a8c"), s = n("f4d6"); function c(e, t, n, c) { if (!i(e)) return e; t = a(t, e); var u = -1, l = t.length, d = l - 1, f = e; while (null != f && ++u < l) { var p = s(t[u]), h = n; if ("__proto__" === p || "constructor" === p || "prototype" === p) return e; if (u != d) { var v = f[p]; h = c ? c(v, p, f) : void 0, void 0 === h && (h = i(v) ? v : o(t[u + 1]) ? [] : {}) } r(f, p, h), f = f[p] } return e } e.exports = c }, "15f3": function (e, t, n) { var r = n("89d9"), a = n("8604"); function o(e, t) { return r(e, t, (function (t, n) { return a(e, n) })) } e.exports = o }, "16c7": function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-select[data-v-d1c68c60]{position:relative}.vc-select select[data-v-d1c68c60]{flex-grow:1;display:block;-webkit-appearance:none;appearance:none;width:52px;height:30px;font-size:var(--text-base);font-weight:var(--font-medium);text-align:left;background-color:var(--gray-200);border:2px solid;border-color:var(--gray-200);color:var(--gray-900);padding:0 20px 0 8px;border-radius:var(--rounded);line-height:var(--leading-tight);text-indent:0;cursor:pointer;-moz-padding-start:3px}.vc-select select[data-v-d1c68c60]:hover{color:var(--gray-600)}.vc-select select[data-v-d1c68c60]:focus{outline:0;border-color:var(--accent-400);background-color:var(--white)}.vc-select-arrow[data-v-d1c68c60]{display:flex;align-items:center;pointer-events:none;position:absolute;top:0;bottom:0;right:0;padding:0 4px 0 0;color:var(--gray-500)}.vc-select-arrow svg[data-v-d1c68c60]{width:16px;height:16px;fill:currentColor}.vc-is-dark select[data-v-d1c68c60]{background:var(--gray-700);color:var(--gray-100);border-color:var(--gray-700)}.vc-is-dark select[data-v-d1c68c60]:hover{color:var(--gray-400)}.vc-is-dark select[data-v-d1c68c60]:focus{border-color:var(--accent-500);background-color:var(--gray-800)}", ""]), e.exports = t }, 1838: function (e, t, n) { var r = n("c05f"), a = n("9b02"), o = n("8604"), i = n("f608"), s = n("08cc"), c = n("20ec"), u = n("f4d6"), l = 1, d = 2; function f(e, t) { return i(e) && s(t) ? c(u(e), t) : function (n) { var i = a(n, e); return void 0 === i && i === t ? o(n, e) : r(t, i, l | d) } } e.exports = f }, "18d8": function (e, t, n) { var r = n("234d"), a = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, o = /\\(\\)?/g, i = r((function (e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(a, (function (e, n, r, a) { t.push(r ? a.replace(o, "$1") : n || e) })), t })); e.exports = i }, "1a2d": function (e, t, n) { var r = n("42a2"), a = n("1310"), o = "[object Map]"; function i(e) { return a(e) && r(e) == o } e.exports = i }, "1a8c": function (e, t) { function n(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) } e.exports = n }, "1bac": function (e, t, n) { var r = n("7d1f"), a = n("a029"), o = n("9934"); function i(e) { return r(e, o, a) } e.exports = i }, "1be4": function (e, t, n) { var r = n("d066"); e.exports = r("document", "documentElement") }, "1c3c": function (e, t, n) { var r = n("9e69"), a = n("2474"), o = n("9638"), i = n("a2be"), s = n("edfa"), c = n("ac41"), u = 1, l = 2, d = "[object Boolean]", f = "[object Date]", p = "[object Error]", h = "[object Map]", v = "[object Number]", b = "[object RegExp]", m = "[object Set]", g = "[object String]", y = "[object Symbol]", w = "[object ArrayBuffer]", x = "[object DataView]", D = r ? r.prototype : void 0, j = D ? D.valueOf : void 0; function O(e, t, n, r, D, O, k) { switch (n) { case x: if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1; e = e.buffer, t = t.buffer; case w: return !(e.byteLength != t.byteLength || !O(new a(e), new a(t))); case d: case f: case v: return o(+e, +t); case p: return e.name == t.name && e.message == t.message; case b: case g: return e == t + ""; case h: var M = s; case m: var P = r & u; if (M || (M = c), e.size != t.size && !P) return !1; var S = k.get(e); if (S) return S == t; r |= l, k.set(e, t); var Y = i(M(e), M(t), r, D, O, k); return k["delete"](e), Y; case y: if (j) return j.call(e) == j.call(t) }return !1 } e.exports = O }, "1cec": function (e, t, n) { var r = n("0b07"), a = n("2b3e"), o = r(a, "Promise"); e.exports = o }, "1d80": function (e, t) { e.exports = function (e) { if (void 0 == e) throw TypeError("Can't call method on " + e); return e } }, "1efc": function (e, t) { function n(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t } e.exports = n }, "1fc8": function (e, t, n) { var r = n("4245"); function a(e, t) { var n = r(this, e), a = n.size; return n.set(e, t), this.size += n.size == a ? 0 : 1, this } e.exports = a }, "20ec": function (e, t) { function n(e, t) { return function (n) { return null != n && (n[e] === t && (void 0 !== t || e in Object(n))) } } e.exports = n }, 2286: function (e, t, n) { var r = n("85e3"), a = Math.max; function o(e, t, n) { return t = a(void 0 === t ? e.length - 1 : t, 0), function () { var o = arguments, i = -1, s = a(o.length - t, 0), c = Array(s); while (++i < s) c[i] = o[t + i]; i = -1; var u = Array(t + 1); while (++i < t) u[i] = o[i]; return u[t] = n(c), r(e, this, u) } } e.exports = o }, "22f3": function (e, t, n) { "use strict"; n.d(t, "a", (function () { return i })); var r = n("cfe5"), a = n("2fa3"), o = n("9404"); class i { constructor({ key: e, hashcode: t, highlight: n, content: i, dot: s, bar: c, popover: u, dates: l, excludeDates: d, excludeMode: f, customData: p, order: h, pinPage: v }, b, m) { this.key = Object(o["o"])(e) ? Object(a["c"])() : e, this.hashcode = t, this.customData = p, this.order = h || 0, this.dateOpts = { order: h, locale: m }, this.pinPage = v, n && (this.highlight = b.normalizeHighlight(n)), i && (this.content = b.normalizeContent(i)), s && (this.dot = b.normalizeDot(s)), c && (this.bar = b.normalizeBar(c)), u && (this.popover = u), this.dates = m.normalizeDates(l, this.dateOpts), this.hasDates = !!Object(a["b"])(this.dates), this.excludeDates = m.normalizeDates(d, this.dateOpts), this.hasExcludeDates = !!Object(a["b"])(this.excludeDates), this.excludeMode = f || "intersects", this.hasExcludeDates && !this.hasDates && (this.dates.push(new r["a"]({}, this.dateOpts)), this.hasDates = !0), this.isComplex = Object(o["v"])(this.dates, (function (e) { return e.isComplex })) } intersectsDate(e) { return e = e instanceof r["a"] ? e : new r["a"](e, this.dateOpts), !this.excludesDate(e) && (this.dates.find((function (t) { return t.intersectsDate(e) })) || !1) } includesDate(e) { return e = e instanceof r["a"] ? e : new r["a"](e, this.dateOpts), !this.excludesDate(e) && (this.dates.find((function (t) { return t.includesDate(e) })) || !1) } excludesDate(e) { var t = this; return e = e instanceof r["a"] ? e : new r["a"](e, this.dateOpts), this.hasExcludeDates && this.excludeDates.find((function (n) { return "intersects" === t.excludeMode && n.intersectsDate(e) || "includes" === t.excludeMode && n.includesDate(e) })) } intersectsDay(e) { return !this.excludesDay(e) && (this.dates.find((function (t) { return t.intersectsDay(e) })) || !1) } excludesDay(e) { return this.hasExcludeDates && this.excludeDates.find((function (t) { return t.intersectsDay(e) })) } } }, "234d": function (e, t, n) { var r = n("e380"), a = 500; function o(e) { var t = r(e, (function (e) { return n.size === a && n.clear(), e })), n = t.cache; return t } e.exports = o }, "23a5": function (e) { e.exports = JSON.parse('{"maxSwipeTime":300,"minHorizontalSwipeDistance":60,"maxVerticalSwipeDistance":80}') }, "23cb": function (e, t, n) { var r = n("a691"), a = Math.max, o = Math.min; e.exports = function (e, t) { var n = r(e); return n < 0 ? a(n + t, 0) : o(n, t) } }, "23e7": function (e, t, n) { var r = n("da84"), a = n("06cf").f, o = n("9112"), i = n("6eeb"), s = n("ce4e"), c = n("e893"), u = n("94ca"); e.exports = function (e, t) { var n, l, d, f, p, h, v = e.target, b = e.global, m = e.stat; if (l = b ? r : m ? r[v] || s(v, {}) : (r[v] || {}).prototype, l) for (d in t) { if (p = t[d], e.noTargetGet ? (h = a(l, d), f = h && h.value) : f = l[d], n = u(b ? d : v + (m ? "." : "#") + d, e.forced), !n && void 0 !== f) { if (typeof p === typeof f) continue; c(p, f) } (e.sham || f && f.sham) && o(p, "sham", !0), i(l, d, p, e) } } }, 2411: function (e, t, n) { var r = n("f909"), a = n("2ec1"), o = a((function (e, t, n, a) { r(e, t, n, a) })); e.exports = o }, "241c": function (e, t, n) { var r = n("ca84"), a = n("7839"), o = a.concat("length", "prototype"); t.f = Object.getOwnPropertyNames || function (e) { return r(e, o) } }, "242e": function (e, t, n) { var r = n("72af"), a = n("ec69"); function o(e, t) { return e && r(e, t, a) } e.exports = o }, 2474: function (e, t, n) { var r = n("2b3e"), a = r.Uint8Array; e.exports = a }, 2478: function (e, t, n) { var r = n("4245"); function a(e) { return r(this, e).get(e) } e.exports = a }, "24fb": function (e, t, n) { "use strict"; function r(e, t) { var n = e[1] || "", r = e[3]; if (!r) return n; if (t && "function" === typeof btoa) { var o = a(r), i = r.sources.map((function (e) { return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */") })); return [n].concat(i).concat([o]).join("\n") } return [n].join("\n") } function a(e) { var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))), n = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t); return "/*# ".concat(n, " */") } e.exports = function (e) { var t = []; return t.toString = function () { return this.map((function (t) { var n = r(t, e); return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n })).join("") }, t.i = function (e, n, r) { "string" === typeof e && (e = [[null, e, ""]]); var a = {}; if (r) for (var o = 0; o < this.length; o++) { var i = this[o][0]; null != i && (a[i] = !0) } for (var s = 0; s < e.length; s++) { var c = [].concat(e[s]); r && a[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c)) } }, t } }, 2524: function (e, t, n) { var r = n("6044"), a = "__lodash_hash_undefined__"; function o(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? a : t, this } e.exports = o }, "253c": function (e, t, n) { var r = n("3729"), a = n("1310"), o = "[object Arguments]"; function i(e) { return a(e) && r(e) == o } e.exports = i }, "255e": function (e, t, n) { var r = n("5905"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("4d4bd8d9", r, !0, { sourceMap: !1, shadowMode: !1 }) }, 2593: function (e, t, n) { var r = n("15f3"), a = n("c6cf"), o = a((function (e, t) { return null == e ? {} : r(e, t) })); e.exports = o }, "26e8": function (e, t) { function n(e, t) { return null != e && t in Object(e) } e.exports = n }, "28c9": function (e, t) { function n() { this.__data__ = [], this.size = 0 } e.exports = n }, "29ae": function (e, t, n) { "use strict"; n.d(t, "a", (function () { return re })), n.d(t, "b", (function () { return ye })); n("5319"); var r = n("fe1f"), a = 6e4; function o(e) { return e.getTime() % a } function i(e) { var t = new Date(e.getTime()), n = Math.ceil(t.getTimezoneOffset()); t.setSeconds(0, 0); var r = n > 0, i = r ? (a + o(t)) % a : o(t); return n * a + i } function s(e, t) { var n = f(t); return n.formatToParts ? u(n, e) : l(n, e) } var c = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }; function u(e, t) { for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) { var o = c[n[a].type]; o >= 0 && (r[o] = parseInt(n[a].value, 10)) } return r } function l(e, t) { var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n); return [r[3], r[1], r[2], r[4], r[5], r[6]] } var d = {}; function f(e) { if (!d[e]) { var t = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date("2014-06-25T04:00:00.123Z")), n = "06/25/2014, 00:00:00" === t || "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00" === t; d[e] = n ? new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }) : new Intl.DateTimeFormat("en-US", { hourCycle: "h23", timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }) } return d[e] } var p = 36e5, h = 6e4, v = { timezone: /([Z+-].*)$/, timezoneZ: /^(Z)$/, timezoneHH: /^([+-])(\d{2})$/, timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/, timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/ }; function b(e, t) { var n, r, a; if (n = v.timezoneZ.exec(e), n) return 0; if (n = v.timezoneHH.exec(e), n) return a = parseInt(n[2], 10), m(a) ? (r = a * p, "+" === n[1] ? -r : r) : NaN; if (n = v.timezoneHHMM.exec(e), n) { a = parseInt(n[2], 10); var o = parseInt(n[3], 10); return m(a, o) ? (r = a * p + o * h, "+" === n[1] ? -r : r) : NaN } if (n = v.timezoneIANA.exec(e), n) { var i = s(t, e), c = Date.UTC(i[0], i[1] - 1, i[2], i[3], i[4], i[5]), u = t.getTime() - t.getTime() % 1e3; return -(c - u) } return 0 } function m(e, t) { return null == t || !(t < 0 || t > 59) } var g = 36e5, y = 6e4, w = 2, x = { dateTimeDelimeter: /[T ]/, plainTime: /:/, timeZoneDelimeter: /[Z ]/i, YY: /^(\d{2})$/, YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/], YYYY: /^(\d{4})/, YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/], MM: /^-(\d{2})$/, DDD: /^-?(\d{3})$/, MMDD: /^-?(\d{2})-?(\d{2})$/, Www: /^-?W(\d{2})$/, WwwD: /^-?W(\d{2})-?(\d{1})$/, HH: /^(\d{2}([.,]\d*)?)$/, HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/, HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/, timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/ }; function D(e, t) { if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present"); if (null === e) return new Date(NaN); var n = t || {}, a = null == n.additionalDigits ? w : Object(r["a"])(n.additionalDigits); if (2 !== a && 1 !== a && 0 !== a) throw new RangeError("additionalDigits must be 0, 1 or 2"); if (e instanceof Date || "object" === typeof e && "[object Date]" === Object.prototype.toString.call(e)) return new Date(e.getTime()); if ("number" === typeof e || "[object Number]" === Object.prototype.toString.call(e)) return new Date(e); if ("string" !== typeof e && "[object String]" !== Object.prototype.toString.call(e)) return new Date(NaN); var o = j(e), s = O(o.date, a), c = s.year, u = s.restDateString, l = k(u, c); if (isNaN(l)) return new Date(NaN); if (l) { var d, f = l.getTime(), p = 0; if (o.time && (p = M(o.time), isNaN(p))) return new Date(NaN); if (o.timezone || n.timeZone) { if (d = b(o.timezone || n.timeZone, new Date(f + p)), isNaN(d)) return new Date(NaN); if (d = b(o.timezone || n.timeZone, new Date(f + p + d)), isNaN(d)) return new Date(NaN) } else d = i(new Date(f + p)), d = i(new Date(f + p + d)); return new Date(f + p + d) } return new Date(NaN) } function j(e) { var t, n = {}, r = e.split(x.dateTimeDelimeter); if (x.plainTime.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1], n.timezone = r[2], x.timeZoneDelimeter.test(n.date) && (n.date = e.split(x.timeZoneDelimeter)[0], t = e.substr(n.date.length, e.length))), t) { var a = x.timezone.exec(t); a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t } return n } function O(e, t) { var n, r = x.YYY[t], a = x.YYYYY[t]; if (n = x.YYYY.exec(e) || a.exec(e), n) { var o = n[1]; return { year: parseInt(o, 10), restDateString: e.slice(o.length) } } if (n = x.YY.exec(e) || r.exec(e), n) { var i = n[1]; return { year: 100 * parseInt(i, 10), restDateString: e.slice(i.length) } } return { year: null } } function k(e, t) { if (null === t) return null; var n, r, a, o; if (0 === e.length) return r = new Date(0), r.setUTCFullYear(t), r; if (n = x.MM.exec(e), n) return r = new Date(0), a = parseInt(n[1], 10) - 1, _(t, a) ? (r.setUTCFullYear(t, a), r) : new Date(NaN); if (n = x.DDD.exec(e), n) { r = new Date(0); var i = parseInt(n[1], 10); return T(t, i) ? (r.setUTCFullYear(t, 0, i), r) : new Date(NaN) } if (n = x.MMDD.exec(e), n) { r = new Date(0), a = parseInt(n[1], 10) - 1; var s = parseInt(n[2], 10); return _(t, a, s) ? (r.setUTCFullYear(t, a, s), r) : new Date(NaN) } if (n = x.Www.exec(e), n) return o = parseInt(n[1], 10) - 1, I(t, o) ? P(t, o) : new Date(NaN); if (n = x.WwwD.exec(e), n) { o = parseInt(n[1], 10) - 1; var c = parseInt(n[2], 10) - 1; return I(t, o, c) ? P(t, o, c) : new Date(NaN) } return null } function M(e) { var t, n, r; if (t = x.HH.exec(e), t) return n = parseFloat(t[1].replace(",", ".")), C(n) ? n % 24 * g : NaN; if (t = x.HHMM.exec(e), t) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), C(n, r) ? n % 24 * g + r * y : NaN; if (t = x.HHMMSS.exec(e), t) { n = parseInt(t[1], 10), r = parseInt(t[2], 10); var a = parseFloat(t[3].replace(",", ".")); return C(n, r, a) ? n % 24 * g + r * y + 1e3 * a : NaN } return null } function P(e, t, n) { t = t || 0, n = n || 0; var r = new Date(0); r.setUTCFullYear(e, 0, 4); var a = r.getUTCDay() || 7, o = 7 * t + n + 1 - a; return r.setUTCDate(r.getUTCDate() + o), r } var S = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Y = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; function E(e) { return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0 } function _(e, t, n) { if (t < 0 || t > 11) return !1; if (null != n) { if (n < 1) return !1; var r = E(e); if (r && n > Y[t]) return !1; if (!r && n > S[t]) return !1 } return !0 } function T(e, t) { if (t < 1) return !1; var n = E(e); return !(n && t > 366) && !(!n && t > 365) } function I(e, t, n) { return !(t < 0 || t > 52) && (null == n || !(n < 0 || n > 6)) } function C(e, t, n) { return (null == e || !(e < 0 || e >= 25)) && ((null == t || !(t < 0 || t >= 60)) && (null == n || !(n < 0 || n >= 60))) } var $ = n("fd3a"), A = n("8c86"); function N(e, t) { Object(A["a"])(1, arguments); var n = t || {}, a = n.locale, o = a && a.options && a.options.weekStartsOn, i = null == o ? 0 : Object(r["a"])(o), s = null == n.weekStartsOn ? i : Object(r["a"])(n.weekStartsOn); if (!(s >= 0 && s <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively"); var c = Object($["a"])(e), u = c.getDay(), l = (u < s ? 7 : 0) + u - s; return c.setDate(c.getDate() - l), c.setHours(0, 0, 0, 0), c } function F(e) { return Object(A["a"])(1, arguments), N(e, { weekStartsOn: 1 }) } function z(e) { Object(A["a"])(1, arguments); var t = Object($["a"])(e), n = t.getFullYear(), r = new Date(0); r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0); var a = F(r), o = new Date(0); o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0); var i = F(o); return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1 } function L(e) { Object(A["a"])(1, arguments); var t = z(e), n = new Date(0); n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0); var r = F(n); return r } var H = 6048e5; function R(e) { Object(A["a"])(1, arguments); var t = Object($["a"])(e), n = F(t).getTime() - L(t).getTime(); return Math.round(n / H) + 1 } function W(e, t) { Object(A["a"])(1, arguments); var n = Object($["a"])(e), a = n.getFullYear(), o = t || {}, i = o.locale, s = i && i.options && i.options.firstWeekContainsDate, c = null == s ? 1 : Object(r["a"])(s), u = null == o.firstWeekContainsDate ? c : Object(r["a"])(o.firstWeekContainsDate); if (!(u >= 1 && u <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively"); var l = new Date(0); l.setFullYear(a + 1, 0, u), l.setHours(0, 0, 0, 0); var d = N(l, t), f = new Date(0); f.setFullYear(a, 0, u), f.setHours(0, 0, 0, 0); var p = N(f, t); return n.getTime() >= d.getTime() ? a + 1 : n.getTime() >= p.getTime() ? a : a - 1 } function V(e, t) { Object(A["a"])(1, arguments); var n = t || {}, a = n.locale, o = a && a.options && a.options.firstWeekContainsDate, i = null == o ? 1 : Object(r["a"])(o), s = null == n.firstWeekContainsDate ? i : Object(r["a"])(n.firstWeekContainsDate), c = W(e, t), u = new Date(0); u.setFullYear(c, 0, s), u.setHours(0, 0, 0, 0); var l = N(u, t); return l } var U = 6048e5; function B(e, t) { Object(A["a"])(1, arguments); var n = Object($["a"])(e), r = N(n, t).getTime() - V(n, t).getTime(); return Math.round(r / U) + 1 } var Z = 6048e5; function q(e, t, n) { Object(A["a"])(2, arguments); var r = N(e, n), a = N(t, n), o = r.getTime() - i(r), s = a.getTime() - i(a); return Math.round((o - s) / Z) } function G(e) { Object(A["a"])(1, arguments); var t = Object($["a"])(e), n = t.getMonth(); return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t } function K(e) { Object(A["a"])(1, arguments); var t = Object($["a"])(e); return t.setDate(1), t.setHours(0, 0, 0, 0), t } function X(e, t) { return Object(A["a"])(1, arguments), q(G(e), K(e), t) + 1 } var J = n("f7f1"), Q = n("cfe5"), ee = n("f15d"), te = n("2fa3"), ne = n("9404"); const re = { DATE_TIME: 1, DATE: 2, TIME: 3 }, ae = { 1: ["year", "month", "day", "hours", "minutes", "seconds", "milliseconds"], 2: ["year", "month", "day"], 3: ["hours", "minutes", "seconds", "milliseconds"] }, oe = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, ie = /\d\d?/, se = /\d{3}/, ce = /\d{4}/, ue = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i, le = /\[([^]*?)\]/gm, de = function () { }, fe = function (e) { return function (t, n, r) { const a = r[e].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()); ~a && (t.month = a) } }, pe = ["L", "iso"], he = 7, ve = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], be = { D(e) { return e.day }, DD(e) { return Object(te["m"])(e.day) }, Do(e, t) { return t.DoFn(e.day) }, d(e) { return e.weekday - 1 }, dd(e) { return Object(te["m"])(e.weekday - 1) }, W(e, t) { return t.dayNamesNarrow[e.weekday - 1] }, WW(e, t) { return t.dayNamesShorter[e.weekday - 1] }, WWW(e, t) { return t.dayNamesShort[e.weekday - 1] }, WWWW(e, t) { return t.dayNames[e.weekday - 1] }, M(e) { return e.month }, MM(e) { return Object(te["m"])(e.month) }, MMM(e, t) { return t.monthNamesShort[e.month - 1] }, MMMM(e, t) { return t.monthNames[e.month - 1] }, YY(e) { return String(e.year).substr(2) }, YYYY(e) { return Object(te["m"])(e.year, 4) }, h(e) { return e.hours % 12 || 12 }, hh(e) { return Object(te["m"])(e.hours % 12 || 12) }, H(e) { return e.hours }, HH(e) { return Object(te["m"])(e.hours) }, m(e) { return e.minutes }, mm(e) { return Object(te["m"])(e.minutes) }, s(e) { return e.seconds }, ss(e) { return Object(te["m"])(e.seconds) }, S(e) { return Math.round(e.milliseconds / 100) }, SS(e) { return Object(te["m"])(Math.round(e.milliseconds / 10), 2) }, SSS(e) { return Object(te["m"])(e.milliseconds, 3) }, a(e, t) { return e.hours < 12 ? t.amPm[0] : t.amPm[1] }, A(e, t) { return e.hours < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase() }, Z() { return "Z" }, ZZ(e) { const t = e.timezoneOffset; return `${t > 0 ? "-" : "+"}${Object(te["m"])(Math.floor(Math.abs(t) / 60), 2)}` }, ZZZ(e) { const t = e.timezoneOffset; return `${t > 0 ? "-" : "+"}${Object(te["m"])(100 * Math.floor(Math.abs(t) / 60) + Math.abs(t) % 60, 4)}` }, ZZZZ(e) { const t = e.timezoneOffset; return `${t > 0 ? "-" : "+"}${Object(te["m"])(Math.floor(Math.abs(t) / 60), 2)}:${Object(te["m"])(Math.abs(t) % 60, 2)}` } }, me = { D: [ie, function (e, t) { e.day = t }], Do: [new RegExp(ie.source + ue.source), function (e, t) { e.day = parseInt(t, 10) }], d: [ie, de], W: [ue, de], M: [ie, function (e, t) { e.month = t - 1 }], MMM: [ue, fe("monthNamesShort")], MMMM: [ue, fe("monthNames")], YY: [ie, function (e, t) { const n = new Date, r = +n.getFullYear().toString().substr(0, 2); e.year = `${t > 68 ? r - 1 : r}${t}` }], YYYY: [ce, function (e, t) { e.year = t }], S: [/\d/, function (e, t) { e.millisecond = 100 * t }], SS: [/\d{2}/, function (e, t) { e.millisecond = 10 * t }], SSS: [se, function (e, t) { e.millisecond = t }], h: [ie, function (e, t) { e.hour = t }], m: [ie, function (e, t) { e.minute = t }], s: [ie, function (e, t) { e.second = t }], a: [ue, function (e, t, n) { const r = t.toLowerCase(); r === n.amPm[0] ? e.isPm = !1 : r === n.amPm[1] && (e.isPm = !0) }], Z: [/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/, function (e, t) { "Z" === t && (t = "+00:00"); const n = ("" + t).match(/([+-]|\d\d)/gi); if (n) { const t = 60 * n[1] + parseInt(n[2], 10); e.timezoneOffset = "+" === n[0] ? t : -t } }] }; function ge(e, t) { const n = (new Intl.DateTimeFormat).resolvedOptions().locale; let r; Object(ne["n"])(e) ? r = e : Object(ne["e"])(e, "id") && (r = e.id), r = (r || n).toLowerCase(); const a = Object.keys(t), o = function (e) { return a.find((function (t) { return t.toLowerCase() === e })) }; r = o(r) || o(r.substring(0, 2)) || n; const i = { ...t["en-IE"], ...t[r], id: r }; return e = Object(ne["m"])(e) ? Object(ne["c"])(e, i) : i, e } me.DD = me.D, me.dd = me.d, me.WWWW = me.WWW = me.WW = me.W, me.MM = me.M, me.mm = me.m, me.hh = me.H = me.HH = me.h, me.ss = me.s, me.A = me.a, me.ZZZZ = me.ZZZ = me.ZZ = me.Z; class ye { constructor(e, { locales: t = ee["a"], timezone: n } = {}) { const { id: r, firstDayOfWeek: a, masks: o } = ge(e, t); this.id = r, this.daysInWeek = he, this.firstDayOfWeek = Object(ne["a"])(a, 1, he), this.masks = o, this.timezone = n || void 0, this.dayNames = this.getDayNames("long"), this.dayNamesShort = this.getDayNames("short"), this.dayNamesShorter = this.dayNamesShort.map((function (e) { return e.substring(0, 2) })), this.dayNamesNarrow = this.getDayNames("narrow"), this.monthNames = this.getMonthNames("long"), this.monthNamesShort = this.getMonthNames("short"), this.amPm = ["am", "pm"], this.monthData = {}, this.getMonthComps = this.getMonthComps.bind(this), this.parse = this.parse.bind(this), this.format = this.format.bind(this), this.toPage = this.toPage.bind(this) } format(e, t) { var n = this; if (e = this.normalizeDate(e), !e) return ""; t = this.normalizeMasks(t)[0]; const r = []; t = t.replace(le, (function (e, t) { return r.push(t), "??" })); const a = /Z$/.test(t) ? "utc" : this.timezone, o = this.getDateParts(e, a); return t = t.replace(oe, (function (e) { return e in be ? be[e](o, n) : e.slice(1, e.length - 1) })), t.replace(/\?\?/g, (function () { return r.shift() })) } parse(e, t) { var n = this; const r = this.normalizeMasks(t); return r.map((function (t) { if ("string" !== typeof t) throw new Error("Invalid mask in fecha.parse"); let r = e; if (r.length > 1e3) return !1; let a = !0; const o = {}; if (t.replace(oe, (function (e) { if (me[e]) { const t = me[e], i = r.search(t[0]); ~i ? r.replace(t[0], (function (e) { return t[1](o, e, n), r = r.substr(i + e.length), e })) : a = !1 } return me[e] ? "" : e.slice(1, e.length - 1) })), !a) return !1; const i = new Date; let s; return !0 === o.isPm && null != o.hour && 12 !== +o.hour ? o.hour = +o.hour + 12 : !1 === o.isPm && 12 === +o.hour && (o.hour = 0), null != o.timezoneOffset ? (o.minute = +(o.minute || 0) - +o.timezoneOffset, s = new Date(Date.UTC(o.year || i.getFullYear(), o.month || 0, o.day || 1, o.hour || 0, o.minute || 0, o.second || 0, o.millisecond || 0))) : s = n.getDateFromParts({ year: o.year || i.getFullYear(), month: (o.month || 0) + 1, day: o.day || 1, hours: o.hour || 0, minutes: o.minute || 0, seconds: o.second || 0, milliseconds: o.millisecond || 0 }), s })).find((function (e) { return e })) || new Date(e) } normalizeMasks(e) { var t = this; return (Object(te["b"])(e) && e || [Object(ne["n"])(e) && e || "YYYY-MM-DD"]).map((function (e) { return pe.reduce((function (e, n) { return e.replace(n, t.masks[n] || "") }), e) })) } normalizeDate(e, t = {}) { let n = null, { type: r, fillDate: a } = t; const { mask: o, patch: i, time: s } = t, c = "auto" === r || !r; if (Object(ne["l"])(e) ? (r = "number", n = new Date(+e)) : Object(ne["n"])(e) ? (r = "string", n = e ? this.parse(e, o || "iso") : null) : Object(ne["m"])(e) ? (r = "object", n = this.getDateFromParts(e)) : (r = "date", n = Object(ne["j"])(e) ? new Date(e.getTime()) : null), n && i) { a = null == a ? new Date : this.normalizeDate(a); const e = { ...this.getDateParts(a), ...Object(ne["t"])(this.getDateParts(n), ae[i]) }; n = this.getDateFromParts(e) } return c && (t.type = r), n && !isNaN(n.getTime()) ? (s && (n = this.adjustTimeForDate(n, { timeAdjust: s })), n) : null } denormalizeDate(e, { type: t, mask: n } = {}) { switch (t) { case "number": return e ? e.getTime() : NaN; case "string": return e ? this.format(e, n || "iso") : ""; default: return e ? new Date(e) : null } } adjustTimeForDate(e, { timeAdjust: t }) { if (t) { const n = this.getDateParts(e); if ("now" === t) { const e = this.getDateParts(new Date); n.hours = e.hours, n.minutes = e.minutes, n.seconds = e.seconds, n.milliseconds = e.milliseconds } else { const e = new Date(`2000-01-01T${t}Z`); n.hours = e.getUTCHours(), n.minutes = e.getUTCMinutes(), n.seconds = e.getUTCSeconds(), n.milliseconds = e.getUTCMilliseconds() } e = this.getDateFromParts(n) } return e } normalizeDates(e, t) { return t = t || {}, t.locale = this, (Object(ne["h"])(e) ? e : [e]).map((function (e) { return e && (e instanceof Q["a"] ? e : new Q["a"](e, t)) })).filter((function (e) { return e })) } getDateParts(e, t = this.timezone) { if (!e) return null; let n = e; if (t) { const r = new Date(e.toLocaleString("en-US", { timeZone: t })); r.setMilliseconds(e.getMilliseconds()); const a = r.getTime() - e.getTime(); n = new Date(e.getTime() + a) } const r = n.getMilliseconds(), a = n.getSeconds(), o = n.getMinutes(), i = n.getHours(), s = n.getMonth() + 1, c = n.getFullYear(), u = this.getMonthComps(s, c), l = n.getDate(), d = u.days - l + 1, f = n.getDay() + 1, p = Math.floor((l - 1) / 7 + 1), h = Math.floor((u.days - l) / 7 + 1), v = Math.ceil((l + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7), b = u.weeks - v + 1, m = { milliseconds: r, seconds: a, minutes: o, hours: i, day: l, dayFromEnd: d, weekday: f, weekdayOrdinal: p, weekdayOrdinalFromEnd: h, week: v, weekFromEnd: b, month: s, year: c, date: e, isValid: !0 }; return m.timezoneOffset = this.getTimezoneOffset(m), m } getDateFromParts(e) { if (!e) return null; const t = new Date, { year: n = t.getFullYear(), month: r = t.getMonth() + 1, day: a = t.getDate(), hours: o = 0, minutes: i = 0, seconds: s = 0, milliseconds: c = 0 } = e; if (this.timezone) { const e = `${Object(te["m"])(n, 4)}-${Object(te["m"])(r, 2)}-${Object(te["m"])(a, 2)}T${Object(te["m"])(o, 2)}:${Object(te["m"])(i, 2)}:${Object(te["m"])(s, 2)}.${Object(te["m"])(c, 3)}`; return D(e, { timeZone: this.timezone }) } return new Date(n, r - 1, a, o, i, s, c) } getTimezoneOffset(e) { const { year: t, month: n, day: r, hours: a = 0, minutes: o = 0, seconds: i = 0, milliseconds: s = 0 } = e; let c; const u = new Date(Date.UTC(t, n - 1, r, a, o, i, s)); if (this.timezone) { const e = `${Object(te["m"])(t, 4)}-${Object(te["m"])(n, 2)}-${Object(te["m"])(r, 2)}T${Object(te["m"])(a, 2)}:${Object(te["m"])(o, 2)}:${Object(te["m"])(i, 2)}.${Object(te["m"])(s, 3)}`; c = D(e, { timeZone: this.timezone }) } else c = new Date(t, n - 1, r, a, o, i, s); return (c - u) / 6e4 } toPage(e, t) { return Object(ne["l"])(e) ? Object(te["a"])(t, e) : Object(ne["n"])(e) ? this.getDateParts(this.normalizeDate(e)) : Object(ne["j"])(e) ? this.getDateParts(e) : Object(ne["m"])(e) ? e : null } getMonthDates(e = 2e3) { const t = []; for (let n = 0; n < 12; n++)t.push(new Date(e, n, 15)); return t } getMonthNames(e) { const t = new Intl.DateTimeFormat(this.id, { month: e, timezome: "UTC" }); return this.getMonthDates().map((function (e) { return t.format(e) })) } getWeekdayDates(e = this.firstDayOfWeek) { const t = [], n = 2020, r = 1, a = 5 + e - 1; for (let o = 0; o < he; o++)t.push(this.getDateFromParts({ year: n, month: r, day: a + o, hours: 12 })); return t } getDayNames(e) { const t = new Intl.DateTimeFormat(this.id, { weekday: e, timeZone: this.timezone }); return this.getWeekdayDates(1).map((function (e) { return t.format(e) })) } getMonthComps(e, t) { const n = `${e}-${t}`; let r = this.monthData[n]; if (!r) { const a = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0, o = new Date(t, e - 1, 1), i = o.getDay() + 1, s = 2 === e && a ? 29 : ve[e - 1], c = this.firstDayOfWeek - 1, u = X(o, { weekStartsOn: c }), l = [], d = []; for (let e = 0; e < u; e++) { const t = Object(J["a"])(o, 7 * e); l.push(B(t, { weekStartsOn: c })), d.push(R(t)) } r = { firstDayOfWeek: this.firstDayOfWeek, inLeapYear: a, firstWeekday: i, days: s, weeks: u, month: e, year: t, weeknumbers: l, isoWeeknumbers: d }, this.monthData[n] = r } return r } getThisMonthComps() { const { month: e, year: t } = this.getDateParts(new Date); return this.getMonthComps(e, t) } getPrevMonthComps(e, t) { return 1 === e ? this.getMonthComps(12, t - 1) : this.getMonthComps(e - 1, t) } getNextMonthComps(e, t) { return 12 === e ? this.getMonthComps(1, t + 1) : this.getMonthComps(e + 1, t) } getDayId(e) { return this.format(e, "YYYY-MM-DD") } getCalendarDays({ weeks: e, monthComps: t, prevMonthComps: n, nextMonthComps: r }) { var a = this; const o = [], { firstDayOfWeek: i, firstWeekday: s, isoWeeknumbers: c, weeknumbers: u } = t, l = s + (s < i ? he : 0) - i; let d = !0, f = !1, p = !1; const h = new Intl.DateTimeFormat(this.id, { weekday: "long", year: "numeric", month: "long", day: "numeric" }); let v = n.days - l + 1, b = n.days - v + 1, m = Math.floor((v - 1) / he + 1), g = 1, y = n.weeks, w = 1, x = n.month, D = n.year; const j = new Date, O = j.getDate(), k = j.getMonth() + 1, M = j.getFullYear(), P = function (e, t, n) { return function (r, o, i, s) { return a.normalizeDate({ year: e, month: t, day: n, hours: r, minutes: o, seconds: i, milliseconds: s }) } }; for (let S = 1; S <= e; S++) { for (let n = 1, a = i; n <= he; n++, a += a === he ? 1 - he : 1) { d && a === s && (v = 1, b = t.days, m = Math.floor((v - 1) / he + 1), g = Math.floor((t.days - v) / he + 1), y = 1, w = t.weeks, x = t.month, D = t.year, d = !1, f = !0); const i = P(D, x, v), l = { start: i(0, 0, 0), end: i(23, 59, 59, 999) }, j = l.start, Y = `${Object(te["m"])(D, 4)}-${Object(te["m"])(x, 2)}-${Object(te["m"])(v, 2)}`, E = n, _ = he - n, T = u[S - 1], I = c[S - 1], C = v === O && x === k && D === M, $ = f && 1 === v, A = f && v === t.days, N = 1 === S, F = S === e, z = 1 === n, L = n === he; o.push({ id: Y, label: v.toString(), ariaLabel: h.format(new Date(D, x - 1, v)), day: v, dayFromEnd: b, weekday: a, weekdayPosition: E, weekdayPositionFromEnd: _, weekdayOrdinal: m, weekdayOrdinalFromEnd: g, week: y, weekFromEnd: w, weeknumber: T, isoWeeknumber: I, month: x, year: D, dateFromTime: i, date: j, range: l, isToday: C, isFirstDay: $, isLastDay: A, inMonth: f, inPrevMonth: d, inNextMonth: p, onTop: N, onBottom: F, onLeft: z, onRight: L, classes: ["id-" + Y, "day-" + v, "day-from-end-" + b, "weekday-" + a, "weekday-position-" + E, "weekday-ordinal-" + m, "weekday-ordinal-from-end-" + g, "week-" + y, "week-from-end-" + w, { "is-today": C, "is-first-day": $, "is-last-day": A, "in-month": f, "in-prev-month": d, "in-next-month": p, "on-top": N, "on-bottom": F, "on-left": z, "on-right": L }] }), f && A ? (f = !1, p = !0, v = 1, b = r.days, m = 1, g = Math.floor((r.days - v) / he + 1), y = 1, w = r.weeks, x = r.month, D = r.year) : (v++, b--, m = Math.floor((v - 1) / he + 1), g = Math.floor((t.days - v) / he + 1)) } y++, w-- } return o } } }, "29f3": function (e, t) { var n = Object.prototype, r = n.toString; function a(e) { return r.call(e) } e.exports = a }, "2af9": function (e, t, n) { "use strict"; n.r(t), n.d(t, "Calendar", (function () { return Yn })), n.d(t, "CalendarNav", (function () { return Jt })), n.d(t, "DatePicker", (function () { return Xn })), n.d(t, "Popover", (function () { return bt })); n("ddb0"); var r = n("f7f1"), a = n("fe1f"), o = n("fd3a"), i = n("8c86"); function s(e, t) { Object(i["a"])(2, arguments); var n = Object(o["a"])(e), r = Object(a["a"])(t); if (isNaN(r)) return new Date(NaN); if (!r) return n; var s = n.getDate(), c = new Date(n.getTime()); c.setMonth(n.getMonth() + r + 1, 0); var u = c.getDate(); return s >= u ? c : (n.setFullYear(c.getFullYear(), c.getMonth(), s), n) } function c(e, t) { Object(i["a"])(2, arguments); var n = Object(a["a"])(t); return s(e, 12 * n) } function u(e) { var t = e.getBoundingClientRect(); return { width: t.width, height: t.height, top: t.top, right: t.right, bottom: t.bottom, left: t.left, x: t.left, y: t.top } } function l(e) { if ("[object Window]" !== e.toString()) { var t = e.ownerDocument; return t && t.defaultView || window } return e } function d(e) { var t = l(e), n = t.pageXOffset, r = t.pageYOffset; return { scrollLeft: n, scrollTop: r } } function f(e) { var t = l(e).Element; return e instanceof t || e instanceof Element } function p(e) { var t = l(e).HTMLElement; return e instanceof t || e instanceof HTMLElement } function h(e) { var t = l(e).ShadowRoot; return e instanceof t || e instanceof ShadowRoot } function v(e) { return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } } function b(e) { return e !== l(e) && p(e) ? v(e) : d(e) } function m(e) { return e ? (e.nodeName || "").toLowerCase() : null } function g(e) { return ((f(e) ? e.ownerDocument : e.document) || window.document).documentElement } function y(e) { return u(g(e)).left + d(e).scrollLeft } function w(e) { return l(e).getComputedStyle(e) } function x(e) { var t = w(e), n = t.overflow, r = t.overflowX, a = t.overflowY; return /auto|scroll|overlay|hidden/.test(n + a + r) } function D(e, t, n) { void 0 === n && (n = !1); var r = g(t), a = u(e), o = p(t), i = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 }; return (o || !o && !n) && (("body" !== m(t) || x(r)) && (i = b(t)), p(t) ? (s = u(t), s.x += t.clientLeft, s.y += t.clientTop) : r && (s.x = y(r))), { x: a.left + i.scrollLeft - s.x, y: a.top + i.scrollTop - s.y, width: a.width, height: a.height } } function j(e) { return { x: e.offsetLeft, y: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight } } function O(e) { return "html" === m(e) ? e : e.assignedSlot || e.parentNode || e.host || g(e) } function k(e) { return ["html", "body", "#document"].indexOf(m(e)) >= 0 ? e.ownerDocument.body : p(e) && x(e) ? e : k(O(e)) } function M(e, t) { void 0 === t && (t = []); var n = k(e), r = "body" === m(n), a = l(n), o = r ? [a].concat(a.visualViewport || [], x(n) ? n : []) : n, i = t.concat(o); return r ? i : i.concat(M(O(o))) } function P(e) { return ["table", "td", "th"].indexOf(m(e)) >= 0 } function S(e) { if (!p(e) || "fixed" === w(e).position) return null; var t = e.offsetParent; if (t) { var n = g(t); if ("body" === m(t) && "static" === w(t).position && "static" !== w(n).position) return n } return t } function Y(e) { var t = O(e); while (p(t) && ["html", "body"].indexOf(m(t)) < 0) { var n = w(t); if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return t; t = t.parentNode } return null } function E(e) { var t = l(e), n = S(e); while (n && P(n) && "static" === w(n).position) n = S(n); return n && "body" === m(n) && "static" === w(n).position ? t : n || Y(e) || t } var _ = "top", T = "bottom", I = "right", C = "left", $ = "auto", A = [_, T, I, C], N = "start", F = "end", z = "clippingParents", L = "viewport", H = "popper", R = "reference", W = A.reduce((function (e, t) { return e.concat([t + "-" + N, t + "-" + F]) }), []), V = [].concat(A, [$]).reduce((function (e, t) { return e.concat([t, t + "-" + N, t + "-" + F]) }), []), U = "beforeRead", B = "read", Z = "afterRead", q = "beforeMain", G = "main", K = "afterMain", X = "beforeWrite", J = "write", Q = "afterWrite", ee = [U, B, Z, q, G, K, X, J, Q]; function te(e) { var t = new Map, n = new Set, r = []; function a(e) { n.add(e.name); var o = [].concat(e.requires || [], e.requiresIfExists || []); o.forEach((function (e) { if (!n.has(e)) { var r = t.get(e); r && a(r) } })), r.push(e) } return e.forEach((function (e) { t.set(e.name, e) })), e.forEach((function (e) { n.has(e.name) || a(e) })), r } function ne(e) { var t = te(e); return ee.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n }))) }), []) } function re(e) { var t; return function () { return t || (t = new Promise((function (n) { Promise.resolve().then((function () { t = void 0, n(e()) })) }))), t } } function ae(e) { var t = e.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, { options: Object.assign(Object.assign({}, n.options), t.options), data: Object.assign(Object.assign({}, n.data), t.data) }) : t, e }), {}); return Object.keys(t).map((function (e) { return t[e] })) } var oe = { placement: "bottom", modifiers: [], strategy: "absolute" }; function ie() { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" === typeof e.getBoundingClientRect) })) } function se(e) { void 0 === e && (e = {}); var t = e, n = t.defaultModifiers, r = void 0 === n ? [] : n, a = t.defaultOptions, o = void 0 === a ? oe : a; return function (e, t, n) { void 0 === n && (n = o); var a = { placement: "bottom", orderedModifiers: [], options: Object.assign(Object.assign({}, oe), o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, i = [], s = !1, c = { state: a, setOptions: function (n) { l(), a.options = Object.assign(Object.assign(Object.assign({}, o), a.options), n), a.scrollParents = { reference: f(e) ? M(e) : e.contextElement ? M(e.contextElement) : [], popper: M(t) }; var i = ne(ae([].concat(r, a.options.modifiers))); return a.orderedModifiers = i.filter((function (e) { return e.enabled })), u(), c.update() }, forceUpdate: function () { if (!s) { var e = a.elements, t = e.reference, n = e.popper; if (ie(t, n)) { a.rects = { reference: D(t, E(n), "fixed" === a.options.strategy), popper: j(n) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (e) { return a.modifiersData[e.name] = Object.assign({}, e.data) })); for (var r = 0; r < a.orderedModifiers.length; r++)if (!0 !== a.reset) { var o = a.orderedModifiers[r], i = o.fn, u = o.options, l = void 0 === u ? {} : u, d = o.name; "function" === typeof i && (a = i({ state: a, options: l, name: d, instance: c }) || a) } else a.reset = !1, r = -1 } } }, update: re((function () { return new Promise((function (e) { c.forceUpdate(), e(a) })) })), destroy: function () { l(), s = !0 } }; if (!ie(e, t)) return c; function u() { a.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options, r = void 0 === n ? {} : n, o = e.effect; if ("function" === typeof o) { var s = o({ state: a, name: t, instance: c, options: r }), u = function () { }; i.push(s || u) } })) } function l() { i.forEach((function (e) { return e() })), i = [] } return c.setOptions(n).then((function (e) { !s && n.onFirstUpdate && n.onFirstUpdate(e) })), c } } var ce = { passive: !0 }; function ue(e) { var t = e.state, n = e.instance, r = e.options, a = r.scroll, o = void 0 === a || a, i = r.resize, s = void 0 === i || i, c = l(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper); return o && u.forEach((function (e) { e.addEventListener("scroll", n.update, ce) })), s && c.addEventListener("resize", n.update, ce), function () { o && u.forEach((function (e) { e.removeEventListener("scroll", n.update, ce) })), s && c.removeEventListener("resize", n.update, ce) } } var le = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: ue, data: {} }; function de(e) { return e.split("-")[0] } function fe(e) { return e.split("-")[1] } function pe(e) { return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y" } function he(e) { var t, n = e.reference, r = e.element, a = e.placement, o = a ? de(a) : null, i = a ? fe(a) : null, s = n.x + n.width / 2 - r.width / 2, c = n.y + n.height / 2 - r.height / 2; switch (o) { case _: t = { x: s, y: n.y - r.height }; break; case T: t = { x: s, y: n.y + n.height }; break; case I: t = { x: n.x + n.width, y: c }; break; case C: t = { x: n.x - r.width, y: c }; break; default: t = { x: n.x, y: n.y } }var u = o ? pe(o) : null; if (null != u) { var l = "y" === u ? "height" : "width"; switch (i) { case N: t[u] = Math.floor(t[u]) - Math.floor(n[l] / 2 - r[l] / 2); break; case F: t[u] = Math.floor(t[u]) + Math.ceil(n[l] / 2 - r[l] / 2); break; default: } } return t } function ve(e) { var t = e.state, n = e.name; t.modifiersData[n] = he({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) } var be = { name: "popperOffsets", enabled: !0, phase: "read", fn: ve, data: {} }, me = { top: "auto", right: "auto", bottom: "auto", left: "auto" }; function ge(e) { var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1; return { x: Math.round(t * a) / a || 0, y: Math.round(n * a) / a || 0 } } function ye(e) { var t, n = e.popper, r = e.popperRect, a = e.placement, o = e.offsets, i = e.position, s = e.gpuAcceleration, c = e.adaptive, u = ge(o), d = u.x, f = u.y, p = o.hasOwnProperty("x"), h = o.hasOwnProperty("y"), v = C, b = _, m = window; if (c) { var y = E(n); y === l(n) && (y = g(n)), a === _ && (b = T, f -= y.clientHeight - r.height, f *= s ? 1 : -1), a === C && (v = I, d -= y.clientWidth - r.width, d *= s ? 1 : -1) } var w, x = Object.assign({ position: i }, c && me); return s ? Object.assign(Object.assign({}, x), {}, (w = {}, w[b] = h ? "0" : "", w[v] = p ? "0" : "", w.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", w)) : Object.assign(Object.assign({}, x), {}, (t = {}, t[b] = h ? f + "px" : "", t[v] = p ? d + "px" : "", t.transform = "", t)) } function we(e) { var t = e.state, n = e.options, r = n.gpuAcceleration, a = void 0 === r || r, o = n.adaptive, i = void 0 === o || o, s = { placement: de(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a }; null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), ye(Object.assign(Object.assign({}, s), {}, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), ye(Object.assign(Object.assign({}, s), {}, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1 })))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, { "data-popper-placement": t.placement }) } var xe = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: we, data: {} }; function De(e) { var t = e.state; Object.keys(t.elements).forEach((function (e) { var n = t.styles[e] || {}, r = t.attributes[e] || {}, a = t.elements[e]; p(a) && m(a) && (Object.assign(a.style, n), Object.keys(r).forEach((function (e) { var t = r[e]; !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t) }))) })) } function je(e) { var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () { Object.keys(t.elements).forEach((function (e) { var r = t.elements[e], a = t.attributes[e] || {}, o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]), i = o.reduce((function (e, t) { return e[t] = "", e }), {}); p(r) && m(r) && (Object.assign(r.style, i), Object.keys(a).forEach((function (e) { r.removeAttribute(e) }))) })) } } var Oe = { name: "applyStyles", enabled: !0, phase: "write", fn: De, effect: je, requires: ["computeStyles"] }; function ke(e, t, n) { var r = de(e), a = [C, _].indexOf(r) >= 0 ? -1 : 1, o = "function" === typeof n ? n(Object.assign(Object.assign({}, t), {}, { placement: e })) : n, i = o[0], s = o[1]; return i = i || 0, s = (s || 0) * a, [C, I].indexOf(r) >= 0 ? { x: s, y: i } : { x: i, y: s } } function Me(e) { var t = e.state, n = e.options, r = e.name, a = n.offset, o = void 0 === a ? [0, 0] : a, i = V.reduce((function (e, n) { return e[n] = ke(n, t.rects, o), e }), {}), s = i[t.placement], c = s.x, u = s.y; null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i } var Pe = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Me }, Se = { left: "right", right: "left", bottom: "top", top: "bottom" }; function Ye(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return Se[e] })) } var Ee = { start: "end", end: "start" }; function _e(e) { return e.replace(/start|end/g, (function (e) { return Ee[e] })) } function Te(e) { var t = l(e), n = g(e), r = t.visualViewport, a = n.clientWidth, o = n.clientHeight, i = 0, s = 0; return r && (a = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, s = r.offsetTop)), { width: a, height: o, x: i + y(e), y: s } } function Ie(e) { var t = g(e), n = d(e), r = e.ownerDocument.body, a = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), o = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), i = -n.scrollLeft + y(e), s = -n.scrollTop; return "rtl" === w(r || t).direction && (i += Math.max(t.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: o, x: i, y: s } } function Ce(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (h(n)) { var r = t; do { if (r && e.isSameNode(r)) return !0; r = r.parentNode || r.host } while (r) } return !1 } function $e(e) { return Object.assign(Object.assign({}, e), {}, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) } function Ae(e) { var t = u(e); return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t } function Ne(e, t) { return t === L ? $e(Te(e)) : p(t) ? Ae(t) : $e(Ie(g(e))) } function Fe(e) { var t = M(O(e)), n = ["absolute", "fixed"].indexOf(w(e).position) >= 0, r = n && p(e) ? E(e) : e; return f(r) ? t.filter((function (e) { return f(e) && Ce(e, r) && "body" !== m(e) })) : [] } function ze(e, t, n) { var r = "clippingParents" === t ? Fe(e) : [].concat(t), a = [].concat(r, [n]), o = a[0], i = a.reduce((function (t, n) { var r = Ne(e, n); return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t }), Ne(e, o)); return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i } function Le() { return { top: 0, right: 0, bottom: 0, left: 0 } } function He(e) { return Object.assign(Object.assign({}, Le()), e) } function Re(e, t) { return t.reduce((function (t, n) { return t[n] = e, t }), {}) } function We(e, t) { void 0 === t && (t = {}); var n = t, r = n.placement, a = void 0 === r ? e.placement : r, o = n.boundary, i = void 0 === o ? z : o, s = n.rootBoundary, c = void 0 === s ? L : s, l = n.elementContext, d = void 0 === l ? H : l, p = n.altBoundary, h = void 0 !== p && p, v = n.padding, b = void 0 === v ? 0 : v, m = He("number" !== typeof b ? b : Re(b, A)), y = d === H ? R : H, w = e.elements.reference, x = e.rects.popper, D = e.elements[h ? y : d], j = ze(f(D) ? D : D.contextElement || g(e.elements.popper), i, c), O = u(w), k = he({ reference: O, element: x, strategy: "absolute", placement: a }), M = $e(Object.assign(Object.assign({}, x), k)), P = d === H ? M : O, S = { top: j.top - P.top + m.top, bottom: P.bottom - j.bottom + m.bottom, left: j.left - P.left + m.left, right: P.right - j.right + m.right }, Y = e.modifiersData.offset; if (d === H && Y) { var E = Y[a]; Object.keys(S).forEach((function (e) { var t = [I, T].indexOf(e) >= 0 ? 1 : -1, n = [_, T].indexOf(e) >= 0 ? "y" : "x"; S[e] += E[n] * t })) } return S } function Ve(e, t) { void 0 === t && (t = {}); var n = t, r = n.placement, a = n.boundary, o = n.rootBoundary, i = n.padding, s = n.flipVariations, c = n.allowedAutoPlacements, u = void 0 === c ? V : c, l = fe(r), d = l ? s ? W : W.filter((function (e) { return fe(e) === l })) : A, f = d.filter((function (e) { return u.indexOf(e) >= 0 })); 0 === f.length && (f = d); var p = f.reduce((function (t, n) { return t[n] = We(e, { placement: n, boundary: a, rootBoundary: o, padding: i })[de(n)], t }), {}); return Object.keys(p).sort((function (e, t) { return p[e] - p[t] })) } function Ue(e) { if (de(e) === $) return []; var t = Ye(e); return [_e(e), t, _e(t)] } function Be(e) { var t = e.state, n = e.options, r = e.name; if (!t.modifiersData[r]._skip) { for (var a = n.mainAxis, o = void 0 === a || a, i = n.altAxis, s = void 0 === i || i, c = n.fallbackPlacements, u = n.padding, l = n.boundary, d = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, v = n.allowedAutoPlacements, b = t.options.placement, m = de(b), g = m === b, y = c || (g || !h ? [Ye(b)] : Ue(b)), w = [b].concat(y).reduce((function (e, n) { return e.concat(de(n) === $ ? Ve(t, { placement: n, boundary: l, rootBoundary: d, padding: u, flipVariations: h, allowedAutoPlacements: v }) : n) }), []), x = t.rects.reference, D = t.rects.popper, j = new Map, O = !0, k = w[0], M = 0; M < w.length; M++) { var P = w[M], S = de(P), Y = fe(P) === N, E = [_, T].indexOf(S) >= 0, A = E ? "width" : "height", F = We(t, { placement: P, boundary: l, rootBoundary: d, altBoundary: f, padding: u }), z = E ? Y ? I : C : Y ? T : _; x[A] > D[A] && (z = Ye(z)); var L = Ye(z), H = []; if (o && H.push(F[S] <= 0), s && H.push(F[z] <= 0, F[L] <= 0), H.every((function (e) { return e }))) { k = P, O = !1; break } j.set(P, H) } if (O) for (var R = h ? 3 : 1, W = function (e) { var t = w.find((function (t) { var n = j.get(t); if (n) return n.slice(0, e).every((function (e) { return e })) })); if (t) return k = t, "break" }, V = R; V > 0; V--) { var U = W(V); if ("break" === U) break } t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0) } } var Ze = { name: "flip", enabled: !0, phase: "main", fn: Be, requiresIfExists: ["offset"], data: { _skip: !1 } }; function qe(e) { return "x" === e ? "y" : "x" } function Ge(e, t, n) { return Math.max(e, Math.min(t, n)) } function Ke(e) { var t = e.state, n = e.options, r = e.name, a = n.mainAxis, o = void 0 === a || a, i = n.altAxis, s = void 0 !== i && i, c = n.boundary, u = n.rootBoundary, l = n.altBoundary, d = n.padding, f = n.tether, p = void 0 === f || f, h = n.tetherOffset, v = void 0 === h ? 0 : h, b = We(t, { boundary: c, rootBoundary: u, padding: d, altBoundary: l }), m = de(t.placement), g = fe(t.placement), y = !g, w = pe(m), x = qe(w), D = t.modifiersData.popperOffsets, O = t.rects.reference, k = t.rects.popper, M = "function" === typeof v ? v(Object.assign(Object.assign({}, t.rects), {}, { placement: t.placement })) : v, P = { x: 0, y: 0 }; if (D) { if (o) { var S = "y" === w ? _ : C, Y = "y" === w ? T : I, $ = "y" === w ? "height" : "width", A = D[w], F = D[w] + b[S], z = D[w] - b[Y], L = p ? -k[$] / 2 : 0, H = g === N ? O[$] : k[$], R = g === N ? -k[$] : -O[$], W = t.elements.arrow, V = p && W ? j(W) : { width: 0, height: 0 }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Le(), B = U[S], Z = U[Y], q = Ge(0, O[$], V[$]), G = y ? O[$] / 2 - L - q - B - M : H - q - B - M, K = y ? -O[$] / 2 + L + q + Z + M : R + q + Z + M, X = t.elements.arrow && E(t.elements.arrow), J = X ? "y" === w ? X.clientTop || 0 : X.clientLeft || 0 : 0, Q = t.modifiersData.offset ? t.modifiersData.offset[t.placement][w] : 0, ee = D[w] + G - Q - J, te = D[w] + K - Q, ne = Ge(p ? Math.min(F, ee) : F, A, p ? Math.max(z, te) : z); D[w] = ne, P[w] = ne - A } if (s) { var re = "x" === w ? _ : C, ae = "x" === w ? T : I, oe = D[x], ie = oe + b[re], se = oe - b[ae], ce = Ge(ie, oe, se); D[x] = ce, P[x] = ce - oe } t.modifiersData[r] = P } } var Xe = { name: "preventOverflow", enabled: !0, phase: "main", fn: Ke, requiresIfExists: ["offset"] }; function Je(e) { var t, n = e.state, r = e.name, a = n.elements.arrow, o = n.modifiersData.popperOffsets, i = de(n.placement), s = pe(i), c = [C, I].indexOf(i) >= 0, u = c ? "height" : "width"; if (a && o) { var l = n.modifiersData[r + "#persistent"].padding, d = j(a), f = "y" === s ? _ : C, p = "y" === s ? T : I, h = n.rects.reference[u] + n.rects.reference[s] - o[s] - n.rects.popper[u], v = o[s] - n.rects.reference[s], b = E(a), m = b ? "y" === s ? b.clientHeight || 0 : b.clientWidth || 0 : 0, g = h / 2 - v / 2, y = l[f], w = m - d[u] - l[p], x = m / 2 - d[u] / 2 + g, D = Ge(y, x, w), O = s; n.modifiersData[r] = (t = {}, t[O] = D, t.centerOffset = D - x, t) } } function Qe(e) { var t = e.state, n = e.options, r = e.name, a = n.element, o = void 0 === a ? "[data-popper-arrow]" : a, i = n.padding, s = void 0 === i ? 0 : i; null != o && ("string" !== typeof o || (o = t.elements.popper.querySelector(o), o)) && Ce(t.elements.popper, o) && (t.elements.arrow = o, t.modifiersData[r + "#persistent"] = { padding: He("number" !== typeof s ? s : Re(s, A)) }) } var et = { name: "arrow", enabled: !0, phase: "main", fn: Je, effect: Qe, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }; function tt(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } } function nt(e) { return [_, I, T, C].some((function (t) { return e[t] >= 0 })) } function rt(e) { var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, i = We(t, { elementContext: "reference" }), s = We(t, { altBoundary: !0 }), c = tt(i, r), u = tt(s, a, o), l = nt(c), d = nt(u); t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: l, hasPopperEscaped: d }, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, { "data-popper-reference-hidden": l, "data-popper-escaped": d }) } var at, ot, it = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: rt }, st = [le, be, xe, Oe, Pe, Ze, Xe, et, it], ct = se({ defaultModifiers: st }), ut = n("2fa3"), lt = n("0733"), dt = n("9404"), ft = { name: "Popover", render(e) { return e("div", { class: ["vc-popover-content-wrapper", { "is-interactive": this.isInteractive }], ref: "popover" }, [e("transition", { props: { name: this.transition, appear: !0 }, on: { beforeEnter: this.beforeEnter, afterEnter: this.afterEnter, beforeLeave: this.beforeLeave, afterLeave: this.afterLeave } }, [this.isVisible && e("div", { attrs: { tabindex: -1 }, class: ["vc-popover-content", "direction-" + this.direction, this.contentClass] }, [this.content, e("span", { class: ["vc-popover-caret", "direction-" + this.direction, "align-" + this.alignment] })])])]) }, props: { id: { type: String, required: !0 }, contentClass: String }, data() { return { ref: null, opts: null, data: null, transition: "slide-fade", placement: "bottom", positionFixed: !1, modifiers: [], isInteractive: !1, isHovered: !1, isFocused: !1, showDelay: 0, hideDelay: 110, autoHide: !1, popperEl: null } }, computed: { content() { var e = this; return Object(dt["k"])(this.$scopedSlots.default) && this.$scopedSlots.default({ direction: this.direction, alignment: this.alignment, data: this.data, updateLayout: this.setupPopper, hide: function (t) { return e.hide(t) } }) || this.$slots.default }, popperOptions() { return { placement: this.placement, strategy: this.positionFixed ? "fixed" : "absolute", modifiers: [{ name: "onUpdate", enabled: !0, phase: "afterWrite", fn: this.onPopperUpdate }, ...this.modifiers || []], onFirstUpdate: this.onPopperUpdate } }, isVisible() { return !(!this.ref || !this.content) }, direction() { return this.placement && this.placement.split("-")[0] || "bottom" }, alignment() { const e = "left" === this.direction || "right" === this.direction; let t = this.placement.split("-"); return t = t.length > 1 ? t[1] : "", ["start", "top", "left"].includes(t) ? e ? "top" : "left" : ["end", "bottom", "right"].includes(t) ? e ? "bottom" : "right" : e ? "middle" : "center" }, state() { return this.$popovers[this.id] } }, watch: { opts(e, t) { t && t.callback && t.callback({ ...t, completed: !e, reason: e ? "Overridden by action" : null }) } }, mounted() { this.popoverEl = this.$refs.popover, this.addEvents() }, beforeDestroy() { this.removeEvents() }, methods: { addEvents() { Object(ut["k"])(this.popoverEl, "click", this.onClick), Object(ut["k"])(this.popoverEl, "mouseover", this.onMouseOver), Object(ut["k"])(this.popoverEl, "mouseleave", this.onMouseLeave), Object(ut["k"])(this.popoverEl, "focusin", this.onFocusIn), Object(ut["k"])(this.popoverEl, "focusout", this.onFocusOut), Object(ut["k"])(document, "keydown", this.onDocumentKeydown), this.removeDocHandler = Object(lt["b"])(document, this.onDocumentClick), Object(ut["k"])(document, "show-popover", this.onDocumentShowPopover), Object(ut["k"])(document, "hide-popover", this.onDocumentHidePopover), Object(ut["k"])(document, "toggle-popover", this.onDocumentTogglePopover), Object(ut["k"])(document, "update-popover", this.onDocumentUpdatePopover) }, removeEvents() { Object(ut["j"])(this.popoverEl, "click", this.onClick), Object(ut["j"])(this.popoverEl, "mouseover", this.onMouseOver), Object(ut["j"])(this.popoverEl, "mouseleave", this.onMouseLeave), Object(ut["j"])(this.popoverEl, "focusin", this.onFocusIn), Object(ut["j"])(this.popoverEl, "focusout", this.onFocusOut), Object(ut["j"])(document, "keydown", this.onDocumentKeydown), this.removeDocHandler && this.removeDocHandler(), Object(ut["j"])(document, "show-popover", this.onDocumentShowPopover), Object(ut["j"])(document, "hide-popover", this.onDocumentHidePopover), Object(ut["j"])(document, "toggle-popover", this.onDocumentTogglePopover), Object(ut["j"])(document, "update-popover", this.onDocumentUpdatePopover) }, onClick(e) { e.stopPropagation() }, onMouseOver() { this.isHovered = !0, this.isInteractive && this.show() }, onMouseLeave() { this.isHovered = !1, !this.autoHide || this.isFocused || this.ref && this.ref === document.activeElement || this.hide() }, onFocusIn() { this.isFocused = !0, this.isInteractive && this.show() }, onFocusOut(e) { e.relatedTarget && Object(ut["e"])(this.popoverEl, e.relatedTarget) || (this.isFocused = !1, !this.isHovered && this.autoHide && this.hide()) }, onDocumentClick(e) { this.$refs.popover && this.ref && (Object(ut["e"])(this.popoverEl, e.target) || Object(ut["e"])(this.ref, e.target) || this.hide()) }, onDocumentKeydown(e) { "Esc" !== e.key && "Escape" !== e.key || this.hide() }, onDocumentShowPopover({ detail: e }) { e.id && e.id === this.id && this.show(e) }, onDocumentHidePopover({ detail: e }) { e.id && e.id === this.id && this.hide(e) }, onDocumentTogglePopover({ detail: e }) { e.id && e.id === this.id && this.toggle(e) }, onDocumentUpdatePopover({ detail: e }) { e.id && e.id === this.id && this.update(e) }, show(e = {}) { var t = this; e.action = "show"; const n = e.ref || this.ref, r = e.showDelay >= 0 ? e.showDelay : this.showDelay; if (!n) return void (e.callback && e.callback({ completed: !1, reason: "Invalid reference element provided" })); clearTimeout(this.timeout), this.opts = e; const a = function () { Object.assign(t, e), t.setupPopper(), t.opts = null }; r > 0 ? this.timeout = setTimeout((function () { return a() }), r) : a() }, hide(e = {}) { var t = this; e.action = "hide"; const n = e.ref || this.ref, r = e.hideDelay >= 0 ? e.hideDelay : this.hideDelay; if (!this.ref || n !== this.ref) return void (e.callback && e.callback({ ...e, completed: !1, reason: this.ref ? "Invalid reference element provided" : "Popover already hidden" })); const a = function () { t.ref = null, t.opts = null }; clearTimeout(this.timeout), this.opts = e, r > 0 ? this.timeout = setTimeout(a, r) : a() }, toggle(e = {}) { this.isVisible && e.ref === this.ref ? this.hide(e) : this.show(e) }, update(e = {}) { Object.assign(this, e), this.setupPopper() }, setupPopper() { var e = this; this.$nextTick((function () { e.ref && e.$refs.popover && (e.popper && e.popper.reference !== e.ref && e.destroyPopper(), e.popper ? e.popper.update() : e.popper = ct(e.ref, e.popoverEl, e.popperOptions)) })) }, onPopperUpdate(e) { e.placement ? this.placement = e.placement : e.state && (this.placement = e.state.placement) }, beforeEnter(e) { this.$emit("beforeShow", e) }, afterEnter(e) { this.$emit("afterShow", e) }, beforeLeave(e) { this.$emit("beforeHide", e) }, afterLeave(e) { this.destroyPopper(), this.$emit("afterHide", e) }, destroyPopper() { this.popper && (this.popper.destroy(), this.popper = null) } } }, pt = ft; n("d99e"); function ht(e, t, n, r, a, o, i, s) { var c, u = "function" === typeof e ? e.options : e; if (t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), o && (u._scopeId = "data-v-" + o), i ? (c = function (e) { e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i) }, u._ssrRegister = c) : a && (c = s ? function () { a.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot) } : a), c) if (u.functional) { u._injectStyles = c; var l = u.render; u.render = function (e, t) { return c.call(t), l(e, t) } } else { var d = u.beforeCreate; u.beforeCreate = d ? [].concat(d, c) : [c] } return { exports: e, options: u } } var vt = ht(pt, at, ot, !1, null, "05016e86", null), bt = vt.exports, mt = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n("div", { staticClass: "vc-day-popover-row" }, [e.indicator ? n("div", { staticClass: "vc-day-popover-row-indicator" }, [n("span", { class: e.indicator.class, style: e.indicator.style })]) : e._e(), n("div", { staticClass: "vc-day-popover-row-content" }, [e._t("default", [e._v(e._s(e.attribute.popover ? e.attribute.popover.label : "No content provided"))])], 2)]) }, gt = [], yt = n("51ec"); const wt = { inject: ["sharedState"], mixins: [yt["a"]], computed: { masks() { return this.sharedState.masks }, theme() { return this.sharedState.theme }, locale() { return this.sharedState.locale }, dayPopoverId() { return this.sharedState.dayPopoverId } }, methods: { format(e, t) { return this.locale.format(e, t) }, pageForDate(e) { return this.locale.getDateParts(this.locale.normalizeDate(e)) } } }, xt = ["base", "start", "end", "startEnd"], Dt = ["class", "contentClass", "style", "contentStyle", "color", "fillMode"], jt = { color: "blue", isDark: !1, highlight: { base: { fillMode: "light" }, start: { fillMode: "solid" }, end: { fillMode: "solid" } }, dot: { base: { fillMode: "solid" }, start: { fillMode: "solid" }, end: { fillMode: "solid" } }, bar: { base: { fillMode: "solid" }, start: { fillMode: "solid" }, end: { fillMode: "solid" } }, content: { base: {}, start: {}, end: {} } }; class Ot { constructor(e) { Object.assign(this, jt, e) } normalizeAttr({ config: e, type: t }) { let n = this.color, r = {}; const a = this[t]; if (!0 === e || Object(dt["n"])(e)) n = Object(dt["n"])(e) ? e : n, r = { ...a }; else { if (!Object(dt["m"])(e)) return null; r = Object(dt["f"])(e, xt) ? { ...e } : { base: { ...e }, start: { ...e }, end: { ...e } } } return Object(dt["b"])(r, { start: r.startEnd, end: r.startEnd }, a), Object(dt["w"])(r).forEach((function ([e, t]) { let a = n; !0 === t || Object(dt["n"])(t) ? (a = Object(dt["n"])(t) ? t : a, r[e] = { color: a }) : Object(dt["m"])(t) && (Object(dt["f"])(t, Dt) ? r[e] = { ...t } : r[e] = {}), Object(dt["e"])(r, e + ".color") || Object(dt["u"])(r, e + ".color", a) })), r } normalizeHighlight(e) { var t = this; const n = this.normalizeAttr({ config: e, type: "highlight" }); return Object(dt["w"])(n).forEach((function ([e, n]) { const r = Object(dt["b"])(n, { isDark: t.isDark, color: t.color }); n.style = { ...t.getHighlightBgStyle(r), ...n.style }, n.contentStyle = { ...t.getHighlightContentStyle(r), ...n.contentStyle } })), n } getHighlightBgStyle({ fillMode: e, color: t, isDark: n }) { switch (e) { case "outline": case "none": return { backgroundColor: n ? "var(--gray-900)" : "var(--white)", border: "2px solid", borderColor: n ? `var(--${t}-200)` : `var(--${t}-700)`, borderRadius: "var(--rounded-full)" }; case "light": return { backgroundColor: n ? `var(--${t}-800)` : `var(--${t}-200)`, opacity: n ? .75 : 1, borderRadius: "var(--rounded-full)" }; case "solid": return { backgroundColor: n ? `var(--${t}-500)` : `var(--${t}-600)`, borderRadius: "var(--rounded-full)" }; default: return { borderRadius: "var(--rounded-full)" } } } getHighlightContentStyle({ fillMode: e, color: t, isDark: n }) { switch (e) { case "outline": case "none": return { fontWeight: "var(--font-bold)", color: n ? `var(--${t}-100)` : `var(--${t}-900)` }; case "light": return { fontWeight: "var(--font-bold)", color: n ? `var(--${t}-100)` : `var(--${t}-900)` }; case "solid": return { fontWeight: "var(--font-bold)", color: "var(--white)" }; default: return "" } } bgAccentHigh({ color: e, isDark: t }) { return { backgroundColor: t ? `var(--${e}-500)` : `var(--${e}-600)` } } contentAccent({ color: e, isDark: t }) { return e ? { fontWeight: "var(--font-bold)", color: t ? `var(--${e}-100)` : `var(--${e}-900)` } : null } normalizeDot(e) { return this.normalizeNonHighlight("dot", e, this.bgAccentHigh) } normalizeBar(e) { return this.normalizeNonHighlight("bar", e, this.bgAccentHigh) } normalizeContent(e) { return this.normalizeNonHighlight("content", e, this.contentAccent) } normalizeNonHighlight(e, t, n) { var r = this; const a = this.normalizeAttr({ type: e, config: t }); return Object(dt["w"])(a).forEach((function ([e, t]) { Object(dt["b"])(t, { isDark: r.isDark, color: r.color }), t.style = { ...n(t), ...t.style } })), a } } var kt = n("29ae"), Mt = n("1315"), Pt = n("22f3"); const St = { mixins: [yt["a"]], props: { color: String, isDark: Boolean, firstDayOfWeek: Number, masks: Object, locale: [String, Object], timezone: String, minDate: null, maxDate: null, minDateExact: null, maxDateExact: null, disabledDates: null, availableDates: null, theme: null }, computed: { $theme() { return this.theme instanceof Ot ? this.theme : new Ot({ color: this.passedProp("color", "blue"), isDark: this.passedProp("isDark", !1) }) }, $locale() { if (this.locale instanceof kt["b"]) return this.locale; const e = Object(dt["m"])(this.locale) ? this.locale : { id: this.locale, firstDayOfWeek: this.firstDayOfWeek, masks: this.masks }; return new kt["b"](e, { locales: this.$locales, timezone: this.timezone }) }, disabledDates_() { const e = this.normalizeDates(this.disabledDates), { minDate: t, minDateExact: n, maxDate: r, maxDateExact: a } = this; if (n || t) { const r = n ? this.normalizeDate(n) : this.normalizeDate(t, { time: "00:00:00" }); e.push({ start: null, end: new Date(r.getTime() - 1e3) }) } if (a || r) { const t = a ? this.normalizeDate(a) : this.normalizeDate(r, { time: "23:59:59" }); e.push({ start: new Date(t.getTime() + 1e3), end: null }) } return e }, availableDates_() { return this.normalizeDates(this.availableDates) }, disabledAttribute() { return new Pt["a"]({ key: "disabled", dates: this.disabledDates_, excludeDates: this.availableDates_, excludeMode: "includes", order: 100 }, this.$theme, this.$locale) } }, created() { Object(Mt["a"])(this.$defaults.screens) }, methods: { formatDate(e, t) { return this.$locale ? this.$locale.format(e, t) : "" }, parseDate(e, t) { if (!this.$locale) return null; const n = this.$locale.parse(e, t); return Object(dt["j"])(n) ? n : null }, normalizeDate(e, t) { return this.$locale ? this.$locale.normalizeDate(e, t) : e }, normalizeDates(e) { return this.$locale.normalizeDates(e, { isFullDay: !0 }) }, pageForDate(e) { return this.$locale.getDateParts(this.normalizeDate(e)) }, pageForThisMonth() { return this.pageForDate(new Date) } } }, Yt = { methods: { safeScopedSlot(e, t, n = null) { return Object(dt["k"])(this.$scopedSlots[e]) ? this.$scopedSlots[e](t) : n } } }, Et = wt, _t = St, Tt = Yt; var It = { name: "PopoverRow", mixins: [Et], props: { attribute: Object }, computed: { indicator() { const { highlight: e, dot: t, bar: n, popover: r } = this.attribute; if (r && r.hideIndicator) return null; if (e) { const { color: t, isDark: n } = e.start; return { style: { ...this.theme.bgAccentHigh({ color: t, isDark: !n }), width: "10px", height: "5px", borderRadius: "3px" } } } if (t) { const { color: e, isDark: n } = t.start; return { style: { ...this.theme.bgAccentHigh({ color: e, isDark: !n }), width: "5px", height: "5px", borderRadius: "50%" } } } if (n) { const { color: e, isDark: t } = n.start; return { style: { ...this.theme.bgAccentHigh({ color: e, isDark: !t }), width: "10px", height: "3px" } } } return null } } }, Ct = It, $t = (n("2b27"), ht(Ct, mt, gt, !1, null, "4975d69e", null)), At = $t.exports, Nt = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n("div", { staticClass: "vc-nav-container" }, [n("div", { staticClass: "vc-nav-header" }, [n("span", { staticClass: "vc-nav-arrow is-left", class: { "is-disabled": !e.prevItemsEnabled }, attrs: { role: "button", tabindex: e.prevItemsEnabled ? 0 : void 0 }, on: { click: e.movePrev, keydown: function (t) { return e.onSpaceOrEnter(t, e.movePrev) } } }, [e._t("nav-left-button", [n("svg-icon", { attrs: { name: "left-arrow", width: "20px", height: "24px" } })])], 2), n("span", { staticClass: "vc-nav-title vc-grid-focus", style: { whiteSpace: "nowrap" }, attrs: { role: "button", tabindex: "0" }, on: { click: e.toggleMode, keydown: function (t) { return e.onSpaceOrEnter(t, e.toggleMode) } } }, [e._v(" " + e._s(e.title) + " ")]), n("span", { staticClass: "vc-nav-arrow is-right", class: { "is-disabled": !e.nextItemsEnabled }, attrs: { role: "button", tabindex: e.nextItemsEnabled ? 0 : void 0 }, on: { click: e.moveNext, keydown: function (t) { return e.onSpaceOrEnter(t, e.moveNext) } } }, [e._t("nav-right-button", [n("svg-icon", { attrs: { name: "right-arrow", width: "20px", height: "24px" } })])], 2)]), n("div", { staticClass: "vc-nav-items" }, e._l(e.activeItems, (function (t) { return n("span", { key: t.label, class: e.getItemClasses(t), attrs: { role: "button", "data-id": t.id, "aria-label": t.ariaLabel, tabindex: t.isDisabled ? void 0 : 0 }, on: { click: t.click, keydown: function (n) { return e.onSpaceOrEnter(n, t.click) } } }, [e._v(" " + e._s(t.label) + " ")]) })), 0)]) }, Ft = [], zt = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n("svg", e._g({ staticClass: "vc-svg-icon", attrs: { width: e.width, height: e.height, viewBox: e.viewBox } }, e.$listeners), [n("path", { attrs: { d: e.path } })]) }, Lt = []; const Ht = "26px", Rt = "0 0 32 32", Wt = { "left-arrow": { viewBox: "0 -1 16 34", path: "M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z" }, "right-arrow": { viewBox: "-5 -1 16 34", path: "M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z" } }; var Vt = { props: ["name"], data() { return { width: Ht, height: Ht, viewBox: Rt, path: "", isBaseline: !1 } }, mounted() { this.updateIcon() }, watch: { name() { this.updateIcon() } }, methods: { updateIcon() { const e = Wt[this.name]; e && (this.width = e.width || Ht, this.height = e.height || Ht, this.viewBox = e.viewBox, this.path = e.path) } } }, Ut = Vt, Bt = (n("cc2e"), ht(Ut, zt, Lt, !1, null, "19b6cf78", null)), Zt = Bt.exports; const qt = 12; var Gt = { name: "CalendarNav", components: { SvgIcon: Zt }, mixins: [Et], props: { value: { type: Object, default: function () { return { month: 0, year: 0 } } }, validator: { type: Function, default: function () { return function () { return !0 } } } }, data() { return { monthMode: !0, yearIndex: 0, yearGroupIndex: 0, onSpaceOrEnter: ut["l"] } }, computed: { month() { return this.value && this.value.month || 0 }, year() { return this.value && this.value.year || 0 }, title() { return this.monthMode ? this.yearIndex : `${this.firstYear} - ${this.lastYear}` }, monthItems() { return this.getMonthItems(this.yearIndex) }, yearItems() { return this.getYearItems(this.yearGroupIndex) }, prevItemsEnabled() { return this.monthMode ? this.prevMonthItemsEnabled : this.prevYearItemsEnabled }, nextItemsEnabled() { return this.monthMode ? this.nextMonthItemsEnabled : this.nextYearItemsEnabled }, prevMonthItemsEnabled() { return this.getMonthItems(this.yearIndex - 1).some((function (e) { return !e.isDisabled })) }, nextMonthItemsEnabled() { return this.getMonthItems(this.yearIndex + 1).some((function (e) { return !e.isDisabled })) }, prevYearItemsEnabled() { return this.getYearItems(this.yearGroupIndex - 1).some((function (e) { return !e.isDisabled })) }, nextYearItemsEnabled() { return this.getYearItems(this.yearGroupIndex + 1).some((function (e) { return !e.isDisabled })) }, activeItems() { return this.monthMode ? this.monthItems : this.yearItems }, firstYear() { return Object(dt["g"])(this.yearItems.map((function (e) { return e.year }))) }, lastYear() { return Object(dt["p"])(this.yearItems.map((function (e) { return e.year }))) } }, watch: { year() { this.yearIndex = this.year }, yearIndex(e) { this.yearGroupIndex = this.getYearGroupIndex(e) }, value() { this.focusFirstItem() } }, created() { this.yearIndex = this.year }, mounted() { this.focusFirstItem() }, methods: { focusFirstItem() { var e = this; this.$nextTick((function () { const t = e.$el.querySelector(".vc-nav-item:not(.is-disabled)"); t && t.focus() })) }, getItemClasses({ isActive: e, isCurrent: t, isDisabled: n }) { const r = ["vc-nav-item"]; return e ? r.push("is-active") : t && r.push("is-current"), n && r.push("is-disabled"), r }, getYearGroupIndex(e) { return Math.floor(e / qt) }, getMonthItems(e) { var t = this; const { month: n, year: r } = this.pageForDate(new Date); return this.locale.getMonthDates().map((function (a, o) { const i = o + 1; return { month: i, year: e, id: `${e}.${Object(ut["m"])(i, 2)}`, label: t.locale.format(a, t.masks.navMonths), ariaLabel: t.locale.format(a, "MMMM YYYY"), isActive: i === t.month && e === t.year, isCurrent: i === n && e === r, isDisabled: !t.validator({ month: i, year: e }), click: function () { return t.monthClick(i, e) } } })) }, getYearItems(e) { var t = this; const { _: n, year: r } = this.pageForDate(new Date), a = e * qt, o = a + qt, i = []; for (let s = a; s < o; s += 1) { let e = !1; for (let t = 1; t < 12; t++)if (e = this.validator({ month: t, year: s }), e) break; i.push({ year: s, id: s, label: s, ariaLabel: s, isActive: s === this.year, isCurrent: s === r, isDisabled: !e, click: function () { return t.yearClick(s) } }) } return i }, monthClick(e, t) { this.validator({ month: e, year: t }) && this.$emit("input", { month: e, year: t }) }, yearClick(e) { this.yearIndex = e, this.monthMode = !0, this.focusFirstItem() }, toggleMode() { this.monthMode = !this.monthMode }, movePrev() { this.prevItemsEnabled && (this.monthMode && this.movePrevYear(), this.movePrevYearGroup()) }, moveNext() { this.nextItemsEnabled && (this.monthMode && this.moveNextYear(), this.moveNextYearGroup()) }, movePrevYear() { this.yearIndex-- }, moveNextYear() { this.yearIndex++ }, movePrevYearGroup() { this.yearGroupIndex-- }, moveNextYearGroup() { this.yearGroupIndex++ } } }, Kt = Gt, Xt = (n("3c55"), ht(Kt, Nt, Ft, !1, null, null, null)), Jt = Xt.exports; function Qt(e) { document && document.dispatchEvent(new CustomEvent("show-popover", { detail: e })) } function en(e) { document && document.dispatchEvent(new CustomEvent("hide-popover", { detail: e })) } function tn(e) { document && document.dispatchEvent(new CustomEvent("toggle-popover", { detail: e })) } function nn(e) { document && document.dispatchEvent(new CustomEvent("update-popover", { detail: e })) } function rn(e) { const { visibility: t } = e, n = "click" === t, r = "hover" === t, a = "hover-focus" === t, o = "focus" === t; e.autoHide = !n; let i = !1, s = !1; return { click(t) { n && (e.ref = t.target, tn(e), t.stopPropagation()) }, mousemove(t) { e.ref = t.currentTarget, i || (i = !0, (r || a) && Qt(e)) }, mouseleave(t) { e.ref = t.target, i && (i = !1, (r || a && !s) && en(e)) }, focusin(t) { e.ref = t.currentTarget, s || (s = !0, (o || a) && Qt(e)) }, focusout(t) { e.ref = t.currentTarget, s && !Object(ut["e"])(e.ref, t.relatedTarget) && (s = !1, (o || a && !i) && en(e)) } } } var an, on, sn, cn, un, ln, dn, fn, pn = { name: "CalendarDay", mixins: [Et, Tt], render(e) { var t = this; const n = function () { return t.hasBackgrounds && e("div", { class: "vc-highlights vc-day-layer" }, t.backgrounds.map((function ({ key: t, wrapperClass: n, class: r, style: a }) { return e("div", { key: t, class: n }, [e("div", { class: r, style: a })]) }))) }, r = function () { return t.safeScopedSlot("day-content", { day: t.day, attributes: t.day.attributes, attributesMap: t.day.attributesMap, dayProps: t.dayContentProps, dayEvents: t.dayContentEvents }) || e("span", { class: t.dayContentClass, style: t.dayContentStyle, attrs: { ...t.dayContentProps }, on: t.dayContentEvents, ref: "content" }, [t.day.label]) }, a = function () { return t.hasDots && e("div", { class: "vc-day-layer vc-day-box-center-bottom" }, [e("div", { class: "vc-dots" }, t.dots.map((function ({ key: t, class: n, style: r }) { return e("span", { key: t, class: n, style: r }) })))]) }, o = function () { return t.hasBars && e("div", { class: "vc-day-layer vc-day-box-center-bottom" }, [e("div", { class: "vc-bars" }, t.bars.map((function ({ key: t, class: n, style: r }) { return e("span", { key: t, class: n, style: r }) })))]) }; return e("div", { class: ["vc-day", ...this.day.classes, { "vc-day-box-center-center": !this.$scopedSlots["day-content"] }, { "is-not-in-month": !this.inMonth }] }, [n(), r(), a(), o()]) }, inject: ["sharedState"], props: { day: { type: Object, required: !0 } }, data() { return { glyphs: {}, dayContentEvents: {} } }, computed: { label() { return this.day.label }, startTime() { return this.day.range.start.getTime() }, endTime() { return this.day.range.end.getTime() }, inMonth() { return this.day.inMonth }, isDisabled() { return this.day.isDisabled }, backgrounds() { return this.glyphs.backgrounds }, hasBackgrounds() { return !!Object(ut["b"])(this.backgrounds) }, content() { return this.glyphs.content }, dots() { return this.glyphs.dots }, hasDots() { return !!Object(ut["b"])(this.dots) }, bars() { return this.glyphs.bars }, hasBars() { return !!Object(ut["b"])(this.bars) }, popovers() { return this.glyphs.popovers }, hasPopovers() { return !!Object(ut["b"])(this.popovers) }, dayContentClass() { return ["vc-day-content vc-focusable", { "is-disabled": this.isDisabled }, Object(dt["d"])(Object(dt["p"])(this.content), "class") || ""] }, dayContentStyle() { return Object(dt["d"])(Object(dt["p"])(this.content), "style") }, dayContentProps() { let e; return this.day.isFocusable ? e = "0" : this.day.inMonth && (e = "-1"), { tabindex: e, "aria-label": this.day.ariaLabel, "aria-disabled": this.day.isDisabled ? "true" : "false", role: "button" } }, dayEvent() { return { ...this.day, el: this.$refs.content, popovers: this.popovers } } }, watch: { theme() { this.refresh() }, popovers() { this.refreshPopovers() } }, mounted() { this.refreshPopovers() }, methods: { getDayEvent(e) { return { ...this.dayEvent, event: e } }, click(e) { this.$emit("dayclick", this.getDayEvent(e)) }, mouseenter(e) { this.$emit("daymouseenter", this.getDayEvent(e)) }, mouseleave(e) { this.$emit("daymouseleave", this.getDayEvent(e)) }, focusin(e) { this.$emit("dayfocusin", this.getDayEvent(e)) }, focusout(e) { this.$emit("dayfocusout", this.getDayEvent(e)) }, keydown(e) { this.$emit("daykeydown", this.getDayEvent(e)) }, refresh() { var e = this; if (!this.day.refresh) return; this.day.refresh = !1; const t = { backgrounds: [], dots: [], bars: [], popovers: [], content: [] }; this.$set(this.day, "attributes", Object.values(this.day.attributesMap || {}).sort((function (e, t) { return e.order - t.order }))), this.day.attributes.forEach((function (n) { const { targetDate: r } = n, { isDate: a, isComplex: o, startTime: i, endTime: s } = r, c = e.startTime <= i, u = e.endTime >= s, l = c && u, d = c || u, f = { isDate: a, isComplex: o, onStart: c, onEnd: u, onStartAndEnd: l, onStartOrEnd: d }; e.processHighlight(n, f, t), e.processNonHighlight(n, "content", f, t.content), e.processNonHighlight(n, "dot", f, t.dots), e.processNonHighlight(n, "bar", f, t.bars), e.processPopover(n, t) })), this.glyphs = t }, processHighlight({ key: e, highlight: t }, { isDate: n, isComplex: r, onStart: a, onEnd: o, onStartAndEnd: i }, { backgrounds: s, content: c }) { if (!t) return; const { base: u, start: l, end: d } = t; n || r || i ? (s.push({ key: e, wrapperClass: "vc-day-layer vc-day-box-center-center", class: ["vc-highlight", l.class], style: l.style }), c.push({ key: e + "-content", class: l.contentClass, style: l.contentStyle })) : a ? (s.push({ key: e + "-base", wrapperClass: "vc-day-layer vc-day-box-right-center", class: ["vc-highlight vc-highlight-base-start", u.class], style: u.style }), s.push({ key: e, wrapperClass: "vc-day-layer vc-day-box-center-center", class: ["vc-highlight", l.class], style: l.style }), c.push({ key: e + "-content", class: l.contentClass, style: l.contentStyle })) : o ? (s.push({ key: e + "-base", wrapperClass: "vc-day-layer vc-day-box-left-center", class: ["vc-highlight vc-highlight-base-end", u.class], style: u.style }), s.push({ key: e, wrapperClass: "vc-day-layer vc-day-box-center-center", class: ["vc-highlight", d.class], style: d.style }), c.push({ key: e + "-content", class: d.contentClass, style: d.contentStyle })) : (s.push({ key: e + "-middle", wrapperClass: "vc-day-layer vc-day-box-center-center", class: ["vc-highlight vc-highlight-base-middle", u.class], style: u.style }), c.push({ key: e + "-content", class: u.contentClass, style: u.contentStyle })) }, processNonHighlight(e, t, { isDate: n, onStart: r, onEnd: a }, o) { if (!e[t]) return; const { key: i } = e, s = "vc-" + t, { base: c, start: u, end: l } = e[t]; n || r ? o.push({ key: i, class: [s, u.class], style: u.style }) : a ? o.push({ key: i, class: [s, l.class], style: l.style }) : o.push({ key: i, class: [s, c.class], style: c.style }) }, processPopover(e, { popovers: t }) { const { key: n, customData: r, popover: a } = e; if (!a) return; const o = Object(dt["b"])({ key: n, customData: r, attribute: e }, { ...a }, { visibility: a.label ? "hover" : "click", placement: "bottom", isInteractive: !a.label }); t.splice(0, 0, o) }, refreshPopovers() { let e = {}; Object(ut["b"])(this.popovers) && (e = rn(Object(dt["b"])({ id: this.dayPopoverId, data: this.day }, ...this.popovers))), this.dayContentEvents = Object(ut["h"])({ click: this.click, mouseenter: this.mouseenter, mouseleave: this.mouseleave, focusin: this.focusin, focusout: this.focusout, keydown: this.keydown }, e), nn({ id: this.dayPopoverId, data: this.day }) } } }, hn = pn, vn = (n("ea80"), ht(hn, an, on, !1, null, "005dafc8", null)), bn = vn.exports, mn = { name: "CalendarPane", mixins: [Et, Tt], render(e) { var t = this; const n = this.safeScopedSlot("header", this.page) || e("div", { class: "vc-header align-" + this.titlePosition }, [e("div", { class: "vc-title", on: this.navPopoverEvents }, [this.safeScopedSlot("header-title", this.page, this.page.title)])]), r = this.weekdayLabels.map((function (t, n) { return e("div", { key: n + 1, class: "vc-weekday" }, [t]) })), a = this.showWeeknumbers_.startsWith("left"), o = this.showWeeknumbers_.startsWith("right"); a ? r.unshift(e("div", { class: "vc-weekday" })) : o && r.push(e("div", { class: "vc-weekday" })); const i = function (n) { return e("div", { class: ["vc-weeknumber"] }, [e("span", { class: ["vc-weeknumber-content", "is-" + t.showWeeknumbers_], on: { click: function (e) { t.$emit("weeknumberclick", { weeknumber: n, days: t.page.days.filter((function (e) { return e[t.weeknumberKey] === n })), event: e }) } } }, [n])]) }, s = [], { daysInWeek: c } = this.locale; this.page.days.forEach((function (n, r) { const u = r % c; (a && 0 === u || o && u === c) && s.push(i(n[t.weeknumberKey])), s.push(e(bn, { attrs: { day: n }, on: { ...t.$listeners }, scopedSlots: t.$scopedSlots, key: n.id, ref: "days", refInFor: !0 })), o && u === c - 1 && s.push(i(n[t.weeknumberKey])) })); const u = e("div", { class: { "vc-weeks": !0, "vc-show-weeknumbers": this.showWeeknumbers_, "is-left": a, "is-right": o } }, [r, s]); return e("div", { class: ["vc-pane", "row-from-end-" + this.rowFromEnd, "column-from-end-" + this.columnFromEnd], ref: "pane" }, [n, u]) }, inheritAttrs: !1, props: { page: Object, position: Number, row: Number, rowFromEnd: Number, column: Number, columnFromEnd: Number, titlePosition: String, navVisibility: String, showWeeknumbers: [Boolean, String], showIsoWeeknumbers: [Boolean, String] }, computed: { weeknumberKey() { return this.showWeeknumbers ? "weeknumber" : "isoWeeknumber" }, showWeeknumbers_() { const e = this.showWeeknumbers || this.showIsoWeeknumbers; return null == e ? "" : Object(dt["i"])(e) ? e ? "left" : "" : e.startsWith("right") ? this.columnFromEnd > 1 ? "right" : e : this.column > 1 ? "left" : e }, navVisibility_() { return this.propOrDefault("navVisibility", "navVisibility") }, navPlacement() { switch (this.titlePosition) { case "left": return "bottom-start"; case "right": return "bottom-end"; default: return "bottom" } }, navPopoverEvents() { const { sharedState: e, navVisibility_: t, navPlacement: n, page: r, position: a } = this; return rn({ id: e.navPopoverId, visibility: t, placement: n, modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }], data: { page: r, position: a }, isInteractive: !0 }) }, weekdayLabels() { var e = this; return this.locale.getWeekdayDates().map((function (t) { return e.format(t, e.masks.weekdays) })) } }, methods: { refresh() { this.$refs.days.forEach((function (e) { return e.refresh() })) } } }, gn = mn, yn = (n("f7c3"), n("4889"), ht(gn, sn, cn, !1, null, "37fb1233", null)), wn = yn.exports, xn = { name: "CustomTransition", render(e) { return e("transition", { props: { name: this.name_, appear: this.appear }, on: { beforeEnter: this.beforeEnter, afterEnter: this.afterEnter } }, [this.$slots.default]) }, props: { name: String, appear: Boolean }, computed: { name_() { return this.name || "none" } }, methods: { beforeEnter(e) { this.$emit("beforeEnter", e), this.$emit("beforeTransition", e) }, afterEnter(e) { this.$emit("afterEnter", e), this.$emit("afterTransition", e) } } }, Dn = xn, jn = (n("e76f"), ht(Dn, un, ln, !1, null, "8466592e", null)), On = jn.exports, kn = n("9349"), Mn = (n("3ee2"), { name: "Calendar", render(e) { var t = this; const n = this.pages.map((function (n, r) { const a = r + 1, o = Math.ceil((r + 1) / t.columns), i = t.rows - o + 1, s = a % t.columns || t.columns, c = t.columns - s + 1; return e(wn, { attrs: { ...t.$attrs, attributes: t.store }, props: { page: n, position: a, row: o, rowFromEnd: i, column: s, columnFromEnd: c, titlePosition: t.titlePosition_ }, on: { ...t.$listeners, dayfocusin: function (e) { t.lastFocusedDay = e, t.$emit("dayfocusin", e) }, dayfocusout: function (e) { t.lastFocusedDay = null, t.$emit("dayfocusout", e) } }, scopedSlots: t.$scopedSlots, key: n.key, ref: "pages", refInFor: !0 }) })), r = function (n) { const r = function () { return t.move(n ? -t.step_ : t.step_) }, a = function (e) { return Object(ut["l"])(e, r) }, o = n ? !t.canMovePrev : !t.canMoveNext; return e("div", { class: ["vc-arrow", "is-" + (n ? "left" : "right"), { "is-disabled": o }], attrs: { role: "button" }, on: { click: r, keydown: a } }, [(n ? t.safeScopedSlot("header-left-button", { click: r }) : t.safeScopedSlot("header-right-button", { click: r })) || e(Zt, { props: { name: n ? "left-arrow" : "right-arrow" } })]) }, a = function () { return e(bt, { props: { id: t.sharedState.navPopoverId, contentClass: "vc-nav-popover-container" }, ref: "navPopover", scopedSlots: { default: function ({ data: n }) { const { position: r, page: a } = n; return e(Jt, { props: { value: a, position: r, validator: function (e) { return t.canMove(e, { position: r }) } }, on: { input: function (e) { return t.move(e, { position: r }) } }, scopedSlots: t.$scopedSlots }) } } }) }, o = function () { return e(bt, { props: { id: t.sharedState.dayPopoverId, contentClass: "vc-day-popover-container" }, scopedSlots: { default: function ({ data: n, updateLayout: r, hide: a }) { const o = Object.values(n.attributes).filter((function (e) { return e.popover })), i = t.$locale.masks, s = t.formatDate, c = s(n.date, i.dayPopover); return t.safeScopedSlot("day-popover", { day: n, attributes: o, masks: i, format: s, dayTitle: c, updateLayout: r, hide: a }) || e("div", [i.dayPopover && e("div", { class: ["vc-day-popover-header"] }, [c]), o.map((function (t) { return e(At, { key: t.key, props: { attribute: t } }) }))]) } } }) }; return e("div", { attrs: { "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, class: ["vc-container", "vc-" + this.$theme.color, { "vc-is-expanded": this.isExpanded, "vc-is-dark": this.$theme.isDark }], on: { keydown: this.handleKeydown, mouseup: function (e) { return e.preventDefault() } }, ref: "container" }, [a(), e("div", { class: ["vc-pane-container", { "in-transition": this.inTransition }] }, [e(On, { props: { name: this.transitionName }, on: { beforeEnter: function () { t.inTransition = !0 }, afterEnter: function () { t.inTransition = !1 } } }, [e("div", { class: "vc-pane-layout", style: { gridTemplateColumns: `repeat(${this.columns}, 1fr)` }, attrs: { ...this.$attrs }, key: Object(ut["b"])(this.pages) ? this.pages[0].key : "" }, n)]), e("div", { class: ["vc-arrows-container title-" + this.titlePosition_] }, [r(!0), r(!1)]), this.$scopedSlots.footer && this.$scopedSlots.footer()]), o()]) }, mixins: [_t, Tt], provide() { return { sharedState: this.sharedState } }, props: { rows: { type: Number, default: 1 }, columns: { type: Number, default: 1 }, step: Number, titlePosition: String, isExpanded: Boolean, fromDate: Date, toDate: Date, fromPage: Object, toPage: Object, minPage: Object, maxPage: Object, transition: String, attributes: [Object, Array], trimWeeks: Boolean, disablePageSwipe: Boolean }, data() { return { pages: [], store: null, lastFocusedDay: null, focusableDay: (new Date).getDate(), transitionName: "", inTransition: !1, sharedState: { navPopoverId: Object(ut["c"])(), dayPopoverId: Object(ut["c"])(), theme: {}, masks: {}, locale: {} } } }, computed: { titlePosition_() { return this.propOrDefault("titlePosition", "titlePosition") }, firstPage() { return Object(dt["g"])(this.pages) }, lastPage() { return Object(dt["p"])(this.pages) }, minPage_() { return this.minPage || this.pageForDate(this.minDate) }, maxPage_() { return this.maxPage || this.pageForDate(this.maxDate) }, count() { return this.rows * this.columns }, step_() { return this.step || this.count }, canMovePrev() { return this.canMove(-this.step_) }, canMoveNext() { return this.canMove(this.step_) } }, watch: { $locale() { this.refreshLocale(), this.refreshPages({ page: this.firstPage, ignoreCache: !0 }), this.initStore() }, $theme() { this.refreshTheme(), this.initStore() }, fromDate() { this.refreshPages() }, fromPage(e) { const t = this.pages && this.pages[0]; Object(ut["q"])(e, t) || this.refreshPages() }, toPage(e) { const t = this.pages && this.pages[this.pages.length - 1]; Object(ut["q"])(e, t) || this.refreshPages() }, count() { this.refreshPages() }, attributes(e) { const { adds: t, deletes: n } = this.store.refresh(e); this.refreshAttrs(this.pages, t, n) }, pages(e) { this.refreshAttrs(e, this.store.list, null, !0) }, disabledAttribute() { this.refreshDisabledDays() }, lastFocusedDay(e) { e && (this.focusableDay = e.day, this.refreshFocusableDays()) }, inTransition(e) { e ? this.$emit("transition-start") : (this.$emit("transition-end"), this.transitionPromise && (this.transitionPromise.resolve(!0), this.transitionPromise = null)) } }, created() { this.refreshLocale(), this.refreshTheme(), this.initStore(), this.refreshPages() }, mounted() { var e = this; if (!this.disablePageSwipe) { const t = Object(lt["a"])(this.$refs.container, (function ({ toLeft: t, toRight: n }) { t ? e.moveNext() : n && e.movePrev() }), this.$defaults.touch); this.$once("beforeDestroy", (function () { return t() })) } }, methods: { refreshLocale() { this.sharedState.locale = this.$locale, this.sharedState.masks = this.$locale.masks }, refreshTheme() { this.sharedState.theme = this.$theme }, canMove(e, t = {}) { var n = this; const r = this.$locale.toPage(e, this.firstPage); let { position: a } = t; if (Object(dt["l"])(e) && (a = 1), !r) return Promise.reject(new Error("Invalid argument provided: " + e)); if (!a) if (Object(ut["o"])(r, this.firstPage)) a = -1; else { if (!Object(ut["n"])(r, this.lastPage)) return Promise.resolve(!0); a = 1 } return Object.assign(t, this.getTargetPageRange(r, { position: a, force: !0 })), Object(ut["s"])(t.fromPage, t.toPage).some((function (e) { return Object(ut["p"])(e, n.minPage_, n.maxPage_) })) }, movePrev(e) { return this.move(-this.step_, e) }, moveNext(e) { return this.move(this.step_, e) }, move(e, t = {}) { const n = this.canMove(e, t); return t.force || n ? (this.$refs.navPopover.hide({ hideDelay: 0 }), t.fromPage && !Object(ut["q"])(t.fromPage, this.firstPage) ? this.refreshPages({ ...t, page: t.fromPage, position: 1, force: !0 }) : Promise.resolve(!0)) : Promise.reject(new Error("Move target is disabled: " + JSON.stringify(t))) }, focusDate(e, t = {}) { var n = this; return this.move(e, t).then((function () { const t = n.$el.querySelector(`.id-${n.$locale.getDayId(e)}.in-month .vc-focusable`); return t ? (t.focus(), Promise.resolve(!0)) : Promise.resolve(!1) })) }, showPageRange(e, t) { let n, r; if (Object(dt["j"])(e)) n = this.pageForDate(e); else { if (!Object(dt["m"])(e)) return Promise.reject(new Error("Invalid page range provided.")); { const { month: t, year: a } = e, { from: o, to: i } = e; Object(dt["l"])(t) && Object(dt["l"])(a) ? n = e : (o || i) && (n = Object(dt["j"])(o) ? this.pageForDate(o) : o, r = Object(dt["j"])(i) ? this.pageForDate(i) : i) } } const a = this.lastPage; let o = n; return Object(ut["n"])(r, a) && (o = Object(ut["a"])(r, -(this.pages.length - 1))), Object(ut["o"])(o, n) && (o = n), this.refreshPages({ ...t, page: o }) }, getTargetPageRange(e, { position: t, force: n } = {}) { let r = null, a = null; if (Object(ut["r"])(e)) { let n = 0; t = +t, isNaN(t) || (n = t > 0 ? 1 - t : -(this.count + t)), r = Object(ut["a"])(e, n) } else r = this.getDefaultInitialPage(); return a = Object(ut["a"])(r, this.count - 1), n || (Object(ut["o"])(r, this.minPage_) ? r = this.minPage_ : Object(ut["n"])(a, this.maxPage_) && (r = Object(ut["a"])(this.maxPage_, 1 - this.count)), a = Object(ut["a"])(r, this.count - 1)), { fromPage: r, toPage: a } }, getDefaultInitialPage() { let e = this.fromPage || this.pageForDate(this.fromDate); if (!Object(ut["r"])(e)) { const t = this.toPage || this.pageForDate(this.toPage); Object(ut["r"])(t) && (e = Object(ut["a"])(t, 1 - this.count)) } return Object(ut["r"])(e) || (e = this.getPageForAttributes()), Object(ut["r"])(e) || (e = this.pageForThisMonth()), e }, refreshPages({ page: e, position: t = 1, force: n, transition: r, ignoreCache: a } = {}) { var o = this; return new Promise((function (i, s) { const { fromPage: c, toPage: u } = o.getTargetPageRange(e, { position: t, force: n }), l = []; for (let e = 0; e < o.count; e++)l.push(o.buildPage(Object(ut["a"])(c, e), a)); o.refreshDisabledDays(l), o.refreshFocusableDays(l), o.transitionName = o.getPageTransition(o.pages[0], l[0], r), o.pages = l, o.$emit("update:from-page", c), o.$emit("update:to-page", u), o.transitionName && "none" !== o.transitionName ? o.transitionPromise = { resolve: i, reject: s } : i(!0) })) }, refreshDisabledDays(e) { var t = this; this.getPageDays(e).forEach((function (e) { e.isDisabled = !!t.disabledAttribute && t.disabledAttribute.intersectsDay(e) })) }, refreshFocusableDays(e) { var t = this; this.getPageDays(e).forEach((function (e) { e.isFocusable = e.inMonth && e.day === t.focusableDay })) }, getPageDays(e = this.pages) { return e.reduce((function (e, t) { return e.concat(t.days) }), []) }, getPageTransition(e, t, n = this.transition) { if ("none" === n) return n; if ("fade" === n || !n && this.count > 1 || !Object(ut["r"])(e) || !Object(ut["r"])(t)) return "fade"; const r = Object(ut["o"])(t, e); return "slide-v" === n ? r ? "slide-down" : "slide-up" : r ? "slide-right" : "slide-left" }, getPageForAttributes() { let e = null; const t = this.store.pinAttr; if (t && t.hasDates) { let [n] = t.dates; n = n.start || n.date, e = this.pageForDate(n) } return e }, buildPage({ month: e, year: t }, n) { var r = this; const a = `${t.toString()}-${e.toString()}`; let o = this.pages.find((function (e) { return e.key === a })); if (!o || n) { const n = new Date(t, e - 1, 15), i = this.$locale.getMonthComps(e, t), s = this.$locale.getPrevMonthComps(e, t), c = this.$locale.getNextMonthComps(e, t); o = { key: a, month: e, year: t, weeks: this.trimWeeks ? i.weeks : 6, title: this.$locale.format(n, this.$locale.masks.title), shortMonthLabel: this.$locale.format(n, "MMM"), monthLabel: this.$locale.format(n, "MMMM"), shortYearLabel: t.toString().substring(2), yearLabel: t.toString(), monthComps: i, prevMonthComps: s, nextMonthComps: c, canMove: function (e) { return r.canMove(e) }, move: function (e) { return r.move(e) }, moveThisMonth: function () { return r.moveThisMonth() }, movePrevMonth: function () { return r.move(s) }, moveNextMonth: function () { return r.move(c) }, refresh: !0 }, o.days = this.$locale.getCalendarDays(o) } return o }, initStore() { this.store = new kn["a"](this.$theme, this.$locale, this.attributes), this.refreshAttrs(this.pages, this.store.list, [], !0) }, refreshAttrs(e = [], t = [], n = [], r) { var a = this; Object(ut["b"])(e) && (e.forEach((function (e) { e.days.forEach((function (e) { let a = {}; r ? e.refresh = !0 : Object(dt["f"])(e.attributesMap, n) ? (a = Object(dt["s"])(e.attributesMap, n), e.refresh = !0) : a = e.attributesMap || {}, t.forEach((function (t) { const n = t.intersectsDay(e); if (n) { const r = { ...t, targetDate: n }; a[t.key] = r, e.refresh = !0 } })), e.refresh && (e.attributesMap = a) })) })), this.$nextTick((function () { a.$refs.pages.forEach((function (e) { return e.refresh() })) }))) }, handleKeydown(e) { const t = this.lastFocusedDay; null != t && (t.event = e, this.handleDayKeydown(t)) }, handleDayKeydown(e) { const { dateFromTime: t, event: n } = e, a = t(12); let o = null; switch (n.key) { case "ArrowLeft": o = Object(r["a"])(a, -1); break; case "ArrowRight": o = Object(r["a"])(a, 1); break; case "ArrowUp": o = Object(r["a"])(a, -7); break; case "ArrowDown": o = Object(r["a"])(a, 7); break; case "Home": o = Object(r["a"])(a, 1 - e.weekdayPosition); break; case "End": o = Object(r["a"])(a, e.weekdayPositionFromEnd); break; case "PageUp": o = n.altKey ? c(a, -1) : s(a, -1); break; case "PageDown": o = n.altKey ? c(a, 1) : s(a, 1); break }o && (n.preventDefault(), this.focusDate(o).catch((function () { }))) } } }), Pn = Mn, Sn = (n("de5e"), ht(Pn, dn, fn, !1, null, null, null)), Yn = Sn.exports, En = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n("div", { staticClass: "vc-time-picker", class: [{ "vc-disabled": e.isDisabled, "vc-bordered": e.showBorder }] }, [n("div", [n("svg", { staticClass: "vc-time-icon", attrs: { fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", viewBox: "0 0 24 24", stroke: "currentColor" } }, [n("path", { attrs: { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" } })])]), n("div", { staticClass: "vc-date-time" }, [e.date ? n("div", { staticClass: "vc-date" }, [n("span", { staticClass: "vc-weekday" }, [e._v(" " + e._s(e.locale.format(e.date, "WWW")) + " ")]), n("span", { staticClass: "vc-month" }, [e._v(" " + e._s(e.locale.format(e.date, "MMM")) + " ")]), n("span", { staticClass: "vc-day" }, [e._v(" " + e._s(e.locale.format(e.date, "D")) + " ")]), n("span", { staticClass: "vc-year" }, [e._v(" " + e._s(e.locale.format(e.date, "YYYY")) + " ")])]) : e._e(), n("div", { staticClass: "vc-time" }, [n("time-select", { attrs: { options: e.hourOptions }, model: { value: e.hours, callback: function (t) { e.hours = e._n(t) }, expression: "hours" } }), n("span", { staticStyle: { margin: "0 4px" } }, [e._v(":")]), n("time-select", { attrs: { options: e.minuteOptions }, model: { value: e.minutes, callback: function (t) { e.minutes = e._n(t) }, expression: "minutes" } }), e.is24hr ? e._e() : n("div", { staticClass: "vc-am-pm", class: { "vc-disabled": !(e.hours >= 0) } }, [n("button", { class: { active: e.isAM }, attrs: { type: "button" }, on: { click: function (t) { t.preventDefault(), e.isAM = !0 } } }, [e._v(" AM ")]), n("button", { class: { active: !e.isAM }, attrs: { type: "button" }, on: { click: function (t) { t.preventDefault(), e.isAM = !1 } } }, [e._v(" PM ")])])], 1)])]) }, _n = [], Tn = function () { var e = this, t = e.$createElement, n = e._self._c || t; return n("div", { staticClass: "vc-select" }, [n("select", e._b({ on: { change: function (t) { return e.$emit("input", t.target.value) } } }, "select", e.$attrs, !1), e._l(e.options, (function (t) { return n("option", { key: t.value, attrs: { disabled: t.disabled }, domProps: { value: t.value } }, [e._v(e._s(t.label))]) })), 0), n("div", { staticClass: "vc-select-arrow" }, [n("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" } }, [n("path", { attrs: { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" } })])])]) }, In = [], Cn = { inheritAttrs: !1, props: { options: Array } }, $n = Cn, An = (n("3c06"), ht($n, Tn, In, !1, null, "d1c68c60", null)), Nn = An.exports, Fn = { name: "TimePicker", components: { TimeSelect: Nn }, props: { value: { type: Object, required: !0 }, locale: { type: Object, required: !0 }, theme: { type: Object, required: !0 }, is24hr: { type: Boolean, default: !0 }, minuteIncrement: { type: Number, default: 1 }, showBorder: Boolean, isDisabled: Boolean }, data() { return { hours: 0, minutes: 0, isAM: !0 } }, computed: { date() { let e = this.locale.normalizeDate(this.value); return 24 === this.value.hours && (e = new Date(e.getTime() - 1)), e }, hourOptions() { const e = [{ value: 0, label: "12" }, { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" }, { value: 5, label: "5" }, { value: 6, label: "6" }, { value: 7, label: "7" }, { value: 8, label: "8" }, { value: 9, label: "9" }, { value: 10, label: "10" }, { value: 11, label: "11" }], t = [{ value: 0, label: "00" }, { value: 1, label: "01" }, { value: 2, label: "02" }, { value: 3, label: "03" }, { value: 4, label: "04" }, { value: 5, label: "05" }, { value: 6, label: "06" }, { value: 7, label: "07" }, { value: 8, label: "08" }, { value: 9, label: "09" }, { value: 10, label: "10" }, { value: 11, label: "11" }, { value: 12, label: "12" }, { value: 13, label: "13" }, { value: 14, label: "14" }, { value: 15, label: "15" }, { value: 16, label: "16" }, { value: 17, label: "17" }, { value: 18, label: "18" }, { value: 19, label: "19" }, { value: 20, label: "20" }, { value: 21, label: "21" }, { value: 22, label: "22" }, { value: 23, label: "23" }]; return this.is24hr ? t : e }, minuteOptions() { const e = []; let t = 0, n = !1; while (t <= 59) e.push({ value: t, label: Object(ut["m"])(t, 2) }), n = n || t === this.minutes, t += this.minuteIncrement, !n && t > this.minutes && (n = !0, e.push({ value: this.minutes, label: Object(ut["m"])(this.minutes, 2), disabled: !0 })); return e } }, watch: { value() { this.setup() }, hours() { this.updateValue() }, minutes() { this.updateValue() }, isAM() { this.updateValue() } }, created() { this.setup() }, methods: { protected(e) { var t = this; this.busy || (this.busy = !0, e(), this.$nextTick((function () { return t.busy = !1 }))) }, setup() { var e = this; this.protected((function () { let { hours: t } = e.value; 24 === t && (t = 0); let n = !0; !e.is24hr && t >= 12 && (t -= 12, n = !1), e.hours = t, e.minutes = e.value.minutes, e.isAM = n })) }, updateValue() { var e = this; this.protected((function () { let t = e.hours; e.is24hr || e.isAM || (t += 12), e.$emit("input", { ...e.value, hours: t, minutes: e.minutes, seconds: 0, milliseconds: 0 }) })) } } }, zn = Fn, Ln = (n("d458"), ht(zn, En, _n, !1, null, "ee473b46", null)), Hn = Ln.exports; const Rn = { type: "auto", mask: "iso", timeAdjust: "" }, Wn = { start: { ...Rn }, end: { ...Rn } }, Vn = { DATE: "date", DATE_TIME: "datetime", TIME: "time" }, Un = { NONE: 0, START: 1, END: 2, BOTH: 3 }; var Bn, Zn, qn = { name: "DatePicker", render(e) { var t = this; const n = function () { if (!t.dateParts) return null; const n = t.isRange ? t.dateParts : [t.dateParts[0]]; return e("div", [...n.map((function (n, r) { return e(Hn, { props: { value: n, locale: t.$locale, theme: t.$theme, is24hr: t.is24hr, minuteIncrement: t.minuteIncrement, showBorder: !t.isTime, isDisabled: t.isDateTime && !n.isValid || t.isDragging }, on: { input: function (e) { return t.onTimeInput(e, 0 === r) } } }) })), t.$scopedSlots.footer && t.$scopedSlots.footer()]) }, r = function () { return e(Yn, { attrs: { ...t.$attrs, attributes: t.attributes_, theme: t.$theme, locale: t.$locale }, props: { minDate: t.minDateExact || t.minDate, maxDate: t.maxDateExact || t.maxDate, disabledDates: t.disabledDates, availableDates: t.availableDates }, on: { ...t.$listeners, dayclick: t.onDayClick, daykeydown: t.onDayKeydown, daymouseenter: t.onDayMouseEnter }, scopedSlots: { ...t.$scopedSlots, footer: t.isDateTime ? n : t.$scopedSlots.footer }, ref: "calendar" }) }, a = function () { return t.isTime ? e("div", { class: ["vc-container", "vc-" + t.$theme.color, { "vc-is-dark": t.$theme.isDark }] }, [n()]) : r() }; return this.$scopedSlots.default && e("span", [this.$scopedSlots.default(this.slotArgs), e(bt, { props: { id: this.datePickerPopoverId, placement: "bottom-start", contentClass: "vc-container" + (this.isDark ? " vc-is-dark" : "") }, on: { beforeShow: function (e) { return t.$emit("popoverWillShow", e) }, afterShow: function (e) { return t.$emit("popoverDidShow", e) }, beforeHide: function (e) { return t.$emit("popoverWillHide", e) }, afterHide: function (e) { return t.$emit("popoverDidHide", e) } }, scopedSlots: { default() { return a() } }, ref: "popover" })]) || a() }, mixins: [_t], props: { mode: { type: String, default: Vn.DATE }, value: { type: null, required: !0 }, modelConfig: { type: Object, default: function () { return { ...Rn } } }, is24hr: Boolean, minuteIncrement: Number, isRequired: Boolean, isRange: Boolean, updateOnInput: Boolean, inputDebounce: Number, popover: { type: Object, default: function () { return {} } }, dragAttribute: Object, selectAttribute: Object, attributes: Array }, data() { return { value_: null, dateParts: null, activeDate: "", dragValue: null, inputValues: ["", ""], updateTimeout: null, watchValue: !0, datePickerPopoverId: Object(ut["c"])() } }, computed: { updateOnInput_() { return this.propOrDefault("updateOnInput", "datePicker.updateOnInput") }, inputDebounce_() { return this.propOrDefault("inputDebounce", "datePicker.inputDebounce") }, isDate() { return this.mode.toLowerCase() === Vn.DATE }, isDateTime() { return this.mode.toLowerCase() === Vn.DATE_TIME }, isTime() { return this.mode.toLowerCase() === Vn.TIME }, isDragging() { return !!this.dragValue }, modelConfig_() { return this.isRange ? { start: { ...Wn.start, ...this.modelConfig.start || this.modelConfig }, end: { ...Wn.end, ...this.modelConfig.end || this.modelConfig } } : { ...Rn, ...this.modelConfig } }, inputMask() { const e = this.$locale.masks; return this.isTime ? this.is24hr ? e.inputTime24hr : e.inputTime : this.isDateTime ? this.is24hr ? e.inputDateTime24hr : e.inputDateTime : this.$locale.masks.input }, inputMaskHasTime() { return /[Hh]/g.test(this.inputMask) }, inputMaskHasDate() { return /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(this.inputMask) }, inputMaskPatch() { return this.inputMaskHasTime && this.inputMaskHasDate ? kt["a"].DATE_TIME : this.inputMaskHasDate ? kt["a"].DATE : this.inputMaskHasTime ? kt["a"].TIME : void 0 }, slotArgs() { var e = this; const { isRange: t, isDragging: n, updateValue: r, showPopover: a, hidePopover: o, togglePopover: i } = this, s = t ? { start: this.inputValues[0], end: this.inputValues[1] } : this.inputValues[0], c = [!0, !1].map((function (t) { return { input: e.onInputInput(t), change: e.onInputChange(t), keyup: e.onInputKeyup, ...rn({ ...e.popover_, id: e.datePickerPopoverId, callback: function (n) { "show" === n.action && n.completed && e.onInputShow(t) } }) } })), u = t ? { start: c[0], end: c[1] } : c[0]; return { inputValue: s, inputEvents: u, isDragging: n, updateValue: r, showPopover: a, hidePopover: o, togglePopover: i, getPopoverTriggerEvents: rn } }, popover_() { return this.propOrDefault("popover", "datePicker.popover", "merge") }, selectAttribute_() { if (!this.hasValue(this.value_)) return null; const e = { key: "select-drag", ...this.selectAttribute, dates: this.value_, pinPage: !0 }, { dot: t, bar: n, highlight: r, content: a } = e; return t || n || r || a || (e.highlight = !0), e }, dragAttribute_() { if (!this.isRange || !this.hasValue(this.dragValue)) return null; const e = { key: "select-drag", ...this.dragAttribute, dates: this.dragValue }, { dot: t, bar: n, highlight: r, content: a } = e; return t || n || r || a || (e.highlight = { startEnd: { fillMode: "outline" } }), e }, attributes_() { const e = Object(dt["h"])(this.attributes) ? [...this.attributes] : []; return this.dragAttribute_ ? e.push(this.dragAttribute_) : this.selectAttribute_ && e.push(this.selectAttribute_), e } }, watch: { inputMask() { this.formatInput() }, value() { this.watchValue && this.forceUpdateValue(this.value, { config: this.modelConfig_, notify: !1, formatInput: !0, hidePopover: !1 }) }, value_() { this.refreshDateParts() }, dragValue() { this.refreshDateParts() }, timezone() { this.refreshDateParts(), this.forceUpdateValue(this.value_, { notify: !0, formatInput: !0 }) } }, created() { this.forceUpdateValue(this.value, { config: this.modelConfig_, notify: !1, formatInput: !0, hidePopover: !1 }), this.refreshDateParts() }, mounted() { var e = this; Object(ut["k"])(document, "keydown", this.onDocumentKeyDown); const t = Object(lt["b"])(document, (function (t) { document.body.contains(t.target) && !Object(ut["e"])(e.$el, t.target) && (e.dragValue = null, e.formatInput()) })); this.$once("beforeDestroy", (function () { Object(ut["j"])(document, "keydown", e.onDocumentKeyDown), t() })) }, methods: { getDateParts(e) { return this.$locale.getDateParts(e) }, getDateFromParts(e) { return this.$locale.getDateFromParts(e) }, refreshDateParts() { var e = this; const t = this.dragValue || this.value_, n = []; this.isRange ? (t && t.start ? n.push(this.getDateParts(t.start)) : n.push({}), t && t.end ? n.push(this.getDateParts(t.end)) : n.push({})) : t ? n.push(this.getDateParts(t)) : n.push({}), this.$nextTick((function () { return e.dateParts = n })) }, onDocumentKeyDown(e) { this.dragValue && "Escape" === e.key && (this.dragValue = null) }, onDayClick(e) { this.handleDayClick(e), this.$emit("dayclick", e) }, onDayKeydown(e) { switch (e.event.key) { case " ": case "Enter": this.handleDayClick(e), e.event.preventDefault(); break; case "Escape": this.hidePopover() }this.$emit("daykeydown", e) }, handleDayClick(e) { const { keepVisibleOnInput: t, visibility: n } = this.popover_, r = { patch: kt["a"].DATE, adjustTime: !0, formatInput: !0, hidePopover: this.isDate && !t && "visible" !== n }; this.isRange ? (this.isDragging ? this.dragTrackingValue.end = e.date : this.dragTrackingValue = { ...e.range }, r.isDragging = !this.isDragging, r.rangePriority = r.isDragging ? Un.NONE : Un.BOTH, r.hidePopover = r.hidePopover && !r.isDragging, this.updateValue(this.dragTrackingValue, r)) : (r.clearIfEqual = !this.isRequired, this.updateValue(e.date, r)) }, onDayMouseEnter(e) { this.isDragging && (this.dragTrackingValue.end = e.date, this.updateValue(this.dragTrackingValue, { patch: kt["a"].DATE, adjustTime: !0, formatInput: !0, hidePopover: !1, rangePriority: Un.NONE })) }, onTimeInput(e, t) { var n = this; let r = null; if (this.isRange) { const n = t ? e : this.dateParts[0], a = t ? this.dateParts[1] : e; r = { start: n, end: a } } else r = e; this.updateValue(r, { patch: kt["a"].TIME, rangePriority: t ? Un.START : Un.END }).then((function () { return n.adjustPageRange(t) })) }, onInputInput(e) { var t = this; return function (n) { t.updateOnInput_ && t.onInputUpdate(n.target.value, e, { formatInput: !1, hidePopover: !1, debounce: t.inputDebounce_ }) } }, onInputChange(e) { var t = this; return function (n) { t.onInputUpdate(n.target.value, e, { formatInput: !0, hidePopover: !1 }) } }, onInputUpdate(e, t, n) { var r = this; this.inputValues.splice(t ? 0 : 1, 1, e); const a = this.isRange ? { start: this.inputValues[0], end: this.inputValues[1] || this.inputValues[0] } : e, o = { type: "string", mask: this.inputMask }; this.updateValue(a, { ...n, config: o, patch: this.inputMaskPatch, rangePriority: t ? Un.START : Un.END }).then((function () { return r.adjustPageRange(t) })) }, onInputShow(e) { this.adjustPageRange(e) }, onInputKeyup(e) { "Escape" === e.key && this.updateValue(this.value_, { formatInput: !0, hidePopover: !0 }) }, updateValue(e, t = {}) { var n = this; return clearTimeout(this.updateTimeout), new Promise((function (r) { const { debounce: a, ...o } = t; a > 0 ? n.updateTimeout = setTimeout((function () { n.forceUpdateValue(e, o), r(n.value_) }), a) : (n.forceUpdateValue(e, o), r(n.value_)) })) }, forceUpdateValue(e, { config: t = this.modelConfig_, patch: n = kt["a"].DATE_TIME, notify: r = !0, clearIfEqual: a = !1, formatInput: o = !0, hidePopover: i = !1, adjustTime: s = !1, isDragging: c = this.isDragging, rangePriority: u = Un.BOTH } = {}) { var l = this; let d = this.normalizeValue(e, t, n, u); !d && this.isRequired && (d = this.value_), s && (d = this.adjustTimeForValue(d, t)); const f = this.valueIsDisabled(d); if (f) { if (c) return; d = this.value_, i = !1 } const p = c ? "dragValue" : "value_"; let h = !this.valuesAreEqual(this[p], d); if (f || h || !a || (d = null, h = !0), h && (this.$set(this, p, d), c || (this.dragValue = null)), r && h) { const e = this.denormalizeValue(d), t = this.isDragging ? "drag" : "input"; this.watchValue = !1, this.$emit(t, e), this.$nextTick((function () { return l.watchValue = !0 })) } i && this.hidePopover(), o && this.formatInput() }, hasValue(e) { return this.isRange ? Object(dt["m"])(e) && e.start && e.end : !!e }, normalizeValue(e, t, n, r) { if (!this.hasValue(e)) return null; if (this.isRange) { const a = {}, o = e.start > e.end ? e.end : e.start, i = this.value_ && this.value_.start || this.modelConfig_.start.fillDate, s = t.start || t; a.start = this.normalizeDate(o, { ...s, fillDate: i, patch: n }); const c = e.start > e.end ? e.start : e.end, u = this.value_ && this.value_.end || this.modelConfig_.end.fillDate, l = t.end || t; return a.end = this.normalizeDate(c, { ...l, fillDate: u, patch: n }), this.sortRange(a, r) } return this.normalizeDate(e, { ...t, fillDate: this.value_ || this.modelConfig_.fillDate, patch: n }) }, adjustTimeForValue(e, t) { return this.hasValue(e) ? this.isRange ? { start: this.$locale.adjustTimeForDate(e.start, t.start || t), end: this.$locale.adjustTimeForDate(e.end, t.end || t) } : this.$locale.adjustTimeForDate(e, t) : null }, sortRange(e, t = Un.NONE) { const { start: n, end: r } = e; if (n > r) switch (t) { case Un.START: return { start: n, end: n }; case Un.END: return { start: r, end: r }; case Un.BOTH: return { start: r, end: n } }return { start: n, end: r } }, denormalizeValue(e, t = this.modelConfig_) { return this.isRange ? this.hasValue(e) ? { start: this.$locale.denormalizeDate(e.start, t.start || t), end: this.$locale.denormalizeDate(e.end, t.end || t) } : null : this.$locale.denormalizeDate(e, t) }, valuesAreEqual(e, t) { if (this.isRange) { const n = this.hasValue(e), r = this.hasValue(t); return !n && !r || n === r && (Object(ut["d"])(e.start, t.start) && Object(ut["d"])(e.end, t.end)) } return Object(ut["d"])(e, t) }, valueIsDisabled(e) { return this.hasValue(e) && this.disabledAttribute && this.disabledAttribute.intersectsDate(e) }, formatInput() { var e = this; this.$nextTick((function () { const t = { type: "string", mask: e.inputMask }, n = e.denormalizeValue(e.dragValue || e.value_, t); e.isRange ? e.inputValues = [n && n.start, n && n.end] : e.inputValues = [n, ""] })) }, showPopover(e = {}) { Qt({ ref: this.$el, ...this.popover_, ...e, isInteractive: !0, id: this.datePickerPopoverId }) }, hidePopover(e = {}) { en({ hideDelay: 10, ...this.popover_, ...e, id: this.datePickerPopoverId }) }, togglePopover(e) { tn({ ref: this.$el, ...this.popover_, ...e, isInteractive: !0, id: this.datePickerPopoverId }) }, adjustPageRange(e) { var t = this; this.$nextTick((function () { const n = t.$refs.calendar, r = t.getPageForValue(e), a = e ? 1 : -1; r && n && !Object(ut["p"])(r, n.firstPage, n.lastPage) && n.move(r, { position: a, transition: "fade" }) })) }, getPageForValue(e) { return this.hasValue(this.value_) ? this.pageForDate(this.isRange ? this.value_[e ? "start" : "end"] : this.value_) : null }, move(e, t) { return this.$refs.calendar ? this.$refs.calendar.move(e, t) : Promise.reject(new Error("Navigation disabled while calendar is not yet displayed")) }, focusDate(e, t) { return this.$refs.calendar ? this.$refs.calendar.focusDate(e, t) : Promise.reject(new Error("Navigation disabled while calendar is not yet displayed")) } } }, Gn = qn, Kn = ht(Gn, Bn, Zn, !1, null, null, null), Xn = Kn.exports }, "2b10": function (e, t) { function n(e, t, n) { var r = -1, a = e.length; t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0; var o = Array(a); while (++r < a) o[r] = e[r + t]; return o } e.exports = n }, "2b27": function (e, t, n) { "use strict"; var r = n("5849"), a = n.n(r); a.a }, "2b3e": function (e, t, n) { var r = n("585a"), a = "object" == typeof self && self && self.Object === Object && self, o = r || a || Function("return this")(); e.exports = o }, "2d7c": function (e, t) { function n(e, t) { var n = -1, r = null == e ? 0 : e.length, a = 0, o = []; while (++n < r) { var i = e[n]; t(i, n, e) && (o[a++] = i) } return o } e.exports = n }, "2dcb": function (e, t, n) { var r = n("91e9"), a = r(Object.getPrototypeOf, Object); e.exports = a }, "2ec1": function (e, t, n) { var r = n("100e"), a = n("9aff"); function o(e) { return r((function (t, n) { var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0; i = e.length > 3 && "function" == typeof i ? (o--, i) : void 0, s && a(n[0], n[1], s) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); while (++r < o) { var c = n[r]; c && e(t, c, r, i) } return t })) } e.exports = o }, "2fa3": function (e, t, n) { "use strict"; n.d(t, "m", (function () { return a })), n.d(t, "f", (function () { return o })), n.d(t, "h", (function () { return i })), n.d(t, "r", (function () { return s })), n.d(t, "o", (function () { return c })), n.d(t, "n", (function () { return u })), n.d(t, "p", (function () { return l })), n.d(t, "q", (function () { return d })), n.d(t, "a", (function () { return f })), n.d(t, "s", (function () { return p })), n.d(t, "d", (function () { return h })), n.d(t, "b", (function () { return v })), n.d(t, "i", (function () { return b })), n.d(t, "k", (function () { return m })), n.d(t, "j", (function () { return g })), n.d(t, "e", (function () { return y })), n.d(t, "l", (function () { return w })), n.d(t, "c", (function () { return x })), n.d(t, "g", (function () { return D })); n("ddb0"); var r = n("9404"); const a = function (e, t, n = "0") { e = null !== e && void 0 !== e ? String(e) : "", t = t || 2; while (e.length < t) e = `${n}${e}`; return e }, o = function (e, t) { return Object(r["k"])(e) ? e(t) : e }, i = function (...e) { const t = {}; return e.forEach((function (e) { return Object.entries(e).forEach((function ([e, n]) { t[e] ? Object(r["h"])(t[e]) ? t[e].push(n) : t[e] = [t[e], n] : t[e] = n })) })), t }, s = function (e) { return !!(e && e.month && e.year) }, c = function (e, t) { return !(!s(e) || !s(t)) && (e.year === t.year ? e.month < t.month : e.year < t.year) }, u = function (e, t) { return !(!s(e) || !s(t)) && (e.year === t.year ? e.month > t.month : e.year > t.year) }, l = function (e, t, n) { return !!e && !c(e, t) && !u(e, n) }, d = function (e, t) { return !(!e && t) && (!(e && !t) && (!e && !t || e.month === t.month && e.year === t.year)) }, f = function ({ month: e, year: t }, n) { const r = n > 0 ? 1 : -1; for (let a = 0; a < Math.abs(n); a++)e += r, e > 12 ? (e = 1, t++) : e < 1 && (e = 12, t--); return { month: e, year: t } }, p = function (e, t) { if (!s(e) || !s(t)) return []; const n = []; while (!u(e, t)) n.push(e), e = f(e, 1); return n }; function h(e, t) { const n = Object(r["j"])(e), a = Object(r["j"])(t); return !n && !a || n === a && e.getTime() === t.getTime() } const v = function (e) { return Object(r["h"])(e) && e.length }, b = function (e, t, n) { const a = []; return n.forEach((function (n) { const o = n.name || n.toString(), i = n.mixin, s = n.validate; if (Object.prototype.hasOwnProperty.call(e, o)) { const n = s ? s(e[o]) : e[o]; t[o] = i && Object(r["m"])(n) ? { ...i, ...n } : n, a.push(o) } })), { target: t, assigned: a.length ? a : null } }, m = function (e, t, n, r) { e && t && n && e.addEventListener(t, n, r) }, g = function (e, t, n, r) { e && t && e.removeEventListener(t, n, r) }, y = function (e, t) { return !!e && !!t && (e === t || e.contains(t)) }, w = function (e, t) { " " !== e.key && "Enter" !== e.key || (t(e), e.preventDefault()) }, x = function () { function e() { return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) } return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}` }; function D(e) { let t, n = 0, r = 0; if (0 === e.length) return n; for (r = 0; r < e.length; r++)t = e.charCodeAt(r), n = (n << 5) - n + t, n |= 0; return n } }, "2fcc": function (e, t) { function n(e) { var t = this.__data__, n = t["delete"](e); return this.size = t.size, n } e.exports = n }, 3092: function (e, t, n) { var r = n("4284"), a = n("badf"), o = n("361d"), i = n("6747"), s = n("9aff"); function c(e, t, n) { var c = i(e) ? r : o; return n && s(e, t, n) && (t = void 0), c(e, a(t, 3)) } e.exports = c }, "30c9": function (e, t, n) { var r = n("9520"), a = n("b218"); function o(e) { return null != e && a(e.length) && !r(e) } e.exports = o }, "32b3": function (e, t, n) { var r = n("872a"), a = n("9638"), o = Object.prototype, i = o.hasOwnProperty; function s(e, t, n) { var o = e[t]; i.call(e, t) && a(o, n) && (void 0 !== n || t in e) || r(e, t, n) } e.exports = s }, "32f4": function (e, t, n) { var r = n("2d7c"), a = n("d327"), o = Object.prototype, i = o.propertyIsEnumerable, s = Object.getOwnPropertySymbols, c = s ? function (e) { return null == e ? [] : (e = Object(e), r(s(e), (function (t) { return i.call(e, t) }))) } : a; e.exports = c }, "34ac": function (e, t, n) { var r = n("9520"), a = n("1368"), o = n("1a8c"), i = n("dc57"), s = /[\\^$.*+?()[\]{}|]/g, c = /^\[object .+?Constructor\]$/, u = Function.prototype, l = Object.prototype, d = u.toString, f = l.hasOwnProperty, p = RegExp("^" + d.call(f).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); function h(e) { if (!o(e) || a(e)) return !1; var t = r(e) ? p : c; return t.test(i(e)) } e.exports = h }, "34e9": function (e, t, n) { "use strict"; (function (e) { n("ddb0"); var r = n("2af9"), a = n("ed08"); function o(e, t) { if (o.installed) return; o.installed = !0; const n = a["setupCalendar"](t); Object.entries(r).forEach((function ([t, r]) { e.component(`${n.componentPrefix}${t}`, r) })) } n.d(t, "c", (function () { return r["Calendar"] })), n.d(t, "d", (function () { return r["CalendarNav"] })), n.d(t, "f", (function () { return r["DatePicker"] })), n.d(t, "h", (function () { return r["Popover"] })), n.d(t, "a", (function () { return a["Attribute"] })), n.d(t, "b", (function () { return a["AttributeStore"] })), n.d(t, "e", (function () { return a["DateInfo"] })), n.d(t, "g", (function () { return a["Locale"] })), n.d(t, "i", (function () { return a["addHorizontalSwipeHandler"] })), n.d(t, "j", (function () { return a["addPages"] })), n.d(t, "k", (function () { return a["addTapOrClickHandler"] })), n.d(t, "l", (function () { return a["arrayHasItems"] })), n.d(t, "m", (function () { return a["createGuid"] })), n.d(t, "n", (function () { return a["datesAreEqual"] })), n.d(t, "p", (function () { return a["elementContains"] })), n.d(t, "q", (function () { return a["evalFn"] })), n.d(t, "r", (function () { return a["hash"] })), n.d(t, "s", (function () { return a["mergeEvents"] })), n.d(t, "t", (function () { return a["mixinOptionalProps"] })), n.d(t, "u", (function () { return a["off"] })), n.d(t, "v", (function () { return a["on"] })), n.d(t, "w", (function () { return a["onSpaceOrEnter"] })), n.d(t, "x", (function () { return a["pad"] })), n.d(t, "y", (function () { return a["pageIsAfterPage"] })), n.d(t, "z", (function () { return a["pageIsBeforePage"] })), n.d(t, "A", (function () { return a["pageIsBetweenPages"] })), n.d(t, "B", (function () { return a["pageIsEqualToPage"] })), n.d(t, "C", (function () { return a["pageIsValid"] })), n.d(t, "D", (function () { return a["pageRangeToArray"] })), n.d(t, "E", (function () { return a["setupCalendar"] })); const i = { install: o, ...r, ...a }; let s = null; "undefined" !== typeof window ? s = window.Vue : "undefined" !== typeof e && (s = e.Vue), s && s.use(i), t["o"] = i }).call(this, n("c8ba")) }, "361d": function (e, t, n) { var r = n("48a0"); function a(e, t) { var n; return r(e, (function (e, r, a) { return n = t(e, r, a), !n })), !!n } e.exports = a }, 3698: function (e, t) { function n(e, t) { return null == e ? void 0 : e[t] } e.exports = n }, 3729: function (e, t, n) { var r = n("9e69"), a = n("00fd"), o = n("29f3"), i = "[object Null]", s = "[object Undefined]", c = r ? r.toStringTag : void 0; function u(e) { return null == e ? void 0 === e ? s : i : c && c in Object(e) ? a(e) : o(e) } e.exports = u }, "37e8": function (e, t, n) { var r = n("83ab"), a = n("9bf2"), o = n("825a"), i = n("df75"); e.exports = r ? Object.defineProperties : function (e, t) { o(e); var n, r = i(t), s = r.length, c = 0; while (s > c) a.f(e, n = r[c++], t[n]); return e } }, 3818: function (e, t, n) { var r = n("7e64"), a = n("8057"), o = n("32b3"), i = n("5b01"), s = n("0f0f"), c = n("e538"), u = n("4359"), l = n("54eb"), d = n("1041"), f = n("a994"), p = n("1bac"), h = n("42a2"), v = n("c87c"), b = n("c2b6"), m = n("fa21"), g = n("6747"), y = n("0d24"), w = n("cc45"), x = n("1a8c"), D = n("d7ee"), j = n("ec69"), O = n("9934"), k = 1, M = 2, P = 4, S = "[object Arguments]", Y = "[object Array]", E = "[object Boolean]", _ = "[object Date]", T = "[object Error]", I = "[object Function]", C = "[object GeneratorFunction]", $ = "[object Map]", A = "[object Number]", N = "[object Object]", F = "[object RegExp]", z = "[object Set]", L = "[object String]", H = "[object Symbol]", R = "[object WeakMap]", W = "[object ArrayBuffer]", V = "[object DataView]", U = "[object Float32Array]", B = "[object Float64Array]", Z = "[object Int8Array]", q = "[object Int16Array]", G = "[object Int32Array]", K = "[object Uint8Array]", X = "[object Uint8ClampedArray]", J = "[object Uint16Array]", Q = "[object Uint32Array]", ee = {}; function te(e, t, n, Y, E, _) { var T, $ = t & k, A = t & M, F = t & P; if (n && (T = E ? n(e, Y, E, _) : n(e)), void 0 !== T) return T; if (!x(e)) return e; var z = g(e); if (z) { if (T = v(e), !$) return u(e, T) } else { var L = h(e), H = L == I || L == C; if (y(e)) return c(e, $); if (L == N || L == S || H && !E) { if (T = A || H ? {} : m(e), !$) return A ? d(e, s(T, e)) : l(e, i(T, e)) } else { if (!ee[L]) return E ? e : {}; T = b(e, L, $) } } _ || (_ = new r); var R = _.get(e); if (R) return R; _.set(e, T), D(e) ? e.forEach((function (r) { T.add(te(r, t, n, r, e, _)) })) : w(e) && e.forEach((function (r, a) { T.set(a, te(r, t, n, a, e, _)) })); var W = F ? A ? p : f : A ? O : j, V = z ? void 0 : W(e); return a(V || e, (function (r, a) { V && (a = r, r = e[a]), o(T, a, te(r, t, n, a, e, _)) })), T } ee[S] = ee[Y] = ee[W] = ee[V] = ee[E] = ee[_] = ee[U] = ee[B] = ee[Z] = ee[q] = ee[G] = ee[$] = ee[A] = ee[N] = ee[F] = ee[z] = ee[L] = ee[H] = ee[K] = ee[X] = ee[J] = ee[Q] = !0, ee[T] = ee[I] = ee[R] = !1, e.exports = te }, 3852: function (e, t, n) { var r = n("96f3"), a = n("e2c0"); function o(e, t) { return null != e && a(e, t, r) } e.exports = o }, "39ff": function (e, t, n) { var r = n("0b07"), a = n("2b3e"), o = r(a, "WeakMap"); e.exports = o }, "3b4a": function (e, t, n) { var r = n("0b07"), a = function () { try { var e = r(Object, "defineProperty"); return e({}, "", {}), e } catch (t) { } }(); e.exports = a }, "3bb4": function (e, t, n) { var r = n("08cc"), a = n("ec69"); function o(e) { var t = a(e), n = t.length; while (n--) { var o = t[n], i = e[o]; t[n] = [o, i, r(i)] } return t } e.exports = o }, "3bbe": function (e, t, n) { var r = n("861d"); e.exports = function (e) { if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype"); return e } }, "3c06": function (e, t, n) { "use strict"; var r = n("69bc"), a = n.n(r); a.a }, "3c55": function (e, t, n) { "use strict"; var r = n("e969"), a = n.n(r); a.a }, "3ee2": function (e, t, n) { var r = n("dc8c"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("13d41af5", r, !0, { sourceMap: !1, shadowMode: !1 }) }, "3eea": function (e, t, n) { var r = n("7948"), a = n("3818"), o = n("4bb5"), i = n("e2e4"), s = n("8eeb"), c = n("e0e7"), u = n("c6cf"), l = n("1bac"), d = 1, f = 2, p = 4, h = u((function (e, t) { var n = {}; if (null == e) return n; var u = !1; t = r(t, (function (t) { return t = i(t, e), u || (u = t.length > 1), t })), s(e, l(e), n), u && (n = a(n, d | f | p, c)); var h = t.length; while (h--) o(n, t[h]); return n })); e.exports = h }, "3f84": function (e, t, n) { var r = n("85e3"), a = n("100e"), o = n("e031"), i = n("2411"), s = a((function (e) { return e.push(void 0, o), r(i, void 0, e) })); e.exports = s }, "3f8c": function (e, t) { e.exports = {} }, "41c3": function (e, t, n) { var r = n("1a8c"), a = n("eac5"), o = n("ec8c"), i = Object.prototype, s = i.hasOwnProperty; function c(e) { if (!r(e)) return o(e); var t = a(e), n = []; for (var i in e) ("constructor" != i || !t && s.call(e, i)) && n.push(i); return n } e.exports = c }, 4245: function (e, t, n) { var r = n("1290"); function a(e, t) { var n = e.__data__; return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map } e.exports = a }, 4284: function (e, t) { function n(e, t) { var n = -1, r = null == e ? 0 : e.length; while (++n < r) if (t(e[n], n, e)) return !0; return !1 } e.exports = n }, "428f": function (e, t, n) { var r = n("da84"); e.exports = r }, "42a2": function (e, t, n) { var r = n("b5a7"), a = n("79bc"), o = n("1cec"), i = n("c869"), s = n("39ff"), c = n("3729"), u = n("dc57"), l = "[object Map]", d = "[object Object]", f = "[object Promise]", p = "[object Set]", h = "[object WeakMap]", v = "[object DataView]", b = u(r), m = u(a), g = u(o), y = u(i), w = u(s), x = c; (r && x(new r(new ArrayBuffer(1))) != v || a && x(new a) != l || o && x(o.resolve()) != f || i && x(new i) != p || s && x(new s) != h) && (x = function (e) { var t = c(e), n = t == d ? e.constructor : void 0, r = n ? u(n) : ""; if (r) switch (r) { case b: return v; case m: return l; case g: return f; case y: return p; case w: return h }return t }), e.exports = x }, 4359: function (e, t) { function n(e, t) { var n = -1, r = e.length; t || (t = Array(r)); while (++n < r) t[n] = e[n]; return t } e.exports = n }, 4416: function (e, t) { function n(e) { var t = null == e ? 0 : e.length; return t ? e[t - 1] : void 0 } e.exports = n }, "44ad": function (e, t, n) { var r = n("d039"), a = n("c6b6"), o = "".split; e.exports = r((function () { return !Object("z").propertyIsEnumerable(0) })) ? function (e) { return "String" == a(e) ? o.call(e, "") : Object(e) } : Object }, "44d2": function (e, t, n) { var r = n("b622"), a = n("7c73"), o = n("9bf2"), i = r("unscopables"), s = Array.prototype; void 0 == s[i] && o.f(s, i, { configurable: !0, value: a(null) }), e.exports = function (e) { s[i][e] = !0 } }, 4889: function (e, t, n) { "use strict"; var r = n("df9e"), a = n.n(r); a.a }, "48a0": function (e, t, n) { var r = n("242e"), a = n("950a"), o = a(r); e.exports = o }, 4930: function (e, t, n) { var r = n("d039"); e.exports = !!Object.getOwnPropertySymbols && !r((function () { return !String(Symbol()) })) }, "499e": function (e, t, n) { "use strict"; function r(e, t) { for (var n = [], r = {}, a = 0; a < t.length; a++) { var o = t[a], i = o[0], s = o[1], c = o[2], u = o[3], l = { id: e + ":" + a, css: s, media: c, sourceMap: u }; r[i] ? r[i].parts.push(l) : n.push(r[i] = { id: i, parts: [l] }) } return n } n.r(t), n.d(t, "default", (function () { return h })); var a = "undefined" !== typeof document; if ("undefined" !== typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); var o = {}, i = a && (document.head || document.getElementsByTagName("head")[0]), s = null, c = 0, u = !1, l = function () { }, d = null, f = "data-vue-ssr-id", p = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()); function h(e, t, n, a) { u = n, d = a || {}; var i = r(e, t); return v(i), function (t) { for (var n = [], a = 0; a < i.length; a++) { var s = i[a], c = o[s.id]; c.refs--, n.push(c) } t ? (i = r(e, t), v(i)) : i = []; for (a = 0; a < n.length; a++) { c = n[a]; if (0 === c.refs) { for (var u = 0; u < c.parts.length; u++)c.parts[u](); delete o[c.id] } } } } function v(e) { for (var t = 0; t < e.length; t++) { var n = e[t], r = o[n.id]; if (r) { r.refs++; for (var a = 0; a < r.parts.length; a++)r.parts[a](n.parts[a]); for (; a < n.parts.length; a++)r.parts.push(m(n.parts[a])); r.parts.length > n.parts.length && (r.parts.length = n.parts.length) } else { var i = []; for (a = 0; a < n.parts.length; a++)i.push(m(n.parts[a])); o[n.id] = { id: n.id, refs: 1, parts: i } } } } function b() { var e = document.createElement("style"); return e.type = "text/css", i.appendChild(e), e } function m(e) { var t, n, r = document.querySelector("style[" + f + '~="' + e.id + '"]'); if (r) { if (u) return l; r.parentNode.removeChild(r) } if (p) { var a = c++; r = s || (s = b()), t = y.bind(null, r, a, !1), n = y.bind(null, r, a, !0) } else r = b(), t = w.bind(null, r), n = function () { r.parentNode.removeChild(r) }; return t(e), function (r) { if (r) { if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return; t(e = r) } else n() } } var g = function () { var e = []; return function (t, n) { return e[t] = n, e.filter(Boolean).join("\n") } }(); function y(e, t, n, r) { var a = n ? "" : r.css; if (e.styleSheet) e.styleSheet.cssText = g(t, a); else { var o = document.createTextNode(a), i = e.childNodes; i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o) } } function w(e, t) { var n = t.css, r = t.media, a = t.sourceMap; if (r && e.setAttribute("media", r), d.ssrId && e.setAttribute(f, t.id), a && (n += "\n/*# sourceURL=" + a.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else { while (e.firstChild) e.removeChild(e.firstChild); e.appendChild(document.createTextNode(n)) } } }, "49f4": function (e, t, n) { var r = n("6044"); function a() { this.__data__ = r ? r(null) : {}, this.size = 0 } e.exports = a }, "4bb5": function (e, t, n) { var r = n("e2e4"), a = n("4416"), o = n("8296"), i = n("f4d6"); function s(e, t) { return t = r(t, e), e = o(e, t), null == e || delete e[i(a(t))] } e.exports = s }, "4cfe": function (e, t) { function n(e) { return void 0 === e } e.exports = n }, "4d64": function (e, t, n) { var r = n("fc6a"), a = n("50c4"), o = n("23cb"), i = function (e) { return function (t, n, i) { var s, c = r(t), u = a(c.length), l = o(i, u); if (e && n != n) { while (u > l) if (s = c[l++], s != s) return !0 } else for (; u > l; l++)if ((e || l in c) && c[l] === n) return e || l || 0; return !e && -1 } }; e.exports = { includes: i(!0), indexOf: i(!1) } }, "4d8c": function (e, t, n) { var r = n("5c69"); function a(e) { var t = null == e ? 0 : e.length; return t ? r(e, 1) : [] } e.exports = a }, "4f50": function (e, t, n) { var r = n("b760"), a = n("e538"), o = n("c8fe"), i = n("4359"), s = n("fa21"), c = n("d370"), u = n("6747"), l = n("dcbe"), d = n("0d24"), f = n("9520"), p = n("1a8c"), h = n("60ed"), v = n("73ac"), b = n("8adb"), m = n("8de2"); function g(e, t, n, g, y, w, x) { var D = b(e, n), j = b(t, n), O = x.get(j); if (O) r(e, n, O); else { var k = w ? w(D, j, n + "", e, t, x) : void 0, M = void 0 === k; if (M) { var P = u(j), S = !P && d(j), Y = !P && !S && v(j); k = j, P || S || Y ? u(D) ? k = D : l(D) ? k = i(D) : S ? (M = !1, k = a(j, !0)) : Y ? (M = !1, k = o(j, !0)) : k = [] : h(j) || c(j) ? (k = D, c(D) ? k = m(D) : p(D) && !f(D) || (k = s(j))) : M = !1 } M && (x.set(j, k), y(k, j, g, w, x), x["delete"](j)), r(e, n, k) } } e.exports = g }, "501e": function (e, t, n) { var r = n("3729"), a = n("1310"), o = "[object Number]"; function i(e) { return "number" == typeof e || a(e) && r(e) == o } e.exports = i }, "50c4": function (e, t, n) { var r = n("a691"), a = Math.min; e.exports = function (e) { return e > 0 ? a(r(e), 9007199254740991) : 0 } }, "50d8": function (e, t) { function n(e, t) { var n = -1, r = Array(e); while (++n < e) r[n] = t(n); return r } e.exports = n }, 5135: function (e, t) { var n = {}.hasOwnProperty; e.exports = function (e, t) { return n.call(e, t) } }, "51ec": function (e, t, n) { "use strict"; n.d(t, "b", (function () { return f })), n.d(t, "a", (function () { return p })); var r = n("8bbf"), a = n.n(r), o = n("9404"), i = n("23a5"), s = n("7efe"), c = n("85a9"), u = n("f15d"); const l = { componentPrefix: "v", navVisibility: "click", titlePosition: "center", transition: "slide-h", touch: i, masks: s, screens: c, locales: u["a"], datePicker: { updateOnInput: !0, inputDebounce: 1e3, popover: { visibility: "hover-focus", placement: "bottom-start", keepVisibleOnInput: !1, isInteractive: !0 } } }; let d = null; const f = function (e) { return d || (d = new a.a({ data() { return { defaults: Object(o["c"])(e, l) } }, computed: { locales() { var e = this; return Object(o["r"])(this.defaults.locales, (function (t) { return t.masks = Object(o["c"])(t.masks, e.defaults.masks), t })) } } })), d.defaults }, p = { beforeCreate() { f() }, computed: { $defaults() { return d.defaults }, $locales() { return d.locales } }, methods: { propOrDefault(e, t, n) { return this.passedProp(e, Object(o["d"])(this.$defaults, t), n) }, passedProp(e, t, n) { if (Object(o["e"])(this.$options.propsData, e)) { const r = this[e]; return Object(o["m"])(r) && "merge" === n ? Object(o["c"])(r, t) : r } return t } } } }, 5319: function (e, t, n) { "use strict"; var r = n("d784"), a = n("825a"), o = n("7b0b"), i = n("50c4"), s = n("a691"), c = n("1d80"), u = n("8aa5"), l = n("14c3"), d = Math.max, f = Math.min, p = Math.floor, h = /\$([$&'`]|\d\d?|<[^>]*>)/g, v = /\$([$&'`]|\d\d?)/g, b = function (e) { return void 0 === e ? e : String(e) }; r("replace", 2, (function (e, t, n, r) { var m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, g = r.REPLACE_KEEPS_$0, y = m ? "$" : "$0"; return [function (n, r) { var a = c(this), o = void 0 == n ? void 0 : n[e]; return void 0 !== o ? o.call(n, a, r) : t.call(String(a), n, r) }, function (e, r) { if (!m && g || "string" === typeof r && -1 === r.indexOf(y)) { var o = n(t, e, this, r); if (o.done) return o.value } var c = a(e), p = String(this), h = "function" === typeof r; h || (r = String(r)); var v = c.global; if (v) { var x = c.unicode; c.lastIndex = 0 } var D = []; while (1) { var j = l(c, p); if (null === j) break; if (D.push(j), !v) break; var O = String(j[0]); "" === O && (c.lastIndex = u(p, i(c.lastIndex), x)) } for (var k = "", M = 0, P = 0; P < D.length; P++) { j = D[P]; for (var S = String(j[0]), Y = d(f(s(j.index), p.length), 0), E = [], _ = 1; _ < j.length; _++)E.push(b(j[_])); var T = j.groups; if (h) { var I = [S].concat(E, Y, p); void 0 !== T && I.push(T); var C = String(r.apply(void 0, I)) } else C = w(S, p, Y, E, T, r); Y >= M && (k += p.slice(M, Y) + C, M = Y + S.length) } return k + p.slice(M) }]; function w(e, n, r, a, i, s) { var c = r + e.length, u = a.length, l = v; return void 0 !== i && (i = o(i), l = h), t.call(s, l, (function (t, o) { var s; switch (o.charAt(0)) { case "$": return "$"; case "&": return e; case "`": return n.slice(0, r); case "'": return n.slice(c); case "<": s = i[o.slice(1, -1)]; break; default: var l = +o; if (0 === l) return t; if (l > u) { var d = p(l / 10); return 0 === d ? t : d <= u ? void 0 === a[d - 1] ? o.charAt(1) : a[d - 1] + o.charAt(1) : t } s = a[l - 1] }return void 0 === s ? "" : s })) } })) }, "54eb": function (e, t, n) { var r = n("8eeb"), a = n("32f4"); function o(e, t) { return r(e, a(e), t) } e.exports = o }, "55a3": function (e, t) { function n(e) { return this.__data__.has(e) } e.exports = n }, 5692: function (e, t, n) { var r = n("c430"), a = n("c6cd"); (e.exports = function (e, t) { return a[e] || (a[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: "3.6.5", mode: r ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" }) }, "56ef": function (e, t, n) { var r = n("d066"), a = n("241c"), o = n("7418"), i = n("825a"); e.exports = r("Reflect", "ownKeys") || function (e) { var t = a.f(i(e)), n = o.f; return n ? t.concat(n(e)) : t } }, "57a5": function (e, t, n) { var r = n("91e9"), a = r(Object.keys, Object); e.exports = a }, 5849: function (e, t, n) { var r = n("b803"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("0a9763a7", r, !0, { sourceMap: !1, shadowMode: !1 }) }, "585a": function (e, t, n) { (function (t) { var n = "object" == typeof t && t && t.Object === Object && t; e.exports = n }).call(this, n("c8ba")) }, 5905: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".none-enter-active[data-v-8466592e],.none-leave-active[data-v-8466592e]{transition-duration:0s}.fade-enter-active[data-v-8466592e],.fade-leave-active[data-v-8466592e],.slide-down-enter-active[data-v-8466592e],.slide-down-leave-active[data-v-8466592e],.slide-left-enter-active[data-v-8466592e],.slide-left-leave-active[data-v-8466592e],.slide-right-enter-active[data-v-8466592e],.slide-right-leave-active[data-v-8466592e],.slide-up-enter-active[data-v-8466592e],.slide-up-leave-active[data-v-8466592e]{transition:transform var(--slide-duration) var(--slide-timing),opacity var(--slide-duration) var(--slide-timing);-webkit-backface-visibility:hidden;backface-visibility:hidden}.fade-leave-active[data-v-8466592e],.none-leave-active[data-v-8466592e],.slide-down-leave-active[data-v-8466592e],.slide-left-leave-active[data-v-8466592e],.slide-right-leave-active[data-v-8466592e],.slide-up-leave-active[data-v-8466592e]{position:absolute;width:100%}.fade-enter[data-v-8466592e],.fade-leave-to[data-v-8466592e],.none-enter[data-v-8466592e],.none-leave-to[data-v-8466592e],.slide-down-enter[data-v-8466592e],.slide-down-leave-to[data-v-8466592e],.slide-left-enter[data-v-8466592e],.slide-left-leave-to[data-v-8466592e],.slide-right-enter[data-v-8466592e],.slide-right-leave-to[data-v-8466592e],.slide-up-enter[data-v-8466592e],.slide-up-leave-to[data-v-8466592e]{opacity:0}.slide-left-enter[data-v-8466592e],.slide-right-leave-to[data-v-8466592e]{transform:translateX(var(--slide-translate))}.slide-left-leave-to[data-v-8466592e],.slide-right-enter[data-v-8466592e]{transform:translateX(calc(var(--slide-translate)*-1))}.slide-down-leave-to[data-v-8466592e],.slide-up-enter[data-v-8466592e]{transform:translateY(var(--slide-translate))}.slide-down-enter[data-v-8466592e],.slide-up-leave-to[data-v-8466592e]{transform:translateY(calc(var(--slide-translate)*-1))}", ""]), e.exports = t }, "5b01": function (e, t, n) { var r = n("8eeb"), a = n("ec69"); function o(e, t) { return e && r(t, a(t), e) } e.exports = o }, "5c69": function (e, t, n) { var r = n("087d"), a = n("0621"); function o(e, t, n, i, s) { var c = -1, u = e.length; n || (n = a), s || (s = []); while (++c < u) { var l = e[c]; t > 0 && n(l) ? t > 1 ? o(l, t - 1, n, i, s) : r(s, l) : i || (s[s.length] = l) } return s } e.exports = o }, "5c6c": function (e, t) { e.exports = function (e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, "5d89": function (e, t, n) { var r = n("f8af"); function a(e, t) { var n = t ? r(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.byteLength) } e.exports = a }, "5e2e": function (e, t, n) { var r = n("28c9"), a = n("69d5"), o = n("b4c0"), i = n("fba5"), s = n("67ca"); function c(e) { var t = -1, n = null == e ? 0 : e.length; this.clear(); while (++t < n) { var r = e[t]; this.set(r[0], r[1]) } } c.prototype.clear = r, c.prototype["delete"] = a, c.prototype.get = o, c.prototype.has = i, c.prototype.set = s, e.exports = c }, 6044: function (e, t, n) { var r = n("0b07"), a = r(Object, "create"); e.exports = a }, "60ed": function (e, t, n) { var r = n("3729"), a = n("2dcb"), o = n("1310"), i = "[object Object]", s = Function.prototype, c = Object.prototype, u = s.toString, l = c.hasOwnProperty, d = u.call(Object); function f(e) { if (!o(e) || r(e) != i) return !1; var t = a(e); if (null === t) return !0; var n = l.call(t, "constructor") && t.constructor; return "function" == typeof n && n instanceof n && u.call(n) == d } e.exports = f }, 6220: function (e, t, n) { var r = n("b1d2"), a = n("b047"), o = n("99d3"), i = o && o.isDate, s = i ? a(i) : r; e.exports = s }, "62e4": function (e, t) { e.exports = function (e) { return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function () { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function () { return e.i } }), e.webpackPolyfill = 1), e } }, "642a": function (e, t, n) { var r = n("966f"), a = n("3bb4"), o = n("20ec"); function i(e) { var t = a(e); return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function (n) { return n === e || r(n, e, t) } } e.exports = i }, 6547: function (e, t, n) { var r = n("a691"), a = n("1d80"), o = function (e) { return function (t, n) { var o, i, s = String(a(t)), c = r(n), u = s.length; return c < 0 || c >= u ? e ? "" : void 0 : (o = s.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === u || (i = s.charCodeAt(c + 1)) < 56320 || i > 57343 ? e ? s.charAt(c) : o : e ? s.slice(c, c + 2) : i - 56320 + (o - 55296 << 10) + 65536) } }; e.exports = { codeAt: o(!1), charAt: o(!0) } }, "656b": function (e, t, n) { var r = n("e2e4"), a = n("f4d6"); function o(e, t) { t = r(t, e); var n = 0, o = t.length; while (null != e && n < o) e = e[a(t[n++])]; return n && n == o ? e : void 0 } e.exports = o }, 6679: function (e, t, n) { var r = n("3729"), a = n("1310"), o = "[object Boolean]"; function i(e) { return !0 === e || !1 === e || a(e) && r(e) == o } e.exports = i }, 6747: function (e, t) { var n = Array.isArray; e.exports = n }, "67ca": function (e, t, n) { var r = n("cb5a"); function a(e, t) { var n = this.__data__, a = r(n, e); return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this } e.exports = a }, "69bc": function (e, t, n) { var r = n("16c7"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("e36d046a", r, !0, { sourceMap: !1, shadowMode: !1 }) }, "69d5": function (e, t, n) { var r = n("cb5a"), a = Array.prototype, o = a.splice; function i(e) { var t = this.__data__, n = r(t, e); if (n < 0) return !1; var a = t.length - 1; return n == a ? t.pop() : o.call(t, n, 1), --this.size, !0 } e.exports = i }, "69f3": function (e, t, n) { var r, a, o, i = n("7f9a"), s = n("da84"), c = n("861d"), u = n("9112"), l = n("5135"), d = n("f772"), f = n("d012"), p = s.WeakMap, h = function (e) { return o(e) ? a(e) : r(e, {}) }, v = function (e) { return function (t) { var n; if (!c(t) || (n = a(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required"); return n } }; if (i) { var b = new p, m = b.get, g = b.has, y = b.set; r = function (e, t) { return y.call(b, e, t), t }, a = function (e) { return m.call(b, e) || {} }, o = function (e) { return g.call(b, e) } } else { var w = d("state"); f[w] = !0, r = function (e, t) { return u(e, w, t), t }, a = function (e) { return l(e, w) ? e[w] : {} }, o = function (e) { return l(e, w) } } e.exports = { set: r, get: a, has: o, enforce: h, getterFor: v } }, "6eeb": function (e, t, n) { var r = n("da84"), a = n("9112"), o = n("5135"), i = n("ce4e"), s = n("8925"), c = n("69f3"), u = c.get, l = c.enforce, d = String(String).split("String"); (e.exports = function (e, t, n, s) { var c = !!s && !!s.unsafe, u = !!s && !!s.enumerable, f = !!s && !!s.noTargetGet; "function" == typeof n && ("string" != typeof t || o(n, "name") || a(n, "name", t), l(n).source = d.join("string" == typeof t ? t : "")), e !== r ? (c ? !f && e[t] && (u = !0) : delete e[t], u ? e[t] = n : a(e, t, n)) : u ? e[t] = n : i(t, n) })(Function.prototype, "toString", (function () { return "function" == typeof this && u(this).source || s(this) })) }, "6f6c": function (e, t) { var n = /\w*$/; function r(e) { var t = new e.constructor(e.source, n.exec(e)); return t.lastIndex = e.lastIndex, t } e.exports = r }, "6fcd": function (e, t, n) { var r = n("50d8"), a = n("d370"), o = n("6747"), i = n("0d24"), s = n("c098"), c = n("73ac"), u = Object.prototype, l = u.hasOwnProperty; function d(e, t) { var n = o(e), u = !n && a(e), d = !n && !u && i(e), f = !n && !u && !d && c(e), p = n || u || d || f, h = p ? r(e.length, String) : [], v = h.length; for (var b in e) !t && !l.call(e, b) || p && ("length" == b || d && ("offset" == b || "parent" == b) || f && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || s(b, v)) || h.push(b); return h } e.exports = d }, "72af": function (e, t, n) { var r = n("99cd"), a = r(); e.exports = a }, "72f0": function (e, t) { function n(e) { return function () { return e } } e.exports = n }, "72f5": function (e, t, n) { var r = n("9e2e"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("2997fbdf", r, !0, { sourceMap: !1, shadowMode: !1 }) }, "73ac": function (e, t, n) { var r = n("743f"), a = n("b047"), o = n("99d3"), i = o && o.isTypedArray, s = i ? a(i) : r; e.exports = s }, 7418: function (e, t) { t.f = Object.getOwnPropertySymbols }, "743f": function (e, t, n) { var r = n("3729"), a = n("b218"), o = n("1310"), i = "[object Arguments]", s = "[object Array]", c = "[object Boolean]", u = "[object Date]", l = "[object Error]", d = "[object Function]", f = "[object Map]", p = "[object Number]", h = "[object Object]", v = "[object RegExp]", b = "[object Set]", m = "[object String]", g = "[object WeakMap]", y = "[object ArrayBuffer]", w = "[object DataView]", x = "[object Float32Array]", D = "[object Float64Array]", j = "[object Int8Array]", O = "[object Int16Array]", k = "[object Int32Array]", M = "[object Uint8Array]", P = "[object Uint8ClampedArray]", S = "[object Uint16Array]", Y = "[object Uint32Array]", E = {}; function _(e) { return o(e) && a(e.length) && !!E[r(e)] } E[x] = E[D] = E[j] = E[O] = E[k] = E[M] = E[P] = E[S] = E[Y] = !0, E[i] = E[s] = E[y] = E[c] = E[w] = E[u] = E[l] = E[d] = E[f] = E[p] = E[h] = E[v] = E[b] = E[m] = E[g] = !1, e.exports = _ }, 7530: function (e, t, n) { var r = n("1a8c"), a = Object.create, o = function () { function e() { } return function (t) { if (!r(t)) return {}; if (a) return a(t); e.prototype = t; var n = new e; return e.prototype = void 0, n } }(); e.exports = o }, "76dd": function (e, t, n) { var r = n("ce86"); function a(e) { return null == e ? "" : r(e) } e.exports = a }, 7839: function (e, t) { e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, 7948: function (e, t) { function n(e, t) { var n = -1, r = null == e ? 0 : e.length, a = Array(r); while (++n < r) a[n] = t(e[n], n, e); return a } e.exports = n }, "79bc": function (e, t, n) { var r = n("0b07"), a = n("2b3e"), o = r(a, "Map"); e.exports = o }, "7a48": function (e, t, n) { var r = n("6044"), a = Object.prototype, o = a.hasOwnProperty; function i(e) { var t = this.__data__; return r ? void 0 !== t[e] : o.call(t, e) } e.exports = i }, "7b0b": function (e, t, n) { var r = n("1d80"); e.exports = function (e) { return Object(r(e)) } }, "7b83": function (e, t, n) { var r = n("7c64"), a = n("93ed"), o = n("2478"), i = n("a524"), s = n("1fc8"); function c(e) { var t = -1, n = null == e ? 0 : e.length; this.clear(); while (++t < n) { var r = e[t]; this.set(r[0], r[1]) } } c.prototype.clear = r, c.prototype["delete"] = a, c.prototype.get = o, c.prototype.has = i, c.prototype.set = s, e.exports = c }, "7b97": function (e, t, n) { var r = n("7e64"), a = n("a2be"), o = n("1c3c"), i = n("b1e5"), s = n("42a2"), c = n("6747"), u = n("0d24"), l = n("73ac"), d = 1, f = "[object Arguments]", p = "[object Array]", h = "[object Object]", v = Object.prototype, b = v.hasOwnProperty; function m(e, t, n, v, m, g) { var y = c(e), w = c(t), x = y ? p : s(e), D = w ? p : s(t); x = x == f ? h : x, D = D == f ? h : D; var j = x == h, O = D == h, k = x == D; if (k && u(e)) { if (!u(t)) return !1; y = !0, j = !1 } if (k && !j) return g || (g = new r), y || l(e) ? a(e, t, n, v, m, g) : o(e, t, x, n, v, m, g); if (!(n & d)) { var M = j && b.call(e, "__wrapped__"), P = O && b.call(t, "__wrapped__"); if (M || P) { var S = M ? e.value() : e, Y = P ? t.value() : t; return g || (g = new r), m(S, Y, n, v, g) } } return !!k && (g || (g = new r), i(e, t, n, v, m, g)) } e.exports = m }, "7c64": function (e, t, n) { var r = n("e24b"), a = n("5e2e"), o = n("79bc"); function i() { this.size = 0, this.__data__ = { hash: new r, map: new (o || a), string: new r } } e.exports = i }, "7c73": function (e, t, n) { var r, a = n("825a"), o = n("37e8"), i = n("7839"), s = n("d012"), c = n("1be4"), u = n("cc12"), l = n("f772"), d = ">", f = "<", p = "prototype", h = "script", v = l("IE_PROTO"), b = function () { }, m = function (e) { return f + h + d + e + f + "/" + h + d }, g = function (e) { e.write(m("")), e.close(); var t = e.parentWindow.Object; return e = null, t }, y = function () { var e, t = u("iframe"), n = "java" + h + ":"; return t.style.display = "none", c.appendChild(t), t.src = String(n), e = t.contentWindow.document, e.open(), e.write(m("document.F=Object")), e.close(), e.F }, w = function () { try { r = document.domain && new ActiveXObject("htmlfile") } catch (t) { } w = r ? g(r) : y(); var e = i.length; while (e--) delete w[p][i[e]]; return w() }; s[v] = !0, e.exports = Object.create || function (e, t) { var n; return null !== e ? (b[p] = a(e), n = new b, b[p] = null, n[v] = e) : n = w(), void 0 === t ? n : o(n, t) } }, "7d1f": function (e, t, n) { var r = n("087d"), a = n("6747"); function o(e, t, n) { var o = t(e); return a(e) ? o : r(o, n(e)) } e.exports = o }, "7dd0": function (e, t, n) { "use strict"; var r = n("23e7"), a = n("9ed3"), o = n("e163"), i = n("d2bb"), s = n("d44e"), c = n("9112"), u = n("6eeb"), l = n("b622"), d = n("c430"), f = n("3f8c"), p = n("ae93"), h = p.IteratorPrototype, v = p.BUGGY_SAFARI_ITERATORS, b = l("iterator"), m = "keys", g = "values", y = "entries", w = function () { return this }; e.exports = function (e, t, n, l, p, x, D) { a(n, t, l); var j, O, k, M = function (e) { if (e === p && _) return _; if (!v && e in Y) return Y[e]; switch (e) { case m: return function () { return new n(this, e) }; case g: return function () { return new n(this, e) }; case y: return function () { return new n(this, e) } }return function () { return new n(this) } }, P = t + " Iterator", S = !1, Y = e.prototype, E = Y[b] || Y["@@iterator"] || p && Y[p], _ = !v && E || M(p), T = "Array" == t && Y.entries || E; if (T && (j = o(T.call(new e)), h !== Object.prototype && j.next && (d || o(j) === h || (i ? i(j, h) : "function" != typeof j[b] && c(j, b, w)), s(j, P, !0, !0), d && (f[P] = w))), p == g && E && E.name !== g && (S = !0, _ = function () { return E.call(this) }), d && !D || Y[b] === _ || c(Y, b, _), f[t] = _, p) if (O = { values: M(g), keys: x ? _ : M(m), entries: M(y) }, D) for (k in O) (v || S || !(k in Y)) && u(Y, k, O[k]); else r({ target: t, proto: !0, forced: v || S }, O); return O } }, "7e64": function (e, t, n) { var r = n("5e2e"), a = n("efb6"), o = n("2fcc"), i = n("802a"), s = n("55a3"), c = n("d02c"); function u(e) { var t = this.__data__ = new r(e); this.size = t.size } u.prototype.clear = a, u.prototype["delete"] = o, u.prototype.get = i, u.prototype.has = s, u.prototype.set = c, e.exports = u }, "7ed2": function (e, t) { var n = "__lodash_hash_undefined__"; function r(e) { return this.__data__.set(e, n), this } e.exports = r }, "7efe": function (e) { e.exports = JSON.parse('{"title":"MMMM YYYY","weekdays":"W","navMonths":"MMM","input":["L","YYYY-MM-DD","YYYY/MM/DD"],"inputDateTime":["L h:mm A","YYYY-MM-DD h:mm A","YYYY/MM/DD h:mm A"],"inputDateTime24hr":["L HH:mm","YYYY-MM-DD HH:mm","YYYY/MM/DD HH:mm"],"inputTime":["h:mm A"],"inputTime24hr":["HH:mm"],"dayPopover":"WWW, MMM D, YYYY","data":["L","YYYY-MM-DD","YYYY/MM/DD"],"iso":"YYYY-MM-DDTHH:mm:ss.SSSZ"}') }, "7f9a": function (e, t, n) { var r = n("da84"), a = n("8925"), o = r.WeakMap; e.exports = "function" === typeof o && /native code/.test(a(o)) }, "802a": function (e, t) { function n(e) { return this.__data__.get(e) } e.exports = n }, 8057: function (e, t) { function n(e, t) { var n = -1, r = null == e ? 0 : e.length; while (++n < r) if (!1 === t(e[n], n, e)) break; return e } e.exports = n }, "825a": function (e, t, n) { var r = n("861d"); e.exports = function (e) { if (!r(e)) throw TypeError(String(e) + " is not an object"); return e } }, 8296: function (e, t, n) { var r = n("656b"), a = n("2b10"); function o(e, t) { return t.length < 2 ? e : r(e, a(t, 0, -1)) } e.exports = o }, 8384: function (e, t) { function n(e, t, n) { return e === e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e } e.exports = n }, "83ab": function (e, t, n) { var r = n("d039"); e.exports = !r((function () { return 7 != Object.defineProperty({}, 1, { get: function () { return 7 } })[1] })) }, "85a9": function (e) { e.exports = JSON.parse('{"sm":"640px","md":"768px","lg":"1024px","xl":"1280px"}') }, "85e3": function (e, t) { function n(e, t, n) { switch (n.length) { case 0: return e.call(t); case 1: return e.call(t, n[0]); case 2: return e.call(t, n[0], n[1]); case 3: return e.call(t, n[0], n[1], n[2]) }return e.apply(t, n) } e.exports = n }, 8604: function (e, t, n) { var r = n("26e8"), a = n("e2c0"); function o(e, t) { return null != e && a(e, t, r) } e.exports = o }, "861d": function (e, t) { e.exports = function (e) { return "object" === typeof e ? null !== e : "function" === typeof e } }, "872a": function (e, t, n) { var r = n("3b4a"); function a(e, t, n) { "__proto__" == t && r ? r(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n } e.exports = a }, 8925: function (e, t, n) { var r = n("c6cd"), a = Function.toString; "function" != typeof r.inspectSource && (r.inspectSource = function (e) { return a.call(e) }), e.exports = r.inspectSource }, "89d9": function (e, t, n) { var r = n("656b"), a = n("159a"), o = n("e2e4"); function i(e, t, n) { var i = -1, s = t.length, c = {}; while (++i < s) { var u = t[i], l = r(e, u); n(l, u) && a(c, o(u, e), l) } return c } e.exports = i }, "8aa5": function (e, t, n) { "use strict"; var r = n("6547").charAt; e.exports = function (e, t, n) { return t + (n ? r(e, t).length : 1) } }, "8adb": function (e, t) { function n(e, t) { if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t] } e.exports = n }, "8bbf": function (t, n) { t.exports = e }, "8c86": function (e, t, n) { "use strict"; function r(e, t) { if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present") } n.d(t, "a", (function () { return r })) }, "8dad": function (e, t, n) { var r = n("1497"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("e59e570c", r, !0, { sourceMap: !1, shadowMode: !1 }) }, "8de2": function (e, t, n) { var r = n("8eeb"), a = n("9934"); function o(e) { return r(e, a(e)) } e.exports = o }, "8eeb": function (e, t, n) { var r = n("32b3"), a = n("872a"); function o(e, t, n, o) { var i = !n; n || (n = {}); var s = -1, c = t.length; while (++s < c) { var u = t[s], l = o ? o(n[u], e[u], u, n, e) : void 0; void 0 === l && (l = e[u]), i ? a(n, u, l) : r(n, u, l) } return n } e.exports = o }, "90e3": function (e, t) { var n = 0, r = Math.random(); e.exports = function (e) { return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36) } }, 9112: function (e, t, n) { var r = n("83ab"), a = n("9bf2"), o = n("5c6c"); e.exports = r ? function (e, t, n) { return a.f(e, t, o(1, n)) } : function (e, t, n) { return e[t] = n, e } }, "91e9": function (e, t) { function n(e, t) { return function (n) { return e(t(n)) } } e.exports = n }, 9263: function (e, t, n) { "use strict"; var r = n("ad6d"), a = n("9f7f"), o = RegExp.prototype.exec, i = String.prototype.replace, s = o, c = function () { var e = /a/, t = /b*/g; return o.call(e, "a"), o.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex }(), u = a.UNSUPPORTED_Y || a.BROKEN_CARET, l = void 0 !== /()??/.exec("")[1], d = c || l || u; d && (s = function (e) { var t, n, a, s, d = this, f = u && d.sticky, p = r.call(d), h = d.source, v = 0, b = e; return f && (p = p.replace("y", ""), -1 === p.indexOf("g") && (p += "g"), b = String(e).slice(d.lastIndex), d.lastIndex > 0 && (!d.multiline || d.multiline && "\n" !== e[d.lastIndex - 1]) && (h = "(?: " + h + ")", b = " " + b, v++), n = new RegExp("^(?:" + h + ")", p)), l && (n = new RegExp("^" + h + "$(?!\\s)", p)), c && (t = d.lastIndex), a = o.call(f ? n : d, b), f ? a ? (a.input = a.input.slice(v), a[0] = a[0].slice(v), a.index = d.lastIndex, d.lastIndex += a[0].length) : d.lastIndex = 0 : c && a && (d.lastIndex = d.global ? a.index + a[0].length : t), l && a && a.length > 1 && i.call(a[0], n, (function () { for (s = 1; s < arguments.length - 2; s++)void 0 === arguments[s] && (a[s] = void 0) })), a }), e.exports = s }, 9349: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return o })); n("ddb0"); var r = n("22f3"), a = n("2fa3"); class o { constructor(e, t, n) { this.theme = e, this.locale = t, this.map = {}, this.refresh(n, !0) } refresh(e, t) { var n = this; const o = {}, i = []; let s = null; const c = [], u = t ? new Set : new Set(Object.keys(this.map)); return Object(a["b"])(e) && e.forEach((function (e, l) { if (!e || !e.dates) return; const d = e.key ? e.key.toString() : l.toString(), f = e.order || 0, p = Object(a["g"])(JSON.stringify(e)); let h = n.map[d]; !t && h && h.hashcode === p ? u.delete(d) : (h = new r["a"]({ key: d, order: f, hashcode: p, ...e }, n.theme, n.locale), c.push(h)), h && h.pinPage && (s = h), o[d] = h, i.push(h) })), this.map = o, this.list = i, this.pinAttr = s, { adds: c, deletes: Array.from(u) } } } }, "93ed": function (e, t, n) { var r = n("4245"); function a(e) { var t = r(this, e)["delete"](e); return this.size -= t ? 1 : 0, t } e.exports = a }, 9404: function (e, t, n) { "use strict"; n.d(t, "j", (function () { return B })), n.d(t, "m", (function () { return Z })), n.d(t, "e", (function () { return q })), n.d(t, "f", (function () { return G })), n.d(t, "v", (function () { return K })); var r = n("6679"), a = n.n(r); n.d(t, "i", (function () { return a.a })); var o = n("501e"), i = n.n(o); n.d(t, "l", (function () { return i.a })); var s = n("e2a0"), c = n.n(s); n.d(t, "n", (function () { return c.a })); var u = n("dcbe"), l = n.n(u); n.d(t, "h", (function () { return l.a })); var d = n("9520"), f = n.n(d); n.d(t, "k", (function () { return f.a })); var p = n("4cfe"), h = n.n(p); n.d(t, "o", (function () { return h.a })); var v = n("6220"), b = n.n(v), m = n("f678"), g = n.n(m); n.d(t, "a", (function () { return g.a })); var y = n("9b02"), w = n.n(y); n.d(t, "d", (function () { return w.a })); var x = n("0f5c"), D = n.n(x); n.d(t, "u", (function () { return D.a })); var j = n("9e86"), O = n.n(j); n.d(t, "r", (function () { return O.a })); var k = n("f542"), M = n.n(k); n.d(t, "w", (function () { return M.a })); var P = n("95ae"), S = n.n(P); n.d(t, "b", (function () { return S.a })); var Y = n("3f84"), E = n.n(Y); n.d(t, "c", (function () { return E.a })); var _ = n("2593"), T = n.n(_); n.d(t, "t", (function () { return T.a })); var I = n("3eea"), C = n.n(I); n.d(t, "s", (function () { return C.a })); var $ = n("3852"), A = n.n($), N = n("dd61"), F = n.n(N); n.d(t, "q", (function () { return F.a })); var z = n("a59b"), L = n.n(z); n.d(t, "g", (function () { return L.a })); var H = n("4416"), R = n.n(H); n.d(t, "p", (function () { return R.a })); var W = n("3092"), V = n.n(W); const U = function (e) { return Object.prototype.toString.call(e).slice(8, -1) }, B = function (e) { return b()(e) && !isNaN(e.getTime()) }, Z = function (e) { return "Object" === U(e) }, q = A.a, G = function (e, t) { return V()(t, (function (t) { return A()(e, t) })) }, K = V.a }, "94ca": function (e, t, n) { var r = n("d039"), a = /#|\.prototype\./, o = function (e, t) { var n = s[i(e)]; return n == u || n != c && ("function" == typeof t ? r(t) : !!t) }, i = o.normalize = function (e) { return String(e).replace(a, ".").toLowerCase() }, s = o.data = {}, c = o.NATIVE = "N", u = o.POLYFILL = "P"; e.exports = o }, "950a": function (e, t, n) { var r = n("30c9"); function a(e, t) { return function (n, a) { if (null == n) return n; if (!r(n)) return e(n, a); var o = n.length, i = t ? o : -1, s = Object(n); while (t ? i-- : ++i < o) if (!1 === a(s[i], i, s)) break; return n } } e.exports = a }, 9520: function (e, t, n) { var r = n("3729"), a = n("1a8c"), o = "[object AsyncFunction]", i = "[object Function]", s = "[object GeneratorFunction]", c = "[object Proxy]"; function u(e) { if (!a(e)) return !1; var t = r(e); return t == i || t == s || t == o || t == c } e.exports = u }, "95ae": function (e, t, n) { var r = n("100e"), a = n("9638"), o = n("9aff"), i = n("9934"), s = Object.prototype, c = s.hasOwnProperty, u = r((function (e, t) { e = Object(e); var n = -1, r = t.length, u = r > 2 ? t[2] : void 0; u && o(t[0], t[1], u) && (r = 1); while (++n < r) { var l = t[n], d = i(l), f = -1, p = d.length; while (++f < p) { var h = d[f], v = e[h]; (void 0 === v || a(v, s[h]) && !c.call(e, h)) && (e[h] = l[h]) } } return e })); e.exports = u }, 9638: function (e, t) { function n(e, t) { return e === t || e !== e && t !== t } e.exports = n }, "966f": function (e, t, n) { var r = n("7e64"), a = n("c05f"), o = 1, i = 2; function s(e, t, n, s) { var c = n.length, u = c, l = !s; if (null == e) return !u; e = Object(e); while (c--) { var d = n[c]; if (l && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1 } while (++c < u) { d = n[c]; var f = d[0], p = e[f], h = d[1]; if (l && d[2]) { if (void 0 === p && !(f in e)) return !1 } else { var v = new r; if (s) var b = s(p, h, f, e, t, v); if (!(void 0 === b ? a(h, p, o | i, s, v) : b)) return !1 } } return !0 } e.exports = s }, "96f3": function (e, t) { var n = Object.prototype, r = n.hasOwnProperty; function a(e, t) { return null != e && r.call(e, t) } e.exports = a }, "97d3": function (e, t, n) { var r = n("48a0"), a = n("30c9"); function o(e, t) { var n = -1, o = a(e) ? Array(e.length) : []; return r(e, (function (e, r, a) { o[++n] = t(e, r, a) })), o } e.exports = o }, 9934: function (e, t, n) { var r = n("6fcd"), a = n("41c3"), o = n("30c9"); function i(e) { return o(e) ? r(e, !0) : a(e) } e.exports = i }, "99cd": function (e, t) { function n(e) { return function (t, n, r) { var a = -1, o = Object(t), i = r(t), s = i.length; while (s--) { var c = i[e ? s : ++a]; if (!1 === n(o[c], c, o)) break } return t } } e.exports = n }, "99d3": function (e, t, n) { (function (e) { var r = n("585a"), a = t && !t.nodeType && t, o = a && "object" == typeof e && e && !e.nodeType && e, i = o && o.exports === a, s = i && r.process, c = function () { try { var e = o && o.require && o.require("util").types; return e || s && s.binding && s.binding("util") } catch (t) { } }(); e.exports = c }).call(this, n("62e4")(e)) }, "9aff": function (e, t, n) { var r = n("9638"), a = n("30c9"), o = n("c098"), i = n("1a8c"); function s(e, t, n) { if (!i(n)) return !1; var s = typeof t; return !!("number" == s ? a(n) && o(t, n.length) : "string" == s && t in n) && r(n[t], e) } e.exports = s }, "9b02": function (e, t, n) { var r = n("656b"); function a(e, t, n) { var a = null == e ? void 0 : r(e, t); return void 0 === a ? n : a } e.exports = a }, "9bf2": function (e, t, n) { var r = n("83ab"), a = n("0cfb"), o = n("825a"), i = n("c04e"), s = Object.defineProperty; t.f = r ? s : function (e, t, n) { if (o(e), t = i(t, !0), o(n), a) try { return s(e, t, n) } catch (r) { } if ("get" in n || "set" in n) throw TypeError("Accessors not supported"); return "value" in n && (e[t] = n.value), e } }, "9e2e": function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-pane-container{width:100%;position:relative}.vc-pane-container.in-transition{overflow:hidden}.vc-pane-layout{display:grid}.vc-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;pointer-events:auto;color:var(--gray-600);border-width:2px;border-style:solid;border-radius:var(--rounded);border-color:transparent}.vc-arrow:hover{background:var(--gray-200)}.vc-arrow:focus{border-color:var(--gray-300)}.vc-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-day-popover-container{color:var(--white);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded);font-size:var(--text-xs);font-weight:var(--font-medium);padding:4px 8px;box-shadow:var(--shadow)}.vc-day-popover-header{font-size:var(--text-xs);color:var(--gray-300);font-weight:var(--font-semibold);text-align:center}.vc-arrows-container{width:100%;position:absolute;top:0;display:flex;justify-content:space-between;padding:8px 10px;pointer-events:none}.vc-arrows-container.title-left{justify-content:flex-end}.vc-arrows-container.title-right{justify-content:flex-start}.vc-is-dark .vc-arrow{color:var(--white)}.vc-is-dark .vc-arrow:hover{background:var(--gray-800)}.vc-is-dark .vc-arrow:focus{border-color:var(--gray-700)}.vc-is-dark .vc-day-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}.vc-is-dark .vc-day-popover-header{color:var(--gray-700)}", ""]), e.exports = t }, "9e69": function (e, t, n) { var r = n("2b3e"), a = r.Symbol; e.exports = a }, "9e83": function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-nav-popover-container{color:var(--white);font-size:var(--text-sm);font-weight:var(--font-semibold);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded-lg);padding:4px;box-shadow:var(--shadow)}.vc-is-dark .vc-nav-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}", ""]), e.exports = t }, "9e86": function (e, t, n) { var r = n("872a"), a = n("242e"), o = n("badf"); function i(e, t) { var n = {}; return t = o(t, 3), a(e, (function (e, a, o) { r(n, a, t(e, a, o)) })), n } e.exports = i }, "9ed3": function (e, t, n) { "use strict"; var r = n("ae93").IteratorPrototype, a = n("7c73"), o = n("5c6c"), i = n("d44e"), s = n("3f8c"), c = function () { return this }; e.exports = function (e, t, n) { var u = t + " Iterator"; return e.prototype = a(r, { next: o(1, n) }), i(e, u, !1, !0), s[u] = c, e } }, "9f7f": function (e, t, n) { "use strict"; var r = n("d039"); function a(e, t) { return RegExp(e, t) } t.UNSUPPORTED_Y = r((function () { var e = a("a", "y"); return e.lastIndex = 2, null != e.exec("abcd") })), t.BROKEN_CARET = r((function () { var e = a("^r", "gy"); return e.lastIndex = 2, null != e.exec("str") })) }, a029: function (e, t, n) { var r = n("087d"), a = n("2dcb"), o = n("32f4"), i = n("d327"), s = Object.getOwnPropertySymbols, c = s ? function (e) { var t = []; while (e) r(t, o(e)), e = a(e); return t } : i; e.exports = c }, a2be: function (e, t, n) { var r = n("d612"), a = n("4284"), o = n("c584"), i = 1, s = 2; function c(e, t, n, c, u, l) { var d = n & i, f = e.length, p = t.length; if (f != p && !(d && p > f)) return !1; var h = l.get(e), v = l.get(t); if (h && v) return h == t && v == e; var b = -1, m = !0, g = n & s ? new r : void 0; l.set(e, t), l.set(t, e); while (++b < f) { var y = e[b], w = t[b]; if (c) var x = d ? c(w, y, b, t, e, l) : c(y, w, b, e, t, l); if (void 0 !== x) { if (x) continue; m = !1; break } if (g) { if (!a(t, (function (e, t) { if (!o(g, t) && (y === e || u(y, e, n, c, l))) return g.push(t) }))) { m = !1; break } } else if (y !== w && !u(y, w, n, c, l)) { m = !1; break } } return l["delete"](e), l["delete"](t), m } e.exports = c }, a2db: function (e, t, n) { var r = n("9e69"), a = r ? r.prototype : void 0, o = a ? a.valueOf : void 0; function i(e) { return o ? Object(o.call(e)) : {} } e.exports = i }, a3fd: function (e, t, n) { var r = n("7948"); function a(e, t) { return r(t, (function (t) { return [t, e[t]] })) } e.exports = a }, a454: function (e, t, n) { var r = n("72f0"), a = n("3b4a"), o = n("cd9d"), i = a ? function (e, t) { return a(e, "toString", { configurable: !0, enumerable: !1, value: r(t), writable: !0 }) } : o; e.exports = i }, a524: function (e, t, n) { var r = n("4245"); function a(e) { return r(this, e).has(e) } e.exports = a }, a59b: function (e, t) { function n(e) { return e && e.length ? e[0] : void 0 } e.exports = n }, a691: function (e, t) { var n = Math.ceil, r = Math.floor; e.exports = function (e) { return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e) } }, a994: function (e, t, n) { var r = n("7d1f"), a = n("32f4"), o = n("ec69"); function i(e) { return r(e, o, a) } e.exports = i }, ac1f: function (e, t, n) { "use strict"; var r = n("23e7"), a = n("9263"); r({ target: "RegExp", proto: !0, forced: /./.exec !== a }, { exec: a }) }, ac41: function (e, t) { function n(e) { var t = -1, n = Array(e.size); return e.forEach((function (e) { n[++t] = e })), n } e.exports = n }, ad6d: function (e, t, n) { "use strict"; var r = n("825a"); e.exports = function () { var e = r(this), t = ""; return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t } }, ae93: function (e, t, n) { "use strict"; var r, a, o, i = n("e163"), s = n("9112"), c = n("5135"), u = n("b622"), l = n("c430"), d = u("iterator"), f = !1, p = function () { return this };[].keys && (o = [].keys(), "next" in o ? (a = i(i(o)), a !== Object.prototype && (r = a)) : f = !0), void 0 == r && (r = {}), l || c(r, d) || s(r, d, p), e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f } }, b047: function (e, t) { function n(e) { return function (t) { return e(t) } } e.exports = n }, b1d2: function (e, t, n) { var r = n("3729"), a = n("1310"), o = "[object Date]"; function i(e) { return a(e) && r(e) == o } e.exports = i }, b1e5: function (e, t, n) { var r = n("a994"), a = 1, o = Object.prototype, i = o.hasOwnProperty; function s(e, t, n, o, s, c) { var u = n & a, l = r(e), d = l.length, f = r(t), p = f.length; if (d != p && !u) return !1; var h = d; while (h--) { var v = l[h]; if (!(u ? v in t : i.call(t, v))) return !1 } var b = c.get(e), m = c.get(t); if (b && m) return b == t && m == e; var g = !0; c.set(e, t), c.set(t, e); var y = u; while (++h < d) { v = l[h]; var w = e[v], x = t[v]; if (o) var D = u ? o(x, w, v, t, e, c) : o(w, x, v, e, t, c); if (!(void 0 === D ? w === x || s(w, x, n, o, c) : D)) { g = !1; break } y || (y = "constructor" == v) } if (g && !y) { var j = e.constructor, O = t.constructor; j == O || !("constructor" in e) || !("constructor" in t) || "function" == typeof j && j instanceof j && "function" == typeof O && O instanceof O || (g = !1) } return c["delete"](e), c["delete"](t), g } e.exports = s }, b218: function (e, t) { var n = 9007199254740991; function r(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n } e.exports = r }, b4b0: function (e, t, n) { var r = n("1a8c"), a = n("ffd6"), o = NaN, i = /^\s+|\s+$/g, s = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, u = /^0o[0-7]+$/i, l = parseInt; function d(e) { if ("number" == typeof e) return e; if (a(e)) return o; if (r(e)) { var t = "function" == typeof e.valueOf ? e.valueOf() : e; e = r(t) ? t + "" : t } if ("string" != typeof e) return 0 === e ? e : +e; e = e.replace(i, ""); var n = c.test(e); return n || u.test(e) ? l(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e } e.exports = d }, b4c0: function (e, t, n) { var r = n("cb5a"); function a(e) { var t = this.__data__, n = r(t, e); return n < 0 ? void 0 : t[n][1] } e.exports = a }, b5a7: function (e, t, n) { var r = n("0b07"), a = n("2b3e"), o = r(a, "DataView"); e.exports = o }, b622: function (e, t, n) { var r = n("da84"), a = n("5692"), o = n("5135"), i = n("90e3"), s = n("4930"), c = n("fdbf"), u = a("wks"), l = r.Symbol, d = c ? l : l && l.withoutSetter || i; e.exports = function (e) { return o(u, e) || (s && o(l, e) ? u[e] = l[e] : u[e] = d("Symbol." + e)), u[e] } }, b760: function (e, t, n) { var r = n("872a"), a = n("9638"); function o(e, t, n) { (void 0 !== n && !a(e[t], n) || void 0 === n && !(t in e)) && r(e, t, n) } e.exports = o }, b803: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-day-popover-row[data-v-4975d69e]{--day-content-transition-time:0.13s ease-in;display:flex;align-items:center;transition:all var(--day-content-transition-time)}.vc-day-popover-row[data-v-4975d69e]:not(:first-child){margin-top:3px}.vc-day-popover-row-indicator[data-v-4975d69e]{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px;margin-right:3px}.vc-day-popover-row-indicator span[data-v-4975d69e]{transition:all var(--day-content-transition-time)}.vc-day-popover-row-content[data-v-4975d69e]{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:-webkit-max-content;width:max-content}", ""]), e.exports = t }, badf: function (e, t, n) { var r = n("642a"), a = n("1838"), o = n("cd9d"), i = n("6747"), s = n("f9ce"); function c(e) { return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? i(e) ? a(e[0], e[1]) : r(e) : s(e) } e.exports = c }, bbc0: function (e, t, n) { var r = n("6044"), a = "__lodash_hash_undefined__", o = Object.prototype, i = o.hasOwnProperty; function s(e) { var t = this.__data__; if (r) { var n = t[e]; return n === a ? void 0 : n } return i.call(t, e) ? t[e] : void 0 } e.exports = s }, bffb: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, '.vc-popover-content-wrapper[data-v-05016e86]{--popover-horizontal-content-offset:8px;--popover-vertical-content-offset:10px;--popover-slide-translation:15px;--popover-transition-time:0.14s ease-in-out;--popover-caret-horizontal-offset:18px;--popover-caret-vertical-offset:8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper[data-v-05016e86]:not(.is-interactive){pointer-events:none}.vc-popover-content[data-v-05016e86]{position:relative;outline:none;z-index:10;box-shadow:var(--shadow-lg)}.vc-popover-content.direction-bottom[data-v-05016e86]{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top[data-v-05016e86]{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left[data-v-05016e86]{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right[data-v-05016e86]{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret[data-v-05016e86]{content:"";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;-webkit-user-select:none;user-select:none;z-index:-1}.vc-popover-caret.direction-bottom[data-v-05016e86]{top:0}.vc-popover-caret.direction-bottom.align-left[data-v-05016e86]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center[data-v-05016e86]{transform:translateX(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right[data-v-05016e86]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top[data-v-05016e86]{top:100%}.vc-popover-caret.direction-top.align-left[data-v-05016e86]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center[data-v-05016e86]{transform:translateX(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right[data-v-05016e86]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left[data-v-05016e86]{left:100%}.vc-popover-caret.direction-left.align-top[data-v-05016e86]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle[data-v-05016e86]{transform:translateY(-50%) translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom[data-v-05016e86]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-right[data-v-05016e86]{left:0}.vc-popover-caret.direction-right.align-top[data-v-05016e86]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle[data-v-05016e86]{transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom[data-v-05016e86]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.align-left[data-v-05016e86]{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center[data-v-05016e86]{left:50%}.vc-popover-caret.align-right[data-v-05016e86]{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top[data-v-05016e86]{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle[data-v-05016e86]{top:50%}.vc-popover-caret.align-bottom[data-v-05016e86]{bottom:var(--popover-caret-vertical-offset)}.fade-enter-active[data-v-05016e86],.fade-leave-active[data-v-05016e86],.slide-fade-enter-active[data-v-05016e86],.slide-fade-leave-active[data-v-05016e86]{transition:all var(--popover-transition-time);pointer-events:none}.fade-enter[data-v-05016e86],.fade-leave-to[data-v-05016e86],.slide-fade-enter[data-v-05016e86],.slide-fade-leave-to[data-v-05016e86]{opacity:0}.slide-fade-enter.direction-bottom[data-v-05016e86],.slide-fade-leave-to.direction-bottom[data-v-05016e86]{transform:translateY(calc(var(--popover-slide-translation)*-1))}.slide-fade-enter.direction-top[data-v-05016e86],.slide-fade-leave-to.direction-top[data-v-05016e86]{transform:translateY(var(--popover-slide-translation))}.slide-fade-enter.direction-left[data-v-05016e86],.slide-fade-leave-to.direction-left[data-v-05016e86]{transform:translateX(var(--popover-slide-translation))}.slide-fade-enter.direction-right[data-v-05016e86],.slide-fade-leave-to.direction-right[data-v-05016e86]{transform:translateX(calc(var(--popover-slide-translation)*-1))}', ""]), e.exports = t }, c04e: function (e, t, n) { var r = n("861d"); e.exports = function (e, t) { if (!r(e)) return e; var n, a; if (t && "function" == typeof (n = e.toString) && !r(a = n.call(e))) return a; if ("function" == typeof (n = e.valueOf) && !r(a = n.call(e))) return a; if (!t && "function" == typeof (n = e.toString) && !r(a = n.call(e))) return a; throw TypeError("Can't convert object to primitive value") } }, c05f: function (e, t, n) { var r = n("7b97"), a = n("1310"); function o(e, t, n, i, s) { return e === t || (null == e || null == t || !a(e) && !a(t) ? e !== e && t !== t : r(e, t, n, i, o, s)) } e.exports = o }, c098: function (e, t) { var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/; function a(e, t) { var a = typeof e; return t = null == t ? n : t, !!t && ("number" == a || "symbol" != a && r.test(e)) && e > -1 && e % 1 == 0 && e < t } e.exports = a }, c1c9: function (e, t, n) { var r = n("a454"), a = n("f3c1"), o = a(r); e.exports = o }, c2b6: function (e, t, n) { var r = n("f8af"), a = n("5d89"), o = n("6f6c"), i = n("a2db"), s = n("c8fe"), c = "[object Boolean]", u = "[object Date]", l = "[object Map]", d = "[object Number]", f = "[object RegExp]", p = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", m = "[object DataView]", g = "[object Float32Array]", y = "[object Float64Array]", w = "[object Int8Array]", x = "[object Int16Array]", D = "[object Int32Array]", j = "[object Uint8Array]", O = "[object Uint8ClampedArray]", k = "[object Uint16Array]", M = "[object Uint32Array]"; function P(e, t, n) { var P = e.constructor; switch (t) { case b: return r(e); case c: case u: return new P(+e); case m: return a(e, n); case g: case y: case w: case x: case D: case j: case O: case k: case M: return s(e, n); case l: return new P; case d: case h: return new P(e); case f: return o(e); case p: return new P; case v: return i(e) } } e.exports = P }, c3fc: function (e, t, n) { var r = n("42a2"), a = n("1310"), o = "[object Set]"; function i(e) { return a(e) && r(e) == o } e.exports = i }, c430: function (e, t) { e.exports = !1 }, c584: function (e, t) { function n(e, t) { return e.has(t) } e.exports = n }, c6b6: function (e, t) { var n = {}.toString; e.exports = function (e) { return n.call(e).slice(8, -1) } }, c6cd: function (e, t, n) { var r = n("da84"), a = n("ce4e"), o = "__core-js_shared__", i = r[o] || a(o, {}); e.exports = i }, c6cf: function (e, t, n) { var r = n("4d8c"), a = n("2286"), o = n("c1c9"); function i(e) { return o(a(e, void 0, r), e + "") } e.exports = i }, c869: function (e, t, n) { var r = n("0b07"), a = n("2b3e"), o = r(a, "Set"); e.exports = o }, c87c: function (e, t) { var n = Object.prototype, r = n.hasOwnProperty; function a(e) { var t = e.length, n = new e.constructor(t); return t && "string" == typeof e[0] && r.call(e, "index") && (n.index = e.index, n.input = e.input), n } e.exports = a }, c8ba: function (e, t) { var n; n = function () { return this }(); try { n = n || new Function("return this")() } catch (r) { "object" === typeof window && (n = window) } e.exports = n }, c8fe: function (e, t, n) { var r = n("f8af"); function a(e, t) { var n = t ? r(e.buffer) : e.buffer; return new e.constructor(n, e.byteOffset, e.length) } e.exports = a }, ca84: function (e, t, n) { var r = n("5135"), a = n("fc6a"), o = n("4d64").indexOf, i = n("d012"); e.exports = function (e, t) { var n, s = a(e), c = 0, u = []; for (n in s) !r(i, n) && r(s, n) && u.push(n); while (t.length > c) r(s, n = t[c++]) && (~o(u, n) || u.push(n)); return u } }, cb5a: function (e, t, n) { var r = n("9638"); function a(e, t) { var n = e.length; while (n--) if (r(e[n][0], t)) return n; return -1 } e.exports = a }, cc12: function (e, t, n) { var r = n("da84"), a = n("861d"), o = r.document, i = a(o) && a(o.createElement); e.exports = function (e) { return i ? o.createElement(e) : {} } }, cc2e: function (e, t, n) { "use strict"; var r = n("8dad"), a = n.n(r); a.a }, cc45: function (e, t, n) { var r = n("1a2d"), a = n("b047"), o = n("99d3"), i = o && o.isMap, s = i ? a(i) : r; e.exports = s }, cd9d: function (e, t) { function n(e) { return e } e.exports = n }, ce4e: function (e, t, n) { var r = n("da84"), a = n("9112"); e.exports = function (e, t) { try { a(r, e, t) } catch (n) { r[e] = t } return t } }, ce86: function (e, t, n) { var r = n("9e69"), a = n("7948"), o = n("6747"), i = n("ffd6"), s = 1 / 0, c = r ? r.prototype : void 0, u = c ? c.toString : void 0; function l(e) { if ("string" == typeof e) return e; if (o(e)) return a(e, l) + ""; if (i(e)) return u ? u.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -s ? "-0" : t } e.exports = l }, cebd: function (e, t) { function n(e) { var t = -1, n = Array(e.size); return e.forEach((function (e) { n[++t] = [e, e] })), n } e.exports = n }, cfe5: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return c })); var r = n("f7f1"), a = n("2fa3"), o = n("9404"), i = n("29ae"); const s = 864e5; class c { constructor(e, { order: t = 0, locale: n, isFullDay: s } = {}) { if (this.isDateInfo = !0, this.order = t, this.locale = n instanceof i["b"] ? n : new i["b"](n), this.firstDayOfWeek = this.locale.firstDayOfWeek, !Object(o["m"])(e)) { const t = this.locale.normalizeDate(e); e = s ? { start: t, end: t } : { startOn: t, endOn: t } } let u = null, l = null; if (e.start ? u = this.locale.normalizeDate(e.start, { ...this.opts, time: "00:00:00" }) : e.startOn && (u = this.locale.normalizeDate(e.startOn, this.opts)), e.end ? l = this.locale.normalizeDate(e.end, { ...this.opts, time: "23:59:59" }) : e.endOn && (l = this.locale.normalizeDate(e.endOn, this.opts)), u && l && u > l) { const e = u; u = l, l = e } else u && e.span >= 1 && (l = Object(r["a"])(u, e.span - 1)); this.start = u, this.startTime = u ? u.getTime() : NaN, this.end = l, this.endTime = l ? l.getTime() : NaN, this.isDate = this.startTime && this.startTime === this.endTime, this.isRange = !this.isDate; const d = Object(a["i"])(e, {}, c.patternProps); if (d.assigned && (this.on = { and: d.target }), e.on) { const t = (Object(o["h"])(e.on) ? e.on : [e.on]).map((function (e) { if (Object(o["k"])(e)) return e; const t = Object(a["i"])(e, {}, c.patternProps); return t.assigned ? t.target : null })).filter((function (e) { return e })); t.length && (this.on = { ...this.on, or: t }) } this.isComplex = !!this.on } get opts() { return { order: this.order, locale: this.locale } } toDateInfo(e) { return e.isDateInfo ? e : new c(e, this.opts) } startOfWeek(e) { const t = e.getDay() + 1, n = t >= this.firstDayOfWeek ? this.firstDayOfWeek - t : -(7 - (this.firstDayOfWeek - t)); return Object(r["a"])(e, n) } diffInDays(e, t) { return Math.round((t - e) / s) } diffInWeeks(e, t) { return this.diffInDays(this.startOfWeek(e), this.startOfWeek(t)) } diffInYears(e, t) { return t.getUTCFullYear() - e.getUTCFullYear() } diffInMonths(e, t) { return 12 * this.diffInYears(e, t) + (t.getMonth() - e.getMonth()) } static get patterns() { return { dailyInterval: { test: function (e, t, n) { return n.diffInDays(n.start || new Date, e.date) % t === 0 } }, weeklyInterval: { test: function (e, t, n) { return n.diffInWeeks(n.start || new Date, e.date) % t === 0 } }, monthlyInterval: { test: function (e, t, n) { return n.diffInMonths(n.start || new Date, e.date) % t === 0 } }, yearlyInterval: { test: function () { return function (e, t, n) { return n.diffInYears(n.start || new Date, e.date) % t === 0 } } }, days: { validate: function (e) { return Object(o["h"])(e) ? e : [parseInt(e, 10)] }, test: function (e, t) { return t.includes(e.day) || t.includes(-e.dayFromEnd) } }, weekdays: { validate: function (e) { return Object(o["h"])(e) ? e : [parseInt(e, 10)] }, test: function (e, t) { return t.includes(e.weekday) } }, ordinalWeekdays: { validate: function (e) { return Object.keys(e).reduce((function (t, n) { const r = e[n]; return r ? (t[n] = Object(o["h"])(r) ? r : [parseInt(r, 10)], t) : t }), {}) }, test: function (e, t) { return Object.keys(t).map((function (e) { return parseInt(e, 10) })).find((function (n) { return t[n].includes(e.weekday) && (n === e.weekdayOrdinal || n === -e.weekdayOrdinalFromEnd) })) } }, weekends: { validate: function (e) { return e }, test: function (e) { return 1 === e.weekday || 7 === e.weekday } }, workweek: { validate: function (e) { return e }, test: function (e) { return e.weekday >= 2 && e.weekday <= 6 } }, weeks: { validate: function (e) { return Object(o["h"])(e) ? e : [parseInt(e, 10)] }, test: function (e, t) { return t.includes(e.week) || t.includes(-e.weekFromEnd) } }, months: { validate: function (e) { return Object(o["h"])(e) ? e : [parseInt(e, 10)] }, test: function (e, t) { return t.includes(e.month) } }, years: { validate: function (e) { return Object(o["h"])(e) ? e : [parseInt(e, 10)] }, test: function (e, t) { return t.includes(e.year) } } } } static get patternProps() { return Object.keys(c.patterns).map((function (e) { return { name: e, validate: c.patterns[e].validate } })) } static testConfig(e, t, n) { return Object(o["k"])(e) ? e(t) : Object(o["m"])(e) ? Object.keys(e).every((function (r) { return c.patterns[r].test(t, e[r], n) })) : null } iterateDatesInRange({ start: e, end: t }, n) { if (!e || !t || !Object(o["k"])(n)) return null; e = this.locale.normalizeDate(e, { ...this.opts, time: "00:00:00" }); const a = { i: 0, date: e, day: this.locale.getDateParts(e), finished: !1 }; let i = null; for (; !a.finished && a.date <= t; a.i++)i = n(a), a.date = Object(r["a"])(a.date, 1), a.day = this.locale.getDateParts(a.date); return i } shallowIntersectingRange(e) { return this.rangeShallowIntersectingRange(this, this.toDateInfo(e)) } rangeShallowIntersectingRange(e, t) { if (!this.dateShallowIntersectsDate(e, t)) return null; const n = e.toRange(), r = t.toRange(); let a = null, o = null; return n.start ? a = r.start ? n.start > r.start ? n.start : r.start : n.start : r.start && (a = r.start), n.end ? o = r.end ? n.end < r.end ? n.end : r.end : n.end : r.end && (o = r.end), { start: a, end: o } } intersectsDate(e) { var t = this; const n = this.toDateInfo(e); if (!this.shallowIntersectsDate(n)) return null; if (!this.on) return this; const r = this.rangeShallowIntersectingRange(this, n); let a = !1; return this.iterateDatesInRange(r, (function (e) { t.matchesDay(e.day) && (a = a || n.matchesDay(e.day), e.finished = a) })), a } shallowIntersectsDate(e) { return this.dateShallowIntersectsDate(this, this.toDateInfo(e)) } dateShallowIntersectsDate(e, t) { return e.isDate ? t.isDate ? e.startTime === t.startTime : this.dateShallowIncludesDate(t, e) : t.isDate ? this.dateShallowIncludesDate(e, t) : !(e.start && t.end && e.start > t.end) && !(e.end && t.start && e.end < t.start) } includesDate(e) { var t = this; const n = this.toDateInfo(e); if (!this.shallowIncludesDate(n)) return !1; if (!this.on) return !0; const r = this.rangeShallowIntersectingRange(this, n); let a = !0; return this.iterateDatesInRange(r, (function (e) { t.matchesDay(e.day) && (a = a && n.matchesDay(e.day), e.finished = !a) })), a } shallowIncludesDate(e) { return this.dateShallowIncludesDate(this, e.isDate ? e : new c(e, this.opts)) } dateShallowIncludesDate(e, t) { return e.isDate ? t.isDate ? e.startTime === t.startTime : !(!t.startTime || !t.endTime) && (e.startTime === t.startTime && e.startTime === t.endTime) : t.isDate ? !(e.start && t.start < e.start) && !(e.end && t.start > e.end) : !(e.start && (!t.start || t.start < e.start)) && !(e.end && (!t.end || t.end > e.end)) } intersectsDay(e) { return this.shallowIntersectsDate(e.range) && this.matchesDay(e) ? this : null } matchesDay(e) { var t = this; return !this.on || !(this.on.and && !c.testConfig(this.on.and, e, this)) && !(this.on.or && !this.on.or.some((function (n) { return c.testConfig(n, e, t) }))) } toRange() { return new c({ start: this.start, end: this.end }, this.opts) } compare(e) { if (this.order !== e.order) return this.order - e.order; if (this.isDate !== e.isDate) return this.isDate ? 1 : -1; if (this.isDate) return 0; const t = this.start - e.start; return 0 !== t ? t : this.end - e.end } } }, d012: function (e, t) { e.exports = {} }, d02c: function (e, t, n) { var r = n("5e2e"), a = n("79bc"), o = n("7b83"), i = 200; function s(e, t) { var n = this.__data__; if (n instanceof r) { var s = n.__data__; if (!a || s.length < i - 1) return s.push([e, t]), this.size = ++n.size, this; n = this.__data__ = new o(s) } return n.set(e, t), this.size = n.size, this } e.exports = s }, d039: function (e, t) { e.exports = function (e) { try { return !!e() } catch (t) { return !0 } } }, d066: function (e, t, n) { var r = n("428f"), a = n("da84"), o = function (e) { return "function" == typeof e ? e : void 0 }; e.exports = function (e, t) { return arguments.length < 2 ? o(r[e]) || o(a[e]) : r[e] && r[e][t] || a[e] && a[e][t] } }, d1e7: function (e, t, n) { "use strict"; var r = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, o = a && !r.call({ 1: 2 }, 1); t.f = o ? function (e) { var t = a(this, e); return !!t && t.enumerable } : r }, d2bb: function (e, t, n) { var r = n("825a"), a = n("3bbe"); e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () { var e, t = !1, n = {}; try { e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, e.call(n, []), t = n instanceof Array } catch (o) { } return function (n, o) { return r(n), a(o), t ? e.call(n, o) : n.__proto__ = o, n } }() : void 0) }, d2e1: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-time-picker[data-v-ee473b46]{display:flex;align-items:center;padding:8px}.vc-time-picker.vc-invalid[data-v-ee473b46]{pointer-events:none;opacity:.5}.vc-time-picker.vc-bordered[data-v-ee473b46]{border-top:1px solid var(--gray-400)}.vc-date-time[data-v-ee473b46]{margin-left:8px}.vc-disabled[data-v-ee473b46]{pointer-events:none;opacity:.5}.vc-time-icon[data-v-ee473b46]{width:16px;height:16px;color:var(--gray-600)}.vc-date[data-v-ee473b46]{display:flex;align-items:center;font-size:var(--text-sm);font-weight:var(--font-semibold);text-transform:uppercase;padding:0 0 4px 4px;margin-top:-4px}.vc-date .vc-weekday[data-v-ee473b46]{color:var(--gray-700);letter-spacing:var(--tracking-wide)}.vc-date .vc-month[data-v-ee473b46]{color:var(--accent-600);margin-left:8px}.vc-date .vc-day[data-v-ee473b46]{color:var(--accent-600);margin-left:4px}.vc-date .vc-year[data-v-ee473b46]{color:var(--gray-500);margin-left:8px}.vc-am-pm[data-v-ee473b46],.vc-time[data-v-ee473b46]{display:flex;align-items:center}.vc-am-pm[data-v-ee473b46]{background:var(--gray-200);margin-left:8px;padding:4px;border-radius:var(--rounded);height:30px}.vc-am-pm button[data-v-ee473b46]{color:var(--gray-900);font-size:var(--text-sm);font-weight:var(--font-medium);padding:0 4px;background:transparent;border:2px solid transparent;border-radius:var(--rounded);line-height:var(--leading-snug)}.vc-am-pm button[data-v-ee473b46]:hover{color:var(--gray-600)}.vc-am-pm button[data-v-ee473b46]:focus{border-color:var(--accent-400)}.vc-am-pm button.active[data-v-ee473b46]{background:var(--accent-600);color:var(--white)}.vc-am-pm button.active[data-v-ee473b46]:hover{background:var(--accent-500)}.vc-am-pm button.active[data-v-ee473b46]:focus{border-color:var(--accent-400)}.vc-is-dark .vc-time-picker[data-v-ee473b46]{border-color:var(--gray-700)}.vc-is-dark .vc-time-icon[data-v-ee473b46],.vc-is-dark .vc-weekday[data-v-ee473b46]{color:var(--gray-400)}.vc-is-dark .vc-day[data-v-ee473b46],.vc-is-dark .vc-month[data-v-ee473b46]{color:var(--accent-400)}.vc-is-dark .vc-year[data-v-ee473b46]{color:var(--gray-500)}.vc-is-dark .vc-am-pm[data-v-ee473b46]{background:var(--gray-700)}.vc-is-dark .vc-am-pm[data-v-ee473b46]:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button[data-v-ee473b46]{color:var(--gray-100)}.vc-is-dark .vc-am-pm button[data-v-ee473b46]:hover{color:var(--gray-400)}.vc-is-dark .vc-am-pm button[data-v-ee473b46]:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button.active[data-v-ee473b46]{background:var(--accent-500);color:var(--white)}.vc-is-dark .vc-am-pm button.active[data-v-ee473b46]:hover{background:var(--accent-600)}.vc-is-dark .vc-am-pm button.active[data-v-ee473b46]:focus{border-color:var(--accent-500)}", ""]), e.exports = t }, d327: function (e, t) { function n() { return [] } e.exports = n }, d370: function (e, t, n) { var r = n("253c"), a = n("1310"), o = Object.prototype, i = o.hasOwnProperty, s = o.propertyIsEnumerable, c = r(function () { return arguments }()) ? r : function (e) { return a(e) && i.call(e, "callee") && !s.call(e, "callee") }; e.exports = c }, d44e: function (e, t, n) { var r = n("9bf2").f, a = n("5135"), o = n("b622"), i = o("toStringTag"); e.exports = function (e, t, n) { e && !a(e = n ? e : e.prototype, i) && r(e, i, { configurable: !0, value: t }) } }, d458: function (e, t, n) { "use strict"; var r = n("08de"), a = n.n(r); a.a }, d483: function (e, t, n) { var r = n("bffb"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("e3b25692", r, !0, { sourceMap: !1, shadowMode: !1 }) }, d612: function (e, t, n) { var r = n("7b83"), a = n("7ed2"), o = n("dc0f"); function i(e) { var t = -1, n = null == e ? 0 : e.length; this.__data__ = new r; while (++t < n) this.add(e[t]) } i.prototype.add = i.prototype.push = a, i.prototype.has = o, e.exports = i }, d784: function (e, t, n) { "use strict"; n("ac1f"); var r = n("6eeb"), a = n("d039"), o = n("b622"), i = n("9263"), s = n("9112"), c = o("species"), u = !a((function () { var e = /./; return e.exec = function () { var e = []; return e.groups = { a: "7" }, e }, "7" !== "".replace(e, "$<a>") })), l = function () { return "$0" === "a".replace(/./, "$0") }(), d = o("replace"), f = function () { return !!/./[d] && "" === /./[d]("a", "$0") }(), p = !a((function () { var e = /(?:)/, t = e.exec; e.exec = function () { return t.apply(this, arguments) }; var n = "ab".split(e); return 2 !== n.length || "a" !== n[0] || "b" !== n[1] })); e.exports = function (e, t, n, d) { var h = o(e), v = !a((function () { var t = {}; return t[h] = function () { return 7 }, 7 != ""[e](t) })), b = v && !a((function () { var t = !1, n = /a/; return "split" === e && (n = {}, n.constructor = {}, n.constructor[c] = function () { return n }, n.flags = "", n[h] = /./[h]), n.exec = function () { return t = !0, null }, n[h](""), !t })); if (!v || !b || "replace" === e && (!u || !l || f) || "split" === e && !p) { var m = /./[h], g = n(h, ""[e], (function (e, t, n, r, a) { return t.exec === i ? v && !a ? { done: !0, value: m.call(t, n, r) } : { done: !0, value: e.call(n, t, r) } : { done: !1 } }), { REPLACE_KEEPS_$0: l, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f }), y = g[0], w = g[1]; r(String.prototype, e, y), r(RegExp.prototype, h, 2 == t ? function (e, t) { return w.call(e, this, t) } : function (e) { return w.call(e, this) }) } d && s(RegExp.prototype[h], "sham", !0) } }, d7ee: function (e, t, n) { var r = n("c3fc"), a = n("b047"), o = n("99d3"), i = o && o.isSet, s = i ? a(i) : r; e.exports = s }, d99e: function (e, t, n) { "use strict"; var r = n("d483"), a = n.n(r); a.a }, da03: function (e, t, n) { var r = n("2b3e"), a = r["__core-js_shared__"]; e.exports = a }, da84: function (e, t, n) { (function (t) { var n = function (e) { return e && e.Math == Math && e }; e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")() }).call(this, n("c8ba")) }, dc0f: function (e, t) { function n(e) { return this.__data__.has(e) } e.exports = n }, dc57: function (e, t) { var n = Function.prototype, r = n.toString; function a(e) { if (null != e) { try { return r.call(e) } catch (t) { } try { return e + "" } catch (t) { } } return "" } e.exports = a }, dc8c: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-container{--white:#fff;--black:#000;--gray-100:#f7fafc;--gray-200:#edf2f7;--gray-300:#e2e8f0;--gray-400:#cbd5e0;--gray-500:#a0aec0;--gray-600:#718096;--gray-700:#4a5568;--gray-800:#2d3748;--gray-900:#1a202c;--red-100:#fff5f5;--red-200:#fed7d7;--red-300:#feb2b2;--red-400:#fc8181;--red-500:#f56565;--red-600:#e53e3e;--red-700:#c53030;--red-800:#9b2c2c;--red-900:#742a2a;--orange-100:#fffaf0;--orange-200:#feebc8;--orange-300:#fbd38d;--orange-400:#f6ad55;--orange-500:#ed8936;--orange-600:#dd6b20;--orange-700:#c05621;--orange-800:#9c4221;--orange-900:#7b341e;--yellow-100:ivory;--yellow-200:#fefcbf;--yellow-300:#faf089;--yellow-400:#f6e05e;--yellow-500:#ecc94b;--yellow-600:#d69e2e;--yellow-700:#b7791f;--yellow-800:#975a16;--yellow-900:#744210;--green-100:#f0fff4;--green-200:#c6f6d5;--green-300:#9ae6b4;--green-400:#68d391;--green-500:#48bb78;--green-600:#38a169;--green-700:#2f855a;--green-800:#276749;--green-900:#22543d;--teal-100:#e6fffa;--teal-200:#b2f5ea;--teal-300:#81e6d9;--teal-400:#4fd1c5;--teal-500:#38b2ac;--teal-600:#319795;--teal-700:#2c7a7b;--teal-800:#285e61;--teal-900:#234e52;--blue-100:#ebf8ff;--blue-200:#bee3f8;--blue-300:#90cdf4;--blue-400:#63b3ed;--blue-500:#4299e1;--blue-600:#3182ce;--blue-700:#2b6cb0;--blue-800:#2c5282;--blue-900:#2a4365;--indigo-100:#ebf4ff;--indigo-200:#c3dafe;--indigo-300:#a3bffa;--indigo-400:#7f9cf5;--indigo-500:#667eea;--indigo-600:#5a67d8;--indigo-700:#4c51bf;--indigo-800:#434190;--indigo-900:#3c366b;--purple-100:#faf5ff;--purple-200:#e9d8fd;--purple-300:#d6bcfa;--purple-400:#b794f4;--purple-500:#9f7aea;--purple-600:#805ad5;--purple-700:#6b46c1;--purple-800:#553c9a;--purple-900:#44337a;--pink-100:#fff5f7;--pink-200:#fed7e2;--pink-300:#fbb6ce;--pink-400:#f687b3;--pink-500:#ed64a6;--pink-600:#d53f8c;--pink-700:#b83280;--pink-800:#97266d;--pink-900:#702459}.vc-container.vc-red{--accent-100:var(--red-100);--accent-200:var(--red-200);--accent-300:var(--red-300);--accent-400:var(--red-400);--accent-500:var(--red-500);--accent-600:var(--red-600);--accent-700:var(--red-700);--accent-800:var(--red-800);--accent-900:var(--red-900)}.vc-container.vc-orange{--accent-100:var(--orange-100);--accent-200:var(--orange-200);--accent-300:var(--orange-300);--accent-400:var(--orange-400);--accent-500:var(--orange-500);--accent-600:var(--orange-600);--accent-700:var(--orange-700);--accent-800:var(--orange-800);--accent-900:var(--orange-900)}.vc-container.vc-yellow{--accent-100:var(--yellow-100);--accent-200:var(--yellow-200);--accent-300:var(--yellow-300);--accent-400:var(--yellow-400);--accent-500:var(--yellow-500);--accent-600:var(--yellow-600);--accent-700:var(--yellow-700);--accent-800:var(--yellow-800);--accent-900:var(--yellow-900)}.vc-container.vc-green{--accent-100:var(--green-100);--accent-200:var(--green-200);--accent-300:var(--green-300);--accent-400:var(--green-400);--accent-500:var(--green-500);--accent-600:var(--green-600);--accent-700:var(--green-700);--accent-800:var(--green-800);--accent-900:var(--green-900)}.vc-container.vc-teal{--accent-100:var(--teal-100);--accent-200:var(--teal-200);--accent-300:var(--teal-300);--accent-400:var(--teal-400);--accent-500:var(--teal-500);--accent-600:var(--teal-600);--accent-700:var(--teal-700);--accent-800:var(--teal-800);--accent-900:var(--teal-900)}.vc-container.vc-blue{--accent-100:var(--blue-100);--accent-200:var(--blue-200);--accent-300:var(--blue-300);--accent-400:var(--blue-400);--accent-500:var(--blue-500);--accent-600:var(--blue-600);--accent-700:var(--blue-700);--accent-800:var(--blue-800);--accent-900:var(--blue-900)}.vc-container.vc-indigo{--accent-100:var(--indigo-100);--accent-200:var(--indigo-200);--accent-300:var(--indigo-300);--accent-400:var(--indigo-400);--accent-500:var(--indigo-500);--accent-600:var(--indigo-600);--accent-700:var(--indigo-700);--accent-800:var(--indigo-800);--accent-900:var(--indigo-900)}.vc-container.vc-purple{--accent-100:var(--purple-100);--accent-200:var(--purple-200);--accent-300:var(--purple-300);--accent-400:var(--purple-400);--accent-500:var(--purple-500);--accent-600:var(--purple-600);--accent-700:var(--purple-700);--accent-800:var(--purple-800);--accent-900:var(--purple-900)}.vc-container.vc-pink{--accent-100:var(--pink-100);--accent-200:var(--pink-200);--accent-300:var(--pink-300);--accent-400:var(--pink-400);--accent-500:var(--pink-500);--accent-600:var(--pink-600);--accent-700:var(--pink-700);--accent-800:var(--pink-800);--accent-900:var(--pink-900)}.vc-container{--font-normal:400;--font-medium:500;--font-semibold:600;--font-bold:700;--text-xs:12px;--text-sm:14px;--text-base:16px;--text-lg:18px;--leading-snug:1.375;--rounded:0.25rem;--rounded-lg:0.5rem;--rounded-full:9999px;--shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);--shadow-lg:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);--shadow-inner:inset 0 2px 4px 0 rgba(0,0,0,0.06);--slide-translate:22px;--slide-duration:0.15s;--slide-timing:ease;--day-content-transition-time:0.13s ease-in;--weeknumber-offset:-34px;position:relative;display:inline-flex;width:-webkit-max-content;width:max-content;height:-webkit-max-content;height:max-content;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;color:var(--gray-900);background-color:var(--white);border:1px solid;border-color:var(--gray-400);border-radius:var(--rounded-lg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.vc-container,.vc-container *{box-sizing:border-box}.vc-container:focus,.vc-container :focus{outline:none}.vc-container [role=button],.vc-container button{cursor:pointer}.vc-container.vc-is-expanded{min-width:100%}.vc-container .vc-container{border:none}.vc-container.vc-is-dark{color:var(--gray-100);background-color:var(--gray-900);border-color:var(--gray-700)}", ""]), e.exports = t }, dcbe: function (e, t, n) { var r = n("30c9"), a = n("1310"); function o(e) { return a(e) && r(e) } e.exports = o }, dd61: function (e, t, n) { var r = n("7948"), a = n("badf"), o = n("97d3"), i = n("6747"); function s(e, t) { var n = i(e) ? r : o; return n(e, a(t, 3)) } e.exports = s }, ddb0: function (e, t, n) { var r = n("da84"), a = n("fdbc"), o = n("e260"), i = n("9112"), s = n("b622"), c = s("iterator"), u = s("toStringTag"), l = o.values; for (var d in a) { var f = r[d], p = f && f.prototype; if (p) { if (p[c] !== l) try { i(p, c, l) } catch (v) { p[c] = l } if (p[u] || i(p, u, d), a[d]) for (var h in o) if (p[h] !== o[h]) try { i(p, h, o[h]) } catch (v) { p[h] = o[h] } } } }, de5e: function (e, t, n) { "use strict"; var r = n("72f5"), a = n.n(r); a.a }, de97: function (e, t, n) { var r = n("e6f8"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("58a4211a", r, !0, { sourceMap: !1, shadowMode: !1 }) }, df75: function (e, t, n) { var r = n("ca84"), a = n("7839"); e.exports = Object.keys || function (e) { return r(e, a) } }, df9e: function (e, t, n) { var r = n("9e83"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("29f48e5f", r, !0, { sourceMap: !1, shadowMode: !1 }) }, e031: function (e, t, n) { var r = n("f909"), a = n("1a8c"); function o(e, t, n, i, s, c) { return a(e) && a(t) && (c.set(t, e), r(e, t, void 0, o, c), c["delete"](t)), e } e.exports = o }, e0e7: function (e, t, n) { var r = n("60ed"); function a(e) { return r(e) ? void 0 : e } e.exports = a }, e163: function (e, t, n) { var r = n("5135"), a = n("7b0b"), o = n("f772"), i = n("e177"), s = o("IE_PROTO"), c = Object.prototype; e.exports = i ? Object.getPrototypeOf : function (e) { return e = a(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null } }, e177: function (e, t, n) { var r = n("d039"); e.exports = !r((function () { function e() { } return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype })) }, e24b: function (e, t, n) { var r = n("49f4"), a = n("1efc"), o = n("bbc0"), i = n("7a48"), s = n("2524"); function c(e) { var t = -1, n = null == e ? 0 : e.length; this.clear(); while (++t < n) { var r = e[t]; this.set(r[0], r[1]) } } c.prototype.clear = r, c.prototype["delete"] = a, c.prototype.get = o, c.prototype.has = i, c.prototype.set = s, e.exports = c }, e260: function (e, t, n) { "use strict"; var r = n("fc6a"), a = n("44d2"), o = n("3f8c"), i = n("69f3"), s = n("7dd0"), c = "Array Iterator", u = i.set, l = i.getterFor(c); e.exports = s(Array, "Array", (function (e, t) { u(this, { type: c, target: r(e), index: 0, kind: t }) }), (function () { var e = l(this), t = e.target, n = e.kind, r = e.index++; return !t || r >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : "keys" == n ? { value: r, done: !1 } : "values" == n ? { value: t[r], done: !1 } : { value: [r, t[r]], done: !1 } }), "values"), o.Arguments = o.Array, a("keys"), a("values"), a("entries") }, e2a0: function (e, t, n) { var r = n("3729"), a = n("6747"), o = n("1310"), i = "[object String]"; function s(e) { return "string" == typeof e || !a(e) && o(e) && r(e) == i } e.exports = s }, e2c0: function (e, t, n) { var r = n("e2e4"), a = n("d370"), o = n("6747"), i = n("c098"), s = n("b218"), c = n("f4d6"); function u(e, t, n) { t = r(t, e); var u = -1, l = t.length, d = !1; while (++u < l) { var f = c(t[u]); if (!(d = null != e && n(e, f))) break; e = e[f] } return d || ++u != l ? d : (l = null == e ? 0 : e.length, !!l && s(l) && i(f, l) && (o(e) || a(e))) } e.exports = u }, e2e4: function (e, t, n) { var r = n("6747"), a = n("f608"), o = n("18d8"), i = n("76dd"); function s(e, t) { return r(e) ? e : a(e, t) ? [e] : o(i(e)) } e.exports = s }, e380: function (e, t, n) { var r = n("7b83"), a = "Expected a function"; function o(e, t) { if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(a); var n = function () { var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache; if (o.has(a)) return o.get(a); var i = e.apply(this, r); return n.cache = o.set(a, i) || o, i }; return n.cache = new (o.Cache || r), n } o.Cache = r, e.exports = o }, e3f8: function (e, t, n) { var r = n("656b"); function a(e) { return function (t) { return r(t, e) } } e.exports = a }, e538: function (e, t, n) { (function (e) { var r = n("2b3e"), a = t && !t.nodeType && t, o = a && "object" == typeof e && e && !e.nodeType && e, i = o && o.exports === a, s = i ? r.Buffer : void 0, c = s ? s.allocUnsafe : void 0; function u(e, t) { if (t) return e.slice(); var n = e.length, r = c ? c(n) : new e.constructor(n); return e.copy(r), r } e.exports = u }).call(this, n("62e4")(e)) }, e6f8: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-day[data-v-005dafc8]{position:relative;min-height:32px;z-index:1}.vc-day.is-not-in-month *[data-v-005dafc8]{opacity:0;pointer-events:none}.vc-day-layer[data-v-005dafc8]{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center[data-v-005dafc8]{display:flex;justify-content:center;align-items:center;transform-origin:50% 50%}.vc-day-box-left-center[data-v-005dafc8]{display:flex;justify-content:flex-start;align-items:center;transform-origin:0 50%}.vc-day-box-right-center[data-v-005dafc8]{display:flex;justify-content:flex-end;align-items:center;transform-origin:100% 50%}.vc-day-box-center-bottom[data-v-005dafc8]{display:flex;justify-content:center;align-items:flex-end}.vc-day-content[data-v-005dafc8]{display:flex;justify-content:center;align-items:center;font-size:var(--text-sm);font-weight:var(--font-medium);width:28px;height:28px;line-height:28px;border-radius:var(--rounded-full);-webkit-user-select:none;user-select:none;cursor:pointer}.vc-day-content[data-v-005dafc8]:hover{background-color:rgba(204,214,224,.3)}.vc-day-content[data-v-005dafc8]:focus{font-weight:var(--font-bold);background-color:rgba(204,214,224,.4)}.vc-day-content.is-disabled[data-v-005dafc8]{color:var(--gray-400)}.vc-is-dark .vc-day-content[data-v-005dafc8]:hover{background-color:rgba(114,129,151,.3)}.vc-is-dark .vc-day-content[data-v-005dafc8]:focus{background-color:rgba(114,129,151,.4)}.vc-is-dark .vc-day-content.is-disabled[data-v-005dafc8]{color:var(--gray-600)}.vc-highlights[data-v-005dafc8]{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight[data-v-005dafc8]{width:28px;height:28px}.vc-highlight.vc-highlight-base-start[data-v-005dafc8]{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end[data-v-005dafc8]{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle[data-v-005dafc8]{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-dots[data-v-005dafc8]{display:flex;justify-content:center;align-items:center}.vc-dot[data-v-005dafc8]{width:5px;height:5px;border-radius:50%;transition:all var(--day-content-transition-time)}.vc-dot[data-v-005dafc8]:not(:last-child){margin-right:3px}.vc-bars[data-v-005dafc8]{display:flex;justify-content:flex-start;align-items:center;width:75%}.vc-bar[data-v-005dafc8]{flex-grow:1;height:3px;transition:all var(--day-content-transition-time)}", ""]), e.exports = t }, e76f: function (e, t, n) { "use strict"; var r = n("255e"), a = n.n(r); a.a }, e893: function (e, t, n) { var r = n("5135"), a = n("56ef"), o = n("06cf"), i = n("9bf2"); e.exports = function (e, t) { for (var n = a(t), s = i.f, c = o.f, u = 0; u < n.length; u++) { var l = n[u]; r(e, l) || s(e, l, c(t, l)) } } }, e969: function (e, t, n) { var r = n("0da5"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("61c2bd5e", r, !0, { sourceMap: !1, shadowMode: !1 }) }, e99f: function (e, t, n) { var r = n("f31c"); "string" === typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals); var a = n("499e").default; a("3d092d67", r, !0, { sourceMap: !1, shadowMode: !1 }) }, ea80: function (e, t, n) { "use strict"; var r = n("de97"), a = n.n(r); a.a }, eac5: function (e, t) { var n = Object.prototype; function r(e) { var t = e && e.constructor, r = "function" == typeof t && t.prototype || n; return e === r } e.exports = r }, ec47: function (e, t, n) { var r = n("a3fd"), a = n("42a2"), o = n("edfa"), i = n("cebd"), s = "[object Map]", c = "[object Set]"; function u(e) { return function (t) { var n = a(t); return n == s ? o(t) : n == c ? i(t) : r(t, e(t)) } } e.exports = u }, ec69: function (e, t, n) { var r = n("6fcd"), a = n("03dd"), o = n("30c9"); function i(e) { return o(e) ? r(e) : a(e) } e.exports = i }, ec8c: function (e, t) { function n(e) { var t = []; if (null != e) for (var n in Object(e)) t.push(n); return t } e.exports = n }, ed08: function (e, t, n) { "use strict"; n.r(t), n.d(t, "Locale", (function () { return r["b"] })), n.d(t, "DateInfo", (function () { return a["a"] })), n.d(t, "Attribute", (function () { return o["a"] })), n.d(t, "AttributeStore", (function () { return i["a"] })), n.d(t, "setupCalendar", (function () { return u })), n.d(t, "pad", (function () { return l["m"] })), n.d(t, "evalFn", (function () { return l["f"] })), n.d(t, "mergeEvents", (function () { return l["h"] })), n.d(t, "pageIsValid", (function () { return l["r"] })), n.d(t, "pageIsBeforePage", (function () { return l["o"] })), n.d(t, "pageIsAfterPage", (function () { return l["n"] })), n.d(t, "pageIsBetweenPages", (function () { return l["p"] })), n.d(t, "pageIsEqualToPage", (function () { return l["q"] })), n.d(t, "addPages", (function () { return l["a"] })), n.d(t, "pageRangeToArray", (function () { return l["s"] })), n.d(t, "datesAreEqual", (function () { return l["d"] })), n.d(t, "arrayHasItems", (function () { return l["b"] })), n.d(t, "mixinOptionalProps", (function () { return l["i"] })), n.d(t, "on", (function () { return l["k"] })), n.d(t, "off", (function () { return l["j"] })), n.d(t, "elementContains", (function () { return l["e"] })), n.d(t, "onSpaceOrEnter", (function () { return l["l"] })), n.d(t, "createGuid", (function () { return l["c"] })), n.d(t, "hash", (function () { return l["g"] })), n.d(t, "addTapOrClickHandler", (function () { return d["b"] })), n.d(t, "addHorizontalSwipeHandler", (function () { return d["a"] })); var r = n("29ae"), a = n("cfe5"), o = n("22f3"), i = n("9349"), s = n("51ec"), c = n("1315"), u = function (e) { const t = Object(s["b"])(e); return Object(c["a"])(t.screens, !0), t }, l = n("2fa3"), d = n("0733") }, edfa: function (e, t) { function n(e) { var t = -1, n = Array(e.size); return e.forEach((function (e, r) { n[++t] = [r, e] })), n } e.exports = n }, ef5d: function (e, t) { function n(e) { return function (t) { return null == t ? void 0 : t[e] } } e.exports = n }, efb6: function (e, t, n) { var r = n("5e2e"); function a() { this.__data__ = new r, this.size = 0 } e.exports = a }, f15d: function (e, t, n) { "use strict"; n("ddb0"); var r = n("9404"); const a = { ar: { dow: 7, L: "D/‏M/‏YYYY" }, bg: { dow: 2, L: "D.MM.YYYY" }, ca: { dow: 2, L: "DD/MM/YYYY" }, "zh-CN": { dow: 2, L: "YYYY/MM/DD" }, "zh-TW": { dow: 1, L: "YYYY/MM/DD" }, hr: { dow: 2, L: "DD.MM.YYYY" }, cs: { dow: 2, L: "DD.MM.YYYY" }, da: { dow: 2, L: "DD.MM.YYYY" }, nl: { dow: 2, L: "DD-MM-YYYY" }, "en-US": { dow: 1, L: "MM/DD/YYYY" }, "en-AU": { dow: 2, L: "DD/MM/YYYY" }, "en-CA": { dow: 1, L: "YYYY-MM-DD" }, "en-GB": { dow: 2, L: "DD/MM/YYYY" }, "en-IE": { dow: 2, L: "DD-MM-YYYY" }, "en-NZ": { dow: 2, L: "DD/MM/YYYY" }, "en-ZA": { dow: 1, L: "YYYY/MM/DD" }, eo: { dow: 2, L: "YYYY-MM-DD" }, et: { dow: 2, L: "DD.MM.YYYY" }, fi: { dow: 2, L: "DD.MM.YYYY" }, fr: { dow: 2, L: "DD/MM/YYYY" }, "fr-CA": { dow: 1, L: "YYYY-MM-DD" }, "fr-CH": { dow: 2, L: "DD.MM.YYYY" }, de: { dow: 2, L: "DD.MM.YYYY" }, he: { dow: 1, L: "DD.MM.YYYY" }, id: { dow: 2, L: "DD/MM/YYYY" }, it: { dow: 2, L: "DD/MM/YYYY" }, ja: { dow: 1, L: "YYYY年M月D日" }, ko: { dow: 1, L: "YYYY.MM.DD" }, lv: { dow: 2, L: "DD.MM.YYYY" }, lt: { dow: 2, L: "DD.MM.YYYY" }, mk: { dow: 2, L: "D.MM.YYYY" }, nb: { dow: 2, L: "D. MMMM YYYY" }, nn: { dow: 2, L: "D. MMMM YYYY" }, pl: { dow: 2, L: "DD.MM.YYYY" }, pt: { dow: 2, L: "DD/MM/YYYY" }, ro: { dow: 2, L: "DD.MM.YYYY" }, ru: { dow: 2, L: "DD.MM.YYYY" }, sk: { dow: 2, L: "DD.MM.YYYY" }, "es-ES": { dow: 2, L: "DD/MM/YYYY" }, "es-MX": { dow: 2, L: "DD/MM/YYYY" }, sv: { dow: 2, L: "YYYY-MM-DD" }, th: { dow: 1, L: "DD/MM/YYYY" }, tr: { dow: 2, L: "DD.MM.YYYY" }, uk: { dow: 2, L: "DD.MM.YYYY" }, vi: { dow: 2, L: "DD/MM/YYYY" } }; a.en = a["en-US"], a.es = a["es-ES"], a.no = a.nb, a.zh = a["zh-CN"], Object(r["w"])(a).forEach((function ([e, { dow: t, L: n }]) { a[e] = { id: e, firstDayOfWeek: t, masks: { L: n } } })), t["a"] = a }, f31c: function (e, t, n) { var r = n("24fb"); t = r(!1), t.push([e.i, ".vc-pane[data-v-37fb1233]{min-width:250px}.vc-header[data-v-37fb1233]{display:flex;justify-content:center;align-items:center;padding:10px 18px 0 18px}.vc-header.align-left[data-v-37fb1233]{justify-content:flex-start}.vc-header.align-right[data-v-37fb1233]{justify-content:flex-end}.vc-title[data-v-37fb1233]{font-size:var(--text-lg);color:var(--gray-800);font-weight:var(--font-semibold);line-height:28px;cursor:pointer;-webkit-user-select:none;user-select:none;white-space:nowrap}.vc-title[data-v-37fb1233]:hover{opacity:.75}.vc-weeknumber[data-v-37fb1233]{position:relative}.vc-weeknumber[data-v-37fb1233],.vc-weeknumber-content[data-v-37fb1233]{display:flex;justify-content:center;align-items:center}.vc-weeknumber-content[data-v-37fb1233]{font-size:var(--text-xs);font-weight:var(--font-medium);font-style:italic;width:28px;height:28px;margin-top:2px;color:var(--gray-500);-webkit-user-select:none;user-select:none}.vc-weeknumber-content.is-left-outside[data-v-37fb1233]{position:absolute;left:var(--weeknumber-offset)}.vc-weeknumber-content.is-right-outside[data-v-37fb1233]{position:absolute;right:var(--weeknumber-offset)}.vc-weeks[data-v-37fb1233]{display:grid;grid-template-columns:repeat(7,1fr);position:relative;-webkit-overflow-scrolling:touch;padding:5px;min-width:250px}.vc-weeks.vc-show-weeknumbers[data-v-37fb1233]{grid-template-columns:auto repeat(7,1fr)}.vc-weeks.vc-show-weeknumbers.is-right[data-v-37fb1233]{grid-template-columns:repeat(7,1fr) auto}.vc-weekday[data-v-37fb1233]{text-align:center;color:var(--gray-500);font-size:var(--text-sm);font-weight:var(--font-bold);line-height:14px;padding-top:4px;padding-bottom:8px;cursor:default;-webkit-user-select:none;user-select:none}.vc-is-dark .vc-header[data-v-37fb1233]{color:var(--gray-200)}.vc-is-dark .vc-title[data-v-37fb1233]{color:var(--gray-100)}.vc-is-dark .vc-weekday[data-v-37fb1233]{color:var(--accent-200)}", ""]), e.exports = t }, f3c1: function (e, t) { var n = 800, r = 16, a = Date.now; function o(e) { var t = 0, o = 0; return function () { var i = a(), s = r - (i - o); if (o = i, s > 0) { if (++t >= n) return arguments[0] } else t = 0; return e.apply(void 0, arguments) } } e.exports = o }, f4d6: function (e, t, n) { var r = n("ffd6"), a = 1 / 0; function o(e) { if ("string" == typeof e || r(e)) return e; var t = e + ""; return "0" == t && 1 / e == -a ? "-0" : t } e.exports = o }, f542: function (e, t, n) { var r = n("ec47"), a = n("ec69"), o = r(a); e.exports = o }, f608: function (e, t, n) { var r = n("6747"), a = n("ffd6"), o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, i = /^\w*$/; function s(e, t) { if (r(e)) return !1; var n = typeof e; return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || (i.test(e) || !o.test(e) || null != t && e in Object(t)) } e.exports = s }, f678: function (e, t, n) { var r = n("8384"), a = n("b4b0"); function o(e, t, n) { return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = a(n), n = n === n ? n : 0), void 0 !== t && (t = a(t), t = t === t ? t : 0), r(a(e), t, n) } e.exports = o }, f772: function (e, t, n) { var r = n("5692"), a = n("90e3"), o = r("keys"); e.exports = function (e) { return o[e] || (o[e] = a(e)) } }, f7c3: function (e, t, n) { "use strict"; var r = n("e99f"), a = n.n(r); a.a }, f7f1: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return i })); var r = n("fe1f"), a = n("fd3a"), o = n("8c86"); function i(e, t) { Object(o["a"])(2, arguments); var n = Object(a["a"])(e), i = Object(r["a"])(t); return isNaN(i) ? new Date(NaN) : i ? (n.setDate(n.getDate() + i), n) : n } }, f8af: function (e, t, n) { var r = n("2474"); function a(e) { var t = new e.constructor(e.byteLength); return new r(t).set(new r(e)), t } e.exports = a }, f909: function (e, t, n) { var r = n("7e64"), a = n("b760"), o = n("72af"), i = n("4f50"), s = n("1a8c"), c = n("9934"), u = n("8adb"); function l(e, t, n, d, f) { e !== t && o(t, (function (o, c) { if (f || (f = new r), s(o)) i(e, t, c, n, l, d, f); else { var p = d ? d(u(e, c), o, c + "", e, t, f) : void 0; void 0 === p && (p = o), a(e, c, p) } }), c) } e.exports = l }, f9ce: function (e, t, n) { var r = n("ef5d"), a = n("e3f8"), o = n("f608"), i = n("f4d6"); function s(e) { return o(e) ? r(i(e)) : a(e) } e.exports = s }, fa21: function (e, t, n) { var r = n("7530"), a = n("2dcb"), o = n("eac5"); function i(e) { return "function" != typeof e.constructor || o(e) ? {} : r(a(e)) } e.exports = i }, fb15: function (e, t, n) { "use strict"; if (n.r(t), n.d(t, "Calendar", (function () { return o["c"] })), n.d(t, "CalendarNav", (function () { return o["d"] })), n.d(t, "DatePicker", (function () { return o["f"] })), n.d(t, "Popover", (function () { return o["h"] })), n.d(t, "Locale", (function () { return o["g"] })), n.d(t, "DateInfo", (function () { return o["e"] })), n.d(t, "Attribute", (function () { return o["a"] })), n.d(t, "AttributeStore", (function () { return o["b"] })), n.d(t, "setupCalendar", (function () { return o["E"] })), n.d(t, "pad", (function () { return o["x"] })), n.d(t, "evalFn", (function () { return o["q"] })), n.d(t, "mergeEvents", (function () { return o["s"] })), n.d(t, "pageIsValid", (function () { return o["C"] })), n.d(t, "pageIsBeforePage", (function () { return o["z"] })), n.d(t, "pageIsAfterPage", (function () { return o["y"] })), n.d(t, "pageIsBetweenPages", (function () { return o["A"] })), n.d(t, "pageIsEqualToPage", (function () { return o["B"] })), n.d(t, "addPages", (function () { return o["j"] })), n.d(t, "pageRangeToArray", (function () { return o["D"] })), n.d(t, "datesAreEqual", (function () { return o["n"] })), n.d(t, "arrayHasItems", (function () { return o["l"] })), n.d(t, "mixinOptionalProps", (function () { return o["t"] })), n.d(t, "on", (function () { return o["v"] })), n.d(t, "off", (function () { return o["u"] })), n.d(t, "elementContains", (function () { return o["p"] })), n.d(t, "onSpaceOrEnter", (function () { return o["w"] })), n.d(t, "createGuid", (function () { return o["m"] })), n.d(t, "hash", (function () { return o["r"] })), n.d(t, "addTapOrClickHandler", (function () { return o["k"] })), n.d(t, "addHorizontalSwipeHandler", (function () { return o["i"] })), "undefined" !== typeof window) { var r = window.document.currentScript, a = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/); a && (n.p = a[1]) } var o = n("34e9"); t["default"] = o["o"] }, fba5: function (e, t, n) { var r = n("cb5a"); function a(e) { return r(this.__data__, e) > -1 } e.exports = a }, fc6a: function (e, t, n) { var r = n("44ad"), a = n("1d80"); e.exports = function (e) { return r(a(e)) } }, fd3a: function (e, t, n) { "use strict"; n.d(t, "a", (function () { return a })); var r = n("8c86"); function a(e) { Object(r["a"])(1, arguments); var t = Object.prototype.toString.call(e); return e instanceof Date || "object" === typeof e && "[object Date]" === t ? new Date(e.getTime()) : "number" === typeof e || "[object Number]" === t ? new Date(e) : ("string" !== typeof e && "[object String]" !== t || "undefined" === typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN)) } }, fdbc: function (e, t) { e.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 } }, fdbf: function (e, t, n) { var r = n("4930"); e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator }, fe1f: function (e, t, n) { "use strict"; function r(e) { if (null === e || !0 === e || !1 === e) return NaN; var t = Number(e); return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t) } n.d(t, "a", (function () { return r })) }, ffd6: function (e, t, n) { var r = n("3729"), a = n("1310"), o = "[object Symbol]"; function i(e) { return "symbol" == typeof e || a(e) && r(e) == o } e.exports = i } }) }));
//# sourceMappingURL=v-calendar.umd.min.js.map
/**
 * @popperjs/core v2.9.2 - MIT License
 */

"use strict"; !function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {}) }(this, (function (e) { function t(e) { return { width: (e = e.getBoundingClientRect()).width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } } function n(e) { return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e } function o(e) { return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset } } function r(e) { return e instanceof n(e).Element || e instanceof Element } function i(e) { return e instanceof n(e).HTMLElement || e instanceof HTMLElement } function a(e) { return "undefined" != typeof ShadowRoot && (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot) } function s(e) { return e ? (e.nodeName || "").toLowerCase() : null } function f(e) { return ((r(e) ? e.ownerDocument : e.document) || window.document).documentElement } function p(e) { return t(f(e)).left + o(e).scrollLeft } function c(e) { return n(e).getComputedStyle(e) } function l(e) { return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX) } function u(e, r, a) { void 0 === a && (a = !1); var c = f(r); e = t(e); var u = i(r), d = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 }; return (u || !u && !a) && (("body" !== s(r) || l(c)) && (d = r !== n(r) && i(r) ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop } : o(r)), i(r) ? ((m = t(r)).x += r.clientLeft, m.y += r.clientTop) : c && (m.x = p(c))), { x: e.left + d.scrollLeft - m.x, y: e.top + d.scrollTop - m.y, width: e.width, height: e.height } } function d(e) { var n = t(e), o = e.offsetWidth, r = e.offsetHeight; return 1 >= Math.abs(n.width - o) && (o = n.width), 1 >= Math.abs(n.height - r) && (r = n.height), { x: e.offsetLeft, y: e.offsetTop, width: o, height: r } } function m(e) { return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e) } function h(e) { return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : i(e) && l(e) ? e : h(m(e)) } function v(e, t) { var o; void 0 === t && (t = []); var r = h(e); return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = n(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(v(m(r))) } function g(e) { return i(e) && "fixed" !== c(e).position ? e.offsetParent : null } function y(e) { for (var t = n(e), o = g(e); o && 0 <= ["table", "td", "th"].indexOf(s(o)) && "static" === c(o).position;)o = g(o); if (o && ("html" === s(o) || "body" === s(o) && "static" === c(o).position)) return t; if (!o) e: { if (o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !i(e) || "fixed" !== c(e).position) for (e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e));) { var r = c(e); if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || o && "filter" === r.willChange || o && r.filter && "none" !== r.filter) { o = e; break e } e = e.parentNode } o = null } return o || t } function b(e) { function t(e) { o.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) { o.has(e) || (e = n.get(e)) && t(e) })), r.push(e) } var n = new Map, o = new Set, r = []; return e.forEach((function (e) { n.set(e.name, e) })), e.forEach((function (e) { o.has(e.name) || t(e) })), r } function w(e) { var t; return function () { return t || (t = new Promise((function (n) { Promise.resolve().then((function () { t = void 0, n(e()) })) }))), t } } function x(e) { return e.split("-")[0] } function O(e, t) { var n = t.getRootNode && t.getRootNode(); if (e.contains(t)) return !0; if (n && a(n)) do { if (t && e.isSameNode(t)) return !0; t = t.parentNode || t.host } while (t); return !1 } function j(e) { return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }) } function E(e, r) { if ("viewport" === r) { r = n(e); var a = f(e); r = r.visualViewport; var s = a.clientWidth; a = a.clientHeight; var l = 0, u = 0; r && (s = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = r.offsetLeft, u = r.offsetTop)), e = j(e = { width: s, height: a, x: l + p(e), y: u }) } else i(r) ? ((e = t(r)).top += r.clientTop, e.left += r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top) : (u = f(e), e = f(u), s = o(u), r = null == (a = u.ownerDocument) ? void 0 : a.body, a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), e = j({ width: a, height: l, x: u, y: s })); return e } function D(e, t, n) { return t = "clippingParents" === t ? function (e) { var t = v(m(e)), n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? y(e) : e; return r(n) ? t.filter((function (e) { return r(e) && O(e, n) && "body" !== s(e) })) : [] }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function (t, n) { return n = E(e, n), t.top = _(n.top, t.top), t.right = U(n.right, t.right), t.bottom = U(n.bottom, t.bottom), t.left = _(n.left, t.left), t }), E(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n } function L(e) { return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y" } function P(e) { var t = e.reference, n = e.element, o = (e = e.placement) ? x(e) : null; e = e ? e.split("-")[1] : null; var r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2; switch (o) { case "top": r = { x: r, y: t.y - n.height }; break; case "bottom": r = { x: r, y: t.y + t.height }; break; case "right": r = { x: t.x + t.width, y: i }; break; case "left": r = { x: t.x - n.width, y: i }; break; default: r = { x: t.x, y: t.y } }if (null != (o = o ? L(o) : null)) switch (i = "y" === o ? "height" : "width", e) { case "start": r[o] -= t[i] / 2 - n[i] / 2; break; case "end": r[o] += t[i] / 2 - n[i] / 2 }return r } function M(e) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e) } function k(e, t) { return t.reduce((function (t, n) { return t[n] = e, t }), {}) } function A(e, n) { void 0 === n && (n = {}); var o = n; n = void 0 === (n = o.placement) ? e.placement : n; var i = o.boundary, a = void 0 === i ? "clippingParents" : i, s = void 0 === (i = o.rootBoundary) ? "viewport" : i; i = void 0 === (i = o.elementContext) ? "popper" : i; var p = o.altBoundary, c = void 0 !== p && p; o = M("number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)); var l = e.elements.reference; p = e.rects.popper, a = D(r(c = e.elements[c ? "popper" === i ? "reference" : "popper" : i]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({ reference: s = t(l), element: p, strategy: "absolute", placement: n }), p = j(Object.assign({}, p, c)), s = "popper" === i ? p : s; var u = { top: a.top - s.top + o.top, bottom: s.bottom - a.bottom + o.bottom, left: a.left - s.left + o.left, right: s.right - a.right + o.right }; if (e = e.modifiersData.offset, "popper" === i && e) { var d = e[n]; Object.keys(u).forEach((function (e) { var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1, n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x"; u[e] += d[n] * t })) } return u } function W() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n]; return !t.some((function (e) { return !(e && "function" == typeof e.getBoundingClientRect) })) } function B(e) { void 0 === e && (e = {}); var t = e.defaultModifiers, n = void 0 === t ? [] : t, o = void 0 === (e = e.defaultOptions) ? F : e; return function (e, t, i) { function a() { f.forEach((function (e) { return e() })), f = [] } void 0 === i && (i = o); var s = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, F, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} }, f = [], p = !1, c = { state: s, setOptions: function (i) { return a(), s.options = Object.assign({}, o, s.options, i), s.scrollParents = { reference: r(e) ? v(e) : e.contextElement ? v(e.contextElement) : [], popper: v(t) }, i = function (e) { var t = b(e); return I.reduce((function (e, n) { return e.concat(t.filter((function (e) { return e.phase === n }))) }), []) }(function (e) { var t = e.reduce((function (e, t) { var n = e[t.name]; return e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t, e }), {}); return Object.keys(t).map((function (e) { return t[e] })) }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function (e) { return e.enabled })), s.orderedModifiers.forEach((function (e) { var t = e.name, n = e.options; n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({ state: s, name: t, instance: c, options: n }), f.push(t || function () { })) })), c.update() }, forceUpdate: function () { if (!p) { var e = s.elements, t = e.reference; if (W(t, e = e.popper)) for (s.rects = { reference: u(t, y(e), "fixed" === s.options.strategy), popper: d(e) }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function (e) { return s.modifiersData[e.name] = Object.assign({}, e.data) })), t = 0; t < s.orderedModifiers.length; t++)if (!0 === s.reset) s.reset = !1, t = -1; else { var n = s.orderedModifiers[t]; e = n.fn; var o = n.options; o = void 0 === o ? {} : o, n = n.name, "function" == typeof e && (s = e({ state: s, options: o, name: n, instance: c }) || s) } } }, update: w((function () { return new Promise((function (e) { c.forceUpdate(), e(s) })) })), destroy: function () { a(), p = !0 } }; return W(e, t) ? (c.setOptions(i).then((function (e) { !p && i.onFirstUpdate && i.onFirstUpdate(e) })), c) : c } } function T(e) { var t, o = e.popper, r = e.popperRect, i = e.placement, a = e.offsets, s = e.position, p = e.gpuAcceleration, l = e.adaptive; if (!0 === (e = e.roundOffsets)) { e = a.y; var u = window.devicePixelRatio || 1; e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 } } else e = "function" == typeof e ? e(a) : a; e = void 0 === (e = (u = e).x) ? 0 : e, u = void 0 === (u = u.y) ? 0 : u; var d = a.hasOwnProperty("x"); a = a.hasOwnProperty("y"); var m, h = "left", v = "top", g = window; if (l) { var b = y(o), w = "clientHeight", x = "clientWidth"; b === n(o) && ("static" !== c(b = f(o)).position && (w = "scrollHeight", x = "scrollWidth")), "top" === i && (v = "bottom", u -= b[w] - r.height, u *= p ? 1 : -1), "left" === i && (h = "right", e -= b[x] - r.width, e *= p ? 1 : -1) } return o = Object.assign({ position: s }, l && J), p ? Object.assign({}, o, ((m = {})[v] = a ? "0" : "", m[h] = d ? "0" : "", m.transform = 2 > (g.devicePixelRatio || 1) ? "translate(" + e + "px, " + u + "px)" : "translate3d(" + e + "px, " + u + "px, 0)", m)) : Object.assign({}, o, ((t = {})[v] = a ? u + "px" : "", t[h] = d ? e + "px" : "", t.transform = "", t)) } function H(e) { return e.replace(/left|right|bottom|top/g, (function (e) { return $[e] })) } function R(e) { return e.replace(/start|end/g, (function (e) { return ee[e] })) } function S(e, t, n) { return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x } } function q(e) { return ["top", "right", "bottom", "left"].some((function (t) { return 0 <= e[t] })) } var C = ["top", "bottom", "right", "left"], N = C.reduce((function (e, t) { return e.concat([t + "-start", t + "-end"]) }), []), V = [].concat(C, ["auto"]).reduce((function (e, t) { return e.concat([t, t + "-start", t + "-end"]) }), []), I = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "), _ = Math.max, U = Math.min, z = Math.round, F = { placement: "bottom", modifiers: [], strategy: "absolute" }, X = { passive: !0 }, Y = { name: "eventListeners", enabled: !0, phase: "write", fn: function () { }, effect: function (e) { var t = e.state, o = e.instance, r = (e = e.options).scroll, i = void 0 === r || r, a = void 0 === (e = e.resize) || e, s = n(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper); return i && f.forEach((function (e) { e.addEventListener("scroll", o.update, X) })), a && s.addEventListener("resize", o.update, X), function () { i && f.forEach((function (e) { e.removeEventListener("scroll", o.update, X) })), a && s.removeEventListener("resize", o.update, X) } }, data: {} }, G = { name: "popperOffsets", enabled: !0, phase: "read", fn: function (e) { var t = e.state; t.modifiersData[e.name] = P({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement }) }, data: {} }, J = { top: "auto", right: "auto", bottom: "auto", left: "auto" }, K = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (e) { var t = e.state, n = e.options; e = void 0 === (e = n.gpuAcceleration) || e; var o = n.adaptive; o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = { placement: x(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: e }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: o, roundOffsets: n })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: n })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }) }, data: {} }, Q = { name: "applyStyles", enabled: !0, phase: "write", fn: function (e) { var t = e.state; Object.keys(t.elements).forEach((function (e) { var n = t.styles[e] || {}, o = t.attributes[e] || {}, r = t.elements[e]; i(r) && s(r) && (Object.assign(r.style, n), Object.keys(o).forEach((function (e) { var t = o[e]; !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t) }))) })) }, effect: function (e) { var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }; return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function () { Object.keys(t.elements).forEach((function (e) { var o = t.elements[e], r = t.attributes[e] || {}; e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) { return e[t] = "", e }), {}), i(o) && s(o) && (Object.assign(o.style, e), Object.keys(r).forEach((function (e) { o.removeAttribute(e) }))) })) } }, requires: ["computeStyles"] }, Z = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (e) { var t = e.state, n = e.name, o = void 0 === (e = e.options.offset) ? [0, 0] : e, r = (e = V.reduce((function (e, n) { var r = t.rects, i = x(n), a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1, s = "function" == typeof o ? o(Object.assign({}, r, { placement: n })) : o; return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? { x: s, y: r } : { x: r, y: s }, e[n] = i, e }), {}))[t.placement], i = r.x; r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e } }, $ = { left: "right", right: "left", bottom: "top", top: "bottom" }, ee = { start: "end", end: "start" }, te = { name: "flip", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; if (e = e.name, !t.modifiersData[e]._skip) { var o = n.mainAxis; o = void 0 === o || o; var r = n.altAxis; r = void 0 === r || r; var i = n.fallbackPlacements, a = n.padding, s = n.boundary, f = n.rootBoundary, p = n.altBoundary, c = n.flipVariations, l = void 0 === c || c, u = n.allowedAutoPlacements; c = x(n = t.options.placement), i = i || (c !== n && l ? function (e) { if ("auto" === x(e)) return []; var t = H(e); return [R(e), t, R(t)] }(n) : [H(n)]); var d = [n].concat(i).reduce((function (e, n) { return e.concat("auto" === x(n) ? function (e, t) { void 0 === t && (t = {}); var n = t.boundary, o = t.rootBoundary, r = t.padding, i = t.flipVariations, a = t.allowedAutoPlacements, s = void 0 === a ? V : a, f = t.placement.split("-")[1]; 0 === (i = (t = f ? i ? N : N.filter((function (e) { return e.split("-")[1] === f })) : C).filter((function (e) { return 0 <= s.indexOf(e) }))).length && (i = t); var p = i.reduce((function (t, i) { return t[i] = A(e, { placement: i, boundary: n, rootBoundary: o, padding: r })[x(i)], t }), {}); return Object.keys(p).sort((function (e, t) { return p[e] - p[t] })) }(t, { placement: n, boundary: s, rootBoundary: f, padding: a, flipVariations: l, allowedAutoPlacements: u }) : n) }), []); n = t.rects.reference, i = t.rects.popper; var m = new Map; c = !0; for (var h = d[0], v = 0; v < d.length; v++) { var g = d[v], y = x(g), b = "start" === g.split("-")[1], w = 0 <= ["top", "bottom"].indexOf(y), O = w ? "width" : "height", j = A(t, { placement: g, boundary: s, rootBoundary: f, altBoundary: p, padding: a }); if (b = w ? b ? "right" : "left" : b ? "bottom" : "top", n[O] > i[O] && (b = H(b)), O = H(b), w = [], o && w.push(0 >= j[y]), r && w.push(0 >= j[b], 0 >= j[O]), w.every((function (e) { return e }))) { h = g, c = !1; break } m.set(g, w) } if (c) for (o = function (e) { var t = d.find((function (t) { if (t = m.get(t)) return t.slice(0, e).every((function (e) { return e })) })); if (t) return h = t, "break" }, r = l ? 3 : 1; 0 < r && "break" !== o(r); r--); t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0) } }, requiresIfExists: ["offset"], data: { _skip: !1 } }, ne = { name: "preventOverflow", enabled: !0, phase: "main", fn: function (e) { var t = e.state, n = e.options; e = e.name; var o = n.mainAxis, r = void 0 === o || o, i = void 0 !== (o = n.altAxis) && o; o = void 0 === (o = n.tether) || o; var a = n.tetherOffset, s = void 0 === a ? 0 : a, f = A(t, { boundary: n.boundary, rootBoundary: n.rootBoundary, padding: n.padding, altBoundary: n.altBoundary }); n = x(t.placement); var p = t.placement.split("-")[1], c = !p, l = L(n); n = "x" === l ? "y" : "x", a = t.modifiersData.popperOffsets; var u = t.rects.reference, m = t.rects.popper, h = "function" == typeof s ? s(Object.assign({}, t.rects, { placement: t.placement })) : s; if (s = { x: 0, y: 0 }, a) { if (r || i) { var v = "y" === l ? "top" : "left", g = "y" === l ? "bottom" : "right", b = "y" === l ? "height" : "width", w = a[l], O = a[l] + f[v], j = a[l] - f[g], E = o ? -m[b] / 2 : 0, D = "start" === p ? u[b] : m[b]; p = "start" === p ? -m[b] : -u[b], m = t.elements.arrow, m = o && m ? d(m) : { width: 0, height: 0 }; var P = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }; v = P[v], g = P[g], m = _(0, U(u[b], m[b])), D = c ? u[b] / 2 - E - m - v - h : D - m - v - h, u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h, c = t.elements.arrow && y(t.elements.arrow), h = t.modifiersData.offset ? t.modifiersData.offset[t.placement][l] : 0, c = a[l] + D - h - (c ? "y" === l ? c.clientTop || 0 : c.clientLeft || 0 : 0), u = a[l] + u - h, r && (r = o ? U(O, c) : O, j = o ? _(j, u) : j, r = _(r, U(w, j)), a[l] = r, s[l] = r - w), i && (r = (i = a[n]) + f["x" === l ? "top" : "left"], f = i - f["x" === l ? "bottom" : "right"], r = o ? U(r, c) : r, o = o ? _(f, u) : f, o = _(r, U(i, o)), a[n] = o, s[n] = o - i) } t.modifiersData[e] = s } }, requiresIfExists: ["offset"] }, oe = { name: "arrow", enabled: !0, phase: "main", fn: function (e) { var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = x(n.placement); if (e = L(s), s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width", i && a) { r = M("number" != typeof (r = "function" == typeof (r = r.padding) ? r(Object.assign({}, n.rects, { placement: n.placement })) : r) ? r : k(r, C)); var f = d(i), p = "y" === e ? "top" : "left", c = "y" === e ? "bottom" : "right", l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s]; a = a[e] - n.rects.reference[e], a = (i = (i = y(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = _(r[p], U(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t) } }, effect: function (e) { var t = e.state; if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) { if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return; O(t.elements.popper, e) && (t.elements.arrow = e) } }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, re = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (e) { var t = e.state; e = e.name; var n = t.rects.reference, o = t.rects.popper, r = t.modifiersData.preventOverflow, i = A(t, { elementContext: "reference" }), a = A(t, { altBoundary: !0 }); n = S(i, n), o = S(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = { referenceClippingOffsets: n, popperEscapeOffsets: o, isReferenceHidden: r, hasPopperEscaped: a }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": r, "data-popper-escaped": a }) } }, ie = B({ defaultModifiers: [Y, G, K, Q] }), ae = [Y, G, K, Q, Z, te, ne, oe, re], se = B({ defaultModifiers: ae }); e.applyStyles = Q, e.arrow = oe, e.computeStyles = K, e.createPopper = se, e.createPopperLite = ie, e.defaultModifiers = ae, e.detectOverflow = A, e.eventListeners = Y, e.flip = te, e.hide = re, e.offset = Z, e.popperGenerator = B, e.popperOffsets = G, e.preventOverflow = ne, Object.defineProperty(e, "__esModule", { value: !0 }) }));
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bootstrap = factory(global.Popper));
}(this, (function (Popper) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const NODE_TEXT = 3;
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },

    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },

    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },

    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (ancestor.matches(selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },

    prev(element, selector) {
      let previous = element.previousElementSibling;

      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },

    next(element, selector) {
      let next = element.nextElementSibling;

      while (next) {
        if (next.matches(selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  const toType = obj => {
    if (obj === null || obj === undefined) {
      return `${obj}`;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));

    return prefix;
  };

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');

    if (!selector || selector === '#') {
      let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended


      if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
        hrefAttr = `#${hrefAttr.split('#')[1]}`;
      }

      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }

    return selector;
  };

  const getSelectorFromElement = element => {
    const selector = getSelector(element);

    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }

    return null;
  };

  const getElementFromSelector = element => {
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };

  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };

  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };

  const isElement = obj => {
    if (!obj || typeof obj !== 'object') {
      return false;
    }

    if (typeof obj.jquery !== 'undefined') {
      obj = obj[0];
    }

    return typeof obj.nodeType !== 'undefined';
  };

  const getElement = obj => {
    if (isElement(obj)) {
      // it's a jQuery object or a node element
      return obj.jquery ? obj[0] : obj;
    }

    if (typeof obj === 'string' && obj.length > 0) {
      return SelectorEngine.findOne(obj);
    }

    return null;
  };

  const emulateTransitionEnd = (element, duration) => {
    let called = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;

    function listener() {
      called = true;
      element.removeEventListener(TRANSITION_END, listener);
    }

    element.addEventListener(TRANSITION_END, listener);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(element);
      }
    }, emulatedDuration);
  };

  const typeCheckConfig = (componentName, config, configTypes) => {
    Object.keys(configTypes).forEach(property => {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    });
  };

  const isVisible = element => {
    if (!element) {
      return false;
    }

    if (element.style && element.parentNode && element.parentNode.style) {
      const elementStyle = getComputedStyle(element);
      const parentNodeStyle = getComputedStyle(element.parentNode);
      return elementStyle.display !== 'none' && parentNodeStyle.display !== 'none' && elementStyle.visibility !== 'hidden';
    }

    return false;
  };

  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }

    if (element.classList.contains('disabled')) {
      return true;
    }

    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }

    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };

  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return findShadowRoot(element.parentNode);
  };

  const noop = () => {};

  const reflow = element => element.offsetHeight;

  const getjQuery = () => {
    const {
      jQuery
    } = window;

    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return jQuery;
    }

    return null;
  };

  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;

        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };

  const execute = callback => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  const elementMap = new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }

      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }

      instanceMap.set(key, instance);
    },

    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }

      return null;
    },

    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }

      const instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage

  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const customEventsRegex = /^(mouseenter|mouseleave)/i;
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * ------------------------------------------------------------------------
   * Private methods
   * ------------------------------------------------------------------------
   */

  function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }

  function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }

  function bootstrapHandler(element, fn) {
    return function handler(event) {
      event.delegateTarget = element;

      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }

      return fn.apply(element, [event]);
    };
  }

  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);

      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (let i = domElements.length; i--;) {
          if (domElements[i] === target) {
            event.delegateTarget = target;

            if (handler.oneOff) {
              // eslint-disable-next-line unicorn/consistent-destructuring
              EventHandler.off(element, event.type, selector, fn);
            }

            return fn.apply(target, [event]);
          }
        }
      } // To please ESLint


      return null;
    };
  }

  function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);

    for (let i = 0, len = uidEventList.length; i < len; i++) {
      const event = events[uidEventList[i]];

      if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
        return event;
      }
    }

    return null;
  }

  function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === 'string';
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);

    if (!isNative) {
      typeEvent = originalTypeEvent;
    }

    return [delegation, originalHandler, typeEvent];
  }

  function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    if (!handler) {
      handler = delegationFn;
      delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does


    if (customEventsRegex.test(originalTypeEvent)) {
      const wrapFn = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };

      if (delegationFn) {
        delegationFn = wrapFn(delegationFn);
      } else {
        handler = wrapFn(handler);
      }
    }

    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);

    if (previousFn) {
      previousFn.oneOff = previousFn.oneOff && oneOff;
      return;
    }

    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn.delegationSelector = delegation ? handler : null;
    fn.originalHandler = originalHandler;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, delegation);
  }

  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);

    if (!fn) {
      return;
    }

    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }

  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(handlerKey => {
      if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  }

  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }

  const EventHandler = {
    on(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, false);
    },

    one(element, event, handler, delegationFn) {
      addHandler(element, event, handler, delegationFn, true);
    },

    off(element, originalTypeEvent, handler, delegationFn) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }

      const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getEvent(element);
      const isNamespace = originalTypeEvent.startsWith('.');

      if (typeof originalHandler !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!events || !events[typeEvent]) {
          return;
        }

        removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
        return;
      }

      if (isNamespace) {
        Object.keys(events).forEach(elementEvent => {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
      }

      const storeElementEvent = events[typeEvent] || {};
      Object.keys(storeElementEvent).forEach(keyHandlers => {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');

        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          const event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
      });
    },

    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }

      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      const isNative = nativeEvents.has(typeEvent);
      let jQueryEvent;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      let evt = null;

      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }

      if (isNative) {
        evt = document.createEvent('HTMLEvents');
        evt.initEvent(typeEvent, bubbles, true);
      } else {
        evt = new CustomEvent(event, {
          bubbles,
          cancelable: true
        });
      } // merge custom information in our event


      if (typeof args !== 'undefined') {
        Object.keys(args).forEach(key => {
          Object.defineProperty(evt, key, {
            get() {
              return args[key];
            }

          });
        });
      }

      if (defaultPrevented) {
        evt.preventDefault();
      }

      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }

      if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
        jQueryEvent.preventDefault();
      }

      return evt;
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const VERSION = '5.0.1';

  class BaseComponent {
    constructor(element) {
      element = getElement(element);

      if (!element) {
        return;
      }

      this._element = element;
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      Object.getOwnPropertyNames(this).forEach(propertyName => {
        this[propertyName] = null;
      });
    }

    _queueCallback(callback, element, isAnimated = true) {
      if (!isAnimated) {
        execute(callback);
        return;
      }

      const transitionDuration = getTransitionDurationFromElement(element);
      EventHandler.one(element, 'transitionend', () => execute(callback));
      emulateTransitionEnd(element, transitionDuration);
    }
    /** Static */


    static getInstance(element) {
      return Data.get(element, this.DATA_KEY);
    }

    static get VERSION() {
      return VERSION;
    }

    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }

    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }

    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$c = 'alert';
  const DATA_KEY$b = 'bs.alert';
  const EVENT_KEY$b = `.${DATA_KEY$b}`;
  const DATA_API_KEY$8 = '.data-api';
  const SELECTOR_DISMISS = '[data-bs-dismiss="alert"]';
  const EVENT_CLOSE = `close${EVENT_KEY$b}`;
  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  const EVENT_CLICK_DATA_API$7 = `click${EVENT_KEY$b}${DATA_API_KEY$8}`;
  const CLASS_NAME_ALERT = 'alert';
  const CLASS_NAME_FADE$6 = 'fade';
  const CLASS_NAME_SHOW$9 = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$c;
    } // Public


    close(element) {
      const rootElement = element ? this._getRootElement(element) : this._element;

      const customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent === null || customEvent.defaultPrevented) {
        return;
      }

      this._removeElement(rootElement);
    } // Private


    _getRootElement(element) {
      return getElementFromSelector(element) || element.closest(`.${CLASS_NAME_ALERT}`);
    }

    _triggerCloseEvent(element) {
      return EventHandler.trigger(element, EVENT_CLOSE);
    }

    _removeElement(element) {
      element.classList.remove(CLASS_NAME_SHOW$9);
      const isAnimated = element.classList.contains(CLASS_NAME_FADE$6);

      this._queueCallback(() => this._destroyElement(element), element, isAnimated);
    }

    _destroyElement(element) {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }

      EventHandler.trigger(element, EVENT_CLOSED);
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data.get(this, DATA_KEY$b);

        if (!data) {
          data = new Alert(this);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    }

    static handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Alert to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Alert);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$b = 'button';
  const DATA_KEY$a = 'bs.button';
  const EVENT_KEY$a = `.${DATA_KEY$a}`;
  const DATA_API_KEY$7 = '.data-api';
  const CLASS_NAME_ACTIVE$3 = 'active';
  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$7}`;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$b;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data.get(this, DATA_KEY$a);

        if (!data) {
          data = new Button(this);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    let data = Data.get(button, DATA_KEY$a);

    if (!data) {
      data = new Button(button);
    }

    data.toggle();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Button to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Button);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    if (val === Number(val).toString()) {
      return Number(val);
    }

    if (val === '' || val === 'null') {
      return null;
    }

    return val;
  }

  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }

  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },

    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },

    getDataAttributes(element) {
      if (!element) {
        return {};
      }

      const attributes = {};
      Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      });
      return attributes;
    },

    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },

    offset(element) {
      const rect = element.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    },

    position(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }

  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$a = 'carousel';
  const DATA_KEY$9 = 'bs.carousel';
  const EVENT_KEY$9 = `.${DATA_KEY$9}`;
  const DATA_API_KEY$6 = '.data-api';
  const ARROW_LEFT_KEY = 'ArrowLeft';
  const ARROW_RIGHT_KEY = 'ArrowRight';
  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  const SWIPE_THRESHOLD = 40;
  const Default$9 = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  const DefaultType$9 = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  const ORDER_NEXT = 'next';
  const ORDER_PREV = 'prev';
  const DIRECTION_LEFT = 'left';
  const DIRECTION_RIGHT = 'right';
  const EVENT_SLIDE = `slide${EVENT_KEY$9}`;
  const EVENT_SLID = `slid${EVENT_KEY$9}`;
  const EVENT_KEYDOWN = `keydown${EVENT_KEY$9}`;
  const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY$9}`;
  const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY$9}`;
  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  const EVENT_DRAG_START = `dragstart${EVENT_KEY$9}`;
  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$9}${DATA_API_KEY$6}`;
  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$9}${DATA_API_KEY$6}`;
  const CLASS_NAME_CAROUSEL = 'carousel';
  const CLASS_NAME_ACTIVE$2 = 'active';
  const CLASS_NAME_SLIDE = 'slide';
  const CLASS_NAME_END = 'carousel-item-end';
  const CLASS_NAME_START = 'carousel-item-start';
  const CLASS_NAME_NEXT = 'carousel-item-next';
  const CLASS_NAME_PREV = 'carousel-item-prev';
  const CLASS_NAME_POINTER_EVENT = 'pointer-event';
  const SELECTOR_ACTIVE$1 = '.active';
  const SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  const SELECTOR_ITEM = '.carousel-item';
  const SELECTOR_ITEM_IMG = '.carousel-item img';
  const SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  const SELECTOR_INDICATORS = '.carousel-indicators';
  const SELECTOR_INDICATOR = '[data-bs-target]';
  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  const POINTER_TYPE_TOUCH = 'touch';
  const POINTER_TYPE_PEN = 'pen';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Carousel extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent);

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$9;
    }

    static get NAME() {
      return NAME$a;
    } // Public


    next() {
      if (!this._isSliding) {
        this._slide(ORDER_NEXT);
      }
    }

    nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }

    prev() {
      if (!this._isSliding) {
        this._slide(ORDER_PREV);
      }
    }

    pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
        triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }

    cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config && this._config.interval && !this._isPaused) {
        this._updateInterval();

        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }

    to(index) {
      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

      this._slide(order, this._items[index]);
    } // Private


    _getConfig(config) {
      config = { ...Default$9,
        ...config
      };
      typeCheckConfig(NAME$a, config, DefaultType$9);
      return config;
    }

    _handleSwipe() {
      const absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      const direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0;

      if (!direction) {
        return;
      }

      this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }

    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
      }

      if (this._config.pause === 'hover') {
        EventHandler.on(this._element, EVENT_MOUSEENTER, event => this.pause(event));
        EventHandler.on(this._element, EVENT_MOUSELEAVE, event => this.cycle(event));
      }

      if (this._config.touch && this._touchSupported) {
        this._addTouchEventListeners();
      }
    }

    _addTouchEventListeners() {
      const start = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchStartX = event.clientX;
        } else if (!this._pointerEvent) {
          this.touchStartX = event.touches[0].clientX;
        }
      };

      const move = event => {
        // ensure swiping with one touch and not pinching
        this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
      };

      const end = event => {
        if (this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)) {
          this.touchDeltaX = event.clientX - this.touchStartX;
        }

        this._handleSwipe();

        if (this._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          this.pause();

          if (this.touchTimeout) {
            clearTimeout(this.touchTimeout);
          }

          this.touchTimeout = setTimeout(event => this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        }
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
        EventHandler.on(itemImg, EVENT_DRAG_START, e => e.preventDefault());
      });

      if (this._pointerEvent) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, event => start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, event => end(event));

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, event => start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, event => end(event));
      }
    }

    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      if (event.key === ARROW_LEFT_KEY) {
        event.preventDefault();

        this._slide(DIRECTION_RIGHT);
      } else if (event.key === ARROW_RIGHT_KEY) {
        event.preventDefault();

        this._slide(DIRECTION_LEFT);
      }
    }

    _getItemIndex(element) {
      this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
      return this._items.indexOf(element);
    }

    _getItemByOrder(order, activeElement) {
      const isNext = order === ORDER_NEXT;
      const isPrev = order === ORDER_PREV;

      const activeIndex = this._getItemIndex(activeElement);

      const lastItemIndex = this._items.length - 1;
      const isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      const delta = isPrev ? -1 : 1;
      const itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    }

    _triggerSlideEvent(relatedTarget, eventDirectionName) {
      const targetIndex = this._getItemIndex(relatedTarget);

      const fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
    }

    _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute('aria-current');
        const indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);

        for (let i = 0; i < indicators.length; i++) {
          if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
            indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
            indicators[i].setAttribute('aria-current', 'true');
            break;
          }
        }
      }
    }

    _updateInterval() {
      const element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      if (!element) {
        return;
      }

      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

      if (elementInterval) {
        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
        this._config.interval = elementInterval;
      } else {
        this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }

    _slide(directionOrOrder, element) {
      const order = this._directionToOrder(directionOrOrder);

      const activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      const activeElementIndex = this._getItemIndex(activeElement);

      const nextElement = element || this._getItemByOrder(order, activeElement);

      const nextElementIndex = this._getItemIndex(nextElement);

      const isCycling = Boolean(this._interval);
      const isNext = order === ORDER_NEXT;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;

      const eventDirectionName = this._orderToDirection(order);

      if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
        this._isSliding = false;
        return;
      }

      const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.defaultPrevented) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      this._activeElement = nextElement;

      const triggerSlidEvent = () => {
        EventHandler.trigger(this._element, EVENT_SLID, {
          relatedTarget: nextElement,
          direction: eventDirectionName,
          from: activeElementIndex,
          to: nextElementIndex
        });
      };

      if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
        nextElement.classList.add(orderClassName);
        reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);

        const completeCallBack = () => {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE$2);
          activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
          this._isSliding = false;
          setTimeout(triggerSlidEvent, 0);
        };

        this._queueCallback(completeCallBack, activeElement, true);
      } else {
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        this._isSliding = false;
        triggerSlidEvent();
      }

      if (isCycling) {
        this.cycle();
      }
    }

    _directionToOrder(direction) {
      if (![DIRECTION_RIGHT, DIRECTION_LEFT].includes(direction)) {
        return direction;
      }

      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }

      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }

    _orderToDirection(order) {
      if (![ORDER_NEXT, ORDER_PREV].includes(order)) {
        return order;
      }

      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    } // Static


    static carouselInterface(element, config) {
      let data = Data.get(element, DATA_KEY$9);
      let _config = { ...Default$9,
        ...Manipulator.getDataAttributes(element)
      };

      if (typeof config === 'object') {
        _config = { ..._config,
          ...config
        };
      }

      const action = typeof config === 'string' ? config : _config.slide;

      if (!data) {
        data = new Carousel(element, _config);
      }

      if (typeof config === 'number') {
        data.to(config);
      } else if (typeof action === 'string') {
        if (typeof data[action] === 'undefined') {
          throw new TypeError(`No method named "${action}"`);
        }

        data[action]();
      } else if (_config.interval && _config.ride) {
        data.pause();
        data.cycle();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Carousel.carouselInterface(this, config);
      });
    }

    static dataApiClickHandler(event) {
      const target = getElementFromSelector(this);

      if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
        return;
      }

      const config = { ...Manipulator.getDataAttributes(target),
        ...Manipulator.getDataAttributes(this)
      };
      const slideIndex = this.getAttribute('data-bs-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel.carouselInterface(target, config);

      if (slideIndex) {
        Data.get(target, DATA_KEY$9).to(slideIndex);
      }

      event.preventDefault();
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

    for (let i = 0, len = carousels.length; i < len; i++) {
      Carousel.carouselInterface(carousels[i], Data.get(carousels[i], DATA_KEY$9));
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Carousel to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Carousel);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$9 = 'collapse';
  const DATA_KEY$8 = 'bs.collapse';
  const EVENT_KEY$8 = `.${DATA_KEY$8}`;
  const DATA_API_KEY$5 = '.data-api';
  const Default$8 = {
    toggle: true,
    parent: ''
  };
  const DefaultType$8 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  const EVENT_SHOW$5 = `show${EVENT_KEY$8}`;
  const EVENT_SHOWN$5 = `shown${EVENT_KEY$8}`;
  const EVENT_HIDE$5 = `hide${EVENT_KEY$8}`;
  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$8}`;
  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  const CLASS_NAME_SHOW$8 = 'show';
  const CLASS_NAME_COLLAPSE = 'collapse';
  const CLASS_NAME_COLLAPSING = 'collapsing';
  const CLASS_NAME_COLLAPSED = 'collapsed';
  const WIDTH = 'width';
  const HEIGHT = 'height';
  const SELECTOR_ACTIVES = '.show, .collapsing';
  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._isTransitioning = false;
      this._config = this._getConfig(config);
      this._triggerArray = SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],` + `${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

      for (let i = 0, len = toggleList.length; i < len; i++) {
        const elem = toggleList[i];
        const selector = getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

        if (selector !== null && filterElement.length) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    static get Default() {
      return Default$8;
    }

    static get NAME() {
      return NAME$9;
    } // Public


    toggle() {
      if (this._element.classList.contains(CLASS_NAME_SHOW$8)) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (this._isTransitioning || this._element.classList.contains(CLASS_NAME_SHOW$8)) {
        return;
      }

      let actives;
      let activesData;

      if (this._parent) {
        actives = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(elem => {
          if (typeof this._config.parent === 'string') {
            return elem.getAttribute('data-bs-parent') === this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      const container = SelectorEngine.findOne(this._selector);

      if (actives) {
        const tempActiveData = actives.find(elem => container !== elem);
        activesData = tempActiveData ? Data.get(tempActiveData, DATA_KEY$8) : null;

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      if (actives) {
        actives.forEach(elemActive => {
          if (container !== elemActive) {
            Collapse.collapseInterface(elemActive, 'hide');
          }

          if (!activesData) {
            Data.set(elemActive, DATA_KEY$8, null);
          }
        });
      }

      const dimension = this._getDimension();

      this._element.classList.remove(CLASS_NAME_COLLAPSE);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        this._triggerArray.forEach(element => {
          element.classList.remove(CLASS_NAME_COLLAPSED);
          element.setAttribute('aria-expanded', true);
        });
      }

      this.setTransitioning(true);

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);

        this._element.style[dimension] = '';
        this.setTransitioning(false);
        EventHandler.trigger(this._element, EVENT_SHOWN$5);
      };

      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;

      this._queueCallback(complete, this._element, true);

      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }

    hide() {
      if (this._isTransitioning || !this._element.classList.contains(CLASS_NAME_SHOW$8)) {
        return;
      }

      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);

      if (startEvent.defaultPrevented) {
        return;
      }

      const dimension = this._getDimension();

      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);

      this._element.classList.add(CLASS_NAME_COLLAPSING);

      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$8);

      const triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (let i = 0; i < triggerArrayLength; i++) {
          const trigger = this._triggerArray[i];
          const elem = getElementFromSelector(trigger);

          if (elem && !elem.classList.contains(CLASS_NAME_SHOW$8)) {
            trigger.classList.add(CLASS_NAME_COLLAPSED);
            trigger.setAttribute('aria-expanded', false);
          }
        }
      }

      this.setTransitioning(true);

      const complete = () => {
        this.setTransitioning(false);

        this._element.classList.remove(CLASS_NAME_COLLAPSING);

        this._element.classList.add(CLASS_NAME_COLLAPSE);

        EventHandler.trigger(this._element, EVENT_HIDDEN$5);
      };

      this._element.style[dimension] = '';

      this._queueCallback(complete, this._element, true);
    }

    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    } // Private


    _getConfig(config) {
      config = { ...Default$8,
        ...config
      };
      config.toggle = Boolean(config.toggle); // Coerce string values

      typeCheckConfig(NAME$9, config, DefaultType$8);
      return config;
    }

    _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    }

    _getParent() {
      let {
        parent
      } = this._config;
      parent = getElement(parent);
      const selector = `${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;
      SelectorEngine.find(selector, parent).forEach(element => {
        const selected = getElementFromSelector(element);

        this._addAriaAndCollapsedClass(selected, [element]);
      });
      return parent;
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (!element || !triggerArray.length) {
        return;
      }

      const isOpen = element.classList.contains(CLASS_NAME_SHOW$8);
      triggerArray.forEach(elem => {
        if (isOpen) {
          elem.classList.remove(CLASS_NAME_COLLAPSED);
        } else {
          elem.classList.add(CLASS_NAME_COLLAPSED);
        }

        elem.setAttribute('aria-expanded', isOpen);
      });
    } // Static


    static collapseInterface(element, config) {
      let data = Data.get(element, DATA_KEY$8);
      const _config = { ...Default$8,
        ...Manipulator.getDataAttributes(element),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      if (!data) {
        data = new Collapse(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Collapse.collapseInterface(this, config);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }

    const triggerData = Manipulator.getDataAttributes(this);
    const selector = getSelectorFromElement(this);
    const selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(element => {
      const data = Data.get(element, DATA_KEY$8);
      let config;

      if (data) {
        // update parent attribute
        if (data._parent === null && typeof triggerData.parent === 'string') {
          data._config.parent = triggerData.parent;
          data._parent = data._getParent();
        }

        config = 'toggle';
      } else {
        config = triggerData;
      }

      Collapse.collapseInterface(element, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Collapse to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Collapse);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$8 = 'dropdown';
  const DATA_KEY$7 = 'bs.dropdown';
  const EVENT_KEY$7 = `.${DATA_KEY$7}`;
  const DATA_API_KEY$4 = '.data-api';
  const ESCAPE_KEY$2 = 'Escape';
  const SPACE_KEY = 'Space';
  const TAB_KEY = 'Tab';
  const ARROW_UP_KEY = 'ArrowUp';
  const ARROW_DOWN_KEY = 'ArrowDown';
  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  const REGEXP_KEYDOWN = new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);
  const EVENT_HIDE$4 = `hide${EVENT_KEY$7}`;
  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$7}`;
  const EVENT_SHOW$4 = `show${EVENT_KEY$7}`;
  const EVENT_SHOWN$4 = `shown${EVENT_KEY$7}`;
  const EVENT_CLICK = `click${EVENT_KEY$7}`;
  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;
  const CLASS_NAME_SHOW$7 = 'show';
  const CLASS_NAME_DROPUP = 'dropup';
  const CLASS_NAME_DROPEND = 'dropend';
  const CLASS_NAME_DROPSTART = 'dropstart';
  const CLASS_NAME_NAVBAR = 'navbar';
  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
  const SELECTOR_MENU = '.dropdown-menu';
  const SELECTOR_NAVBAR_NAV = '.navbar-nav';
  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
  const Default$7 = {
    offset: [0, 2],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
  };
  const DefaultType$7 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    static get Default() {
      return Default$7;
    }

    static get DefaultType() {
      return DefaultType$7;
    }

    static get NAME() {
      return NAME$8;
    } // Public


    toggle() {
      if (isDisabled(this._element)) {
        return;
      }

      const isActive = this._element.classList.contains(CLASS_NAME_SHOW$7);

      if (isActive) {
        this.hide();
        return;
      }

      this.show();
    }

    show() {
      if (isDisabled(this._element) || this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      const parent = Dropdown.getParentFromElement(this._element);
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);

      if (showEvent.defaultPrevented) {
        return;
      } // Totally disable Popper for Dropdowns in Navbar


      if (this._inNavbar) {
        Manipulator.setDataAttribute(this._menu, 'popper', 'none');
      } else {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }

        let referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (isElement(this._config.reference)) {
          referenceElement = getElement(this._config.reference);
        } else if (typeof this._config.reference === 'object') {
          referenceElement = this._config.reference;
        }

        const popperConfig = this._getPopperConfig();

        const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
        this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);

        if (isDisplayStatic) {
          Manipulator.setDataAttribute(this._menu, 'popper', 'static');
        }
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) {
        [].concat(...document.body.children).forEach(elem => EventHandler.on(elem, 'mouseover', noop));
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      this._menu.classList.toggle(CLASS_NAME_SHOW$7);

      this._element.classList.toggle(CLASS_NAME_SHOW$7);

      EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
    }

    hide() {
      if (isDisabled(this._element) || !this._menu.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      const relatedTarget = {
        relatedTarget: this._element
      };

      this._completeHide(relatedTarget);
    }

    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper) {
        this._popper.update();
      }
    } // Private


    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK, event => {
        event.preventDefault();
        this.toggle();
      });
    }

    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);

      if (hideEvent.defaultPrevented) {
        return;
      } // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(elem => EventHandler.off(elem, 'mouseover', noop));
      }

      if (this._popper) {
        this._popper.destroy();
      }

      this._menu.classList.remove(CLASS_NAME_SHOW$7);

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      this._element.setAttribute('aria-expanded', 'false');

      Manipulator.removeDataAttribute(this._menu, 'popper');
      EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
    }

    _getConfig(config) {
      config = { ...this.constructor.Default,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      typeCheckConfig(NAME$8, config, this.constructor.DefaultType);

      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
        // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }

      return config;
    }

    _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }

    _getPlacement() {
      const parentDropdown = this._element.parentNode;

      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }

      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      } // We need to trim the value because custom properties can also include spaces


      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }

      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }

    _detectNavbar() {
      return this._element.closest(`.${CLASS_NAME_NAVBAR}`) !== null;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }]
      }; // Disable Popper if we have a static display

      if (this._config.display === 'static') {
        defaultBsPopperConfig.modifiers = [{
          name: 'applyStyles',
          enabled: false
        }];
      }

      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _selectMenuItem(event) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);

      if (!items.length) {
        return;
      }

      let index = items.indexOf(event.target); // Up

      if (event.key === ARROW_UP_KEY && index > 0) {
        index--;
      } // Down


      if (event.key === ARROW_DOWN_KEY && index < items.length - 1) {
        index++;
      } // index is -1 if the first keydown is an ArrowUp


      index = index === -1 ? 0 : index;
      items[index].focus();
    } // Static


    static dropdownInterface(element, config) {
      let data = Data.get(element, DATA_KEY$7);

      const _config = typeof config === 'object' ? config : null;

      if (!data) {
        data = new Dropdown(element, _config);
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, config);
      });
    }

    static clearMenus(event) {
      if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY)) {
        return;
      }

      const toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (let i = 0, len = toggles.length; i < len; i++) {
        const context = Data.get(toggles[i], DATA_KEY$7);

        if (!context || context._config.autoClose === false) {
          continue;
        }

        if (!context._element.classList.contains(CLASS_NAME_SHOW$7)) {
          continue;
        }

        const relatedTarget = {
          relatedTarget: context._element
        };

        if (event) {
          const composedPath = event.composedPath();
          const isMenuTarget = composedPath.includes(context._menu);

          if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
            continue;
          } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


          if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
            continue;
          }

          if (event.type === 'click') {
            relatedTarget.clickEvent = event;
          }
        }

        context._completeHide(relatedTarget);
      }
    }

    static getParentFromElement(element) {
      return getElementFromSelector(element) || element.parentNode;
    }

    static dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) {
        return;
      }

      const isActive = this.classList.contains(CLASS_NAME_SHOW$7);

      if (!isActive && event.key === ESCAPE_KEY$2) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (isDisabled(this)) {
        return;
      }

      const getToggleButton = () => this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];

      if (event.key === ESCAPE_KEY$2) {
        getToggleButton().focus();
        Dropdown.clearMenus();
        return;
      }

      if (!isActive && (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY)) {
        getToggleButton().click();
        return;
      }

      if (!isActive || event.key === SPACE_KEY) {
        Dropdown.clearMenus();
        return;
      }

      Dropdown.getInstance(getToggleButton())._selectMenuItem(event);
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
    event.preventDefault();
    Dropdown.dropdownInterface(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Dropdown to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Dropdown);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';

  const getWidth = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  };

  const hide = (width = getWidth()) => {
    _disableOverFlow(); // give padding to element to balances the hidden scrollbar width


    _setElementAttributes('body', 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements, to keep shown fullwidth


    _setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

    _setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
  };

  const _disableOverFlow = () => {
    const actualValue = document.body.style.overflow;

    if (actualValue) {
      Manipulator.setDataAttribute(document.body, 'overflow', actualValue);
    }

    document.body.style.overflow = 'hidden';
  };

  const _setElementAttributes = (selector, styleProp, callback) => {
    const scrollbarWidth = getWidth();
    SelectorEngine.find(selector).forEach(element => {
      if (element !== document.body && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      const actualValue = element.style[styleProp];
      const calculatedValue = window.getComputedStyle(element)[styleProp];
      Manipulator.setDataAttribute(element, styleProp, actualValue);
      element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
    });
  };

  const reset = () => {
    _resetElementAttributes('body', 'overflow');

    _resetElementAttributes('body', 'paddingRight');

    _resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');

    _resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
  };

  const _resetElementAttributes = (selector, styleProp) => {
    SelectorEngine.find(selector).forEach(element => {
      const value = Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined') {
        element.style.removeProperty(styleProp);
      } else {
        Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    });
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  const Default$6 = {
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: document.body,
    // give the choice to place backdrop under different elements
    clickCallback: null
  };
  const DefaultType$6 = {
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: 'element',
    clickCallback: '(function|null)'
  };
  const NAME$7 = 'backdrop';
  const CLASS_NAME_BACKDROP = 'modal-backdrop';
  const CLASS_NAME_FADE$5 = 'fade';
  const CLASS_NAME_SHOW$6 = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$7}`;

  class Backdrop {
    constructor(config) {
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._append();

      if (this._config.isAnimated) {
        reflow(this._getElement());
      }

      this._getElement().classList.add(CLASS_NAME_SHOW$6);

      this._emulateAnimation(() => {
        execute(callback);
      });
    }

    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }

      this._getElement().classList.remove(CLASS_NAME_SHOW$6);

      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    } // Private


    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = CLASS_NAME_BACKDROP;

        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$5);
        }

        this._element = backdrop;
      }

      return this._element;
    }

    _getConfig(config) {
      config = { ...Default$6,
        ...(typeof config === 'object' ? config : {})
      };
      config.rootElement = config.rootElement || document.body;
      typeCheckConfig(NAME$7, config, DefaultType$6);
      return config;
    }

    _append() {
      if (this._isAppended) {
        return;
      }

      this._config.rootElement.appendChild(this._getElement());

      EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }

    dispose() {
      if (!this._isAppended) {
        return;
      }

      EventHandler.off(this._element, EVENT_MOUSEDOWN);

      this._getElement().parentNode.removeChild(this._element);

      this._isAppended = false;
    }

    _emulateAnimation(callback) {
      if (!this._config.isAnimated) {
        execute(callback);
        return;
      }

      const backdropTransitionDuration = getTransitionDurationFromElement(this._getElement());
      EventHandler.one(this._getElement(), 'transitionend', () => execute(callback));
      emulateTransitionEnd(this._getElement(), backdropTransitionDuration);
    }

  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$6 = 'modal';
  const DATA_KEY$6 = 'bs.modal';
  const EVENT_KEY$6 = `.${DATA_KEY$6}`;
  const DATA_API_KEY$3 = '.data-api';
  const ESCAPE_KEY$1 = 'Escape';
  const Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
  };
  const DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
  };
  const EVENT_HIDE$3 = `hide${EVENT_KEY$6}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$6}`;
  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$6}`;
  const EVENT_SHOW$3 = `show${EVENT_KEY$6}`;
  const EVENT_SHOWN$3 = `shown${EVENT_KEY$6}`;
  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$6}`;
  const EVENT_RESIZE = `resize${EVENT_KEY$6}`;
  const EVENT_CLICK_DISMISS$2 = `click.dismiss${EVENT_KEY$6}`;
  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${EVENT_KEY$6}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$6}`;
  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE$4 = 'fade';
  const CLASS_NAME_SHOW$5 = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  const SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._isShown = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
    } // Getters


    static get Default() {
      return Default$5;
    }

    static get NAME() {
      return NAME$6;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }

      if (this._isAnimated()) {
        this._isTransitioning = true;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });

      if (this._isShown || showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      hide();
      document.body.classList.add(CLASS_NAME_OPEN);

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, event => this.hide(event));
      EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, () => {
        EventHandler.one(this._element, EVENT_MOUSEUP_DISMISS, event => {
          if (event.target === this._element) {
            this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(() => this._showElement(relatedTarget));
    }

    hide(event) {
      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

      if (hideEvent.defaultPrevented) {
        return;
      }

      this._isShown = false;

      const isAnimated = this._isAnimated();

      if (isAnimated) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      EventHandler.off(document, EVENT_FOCUSIN$2);

      this._element.classList.remove(CLASS_NAME_SHOW$5);

      EventHandler.off(this._element, EVENT_CLICK_DISMISS$2);
      EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);

      this._queueCallback(() => this._hideModal(), this._element, isAnimated);
    }

    dispose() {
      [window, this._dialog].forEach(htmlElement => EventHandler.off(htmlElement, EVENT_KEY$6));

      this._backdrop.dispose();

      super.dispose();
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      EventHandler.off(document, EVENT_FOCUSIN$2);
    }

    handleUpdate() {
      this._adjustDialog();
    } // Private


    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value
        isAnimated: this._isAnimated()
      });
    }

    _getConfig(config) {
      config = { ...Default$5,
        ...Manipulator.getDataAttributes(this._element),
        ...config
      };
      typeCheckConfig(NAME$6, config, DefaultType$5);
      return config;
    }

    _showElement(relatedTarget) {
      const isAnimated = this._isAnimated();

      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.scrollTop = 0;

      if (modalBody) {
        modalBody.scrollTop = 0;
      }

      if (isAnimated) {
        reflow(this._element);
      }

      this._element.classList.add(CLASS_NAME_SHOW$5);

      if (this._config.focus) {
        this._enforceFocus();
      }

      const transitionComplete = () => {
        if (this._config.focus) {
          this._element.focus();
        }

        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };

      this._queueCallback(transitionComplete, this._dialog, isAnimated);
    }

    _enforceFocus() {
      EventHandler.off(document, EVENT_FOCUSIN$2); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$2, event => {
        if (document !== event.target && this._element !== event.target && !this._element.contains(event.target)) {
          this._element.focus();
        }
      });
    }

    _setEscapeEvent() {
      if (this._isShown) {
        EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
          if (this._config.keyboard && event.key === ESCAPE_KEY$1) {
            event.preventDefault();
            this.hide();
          } else if (!this._config.keyboard && event.key === ESCAPE_KEY$1) {
            this._triggerBackdropTransition();
          }
        });
      } else {
        EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
      }
    }

    _setResizeEvent() {
      if (this._isShown) {
        EventHandler.on(window, EVENT_RESIZE, () => this._adjustDialog());
      } else {
        EventHandler.off(window, EVENT_RESIZE);
      }
    }

    _hideModal() {
      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);

        this._resetAdjustments();

        reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      });
    }

    _showBackdrop(callback) {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, event => {
        if (this._ignoreBackdropClick) {
          this._ignoreBackdropClick = false;
          return;
        }

        if (event.target !== event.currentTarget) {
          return;
        }

        if (this._config.backdrop === true) {
          this.hide();
        } else if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
        }
      });

      this._backdrop.show(callback);
    }

    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$4);
    }

    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }

      this._element.classList.add(CLASS_NAME_STATIC);

      const modalTransitionDuration = getTransitionDurationFromElement(this._dialog);
      EventHandler.off(this._element, 'transitionend');
      EventHandler.one(this._element, 'transitionend', () => {
        this._element.classList.remove(CLASS_NAME_STATIC);

        if (!isModalOverflowing) {
          EventHandler.one(this._element, 'transitionend', () => {
            this._element.style.overflowY = '';
          });
          emulateTransitionEnd(this._element, modalTransitionDuration);
        }
      });
      emulateTransitionEnd(this._element, modalTransitionDuration);

      this._element.focus();
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------


    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;

      if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) {
        this._element.style.paddingLeft = `${scrollbarWidth}px`;
      }

      if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) {
        this._element.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    } // Static


    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getInstance(this) || new Modal(this, typeof config === 'object' ? config : {});

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](relatedTarget);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    EventHandler.one(target, EVENT_SHOW$3, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      EventHandler.one(target, EVENT_HIDDEN$3, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const data = Modal.getInstance(target) || new Modal(target);
    data.toggle(this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Modal to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Modal);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$5 = 'offcanvas';
  const DATA_KEY$5 = 'bs.offcanvas';
  const EVENT_KEY$5 = `.${DATA_KEY$5}`;
  const DATA_API_KEY$2 = '.data-api';
  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const ESCAPE_KEY = 'Escape';
  const Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
  };
  const CLASS_NAME_SHOW$4 = 'show';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW$2 = `show${EVENT_KEY$5}`;
  const EVENT_SHOWN$2 = `shown${EVENT_KEY$5}`;
  const EVENT_HIDE$2 = `hide${EVENT_KEY$5}`;
  const EVENT_HIDDEN$2 = `hidden${EVENT_KEY$5}`;
  const EVENT_FOCUSIN$1 = `focusin${EVENT_KEY$5}`;
  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$5}${DATA_API_KEY$2}`;
  const EVENT_CLICK_DISMISS$1 = `click.dismiss${EVENT_KEY$5}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$5}`;
  const SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]';
  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();

      this._addEventListeners();
    } // Getters


    static get NAME() {
      return NAME$5;
    }

    static get Default() {
      return Default$4;
    } // Public


    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }

    show(relatedTarget) {
      if (this._isShown) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget
      });

      if (showEvent.defaultPrevented) {
        return;
      }

      this._isShown = true;
      this._element.style.visibility = 'visible';

      this._backdrop.show();

      if (!this._config.scroll) {
        hide();

        this._enforceFocusOnElement(this._element);
      }

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      this._element.classList.add(CLASS_NAME_SHOW$4);

      const completeCallBack = () => {
        EventHandler.trigger(this._element, EVENT_SHOWN$2, {
          relatedTarget
        });
      };

      this._queueCallback(completeCallBack, this._element, true);
    }

    hide() {
      if (!this._isShown) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);

      if (hideEvent.defaultPrevented) {
        return;
      }

      EventHandler.off(document, EVENT_FOCUSIN$1);

      this._element.blur();

      this._isShown = false;

      this._element.classList.remove(CLASS_NAME_SHOW$4);

      this._backdrop.hide();

      const completeCallback = () => {
        this._element.setAttribute('aria-hidden', true);

        this._element.removeAttribute('aria-modal');

        this._element.removeAttribute('role');

        this._element.style.visibility = 'hidden';

        if (!this._config.scroll) {
          reset();
        }

        EventHandler.trigger(this._element, EVENT_HIDDEN$2);
      };

      this._queueCallback(completeCallback, this._element, true);
    }

    dispose() {
      this._backdrop.dispose();

      super.dispose();
      EventHandler.off(document, EVENT_FOCUSIN$1);
    } // Private


    _getConfig(config) {
      config = { ...Default$4,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      typeCheckConfig(NAME$5, config, DefaultType$4);
      return config;
    }

    _initializeBackDrop() {
      return new Backdrop({
        isVisible: this._config.backdrop,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      });
    }

    _enforceFocusOnElement(element) {
      EventHandler.off(document, EVENT_FOCUSIN$1); // guard against infinite focus loop

      EventHandler.on(document, EVENT_FOCUSIN$1, event => {
        if (document !== event.target && element !== event.target && !element.contains(event.target)) {
          element.focus();
        }
      });
      element.focus();
    }

    _addEventListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, () => this.hide());
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (this._config.keyboard && event.key === ESCAPE_KEY) {
          this.hide();
        }
      });
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Data.get(this, DATA_KEY$5) || new Offcanvas(this, typeof config === 'object' ? config : {});

        if (typeof config !== 'string') {
          return;
        }

        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
    const target = getElementFromSelector(this);

    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$2, () => {
      // focus on trigger when it is closed
      if (isVisible(this)) {
        this.focus();
      }
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

    const allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

    if (allReadyOpen && allReadyOpen !== target) {
      Offcanvas.getInstance(allReadyOpen).hide();
    }

    const data = Data.get(target, DATA_KEY$5) || new Offcanvas(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    SelectorEngine.find(OPEN_SELECTOR).forEach(el => (Data.get(el, DATA_KEY$5) || new Offcanvas(el)).show());
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  defineJQueryPlugin(Offcanvas);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  const uriAttrs = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  const allowedAttribute = (attr, allowedAttributeList) => {
    const attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.includes(attrName)) {
      if (uriAttrs.has(attrName)) {
        return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue) || DATA_URL_PATTERN.test(attr.nodeValue));
      }

      return true;
    }

    const regExp = allowedAttributeList.filter(attrRegex => attrRegex instanceof RegExp); // Check if a regular expression validates the attribute.

    for (let i = 0, len = regExp.length; i < len; i++) {
      if (regExp[i].test(attrName)) {
        return true;
      }
    }

    return false;
  };

  const DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    const allowlistKeys = Object.keys(allowList);
    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

    for (let i = 0, len = elements.length; i < len; i++) {
      const el = elements[i];
      const elName = el.nodeName.toLowerCase();

      if (!allowlistKeys.includes(elName)) {
        el.parentNode.removeChild(el);
        continue;
      }

      const attributeList = [].concat(...el.attributes);
      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elName] || []);
      attributeList.forEach(attr => {
        if (!allowedAttribute(attr, allowedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$4 = 'tooltip';
  const DATA_KEY$4 = 'bs.tooltip';
  const EVENT_KEY$4 = `.${DATA_KEY$4}`;
  const CLASS_PREFIX$1 = 'bs-tooltip';
  const BSCLS_PREFIX_REGEX$1 = new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`, 'g');
  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  const DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
  };
  const AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
  };
  const Default$3 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [0, 0],
    container: false,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
  };
  const Event$2 = {
    HIDE: `hide${EVENT_KEY$4}`,
    HIDDEN: `hidden${EVENT_KEY$4}`,
    SHOW: `show${EVENT_KEY$4}`,
    SHOWN: `shown${EVENT_KEY$4}`,
    INSERTED: `inserted${EVENT_KEY$4}`,
    CLICK: `click${EVENT_KEY$4}`,
    FOCUSIN: `focusin${EVENT_KEY$4}`,
    FOCUSOUT: `focusout${EVENT_KEY$4}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$4}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$4}`
  };
  const CLASS_NAME_FADE$3 = 'fade';
  const CLASS_NAME_MODAL = 'modal';
  const CLASS_NAME_SHOW$3 = 'show';
  const HOVER_STATE_SHOW = 'show';
  const HOVER_STATE_OUT = 'out';
  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  const TRIGGER_HOVER = 'hover';
  const TRIGGER_FOCUS = 'focus';
  const TRIGGER_CLICK = 'click';
  const TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }

      super(element); // private

      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this._config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    static get Default() {
      return Default$3;
    }

    static get NAME() {
      return NAME$4;
    }

    static get Event() {
      return Event$2;
    }

    static get DefaultType() {
      return DefaultType$3;
    } // Public


    enable() {
      this._isEnabled = true;
    }

    disable() {
      this._isEnabled = false;
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }

    toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        const context = this._initializeOnDelegatedTarget(event);

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    }

    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

      if (this.tip && this.tip.parentNode) {
        this.tip.parentNode.removeChild(this.tip);
      }

      if (this._popper) {
        this._popper.destroy();
      }

      super.dispose();
    }

    show() {
      if (this._element.style.display === 'none') {
        throw new Error('Please use show on visible elements');
      }

      if (!(this.isWithContent() && this._isEnabled)) {
        return;
      }

      const showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }

      const tip = this.getTipElement();
      const tipId = getUID(this.constructor.NAME);
      tip.setAttribute('id', tipId);

      this._element.setAttribute('aria-describedby', tipId);

      this.setContent();

      if (this._config.animation) {
        tip.classList.add(CLASS_NAME_FADE$3);
      }

      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

      const attachment = this._getAttachment(placement);

      this._addAttachmentClass(attachment);

      const {
        container
      } = this._config;
      Data.set(tip, this.constructor.DATA_KEY, this);

      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.appendChild(tip);
        EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
      }

      if (this._popper) {
        this._popper.update();
      } else {
        this._popper = Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
      }

      tip.classList.add(CLASS_NAME_SHOW$3);
      const customClass = typeof this._config.customClass === 'function' ? this._config.customClass() : this._config.customClass;

      if (customClass) {
        tip.classList.add(...customClass.split(' '));
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => {
          EventHandler.on(element, 'mouseover', noop);
        });
      }

      const complete = () => {
        const prevHoverState = this._hoverState;
        this._hoverState = null;
        EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

        if (prevHoverState === HOVER_STATE_OUT) {
          this._leave(null, this);
        }
      };

      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);

      this._queueCallback(complete, this.tip, isAnimated);
    }

    hide() {
      if (!this._popper) {
        return;
      }

      const tip = this.getTipElement();

      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }

        if (this._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        this._cleanTipClass();

        this._element.removeAttribute('aria-describedby');

        EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

        if (this._popper) {
          this._popper.destroy();

          this._popper = null;
        }
      };

      const hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      tip.classList.remove(CLASS_NAME_SHOW$3); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        [].concat(...document.body.children).forEach(element => EventHandler.off(element, 'mouseover', noop));
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      const isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$3);

      this._queueCallback(complete, this.tip, isAnimated);

      this._hoverState = '';
    }

    update() {
      if (this._popper !== null) {
        this._popper.update();
      }
    } // Protected


    isWithContent() {
      return Boolean(this.getTitle());
    }

    getTipElement() {
      if (this.tip) {
        return this.tip;
      }

      const element = document.createElement('div');
      element.innerHTML = this._config.template;
      this.tip = element.children[0];
      return this.tip;
    }

    setContent() {
      const tip = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER, tip), this.getTitle());
      tip.classList.remove(CLASS_NAME_FADE$3, CLASS_NAME_SHOW$3);
    }

    setElementContent(element, content) {
      if (element === null) {
        return;
      }

      if (isElement(content)) {
        content = getElement(content); // content is a DOM node or a jQuery

        if (this._config.html) {
          if (content.parentNode !== element) {
            element.innerHTML = '';
            element.appendChild(content);
          }
        } else {
          element.textContent = content.textContent;
        }

        return;
      }

      if (this._config.html) {
        if (this._config.sanitize) {
          content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
        }

        element.innerHTML = content;
      } else {
        element.textContent = content;
      }
    }

    getTitle() {
      let title = this._element.getAttribute('data-bs-original-title');

      if (!title) {
        title = typeof this._config.title === 'function' ? this._config.title.call(this._element) : this._config.title;
      }

      return title;
    }

    updateAttachment(attachment) {
      if (attachment === 'right') {
        return 'end';
      }

      if (attachment === 'left') {
        return 'start';
      }

      return attachment;
    } // Private


    _initializeOnDelegatedTarget(event, context) {
      const dataKey = this.constructor.DATA_KEY;
      context = context || Data.get(event.delegateTarget, dataKey);

      if (!context) {
        context = new this.constructor(event.delegateTarget, this._getDelegateConfig());
        Data.set(event.delegateTarget, dataKey, context);
      }

      return context;
    }

    _getOffset() {
      const {
        offset
      } = this._config;

      if (typeof offset === 'string') {
        return offset.split(',').map(val => Number.parseInt(val, 10));
      }

      if (typeof offset === 'function') {
        return popperData => offset(popperData, this._element);
      }

      return offset;
    }

    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: 'flip',
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: 'offset',
          options: {
            offset: this._getOffset()
          }
        }, {
          name: 'preventOverflow',
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: 'arrow',
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: 'onChange',
          enabled: true,
          phase: 'afterWrite',
          fn: data => this._handlePopperPlacementChange(data)
        }],
        onFirstUpdate: data => {
          if (data.options.placement !== data.placement) {
            this._handlePopperPlacementChange(data);
          }
        }
      };
      return { ...defaultBsPopperConfig,
        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
      };
    }

    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`);
    }

    _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }

    _setListeners() {
      const triggers = this._config.trigger.split(' ');

      triggers.forEach(trigger => {
        if (trigger === 'click') {
          EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
          EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
        }
      });

      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };

      EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`), 'hide.bs.modal', this._hideModalHandler);

      if (this._config.selector) {
        this._config = { ...this._config,
          trigger: 'manual',
          selector: ''
        };
      } else {
        this._fixTitle();
      }
    }

    _fixTitle() {
      const title = this._element.getAttribute('title');

      const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

      if (title || originalTitleType !== 'string') {
        this._element.setAttribute('data-bs-original-title', title || '');

        if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
          this._element.setAttribute('aria-label', title);
        }

        this._element.setAttribute('title', '');
      }
    }

    _enter(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$3) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context._config.delay || !context._config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context._config.delay.show);
    }

    _leave(event, context) {
      context = this._initializeOnDelegatedTarget(event, context);

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context._config.delay || !context._config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(() => {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context._config.delay.hide);
    }

    _isWithActiveTrigger() {
      for (const trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }

    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      Object.keys(dataAttributes).forEach(dataAttr => {
        if (DISALLOWED_ATTRIBUTES.has(dataAttr)) {
          delete dataAttributes[dataAttr];
        }
      });
      config = { ...this.constructor.Default,
        ...dataAttributes,
        ...(typeof config === 'object' && config ? config : {})
      };
      config.container = config.container === false ? document.body : getElement(config.container);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      typeCheckConfig(NAME$4, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
      }

      return config;
    }

    _getDelegateConfig() {
      const config = {};

      if (this._config) {
        for (const key in this._config) {
          if (this.constructor.Default[key] !== this._config[key]) {
            config[key] = this._config[key];
          }
        }
      }

      return config;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    }

    _handlePopperPlacementChange(popperData) {
      const {
        state
      } = popperData;

      if (!state) {
        return;
      }

      this.tip = state.elements.popper;

      this._cleanTipClass();

      this._addAttachmentClass(this._getAttachment(state.placement));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data.get(this, DATA_KEY$4);

        const _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tooltip to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$3 = 'popover';
  const DATA_KEY$3 = 'bs.popover';
  const EVENT_KEY$3 = `.${DATA_KEY$3}`;
  const CLASS_PREFIX = 'bs-popover';
  const BSCLS_PREFIX_REGEX = new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`, 'g');
  const Default$2 = { ...Tooltip.Default,
    placement: 'right',
    offset: [0, 8],
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
  };
  const DefaultType$2 = { ...Tooltip.DefaultType,
    content: '(string|element|function)'
  };
  const Event$1 = {
    HIDE: `hide${EVENT_KEY$3}`,
    HIDDEN: `hidden${EVENT_KEY$3}`,
    SHOW: `show${EVENT_KEY$3}`,
    SHOWN: `shown${EVENT_KEY$3}`,
    INSERTED: `inserted${EVENT_KEY$3}`,
    CLICK: `click${EVENT_KEY$3}`,
    FOCUSIN: `focusin${EVENT_KEY$3}`,
    FOCUSOUT: `focusout${EVENT_KEY$3}`,
    MOUSEENTER: `mouseenter${EVENT_KEY$3}`,
    MOUSELEAVE: `mouseleave${EVENT_KEY$3}`
  };
  const CLASS_NAME_FADE$2 = 'fade';
  const CLASS_NAME_SHOW$2 = 'show';
  const SELECTOR_TITLE = '.popover-header';
  const SELECTOR_CONTENT = '.popover-body';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }

    static get NAME() {
      return NAME$3;
    }

    static get Event() {
      return Event$1;
    }

    static get DefaultType() {
      return DefaultType$2;
    } // Overrides


    isWithContent() {
      return this.getTitle() || this._getContent();
    }

    setContent() {
      const tip = this.getTipElement(); // we use append for html objects to maintain js events

      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, tip), this.getTitle());

      let content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this._element);
      }

      this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT, tip), content);
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    } // Private


    _addAttachmentClass(attachment) {
      this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`);
    }

    _getContent() {
      return this._element.getAttribute('data-bs-content') || this._config.content;
    }

    _cleanTipClass() {
      const tip = this.getTipElement();
      const tabClass = tip.getAttribute('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data.get(this, DATA_KEY$3);

        const _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          Data.set(this, DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Popover to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Popover);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$2 = 'scrollspy';
  const DATA_KEY$2 = 'bs.scrollspy';
  const EVENT_KEY$2 = `.${DATA_KEY$2}`;
  const DATA_API_KEY$1 = '.data-api';
  const Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  const DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  const EVENT_SCROLL = `scroll${EVENT_KEY$2}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$2}${DATA_API_KEY$1}`;
  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  const CLASS_NAME_ACTIVE$1 = 'active';
  const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  const SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  const SELECTOR_NAV_LINKS = '.nav-link';
  const SELECTOR_NAV_ITEMS = '.nav-item';
  const SELECTOR_LIST_ITEMS = '.list-group-item';
  const SELECTOR_DROPDOWN$1 = '.dropdown';
  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  const METHOD_OFFSET = 'offset';
  const METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
      this._config = this._getConfig(config);
      this._selector = `${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      EventHandler.on(this._scrollElement, EVENT_SCROLL, () => this._process());
      this.refresh();

      this._process();
    } // Getters


    static get Default() {
      return Default$1;
    }

    static get NAME() {
      return NAME$2;
    } // Public


    refresh() {
      const autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      const offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      const targets = SelectorEngine.find(this._selector);
      targets.map(element => {
        const targetSelector = getSelectorFromElement(element);
        const target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;

        if (target) {
          const targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            return [Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
        this._offsets.push(item[0]);

        this._targets.push(item[1]);
      });
    }

    dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2);
      super.dispose();
    } // Private


    _getConfig(config) {
      config = { ...Default$1,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };

      if (typeof config.target !== 'string' && isElement(config.target)) {
        let {
          id
        } = config.target;

        if (!id) {
          id = getUID(NAME$2);
          config.target.id = id;
        }

        config.target = `#${id}`;
      }

      typeCheckConfig(NAME$2, config, DefaultType$1);
      return config;
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }

    _process() {
      const scrollTop = this._getScrollTop() + this._config.offset;

      const scrollHeight = this._getScrollHeight();

      const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        const target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (let i = this._offsets.length; i--;) {
        const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }

    _activate(target) {
      this._activeTarget = target;

      this._clear();

      const queries = this._selector.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);

      const link = SelectorEngine.findOne(queries.join(','));

      if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
        link.classList.add(CLASS_NAME_ACTIVE$1);
      } else {
        // Set triggered link as active
        link.classList.add(CLASS_NAME_ACTIVE$1);
        SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
          // Set triggered links parents as active
          // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
          SelectorEngine.prev(listGroup, `${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

          SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(navItem => {
            SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(item => item.classList.add(CLASS_NAME_ACTIVE$1));
          });
        });
      }

      EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }

    _clear() {
      SelectorEngine.find(this._selector).filter(node => node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove(CLASS_NAME_ACTIVE$1));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = ScrollSpy.getInstance(this) || new ScrollSpy(this, typeof config === 'object' ? config : {});

        if (typeof config !== 'string') {
          return;
        }

        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy => new ScrollSpy(spy));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .ScrollSpy to jQuery only if jQuery is present
   */

  defineJQueryPlugin(ScrollSpy);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME$1 = 'tab';
  const DATA_KEY$1 = 'bs.tab';
  const EVENT_KEY$1 = `.${DATA_KEY$1}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}${DATA_API_KEY}`;
  const CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  const CLASS_NAME_ACTIVE = 'active';
  const CLASS_NAME_FADE$1 = 'fade';
  const CLASS_NAME_SHOW$1 = 'show';
  const SELECTOR_DROPDOWN = '.dropdown';
  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  const SELECTOR_ACTIVE = '.active';
  const SELECTOR_ACTIVE_UL = ':scope > li > .active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  const SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$1;
    } // Public


    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
        return;
      }

      let previous;
      const target = getElementFromSelector(this._element);

      const listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = SelectorEngine.find(itemSelector, listElement);
        previous = previous[previous.length - 1];
      }

      const hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: previous
      });

      if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
        return;
      }

      this._activate(this._element, listElement);

      const complete = () => {
        EventHandler.trigger(previous, EVENT_HIDDEN$1, {
          relatedTarget: this._element
        });
        EventHandler.trigger(this._element, EVENT_SHOWN$1, {
          relatedTarget: previous
        });
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    } // Private


    _activate(element, container, callback) {
      const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
      const active = activeElements[0];
      const isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);

      const complete = () => this._transitionComplete(element, active, callback);

      if (active && isTransitioning) {
        active.classList.remove(CLASS_NAME_SHOW$1);

        this._queueCallback(complete, element, true);
      } else {
        complete();
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        active.classList.remove(CLASS_NAME_ACTIVE);
        const dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

        if (dropdownChild) {
          dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      element.classList.add(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$1)) {
        element.classList.add(CLASS_NAME_SHOW$1);
      }

      let parent = element.parentNode;

      if (parent && parent.nodeName === 'LI') {
        parent = parent.parentNode;
      }

      if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
        const dropdownElement = element.closest(SELECTOR_DROPDOWN);

        if (dropdownElement) {
          SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add(CLASS_NAME_ACTIVE));
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Data.get(this, DATA_KEY$1) || new Tab(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    const data = Data.get(this, DATA_KEY$1) || new Tab(this);
    data.show();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Tab to jQuery only if jQuery is present
   */

  defineJQueryPlugin(Tab);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): toast.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'toast';
  const DATA_KEY = 'bs.toast';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_HIDE = 'hide';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  const Default = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  const SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Toast extends BaseComponent {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;

      this._setListeners();
    } // Getters


    static get DefaultType() {
      return DefaultType;
    }

    static get Default() {
      return Default;
    }

    static get NAME() {
      return NAME;
    } // Public


    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

      if (showEvent.defaultPrevented) {
        return;
      }

      this._clearTimeout();

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }

      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);

        this._element.classList.add(CLASS_NAME_SHOW);

        EventHandler.trigger(this._element, EVENT_SHOWN);

        this._maybeScheduleHide();
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW)) {
        return;
      }

      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

      if (hideEvent.defaultPrevented) {
        return;
      }

      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);

        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };

      this._element.classList.remove(CLASS_NAME_SHOW);

      this._queueCallback(complete, this._element, this._config.animation);
    }

    dispose() {
      this._clearTimeout();

      if (this._element.classList.contains(CLASS_NAME_SHOW)) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }

      super.dispose();
    } // Private


    _getConfig(config) {
      config = { ...Default,
        ...Manipulator.getDataAttributes(this._element),
        ...(typeof config === 'object' && config ? config : {})
      };
      typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }

    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }

      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }

      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }

    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = isInteracting;
          break;

        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = isInteracting;
          break;
      }

      if (isInteracting) {
        this._clearTimeout();

        return;
      }

      const nextElement = event.relatedTarget;

      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }

      this._maybeScheduleHide();
    }

    _setListeners() {
      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, () => this.hide());
      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
    }

    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        let data = Data.get(this, DATA_KEY);

        const _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   * add .Toast to jQuery only if jQuery is present
   */


  defineJQueryPlugin(Toast);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.0.1): index.umd.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Tooltip
  };

  return index_umd;

})));
//# sourceMappingURL=bootstrap.js.map

Vue.component('sortable-column', {
    template: `<th class="sortable-th user-select-none" v-on:click="emitEvent()">
                <slot></slot>
                <span v-show="filter.OrderBy==value">
                    <i v-show="!filter.OrderByDesc" class="fas fa-sort-amount-up-alt"></i>
                    <i v-show="filter.OrderByDesc" class="fas fa-sort-amount-down"></i>
                </span>
            </th>`,
    props: {
        value: {
            type: [Number, String],
            validator: val => val > 0,
            default: null
        },
        filter: {
            type: Object,
            default: function () {
                return {
                    OrderBy: 1,
                    OrderByDesc: true
                }
            }
        },
        eventName: {
            type: String,
            default: "order-by-changed"
        }
    },
    methods: {
        emitEvent: function () {
            this.$emit(this.eventName, this.value);
        }
    }
});
Vue.component('date-picker', {
    template: `
        <div>
            <v-date-picker v-model="Value" mode="date" :is24hr="is24hr" :is-dark="isDark" :masks="DataPickerMasks">
                <template v-slot="{ inputValue, inputEvents}">
                    <input class="form-control form-control-sm"
                           :class="{'form-control-dark' : isDark}"
                           :placeholder="placeholder"
                           :value="inputValue"
                           v-on="inputEvents" />
                </template>
            </v-date-picker>
        </div>
    `,
    props: {
        value: {
            required: true,
        },
        isDark: {
            type: [Boolean, String],
            validator: val => ["true", "false"].indexOf(val.toString()) > -1,
            default: false
        },
        is24hr: {
            type: [Boolean, String],
            validator: val => ["true", "false"].indexOf(val.toString()) > -1,
            default: true
        },
        showWeeknumbers: {
            type: [Boolean, String],
            validator: val => ["true", "false"].indexOf(val.toString()) > -1,
            default: true
        },
        type: {
            type: String,
            validator: val => ["date", "datetime", "time"].indexOf(val.toString()) > -1,
            default: "date"
        },
        placeholder: {
            type: String,
        },
        format: {
            type: String,
        }
    },
    methods: {
        getFormat: function () {
            var defaultFormats = {
                "date": "DD.MM.YYYY",
                "datetime": "DD.MM.YYYY HH:mm",
                "time": "HH:mm",
            }

            return this.format || defaultFormats[this.type];
        }
    },
    computed: {
        Value: {
            get: function () { return this.value },
            set: function (value) { this.$emit("input", value); },
        },
        DataPickerMasks: function () {
            return {
                "show-weeknumbers": this.showWeeknumbers.toString() == "true",
                input: this.getFormat(),
                inputDateTime: this.getFormat(),
                inputDateTime24hr: this.getFormat(),
            }
        }
    }
});
(function () {
    Vue.directive('on-submit', {
        bind: function (el, binding, vnode) {
            if (typeof binding.value !== 'function') {
                const compName = vnode.context.name
                let warn = `[Vue-on-submit:] provided expression '${binding.expression}' is not a function, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }

            // DEFINE HANDLER AND CACHE IT ON THE ELEMENT
            const handler = (e) => {
                var items = Array.from(el.querySelectorAll("input[required], select[required], textarea[required]"));

                function validateInput(input) {
                    var isValid = input.checkValidity();

                    if (isValid && input.__vueOnSubmit__) {
                        if (typeof (input.__vueOnSubmit__.validator) === "function")
                            isValid = input.__vueOnSubmit__.validator();
                    }

                    return isValid;
                }

                var isValid = !items.map(item => {
                    var isValid = validateInput(item);

                    // IF ITEM IS INSIDE A FORM CONTROL GROUP SHOUD THE ERROR CLASS GO IN IT IN STEAD
                    // OF THE ELEMENT ITSELF.
                    var rootElement = item;
                    if (Array.from(item.parentElement.classList).indexOf("form-control-group") > -1)
                        rootElement = item.parentElement;

                    // ADD THE input-error CLASS IF THE INPUT IS NOT VALID
                    if (!isValid)
                        rootElement.classList.add("input-error");
                    else
                        rootElement.classList.remove("input-error");

                    // ADD REACTIVITY
                    item.__vueOnSubmit__ = Object.assign(
                        {
                            RootElement: rootElement,
                            InputHandler: function (ev) {
                                var _isValid = validateInput(ev.target);

                                var _rootElement = ev.target.__vueOnSubmit__.RootElement;
                                if (_isValid) _rootElement.classList.remove("input-error");
                                else _rootElement.classList.add("input-error");
                            }
                        },
                        item.__vueOnSubmit__);

                    item.addEventListener("input", item.__vueOnSubmit__.InputHandler);

                    return isValid;
                }).some(x => !x);

                if (isValid)
                    binding.value(e)
            }

            const button = el.querySelector("button[type=submit]");

            el.__vueOnSubmit__ = {
                button: button,
                handler: handler
            }


            button.addEventListener("click", handler);
        },

        unbind: function (el) {
            const cache = el.__vueOnSubmit__;
            cache.button.removeEventListener('click', cache.handler);
            el.__vueOnSubmit__ = null;
        }
    });
})();
(function () {
    Vue.directive('submit-validator', {
        bind: function (el, binding, vnode) {


            if (typeof binding.value !== 'function') {
                const compName = vnode.context.name
                let warn = `[Vue-submit-validator:] provided expression '${binding.expression}' is not a function, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }
            else if (!el.required) {
                const compName = vnode.context.name
                let warn = `[Vue-submit-validator:] provided element is not required, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }
            else if (!["INPUT", "SELECT", "TEXTAREA"].includes(el.tagName)) {
                const compName = vnode.context.name
                let warn = `[Vue-submit-validator:] provided element is not on a input, select or textarea, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }

                console.warn(warn)
                return;
            }

            el.__vueOnSubmit__ = {
                validator: binding.value
            };
        },

        unbind: function (el) {
            const cache = el.__vueOnSubmit__;
            el.__vueOnSubmit__ = null;
        }
    });
})();
var feedback = (function () {
    'use strict';
    let hideModalTimeout;
    return {
        DisplayError: displayError,
        DisplayMessage: displayMessage
    };

    function displayError(error, hideAfterMs = 0) {
        var title = "Warning";
        var message = "<p>An error occured during this operation.We are sorry for the inconvenience.</p><p>Please contact system provider.</p>";

        if (error && typeof error == "string")
            message = error
        if (error && error.ExceptionMessage)
            message = error.ExceptionMessage;

        var _message = "<p><strong>" + message + "</strong></p>";

        document.querySelector("#globalModal .modal-title").innerHTML = title;
        document.querySelector("#globalModal .modal-body").innerHTML = _message;
        var modal = new bootstrap.Modal(document.getElementById('globalModal'));
        modal.show();

        if (hideAfterMs > 0) {
            clearTimeout(hideModalTimeout);
            hideModalTimeout = setTimeout(function () {
                modal.hide();
            }, hideAfterMs);
        }
    }

    function displayMessage(title, message, hideAfterMs = 0) {
        var _message = "<p><strong>" + message + "</strong></p>";

        document.querySelector("#globalModal .modal-title").innerHTML = title;
        document.querySelector("#globalModal .modal-body").innerHTML = _message;

        var modal = new bootstrap.Modal(document.getElementById('globalModal'));
        modal.show();

        if (hideAfterMs > 0) {
            clearTimeout(hideModalTimeout);
            hideModalTimeout = setTimeout(function () {
                modal.hide();
            }, hideAfterMs);
        }
    }

})();
var keyboardShortcut = (function () {
    'use strict';

    var keyCombos = [];
    var keyComboTimeoutMs = 500
    var timeout = undefined;

    // These are the global shortcuts
    // Shortcut: The shortcuts must not include any spaces
    var _shortcuts = [
        // General
        // { Category: "General", ShortcutId: 1, Name: "Show Keyboard Shortcuts", Description: "", Shortcut: "ctrl+k", Action: () => $("#ddmShortcut").siblings("button[data-toggle=dropdown]").click() },

        // Booking
        { Category: "Booking", ShortcutId: 1, Name: "Open Booking Plan", Description: "", Shortcut: "alt+p", Action: () => goToPage("/booking/calendar", 0) },
        { Category: "Booking", ShortcutId: 2, Name: "Create New Booking", Description: "", Shortcut: "alt+n", Action: () => goToPage("/booking/new", 0) },
        { Category: "Booking", ShortcutId: 3, Name: "Edit Booking", Description: "", Shortcut: "alt+e", Action: () => goToPage("/booking/edit", 0) },
        { Category: "Booking", ShortcutId: 4, Name: "Open CheckIn List", Description: "", Shortcut: "alt+c,alt+i", Action: () => goToPage("/booking/checkin", 0) },
        { Category: "Booking", ShortcutId: 5, Name: "Open CheckOut List", Description: "", Shortcut: "alt+c,alt+o", Action: () => goToPage("/booking/checkout", 0) },
    ]

    /// GoToPage routes the user to the specified page
    /// targetType; 0: Current window, 1: new Tab, 2: new window

    function goToPage(url, targetType = 0) {

        if (!url.match(/https{0,1}:\/\//) != null)
            url = location.origin + "/" + url.substr(url[0] == "/" ? 1 : 0);

        switch (targetType) {
            case 0: location.href = url; break;
            case 1: break;
            case 2: window.open(url, '_blank').focus(); break;
            default: console.error("KeyboardShortcut::The targetType is not valid");
        }
    };


    function fireEvent(event) {

        function performAction(allowExact = true) {
            var shortcuts = keyboardShortcut.ShortcutList.filter(item => (item.Shortcut || "").startsWith(keyCombos.join(",")));

            var notLegalShortcuts = keyCombos
                .reduce((arr, combo) => arr.concat(combo.split(/\+[0123456789abcdefghijklmnopqrstuvwxyz],{0,1}/)), [])
                .filter(x => x)
                .filter(x => ["ctrl", "shift", "alt"].indexOf(x) == -1);

            if (notLegalShortcuts.length > 0 || shortcuts.length == 0) return clearShortcut();
            else event.preventDefault();

            timeout = setTimeout(performAction, keyComboTimeoutMs);

            if (shortcuts.length > 1 && !allowExact) {
                event.preventDefault();
                return false;
            }
            if (shortcuts.length == 1 || allowExact) {
                event.preventDefault();

                var shortcut = shortcuts.find(x => x.Shortcut == keyCombos.join(","));
                if (shortcut === undefined) {
                    if (!allowExact) return false;
                }
                else
                    shortcuts[0].Action();

                clearTimeout(timeout);
                clearShortcut();
            }
            if (allowExact) clearShortcut();

            return true;
        }

        return performAction(false);
    };

    function clearShortcut() {
        keyCombos = [];
    };

    function validateShortcuts() {
        var duplicates = _shortcuts.filter((item, index, arr) => arr.some((x, i) => i !== index && item.Shortcut == x.Shortcut));

        if (duplicates.length > 0) {
            console.error("KeyboardShortcut::Duplicates in the registered shortcuts");
            console.table(duplicates.map(x => { return { Name: x.Name, Shortcut: x.Shortcut } }))
        }

        var legalCharacters = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z", "ctrl", "shift", "alt"
        ];

        var invalid = _shortcuts.filter(item => !item?.Shortcut?.split(/\+|,/).every(char => legalCharacters.indexOf(char) > -1));
        if (invalid.length > 0) {
            console.error("KeyboardShortcut::Invalid shortcut in the registered shortcuts");
            console.table(invalid.map(x => { return { Name: x.Name, Shortcut: x.Shortcut } }))
        }
    }

    function parseInput(event) {

        var key = event.key.toLowerCase();
        var legalCharachters = [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
            "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z"
        ];

        if (legalCharachters.indexOf(key) > -1) {
            var keys = [];
            if (event.ctrlKey) keys.push("ctrl");
            if (event.shiftKey) keys.push("shift");
            if (event.altKey) keys.push("alt");
            keys.push(key);

            return keys.join("+");
        }

        return "";
    };

    function registerShortcuts(shortcut) {
        if (!Array.isArray(shortcut)) {
            if (typeof shortcut === "object") shortcut = [shortcut];
            else return console.error("KeyboardShortcut::The registered parameter is not valid");
        }

        _shortcuts.push(...shortcut.map(item => {
            item.Shortcut = item.Shortcut.split(" ").join("");
            return item;
        }));

        validateShortcuts();
    };

    function init() {
        validateShortcuts();

        var isNewCombo = true;
        document.addEventListener("keyup", function () { isNewCombo = true });
        document.addEventListener("keydown", function (event) {
            var keyCombo = parseInput(event);

            if (keyCombo !== "" && isNewCombo) {
                clearTimeout(timeout);
                isNewCombo = false;
                keyCombos.push(keyCombo);

                if (fireEvent(event))
                    isNewCombo = true;
            }
        });
    }
    init();

    return {
        Register: registerShortcuts,
        GoToPage: goToPage,

        /// RETURNS: a dictionary of category shortcuts; Shortcut[CategoryName]
        get Shortcuts() {
            return _shortcuts.reduce(function (obj, curr) {
                if (curr.Category == undefined) curr.Category = "Other"
                if (obj[curr.Category] == undefined) obj[curr.Category] = [curr]
                else obj[curr.Category].push(curr);
                return obj;
            }, {});
        },

        get ShortcutList() { return _shortcuts; }
    };
})();
var loadHandler = (function () {
    'use strict';

    function tableLoader(tableElement) {
        //<tr class="table-loader">
        //    <td class="text-center" colspan="100%">
        //        <h5 class="p-1 m-0 font-weight-bold">
        //            <div class="spinner-border text-primary" role="status">
        //                <span class="visually-hidden">Loading...</span>
        //            </div>
        //                Loading...
        //            </h5>
        //    </td>
        //</tr>

        var ce = function (tag, attrs, children) {
            var elm = document.createElement(tag);

            // SET ATTRIBUTES AND ADD CHILDREN
            Object.keys(attrs || {}).forEach(key => elm.setAttribute(key, attrs[key]));
            [].concat(children).filter(x => x).forEach(child => elm.append(child));

            return elm;
        }

        var markup = (
            ce("tr", { class: "table-loader" },
                ce("td", { class: "text-center", colspan: "100%" },
                    ce("div", { class: "p-1 m-0 font-weight-bold" }, [
                        ce("div", { class: "spinner-border text-primary", role: "status" }),
                        ce("span", { class: "mx-1" })
                    ])
                )
            )
        );

        tableElement.querySelector("tbody").append(markup);
    }

    function removeTableLoader(tableElement) {
        tableElement.querySelector("tbody .table-loader").remove();
    }

    function addGlobalLoader() {
        document.getElementById("globalLoader").style.display = 'block';
    }

    function removeGlobalLoader() {
        document.getElementById("globalLoader").style.display = 'none';
    }

    return {
        AddTableLoader: tableLoader,
        RemoveTableLoader: removeTableLoader,
        AddGlobalLoader: addGlobalLoader,
        RemoveGlobalLoader: removeGlobalLoader,
    }
})();
var orderByHandler = (function () {
    'use strict';

    function handle(filter, key) {
        filter.CurrentPage = 1;
        if (filter.OrderBy == key) {
            if (filter.OrderByDesc) {
                filter.OrderByDesc = false;
            } else {
                filter.OrderByDesc = true;
            }           
            return filter;
        }
        filter.OrderBy = key;
        filter.OrderByDesc = true;
        
        return filter;
    }

    return {
        Handle: handle
    }
})();

var pagination = (function () {
    'use strict';

    var scrollEventListener = null;
    var elementsToSee = [];

    function infiniteScroll(tableElement, pagedResponseDto, nextPageCallback, loading) {
        let totalPages = pagedResponseDto.TotalPages;
        let currentPage = pagedResponseDto.CurrentPage;

        let tableFooter = tableElement.querySelector("tfoot");
        if (!tableFooter) {
            tableFooter = document.createElement("tfoot");
            tableElement.append(tableFooter);
        }
    
        let elementInArray = elementsToSee.find(function (x) { x.element == tableFooter });
        if (currentPage >= totalPages) {
            if (elementsToSee != null && elementInArray != null)
                elementsToSee.splice(elementsToSee.indexOf(elementInArray), 1);
            return;
        }

        if (isScrolledIntoView(tableFooter) && !loading) {
            if (elementsToSee != null && elementInArray != null)
                elementsToSee.splice(elementsToSee.indexOf(elementInArray), 1);
            nextPageCallback();
            return;
        }

        if (elementInArray == null)
            elementsToSee.push({ element: tableFooter, callBack: nextPageCallback });

        if (scrollEventListener == null) {
            scrollEventListener = document.addEventListener('scroll', function (e) {
                for (var i = 0; i < elementsToSee.length; i++) {
                    if (isScrolledIntoView(elementsToSee[i].element)) {
                        let callback = elementsToSee[i].callBack;
                        elementsToSee.splice(elementsToSee.indexOf(elementsToSee[i]), 1);
                        callback();
                    }
                }
            }, true);
        }
    }


    function infiniteScrollBottomPage(nextPageCallBack) {
        document.addEventListener("scroll", function (event) {
            scrollBottom(nextPageCallBack);
        });
    }

    return {
        InfiniteScroll: infiniteScroll,
        InfiniteScrollBottomPage: infiniteScrollBottomPage
    }

    //function isScrolledIntoView(element) {
    //    var docViewTop = $(window).scrollTop();
    //    var docViewBottom = docViewTop + $(window).height();

    //    var elemTop = $(element).offset().top;
    //    var elemBottom = elemTop + $(element).height();

    //    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    //}

    //function scrollBottom(nextPageCallBack) {

    //    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
    //        nextPageCallBack();
    //    }
    //};
    function isScrolledIntoView(element) {
        var docViewTop = document.querySelector("body").scrollTop;
        var docViewBottom = docViewTop + document.querySelector("body").offsetHeight;

        var elemTop = element.offsetTop;
        var elemBottom = elemTop + element.offsetHeight;

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function scrollBottom(nextPageCallBack) {

        if (document.querySelector(window).scrollTop >= document.querySelector(document).height() - document.querySelector(window).height() - 100) {
            nextPageCallBack();
        }
    };
})();
var apiService = (function () {
    const http = axios.create({
        baseURL: '/api/',
        //timeout: 5000,
        withCredentials: true,
    })


    var GetRequest = function (throwError, url, data = {}) {
        return new Promise((resolve, reject) => {
            http.get(url, {
                params: data
            }).then(function (data) {
                resolve(data.data);
            }).catch(err => {
                if (throwError)
                    feedback.DisplayError(err.response.data);

                reject(err);
            })
        });
    };

    const PostRequest = function (throwError, url, data = {}) {
        return new Promise((resolve, reject) => {
            http.post(url, data)
                .then(function (data) {
                    resolve(data.data);
                })
                .catch(err => {
                    if (throwError)
                        feedback.DisplayError(err.response.data)

                    reject(err);
                })
        })
    }

    return {
        Get: (url, data) => GetRequest(true, url, data),
        Post: (url, data) => PostRequest(true, url, data),

        BlindGet: (url, data) => GetRequest(false, url, data),
        BlindPost: (url, data) => PostRequest(false, url, data),
    }
})();

(function () {
    var ce = function (tag, attrs, children) {
        var elm = document.createElement(tag);
        // SET ATTRIBUTES AND ADD CHILDREN
        Object.keys(attrs || {}).forEach(key => elm.setAttribute(key, attrs[key]));
        [].concat(children).filter(x => x).forEach(child => elm.append(child));
        return elm;
    }


    var signOutBtn = document.getElementById("signOut");
    if (signOutBtn) {
        signOutBtn.addEventListener("click", function () {
            apiService.Post("account/logout")
                .then(() => window.location = window.location.origin += "/Account/Login");
        })
    }

    // CLEAR ALL ACTIVE
    document.querySelectorAll("#sidebar .nav-link.active")
        .forEach(x => x.classList.remove("active"))

    // COLLAPSE ALL COLLAPSABLE ITEMS
    document.querySelectorAll("#sidebar li>button~.collapse")
        .forEach(elm => new bootstrap.Collapse(elm, { toggle: false }).hide())

    // HILIGHT THE ACTIVE ITEM
    document.querySelectorAll("#sidebar .nav-link[href='" + window.location.pathname + "']")
        .forEach(function (elm) {
            var collapseElem = elm.closest(".collapse");
            if (collapseElem != null) new bootstrap.Collapse(collapseElem, { toggle: false }).show()
            elm.classList.add("active")
        })


    // SIDE BAR COLLAPSE
    document.querySelector("#btn-sidebar-collapse")
        .addEventListener("click", function () { 
            var sidebarElm = document.querySelector("#sidebar");
            var buttonIcon = document.querySelector("#btn-sidebar-collapse > i")

            // MAKE SHURE THE SIDEBAR ITEMS ARE CLOSED WHEN COLLSPING THE SIDEBAR
            Array.prototype.slice.call(
                document.querySelectorAll("#sidebar .collapse.show")
            ).forEach(x => x.classList.remove("show"))

            if (sidebarElm.classList.contains("minimized")) {
                sidebarElm.classList.remove("minimized");
                buttonIcon.classList.remove("bi-arrow-right-square")
                buttonIcon.classList.add("bi-arrow-left-square")
            }
            else {
                sidebarElm.classList.add("minimized");
                buttonIcon.classList.add("bi-arrow-right-square")
                buttonIcon.classList.remove("bi-arrow-left-square")
            }
        })

    // ADD THE MINIFIED SIDEBAR DROPDOWNS
    Array.prototype.slice.call(
        document.querySelectorAll("#sidebar ul.nav li>[data-bs-toggle='collapse']")
    ).forEach((btn, index) => {
        var ddm = ce("div", { class: "dropdown dropend" }, [
            ce("a", { href: "#", class: "dropdown-toggle text-decoration-none nav-link text-center text-white", "data-bs-toggle": "dropdown", id: "sidebar-ddl-" + index },
                ce("i", { class: btn.querySelector("i").className })
            ),
            ce("ul", { class: "dropdown-menu dropdown-menu-dark shadow", "area-labelledby": "sidebar-ddl-" + index },
                Array.prototype.slice.call(
                    btn.closest("li").querySelectorAll("div > ul > li")
                ).map(x => x.cloneNode(true))
            )
        ])
        btn.parentElement.append(ddm)
    })



})();