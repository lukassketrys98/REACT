import React, { useContext, useState } from "react"
import { Context } from '../Context'
import PropTypes from "prop-types"
import useHover from '../hooks/useHover'
function CartItem({ item }) {
    const { removeFromCart } = useContext(Context)
    // const [hovered, setHovered] = useState(false)
        const [hovered, hover] = useHover()
    return (
        <div className="cart-item">

            <i
                ref = {hover}
                onClick={() => removeFromCart(item.id)}
                className=
                {
                    hovered? 
                    "ri-delete-bin-fill" : 
                    "ri-delete-bin-line"
                }>
            </i>

            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem