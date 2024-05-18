// Products.js
"use client"

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart, removeFromCart } from './cart/store';

const Products = () => {
    const products = useSelector(state => state.products.products);
    const cart = useSelector(state => state.products.cart);
    const dispatch = useDispatch();

    const handleAddToCart = product => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = product => {
        dispatch(removeFromCart(product));
    };



    return (
        <div>
            <div className='container'>
                <div className='row'>

                    {products.map(product => (
                        <div className='col-4'>
                            <div class="card">
                                <img src="" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">{product.creationAt}</p>
                                    <p class="card-text">{product.updatedAt}</p>
                                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Products;
