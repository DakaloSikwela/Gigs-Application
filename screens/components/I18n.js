import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

const resources = {
  en: {
    translation: {
      "select_language": "Select Language",
      "search_language": "Search Language...",
    }
  },
  es: {
    translation: {
      "select_language": "Selecciona un idioma",
      "search_language": "Buscar idioma...",
    }
  },
  fr: {
    translation: {
      "select_language": "Sélectionnez la langue",
      "search_language": "Rechercher une langue...",
    }
  },
  // ...add more languages as necessary
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Localization.locale.split('-')[0],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
