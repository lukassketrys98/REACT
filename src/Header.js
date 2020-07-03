import React from "react"
import {UserContextConsumer} from './userContext'

function Header(props){
    
       
        return (
            <header className="dark-theme">

            <UserContextConsumer>
            {
                ({name}) =>  (<p>Welcome, {name}!</p>)    
            }
        </UserContextConsumer>
        </header>

          
        )    
    
}



export default Header
