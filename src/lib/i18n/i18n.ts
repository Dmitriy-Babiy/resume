import en from './translation/en.json';
import ru from './translation/ru.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
  resources,
});

export default i18n;
