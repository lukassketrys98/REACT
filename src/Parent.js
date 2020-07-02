import React from "react"
import Child from "./Child"

export default React.memo(function Parent(props){
        console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a Parent Component</p>
                <Child />
                <Child />
            </div>
        )
}
)

