/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

window.sversionId = "0.12.1197";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*! sVersion v0.0.1 (https://github.com/s249359986/sVersion) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SVersion"] = factory();
	else
		root["SVersion"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(1);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sVersion = new _core2.default();

	/**
	 * A Front-End Console Panel for Mobile Webpage
	 */

	// classes
	exports.default = _core2.default;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	/**
	 * sVersion core class
	 */

	var _package = __webpack_require__(2);

	var _package2 = _interopRequireDefault(_package);

	var _tool = __webpack_require__(3);

	var tool = _interopRequireWildcard(_tool);

	var _query = __webpack_require__(4);

	var _query2 = _interopRequireDefault(_query);

	__webpack_require__(6);

	var _core = __webpack_require__(10);

	var _core2 = _interopRequireDefault(_core);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SVERION_ID = '#__sversion';

	var SVersion = function () {
	  function SVersion(opt) {
	    _classCallCheck(this, SVersion);

	    if (!!_query2.default.one(SVERION_ID)) {
	      console.debug('sversion is already exists.');
	      return;
	    }
	    var that = this;
	    this.version = _package2.default.version;
	    this.$dom = null;
	    this.isInited = false;
	    this.switchPos = {
	      x: 10, // right
	      y: 60, // bottom
	      startX: 0,
	      startY: 0,
	      endX: 0,
	      endY: 0
	    };
	    this.tool = tool;
	    this.$ = _query2.default;

	    // merge options
	    if (tool.isObject(opt)) {
	      for (var key in opt) {
	        this.option[key] = opt[key];
	      }
	    }
	    // try to init
	    var _onload = function _onload() {
	      if (that.isInited) {
	        return;
	      }
	      that._render();
	      that._bindEvent();
	      that._autoRun();
	    };
	    if (document !== undefined) {
	      if (document.readyState == 'complete') {
	        _onload();
	      } else {
	        _query2.default.bind(window, 'load', _onload);
	      }
	    } else {
	      // if document does not exist, wait for it
	      var _timer = void 0;
	      var _pollingDocument = function _pollingDocument() {
	        if (!!document && document.readyState == 'complete') {
	          _timer && clearTimeout(_timer);
	          _onload();
	        } else {
	          _timer = setTimeout(_pollingDocument, 1);
	        }
	      };
	      _timer = setTimeout(_pollingDocument, 1);
	    }
	  }

	  /**
	   * render panel DOM
	   * @private
	   */


	  _createClass(SVersion, [{
	    key: '_render',
	    value: function _render() {
	      if (!_query2.default.one(SVERION_ID)) {
	        var e = document.createElement('div');
	        e.innerHTML = _core2.default;
	        document.documentElement.insertAdjacentElement('beforeend', e.children[0]);
	      }
	      this.$dom = _query2.default.one(SVERION_ID);

	      // reposition switch button
	      var $switch = _query2.default.one('.vc-switch', this.$dom);
	      var switchX = tool.getStorage('switch_x') * 1,
	          switchY = tool.getStorage('switch_y') * 1;
	      if (switchX || switchY) {
	        // check edge
	        if (switchX + $switch.offsetWidth > document.documentElement.offsetWidth) {
	          switchX = document.documentElement.offsetWidth - $switch.offsetWidth;
	        }
	        if (switchY + $switch.offsetHeight > document.documentElement.offsetHeight) {
	          switchY = document.documentElement.offsetHeight - $switch.offsetHeight;
	        }
	        if (switchX < 0) {
	          switchX = 0;
	        }
	        if (switchY < 0) {
	          switchY = 0;
	        }
	        this.switchPos.x = switchX;
	        this.switchPos.y = switchY;
	        _query2.default.one('.vc-switch').style.right = switchX + 'px';
	        _query2.default.one('.vc-switch').style.bottom = switchY + 'px';
	      }

	      // modify font-size
	      var dpr = window.devicePixelRatio || 1;
	      var viewportEl = document.querySelector('[name="viewport"]');
	      if (viewportEl && viewportEl.content) {
	        var initialScale = viewportEl.content.match(/initial\-scale\=\d+(\.\d+)?/);
	        var scale = initialScale ? parseFloat(initialScale[0].split('=')[1]) : 1;
	        if (scale < 1) {
	          this.$dom.style.fontSize = 13 * dpr + 'px';
	        }
	      }

	      // remove from less to present transition effect
	      _query2.default.one('.vc-mask', this.$dom).style.display = 'none';
	    }
	  }, {
	    key: '_bindEvent',
	    value: function _bindEvent() {
	      var that = this;

	      // drag & drop switch button
	      var $switch = _query2.default.one('.vc-switch', that.$dom);
	      _query2.default.bind($switch, 'touchstart', function (e) {
	        that.switchPos.startX = e.touches[0].pageX;
	        that.switchPos.startY = e.touches[0].pageY;
	      });
	      _query2.default.bind($switch, 'touchend', function (e) {
	        that.switchPos.x = that.switchPos.endX;
	        that.switchPos.y = that.switchPos.endY;
	        that.switchPos.startX = 0;
	        that.switchPos.startY = 0;
	        that.switchPos.endX = 0;
	        that.switchPos.endY = 0;
	        tool.setStorage('switch_x', that.switchPos.x);
	        tool.setStorage('switch_y', that.switchPos.y);
	      });
	      _query2.default.bind($switch, 'touchmove', function (e) {
	        console.log('-------------------');
	        console.log("ghh23423");
	        if (e.touches.length > 0) {
	          var offsetX = e.touches[0].pageX - that.switchPos.startX,
	              offsetY = e.touches[0].pageY - that.switchPos.startY;
	          var x = that.switchPos.x - offsetX,
	              y = that.switchPos.y - offsetY;
	          // check edge
	          if (x + $switch.offsetWidth > document.documentElement.offsetWidth) {
	            x = document.documentElement.offsetWidth - $switch.offsetWidth;
	          }
	          if (y + $switch.offsetHeight > document.documentElement.offsetHeight) {
	            y = document.documentElement.offsetHeight - $switch.offsetHeight;
	          }
	          if (x < 0) {
	            x = 0;
	          }
	          if (y < 0) {
	            y = 0;
	          }
	          $switch.style.right = x + 'px';
	          $switch.style.bottom = y + 'px';
	          that.switchPos.endX = x;
	          that.switchPos.endY = y;
	          e.preventDefault();
	        }
	      });

	      // show console panel
	      _query2.default.bind(_query2.default.one('.vc-switch', that.$dom), 'click', function () {
	        that.show();
	      });
	      _query2.default.bind(_query2.default.one('.vc-mask', that.$dom), 'click', function () {
	        that.hide();
	      });

	      // hide console panel
	      // $.bind($.one('.vc-hide', that.$dom), 'click', function() {
	      //   that.hide();
	      // });

	      // hide console panel when tap background mask
	      // $.bind($.one('.vc-mask', that.$dom), 'click', function(e) {
	      //   if (e.target != $.one('.vc-mask')) {
	      //     return false;
	      //   }
	      //   that.hide();
	      // });

	      // show tab box
	      // $.delegate($.one('.vc-tabbar', that.$dom), 'click', '.vc-tab', function(e) {
	      //   let tabName = this.dataset.tab;
	      //   if (tabName == that.activedTab) {
	      //     return;
	      //   }
	      //   that.showTab(tabName);
	      // });

	      // after console panel, trigger a transitionend event to make panel's property 'display' change from 'block' to 'none'
	      // $.bind($.one('.vc-panel', that.$dom), 'transitionend webkitTransitionEnd oTransitionEnd otransitionend', function(e) {
	      //   if (e.target != $.one('.vc-panel')) {
	      //     return false;
	      //   }
	      //   if (!$.hasClass(that.$dom, 'vc-toggle')) {
	      //     e.target.style.display = 'none';
	      //   }
	      // });

	      // disable background scrolling
	      var $content = _query2.default.one('.vc-content', that.$dom);
	      var preventMove = false;
	      _query2.default.bind($content, 'touchstart', function (e) {
	        var top = $content.scrollTop,
	            totalScroll = $content.scrollHeight,
	            currentScroll = top + $content.offsetHeight;
	        if (top === 0) {
	          // when content is on the top,
	          // reset scrollTop to lower position to prevent iOS apply scroll action to background
	          $content.scrollTop = 1;
	          // however, when content's height is less than its container's height,
	          // scrollTop always equals to 0 (it is always on the top),
	          // so we need to prevent scroll event manually
	          if ($content.scrollTop === 0) {
	            if (!_query2.default.hasClass(e.target, 'vc-cmd-input')) {
	              // skip input
	              preventMove = true;
	            }
	          }
	        } else if (currentScroll === totalScroll) {
	          // when content is on the bottom,
	          // do similar processing
	          $content.scrollTop = top - 1;
	          if ($content.scrollTop === top) {
	            if (!_query2.default.hasClass(e.target, 'vc-cmd-input')) {
	              preventMove = true;
	            }
	          }
	        }
	      });

	      _query2.default.bind($content, 'touchmove', function (e) {
	        if (preventMove) {
	          e.preventDefault();
	        }
	      });

	      _query2.default.bind($content, 'touchend', function (e) {
	        preventMove = false;
	      });
	    }
	  }, {
	    key: '_autoRun',


	    /**
	     * auto run after initialization
	     * @private
	     */
	    value: function _autoRun() {
	      this.isInited = true;
	    }

	    /**
	     * add a new plugin
	     * @public
	     * @param object VConsolePlugin object
	     * @return boolean
	     */

	    /**
	     * show console panel
	     * @public
	     */

	  }, {
	    key: 'show',
	    value: function show() {
	      if (!this.isInited) {
	        return;
	      }
	      var that = this;
	      // before show console panel,
	      // trigger a transitionstart event to make panel's property 'display' change from 'none' to 'block'
	      var $panel = _query2.default.one('.vc-panel', this.$dom);
	      var $mask = _query2.default.one('.vc-mask', this.$dom);
	      $panel.innerHTML = window.sversionId;
	      $panel.style.display = 'block';
	      $mask.style.display = 'block';
	      // set 10ms delay to fix confict between display and transition
	      // setTimeout(function() {
	      //   let $mask = $.one('.vc-mask', that.$dom);
	      //   $mask.style.display = 'block';
	      // }, 4000);
	    }

	    /**
	     * hide console panel
	     * @public
	     */

	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (!this.isInited) {
	        return;
	      }
	      var $mask = _query2.default.one('.vc-mask', this.$dom),
	          $panel = _query2.default.one('.vc-panel', this.$dom);
	      $panel.style.display = 'none';
	      $mask.style.display = 'none';
	    }
	  }]);

	  return SVersion;
	}(); // END class

	exports.default = SVersion;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {"name":"sversion","version":"0.0.1","description":"A lightweight, extendable front-end developer tool for version","homepage":"https://github.com/s249359986/sVersion","main":"dist/sVersion.min.js","scripts":{"test":"mocha","dist":"webpack"},"keywords":["console","debug","mobile"],"repository":{"type":"git","url":"git+https://github.com/s249359986/sVersion.git"},"dependencies":{},"devDependencies":{"babel-core":"^6.7.7","babel-loader":"^6.2.4","babel-plugin-add-module-exports":"^0.1.4","babel-preset-es2015":"^6.6.0","babel-preset-stage-3":"^6.5.0","chai":"^3.5.0","css-loader":"^0.23.1","extract-text-webpack-plugin":"^1.0.1","html-loader":"^0.4.3","jsdom":"^9.2.1","json-loader":"^0.5.4","less":"^2.5.3","less-loader":"^2.2.3","mocha":"^2.5.3","style-loader":"^0.13.1","webpack":"~1.12.11"},"author":"7ke","license":"MIT"}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.getDate = getDate;
	exports.isNumber = isNumber;
	exports.isString = isString;
	exports.isArray = isArray;
	exports.isBoolean = isBoolean;
	exports.isUndefined = isUndefined;
	exports.isNull = isNull;
	exports.isSymbol = isSymbol;
	exports.isObject = isObject;
	exports.isFunction = isFunction;
	exports.isElement = isElement;
	exports.isWindow = isWindow;
	exports.isPlainObject = isPlainObject;
	exports.htmlEncode = htmlEncode;
	exports.JSONStringify = JSONStringify;
	exports.getObjAllKeys = getObjAllKeys;
	exports.getObjName = getObjName;
	exports.setStorage = setStorage;
	exports.getStorage = getStorage;

	/**
	 * get formatted date by timestamp
	 * @param  int    time
	 * @return  object
	 */
	function getDate(time) {
	  var d = time > 0 ? new Date(time) : new Date();
	  var day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate(),
	      month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1,
	      year = d.getFullYear(),
	      hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
	      minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
	      second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds(),
	      millisecond = d.getMilliseconds() < 10 ? '0' + d.getMilliseconds() : d.getMilliseconds();
	  if (millisecond < 100) {
	    millisecond = '0' + millisecond;
	  }
	  return {
	    time: +d,
	    year: year,
	    month: month,
	    day: day,
	    hour: hour,
	    minute: minute,
	    second: second,
	    millisecond: millisecond
	  };
	}

	/**
	 * determines whether the passed value is a specific type
	 * @param mixed value
	 * @return boolean
	 */
	function isNumber(value) {
	  return Object.prototype.toString.call(value) == '[object Number]';
	}
	function isString(value) {
	  return Object.prototype.toString.call(value) == '[object String]';
	}
	function isArray(value) {
	  return Object.prototype.toString.call(value) == '[object Array]';
	}
	function isBoolean(value) {
	  return Object.prototype.toString.call(value) == '[object Boolean]';
	}
	function isUndefined(value) {
	  return Object.prototype.toString.call(value) == '[object Undefined]';
	}
	function isNull(value) {
	  return Object.prototype.toString.call(value) == '[object Null]';
	}
	function isSymbol(value) {
	  return Object.prototype.toString.call(value) == '[object Symbol]';
	}
	function isObject(value) {
	  return Object.prototype.toString.call(value) == '[object Object]' ||
	  // if it isn't a primitive value, then it is a common object
	  !isNumber(value) && !isString(value) && !isBoolean(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
	}
	function isFunction(value) {
	  return Object.prototype.toString.call(value) == '[object Function]';
	}
	function isElement(value) {
	  return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? value instanceof HTMLElement : //DOM2
	  value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
	}
	function isWindow(value) {
	  var toString = Object.prototype.toString.call(value);
	  return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
	}

	/**
	 * check whether an object is plain (using {})
	 * @param object obj
	 * @return boolean
	 */
	function isPlainObject(obj) {
	  var hasOwn = Object.prototype.hasOwnProperty;
	  // Must be an Object.
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj.nodeType || isWindow(obj)) {
	    return false;
	  }
	  try {
	    if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
	      return false;
	    }
	  } catch (e) {
	    return false;
	  }
	  var key = void 0;
	  for (key in obj) {}
	  return key === undefined || hasOwn.call(obj, key);
	}

	/**
	 * HTML encode a string
	 * @param string text
	 * @return string
	 */
	function htmlEncode(text) {
	  return document.createElement('a').appendChild(document.createTextNode(text)).parentNode.innerHTML;
	}

	/**
	 * JSON stringify, support circular structure
	 */

	function JSONStringify(stringObject) {
	  var formatOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '\t';
	  var replaceString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'CIRCULAR_DEPENDECY_OBJECT';

	  var cache = [];
	  var returnStringObject = JSON.stringify(stringObject, function (key, value) {
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
	      if (~cache.indexOf(value)) {
	        return replaceString;
	      }
	      cache.push(value);
	    }
	    return value;
	  }, formatOption);
	  cache = null;
	  return returnStringObject;
	}

	/**
	 * get an object's all keys ignore whether they are not enumerable
	 */
	function getObjAllKeys(obj) {
	  if (!isObject(obj) && !isArray(obj)) {
	    return [];
	  }
	  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
	  var keys = [];
	  for (var key in obj) {
	    if (dontEnums.indexOf(key) < 0) {
	      keys.push(key);
	    }
	  }
	  keys = keys.sort();
	  return keys;
	}

	/**
	 * get an object's prototype name
	 */
	function getObjName(obj) {
	  return Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '');
	}

	/**
	 * localStorage methods
	 */
	function setStorage(key, value) {
	  if (!window.localStorage) {
	    return;
	  }
	  key = 'sVersion_' + key;
	  localStorage.setItem(key, value);
	}
	function getStorage(key) {
	  if (!window.localStorage) {
	    return;
	  }
	  key = 'sVersion_' + key;
	  return localStorage.getItem(key);
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tool = __webpack_require__(3);

	var _mito = __webpack_require__(5);

	var _mito2 = _interopRequireDefault(_mito);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * DOM related Functions
	 */

	var $ = {};

	/**
	 * get single element
	 * @public
	 */
	$.one = function (selector, contextElement) {
	  if (contextElement) {
	    return contextElement.querySelector(selector);
	  }
	  return document.querySelector(selector);
	};

	/**
	 * get multiple elements
	 * @public
	 */
	$.all = function (selector, contextElement) {
	  var nodeList = void 0,
	      list = [];
	  if (contextElement) {
	    nodeList = contextElement.querySelectorAll(selector);
	  } else {
	    nodeList = document.querySelectorAll(selector);
	  }
	  if (nodeList && nodeList.length > 0) {
	    list = Array.prototype.slice.call(nodeList);
	  }
	  return list;
	};

	/**
	 * add className to an element
	 * @public
	 */
	$.addClass = function ($el, className) {
	  if (!$el) {
	    return;
	  }
	  if (!(0, _tool.isArray)($el)) {
	    $el = [$el];
	  }
	  for (var i = 0; i < $el.length; i++) {
	    var name = $el[i].className || '',
	        arr = name.split(' ');
	    if (arr.indexOf(className) > -1) {
	      continue;
	    }
	    arr.push(className);
	    $el[i].className = arr.join(' ');
	  }
	};

	/**
	 * remove className from an element
	 * @public
	 */
	$.removeClass = function ($el, className) {
	  if (!$el) {
	    return;
	  }
	  if (!(0, _tool.isArray)($el)) {
	    $el = [$el];
	  }
	  for (var i = 0; i < $el.length; i++) {
	    var arr = $el[i].className.split(' ');
	    for (var j = 0; j < arr.length; j++) {
	      if (arr[j] == className) {
	        arr[j] = '';
	      }
	    }
	    $el[i].className = arr.join(' ').trim();
	  }
	};

	/**
	 * see whether an element contains a className
	 * @public
	 */
	$.hasClass = function ($el, className) {
	  if (!$el) {
	    return false;
	  }
	  var arr = $el.className.split(' ');
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i] == className) {
	      return true;
	    }
	  }
	  return false;
	};

	/**
	 * bind an event to element(s)
	 * @public
	 * @param  array    $el      element object or array
	 * @param  string    eventType  name of the event
	 * @param  function  fn
	 * @param  boolean    useCapture
	 */
	$.bind = function ($el, eventType, fn, useCapture) {
	  if (!$el) {
	    return;
	  }
	  if (useCapture === undefined) {
	    useCapture = false;
	  }
	  if (!(0, _tool.isArray)($el)) {
	    $el = [$el];
	  }
	  for (var i = 0; i < $el.length; i++) {
	    $el[i].addEventListener(eventType, fn, useCapture);
	  }
	};

	/**
	 * delegate an event to a parent element
	 * @public
	 * @param  array     $el        parent element
	 * @param  string    eventType  name of the event
	 * @param  string    selector   target's selector
	 * @param  function  fn
	 */
	$.delegate = function ($el, eventType, selector, fn) {
	  if (!$el) {
	    return;
	  }
	  $el.addEventListener(eventType, function (e) {
	    var targets = $.all(selector, $el);
	    if (!targets) {
	      return;
	    }
	    findTarget: for (var i = 0; i < targets.length; i++) {
	      var $node = e.target;
	      while ($node) {
	        if ($node == targets[i]) {
	          fn.call($node, e);
	          break findTarget;
	        }
	        $node = $node.parentNode;
	        if ($node == $el) {
	          break;
	        }
	      }
	    }
	  }, false);
	};

	/**
	 * simply render a HTML template
	 * @param string tpl
	 * @param object key-value data
	 * @param boolean whether to conver to HTML string
	 * @return object|string
	 */
	$.render = _mito2.default;

	/**
	 * export
	 */
	exports.default = $;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = render;
	/** 
	 *
	 * @author 7ke
	 */

	function render(tpl, data, toString) {
	  var pattern = /\{\{([^\}]+)\}\}/g,
	      code = '',
	      codeWrap = '',
	      pointer = 0,
	      match = [];
	  var addCode = function addCode(line, isJS) {
	    if (line === '') {
	      return;
	    }
	    // console.log(line)
	    if (isJS) {
	      if (line.match(/^ ?else/g)) {
	        // else  --> } else {
	        code += '} ' + line + ' {\n';
	      } else if (line.match(/\/(if|for|switch)/g)) {
	        // /if  -->  }
	        code += '}\n';
	      } else if (line.match(/^ ?if|for|switch/g)) {
	        // if (age)  -->  if (this.age) {
	        code += line + ' {\n';
	      } else if (line.match(/^ ?(break|continue) ?$/g)) {
	        // break --> break;
	        code += line + ';\n';
	      } else if (line.match(/^ ?(case|default)/g)) {
	        // case (1) --> case (1):
	        code += line + ':\n';
	      } else {
	        // name  -->  name
	        code += 'arr.push(' + line + ');\n';
	      }
	    } else {
	      // plain text
	      code += 'arr.push("' + line.replace(/"/g, '\\"') + '");\n';
	    }
	  };
	  // init global param
	  window.__mito_data = data;
	  window.__mito_code = "";
	  window.__mito_result = "";
	  // remove spaces after switch
	  tpl = tpl.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g, '$1{{');
	  // line breaks
	  tpl = tpl.replace(/^\n/, '').replace(/\n/g, '\\\n');
	  // init code
	  codeWrap = '(function(){\n';
	  code = 'var arr = [];\n';
	  while (match = pattern.exec(tpl)) {
	    addCode(tpl.slice(pointer, match.index), false);
	    addCode(match[1], true);
	    pointer = match.index + match[0].length;
	  }
	  addCode(tpl.substr(pointer, tpl.length - pointer), false);
	  code += '__mito_result = arr.join("");';
	  code = 'with (__mito_data) {\n' + code + '\n}';
	  codeWrap += code;
	  codeWrap += '})();';
	  // console.log("code:\n"+codeWrap);
	  // run code, do NOT use `eval` or `new Function` to avoid `unsafe-eval` CSP rule
	  var scriptList = document.getElementsByTagName('script');
	  var nonce = '';
	  if (scriptList.length > 0) {
	    nonce = scriptList[0].getAttribute('nonce') || ''; // get nonce to avoid `unsafe-inline`
	  }
	  var script = document.createElement('SCRIPT');
	  script.innerHTML = codeWrap;
	  script.setAttribute('nonce', nonce);
	  document.documentElement.appendChild(script);
	  var dom = __mito_result;
	  document.documentElement.removeChild(script);
	  if (!toString) {
	    var e = document.createElement('DIV');
	    e.innerHTML = dom;
	    dom = e.children[0];
	  }
	  return dom;
	}
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/._css-loader@0.23.1@css-loader/index.js!../../node_modules/._less-loader@2.2.3@less-loader/index.js!./core.less", function() {
				var newContent = require("!!../../node_modules/._css-loader@0.23.1@css-loader/index.js!../../node_modules/._less-loader@2.2.3@less-loader/index.js!./core.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "#__sversion {\n  color: #000;\n  font-size: 13px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  /* global */\n  /* compoment */\n}\n#__sversion .vc-max-height {\n  max-height: 19.23076923em;\n}\n#__sversion .vc-max-height-line {\n  max-height: 3.38461538em;\n}\n#__sversion .vc-min-height {\n  min-height: 3.07692308em;\n}\n#__sversion dd,\n#__sversion dl,\n#__sversion pre {\n  margin: 0;\n}\n#__sversion .vc-switch {\n  display: block;\n  position: fixed;\n  right: 0.76923077em;\n  bottom: 0.76923077em;\n  color: #FFF;\n  background-color: #04BE02;\n  line-height: 1;\n  font-size: 1.07692308em;\n  padding: 0.61538462em 1.23076923em;\n  z-index: 10000;\n  border-radius: 0.30769231em;\n  box-shadow: 0 0 0.61538462em rgba(0, 0, 0, 0.4);\n}\n#__sversion .vc-mask {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0);\n  z-index: 9999;\n  transition: background .3s;\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n}\n#__sversion .vc-panel {\n  border-radius: 5px;\n  z-index: 9999;\n  position: absolute;\n  display: none;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  background-color: rgba(38, 45, 38, 0.9);\n  color: #fff;\n  font-size: 20px;\n  padding: 10px;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div id=\"__sversion\" class=\"\">\n  <div class=\"vc-switch\">当前版本</div>\n  <div class=\"vc-panel\">未设置版本\n  </div>\n  <div class=\"vc-mask\">\n  </div>\n</div>\n";

/***/ }
/******/ ])
});
;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Created by Chenjr on 2015/7/9.
 */

console.log('hello world');

/***/ })
/******/ ]);