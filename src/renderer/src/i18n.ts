/* eslint-disable import/no-extraneous-dependencies */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation resources - fixed Spanish (reemplazo fijo, sin selector)
// resources.en contiene valores en espanol para arranque siempre en espanol
import enTranslation from "./locales/en/translation.json";

// Configure i18next instance - modo fijo en espanol
i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    defaultNS: "translation",
    ns: ["translation"],
    resources: {
      en: {
        translation: enTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

// Fijar atributo lang del documento en espanol
if (typeof document !== "undefined") {
  document.documentElement.lang = "es";
}

export default i18n;
