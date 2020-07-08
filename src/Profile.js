import React, { useReducer } from "react"
import {Link, Switch, Route, useRouteMatch} from "react-router-dom"



function Profile() {
    const {path, url} = useRouteMatch()
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to={`${url}/info`}>Profile Info</Link></li>
                <li><Link to={`${url}/settings`}>Profile Settings</Link></li>
            </ul>
           
            
        </div>
    )
}

export default Profile