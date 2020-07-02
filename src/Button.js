import React from "react"

import {ThemeContextConsumer} from './themeContext'
import PropTypes from 'prop-types';

function Button(props){
    
        return (
            <ThemeContextConsumer>
                {
                    ({theme, changeTheme}) => (
                        <button onClick = {changeTheme} className={`${theme}-theme`}>Switch Theme</button>
                    )
                }
            </ThemeContextConsumer>
        )
    }

Button.propTypes = {
    value: PropTypes.oneOf(['light', 'dark']).isRequired,
}

Button.defaultProps = {
    value: "light"
}
export default Button