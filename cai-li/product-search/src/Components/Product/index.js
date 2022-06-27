import React, { Component } from 'react';

class Product extends Component {
    render () {
        return(
            <div className='product'>
                <h1>{this.props.name}</h1>
                <p>{this.props.category}</p>
                <p>{this.props.description}</p>
                <h2>${this.props.price}</h2>

            </div>
        )
    }
}
export default Product;