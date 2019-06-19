module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/buttons.jsx":
/*!********************************!*\
  !*** ./components/buttons.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buttons; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/tomdringer/Sites/juddlecom/app/components/buttons.jsx";



var Button = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.button.withConfig({
  displayName: "buttons__Button",
  componentId: "sc-1rpmpyp-0"
})(["border-radius:5px;background-color:transparent;color:#fff;border:solid 1px #fff;width:50vh;padding:1.2vh 0;;font-family:\"Helvetica Neue\";font-size:1rem;max-width:100%;margin-top:", ";margin-bottom:", ";width:100%;&:hover{cursor:pointer;}", " ", " ", ""], function (props) {
  return props.top;
}, function (props) {
  return props.bottom;
}, function (props) {
  return props.buttonType === "Juddle" && Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["background-color:#4170b4;border:none;"]);
}, function (props) {
  return props.buttonType === "Google" && Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["border:1px solid #4170b4;background:url(../static/images/google.png) no-repeat;background-position:10px 8px;background-size:25px;color:#4170b4;"]);
}, function (props) {
  return props.buttonType === "Facebook" && Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["border:1px solid #4170b4;background:url(../static/images/facebook.png) no-repeat;background-position:10px 8px;background-size:25px;color:#4170b4;"]);
});

var Buttons =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Buttons, _React$Component);

  function Buttons(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Buttons);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Buttons).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Buttons, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Button, {
        name: this.props.name,
        buttonType: this.props.buttonType,
        top: this.props.top,
        bottom: this.props.bottom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.props.title);
    }
  }]);

  return Buttons;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/contactform.jsx":
/*!************************************!*\
  !*** ./components/contactform.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_mailchimp_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mailchimp-form */ "react-mailchimp-form");
/* harmony import */ var react_mailchimp_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_css_common_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/css/common.css */ "./static/css/common.css");
/* harmony import */ var _static_css_common_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_common_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/tomdringer/Sites/juddlecom/app/components/contactform.jsx";




var Para = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.p.withConfig({
  displayName: "contactform__Para",
  componentId: "sc-1x10ffp-0"
})(["color:#1270b7;font-weight:bold;font-size:18px;"]);

var ContactForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContactForm, _Component);

  function ContactForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Para, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Sign Up for a demo"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mailchimp_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
        action: "//mc.us5.list-manage.com/subscribe/post?u=67c9c26c29e6f298d5d5b3dcc&id=7e9a814470",
        fields: [{
          name: 'FNAME',
          placeholder: 'First Name',
          type: 'text',
          required: true
        }, {
          name: 'LNAME',
          placeholder: 'Last Name',
          type: 'text',
          required: true
        }, {
          name: 'MMERGE4',
          placeholder: 'Company',
          type: 'text',
          required: false
        }, {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true
        }, {
          name: 'MMERGE3',
          placeholder: 'Phone Number',
          type: 'text',
          required: true
        }, {
          name: 'MMERGE6',
          placeholder: 'Website',
          type: 'text',
          required: true
        }],
        message: {
          sending: "Sending...",
          success: "Thank you for your request. We will be in touch shortly to organise your demo.",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Request a demo"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/feature.jsx":
/*!********************************!*\
  !*** ./components/feature.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureComp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/tomdringer/Sites/juddlecom/app/components/feature.jsx";



var Feature = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "feature__Feature",
  componentId: "hvo7zq-0"
})(["background-color:#ffffff;"]);
var FeatureContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "feature__FeatureContainer",
  componentId: "hvo7zq-1"
})(["display:flex;flex-direction:column;align-items:center;text-align:center;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.img.withConfig({
  displayName: "feature__Img",
  componentId: "hvo7zq-2"
})(["max-width:100%;margin-top:23px;margin-bottom:24px;"]);
var Header2 = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.h2.withConfig({
  displayName: "feature__Header2",
  componentId: "hvo7zq-3"
})(["margin:23px 0 20px 0;padding:0;"]);
var Header3 = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.h3.withConfig({
  displayName: "feature__Header3",
  componentId: "hvo7zq-4"
})(["margin:0;padding:0;"]);
var Para = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.p.withConfig({
  displayName: "feature__Para",
  componentId: "hvo7zq-5"
})([""]);
var dark = {
  backgroundColor: "#f3f3f3"
};

var FeatureComp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FeatureComp, _React$Component);

  function FeatureComp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeatureComp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FeatureComp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatureComp, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Feature, {
        style: this.props.dark ? dark : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(FeatureContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Header2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.props.h2), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Header3, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.props.h3), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Img, {
        src: this.props.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Para, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.props.para))));
    }
  }]);

  return FeatureComp;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/*! exports provided: default, MainBody, ContactFormModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBody", function() { return MainBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormModal", function() { return ContactFormModal; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/css/bootstrap.min.css */ "./static/css/bootstrap.min.css");
/* harmony import */ var _static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/images/nav-logo.png */ "./static/images/nav-logo.png");
/* harmony import */ var _static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_contactform_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/contactform.jsx */ "./components/contactform.jsx");
/* harmony import */ var _static_images_bubble_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static/images/bubble.png */ "./static/images/bubble.png");
/* harmony import */ var _static_images_bubble_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_images_bubble_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_feature__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/feature */ "./components/feature.jsx");
/* harmony import */ var _static_images_skills_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/images/skills.svg */ "./static/images/skills.svg");
/* harmony import */ var _static_images_skills_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_images_skills_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_images_location_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/images/location.svg */ "./static/images/location.svg");
/* harmony import */ var _static_images_location_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_images_matching_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/images/matching.svg */ "./static/images/matching.svg");
/* harmony import */ var _static_images_matching_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_images_matching_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_images_chat_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/images/chat.svg */ "./static/images/chat.svg");
/* harmony import */ var _static_images_chat_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_images_chat_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/images/match_phone.png */ "./static/images/match_phone.png");
/* harmony import */ var _static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/images/chat_phone.png */ "./static/images/chat_phone.png");
/* harmony import */ var _static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/images/skills_phone.png */ "./static/images/skills_phone.png");
/* harmony import */ var _static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_images_bg1_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/images/bg1.png */ "./static/images/bg1.png");
/* harmony import */ var _static_images_bg1_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_images_bg1_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../static/images/juddle_demo_request.png */ "./static/images/juddle_demo_request.png");
/* harmony import */ var _static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-cookie-consent */ "react-cookie-consent");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/buttons */ "./components/buttons.jsx");









var _jsxFileName = "/Users/tomdringer/Sites/juddlecom/app/components/layout.jsx";




















var FooterBlock = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.footer.withConfig({
  displayName: "layout__FooterBlock",
  componentId: "sc-1w8p8al-0"
})(["background:#000;color:#fff;div.container{display:flex;height:143px;align-content:center;flex-direction:column;padding:30px;box-sizing:border-box;}div#year{margin-bottom:20px;}p{white-space:pre-wrap;}a{color:#fff;}a:hover{text-decoration:underline;}"]);
var Bg = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div.withConfig({
  displayName: "layout__Bg",
  componentId: "sc-1w8p8al-1"
})(["background:url(", ") no-repeat;background-size:cover;"], _static_images_bg1_png__WEBPACK_IMPORTED_MODULE_24___default.a);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.h1.withConfig({
  displayName: "layout__Title",
  componentId: "sc-1w8p8al-2"
})(["color:#ffffff;font-family:\"Helvetica Neue\";font-size:7vh;font-weight:700;letter-spacing:-1.5px;letter-spacing:-1.5px;line-height:64px;text-align:center;"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.p.withConfig({
  displayName: "layout__P",
  componentId: "sc-1w8p8al-3"
})(["font-family:\"Helvetica Neue\";font-size:3vh;text-align:center;font-weight:400;letter-spacing:-0.75px;color:#fff;"]);
var JuddleButton = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.button.withConfig({
  displayName: "layout__JuddleButton",
  componentId: "sc-1w8p8al-4"
})(["border-radius:5px;background-color:transparent;color:#fff;border:solid 1px #fff;width:50vh;padding:2vh 0;font-family:\"Helvetica Neue\";font-size:3vh;margin:20px 0;", ""], function (props) {
  return props.primary && Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["css"])(["background-color:#4170b4;border:none;margin:20px 0;"]);
});
var juddleButtonSmall = {
  width: '20vh',
  flexBasis: 'min-content',
  padding: '10px 15px',
  margin: '0'
};
var SpeechBubble = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.img.withConfig({
  displayName: "layout__SpeechBubble",
  componentId: "sc-1w8p8al-5"
})(["max-width:132px;width:100%;max-height:130px;margin-top:9vh;"]);
var containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};
var NavBarStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'middle',
  alignContent: 'middle',
  width: '100%',
  justifyContent: 'space-between',
  marginRight: '0'
};

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, null, [{
    key: "propTypes",
    value: function propTypes() {
      return {
        children: react__WEBPACK_IMPORTED_MODULE_9___default.a.PropTypes.object.isRequired,
        fluid: react__WEBPACK_IMPORTED_MODULE_9___default.a.PropTypes.boolean,
        navmenu: react__WEBPACK_IMPORTED_MODULE_9___default.a.PropTypes.boolean
      };
    }
  }]);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "initializeReactGA", function () {
      react_ga__WEBPACK_IMPORTED_MODULE_25___default.a.initialize('UA-59596713-2');
      react_ga__WEBPACK_IMPORTED_MODULE_25___default.a.pageview(window.location.hostname + _static_images_location_svg__WEBPACK_IMPORTED_MODULE_18___default.a.pathname + _static_images_location_svg__WEBPACK_IMPORTED_MODULE_18___default.a.search);
    });

    _this.state = {
      navOpen: false,
      modal: false
    };
    _this.toggleModal = _this.toggleModal.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, [{
    key: "toggleModal",
    value: function () {
      var _toggleModal = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e) e.preventDefault();
                this.setState({
                  modal: !this.state.modal
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function toggleModal(_x) {
        return _toggleModal.apply(this, arguments);
      }

      return toggleModal;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeReactGA();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
        light: true,
        className: "navbar navbar-expand-md pt-3 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavbarBrand"], {
        style: NavBarStyles,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "Juddle",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(JuddleButton, {
        primary: true,
        onClick: this.toggleModal,
        modal: this.modal,
        toggleModal: this.toggleModal,
        style: juddleButtonSmall,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "View A Demo"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(MainBody, {
        navmenu: this.props.navmenu,
        toggleModal: this.toggleModal,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(FooterBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        fluid: this.props.fluid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "year",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "\xA9 ", new Date().getFullYear(), " Juddle"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "cookiesPrivacyTerms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "/info.htm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Cookies, Privacy and Terms")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ContactFormModal, {
        modal: this.state.modal,
        toggleModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);


var MainBody =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MainBody, _React$Component2);

  function MainBody() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MainBody);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MainBody).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(MainBody, [{
    key: "render",
    value: function render() {
      if (this.props.container === false) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_cookie_consent__WEBPACK_IMPORTED_MODULE_27___default.a, {
          enableDeclineButton: true,
          location: "bottom",
          buttonText: "I accept",
          cookieName: "juddleCookies",
          style: {
            background: "#2B373B"
          },
          buttonStyle: {
            borderRadius: "5px",
            background: "#1270b7",
            color: "#fff",
            fontSize: "16px"
          },
          declineButtonStyle: {
            borderRadius: "5px",
            background: "transparent",
            border: "solid 1px #fff",
            color: "#fff",
            fontSize: "16px"
          },
          expires: 150,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, "This website uses cookies and analytics to enhance the user experience.", " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Bg, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          style: containerStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SpeechBubble, {
          src: _static_images_bubble_png__WEBPACK_IMPORTED_MODULE_15___default.a,
          alt: "juddle bubble",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, "Match and Chat with employers"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, "Juddle is an on-demand job site that allows you to connect directly with employers based on your skills and chat within minutes."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(JuddleButton, {
          primary: true,
          onClick: this.props.toggleModal,
          modal: this.props.modal,
          toggleModal: this.props.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, "Request A Demo")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dark: false,
          h2: "You're in control",
          image: _static_images_skills_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
          h3: "Skills",
          para: "Use your skills and not a CV to match with employers",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dark: true,
          image: _static_images_location_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
          h3: "Location",
          para: "Juddle picks up your location to show the jobs nearest you",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dark: false,
          image: _static_images_matching_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
          h3: "Matching",
          para: "We use artificial intelligence and machine learning to match you directly to the right employers.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dark: true,
          image: _static_images_chat_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
          h3: "Chat",
          para: "We allow you to chat directly with the employer straight after matching, getting you the job quicker",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dark: false,
          h2: "Match Directly with Employers",
          image: _static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_21___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dark: true,
          h2: "Chat instantly with Employers",
          image: _static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_22___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_16__["default"], {
          dark: false,
          h2: "Use Skills to find the right people",
          image: _static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_23___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          },
          __self: this
        }), this.props.children);
      } else if (this.props.navmenu === false) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        }, this.props.children);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 328
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          xs: "12",
          md: "9",
          lg: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          },
          __self: this
        }, this.props.children)));
      }
    }
  }]);

  return MainBody;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);
var ContactFormModal =
/*#__PURE__*/
function (_React$Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ContactFormModal, _React$Component3);

  function ContactFormModal() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContactFormModal);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ContactFormModal).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ContactFormModal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.props.modal,
        toggle: this.props.toggleModal,
        style: {
          maxWidth: 490
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        style: {
          padding: '0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_26___default.a,
        style: {
          width: '100%'
        },
        alt: "Sign up for a demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], {
        style: {
          padding: '1em 2em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_contactform_jsx__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      })));
    }
  }]);

  return ContactFormModal;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/***/ }),

/***/ "./components/page.jsx":
/*!*****************************!*\
  !*** ./components/page.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");










var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                return _context.abrupt("return", {
                  lang: 'en' // Add a lang property to all pages for accessibility

                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/page */ "./components/page.jsx");






var _jsxFileName = "/Users/tomdringer/Sites/juddlecom/app/pages/index.js";




var App =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Page);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        toggleModal: this.toggleModal,
        navmenu: true,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      })));
    }
  }]);

  return App;
}(_components_page__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./static/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./static/css/bootstrap.min.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/common.css":
/*!*******************************!*\
  !*** ./static/css/common.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/images/bg1.png":
/*!*******************************!*\
  !*** ./static/images/bg1.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg1-0e696826f223295f28748af2103dcd23.png";

/***/ }),

/***/ "./static/images/bubble.png":
/*!**********************************!*\
  !*** ./static/images/bubble.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAAAAXNSR0IB2cksfwAAAhNQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CX+N4AAAALF0Uk5TAAghM0RUYGcELlqCq83p/xFQj8X1AYDM/TSO5RRz2TKk+Ue8QMAptw6R/FIT5gOGFb0q30Xx+mNfW/sx8xgGxJJL660LhR73niScFvjkSKkJ9E+f4WGVyBs/iJSgoZZ0XD4cl2Kd9qeqSkl/mokNDFWwrhdMkBlpfGRy4IO+mbPKLVHDdqXY2w+1jeI2Qsn+zoE1EovHv+hBK88aI2tqVyJTBabB1tBYr5tw1F5dWScHmFbvggAABHNJREFUeJzN22dXE0EUBuCLIREFvRIgBiMKiIVgoijFKE1AUUFEFLFgF8UK9t577w177+Unmk3BTbLZOjM379fk7D5nz87stAtgOmnDbOl2h2P4cIfDnm4blmb+SmaSMWJkZtao0RiX0aOyMkeOyBAAGJPtzMmNv708uTnO7DEcAXk211i3GiAa91iXLY8LIX+cRw8gGs+4fNaC8QUTjAjCmVAwniFhYmGRcYKUosKJjAjFk8wJwplUzIBQMtkKQcrkEouEKVOtEqRMnWKBMK3Uy8KA6C2dZtZQZqhNqsdTZoowPYsdQUrWdOOGYh9bA6LPaDvxz2BNkDLDb8Qws5yHAbF8pn7DrNl8DIizZ+k1VFTyMiBWVugz2Kv4GRCr7HoM1bqGDObjrtY2zOFLkDJHyxDg/BykuAPqhuK5/A2Ic1W7rXk1IgyINfOSG2oZfrHU46lNZqirF2VArK9LgmgQZ0BsUDbMF2lAnK/4QjSKRTQqvRZNYg2ITYmGMtEGxIQRX7Ow1vk/nuY4xALxBsQFsYaFLRSIloUxiEUUBsRFcsNiRpMco/EuliGW0BgQl/w3tLZRIdpahxAuKgOiK2rwL6VDLI3Oh9rpDIjtEcQySsSysKFjOSVieUcI0UlpQOwMIVbQIlaEECtpEStDXTatAVHquruoEV1BxCpqxKogopsa0R1EqO5eiEguwGpqA+JqWENNQFwDAWoCYgAKqAmIBbCWmoC4FtZRExDXQQ81AbEnNRDrqQkp8yQ2UBOkFzMlmuhGaoLUWW2iJkjd9mZqgvQB20JNkD7leakwqEmN4d1WaoQ00N1GjehKlckPEC6RSAlNA6GXFhGeEGfTIsJLA83bKQ2RRRLYQYnoi6xZ7aRE7IogMgi2GaLxDB2p2E2HGFpMhVqu5wTUIltWhj1UCNkCe2psNVAtI/bIDUTbT22x20+wlwIRtxEH+wi+pb7+OAQMiEcoHMfbL9pwINEAB1Nhw170uOKQkgHgsEhDg7IB6gROQZIeZ4Ejwtpp8oM9ADZBI70a1ePcu8Qc9mpXMwg5eqd57A3gKH/ENi0DwDHOBPdxbQPY+RqqBnQYoJqroVLfuekTPA0ndR4UPsXRcLpV+/6hnOFn0H94/Cwvgk+ji5LnHCdDk5GCAj4TU5+h0ooOHgRvg7Eik/McDIbLbS4wJ1w0Xnh0iTGh3ECbGMplloKiQpsJAsAVdoSrl/R2kHG5lvSS12/cNCLwOW+ZEwRzO9lFS/2Ql++6o6ve4O69+w+slGomGdK4j0Z+f9j56LHqMkJLjjP7oQWAlCeKV376TP4f//NNp/oGE2aNjYNNmQEW5bv9ijWZOS+U/pv28kHFgMPx6rXD8aYi/y27QuZ3Sgbne2bX15UPiQSPmd7GSvoTd+X6TJT0WUvCVlSj5jyFfQZjCXd7hT8GgJJYQ7f5Ps9CPsoJn8r41KdrRD6U+PzFUFkls/SfjAq8X9NJnkIw3yKEO98VO0ghOR68v/tH78+DZAKA979+t//5S3Pvf5AFTWrfDLxQAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/chat.svg":
/*!********************************!*\
  !*** ./static/images/chat.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTExIiBoZWlnaHQ9IjEwOSIgdmlld0JveD0iMCAwIDExMSAxMDkiPjxkZWZzPjxwYXRoIGlkPSJwb3o4YSIgZD0iTTEwNTEuNzQ1IDE4NC41OTVjLTI4LjcxOSAwLTUyIDIwLjcxLTUyIDQ2LjI0OSAwIDEyLjA5MiA1LjIyMiAyMy4xMTYgMTMuNzcyIDMxLjM1Ny0uMzI3IDguMDMtMS43OTcgMTguODI3LTYuOTk4IDI0LjM5NCA5LjkzMyAwIDIwLjEwMi03LjQgMjYuMTM0LTEyLjczMSA1LjkxMyAyLjA4NSAxMi4zNTQgMy4yMjkgMTkuMDkyIDMuMjI5IDI4LjcyIDAgNTItMjAuNzExIDUyLTQ2LjI1IDAtMjUuNTM3LTIzLjI4LTQ2LjI0OC01Mi00Ni4yNDh6Ii8+PC9kZWZzPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05OTYgLTE4MSkiPjx1c2UgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiM0ODZmYmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSI1MCIgc3Ryb2tlLXdpZHRoPSI2IiB4bGluazpocmVmPSIjcG96OGEiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "./static/images/chat_phone.png":
/*!**************************************!*\
  !*** ./static/images/chat_phone.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/chat_phone-2f9d5c5eeb87d0d5b27807b3ed7f330f.png";

/***/ }),

/***/ "./static/images/juddle_demo_request.png":
/*!***********************************************!*\
  !*** ./static/images/juddle_demo_request.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/juddle_demo_request-9cf0d44e0c0ee910a7f2e910588936f8.png";

/***/ }),

/***/ "./static/images/location.svg":
/*!************************************!*\
  !*** ./static/images/location.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTciIGhlaWdodD0iMTM4IiB2aWV3Qm94PSIwIDAgOTcgMTM4Ij48ZGVmcz48cGF0aCBpZD0icHJjNmEiIGQ9Ik02OTYuNDkgMjMuNTM1Yy0yNi41NTcgMC00OC4xNjQgMjEuNjA3LTQ4LjE2NCA0OC4xNjUgMCA4Ljk3MiAyLjQ4NiAxNy43MyA3LjE5IDI1LjMyNmwzOC4yMzMgNjEuNjEzYTQuMDE1IDQuMDE1IDAgMCAwIDMuNDEgMS44OTZoLjAzMmE0LjAxMyA0LjAxMyAwIDAgMCAzLjQxMi0xLjk1bDM3LjI1OC02Mi4yMWE0OC4xIDQ4LjEgMCAwIDAgNi43OTQtMjQuNjc2YzAtMjYuNTU3LTIxLjYwNy00OC4xNjQtNDguMTY0LTQ4LjE2NHptMzQuNDgyIDY4LjcybC0zMy44NzMgNTYuNTU3LTM0Ljc2LTU2LjAxNWMtMy45MTYtNi4zMjMtNi4wNC0xMy42MTgtNi4wNC0yMS4wOTcgMC0yMi4xMzIgMTguMDYtNDAuMTkgNDAuMTkyLTQwLjE5IDIyLjEzIDAgNDAuMTYzIDE4LjA1OSA0MC4xNjMgNDAuMTlhNDAuMSA0MC4xIDAgMCAxLTUuNjgyIDIwLjU1NHoiLz48L2RlZnM+PGc+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY0OCAtMjMpIj48dXNlIGZpbGw9IiM0ODZmYmUiIHhsaW5rOmhyZWY9IiNwcmM2YSIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./static/images/match_phone.png":
/*!***************************************!*\
  !*** ./static/images/match_phone.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/match_phone-70d457585862f4f03c833b1e82228edb.png";

/***/ }),

/***/ "./static/images/matching.svg":
/*!************************************!*\
  !*** ./static/images/matching.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM1IiBoZWlnaHQ9IjE0MyIgdmlld0JveD0iMCAwIDEzNSAxNDMiPjxkZWZzPjxwYXRoIGlkPSI4bmtlYSIgZD0iTTEwMDcuNjI1IDI3LjA1NGgtLjAwN2MtNi42MDIuMDAzLTEyLjAxNyA1LjQ0NS0xMiAxMi4wNTkuMDE1IDYuNTc2IDUuNDQgMTEuOTk0IDExLjk4NyAxMS45OTRoLjA3N2M2LjY0Ni0uMDQzIDEyLjAwOC01LjQzNyAxMS45OTEtMTIuMDYtLjAxOC02LjYxOC01LjQxOC0xMS45OTMtMTIuMDQ4LTExLjk5M3ptMzMuMzg2IDIyLjQ5OWMtLjQ3NCAwLS41NjYuMjA2LS41Ni42NTEuMDIyIDEuNTc2LjAyOCAzLjE1My0uMDAyIDQuNzI5LS4wMS41MTcuMTMzLjY3LjY2OC42OTMgMS41NDMuMDY2IDMuMDk0LjEzIDQuNjIuMzQzIDEwLjAyMyAxLjM5OSAxOC40MDQgNS44NDkgMjQuOTggMTMuNTkgMi4yOTQgMi43MDIgNC4wOSA1LjcxOSA1LjUwNCA4Ljk3MS4yOTguNjg4LjE3Ljk5Mi0uNTY1IDEuMDU3LS4xNC4wMTMtLjI4LjA1Ny0uNDE4LjA5NS0yLjIyOC42MTEtNC40NTYgMS4yMjQtNi42ODQgMS44MzdsLS4xMTkuMjI2Yy4xMzEuMDYuMjgzLjA5Ni4zOTMuMTgzIDQuNjYzIDMuNzA5IDkuMzMyIDcuNDEyIDEzLjk3MyAxMS4xNDkuMjAxLjE2MS4zNDEuMjI1LjQ0NC4yMjUuMjI4IDAgLjI3LS4zMTQuMzY4LS41NzUgMi4wMi01LjQ0NCA0LjAzNi0xMC44ODggNi4wNDYtMTYuMzM1LjA3My0uMi4yOTgtLjQzMS4xMTctLjYyOWEuMjY1LjI2NSAwIDAgMC0uMjA0LS4wOWMtLjE0IDAtLjI5OC4wODUtLjQzNi4xMjQtMS45LjUzNy0zLjgxIDEuMDM3LTUuNjg5IDEuNjM2YTEuOTQgMS45NCAwIDAgMS0uNTY4LjExM2MtLjM1IDAtLjU1Ny0uMjAzLS43My0uNzI1YTI5LjE2NCAyOS4xNjQgMCAwIDAtMi41MTgtNS41MzljLTguNjMtMTQuNzM1LTIxLjg5NC0yMS4yNjMtMzguNTctMjEuNzI5aC0uMDV6bS0xOS41MjkgNC45MzZjLTEuNzUzIDAtMy41MTcuMzY0LTUuMjU5IDEuMTY5LS4yMDguMDk3LS40MTkuMTg1LS42My4yNy0yLjgyNiAxLjE0LTUuNjc1IDEuODA5LTguNTEzIDEuODA5LTIuNTM3IDAtNS4wNjYtLjUzNC03LjU1OC0xLjc0NS0xLjgyMy0uODg1LTMuNTc0LTEuMzI1LTUuNDY3LTEuMzI1LS4yNzQgMC0uNTUyLjAwOS0uODM0LjAyOC0uMDQuMDAzLS4wODMuMDAzLS4xMjQuMDAzbC0uMjE1LS4wMDJoLS4wMDRjLTYuNDI2LjAwOS0xMS41MiA0Ljc4LTExLjY4IDExLjE5LS4xODIgNy4yNzUtLjE1MyAxNC41NTQtLjIzOCAyMS44MzEtLjAwNy41OC4xOTMuNzA0LjcxLjcwNGguMDI4YzEuMzY4LS4wMTIgMi43MzUtLjAyIDQuMTA0LS4wMiAxLjI5NyAwIDIuNTk1LjAwNyAzLjg5My4wMjRoLjAzM2MuNTk2IDAgLjcyLS4yMTQuNzE2LS43ODMtLjAyMy0zLjkyNy0uMDEyLTcuODUzLS4wMTItMTEuNzggMC0xLjkxMS4wMDEtMS44NzggMS45MjEtMS45MTdsLjA3My0uMDAxYy42NSAwIC44NDcuMTk4Ljg0MS44OTktLjAzNSA0LjIxMy4wMDMgOC40MjctLjAzNiAxMi42NC0uMDA3Ljc2LjIxNS45NDUuOTM0Ljk0NWguMDM0YzIuMjQ0LS4wMTggNC40ODgtLjAyMiA2LjczMi0uMDIyIDIuMjU2IDAgNC41MTIuMDA0IDYuNzY4LjAwNGw2LjcxMy0uMDAzYzIuMjkxIDAgNC41ODIuMDAzIDYuODczLjAxOGguMDI0Yy42ODQgMCAuOTAxLS4xODcuODk1LS45MDItLjAzNC0zLjg3LS4wMTctNy43MzktLjAxNy0xMS42MDkgMC0xLjk2NC4wMDEtMS45MzYgMS45NzQtMS45NjhsLjA1OC0uMDAxYy42MTUgMCAuODA4LjE3My44MDMuODQ1LS4wMzQgNC4yNy0uMDA0IDguNTQxLS4wMyAxMi44MTItLjAwNS42MS4xMjQuODI1Ljc0Ni44MjVoLjA1MWMxLjE5MS0uMDIxIDIuMzg0LS4wMzEgMy41NzYtLjAzMSAxLjIxNSAwIDIuNDMxLjAxIDMuNjQ2LjAyOGwuMDU0LjAwMWMuNjE4IDAgLjkyLS4xNzEuODM2LS44NDctLjAyLS4xNjguMDIxLS4zNDIuMDIzLS41MTQuMDU4LTYuOTkuMi0xMy45ODEuMTQ0LTIwLjk3MS0uMDM5LTQuODY5LTIuNDEtOC41MTQtNi44NzYtMTAuMzg0LTEuODU3LS43NzgtMy43NzYtMS4yMi01LjcxLTEuMjJ6bS0xOS45OTggMzcuOTQ4Yy0uMTg0IDAtLjI5OC4xOC0uNC41MzctLjE2LjU0OC0uMzkgMS4wNzUtLjU4OSAxLjYxMmwtNS43NzIgMTUuNTY2YzIuMzA3LS42NjEgNC40NTctMS4yMyA2LjU3My0xLjkwOC4yNDctLjA3OS40NS0uMTIzLjYyNS0uMTIzLjM5NSAwIC42MzguMjI3Ljg5My43ODcgNC43MjIgMTAuMzY2IDEyLjExNiAxOC4xNzMgMjIuNDE2IDIzLjEyNSA0LjU0MyAyLjE4NCA5LjM2MiAzLjMzNCAxNC40MDggMy41MTlsLjExNS4wMDJjLjU3NCAwIC43NzUtLjE4Ni43NTEtLjg0M2E2OS4yMDkgNjkuMjA5IDAgMCAxLS4wMDMtNC41NTZjLjAxNS0uNTUyLS4xNjYtLjc1Mi0uNjYyLS43NTJsLS4wNTcuMDAxYTE5LjY1IDE5LjY1IDAgMCAxLTMuNjg0LS4yNDRjLTEzLjQ0NC0yLjE2OC0yMi4zODItOS45ODQtMjcuNzktMjIuMjE2LS4yMS0uNDczLS4wODktLjYzNC4zNzItLjc1MyAxLjgtLjQ2NCAzLjU5My0uOTQ5IDUuMzg2LTEuNDM2LjctLjE4OSAxLjM5Mi0uNDA2IDIuMjAyLS42NDUtLjU2LS40NTQtMS4wMDMtLjgxNS0xLjQ0OC0xLjE3MS00LjI3OC0zLjQxMS04LjU2My02LjgxMy0xMi44MjgtMTAuMjQxLS4yMTctLjE3NS0uMzgtLjI2MS0uNTA4LS4yNjF6bTc1Ljc5NSA0LjI1NWgtLjAyYy02LjYzOC4wMTEtMTIuMDEgNS4zOTctMTIuMDA0IDEyLjAzMi4wMDggNi41OTggNS40MjYgMTIuMDIzIDExLjk5OCAxMi4wMjNoLjA0NGM2LjYxMy0uMDI0IDEyLjAxMS01LjQ0MyAxMi4wMTMtMTIuMDYuMDAzLTYuNTk5LTUuNDEzLTExLjk5NS0xMi4wMy0xMS45OTV6bS0xNC4zIDI3LjU2NWMtLjExNiAwLS4yMzMuMDAxLS4zNDkuMDAzLTYuODIzLjExOS0xMS43OTYgNS4wODYtMTEuODI1IDExLjg5My0uMDEzIDIuODM1LS4wMjYgNS42Ny0uMDg4IDguNTA1LS4wOTMgNC4xODItLjA2NyA4LjM2Ni0uMTIgMTIuNTQ5LS4wMDguNTk5LjEwOC44NDEuNzUuODQxaC4wNDFjMS4yOS0uMDIgMi41OC0uMDI4IDMuODctLjAyOCAxLjMxNyAwIDIuNjM1LjAwOSAzLjk1My4wMjZoLjA0NWMuNjI4IDAgLjgzNy0uMTc5LjgzLS44Ni0uMDM0LTMuODY4LS4wMTYtNy43MzctLjAxNi0xMS42MDYgMC0xLjk2OSAwLTEuOTM5IDEuOTYtMS45NzJoLjA1NWMuNjI3IDAgLjgwOC4xODkuODAzLjg1My0uMDMzIDQuMjEyLjAwNCA4LjQyNi0uMDM2IDEyLjYzOC0uMDA2Ljc2MS4yMS45NS45MzEuOTVoLjAzMmMyLjI0My0uMDE3IDQuNDg3LS4wMjEgNi43My0uMDIxIDIuMjU2IDAgNC41MTEuMDA0IDYuNzY3LjAwNCAyLjMwMSAwIDQuNjAxLS4wMDYgNi45MDEtLjAwNiAyLjIgMCA0LjM5OC4wMDUgNi41OTcuMDI3aC4wMzdjLjc4OCAwIC45NDctLjI1OS45NC0xLjAxLS4wMzctMy44MTEtLjAxNy03LjYyMi0uMDE3LTExLjQzNCAwLTIgMC0xLjk3MiAyLjAyMy0yaC4wNWMuNjI2IDAgLjgyMS4xNzkuODE1Ljg1Mi0uMDMyIDQuMjctLjAwNSA4LjU0LS4wMjggMTIuODEtLjAwMy41ODcuMTYuNzc0LjczMy43NzRoLjAzNmMxLjI2My0uMDE3IDIuNTI2LS4wMyAzLjc4OC0uMDMgMS4xMTcgMCAyLjIzMi4wMTEgMy4zNDcuMDM4bC4wODEuMDAxYy43NSAwIC45NS0uMjgzLjk0My0xLjAxOC0uMDE5LTIuMjkyLjAxLTQuNTg0LjAzMS02Ljg3Ni4wNDEtNC42MTIuMDI0LTkuMjI1LjE1MS0xMy44MzQuMTQzLTUuMTc2LTMuMDI5LTkuODE0LTcuOTMzLTExLjQ0My0yLjIzLS43NDEtNC41MjQtLjU2LTYuODA5LS42MTZhMi45NDggMi45NDggMCAwIDAtLjA5NC0uMDAyYy0uNzA5IDAtMS4yOTUuMjAyLTEuOTAyLjU5NC0zLjIwOSAyLjA3OS02LjUwNiAzLjIwOS05LjgzOSAzLjIwOS0yLjY3NiAwLTUuMzc2LS43MjktOC4wNzQtMi4yOC0yLjAyLTEuMTYyLTMuOTQ2LTEuNTMxLTYuMTEtMS41MzF6bS01NS4zNTQtMTAzLjIwM2M5LjkyNSAwIDE4LjAyMSA4LjA2NSAxOC4wNDggMTcuOTc3YTE3Ljg3NCAxNy44NzQgMCAwIDEtMi43MDQgOS41MTdjMi4xNzIuMTcxIDQuMzY2LjcxNiA2LjU0MSAxLjYyNiAxLjg4NS43OSAzLjU0NSAxLjgyMSA0Ljk2IDMuMDU5LjAwMi0uOTAzLS4wMDItMS44NjctLjAxOC0yLjk0My0uMDM0LTIuMzk3Ljk5LTMuOTQ2IDEuODUzLTQuODIzIDEuMjE4LTEuMjM0IDIuODg4LTEuOTE0IDQuNzA2LTEuOTE0LjA1NSAwIC4xNjEuMDAxLjIxNi4wMDMgMTkuNjQxLjU0OCAzNC4zMDQgOC44NTYgNDMuNTgxIDI0LjY5NC40MjEuNzE4LjgxNyAxLjQ1MSAxLjE4NSAyLjE5NC40NDYtLjEyMy44OTMtLjI0NyAxLjMzOC0uMzcyYTYuNjEgNi42MSAwIDAgMSAyLjI0MS0uMzk5IDYuMjkgNi4yOSAwIDAgMSA0LjYzNiAyLjA0NSA2LjMxNSA2LjMxNSAwIDAgMSAuOTczIDcuMDM3IDc4NjguMjk3IDc4NjguMjk3IDAgMCAxLTUuOTEzIDE1Ljk3NyA3LjE0OCA3LjE0OCAwIDAgMS0uMTQyLjQwNWMuMzA0LjI2NS42LjU0MS44ODcuODI4IDMuNDE4IDMuNDA3IDUuMyA3LjkyNiA1LjI5NyAxMi43MjRhMTcuOTQyIDE3Ljk0MiAwIDAgMS0yLjc5NCA5LjYyOGMxLjU4Ni4wNjcgMy4zNTIuMjY1IDUuMTgzLjg3MyA3LjQxOCAyLjQ2NCAxMi4yNTYgOS40MTcgMTIuMDQgMTcuMzAxLS4wOSAzLjIxOS0uMTA3IDYuNTI3LS4xMjUgOS43MjctLjAwNyAxLjMzMi0uMDE0IDIuNjY0LS4wMjUgMy45OTZsLS4wMSAxLjA1OGMtLjAxOSAxLjg4LS4wMzcgMy44MjYtLjAyIDUuNzExLjAyMiAyLjU1NS0xLjA0NyA0LjE3NS0xLjk0OSA1LjA4NS0uODk4LjkwNi0yLjQ5NCAxLjk4Ni00Ljk5NSAxLjk4NmwtLjIyOC0uMDAzYy0uOTg0LS4wMjQtMi4wMy0uMDM2LTMuMi0uMDM2LTEuMjM2IDAtMi40NzMuMDEzLTMuNzEyLjAyOWwtLjExMi4wMDFhNy4yMTcgNy4yMTcgMCAwIDEtMi4yMS0uMzMxIDcuNjUgNy42NSAwIDAgMS0yLjMwNi4zMzlsLS4wOTUtLjAwMWMtMi4xOC0uMDIxLTQuMzU5LS4wMjYtNi41MzktLjAyNmwtMy40NDMuMDAzLTMuNDU4LjAwMy0zLjM4OC0uMDAyLTMuMzc5LS4wMDJjLTIuMjI4IDAtNC40NTYuMDA0LTYuNjc5LjAybC0uMDgzLjAwMWE3LjY1IDcuNjUgMCAwIDEtMi4yODgtLjMzMiA3LjQyNSA3LjQyNSAwIDAgMS0yLjIzOS4zMjlsLS4xMi0uMDAxYTI5NC45MDIgMjk0LjkwMiAwIDAgMC03LjY1Ni4wMDJsLS4xMzMuMDAxYy0yLjQyNyAwLTMuOTgzLTEuMDYtNC44Ni0xLjk0OS0uODgtLjg5MS0xLjkyMy0yLjQ3Ny0xLjg5LTQuOTcuMDIyLTEuNjczLjAzLTMuMzQ3LjA0LTUuMDIxLjAxMS0yLjQ3Ny4wMjUtNS4wMzguMDgxLTcuNTgyLjAzOC0xLjcwNC4wNTctMy40MzYuMDctNS4xMDUtLjA0LjA0NC0uMDguMDg2LS4xMi4xMjctLjg4My45MTUtMi40NSAyLjAwNi00LjkxNSAyLjAwNi0uMTA3IDAtLjIxOS0uMDAyLS4zMzQtLjAwNi01LjkyLS4yMTYtMTEuNTY5LTEuNTk5LTE2Ljc4OC00LjEwNy0xMC4xNjItNC44ODYtMTguMDI1LTEyLjM4My0yMy40Mi0yMi4zMmwtLjkuMjUzYy0uNjM0LjE3Ny0xLjI3OC4zNTgtMS45MzQuNTQ2YTYuMDAyIDYuMDAyIDAgMCAxLTcuMjgtNy44NTNsMi43MjUtNy4zNDkgMi4zMzItNi4yOWE3LjcyIDcuNzIgMCAwIDEtMi4yNTItLjMyMyA3LjIzMyA3LjIzMyAwIDAgMS0yLjE3NC4zMmwtLjExLS4wMDFhMzAzLjM5MiAzMDMuMzkyIDAgMCAwLTMuODE2LS4wMjNjLTEuMzUgMC0yLjcwMi4wMDgtNC4wNDguMDJoLS4wODVjLTIuNDE3IDAtMy45NjItMS4wNS00LjgzMi0xLjkzLS44NzItLjg4Mi0xLjkwNi0yLjQzOS0xLjg3Ny00Ljg0NC4wMy0yLjU0OS4wNDYtNS4wOTguMDYxLTcuNjQ3LjAzLTQuNjY2LjA2LTkuNDkyLjE4LTE0LjI2My4yMzMtOS4zODUgNy43NDMtMTYuNzggMTcuMjAxLTE3LjAzNGExNy45MzMgMTcuOTMzIDAgMCAxLTIuNzg1LTkuNTc1Yy0uMDEtNC44MDkgMS44NjQtOS4zNDQgNS4yOC0xMi43NjkgMy40MDgtMy40MTggNy45MjUtNS4zMDMgMTIuNzIxLTUuMzA1em0zMi4yODQgNjYuNDUxYy4wOSAyLjM1NS0uOTYgMy45MjktMS42MzQgNC42OS0uOSAxLjAxNy0yLjUzNSAyLjIzLTUuMjEgMi4yM2wtLjE0NC0uMDAxYTIzNC4yOTcgMjM0LjI5NyAwIDAgMC0zLjU1Ni0uMDI4Yy0xLjE1NyAwLTIuMzE0LjAwOS0zLjQ2OC4wM2wtLjE1OS4wMDFhNy4zIDcuMyAwIDAgMS0yLjE5LS4zMjIgNy42MzYgNy42MzYgMCAwIDEtMi4yMzkuMzJoLS4wNjNhMTAzNy44NyAxMDM3Ljg3IDAgMCAwLTYuODM0LS4wMThoLS42NzJsMS41NSAxLjIzNSAzLjI3IDIuNjA2Yy4zMTIuMjQ4LjYyLjQ5OC45NjYuNzc5bC41MTcuNDE5YTYuMDAxIDYuMDAxIDAgMCAxLTIuMDggMTAuNDIxbC0uNzI1LjIxNS0uMzk2LjExOGM0Ljc2MiA3LjMzNSAxMS40MjIgMTEuNjE5IDIwLjIxMyAxMy4wMzdhMTMuNjYzIDEzLjY2MyAwIDAgMCAyLjU1My4xNjlsLjIzMS0uMDAzYzEuODY2IDAgMy41NzYuNzAxIDQuODEyIDEuOTczYTYuNDcxIDYuNDcxIDAgMCAxIDEuNzIgMy4zMDhjMi42NjgtNS45OTcgOC41MDMtMTAuMDk2IDE1LjYzMi0xMC40MDdhMTcuOTQxIDE3Ljk0MSAwIDAgMS0yLjc0OC05LjU0NmMtLjAwOS03Ljg5NSA1LjA5MS0xNC42MjggMTIuMTc3LTE3LjA2NWEzNTkyLjE2MSAzNTkyLjE2MSAwIDAgMC00LjEyNi0zLjI4MmwtMS42ODItMS4zMzdhNiA2IDAgMCAxLTIuNTA1LTguMDg0bC4wNjItLjExOS4wNTctLjEwOGE2IDYgMCAwIDEgMy43MjUtMy4wMDJsLjc3Ny0uMjE0YTI3LjIyMiAyNy4yMjIgMCAwIDAtMS41OTgtMi4wNzdjLTUuNTU0LTYuNTQxLTEyLjUtMTAuMzEzLTIxLjIzNC0xMS41MzItMS4yMjMtLjE3LTIuNTY2LS4yMjctMy45ODktLjI4OGwtLjA1Ny0uMDAzYTcuNDI3IDcuNDI3IDAgMCAxLTEuMzgtLjE4NiAxOS4wNyAxOS4wNyAwIDAgMSAuNTg2IDQuNjExYy4wNCA0Ljk4MS0uMDIgMTAuMDE1LS4wNzggMTQuODgzLS4wMjUgMi4wNjItLjA1IDQuMTI0LS4wNjYgNi4xODZhNy4yNDEgNy4yNDEgMCAwIDEtLjAxNS4zOTF6Ii8+PC9kZWZzPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NzUgLTIxKSI+PHVzZSBmaWxsPSIjNDg2ZmJlIiB4bGluazpocmVmPSIjOG5rZWEiLz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "./static/images/nav-logo.png":
/*!************************************!*\
  !*** ./static/images/nav-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAMAAACJUtIoAAAAAXNSR0IB2cksfwAAAtZQTFRFAAAARnK0RnG0RnG0RnC1RXG1RXG0RnO5RnS5RnG0RnG1RXC0RnC0RnO1RnO0RnG0RnG1RXC1TXe7gIC/R3G2RnG1R3K2gID/RXC0RnG1RnC0RnC1R3C4TYDMRnG1R3K1SHO3RXG0RnC0SXG2SHa3RnG0S3i0RnC1R3G4RnG1RnC1TXO/RnK1SXO2RXC0RnG0UXm8RnG1RnG0R3C4R3K4RXG1Tna6RnG1R3G2RXC0SYC2RXG0SXK2SnG1RXG0RnG0SnW1RnG1RnC1RXC1RXK1R3K0SZK2RXK1RXG1RnG0RnG1RnC2////VYDVVar/TnbEUIC/VXHGVXe7ZpnMRnS5RnS1R3G4RnK5SnK1RXW1VYC/R3C1RnC0RnG1RXG1RnG1RnK1R3G1R3G4RnG0YIC/SXK2RnG1RnG1RnC0RXG1RnG0SHO3SHS3RXC0RXK1RnG1RnO1RXG1RnC1RnG0RXG1RnG0RnG3RXC0RXG1RnK2R3C1RnG1RnC1S3G0RXG0RnG0RnC0RnG1RXK0RXG2RnG1RXG0RXC1SHi3R3G2RXG1SnG1RnC1RXG1RnG1RnG1SHK3RXC1RnG1R3G1RnC1RnG0RXG1SHO1RnO2RXC1RnK1RnG0SHK3RXG0R3G1R3G0RnG0RnC0SXa2R3C0SHS3R3G0RnC1RXG0RnG1RnK0RnS5RnG1RXG1RnK2RXC2R3G1RnG0R3G1RXC0RXC0S3a0RnK2RnG0RnG3RnC1THW6RnG2R3K2RnG1SXm2RXG1R3C1RnK0RnC1R3G1RnC1RXK0RnC1SHO0RXC0RXC0RXG0THG9R3G4RnC2R3G1RnG0SXW2RXC1RXC1RnO2RXC0RXG0RnC0RXC2R3K1RnG0R3K0RXG1RnS5RnC0RXG2R3G4Tnq8R3C1RnC2SnO1RnG1RnG1RnG1RnK1RnC1RnK2RXK1RnG0RXC0RnC1RnC1RXG3RnK2RnC2RXG1RnG1QilQvQAAAPJ0Uk5TADrN8vHwvCgLme3z00UzwvStHgRz5nAC/7N02BkKspQ89vU/J9sRryviyBR5Ku/XE6z5Mi/LGoN66A6qMS3kyRh4hvpyggdgnqelVAEGAw0QCQ8FLDc2HSYwDGSWucfFgEgSqwg4daPGwKA1LuWbvT6p4+7gml/szmKN57YijN78vlVGsOumIGyQNPjZh3xD/nFvuv37WVDWbsxKhVZE1G0cSzl+3LW3pCGKtFd9T65asbgpi2NYwSVNZZUV0p97f2HqXN9Sv8OIGz1CaGYja8pJ4ZOdO1PQQfcWj4EkF11bH8TpnEzRkme72pihUWmE1Y5F4ShFAAAHKElEQVR4nM2Z+VsTRxjHRw0QAQETkQVMFZTIIacYxXJZKwpCCEdQsAalqKDWC4RSRdHKoUZLETxQoSgiWq1VW28rtVartfRCrUdtpVotao//oDnmnZ1ssmmS51H6/rQz35l3PpmdeeedDUIa69O3n8BOILB3QDaYsL+jprOT8wAe3cXVTet8oAgh8SD3fnZ2AvfBHhY57svozVNsA5YX7uw9xKQseQXrQz3QMB/9o+9wSxyPsMM9/aQ2YI3EnRkXk7J/AJYDg9BgaDrKEsfBIbh1aJgNWOG4c8Rok3KkO9bHyNBYwBpnieMhUYA13gasVwEr2qQcE4v1uHgWa4JFnl/TN574ug1U1mBNsg4rYfKUxKTE/lOT/19YCHkkpCTYwvSCsaw1eapUoUjjx0pIVyjSUyzEykhVKBTjM4xHSchUKpXB+qglc1FmZU2j1enKLGV2DlXhMOONmSpVbvis2XkIvWmElT9n7jzXAlXh/MELxGjhW+axgoYPWmSvylUtnuK1hBOfREuXhRSFFC/XxoeSuNKQoqK3y8g6G/+On0ZcsdIfKspXrQb3FWvWoiQu1rvrIOAwlVUx1QHmsKQ1rj5QyfgunkH/+OR5uH49QhtwaN04B9S5WLTHi2+qmqHMZxQHS7LJjtZDN3ubwXqvgDGwWntqJchWgI9U9D60qMOixxZc4ZStK5e5GXpinGppLMk8jlzfwI+1VcBwLWobwQouwnXb89COeg6WsBFXhOgOl51FRp4YGmsXn2wCa7cxFcOUNgHW9Epc1SxFHwDWDiymwjkeoj1cWrbzDqvD2hNhOdbeUpPtvKstwcohs6XFamW77wtPaoui3GmxyNRqdkNuVWIBDcnFSt9PpKi29rYVpLTIaqwW2O1MaU1QforkwMEG4k2LVQK9mbgBqSkpqXM+5Mc6hNck43OwWpIiER2GrWK3xFqsGeDX7SPYp4RLgyX2hEKjTC9LjvBhCWGyfD/GrvY44pqhciuxjoJfmGiUc4zCCi6G59mgHycLiIM1Gu/o2k/I1huLx/YTWYclg9zJLZL4+nQioGSjEzB1J0lYTJ7PgwWRKFZEXJ3C66v2tHVYTRCzCuTEVzSgRkSyG6KVyOgMDxa83SPyDDDxSVw3KdkqrDKYmbPssOfOA1YM+gw/1q9l9eGmw2lOM35ULz2CLTwcduPRNKuwLoBbKhfPcAWszHzYd459WD0SxjLEOsAGBGNrDrMKqwP6fc4Oy+bywQp4CRezWDnT9FGdzZ7QxlbqbwVWNBoK/b6gsKoIVjpM3KVMVubJtzZsNIMliLECKxstMoHlAUFDgwWztZrC8jc9W1+ycdjYlgqteomzoF8ZO2yaimApYLYqlazuAoHLEKsJzqWLl08a2pXFX11FtmFRSz4etlSEf9pKaHqN1b+GM4aztuAlHk2XGlpeKu5pMdb1CvxMBQg2bsUgyLVqd7P6N4BiiNV5ET8WID4zifUtFvO/Y7G+h+1DhdOt8LM14ZQM28EuPbIeDbHyIV+qPEWRZGw7U24eC95T0A8s1lUINr7k8BGTw0Vz+Gwlhw+8CBRP8n5OlIfQW1HDUqX9qNkuHSJzWJ5YJFm09qgmGUIXeLpBrhPao/oSfm44DfoEkLlYN+E5lMyPsEtXcesnY6w6wIq4rr2fyUtIkqzFIgfcbZyNtMDm02HJSRqz/bheH8DeNzhYd0KhUIjTUeFyXKE6Z4S1AzYOU1F4d9X6K7DI9Vjxy6AkuPdzmPT+aRWRdWngL6S396+yvLwHcx1ZnZsGehHF+Xp5njR+50woL6s2wtp5m+ExXdI8gSrHdYfSuhZL0s2WiwsKDM49LtZ96jL2W2C3H1t6mGaEFVbM8JgOS5rLJ+uvGDdMXWYIluGHpGGVphvemma8ttB6PreCBdq2fdz59AbdZ7c6YwG/WE0efQ+qLuhji5MpP6FwgzXAeqDmtIKyQH/bfxRrqP/+GEeFWv31tnWiob4Gsh1XBXoClV76gQ+Z+I1/TDcVtxBS9tCtbi2EnxiOv0qMXkPrPTeC8AraotDrk/1ofeS5E/hpnOaejDEuwSft6HWcpRwwiUQ8Dhbyb4egUN93cwuaNj/UT+13fjncKpG0phAie+zTEZqL9syenp7mZ+TrucMuZxilsUaIhJsb96n3jWnVZgWzPdU9PWpPcnFG4ueJAYTJp3sT/TGq0xALZUT++bgqKfGpV5PuKJcf6CzvFFHtUdC1urOJSVV3S4J1RUV5eecD+lO7aM/hKVXt7X8911/LZJr++IKWU64x+rMMynA41NFV1Z70bNOTvXdogU0y/s6DKg9Nxi9HZkzbwNw3TbFGN9ffqDHnL4G0R4Pg1GScbfnS/GJsFLXg7HsbhrXLFNY/vQ3D2n4Ky6K/Yl6OtbFUA1N6G4Y1Njiqj/c2C2X9gepYTG+j0CZ7OCZQFdjddTPnv9u+PPsXWs8bc0MX45QAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/skills.svg":
/*!**********************************!*\
  !*** ./static/images/skills.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTU1IiBoZWlnaHQ9IjEzOSIgdmlld0JveD0iMCAwIDE1NSAxMzkiPjxkZWZzPjxwYXRoIGlkPSIyYW9zYSIgZD0iTTg3Ny42NDQgMTEyLjQzYzE1LjU3NyAxLjM5NyAyNy44MjYgMTQuNTIyIDI3LjgyNyAzMC40NTZ2MTQuNzk1YTMuMDEzIDMuMDEzIDAgMCAxLTMuMDEyIDMuMDEzaC04MS45MDRhMy4wMTMgMy4wMTMgMCAwIDEtMy4wMTMtMy4wMTN2LTE0Ljc5NWMwLTE1LjkzNCAxMi4yNS0yOS4wNTkgMjcuODI3LTMwLjQ1OGEzLjA0IDMuMDQgMCAwIDEgMS4zLS4wOWwuMTUyLS4wMDVjLTMuOTEtMy44MjItNi4zNDYtOS4xNDgtNi4zNDYtMTUuMDM2VjgxLjAwNWMwLTkuMjI1IDcuNTA1LTE2LjczIDE2LjczMS0xNi43M2gyMi4zMmEzLjAxNCAzLjAxNCAwIDAgMSAzLjAxMiAzLjAxM3YzMC4wMWMwIDUuODg3LTIuNDM1IDExLjIxNC02LjM0NiAxNS4wMzVsLjE1Mi4wMDVhMy4wMjUgMy4wMjUgMCAwIDEgMS4zLjA5MXptLTMxLjE0My0yNi42NzdoMjIuNjIyYzQuMDc0IDAgNy4zODgtMy4zMTQgNy4zODgtNy4zODh2LTguMDY0aC0xOS4zMDZjLTUuOTAzIDAtMTAuNzA0IDQuODAyLTEwLjcwNCAxMC43MDR6bTAgMTEuNTQ1YzAgOC4yNzQgNi43MzEgMTUuMDA1IDE1LjAwNSAxNS4wMDUgOC4yNzQgMCAxNS4wMDUtNi43MzIgMTUuMDA1LTE1LjAwNnYtNy43NDNhMTMuMzM1IDEzLjMzNSAwIDAgMS03LjM4OCAyLjIyNmgtMjIuNjIyem03LjAwMyAyMS4wMzFsOC4wMDMgOC4wMDMgOC4wMDEtOC4wMDN6bTQ1Ljk0MSAyNC41NTdjMC0xMi41MzgtOS40NDktMjIuOTA2LTIxLjU5OS0yNC4zNzJsLTE0LjIxIDE0LjIxYTIuOTk3IDIuOTk3IDAgMCAxLTIuMTI5Ljg4MiAzIDMgMCAwIDEtMi4xMy0uODgzbC0xNC4yMS0xNC4yMDljLTExLjE5NCAxLjM1MS0yMC4wODggMTAuMjU4LTIxLjQyIDIxLjQ1NmgyNC40MWEzLjAxNCAzLjAxNCAwIDAgMSAwIDYuMDI3aC0yNC41ODl2OC42NzFoNzUuODc3eiIvPjxwYXRoIGlkPSIyYW9zYiIgZD0iTTg2MS41NDUgMjIuNjk0Yy02LjMxMyAwLTExLjQ1IDUuMTM3LTExLjQ1IDExLjQ1IDAgNS4yNzEgMy41OCA5LjcxOCA4LjQzNiAxMS4wNDV2Ny4zNThhMy4wMTQgMy4wMTQgMCAwIDAgNi4wMjcgMHYtNy4zNThjNC44NTYtMS4zMjcgOC40MzYtNS43NzQgOC40MzYtMTEuMDQ1IDAtNi4zMTMtNS4xMzYtMTEuNDUtMTEuNDUtMTEuNDV6bTAgMTYuODc0YTUuNDMgNS40MyAwIDAgMS01LjQyNC01LjQyNCA1LjQzIDUuNDMgMCAwIDEgNS40MjQtNS40MjMgNS40MyA1LjQzIDAgMCAxIDUuNDI0IDUuNDIzIDUuNDMgNS40MyAwIDAgMS01LjQyNCA1LjQyNHoiLz48cGF0aCBpZD0iMmFvc2MiIGQ9Ik05MjIuMDM0IDQ2LjE5N2ExMS4zNzQgMTEuMzc0IDAgMCAwLTguMDk2LTMuMzUzIDExLjM3NSAxMS4zNzUgMCAwIDAtOC4wOTcgMy4zNTRjLTMuNzI2IDMuNzI2LTQuMzM5IDkuNDAzLTEuODQzIDEzLjc3NWwtNS4yMDQgNS4yMDNhMy4wMTUgMy4wMTUgMCAwIDAgMi4xMzEgNS4xNDRjLjc3MSAwIDEuNTQyLS4yOTQgMi4xMy0uODgybDUuMjAxLTUuMjAyYTExLjM4IDExLjM4IDAgMCAwIDUuNjgyIDEuNTA4YzMuMDYgMCA1LjkzNC0xLjE5MiA4LjA5Ni0zLjM1NGExMS4zNzMgMTEuMzczIDAgMCAwIDMuMzU0LTguMDk2YzAtMy4wNi0xLjE5LTUuOTM0LTMuMzU0LTguMDk3em0tNC4yNiAxMS45MzJhNS40MjkgNS40MjkgMCAwIDEtNy42NyAwIDUuNDMgNS40MyAwIDAgMSAwLTcuNjcgNS40MDUgNS40MDUgMCAwIDEgMy44MzQtMS41ODZjMS4zOSAwIDIuNzc4LjUyOCAzLjgzNSAxLjU4NmE1LjM4OSA1LjM4OSAwIDAgMSAxLjU5IDMuODM1IDUuMzg5IDUuMzg5IDAgMCAxLTEuNTkgMy44MzV6Ii8+PHBhdGggaWQ9IjJhb3NkIiBkPSJNOTI3LjE5MiA5NS4yNmMtNS4yNyAwLTkuNzE5IDMuNTgtMTEuMDQ1IDguNDM2aC03LjM1OGEzLjAxNSAzLjAxNSAwIDAgMCAwIDYuMDI3aDcuMzU4YzEuMzI2IDQuODU2IDUuNzc0IDguNDM2IDExLjA0NSA4LjQzNiA2LjMxMyAwIDExLjQ1LTUuMTM2IDExLjQ1LTExLjQ1IDAtNi4zMTMtNS4xMzctMTEuNDUtMTEuNDUtMTEuNDV6bTAgMTYuODczYTUuNDMgNS40MyAwIDAgMS01LjQyNC01LjQyMyA1LjQzIDUuNDMgMCAwIDEgNS40MjQtNS40MjQgNS40MyA1LjQzIDAgMCAxIDUuNDIzIDUuNDI0IDUuNDMgNS40MyAwIDAgMS01LjQyMyA1LjQyM3oiLz48cGF0aCBpZD0iMmFvc2UiIGQ9Ik04MTQuMjI0IDEwMy42MmgtNy4zNTljLTEuMzI2LTQuODU2LTUuNzczLTguNDM3LTExLjA0NC04LjQzNy02LjMxMyAwLTExLjQ1IDUuMTM3LTExLjQ1IDExLjQ1IDAgNi4zMTQgNS4xMzcgMTEuNDUgMTEuNDUgMTEuNDUgNS4yNzEgMCA5LjcxOC0zLjU4MSAxMS4wNDQtOC40MzdoNy4zNmEzLjAxNCAzLjAxNCAwIDAgMCAwLTYuMDI2em0tMTguNDAzIDguNDM3YTUuNDMgNS40MyAwIDAgMS01LjQyNC01LjQyNCA1LjQzIDUuNDMgMCAwIDEgNS40MjQtNS40MjMgNS40MyA1LjQzIDAgMCAxIDUuNDIzIDUuNDIzIDUuNDMgNS40MyAwIDAgMS01LjQyMyA1LjQyNHoiLz48cGF0aCBpZD0iMmFvc2YiIGQ9Ik04MjQuMDM3IDY0Ljg4NmwtNS4yMDItNS4yMDFhMTEuMzc4IDExLjM3OCAwIDAgMCAxLjUwNy01LjY4MWMwLTMuMDYtMS4xOTEtNS45MzUtMy4zNTMtOC4wOTdhMTEuMzc1IDExLjM3NSAwIDAgMC04LjA5Ny0zLjM1NCAxMS4zNyAxMS4zNyAwIDAgMC04LjA5NiAzLjM1NGMtNC40NjMgNC40NjQtNC40NjMgMTEuNzI4IDAgMTYuMTkzYTExLjM3NCAxMS4zNzQgMCAwIDAgOC4wOTYgMy4zNTNjMi4wMjYgMCAzLjk3LS41MjYgNS42ODItMS41MDdsNS4yIDUuMmEzLjAwNiAzLjAwNiAwIDAgMCAyLjEzMi44ODQgMy4wMTQgMy4wMTQgMCAwIDAgMi4xMzEtNS4xNDR6bS0xMS4zMDgtNy4wNWMwIC4wMDItLjAwMS4wMDItLjAwMi4wMDNhNS40MjggNS40MjggMCAwIDEtNy42NyAwIDUuNDMxIDUuNDMxIDAgMCAxIDAtNy42NzEgNS40MDkgNS40MDkgMCAwIDEgMy44MzUtMS41ODZjMS4zOSAwIDIuNzc4LjUyOSAzLjgzNSAxLjU4NmE1LjM4OSA1LjM4OSAwIDAgMSAxLjU4OSAzLjgzNiA1LjM5IDUuMzkgMCAwIDEtMS41ODcgMy44MzN6Ii8+PC9kZWZzPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03ODQgLTIyKSI+PHVzZSBmaWxsPSIjNDg2ZmJlIiB4bGluazpocmVmPSIjMmFvc2EiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc4NCAtMjIpIj48dXNlIGZpbGw9IiM0ODZmYmUiIHhsaW5rOmhyZWY9IiMyYW9zYiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzg0IC0yMikiPjx1c2UgZmlsbD0iIzQ4NmZiZSIgeGxpbms6aHJlZj0iIzJhb3NjIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03ODQgLTIyKSI+PHVzZSBmaWxsPSIjNDg2ZmJlIiB4bGluazpocmVmPSIjMmFvc2QiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc4NCAtMjIpIj48dXNlIGZpbGw9IiM0ODZmYmUiIHhsaW5rOmhyZWY9IiMyYW9zZSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzg0IC0yMikiPjx1c2UgZmlsbD0iIzQ4NmZiZSIgeGxpbms6aHJlZj0iIzJhb3NmIi8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./static/images/skills_phone.png":
/*!****************************************!*\
  !*** ./static/images/skills_phone.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/skills_phone-04ff99eb00d01a57e1c023597ca838dd.png";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomdringer/Sites/juddlecom/app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookie-consent":
/*!***************************************!*\
  !*** external "react-cookie-consent" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-mailchimp-form":
/*!***************************************!*\
  !*** external "react-mailchimp-form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-form");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map