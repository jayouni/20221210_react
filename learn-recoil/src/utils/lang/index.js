import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

const resources = {
    // en : {
    //     translation : {
    //         welcome : "welcome!",
    //         "Hello World" : "Hello World",

    //     },
    // },

    // ko : {
    //     translation : {
    //         welcome : "환영합니다",
    //         "Hello World" : "헬로우 월드",

    //     },
        
    // },

    en ,
    ko ,

};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
});