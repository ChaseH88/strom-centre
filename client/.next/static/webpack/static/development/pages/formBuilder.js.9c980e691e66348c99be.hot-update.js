webpackHotUpdate("static\\development\\pages\\formBuilder.js",{

/***/ "./pages/formBuilder/index.js":
/*!************************************!*\
  !*** ./pages/formBuilder/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _allElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allElements */ "./pages/formBuilder/allElements.js");
var _jsxFileName = "C:\\Users\\scharr01\\Desktop\\strom-centre-graphql\\client\\pages\\formBuilder\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //form elements



var FormBuilder =
/*#__PURE__*/
function (_Component) {
  _inherits(FormBuilder, _Component);

  function FormBuilder() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormBuilder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormBuilder)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      inputCount: 0,
      formElements: [{
        id: 1,
        name: "input",
        description: "this is a input",
        value: "firstName",
        type: "text",
        added: true
      }, {
        id: 2,
        name: "input",
        description: "this is a input",
        value: "lastName",
        type: "text",
        added: false
      }, {
        id: 3,
        name: "input",
        description: "this is a input",
        value: "email",
        type: "text",
        added: false
      }] // DRAG AND DROP
      // store the temp data while dragging

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragStart", function (e, id) {
      e.dataTransfer.setData("id", id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDragOver", function (e) {
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDrop", function (e, added) {
      var id = parseInt(e.dataTransfer.getData("id")); // Update the inputs object with new drop data

      var inputs = _this.state.formElements.filter(function (elem) {
        if (elem.id === id) {
          elem.added = added;
        }

        return inputs;
      }); // Update the state


      _this.setState(_objectSpread({}, _this.state, {
        inputs: inputs
      }));
    });

    return _this;
  }

  _createClass(FormBuilder, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // Declare empty arrays to push information into
      var inputs = {
        true: [],
        false: [] // Sort the elements based off of added or not to the builder

      };
      this.state.formElements.forEach(function (elem) {
        inputs[elem.added].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onDragStart: function onDragStart(e) {
            return _this2.onDragStart(e, elem.id);
          },
          draggable: true,
          key: elem.id,
          className: "draggableItem",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, elem.value));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "formBuilder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inputDragArea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, inputs.false), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.addInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.removeInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "-"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "creator",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dragArea",
        onDragOver: function onDragOver(e) {
          return _this2.onDragOver(e);
        },
        onDrop: function onDrop(e) {
          return _this2.onDrop(e, true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, inputs.true)))));
    }
  }]);

  return FormBuilder;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormBuilder);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/formBuilder\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=formBuilder.js.9c980e691e66348c99be.hot-update.js.map