import React from "react"
import {withPointlessHOC} from "./withPointlessHOC"
import {withExtraPropAdded} from "./withExtraPropAdded"
import {withFavoriteNumber} from './withFavoriteNumber'

// function App(props) {
//     console.log(props)
//     return (
//         <div>
//             {props.favoriteNumber}
//         </div>
//     )
// }

import Menu from "./Menu"
import Favorite from "./Favorite"

function App() {
    return (
        <div>
            <Menu />
            <hr />
            <Favorite />
        </div>
    )
}


const pp = withFavoriteNumber(App)
export default pp