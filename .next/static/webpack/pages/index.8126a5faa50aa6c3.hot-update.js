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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ \"./components/Popup.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/choeun/Desktop/TeamLog/2024/2024-Preview/showcase/components/Showcase.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar Showcase = function Showcase() {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    index = _useState[0],\n    setIndex = _useState[1];\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    popup = _useState2[0],\n    setPopup = _useState2[1];\n  var contents = [\"Sword\", \"LOGCON\", \"SolarSystem\", \"GetTheTeamLog\", \"2048\"];\n  var notions = [\"Sword-115fa456a3b48054b9bded6215390970?pvs=4\",\n  //sword\n  \"logcon-ecbcbb16541747148f52d1d99e7487db?pvs=4\",\n  //로그콘\n  \"solarsystem-3965cd98dbb5446db65ef41b48ca74ed?pvs=4\",\n  //태양계\n  \"clickgame-573369eff0b94399a488343a0306a70a?pvs=4\",\n  //클릭게임\n  // \"typo-ca56c6e8a6f949ddbe930cb685b359e0?pvs=4\", //typo\n  // \"wlcgui-7447a8cfe9f24adbba955c1dda6d0dde?pvs=4\", //wlc\n  // \"beam-607d204440e9478db13f7314a3d27c91?pvs=4\", //beamdbg\n  // \"kkutu-0d1e65a52854494dbd3221fd4c580157?pvs=4\", //kkutu\n  \"2048-40407056315843dfa39d50abc93d023e?pvs=4\" //2048\n  // \"todo-feb102df37c84b23b2434233100c664b?pvs=4\", //todo\n  // \"httppd-14bae3ebb7fc42808b0c3dc3eb954076?pvs=4\", //tiny\n  ];\n\n  var handlePopup = function handlePopup() {\n    setPopup(!popup);\n  };\n  var handleNext = function handleNext() {\n    setIndex(function (prevIndex) {\n      return prevIndex === contents.length - 1 ? 0 : prevIndex + 1;\n    });\n  };\n  var handlePrevious = function handlePrevious() {\n    setIndex(function (prevIndex) {\n      return prevIndex === 0 ? contents.length - 1 : prevIndex - 1;\n    });\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FullPageWrapper, {\n      className: \"section\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Wrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LeftButtonWrapper, {\n          onClick: handlePrevious,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Button, {\n            src: \"/images/left.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(RightButtonWrapper, {\n          onClick: handleNext,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Button, {\n            src: \"/images/right.svg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ContentWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Content, {\n            onClick: handlePopup,\n            title: contents[index],\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Thumbnail, {\n              src: \"/images/\".concat(contents[index].toLowerCase(), \".png\")\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Description, {\n              children: contents[index]\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), popup ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          handle: handlePopup,\n          id: notions[index]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 20\n        }, _this) : null]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(BottomWrapper, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(CopyRight, {\n          children: \"\\xA9 Teamlog 2024\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(LinkWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n            href: \"https://teamlog.kr\",\n            target: \"_blank\",\n            children: \"Website\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n            href: \"https://facebook.com/sunrintog\",\n            target: \"_blank\",\n            children: \"Facebook\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Link, {\n            href: \"https://instagram.com/sunrin_teamlog\",\n            target: \"_blank\",\n            children: \"Instagram\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_s(Showcase, \"DWuLmmYeYtfRM8bULzN3UkAif5Q=\");\n_c = Showcase;\nvar FullPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__FullPageWrapper\",\n  componentId: \"sc-kbtnnv-0\"\n})([\"position:relative;background-color:#f9f9f9;\"]);\n_c2 = FullPageWrapper;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__Wrapper\",\n  componentId: \"sc-kbtnnv-1\"\n})([\"display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;\"]);\n_c3 = Wrapper;\nvar LeftButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__LeftButtonWrapper\",\n  componentId: \"sc-kbtnnv-2\"\n})([\"position:absolute;top:50%;left:5%;transform:translateY(-50%);z-index:1;\"]);\n_c4 = LeftButtonWrapper;\nvar RightButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__RightButtonWrapper\",\n  componentId: \"sc-kbtnnv-3\"\n})([\"position:absolute;top:50%;right:5%;transform:translateY(-50%);z-index:1;\"]);\n_c5 = RightButtonWrapper;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"Showcase__Button\",\n  componentId: \"sc-kbtnnv-4\"\n})([\"width:3vmax;height:3vmax;cursor:pointer;\"]);\n_c6 = Button;\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__ContentWrapper\",\n  componentId: \"sc-kbtnnv-5\"\n})([\"display:flex;justify-content:space-around;&:hover{opacity:0.8;transform:scale(0.95);transition:all 0.3s ease-in-out;}\"]);\n_c7 = ContentWrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__Content\",\n  componentId: \"sc-kbtnnv-6\"\n})([\"display:flex;flex-direction:column;align-items:center;cursor:pointer;transition:all ease-in-out 0.3s;\", \" @media screen and (max-width:500px){& > img{width:150px;height:150px;}& > p{font-weight:500;}}\"], function (props) {\n  return props.title === \"WireTypo\" && \"\\n    & > img {\\n      width: 500px;\\n    }\\n  \";\n});\n_c8 = Content;\nvar Thumbnail = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.withConfig({\n  displayName: \"Showcase__Thumbnail\",\n  componentId: \"sc-kbtnnv-7\"\n})([\"width:300px;height:300px;object-fit:cover;\"]);\n_c9 = Thumbnail;\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n  displayName: \"Showcase__Description\",\n  componentId: \"sc-kbtnnv-8\"\n})([\"font-size:2rem;font-weight:700;color:#000;margin-top:10%;\"]);\n_c10 = Description;\nvar BottomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__BottomWrapper\",\n  componentId: \"sc-kbtnnv-9\"\n})([\"position:absolute;bottom:2%;transform:translateX(-50%);left:50%;display:flex;flex-direction:column;align-items:center;gap:10px;\"]);\n_c11 = BottomWrapper;\nvar CopyRight = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p.withConfig({\n  displayName: \"Showcase__CopyRight\",\n  componentId: \"sc-kbtnnv-10\"\n})([\"font-size:16px;font-weight:300;color:#919191;\"]);\n_c12 = CopyRight;\nvar LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Showcase__LinkWrapper\",\n  componentId: \"sc-kbtnnv-11\"\n})([\"display:flex;gap:10px;\"]);\n_c13 = LinkWrapper;\nvar Link = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.withConfig({\n  displayName: \"Showcase__Link\",\n  componentId: \"sc-kbtnnv-12\"\n})([\"color:#6e7b9e;text-decoration:none;\"]);\n_c14 = Link;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Showcase);\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;\n$RefreshReg$(_c, \"Showcase\");\n$RefreshReg$(_c2, \"FullPageWrapper\");\n$RefreshReg$(_c3, \"Wrapper\");\n$RefreshReg$(_c4, \"LeftButtonWrapper\");\n$RefreshReg$(_c5, \"RightButtonWrapper\");\n$RefreshReg$(_c6, \"Button\");\n$RefreshReg$(_c7, \"ContentWrapper\");\n$RefreshReg$(_c8, \"Content\");\n$RefreshReg$(_c9, \"Thumbnail\");\n$RefreshReg$(_c10, \"Description\");\n$RefreshReg$(_c11, \"BottomWrapper\");\n$RefreshReg$(_c12, \"CopyRight\");\n$RefreshReg$(_c13, \"LinkWrapper\");\n$RefreshReg$(_c14, \"Link\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxXQUFBO0FBQUEscURBSXpCO0FBQUNjLElBQUEsR0FKSXZCLFNBQVM7QUFNZixJQUFNQyxXQUFXLEdBQUc5Qyw2REFBVSxDQUFBb0QsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSw4QkFHN0I7QUFBQ2UsSUFBQSxHQUhJdkIsV0FBVztBQUtqQixJQUFNQyxJQUFJLEdBQUcvQywyREFBUSxDQUFBb0QsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSwyQ0FHcEI7QUFBQ2lCLElBQUEsR0FISXhCLElBQUk7QUFLViwrREFBZXpDLFFBQVEsRUFBQztBQUFBLElBQUE0QyxFQUFBLEVBQUFLLEdBQUEsRUFBQUMsR0FBQSxFQUFBQyxHQUFBLEVBQUFDLEdBQUEsRUFBQUUsR0FBQSxFQUFBQyxHQUFBLEVBQUFFLEdBQUEsRUFBQUMsR0FBQSxFQUFBRSxJQUFBLEVBQUFDLElBQUEsRUFBQUMsSUFBQSxFQUFBQyxJQUFBLEVBQUFFLElBQUE7QUFBQUMsWUFBQSxDQUFBdEIsRUFBQTtBQUFBc0IsWUFBQSxDQUFBakIsR0FBQTtBQUFBaUIsWUFBQSxDQUFBaEIsR0FBQTtBQUFBZ0IsWUFBQSxDQUFBZixHQUFBO0FBQUFlLFlBQUEsQ0FBQWQsR0FBQTtBQUFBYyxZQUFBLENBQUFaLEdBQUE7QUFBQVksWUFBQSxDQUFBWCxHQUFBO0FBQUFXLFlBQUEsQ0FBQVQsR0FBQTtBQUFBUyxZQUFBLENBQUFSLEdBQUE7QUFBQVEsWUFBQSxDQUFBTixJQUFBO0FBQUFNLFlBQUEsQ0FBQUwsSUFBQTtBQUFBSyxZQUFBLENBQUFKLElBQUE7QUFBQUksWUFBQSxDQUFBSCxJQUFBO0FBQUFHLFlBQUEsQ0FBQUQsSUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nob3djYXNlLnRzeD8yMzU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmNvbnN0IFNob3djYXNlID0gKCkgPT4ge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb250ZW50cyA9IFtcIlN3b3JkXCIsIFwiTE9HQ09OXCIsIFwiU29sYXJTeXN0ZW1cIiwgXCJHZXRUaGVUZWFtTG9nXCIsIFwiMjA0OFwiXTtcbiAgY29uc3Qgbm90aW9ucyA9IFtcbiAgICBcIlN3b3JkLTExNWZhNDU2YTNiNDgwNTRiOWJkZWQ2MjE1MzkwOTcwP3B2cz00XCIsIC8vc3dvcmRcbiAgICBcImxvZ2Nvbi1lY2JjYmIxNjU0MTc0NzE0OGY1MmQxZDk5ZTc0ODdkYj9wdnM9NFwiLCAvL+uhnOq3uOy9mFxuICAgIFwic29sYXJzeXN0ZW0tMzk2NWNkOThkYmI1NDQ2ZGI2NWVmNDFiNDhjYTc0ZWQ/cHZzPTRcIiwgLy/tg5zslpHqs4RcbiAgICBcImNsaWNrZ2FtZS01NzMzNjllZmYwYjk0Mzk5YTQ4ODM0M2EwMzA2YTcwYT9wdnM9NFwiLCAvL+2BtOumreqyjOyehFxuICAgIC8vIFwidHlwby1jYTU2YzZlOGE2Zjk0OWRkYmU5MzBjYjY4NWIzNTllMD9wdnM9NFwiLCAvL3R5cG9cbiAgICAvLyBcIndsY2d1aS03NDQ3YThjZmU5ZjI0YWRiYmE5NTVjMWRkYTZkMGRkZT9wdnM9NFwiLCAvL3dsY1xuICAgIC8vIFwiYmVhbS02MDdkMjA0NDQwZTk0NzhkYjEzZjczMTRhM2QyN2M5MT9wdnM9NFwiLCAvL2JlYW1kYmdcbiAgICAvLyBcImtrdXR1LTBkMWU2NWE1Mjg1NDQ5NGRiZDMyMjFmZDRjNTgwMTU3P3B2cz00XCIsIC8va2t1dHVcbiAgICBcIjIwNDgtNDA0MDcwNTYzMTU4NDNkZmEzOWQ1MGFiYzkzZDAyM2U/cHZzPTRcIiwgLy8yMDQ4XG4gICAgLy8gXCJ0b2RvLWZlYjEwMmRmMzdjODRiMjNiMjQzNDIzMzEwMGM2NjRiP3B2cz00XCIsIC8vdG9kb1xuICAgIC8vIFwiaHR0cHBkLTE0YmFlM2ViYjdmYzQyODA4YjBjM2RjM2ViOTU0MDc2P3B2cz00XCIsIC8vdGlueVxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZVBvcHVwID0gKCkgPT4ge1xuICAgIHNldFBvcHVwKCFwb3B1cCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ID09PSBjb250ZW50cy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDEpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmV2aW91cyA9ICgpID0+IHtcbiAgICBzZXRJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ID09PSAwID8gY29udGVudHMubGVuZ3RoIC0gMSA6IHByZXZJbmRleCAtIDEpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RnVsbFBhZ2VXcmFwcGVyIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPExlZnRCdXR0b25XcmFwcGVyIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfT5cbiAgICAgICAgICAgIDxCdXR0b24gc3JjPVwiL2ltYWdlcy9sZWZ0LnN2Z1wiIC8+XG4gICAgICAgICAgPC9MZWZ0QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgICA8UmlnaHRCdXR0b25XcmFwcGVyIG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxuICAgICAgICAgICAgPEJ1dHRvbiBzcmM9XCIvaW1hZ2VzL3JpZ2h0LnN2Z1wiIC8+XG4gICAgICAgICAgPC9SaWdodEJ1dHRvbldyYXBwZXI+XG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPENvbnRlbnQgb25DbGljaz17aGFuZGxlUG9wdXB9IHRpdGxlPXtjb250ZW50c1tpbmRleF19PlxuICAgICAgICAgICAgICA8VGh1bWJuYWlsIHNyYz17YC9pbWFnZXMvJHtjb250ZW50c1tpbmRleF0udG9Mb3dlckNhc2UoKX0ucG5nYH0gLz5cbiAgICAgICAgICAgICAgPERlc2NyaXB0aW9uPntjb250ZW50c1tpbmRleF19PC9EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgIHtwb3B1cCA/IDxQb3B1cCBoYW5kbGU9e2hhbmRsZVBvcHVwfSBpZD17bm90aW9uc1tpbmRleF19IC8+IDogbnVsbH1cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICA8Qm90dG9tV3JhcHBlcj5cbiAgICAgICAgICA8Q29weVJpZ2h0PiZjb3B5OyBUZWFtbG9nIDIwMjQ8L0NvcHlSaWdodD5cbiAgICAgICAgICA8TGlua1dyYXBwZXI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90ZWFtbG9nLmtyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIFdlYnNpdGVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmNvbS9zdW5yaW50b2dcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgRmFjZWJvb2tcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vc3VucmluX3RlYW1sb2dcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgSW5zdGFncmFtXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9MaW5rV3JhcHBlcj5cbiAgICAgICAgPC9Cb3R0b21XcmFwcGVyPlxuICAgICAgPC9GdWxsUGFnZVdyYXBwZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBGdWxsUGFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IExlZnRCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTtcbmA7XG5cbmNvbnN0IFJpZ2h0QnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiA1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiAxO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDN2bWF4O1xuICBoZWlnaHQ6IDN2bWF4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxuYDtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XG5cbiAgJHtwcm9wcyA9PiBwcm9wcy50aXRsZSA9PT0gXCJXaXJlVHlwb1wiICYmIGBcbiAgICAmID4gaW1nIHtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG4gIGB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAmID4gaW1nIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgICYgPiBwIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUaHVtYm5haWwgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuYDtcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuYDtcblxuY29uc3QgQm90dG9tV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBsZWZ0OiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbmA7XG5cbmNvbnN0IENvcHlSaWdodCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjOTE5MTkxO1xuYDtcblxuY29uc3QgTGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG5gO1xuXG5jb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAjNmU3YjllO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93Y2FzZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsIlBvcHVwIiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiU2hvd2Nhc2UiLCJfcyIsIl91c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJfdXNlU3RhdGUyIiwicG9wdXAiLCJzZXRQb3B1cCIsImNvbnRlbnRzIiwibm90aW9ucyIsImhhbmRsZVBvcHVwIiwiaGFuZGxlTmV4dCIsInByZXZJbmRleCIsImxlbmd0aCIsImhhbmRsZVByZXZpb3VzIiwiY2hpbGRyZW4iLCJGdWxsUGFnZVdyYXBwZXIiLCJjbGFzc05hbWUiLCJXcmFwcGVyIiwiTGVmdEJ1dHRvbldyYXBwZXIiLCJvbkNsaWNrIiwiQnV0dG9uIiwic3JjIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJSaWdodEJ1dHRvbldyYXBwZXIiLCJDb250ZW50V3JhcHBlciIsIkNvbnRlbnQiLCJ0aXRsZSIsIlRodW1ibmFpbCIsImNvbmNhdCIsInRvTG93ZXJDYXNlIiwiRGVzY3JpcHRpb24iLCJoYW5kbGUiLCJpZCIsIkJvdHRvbVdyYXBwZXIiLCJDb3B5UmlnaHQiLCJMaW5rV3JhcHBlciIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwiX2MiLCJkaXYiLCJ3aXRoQ29uZmlnIiwiZGlzcGxheU5hbWUiLCJjb21wb25lbnRJZCIsIl9jMiIsIl9jMyIsIl9jNCIsIl9jNSIsImltZyIsIl9jNiIsIl9jNyIsInByb3BzIiwiX2M4IiwiX2M5IiwicCIsIl9jMTAiLCJfYzExIiwiX2MxMiIsIl9jMTMiLCJhIiwiX2MxNCIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Showcase.tsx\n"));

/***/ })

});