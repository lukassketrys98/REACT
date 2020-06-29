import React from "react"
import PropTypes from "prop-types"

// class Card extends React.Component {
//     static defaultProps = {
//         cardColor: "blue",
//         height: 100,
//         width: 100
//     }

//     render() {
//         const styles = {
//             backgroundColor: this.props.cardColor,
//             height: this.props.height,
//             width: this.props.width
//         }

//         return (
//             <div style={styles}></div>
//         )
//     }
// }


function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }

    return (
        <div style={styles}></div>
    )
}
Card.propTypes = {
    // cardColor: PropTypes.string.isRequired,
    width: PropTypes.number,
    // height: PropTypes.number.isRequired,
    cardColor: PropTypes.oneOf(['red', 'blue']),
}

Card.defaultProps = {
    // cardColor: "blue",
     height: 100,
    width: 100
}

export default Card