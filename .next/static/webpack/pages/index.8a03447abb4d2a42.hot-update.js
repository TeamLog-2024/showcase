"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Showcase.tsx":
/*!*********************************!*\
  !*** ./components/Showcase.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ \"./components/Popup.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/choeun/Desktop/TeamLog/2024/showcase/components/Showcase.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar Showcase = function Showcase() {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    index = _useState[0],\n    setIndex = _useState[1];\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    popup = _useState2[0],\n    setPopup = _useState2[1];\n  var contents = [\"LOGCON\", \"SolarSystem\", \"GetTheTeamLog\", \"WireTypo\", \"WLC-GUI\", \"Beam\"];\n  var notions = [\"38a3729245ca4834a3c5ce2303d8f690?pvs=4\", \"329ed17c837546dc81dd0d5696a98607?pvs=4\", \"b32ac7fe58454e7cb49f8369f87f3715?pvs=4\", \"typo-e21c192e2861434898cf99917d4f219f?pvs=4\"];\n  var handlePopup = function handlePopup() {\n    setPopup(!popup);\n  };\n  var handleNext = function handleNext() {\n    setIndex(function (prevIndex) {\n      return prevIndex === contents.length - 1 ? 0 : prevIndex + 1;\n    });\n  };\n  var handlePrevious = function handlePrevious() {\n    setIndex(function (prevIndex) {\n      return prevIndex === 0 ? contents.length - 1 : prevIndex - 1;\n    });\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FullPageWrapper, {\n      className: \"section\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LeftButtonWrapper, {\n          onClick: handlePrevious,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Button, {\n            src: \"/images/left.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(RightButtonWrapper, {\n          onClick: handleNext,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Button, {\n            src: \"/images/right.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ContentWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Content, {\n            onClick: handlePopup,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Thumbnail, {\n              src: \"/images/\".concat(contents[index].toLowerCase(), \".png\")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Description, {\n              children: contents[index]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this), popup ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          handle: handlePopup,\n          id: notions[index]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 20\n        }, _this) : null]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(BottomWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CopyRight, {\n          children: \"\\xA9 Teamlog 2024\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LinkWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n            href: \"https://teamlog.kr\",\n            target: \"_blank\",\n            children: \"Website\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n            href: \"https://facebook.com/sunrintog\",\n            target: \"_blank\",\n            children: \"Facebook\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n            href: \"https://instagram.com/sunrin_teamlog\",\n            target: \"_blank\",\n            children: \"Instagram\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_s(Showcase, \"DWuLmmYeYtfRM8bULzN3UkAif5Q=\");\n_c = Showcase;\nvar FullPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__FullPageWrapper\",\n  componentId: \"sc-kbtnnv-0\"\n})([\"position:relative;background-color:#f9f9f9;\"]);\n_c2 = FullPageWrapper;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__Wrapper\",\n  componentId: \"sc-kbtnnv-1\"\n})([\"display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;\"]);\n_c3 = Wrapper;\nvar LeftButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__LeftButtonWrapper\",\n  componentId: \"sc-kbtnnv-2\"\n})([\"position:absolute;top:50%;left:5%;transform:translateY(-50%);z-index:1;\"]);\n_c4 = LeftButtonWrapper;\nvar RightButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__RightButtonWrapper\",\n  componentId: \"sc-kbtnnv-3\"\n})([\"position:absolute;top:50%;right:5%;transform:translateY(-50%);z-index:1;\"]);\n_c5 = RightButtonWrapper;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"Showcase__Button\",\n  componentId: \"sc-kbtnnv-4\"\n})([\"width:3vmax;height:3vmax;cursor:pointer;\"]);\n_c6 = Button;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__ContentWrapper\",\n  componentId: \"sc-kbtnnv-5\"\n})([\"display:flex;justify-content:space-around;&:hover{opacity:0.8;transform:scale(0.95);transition:all 0.3s ease-in-out;}\"]);\n_c7 = ContentWrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__Content\",\n  componentId: \"sc-kbtnnv-6\"\n})([\"display:flex;flex-direction:column;align-items:center;cursor:pointer;\"]);\n_c8 = Content;\nvar Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"Showcase__Thumbnail\",\n  componentId: \"sc-kbtnnv-7\"\n})([\"width:300px;height:300px;object-fit:cover;\"]);\n_c9 = Thumbnail;\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n  displayName: \"Showcase__Description\",\n  componentId: \"sc-kbtnnv-8\"\n})([\"font-size:2rem;font-weight:700;color:#000;margin-top:10%;\"]);\n_c10 = Description;\nvar BottomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__BottomWrapper\",\n  componentId: \"sc-kbtnnv-9\"\n})([\"position:absolute;bottom:2%;transform:translateX(-50%);left:50%;display:flex;flex-direction:column;align-items:center;gap:10px;\"]);\n_c11 = BottomWrapper;\nvar CopyRight = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n  displayName: \"Showcase__CopyRight\",\n  componentId: \"sc-kbtnnv-10\"\n})([\"font-size:16px;font-weight:300;color:#919191;\"]);\n_c12 = CopyRight;\nvar LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__LinkWrapper\",\n  componentId: \"sc-kbtnnv-11\"\n})([\"display:flex;gap:10px;\"]);\n_c13 = LinkWrapper;\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.withConfig({\n  displayName: \"Showcase__Link\",\n  componentId: \"sc-kbtnnv-12\"\n})([\"color:#6e7b9e;text-decoration:none;\"]);\n_c14 = Link;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Showcase);\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;\n$RefreshReg$(_c, \"Showcase\");\n$RefreshReg$(_c2, \"FullPageWrapper\");\n$RefreshReg$(_c3, \"Wrapper\");\n$RefreshReg$(_c4, \"LeftButtonWrapper\");\n$RefreshReg$(_c5, \"RightButtonWrapper\");\n$RefreshReg$(_c6, \"Button\");\n$RefreshReg$(_c7, \"ContentWrapper\");\n$RefreshReg$(_c8, \"Content\");\n$RefreshReg$(_c9, \"Thumbnail\");\n$RefreshReg$(_c10, \"Description\");\n$RefreshReg$(_c11, \"BottomWrapper\");\n$RefreshReg$(_c12, \"CopyRight\");\n$RefreshReg$(_c13, \"LinkWrapper\");\n$RefreshReg$(_c14, \"Link\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1ELFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsMkNBR3BCO0FBQUNnQixJQUFBLEdBSEl2QixJQUFJO0FBS1YsK0RBQWV4QyxRQUFRLEVBQUM7QUFBQSxJQUFBMkMsRUFBQSxFQUFBSyxHQUFBLEVBQUFDLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUUsSUFBQSxFQUFBQyxJQUFBLEVBQUFDLElBQUEsRUFBQUMsSUFBQSxFQUFBRSxJQUFBO0FBQUFDLFlBQUEsQ0FBQXJCLEVBQUE7QUFBQXFCLFlBQUEsQ0FBQWhCLEdBQUE7QUFBQWdCLFlBQUEsQ0FBQWYsR0FBQTtBQUFBZSxZQUFBLENBQUFkLEdBQUE7QUFBQWMsWUFBQSxDQUFBYixHQUFBO0FBQUFhLFlBQUEsQ0FBQVgsR0FBQTtBQUFBVyxZQUFBLENBQUFWLEdBQUE7QUFBQVUsWUFBQSxDQUFBVCxHQUFBO0FBQUFTLFlBQUEsQ0FBQVIsR0FBQTtBQUFBUSxZQUFBLENBQUFOLElBQUE7QUFBQU0sWUFBQSxDQUFBTCxJQUFBO0FBQUFLLFlBQUEsQ0FBQUosSUFBQTtBQUFBSSxZQUFBLENBQUFILElBQUE7QUFBQUcsWUFBQSxDQUFBRCxJQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvd2Nhc2UudHN4PzIzNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcblxuY29uc3QgU2hvd2Nhc2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNvbnRlbnRzID0gW1wiTE9HQ09OXCIsIFwiU29sYXJTeXN0ZW1cIiwgXCJHZXRUaGVUZWFtTG9nXCIsIFwiV2lyZVR5cG9cIiwgXCJXTEMtR1VJXCIsIFwiQmVhbVwiXTtcbiAgY29uc3Qgbm90aW9ucyA9IFtcbiAgICBcIjM4YTM3MjkyNDVjYTQ4MzRhM2M1Y2UyMzAzZDhmNjkwP3B2cz00XCIsXG4gICAgXCIzMjllZDE3YzgzNzU0NmRjODFkZDBkNTY5NmE5ODYwNz9wdnM9NFwiLFxuICAgIFwiYjMyYWM3ZmU1ODQ1NGU3Y2I0OWY4MzY5Zjg3ZjM3MTU/cHZzPTRcIixcbiAgICBcInR5cG8tZTIxYzE5MmUyODYxNDM0ODk4Y2Y5OTkxN2Q0ZjIxOWY/cHZzPTRcIixcbiAgXTtcblxuICBjb25zdCBoYW5kbGVQb3B1cCA9ICgpID0+IHtcbiAgICBzZXRQb3B1cCghcG9wdXApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCA9PT0gY29udGVudHMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XG4gICAgc2V0SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCA9PT0gMCA/IGNvbnRlbnRzLmxlbmd0aCAtIDEgOiBwcmV2SW5kZXggLSAxKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZ1bGxQYWdlV3JhcHBlciBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxMZWZ0QnV0dG9uV3JhcHBlciBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c30+XG4gICAgICAgICAgICA8QnV0dG9uIHNyYz1cIi9pbWFnZXMvbGVmdC5zdmdcIiAvPlxuICAgICAgICAgIDwvTGVmdEJ1dHRvbldyYXBwZXI+XG4gICAgICAgICAgPFJpZ2h0QnV0dG9uV3JhcHBlciBvbkNsaWNrPXtoYW5kbGVOZXh0fT5cbiAgICAgICAgICAgIDxCdXR0b24gc3JjPVwiL2ltYWdlcy9yaWdodC5zdmdcIiAvPlxuICAgICAgICAgIDwvUmlnaHRCdXR0b25XcmFwcGVyPlxuICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDxDb250ZW50IG9uQ2xpY2s9e2hhbmRsZVBvcHVwfT5cbiAgICAgICAgICAgICAgPFRodW1ibmFpbCBzcmM9e2AvaW1hZ2VzLyR7Y29udGVudHNbaW5kZXhdLnRvTG93ZXJDYXNlKCl9LnBuZ2B9IC8+XG4gICAgICAgICAgICAgIDxEZXNjcmlwdGlvbj57Y29udGVudHNbaW5kZXhdfTwvRGVzY3JpcHRpb24+XG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICB7cG9wdXAgPyA8UG9wdXAgaGFuZGxlPXtoYW5kbGVQb3B1cH0gaWQ9e25vdGlvbnNbaW5kZXhdfSAvPiA6IG51bGx9XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPEJvdHRvbVdyYXBwZXI+XG4gICAgICAgICAgPENvcHlSaWdodD4mY29weTsgVGVhbWxvZyAyMDI0PC9Db3B5UmlnaHQ+XG4gICAgICAgICAgPExpbmtXcmFwcGVyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdGVhbWxvZy5rclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBXZWJzaXRlXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vc3VucmludG9nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIEZhY2Vib29rXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3N1bnJpbl90ZWFtbG9nXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIEluc3RhZ3JhbVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTGlua1dyYXBwZXI+XG4gICAgICAgIDwvQm90dG9tV3JhcHBlcj5cbiAgICAgIDwvRnVsbFBhZ2VXcmFwcGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgRnVsbFBhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBMZWZ0QnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDE7XG5gO1xuXG5jb25zdCBSaWdodEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTtcbmA7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAzdm1heDtcbiAgaGVpZ2h0OiAzdm1heDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBUaHVtYm5haWwgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuYDtcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuYDtcblxuY29uc3QgQm90dG9tV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbmA7XG5cbmNvbnN0IENvcHlSaWdodCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjOTE5MTkxO1xuYDtcblxuY29uc3QgTGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG5gO1xuXG5jb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAjNmU3YjllO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93Y2FzZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsIlBvcHVwIiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiU2hvd2Nhc2UiLCJfcyIsIl91c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJfdXNlU3RhdGUyIiwicG9wdXAiLCJzZXRQb3B1cCIsImNvbnRlbnRzIiwibm90aW9ucyIsImhhbmRsZVBvcHVwIiwiaGFuZGxlTmV4dCIsInByZXZJbmRleCIsImxlbmd0aCIsImhhbmRsZVByZXZpb3VzIiwiY2hpbGRyZW4iLCJGdWxsUGFnZVdyYXBwZXIiLCJjbGFzc05hbWUiLCJXcmFwcGVyIiwiTGVmdEJ1dHRvbldyYXBwZXIiLCJvbkNsaWNrIiwiQnV0dG9uIiwic3JjIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJSaWdodEJ1dHRvbldyYXBwZXIiLCJDb250ZW50V3JhcHBlciIsIkNvbnRlbnQiLCJUaHVtYm5haWwiLCJjb25jYXQiLCJ0b0xvd2VyQ2FzZSIsIkRlc2NyaXB0aW9uIiwiaGFuZGxlIiwiaWQiLCJCb3R0b21XcmFwcGVyIiwiQ29weVJpZ2h0IiwiTGlua1dyYXBwZXIiLCJMaW5rIiwiaHJlZiIsInRhcmdldCIsIl9jIiwiZGl2Iiwid2l0aENvbmZpZyIsImRpc3BsYXlOYW1lIiwiY29tcG9uZW50SWQiLCJfYzIiLCJfYzMiLCJfYzQiLCJfYzUiLCJpbWciLCJfYzYiLCJfYzciLCJfYzgiLCJfYzkiLCJwIiwiX2MxMCIsIl9jMTEiLCJfYzEyIiwiX2MxMyIsImEiLCJfYzE0IiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Showcase.tsx\n"));

/***/ })

});