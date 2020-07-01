import React, {Component} from 'react'


class Toggler extends Component{
    state = {
        on: this.props.defaultOnValue
    }

    toggle = () => {
        this.setState(prevState =>{
            return {
                on: !prevState.on
            }
        })
    }

    render(){
    
        // const Component = this.props.component
        const {component: C, defaultOnValue, ...props} = this.props
        return (
            <C on = {this.state.on} toggle = {this.toggle} {...props} />
        )
    }
}

export function withToggler(component,optionsObj){
    console.log(component)
    
    return function(props){
        return(
            <Toggler defaultOnValue = {optionsObj.defaultOnValue} component = {component} {...props}/>
        )
    }
}

