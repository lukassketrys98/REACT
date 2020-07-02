import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext()



// const {Provider, Consumer} = ThemeContext

//ThemeContext.Provider & ThemeContext.Consumer

class ThemeContextProvider extends Component {
    state = {
        theme: "light"
    }

    changeTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    render() {
        return (
            <Provider value={
                {
                    theme: this.state.theme,
                    changeTheme: this.changeTheme
                }
            }>
                {this.props.children}
            </Provider>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }