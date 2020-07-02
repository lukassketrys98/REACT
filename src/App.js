import React from "react"
import Header from "./Header"
import Button from "./Button"
import UserContext from './userContext'

function App() {
    return (
        <div>
           <Header/>
            <UserContext.Consumer>
                {
                    value => (
                        <main>
                            <p className="main">
                                No new Notifications, {value}! 🎉
                            </p>
                        </main>
                    )
                }
            </UserContext.Consumer>
           
        </div>
    )
}

export default App