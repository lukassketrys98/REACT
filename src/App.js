import React, { Component } from "react"
import Header from "./Header"
import { UserContextConsumer } from './userContext'



class App extends Component {
    state = {
        username: ''
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        
    }
    render() {
        return (
            <div>
                <Header />
                <UserContextConsumer>
                    {({ name, changeUsername }) => (
                        <main>

                            <p className="main">No new notifications, {name}! 🎉</p>
                            <input
                                type="text"
                                name="username"
                                placeholder="New username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                    <button onClick={() => changeUsername(this.state.username)}
                            >Change Username</button>
                        </main>
                    )}
                </UserContextConsumer>




            </div>
        )
    }

}

export default App