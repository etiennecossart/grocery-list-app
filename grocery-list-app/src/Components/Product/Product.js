import React from 'react'

function Product(props){
    return(
        <div>
            <li>
                <input type="checkbox" /> 
                <span>{props.product.name}</span>
            </li>
        </div>
    )
}

export default Product