import React from "react"
import ThemeContext from './userContext'
import PropTypes from 'prop-types';

function Button(props){
    
        return (
            
            <button className={`${props.value}-theme`}>Switch Theme</button>
        )
    }

Button.propTypes = {
    value: PropTypes.oneOf(['light', 'dark']).isRequired,
}

Button.defaultProps = {
    value: "light"
}
export default Button