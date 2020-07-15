import React from "react"
import {connect} from "react-redux"
import {increment,decrement} from './redux'

function App(props) {
    return (
        <div>
        <h1>COUNT GOES HERE</h1>
        <h1>{props.count}</h1>
        <button onClick = {props.decrement}>-</button>
        <button onClick = {props.increment}>+</button>
    </div>
    )
}

function mapStateToProps(globalState) {
    // return an object where the keys are the name of the prop your component wants,
    // values are the actual parts of the global state your component wants
    return {
        count: globalState
    }
}

const mapDispatchToProps = {
    increment: increment,
    decrement: decrement
}

// export default connect( What parts of state do you want? , What actions to dispatch? )(App)

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default connect(state => ({count: state}), {increment, decrement})(App)