import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('../../../public/maybelline.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    // bypass function send to Product
    const [cart, setCart] = useState([]);
    const addProduct = product => {
        // console.log('added');
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <>
            <h2>Total Pruducts: {products.length}</h2>
            <div className='shop-container'>
                <div className='shop'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            // id={product.id}
                            addProduct={addProduct}
                        ></Product>)
                    }
                </div>
            <div>
                <Cart cart={cart}></Cart>
                {/* <h3>Order Summery</h3><hr />
                <h3>Selected Items: {cart.length}</h3> */}
            </div>
            </div>
        </>
    );
};

export default Shop;