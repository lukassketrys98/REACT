import React from "react"
import UserContext from './userContext'

function Header(props){
    
        return (
            <UserContext.Consumer>
            {
               value => (
                   <header className="dark-theme">
                       <p>Welcome, {value}!</p>
                   </header>
               )
            }
        </UserContext.Consumer>
          
        )    
    
}



export default Header
