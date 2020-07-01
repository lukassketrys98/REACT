import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function (isdDaytime) {
                    return <h1>{isdDaytime? "Good Day" : "Good evening"}, Lukas</h1>

                }
            } />
        </div>
    )
}

export default App