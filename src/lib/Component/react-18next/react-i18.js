import React from "react";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import pathResolver from "./pathResolver.json";
import { useTranslation, Trans } from "react-i18next";

const localConfig = {
  lng: "en-US",
  backend: {
    loadPath: function (lng, ns) {
      return pathResolver[ns]
        ? "/locales/" + pathResolver[ns] + "/{{lng}}/{{ns}}.json"
        : "/locales/{{lng}}/{{ns}}.json";
    },
  },
  fallbackLng: "en-US",
  interpolation: { escapeValue: false },
  debug: true,
};

const initializeReactI18n = (config) => {
  Object.assign(localConfig, config);

  i18n.use(Backend).use(initReactI18next).init(localConfig);

  return i18n;
};

export { initializeReactI18n, useTranslation, Trans };
