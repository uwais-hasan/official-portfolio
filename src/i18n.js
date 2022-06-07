import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './Local/ar.json'
import en from './Local/en.json'
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import Backend from 'i18next-http-backend';



let resources = {
        en: {
            translation: en
        },
        ar: {
            translation: ar
        }

    };



i18n.use(Backend)

    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next

    .init({

        lng: "en", // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

       resources,
    });

export default i18n;