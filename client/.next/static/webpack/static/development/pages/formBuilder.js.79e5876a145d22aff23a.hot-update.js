webpackHotUpdate("static\\development\\pages\\formBuilder.js",{

/***/ "./pages/formBuilder/allElements.js":
/*!******************************************!*\
  !*** ./pages/formBuilder/allElements.js ***!
  \******************************************/
/*! exports provided: FormBuilderInput, FormBuilderTextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _elements_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/input */ "./pages/formBuilder/elements/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBuilderInput", function() { return _elements_input__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _elements_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/textarea */ "./pages/formBuilder/elements/textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBuilderTextArea", function() { return _elements_textarea__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// Import all required components here

 // Export the components to the main page


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/formBuilder\\allElements")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=formBuilder.js.79e5876a145d22aff23a.hot-update.js.map