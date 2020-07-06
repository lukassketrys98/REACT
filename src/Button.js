import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Button(props) {
    //context object
    // you can destruct object
    // const {theme}
    const context = useContext(ThemeContext)
    return (
        <button 
        onClick={context.toggleTheme}
        className={`${context.theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}

export default Button
