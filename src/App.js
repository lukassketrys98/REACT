import React from "react"

import Home from "./Home"
import Products from "./Products"
import ProductDetail from './ProductDetail'
import {Link, Route, Switch} from 'react-router-dom'
function App() {    
    return (
        <div>
            <nav>
                <Link to = "/">Home </Link>
                <Link to = "/products">Products</Link>
            </nav>
            <Switch>
                <Route exact path = "/"><Home/> </Route>
                <Route exact path = "/products"><Products/> </Route>
                <Route path = "/products/:productId"><ProductDetail/> </Route>
                
            </Switch>
           
            
        </div>
    )
}

export default App