import React from "react"
import ThemeContext from './themeContext'

function Header(props){
    
       
        return (
            <ThemeContext.Consumer>
            {
                value => (
                    <header className={`${value}-theme`}>
                    <h2>{value == "light"? "Light" : "Dark"} Theme</h2>
                </header>
        )
            }
        </ThemeContext.Consumer>
          
        )    
    
}



export default Header
