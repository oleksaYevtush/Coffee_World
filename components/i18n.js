
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'uk'],
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: require('../public/locales/en/translation.json'),
      },
      uk: {
        translation: require('../public/locales/uk/translation.json'),
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
