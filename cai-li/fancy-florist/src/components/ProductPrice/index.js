import React from 'react';

function ProductPrice(props) {
    return (
        <div className='product'>
        <h1>
            {props.name}
        </h1>
        <p>
            {props.description}
        </p>
        <h1>
            ${props.price}
        </h1>
        <button><h2>But now!</h2></button>
        </div>
    );
}

export default ProductPrice;