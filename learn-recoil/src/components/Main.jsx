import { useTranslation } from "react-i18next";


function Main() {
    const {t , i18n} = useTranslation();

    const changeLngToKo = () => i18n.changeLanguage("ko");
    const changeLngToEng = () => i18n.changeLanguage("en");
  return (
    <div>
        <h2>language : {i18n.language} </h2>
        <h3> {t("welcome")} </h3>
        <h3> {t("Hello World")} </h3>
        <button onClick={changeLngToKo}>한글</button>
        <button onClick={changeLngToEng}>ENG</button>
    </div>
  );
}

export default Main;