webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "./config.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styles_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/media */ "./styles/media.js");
/* harmony import */ var styles_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/mixins */ "./styles/mixins.js");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/theme */ "./styles/theme.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Hank\\Documents\\website-development\\projects\\portafolio\\components\\Nav.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: none;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["display: flex;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["padding: 0 25px;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["padding: 0 40px;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var colors = styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].colors,
    fontSizes = styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSizes,
    fonts = styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fonts;
var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].header.withConfig({
  displayName: "Nav__StyledContainer",
  componentId: "sc-1t8un2q-0"
})(["", ";position:fixed;top:0;padding:0px 50px;background-color:", ";transition:", ";z-index:11;filter:none;pointer-events:auto;user-select:auto;width:100%;height:", ";box-shadow:", ";transform:translateY( ", " );", ";", ";"], styles_mixins__WEBPACK_IMPORTED_MODULE_7__["default"].flexBetween, colors.navy, styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].transition, function (props) {
  return props.scrollDirection === 'none' ? styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].navHeight : styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].navScrollHeight;
}, function (props) {
  return props.scrollDirection === 'up' ? "0 10px 30px -10px ".concat(colors.shadowNavy) : 'none';
}, function (props) {
  return props.scrollDirection === 'down' ? "-".concat(styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].navScrollHeight) : '0px';
}, styles_media__WEBPACK_IMPORTED_MODULE_6__["default"].desktop1200(_templateObject()), styles_media__WEBPACK_IMPORTED_MODULE_6__["default"].tablet768(_templateObject2()));
_c = StyledContainer;
var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav.withConfig({
  displayName: "Nav__StyledNav",
  componentId: "sc-1t8un2q-1"
})(["", ";position:relative;width:100%;color:", ";font-family:", ";counter-reset:item 0;z-index:12;"], styles_mixins__WEBPACK_IMPORTED_MODULE_7__["default"].flexBetween, colors.lightSlate, fonts.SFMono);
_c2 = StyledNav;
var StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "Nav__StyledLogo",
  componentId: "sc-1t8un2q-2"
})(["", ";font-size:", ";transition:visibility 0.1s ease-in-out;visibility:", ";&:before{content:'<';color:", ";margin-right:5px;}&:after{content:'/>';color:", ";}&:hover,&:focus{svg{fill:", ";}}"], styles_mixins__WEBPACK_IMPORTED_MODULE_7__["default"].flexCenter, fontSizes.lg, function (props) {
  return props.menuOpen ? 'hidden' : 'visible';
}, colors.green, colors.green, colors.transGreen);
_c3 = StyledLogo;
var StyledHamburger = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Nav__StyledHamburger",
  componentId: "sc-1t8un2q-3"
})(["", ";overflow:visible;margin:0 -12px 0 0;padding:25px 10px 10px 10px;cursor:pointer;text-transform:none;color:inherit;border:0;background-color:transparent;display:none;", ";"], styles_mixins__WEBPACK_IMPORTED_MODULE_7__["default"].flexCenter, styles_media__WEBPACK_IMPORTED_MODULE_6__["default"].tablet768(_templateObject3()));
_c4 = StyledHamburger;
var StyledHamburgerBox = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Nav__StyledHamburgerBox",
  componentId: "sc-1t8un2q-4"
})(["position:relative;display:inline-block;width:", "px;height:24px;"], styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].hamburgerWidth);
_c5 = StyledHamburgerBox;
var StyledHamburgerInner = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Nav__StyledHamburgerInner",
  componentId: "sc-1t8un2q-5"
})(["position:absolute;background-color:", ";width:", "px;height:2px;", ";transition:transform 0.3s ease-in-out;transform:", ";&:before,&:after{content:'';display:block;background-color:", ";position:absolute;right:0;width:", "px;height:2px;border-radius:4px;transition:all 0.3s linear;}&:before{width:", ";top:", ";opacity:", ";transform:", ";}&:after{width:", ";bottom:", ";transform:", ";}"], colors.green, styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].hamburgerWidth, styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].borderRadius, function (props) {
  return props.menuOpen ? 'rotate(55deg)' : 'rotate(0)';
}, colors.green, styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].hamburgerWidth, function (props) {
  return props.menuOpen ? "100%" : "120%";
}, function (props) {
  return props.menuOpen ? "0" : "-10px";
}, function (props) {
  return props.menuOpen ? 0 : 1;
}, function (props) {
  return props.menuOpen ? 'traslateY(10px)' : 'traslateY(0)';
}, function (props) {
  return props.menuOpen ? "100%" : "120%";
}, function (props) {
  return props.menuOpen ? "0" : "-10px";
}, function (props) {
  return props.menuOpen ? 'rotate(-105deg)' : 'rotate(0)';
});
_c6 = StyledHamburgerInner;
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "Nav__StyledLink",
  componentId: "sc-1t8un2q-6"
})(["display:flex;align-items:center;", ";"], styles_media__WEBPACK_IMPORTED_MODULE_6__["default"].tablet768(_templateObject4()));
_c7 = StyledLink;
var StyledList = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].ol.withConfig({
  displayName: "Nav__StyledList",
  componentId: "sc-1t8un2q-7"
})(["", ";padding:0;margin:0;list-style:none;"], styles_mixins__WEBPACK_IMPORTED_MODULE_7__["default"].flexBetween);
_c8 = StyledList;
var StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "Nav__StyledListItem",
  componentId: "sc-1t8un2q-8"
})(["margin:0 10px;position:relative;font-size:", ";counter-increment:item 1;&:before{content:'0' counter(item) '.';text-align:right;color:", ";font-size:", ";}"], fontSizes.md, colors.green, fontSizes.sm);
_c9 = StyledListItem;
var StyledListLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "Nav__StyledListLink",
  componentId: "sc-1t8un2q-9"
})(["padding:12px 10px;"]); // const StyledResumeButton = styled.a`
// 	${mixins.smallButton};
// 	margin-left: 10px;
// 	font-size: ${fontSizes.xs};
// `;

_c10 = StyledListLink;
var DELTA = 10;

var Nav = function Nav() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none'),
      scrollDirection = _useState2[0],
      setScrollDirection = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      lastScrollTop = _useState3[0],
      setLastScrollTop = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', function () {
      return handleScroll();
    });
    window.addEventListener('resize', function () {
      return handleResize();
    });
    window.addEventListener('keyDown', function (event) {
      return handleKeyDown(event);
    });
    return function () {
      window.removeEventListener('scroll', function () {
        return handleScroll();
      });
      window.removeEventListener('resize', function () {
        return handleResize();
      });
      window.removeEventListener('keyDown', function (event) {
        return handleKeyDown(event);
      });
    };
  }, [lastScrollTop]);

  var handleScroll = function handleScroll() {
    var fromTop = window.scrollY;
    var innerHeight = window.innerHeight;
    var scrollHeight = document.body.scrollHeight;

    if (fromTop < DELTA) {
      setScrollDirection('none');
    } else if (fromTop > lastScrollTop && fromTop > config__WEBPACK_IMPORTED_MODULE_2__["navHeight"]) {
      if (scrollDirection !== 'down') {
        setScrollDirection('down');
      }
    } else if (fromTop + innerHeight < scrollHeight) {
      if (scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    }

    setLastScrollTop(fromTop);
  };

  var handleOverflow = function handleOverflow() {
    if (menuOpen) {
      document.body.classList.remove("blur", "hidden");
    }

    if (!menuOpen) {
      document.body.classList.add("blur", "hidden");
    }
  };

  var handleMenuOpen = function handleMenuOpen() {
    setMenuOpen(!menuOpen);
    handleOverflow();
  };

  var handleResize = function handleResize() {
    var intViewportWidth = window.innerWidth;

    if (intViewportWidth > 768 && menuOpen) {
      setMenuOpen(!menuOpen);
      handleOverflow();
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!menuOpen) {
      return;
    }

    if (event.key === 'Escape') {
      setMenuOpen(!menuOpen);
    }
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isMounted = _useState4[0],
      setIsMounted = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timeout = setTimeout(function () {
      return setIsMounted(true);
    }, 1000);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return __jsx(StyledContainer, {
    scrollDirection: scrollDirection,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 3
    }
  }, __jsx(StyledNav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 4
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
    component: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 5
    }
  }, isMounted && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    classNames: "fade",
    timeout: 2000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 8
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 10
    }
  }, __jsx(StyledLogo, {
    menuOpen: menuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 11
    }
  }, "David Developer")))), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
    component: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 5
    }
  }, isMounted && __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    classNames: "fade",
    timeout: 2000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 8
    }
  }, __jsx(StyledHamburger, {
    onClick: handleMenuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx(StyledHamburgerBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 10
    }
  }, __jsx(StyledHamburgerInner, {
    menuOpen: menuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }))))), __jsx(StyledLink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 5
    }
  }, __jsx(StyledList, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 6
    }
  }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
    component: null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }
  }, isMounted && config__WEBPACK_IMPORTED_MODULE_2__["navLinks"].map(function (_ref, id) {
    var url = _ref.url,
        name = _ref.name;
    return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
      key: id,
      classNames: "fadedown",
      timeout: 2000,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 11
      }
    }, __jsx(StyledListItem, {
      key: id,
      style: {
        transitionDelay: "".concat(id * 100, "ms")
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 12
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 13
      }
    }, __jsx(StyledListLink, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 14
      }
    }, " ", name, " "))));
  }))))), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    menuOpen: menuOpen,
    handleMenuOpen: handleMenuOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 4
    }
  }));
};

_s(Nav, "jS5QzbP72svvY+jsfwSw+/szxJs=");

_c11 = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "StyledContainer");
$RefreshReg$(_c2, "StyledNav");
$RefreshReg$(_c3, "StyledLogo");
$RefreshReg$(_c4, "StyledHamburger");
$RefreshReg$(_c5, "StyledHamburgerBox");
$RefreshReg$(_c6, "StyledHamburgerInner");
$RefreshReg$(_c7, "StyledLink");
$RefreshReg$(_c8, "StyledList");
$RefreshReg$(_c9, "StyledListItem");
$RefreshReg$(_c10, "StyledListLink");
$RefreshReg$(_c11, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJ0aGVtZSIsImZvbnRTaXplcyIsImZvbnRzIiwiU3R5bGVkQ29udGFpbmVyIiwic3R5bGVkIiwiaGVhZGVyIiwibWl4aW5zIiwiZmxleEJldHdlZW4iLCJuYXZ5IiwidHJhbnNpdGlvbiIsInByb3BzIiwic2Nyb2xsRGlyZWN0aW9uIiwibmF2SGVpZ2h0IiwibmF2U2Nyb2xsSGVpZ2h0Iiwic2hhZG93TmF2eSIsIm1lZGlhIiwiZGVza3RvcDEyMDAiLCJ0YWJsZXQ3NjgiLCJTdHlsZWROYXYiLCJuYXYiLCJsaWdodFNsYXRlIiwiU0ZNb25vIiwiU3R5bGVkTG9nbyIsImEiLCJmbGV4Q2VudGVyIiwibGciLCJtZW51T3BlbiIsImdyZWVuIiwidHJhbnNHcmVlbiIsIlN0eWxlZEhhbWJ1cmdlciIsImRpdiIsIlN0eWxlZEhhbWJ1cmdlckJveCIsImhhbWJ1cmdlcldpZHRoIiwiU3R5bGVkSGFtYnVyZ2VySW5uZXIiLCJib3JkZXJSYWRpdXMiLCJTdHlsZWRMaW5rIiwiU3R5bGVkTGlzdCIsIm9sIiwiU3R5bGVkTGlzdEl0ZW0iLCJsaSIsIm1kIiwic20iLCJTdHlsZWRMaXN0TGluayIsIkRFTFRBIiwiTmF2IiwidXNlU3RhdGUiLCJzZXRNZW51T3BlbiIsInNldFNjcm9sbERpcmVjdGlvbiIsImxhc3RTY3JvbGxUb3AiLCJzZXRMYXN0U2Nyb2xsVG9wIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsImhhbmRsZVJlc2l6ZSIsImV2ZW50IiwiaGFuZGxlS2V5RG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmcm9tVG9wIiwic2Nyb2xsWSIsImlubmVySGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZG9jdW1lbnQiLCJib2R5IiwiaGFuZGxlT3ZlcmZsb3ciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJoYW5kbGVNZW51T3BlbiIsImludFZpZXdwb3J0V2lkdGgiLCJpbm5lcldpZHRoIiwia2V5IiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJuYXZMaW5rcyIsIm1hcCIsImlkIiwidXJsIiwibmFtZSIsInRyYW5zaXRpb25EZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxNLEdBQTZCQyxvRCxDQUE3QkQsTTtJQUFRRSxTLEdBQXFCRCxvRCxDQUFyQkMsUztJQUFXQyxLLEdBQVVGLG9ELENBQVZFLEs7QUFFM0IsSUFBTUMsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLG9PQUNsQkMscURBQU0sQ0FBQ0MsV0FEVyxFQUtBUixNQUFNLENBQUNTLElBTFAsRUFNTlIsb0RBQUssQ0FBQ1MsVUFOQSxFQVlWLFVBQUNDLEtBQUQ7QUFBQSxTQUNUQSxLQUFLLENBQUNDLGVBQU4sS0FBMEIsTUFBMUIsR0FBbUNYLG9EQUFLLENBQUNZLFNBQXpDLEdBQXFEWixvREFBSyxDQUFDYSxlQURsRDtBQUFBLENBWlUsRUFjTixVQUFDSCxLQUFEO0FBQUEsU0FDYkEsS0FBSyxDQUFDQyxlQUFOLEtBQTBCLElBQTFCLCtCQUFzRFosTUFBTSxDQUFDZSxVQUE3RCxJQUE0RSxNQUQvRDtBQUFBLENBZE0sRUFpQmpCLFVBQUNKLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLGVBQU4sS0FBMEIsTUFBMUIsY0FBdUNYLG9EQUFLLENBQUNhLGVBQTdDLElBQWlFLEtBQTdFO0FBQUEsQ0FqQmlCLEVBbUJsQkUsb0RBQUssQ0FBQ0MsV0FuQlkscUJBb0JsQkQsb0RBQUssQ0FBQ0UsU0FwQlkscUJBQXJCO0tBQU1kLGU7QUF1Qk4s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ZSxRQUFmQSxJQUFlO0FBQ25DLFdBQ0MsTUFBQyxvRUFBRDtBQUFlLFNBQUcsRUFBRUYsRUFBcEI7QUFBd0IsZ0JBQVUsRUFBQyxVQUFuQztBQUE4QyxhQUFPLEVBQUUsSUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsY0FBRDtBQUFnQixTQUFHLEVBQUVBLEVBQXJCO0FBQXlCLFdBQUssRUFBRTtBQUFFRyx1QkFBZSxZQUFLSCxFQUFFLEdBQUcsR0FBVjtBQUFqQixPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBa0JDLElBQWxCLE1BREQsQ0FERCxDQURELENBREQ7QUFTQSxHQVZELENBRkYsQ0FERCxDQURELENBOUJELENBRkQsRUFzRUMsTUFBQyw2Q0FBRDtBQUFNLFlBQVEsRUFBRXZELFFBQWhCO0FBQTBCLGtCQUFjLEVBQUUwQyxjQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEVELENBREQ7QUEwRUEsQ0E5SkQ7O0dBQU14QixHOztPQUFBQSxHO0FBZ0tTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hMDRjYmZkMjU3MTdhNzcyMGJjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbmF2TGlua3MsIG5hdkhlaWdodCB9IGZyb20gJ2NvbmZpZyc7XHJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IG1lZGlhIGZyb20gJ3N0eWxlcy9tZWRpYSc7XHJcbmltcG9ydCBtaXhpbnMgZnJvbSAnc3R5bGVzL21peGlucyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICdzdHlsZXMvdGhlbWUnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xyXG5cclxuY29uc3QgeyBjb2xvcnMsIGZvbnRTaXplcywgZm9udHMgfSA9IHRoZW1lO1xyXG5cclxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuXHQke21peGlucy5mbGV4QmV0d2Vlbn07XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRwYWRkaW5nOiAwcHggNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5uYXZ5fTtcclxuXHR0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb259O1xyXG5cdHotaW5kZXg6IDExO1xyXG5cdGZpbHRlcjogbm9uZTtcclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR1c2VyLXNlbGVjdDogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6ICR7KHByb3BzKSA9PlxyXG5cdFx0cHJvcHMuc2Nyb2xsRGlyZWN0aW9uID09PSAnbm9uZScgPyB0aGVtZS5uYXZIZWlnaHQgOiB0aGVtZS5uYXZTY3JvbGxIZWlnaHR9O1xyXG5cdGJveC1zaGFkb3c6ICR7KHByb3BzKSA9PlxyXG5cdFx0cHJvcHMuc2Nyb2xsRGlyZWN0aW9uID09PSAndXAnID8gYDAgMTBweCAzMHB4IC0xMHB4ICR7Y29sb3JzLnNoYWRvd05hdnl9YCA6ICdub25lJ307XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKFxyXG5cdFx0JHsocHJvcHMpID0+IChwcm9wcy5zY3JvbGxEaXJlY3Rpb24gPT09ICdkb3duJyA/IGAtJHt0aGVtZS5uYXZTY3JvbGxIZWlnaHR9YCA6ICcwcHgnKX1cclxuXHQpO1xyXG5cdCR7bWVkaWEuZGVza3RvcDEyMDBgcGFkZGluZzogMCA0MHB4O2B9O1xyXG5cdCR7bWVkaWEudGFibGV0NzY4YHBhZGRpbmc6IDAgMjVweDtgfTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZE5hdiA9IHN0eWxlZC5uYXZgXHJcblx0JHttaXhpbnMuZmxleEJldHdlZW59O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogJHtjb2xvcnMubGlnaHRTbGF0ZX07XHJcblx0Zm9udC1mYW1pbHk6ICR7Zm9udHMuU0ZNb25vfTtcclxuXHRjb3VudGVyLXJlc2V0OiBpdGVtIDA7XHJcblx0ei1pbmRleDogMTI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmFgXHJcblx0JHttaXhpbnMuZmxleENlbnRlcn07XHJcblx0Zm9udC1zaXplOiAke2ZvbnRTaXplcy5sZ307XHJcblx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjFzIGVhc2UtaW4tb3V0O1xyXG5cdHZpc2liaWxpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMubWVudU9wZW4gPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyApfTtcclxuXHJcblx0JjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJzwnO1xyXG5cdFx0Y29sb3I6ICR7Y29sb3JzLmdyZWVufTtcclxuXHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdH1cclxuXHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnLz4nO1xyXG5cdFx0Y29sb3I6ICR7Y29sb3JzLmdyZWVufTtcclxuXHR9XHJcblxyXG5cdCY6aG92ZXIsXHJcblx0Jjpmb2N1cyB7XHJcblx0XHRzdmcge1xyXG5cdFx0XHRmaWxsOiAke2NvbG9ycy50cmFuc0dyZWVufTtcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRIYW1idXJnZXIgPSBzdHlsZWQuZGl2YFxyXG5cdCR7bWl4aW5zLmZsZXhDZW50ZXJ9O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBtYXJnaW46IDAgLTEycHggMCAwO1xyXG4gICAgcGFkZGluZzogMjVweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAke21lZGlhLnRhYmxldDc2OGBkaXNwbGF5OiBmbGV4O2B9O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSGFtYnVyZ2VyQm94ID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogJHt0aGVtZS5oYW1idXJnZXJXaWR0aH1weDtcclxuICAgIGhlaWdodDogMjRweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEhhbWJ1cmdlcklubmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmVlbn07XHJcblx0d2lkdGg6ICR7dGhlbWUuaGFtYnVyZ2VyV2lkdGh9cHg7XHJcblx0aGVpZ2h0OiAycHg7XHJcbiAgICAke3RoZW1lLmJvcmRlclJhZGl1c307XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IChwcm9wcy5tZW51T3BlbiA/ICdyb3RhdGUoNTVkZWcpJyA6ICdyb3RhdGUoMCknKX07XHJcblxyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmVlbn07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAke3RoZW1lLmhhbWJ1cmdlcldpZHRofXB4O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5tZW51T3BlbiA/IGAxMDAlYCA6IGAxMjAlYCl9O1xyXG4gICAgICAgIHRvcDogJHtwcm9wcyA9PiAocHJvcHMubWVudU9wZW4gPyBgMGAgOiBgLTEwcHhgKX07XHJcbiAgICAgICAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMubWVudU9wZW4gPyAwIDogMSl9O1xyXG4gICAgICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IChwcm9wcy5tZW51T3BlbiA/ICd0cmFzbGF0ZVkoMTBweCknIDogJ3RyYXNsYXRlWSgwKScpfTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMubWVudU9wZW4gPyBgMTAwJWAgOiBgMTIwJWApfTtcclxuICAgICAgICBib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLm1lbnVPcGVuID8gYDBgIDogYC0xMHB4YCl9O1xyXG4gICAgICAgIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IChwcm9wcy5tZW51T3BlbiA/ICdyb3RhdGUoLTEwNWRlZyknIDogJ3JvdGF0ZSgwKScpfTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHQke21lZGlhLnRhYmxldDc2OGBkaXNwbGF5OiBub25lO2B9O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkTGlzdCA9IHN0eWxlZC5vbGBcclxuXHQke21peGlucy5mbGV4QmV0d2Vlbn07XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG5cdG1hcmdpbjogMCAxMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRmb250LXNpemU6ICR7Zm9udFNpemVzLm1kfTtcclxuXHRjb3VudGVyLWluY3JlbWVudDogaXRlbSAxO1xyXG5cclxuXHQmOmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiAnMCcgY291bnRlcihpdGVtKSAnLic7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdGNvbG9yOiAke2NvbG9ycy5ncmVlbn07XHJcblx0XHRmb250LXNpemU6ICR7Zm9udFNpemVzLnNtfTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRMaXN0TGluayA9IHN0eWxlZC5hYFxyXG5cdHBhZGRpbmc6IDEycHggMTBweDtcclxuYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFJlc3VtZUJ1dHRvbiA9IHN0eWxlZC5hYFxyXG4vLyBcdCR7bWl4aW5zLnNtYWxsQnV0dG9ufTtcclxuLy8gXHRtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gXHRmb250LXNpemU6ICR7Zm9udFNpemVzLnhzfTtcclxuLy8gYDtcclxuXHJcblxyXG5cclxuY29uc3QgREVMVEEgPSAxMDtcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuXHRjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbc2Nyb2xsRGlyZWN0aW9uLCBzZXRTY3JvbGxEaXJlY3Rpb25dID0gdXNlU3RhdGUoJ25vbmUnKTtcclxuXHRjb25zdCBbbGFzdFNjcm9sbFRvcCwgc2V0TGFzdFNjcm9sbFRvcF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IGhhbmRsZVNjcm9sbCgpKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IGhhbmRsZVJlc2l6ZSgpKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleURvd24nLCAoZXZlbnQpID0+IGhhbmRsZUtleURvd24oZXZlbnQpKTtcclxuXHJcblx0XHRcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBoYW5kbGVTY3JvbGwoKSk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiBoYW5kbGVSZXNpemUoKSk7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlEb3duJywgKGV2ZW50KSA9PiBoYW5kbGVLZXlEb3duKGV2ZW50KSk7XHJcblx0XHR9O1xyXG5cdH0sIFtsYXN0U2Nyb2xsVG9wXSk7XHJcblxyXG5cclxuXHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBmcm9tVG9wID0gd2luZG93LnNjcm9sbFk7XHJcblx0XHRsZXQgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuXHRcdGxldCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodFxyXG5cclxuXHRcdFxyXG5cdFx0aWYgKGZyb21Ub3AgPCBERUxUQSkge1xyXG5cdFx0XHRzZXRTY3JvbGxEaXJlY3Rpb24oJ25vbmUnKTtcclxuXHRcdH0gZWxzZSBpZiAoZnJvbVRvcCA+IGxhc3RTY3JvbGxUb3AgJiYgZnJvbVRvcCA+IG5hdkhlaWdodCkge1xyXG5cdFx0XHRpZiAoc2Nyb2xsRGlyZWN0aW9uICE9PSAnZG93bicpIHtcclxuXHRcdFx0XHRzZXRTY3JvbGxEaXJlY3Rpb24oJ2Rvd24nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChmcm9tVG9wICsgaW5uZXJIZWlnaHQgPCBzY3JvbGxIZWlnaHQpIHtcclxuXHRcdFx0aWYgKHNjcm9sbERpcmVjdGlvbiAhPT0gJ3VwJykge1xyXG5cdFx0XHRcdHNldFNjcm9sbERpcmVjdGlvbigndXAnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHRcdFxyXG5cdFx0c2V0TGFzdFNjcm9sbFRvcChmcm9tVG9wKTtcclxuXHR9O1xyXG5cclxuXHJcblx0Y29uc3QgaGFuZGxlT3ZlcmZsb3cgPSAoKSA9PiB7XHJcblx0XHRpZiAobWVudU9wZW4pIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiLCBcImhpZGRlblwiKVxyXG5cdFx0fSBcclxuXHRcdGlmICghbWVudU9wZW4pIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYmx1clwiLCBcImhpZGRlblwiKVxyXG5cdFx0fVxyXG5cdH1cclxuXHQgICAgXHJcbiAgICBjb25zdCBoYW5kbGVNZW51T3BlbiA9ICgpID0+IHtcclxuXHRcdHNldE1lbnVPcGVuKCFtZW51T3Blbik7XHJcblx0XHRoYW5kbGVPdmVyZmxvdygpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG5cdFx0bGV0IGludFZpZXdwb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG5cclxuXHRcdGlmIChpbnRWaWV3cG9ydFdpZHRoID4gNzY4ICYmIG1lbnVPcGVuKSB7XHJcblx0XHRcdHNldE1lbnVPcGVuKCFtZW51T3Blbik7XHJcblx0XHRcdGhhbmRsZU92ZXJmbG93KCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblx0XHRpZiAoIW1lbnVPcGVuKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG5cdFx0XHRzZXRNZW51T3BlbighbWVudU9wZW4pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBzZXRJc01vdW50ZWQodHJ1ZSksIDEwMDApO1xyXG5cdFx0cmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdFx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxTdHlsZWRDb250YWluZXIgc2Nyb2xsRGlyZWN0aW9uPXtzY3JvbGxEaXJlY3Rpb259PlxyXG5cdFx0XHRcclxuXHRcdFx0PFN0eWxlZE5hdj5cclxuXHRcdFx0XHR7LyogTG9nbyAqL31cclxuXHRcdFx0XHQ8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XHJcblx0XHRcdFx0XHR7aXNNb3VudGVkICYmIFxyXG5cdFx0XHRcdFx0XHQoXHJcblx0XHRcdFx0XHRcdFx0PENTU1RyYW5zaXRpb24gY2xhc3NOYW1lcz1cImZhZGVcIiB0aW1lb3V0PXsyMDAwfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3R5bGVkTG9nbyBtZW51T3Blbj17bWVudU9wZW59ID5EYXZpZCBEZXZlbG9wZXI8L1N0eWxlZExvZ28+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz4gXHJcblx0XHRcdFx0XHRcdFx0PC9DU1NUcmFuc2l0aW9uPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9UcmFuc2l0aW9uR3JvdXA+XHJcblxyXG5cdFx0XHRcdHsvKiBIYW1idXJnZXIgaWNvbiAqL31cclxuXHRcdFx0XHQ8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XHJcblx0XHRcdFx0XHR7aXNNb3VudGVkICYmIFxyXG5cdFx0XHRcdFx0XHQoXHJcblx0XHRcdFx0XHRcdFx0PENTU1RyYW5zaXRpb24gY2xhc3NOYW1lcz1cImZhZGVcIiB0aW1lb3V0PXsyMDAwfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTdHlsZWRIYW1idXJnZXIgb25DbGljaz17aGFuZGxlTWVudU9wZW59PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3R5bGVkSGFtYnVyZ2VyQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTdHlsZWRIYW1idXJnZXJJbm5lciBtZW51T3Blbj17bWVudU9wZW59IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU3R5bGVkSGFtYnVyZ2VyQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TdHlsZWRIYW1idXJnZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9DU1NUcmFuc2l0aW9uPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0PC9UcmFuc2l0aW9uR3JvdXA+XHJcblxyXG5cdFx0XHRcdHsvKiBOYXYgbWVudSAqL31cdFxyXG5cdFx0XHRcdDxTdHlsZWRMaW5rPlxyXG5cdFx0XHRcdFx0PFN0eWxlZExpc3Q+XHJcblx0XHRcdFx0XHRcdDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PXtudWxsfT5cclxuXHRcdFx0XHRcdFx0XHR7aXNNb3VudGVkICYmXHJcblx0XHRcdFx0XHRcdFx0XHRuYXZMaW5rcy5tYXAoKHsgdXJsLCBuYW1lIH0sIGlkKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENTU1RyYW5zaXRpb24ga2V5PXtpZH0gY2xhc3NOYW1lcz1cImZhZGVkb3duXCIgdGltZW91dD17MjAwMH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3R5bGVkTGlzdEl0ZW0ga2V5PXtpZH0gc3R5bGU9e3sgdHJhbnNpdGlvbkRlbGF5OiBgJHtpZCAqIDEwMH1tc2AgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3VybH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFN0eWxlZExpc3RMaW5rPiB7bmFtZX0gPC9TdHlsZWRMaXN0TGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9TdHlsZWRMaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NTU1RyYW5zaXRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC9UcmFuc2l0aW9uR3JvdXA+XHJcblx0XHRcdFx0XHQ8L1N0eWxlZExpc3Q+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ey8qIDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PXtudWxsfT5cclxuXHRcdFx0XHRcdFx0e2lzTW91bnRlZCAmJiBcclxuXHRcdFx0XHRcdFx0XHQoXHJcblx0XHRcdFx0XHRcdFx0XHQ8Q1NTVHJhbnNpdGlvbiBjbGFzc05hbWVzPVwiZmFkZVwiIHRpbWVvdXQ9ezIwMDB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHRyYW5zaXRpb25EZWxheTogYCR7bmF2TGlua3MubGVuZ3RoICogMTAwfW1zYCB9fT4gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFN0eWxlZFJlc3VtZUJ1dHRvblx0aHJlZj1cIi9yZXN1bWUucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q3VycsOtY3VsdW1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1N0eWxlZFJlc3VtZUJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NTU1RyYW5zaXRpb24+XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ8L1RyYW5zaXRpb25Hcm91cD5cdFx0ICovfVxyXG5cdFx0XHRcdDwvU3R5bGVkTGluaz5cclxuXHJcblx0XHRcdDwvU3R5bGVkTmF2PlxyXG5cclxuXHRcdFx0ey8qICBNb2JpbGUgbWVudSAqL31cclxuXHRcdFx0PE1lbnUgbWVudU9wZW49e21lbnVPcGVufSBoYW5kbGVNZW51T3Blbj17aGFuZGxlTWVudU9wZW59IC8+XHJcblx0XHQ8L1N0eWxlZENvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9