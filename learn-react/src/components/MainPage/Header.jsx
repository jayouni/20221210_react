import { useContext } from "react";
import { DarkModeContext } from "./Main";

function Header({children}){

    const darkMode = useContext(DarkModeContext);
    console.log(darkMode);
    return (
    <header style={{ 
        textAlign:"center" , 
        borderBottom:"1px solid " , 
        borderColor : darkMode ? "white" : "black" ,
        backgroundColor : darkMode ? "#000" : "#ddd" ,
        color : darkMode ? "#fff" : "black" ,
        padding : 20 ,
        }}
    >

        <h1 style={{margin : 0 }}>Hello React!</h1>
        {children}
    </header>
    );
}

export default Header;