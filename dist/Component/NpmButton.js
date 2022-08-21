"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NpmButton(_ref) {
  let {
    label = "Submit"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    style: {
      backgroundColor: "teal",
      padding: ".2rem 1.6rem",
      fontSize: "1rem",
      color: "#fff",
      borderRadius: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement("h4", null, label)));
}

var _default = NpmButton;
exports.default = _default;