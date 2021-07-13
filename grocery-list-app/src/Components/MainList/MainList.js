import React, { Component } from 'react'
import Product from '../Product/Product'
import GroceryData from '../../Resources/grocery_data'

class MainList extends Component{
    constructor(){
        super()
        this.state = {
            groceries : GroceryData
        }
    }
    render(){
        const groceryList = this.state.groceries.map(item => <Product key = {item.id} product = {item} />)
        return(
            <div>
                <h1>This is a list</h1>
                <ul>
                    {groceryList}
                </ul>
            </div>
        )
    }
}

export default MainList;