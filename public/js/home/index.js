/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "js/" + chunkId + ".js?" + "43a875e7583b6acc5c5c" + "";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var server1 = 'https://production.server.com';
	var server2 = 'https://dev.server.com';

	var useServer = null;
	if (false) {
		useServer = server1;
	} else if (true) {
		useServer = server2;
	}
	exports.default = useServer;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _homeHeader = __webpack_require__(3);

	var _homeHeader2 = _interopRequireDefault(_homeHeader);

	var _indexInfo = __webpack_require__(10);

	var _indexInfo2 = _interopRequireDefault(_indexInfo);

	var _loading = __webpack_require__(17);

	var _loading2 = _interopRequireDefault(_loading);

	var _vTap = __webpack_require__(26);

	var _vTap2 = _interopRequireDefault(_vTap);

	var _ajaxurl = __webpack_require__(1);

	var _ajaxurl2 = _interopRequireDefault(_ajaxurl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_ajaxurl2.default, '---我是测试环境变量配置用'); // 配置了别名,可简写可不简写, 对于懒人的我喜欢ide的补全,所以不简写

	Vue.use(_vTap2.default);
	var V = new Vue({
		el: '#container',
		methods: {
			sayHi: function sayHi() {
				__webpack_require__.e/* nsure */(2, function () {
					var say = __webpack_require__(27).say;
					say('hi');
				});
			},
			tap: function tap() {
				console.log('hahah');
			}
		},
		components: {
			IndexInfo: _indexInfo2.default, Loading: _loading2.default, myHead: _homeHeader2.default
		}
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\home\\home-header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f7b5c606/home-header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home-header.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home-header.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
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
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
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

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
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
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<h1>
	// 		我是home业务模块下的公共头部,修改我home业务模块下的js都会编译
	// 	</h1>
	// </template>
	// <style>
	//
	// </style>
	// <script>
	// 这个是home业务模块下的通用组件
	// 修改了这个组件,home下的js都会编译一次
	exports.default = {
		ready: function ready() {
			console.log('home-header,测试所有home业务模块下的js都会被编译');
		}
	};
	// </script>

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<h1>\n\t我是home业务模块下的公共头部,修改我home业务模块下的js都会编译\n</h1>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\home\\index-info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-41e1e8f7/index-info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-info.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./index-info.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "#kodo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n#bg h3 {\n  background: url(" + __webpack_require__(13) + ");\n  color: #fff; }\n\nimg {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/holmes.jpg?39e4bbb59b";

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	// 	<div>
	// 		<h1>我是用户信息</h1>
	// 		<figure>
	// 			<img src="../../images/home/logo.jpg" alt="头像">
	// 		</figure>
	// 		<div id="bg">
	// 			<h3>这里是测试背景图片</h3>
	// 			<p></p>
	// 		</div>
	//
	// 		<div id="kodo">
	// 			我是组件里引入的sass,并且是display:flex
	// 		</div>
	//
	// 	</div>
	// </template>
	// <style rel="stylesheet/scss" lang="sass">
	// 	@import "../../sass/home/index-info";
	// 	img {
	// 		width:70px;
	// 		height:70px;
	// 		border-radius: 50%;
	// 	}
	//
	// </style>
	// <script>
	// home业务模块下  只有index页面 用的组件
	exports.default = {
	    ready: function ready() {
	        console.log('修改这里测试实时编译');
	    }
	};
	// </script>

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div>\n\t<h1>我是用户信息</h1>\n\t<figure>\n\t\t<img src=\"" + __webpack_require__(16) + "\" alt=\"头像\">\n\t</figure>\n\t<div id=\"bg\">\n\t\t<h3>这里是测试背景图片</h3>\n\t\t<p></p>\n\t</div>\n\n\t<div id=\"kodo\">\n\t\t我是组件里引入的sass,并且是display:flex\n\t</div>\n\n</div>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.jpg?82ceb5918f";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\common\\loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-38e13e6c/loading.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-38e13e6c&scoped=true!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-38e13e6c&scoped=true!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "i[_v-38e13e6c] {\n  font-size: 20px;\n  color: #abcedf; }\n\n@font-face {\n  font-family: 'iconfont';\n  src: url(" + __webpack_require__(20) + ");\n  /* IE9*/\n  src: url(" + __webpack_require__(20) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(21) + ") format(\"woff\"), url(" + __webpack_require__(22) + ") format(\"truetype\"), url(" + __webpack_require__(23) + "#iconfont) format(\"svg\");\n  /* iOS 4.1- */ }\n\n.iconfont[_v-38e13e6c] {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale; }\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.ebec254.eot";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-woff;base64,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"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/iconfont.b441fce.ttf";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWV0YWRhdGE+DQpDcmVhdGVkIGJ5IEZvbnRGb3JnZSAyMDEyMDczMSBhdCBNb24gQXVnIDE1IDExOjA1OjI2IDIwMTYNCiBCeSBhZG1pbg0KPC9tZXRhZGF0YT4NCjxkZWZzPg0KPGZvbnQgaWQ9Imljb25mb250IiBob3Jpei1hZHYteD0iMzc0IiA+DQogIDxmb250LWZhY2UgDQogICAgZm9udC1mYW1pbHk9Imljb25mb250Ig0KICAgIGZvbnQtd2VpZ2h0PSI1MDAiDQogICAgZm9udC1zdHJldGNoPSJub3JtYWwiDQogICAgdW5pdHMtcGVyLWVtPSIxMDI0Ig0KICAgIHBhbm9zZS0xPSIyIDAgNiAzIDAgMCAwIDAgMCAwIg0KICAgIGFzY2VudD0iODk2Ig0KICAgIGRlc2NlbnQ9Ii0xMjgiDQogICAgeC1oZWlnaHQ9Ijc5MiINCiAgICBiYm94PSIzNCAtMTQ3IDk1NiA3OTIiDQogICAgdW5kZXJsaW5lLXRoaWNrbmVzcz0iNTAiDQogICAgdW5kZXJsaW5lLXBvc2l0aW9uPSItMTAwIg0KICAgIHVuaWNvZGUtcmFuZ2U9IlUrMDA3OC1FNjg0Ig0KICAvPg0KPG1pc3NpbmctZ2x5cGggDQpkPSJNMzQgMHY2ODJoMjcydi02ODJoLTI3MnpNNjggMzRoMjA0djYxNGgtMjA0di02MTR6IiAvPg0KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSIubm90ZGVmIiANCmQ9Ik0zNCAwdjY4MmgyNzJ2LTY4MmgtMjcyek02OCAzNGgyMDR2NjE0aC0yMDR2LTYxNHoiIC8+DQogICAgPGdseXBoIGdseXBoLW5hbWU9Ii5udWxsIiBob3Jpei1hZHYteD0iMCIgDQogLz4NCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibm9ubWFya2luZ3JldHVybiIgaG9yaXotYWR2LXg9IjM0MSIgDQogLz4NCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgaG9yaXotYWR2LXg9IjEwMDEiIA0KZD0iTTI4MSA1NDNxLTI3IC0xIC01MyAtMWgtODNxLTE4IDAgLTM2LjUgLTZ0LTMyLjUgLTE4LjV0LTIzIC0zMnQtOSAtNDUuNXYtNzZoOTEydjQxcTAgMTYgLTAuNSAzMHQtMC41IDE4cTAgMTMgLTUgMjl0LTE3IDI5LjV0LTMxLjUgMjIuNXQtNDkuNSA5aC0xMzN2LTk3aC00Mzh2OTd6TTk1NSAzMTB2LTUycTAgLTIzIDAuNSAtNTJ0MC41IC01OHQtMTAuNSAtNDcuNXQtMjYgLTMwdC0zMyAtMTZ0LTMxLjUgLTQuNXEtMTQgLTEgLTI5LjUgLTAuNQ0KdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQ0KdDkuNSAtMTAuNXQyMS41IC00aDM3aDY3aDgxaDgwaDY0aDM2cTIzIDAgMzQgMTJ0MiAzOHEtNSAxMyAtOS41IDMwLjV0LTkuNSAzNC41cS01IDE5IC0xMSAzOWgtMzY4ek0zMzYgNDk4djIyOHEwIDExIDIuNSAyM3QxMCAyMS41dDIwLjUgMTUuNXQzNCA2aDE4OHEzMSAwIDUxLjUgLTE0LjV0MjAuNSAtNTIuNXYtMjI3aC0zMjd6IiAvPg0KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjg0IiB1bmljb2RlPSImI3hlNjg0OyIgaG9yaXotYWR2LXg9IjEwMjQiIA0KZD0iTTg5MSA1NjJoLTE4NnExNyAzMCAxNyA2NnEwIDQ4IC0zMSA4My41dC04NiAzNS41cS01MyAwIC04OSAtMzdxLTE4IC0xOCAtMzEgLTQ2cS0xMiAyNyAtMzAgNDZxLTM2IDM3IC04OSAzN3EtNTUgMCAtODggLTM4cS0yOSAtMzMgLTI5IC04MXEwIC0zNiAxOCAtNjZoLTE3NXEtMTEgMCAtMTkuNSAtOC41dC04LjUgLTIwLjV2LTI1OXEwIC0xMSA4LjUgLTE5LjV0MTkuNSAtOC41aDM4di0zNjVxMCAtMTIgOC41IC0yMHQxOS41IC04aDY2OA0KcTExIDAgMTkuNSA4dDguNSAyMHYzNjVoMzdxMTIgMCAyMCA4LjV0OCAxOS41djI1OXEwIDEyIC04IDIwLjV0LTIwIDguNXpNNTU1IDY3MHEyMCAyMCA1MCAyMHEzMSAwIDQ2IC0xOC41dDE1IC00My41cTAgLTI4IC0xNSAtNDZxLTE3IC0yMCAtNDYgLTIwbC04OSAxcTggNzQgMzkgMTA3ek0zMDUgNjI4cTAgMjYgMTUgNDRxMTYgMTggNDYgMTh0NDkgLTIwcTMxIC0zMiAzOCAtMTA4aC04N3EtMzIgMCAtNDYuNSAyMXQtMTQuNSA0NXpNMTIwIDUwNQ0KaDI2N3YtMjAyaC0yNjd2MjAyek0xODYgMjQ2aDIwMXYtMzM2aC0yMDF2MzM2ek00NDMgLTkwdjU5NWg5OHYtNTk1aC05OHpNNzk4IC05MGgtMjAxdjMzNmgyMDF2LTMzNnpNODY0IDMwM2gtMjY3djIwMmgyNjd2LTIwMnoiIC8+DQogIDwvZm9udD4NCjwvZGVmcz48L3N2Zz4NCg=="

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div id="loading">
	// 		<!--修改这里试试,所有js都会编译,因为他是common全局公用的-->
	// 		<h4>loading组件 正在加载中,请稍等...</h4>
	// 		<!-- 测试字体文件 -->
	// 		<i class="iconfont">&#xe684;&#xe684;&#xe684;</i>
	// 	</div>
	// </template>
	// <style scoped rel="stylesheet/scss" lang="sass">
	// 	i {
	// 		font-size:20px;
	// 		color: #abcedf;
	// 	}
	// 	@font-face {font-family: 'iconfont';
	// 		src: url('../../fonts/iconfont.eot'); /* IE9*/
	// 		src: url('../../fonts/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
	// 		url('../../fonts/iconfont.woff') format('woff'), /* chrome、firefox */
	// 		url('../../fonts/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
	// 		url('../../fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
	// 	}
	// 	.iconfont{
	// 		font-family:"iconfont" !important;
	// 		font-size:16px;font-style:normal;
	// 		-webkit-font-smoothing: antialiased;
	// 		-webkit-text-stroke-width: 0.2px;
	// 		-moz-osx-font-smoothing: grayscale;}
	// </style>
	// <script>
	// common是所有业务模块下的通用组件
	// 修改common下的组件,所有业务模块的入口js都会编译
	exports.default = {
	    ready: function ready() {
	        console.log('loading,测试所有入口js都会被编译');
	    }
	};
	// </script>

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n    <div id=\"loading\" _v-38e13e6c=\"\">\n\t\t<!--修改这里试试,所有js都会编译,因为他是common全局公用的-->\n\t\t<h4 _v-38e13e6c=\"\">loading组件 正在加载中,请稍等...</h4>\n\t\t<!-- 测试字体文件 -->\n\t\t<i class=\"iconfont\" _v-38e13e6c=\"\"></i>\n\t</div>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 二哲 on 15/12/6.
	 */
	/*
	 * 不带参数指令
	 * v-tap=handler
	 * or
	 * 带参数指令
	 * v-tap=handler($index,el,$event)
	 *
	 * !!!新增!!!
	 * 把tapObj对象注册在原生event对象上
	 * 	event.tapObj拥有6个值
	 * 	pageX,pageY,clientX,clientY,distanceX,distanceY
	 * 后面2个分别的手指可能移动的位置(以后可用于拓展手势)
	 *
	 * */
	;(function () {
		var vueTap = {};
		var isVue2 = false;
		
		/**                               公用方法开始                 * */
		function isPc() {
			var uaInfo = navigator.userAgent;
			var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
			var flag   = true;
			for ( var i = 0; i < agents.length; i++ ) {
				if (uaInfo.indexOf(agents[i]) > 0) {
					flag = false;
					break;
				}
			}
			return flag;
		}
		
		function isTap(self) {
			if (isVue2 ? self.disabled : self.el.disabled) {
				return false;
			}
			var tapObj = self.tapObj;
			return self.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
		}
		
		function touchstart(e, self) {
			var touches    = e.touches[0];
			var tapObj     = self.tapObj;
			tapObj.pageX   = touches.pageX;
			tapObj.pageY   = touches.pageY;
			tapObj.clientX = touches.clientX;
			tapObj.clientY = touches.clientY;
			self.time      = +new Date();
		}
		
		function touchend(e, self) {
			var touches      = e.changedTouches[0];
			var tapObj       = self.tapObj;
			self.time        = +new Date() - self.time;
			tapObj.distanceX = tapObj.pageX - touches.pageX;
			tapObj.distanceY = tapObj.pageY - touches.pageY;
			
			if (!isTap(self)) return;
			setTimeout(function () {
				self.handler(e);
			}, 150)
		}
		
		/**                               公用方法结束                 * */
		
		var vue1 = {
			isFn: true,
			acceptStatement: true,
			update: function (fn) {
				var self = this;
				self.tapObj = {};
				if (typeof fn !== 'function' && self.el.tagName.toLocaleLowerCase() !== 'a') {
					return console.error('The param of directive "v-tap" must be a function!');
				}
				
				self.handler = function (e) { //This directive.handler
					e.tapObj = self.tapObj;
					if (self.el.href && !self.modifiers.prevent) {
						return window.location = self.el.href;
					}
					fn.call(self, e);
				};
				if (isPc()) {
					self.el.addEventListener('click', function (e) {
						if (self.el.href && !self.modifiers.prevent) {
							return window.location = self.el.href;
						}
						self.handler.call(self, e);
					}, false);
				} else {
					self.el.addEventListener('touchstart', function (e) {
						
						if (self.modifiers.stop)
							e.stopPropagation();
						if (self.modifiers.prevent)
							e.preventDefault();
						touchstart(e, self);
					}, false);
					self.el.addEventListener('touchend', function (e) {
						Object.defineProperties(e, { // 重写currentTarget对象 与jq相同
							"currentTarget": {
								value: self.el,
								writable: true,
								enumerable: true,
								configurable: true
							},
						});
						e.preventDefault();
						
						return touchend(e, self);
					}, false);
				}
			}
		};
		
		var vue2 = {
			bind: function (el, binding) {
				var value = binding.value;
				el.tapObj = {};
				el.handler = function (e) { //This directive.handler
					if (!value && el.href && !binding.modifiers.prevent) {
						return window.location = el.href;
					}
					value.event = e;
					value.tapObj = el.tapObj;
					value.methods.call(this, value);
				};
				if(isPc()) {
					el.addEventListener('click', function (e) {
						if (!value && el.href && !binding.modifiers.prevent) {
							return window.location = el.href;
						}
						value.event = e;
						value.methods.call(this,value);
					}, false);
				} else {
					el.addEventListener('touchstart', function (e) {
						
						if (binding.modifiers.stop)
							e.stopPropagation();
						if (binding.modifiers.prevent)
							e.preventDefault();
						touchstart(e, el);
					}, false);
					el.addEventListener('touchend', function (e) {
						Object.defineProperties(e, { // 重写currentTarget对象 与jq相同
							"currentTarget": {
								value: el,
								writable: true,
								enumerable: true,
								configurable: true
							},
						});
						e.preventDefault();
						
						return touchend(e, el);
					}, false);
				}
			},
		};
		
		vueTap.install = function (Vue) {
			if(Vue.version.substr(0,1) > 1 ) {
				isVue2 = true;
			}
			
			Vue.directive('tap', isVue2 ? vue2 : vue1);
		};
		
		if (true) {
			module.exports = vueTap;
		} else if (typeof define == "function" && define.amd) {
			define([], function () {
				return vueTap
			})
		} else if (window.Vue) {
			window.vueTap = vueTap;
			Vue.use(vueTap);
		}
		
	})();


/***/ }
/******/ ]);