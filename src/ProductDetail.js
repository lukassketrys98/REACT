import React from "react"
import { useParams } from 'react-router-dom'
import productsData from './productsData'

function ProductDetail(props) {
    const {productId} = useParams()
   
    const thisProduct = productsData.find(product => product.id == productId)
    
    console.log(thisProduct)
    return (
        <div>
            <h1>Product {productId}</h1>
            <p>{thisProduct.name} - {thisProduct.price}$</p>
            <p>{thisProduct.description}</p>
        </div>

    )
}

export default ProductDetail