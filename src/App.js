import React from "react"
import {Link, Switch, Route,useRouteMatch} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Profile from "./Profile"
import Settings from "./Settings"
import Info from "./Info"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"

function App() {
    const {url, path} = useRouteMatch()
    console.log(url)
    console.log(path)
    return (
        <div>
            <Link to = "/">Home </Link>
            <Link to = "/about">About</Link>
            <Link to = "/user"> Profile</Link>
            <Link to = "/services"> Services</Link>
        
            <Switch>
                {/* its like if path(starts with) = ... , render ... */}
                {/* <Route exact path = "/" component = {Home}/> */}
                <Route exact path = "/"><Home/></Route>
                <Route exact path = "/user"> <Profile/> </Route>
                <Route path = "/about" render = {()=> <About/>}/>
                
                <Route path = "/profile/settings"><Settings/></Route>
                <Route path = "/profile/info"><Info/></Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServiceDetail/>
                </Route>
            </Switch>
        </div>
    )
}

export default App