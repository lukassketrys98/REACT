import React from "react"
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColor="red" height={200} width={300} />
            <Card cardColor="blue" height={200} width={250} />
            <Card cardColor="green" />
        </div>
    )
}

export default App