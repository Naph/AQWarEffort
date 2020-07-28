webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/dean/github/aqWarEffort/components/Item.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Item = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Item, _Component);\n\n  var _super = _createSuper(Item);\n\n  function Item(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Item);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"formatNumber\", function (rawNum) {\n      return Number(parseFloat(rawNum).toFixed(0)).toLocaleString('en', {\n        minimumFractionDigits: 0\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Item, [{\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        prog: {\n          width: \"\".concat(Math.floor(this.props.current / this.props.total * 100), \"%\")\n        }\n      };\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"item\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }\n      }, __jsx(\"a\", {\n        href: \"https://classic.wowhead.com/item=\".concat(this.props.id, \"/\"),\n        \"data-wowhead\": \"item=\".concat(this.props.id),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }\n      }, __jsx(\"img\", {\n        src: \"https://wow.zamimg.com/images/wow/icons/large/\".concat(this.props.pic),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }\n      })), __jsx(\"span\", {\n        className: \"percent\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }\n      }, Math.floor(this.props.current / this.props.total * 100)), __jsx(\"div\", {\n        className: \"meter\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }\n      }, __jsx(\"span\", {\n        className: \"progress\",\n        style: styles.prog,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 13\n        }\n      }, this.formatNumber(this.props.current), \" / \", this.props.total))));\n    }\n  }]);\n\n  return Item;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0l0ZW0uanM/YWE4ZiJdLCJuYW1lcyI6WyJJdGVtIiwicHJvcHMiLCJyYXdOdW0iLCJOdW1iZXIiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInRvTG9jYWxlU3RyaW5nIiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwic3R5bGVzIiwicHJvZyIsIndpZHRoIiwiTWF0aCIsImZsb29yIiwiY3VycmVudCIsInRvdGFsIiwiaWQiLCJwaWMiLCJmb3JtYXROdW1iZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLEk7Ozs7O0FBQ25CLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix1TkFJSixVQUFDQyxNQUFELEVBQVk7QUFDekIsYUFBT0MsTUFBTSxDQUFDQyxVQUFVLENBQUNGLE1BQUQsQ0FBVixDQUFtQkcsT0FBbkIsQ0FBMkIsQ0FBM0IsQ0FBRCxDQUFOLENBQXNDQyxjQUF0QyxDQUFxRCxJQUFyRCxFQUEyRDtBQUNoRUMsNkJBQXFCLEVBQUU7QUFEeUMsT0FBM0QsQ0FBUDtBQUdELEtBUmtCOztBQUFBO0FBRWxCOzs7OzZCQVFRO0FBQ1AsVUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFlBQUksRUFBRTtBQUNKQyxlQUFLLFlBQUtDLElBQUksQ0FBQ0MsS0FBTCxDQUFZLEtBQUtYLEtBQUwsQ0FBV1ksT0FBWCxHQUFxQixLQUFLWixLQUFMLENBQVdhLEtBQWpDLEdBQTBDLEdBQXJELENBQUw7QUFERDtBQURPLE9BQWY7QUFLQSxhQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksNkNBQXNDLEtBQUtiLEtBQUwsQ0FBV2MsRUFBakQsTUFETjtBQUVFLHVDQUFzQixLQUFLZCxLQUFMLENBQVdjLEVBQWpDLENBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlFO0FBQ0UsV0FBRywwREFBbUQsS0FBS2QsS0FBTCxDQUFXZSxHQUE5RCxDQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKRixDQURGLEVBU0U7QUFBTSxpQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0wsSUFBSSxDQUFDQyxLQUFMLENBQVksS0FBS1gsS0FBTCxDQUFXWSxPQUFYLEdBQXFCLEtBQUtaLEtBQUwsQ0FBV2EsS0FBakMsR0FBMEMsR0FBckQsQ0FESCxDQVRGLEVBWUU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxVQUFoQjtBQUEyQixhQUFLLEVBQUVOLE1BQU0sQ0FBQ0MsSUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUtRLFlBQUwsQ0FBa0IsS0FBS2hCLEtBQUwsQ0FBV1ksT0FBN0IsQ0FESCxTQUM2QyxLQUFLWixLQUFMLENBQVdhLEtBRHhELENBREYsQ0FaRixDQURGLENBREY7QUFzQkQ7Ozs7RUF2QytCSSwrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBmb3JtYXROdW1iZXIgPSAocmF3TnVtKSA9PiB7XG4gICAgcmV0dXJuIE51bWJlcihwYXJzZUZsb2F0KHJhd051bSkudG9GaXhlZCgwKSkudG9Mb2NhbGVTdHJpbmcoJ2VuJywge1xuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBwcm9nOiB7XG4gICAgICAgIHdpZHRoOiBgJHtNYXRoLmZsb29yKCh0aGlzLnByb3BzLmN1cnJlbnQgLyB0aGlzLnByb3BzLnRvdGFsKSAqIDEwMCl9JWAsXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9jbGFzc2ljLndvd2hlYWQuY29tL2l0ZW09JHt0aGlzLnByb3BzLmlkfS9gfVxuICAgICAgICAgICAgZGF0YS13b3doZWFkPXtgaXRlbT0ke3RoaXMucHJvcHMuaWR9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd293LnphbWltZy5jb20vaW1hZ2VzL3dvdy9pY29ucy9sYXJnZS8ke3RoaXMucHJvcHMucGljfWB9XG4gICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncGVyY2VudCc+XG4gICAgICAgICAgICB7TWF0aC5mbG9vcigodGhpcy5wcm9wcy5jdXJyZW50IC8gdGhpcy5wcm9wcy50b3RhbCkgKiAxMDApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWV0ZXInPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcm9ncmVzcycgc3R5bGU9e3N0eWxlcy5wcm9nfT5cbiAgICAgICAgICAgICAge3RoaXMuZm9ybWF0TnVtYmVyKHRoaXMucHJvcHMuY3VycmVudCl9IC8ge3RoaXMucHJvcHMudG90YWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Item.js\n");

/***/ })

})