import React from 'react'
import './Products.css'



function Product(props){
    return(
        <div>
            <li>
                <span>
                    <input type="checkbox" onChange={() => console.log('clicked')}/> 
                    {props.product.name}
                </span>
            </li>
        </div>
    )
}

export default Product