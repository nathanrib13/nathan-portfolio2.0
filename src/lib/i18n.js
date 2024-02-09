import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranlations from "../utils/en.json";
import ptTranslations from "../utils/pt.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enTranlations },
    pt: { ...ptTranslations },
  },
  lng: "en",
});
