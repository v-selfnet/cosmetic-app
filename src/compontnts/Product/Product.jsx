import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {brand, id, image_link, name, price} = props.product;

    // bypass function receive from Shop
    const addProduct = props.addProduct;
    return (
        <div className='product'>
            <h2>{brand}<small> [iD: {id}]</small></h2>
            <img src={image_link} alt="" />
            <p>{name}</p>
            <h3>Price: ${price}</h3>
            <button onClick={ () => addProduct(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;