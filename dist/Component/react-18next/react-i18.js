"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _reactI18next.Trans;
  }
});
exports.initializeReactI18n = void 0;
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.useTranslation;
  }
});

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextHttpBackend = _interopRequireDefault(require("i18next-http-backend"));

var _reactI18next = require("react-i18next");

var _pathResolver = _interopRequireDefault(require("./pathResolver.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localConfig = {
  lng: "en-US",
  backend: {
    loadPath: function loadPath(lng, ns) {
      return _pathResolver.default[ns] ? "/locales/" + _pathResolver.default[ns] + "/{{lng}}/{{ns}}.json" : "/locales/{{lng}}/{{ns}}.json";
    }
  },
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false
  },
  debug: true
};

const initializeReactI18n = config => {
  Object.assign(localConfig, config);

  _i18next.default.use(_i18nextHttpBackend.default).use(_reactI18next.initReactI18next).init(localConfig);

  return _i18next.default;
};

exports.initializeReactI18n = initializeReactI18n;