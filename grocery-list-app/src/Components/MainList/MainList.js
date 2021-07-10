import React from 'react'
import Product from '../Product/Product'
import GroceryData from '../../Resources/grocery_data'


function MainList(){
    const groceryList = GroceryData.map(item => <Product key = {item.id} product = {item} />)
    return(
        <div>
            <h1>This is a list</h1>
            <ul>
                {groceryList}
            </ul>
        </div>
    )
}

export default MainList;