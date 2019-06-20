webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/images/nav-logo.png */ "./static/images/nav-logo.png");
/* harmony import */ var _static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_contactform_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/contactform.jsx */ "./components/contactform.jsx");
/* harmony import */ var _static_images_bubble_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/images/bubble.png */ "./static/images/bubble.png");
/* harmony import */ var _static_images_bubble_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_bubble_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_feature__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/feature */ "./components/feature.jsx");
/* harmony import */ var _static_images_skills_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/images/skills.svg */ "./static/images/skills.svg");
/* harmony import */ var _static_images_skills_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_images_skills_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_images_location_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/images/location.svg */ "./static/images/location.svg");
/* harmony import */ var _static_images_location_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_images_matching_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/images/matching.svg */ "./static/images/matching.svg");
/* harmony import */ var _static_images_matching_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_images_matching_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_images_chat_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/images/chat.svg */ "./static/images/chat.svg");
/* harmony import */ var _static_images_chat_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_images_chat_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/images/match_phone.png */ "./static/images/match_phone.png");
/* harmony import */ var _static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/images/chat_phone.png */ "./static/images/chat_phone.png");
/* harmony import */ var _static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/images/skills_phone.png */ "./static/images/skills_phone.png");
/* harmony import */ var _static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_images_bg1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/images/bg1.png */ "./static/images/bg1.png");
/* harmony import */ var _static_images_bg1_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_images_bg1_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../static/images/juddle_demo_request.png */ "./static/images/juddle_demo_request.png");
/* harmony import */ var _static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_26__);









var _jsxFileName = "/Users/tomdringer/Sites/juddlecom/app/pages/index.js";


















var FooterBlock = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].footer.withConfig({
  displayName: "pages__FooterBlock",
  componentId: "sc-1cvwks4-0"
})(["background:#000;color:#fff;div.container{display:flex;height:143px;align-content:center;flex-direction:column;padding:30px;box-sizing:border-box;}div#year{margin-bottom:20px;}p{white-space:pre-wrap;}a{color:#fff;}a:hover{text-decoration:underline;}"]);
var Bg = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].div.withConfig({
  displayName: "pages__Bg",
  componentId: "sc-1cvwks4-1"
})(["background:url(", ") no-repeat;background-size:cover;"], _static_images_bg1_png__WEBPACK_IMPORTED_MODULE_23___default.a);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1cvwks4-2"
})(["color:#ffffff;font-family:\"Helvetica Neue\";font-size:7vh;font-weight:700;letter-spacing:-1.5px;letter-spacing:-1.5px;line-height:64px;text-align:center;"]);
var P = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].p.withConfig({
  displayName: "pages__P",
  componentId: "sc-1cvwks4-3"
})(["font-family:\"Helvetica Neue\";font-size:3vh;text-align:center;font-weight:400;letter-spacing:-0.75px;color:#fff;"]);
var JuddleButton = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].button.withConfig({
  displayName: "pages__JuddleButton",
  componentId: "sc-1cvwks4-4"
})(["border-radius:5px;background-color:transparent;color:#fff;border:solid 1px #fff;width:50vh;padding:2vh 0;font-family:\"Helvetica Neue\";font-size:3vh;margin:20px 0;", ""], function (props) {
  return props.primary && Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["css"])(["background-color:#4170b4;border:none;margin:20px 0;"]);
});
var juddleButtonSmall = {
  width: '20vh',
  flexBasis: 'min-content',
  padding: '10px 15px',
  margin: '0'
};
var SpeechBubble = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].img.withConfig({
  displayName: "pages__SpeechBubble",
  componentId: "sc-1cvwks4-5"
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
      react_ga__WEBPACK_IMPORTED_MODULE_24__["default"].initialize('UA-59596713-2');
      react_ga__WEBPACK_IMPORTED_MODULE_24__["default"].pageview(window.location.hostname + _static_images_location_svg__WEBPACK_IMPORTED_MODULE_17___default.a.pathname + _static_images_location_svg__WEBPACK_IMPORTED_MODULE_17___default.a.search);
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
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
        light: true,
        className: "navbar navbar-expand-md pt-3 pb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavbarBrand"], {
        style: NavBarStyles,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: _static_images_nav_logo_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "Juddle",
        height: "50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
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
          lineNumber: 168
        },
        __self: this
      }, "View A Demo"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(MainBody, {
        navmenu: this.props.navmenu,
        toggleModal: this.toggleModal,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(FooterBlock, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        fluid: this.props.fluid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "year",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "\xA9 ", new Date().getFullYear(), " Juddle"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "cookiesPrivacyTerms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "/info.htm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Cookies, Privacy and Terms")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ContactFormModal, {
        modal: this.state.modal,
        toggleModal: this.toggleModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
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
            lineNumber: 231
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_cookie_consent__WEBPACK_IMPORTED_MODULE_26___default.a, {
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
            lineNumber: 232
          },
          __self: this
        }, "This website uses cookies and analytics to enhance the user experience.", " "), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Bg, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          style: containerStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(SpeechBubble, {
          src: _static_images_bubble_png__WEBPACK_IMPORTED_MODULE_14___default.a,
          alt: "juddle bubble",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, "Match and Chat with employers"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: this
        }, "Juddle is an on-demand job site that allows you to connect directly with employers based on your skills and chat within minutes."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(JuddleButton, {
          primary: true,
          onClick: this.props.toggleModal,
          modal: this.props.modal,
          toggleModal: this.props.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, "Request A Demo")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dark: false,
          h2: "You're in control",
          image: _static_images_skills_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
          h3: "Skills",
          para: "Use your skills and not a CV to match with employers",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dark: true,
          image: _static_images_location_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
          h3: "Location",
          para: "Juddle picks up your location to show the jobs nearest you",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dark: false,
          image: _static_images_matching_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
          h3: "Matching",
          para: "We use artificial intelligence and machine learning to match you directly to the right employers.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dark: true,
          image: _static_images_chat_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
          h3: "Chat",
          para: "We allow you to chat directly with the employer straight after matching, getting you the job quicker",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dark: false,
          h2: "Match Directly with Employers",
          image: _static_images_match_phone_png__WEBPACK_IMPORTED_MODULE_20___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dark: true,
          h2: "Chat instantly with Employers",
          image: _static_images_chat_phone_png__WEBPACK_IMPORTED_MODULE_21___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_feature__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dark: false,
          h2: "Use Skills to find the right people",
          image: _static_images_skills_phone_png__WEBPACK_IMPORTED_MODULE_22___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 309
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
            lineNumber: 319
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
            lineNumber: 325
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          xs: "12",
          md: "9",
          lg: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 327
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
      if (this.props.providers === null) return null;
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
        src: _static_images_juddle_demo_request_png__WEBPACK_IMPORTED_MODULE_25___default.a,
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
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_contactform_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], {
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

/***/ })

})
//# sourceMappingURL=index.js.cc38032b871529d38638.hot-update.js.map