/******/ (function(modules) { // webpackBootstrap
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
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';

	/**
	 * Actual demo
	 */

	var demo = new Vue({

	  el: '#demo',

	  data: {
	    branches: ['master', 'dev'],
	    currentBranch: 'master',
	    commits: null
	  },

	  created: function created() {
	    this.fetchData();
	  },

	  watch: {
	    currentBranch: 'fetchData'
	  },

	  filters: {
	    truncate: function truncate(v) {
	      var newline = v.indexOf('\n');
	      return newline > 0 ? v.slice(0, newline) : v;
	    },
	    formatDate: function formatDate(v) {
	      return v.replace(/T|Z/g, ' ');
	    }
	  },

	  methods: {
	    fetchData: function fetchData() {
	      var xhr = new XMLHttpRequest();
	      var self = this;
	      xhr.open('GET', apiURL + self.currentBranch);
	      xhr.onload = function () {
	        self.commits = JSON.parse(xhr.responseText);
	        console.log(self.commits[0].html_url);
	      };
	      xhr.send();
	    }
	  }
	});

/***/ }
/******/ ]);