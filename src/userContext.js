import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext()


class UserContextProvider extends Component {
    state = {
        name: "Lukas"
    }

    changeUsername = (name) => {
        this.setState({name})
    }
    render() {
        
        return (
            <Provider value={
                {
                    name: this.state.name,
                    changeUsername: this.changeUsername
                }
            }>
                {this.props.children}
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }