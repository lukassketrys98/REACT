import React from "react"
import PropTypes from "prop-types"

function RoundedImg(props) {
   

    return (
        <img 
        src={props.src} 
        style={{borderRadius: props.borderRadius}} 
        className="round-img"
    />
    )
}


RoundedImg.propTypes = {
    src: PropTypes.string.isRequired,
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    
      ]),

    cardColor: PropTypes.oneOf(['red', 'blue']),
}

RoundedImg.defaultProps = {
    borderRadius: "50%"
}

export default RoundedImg