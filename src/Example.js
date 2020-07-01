import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(true)}
        </div>
    )
}

export default Example