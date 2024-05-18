"use client"

import React from 'react'
import { useSelector } from 'react-redux';

function Mycart() {
    const cart = useSelector(state => state.products.cart);

    return (
        <div>
            <h1>Mycart</h1>


  <div className='container'>
                <div className='row'>
                {cart.map(item => (
                    <div key={item.id} className='col-4'>
                    <div class="card">
                                <img src="" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text">{item.creationAt}</p>
                                    <p class="card-text">{item.updatedAt}</p>
                                    <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
                                </div>
                            </div>
                    </div>
                     ))}
                </div>

</div>
         

        </div>
    )
}

export default Mycart
