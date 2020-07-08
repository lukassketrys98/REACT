import React from "react"
import productsData from './productsData'
import { Link} from 'react-router-dom'
function Products() {
    const products = productsData.map(product => {
        return (
            <ul key={product.id}>
                <Link to={`/products/${product.id}`}><li>{product.name} - {product.price}$</li></Link>
                <hr />
            </ul>
        )
    })
    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>

    )
}

export default Products