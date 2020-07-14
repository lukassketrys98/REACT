import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types';
import useHover from '../hooks/useHover'


function Image({img, className}){
    // const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    const [hovered, hover] = useHover()
  
    function cartIcon(){
        const isAddedToCart = cartItems.some(item => item.id === img.id)
      
        if(isAddedToCart){
            return <i className="ri-shopping-cart-fill cart" onClick = {()=> removeFromCart(img.id)}></i>
        } else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
  

    return(
    <div ref = {hover} className = {`${className} image-container`}>
        <img src = {img.url} className="image-grid"/>
        {
           hovered &&
           <div className="icons">
            <i onClick = {()=> toggleFavorite(img.id)} className= {img.isFavorite? "ri-heart-fill favorite":"ri-heart-line favorite"}></i>
            {cartIcon()}
            </div> 
            
           
        }
        
       
    </div>
    )
}

Image.propTypes = {
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool

    }),
    className: PropTypes.string
}

export default Image