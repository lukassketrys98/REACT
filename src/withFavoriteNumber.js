import React from "react"

export function withFavoriteNumber(Component){
    return function(props){
        return(
            <Component favoriteNumber = {18}  {...props}/>
        )
    }
}