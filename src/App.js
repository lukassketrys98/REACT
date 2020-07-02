import React from "react"
import Header from "./Header"
import Button from "./Button"
import ThemeContext from './themeContext'

function App() {
    return (
        <div>
           <Header />
           <ThemeContext.Consumer>
                {
                    value => (
                        <Button value = {value} />

                    )
                }
           </ThemeContext.Consumer>
            <Button value = {"light"} />
        </div>
    )
}

export default App