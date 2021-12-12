import React, { useState, useEffect } from 'react'
import './Product.css';

const Product = ({ productData, handleShowMoreImages }) => {
    return (
        <>
            <div className='flex-box product-box-list'>
                {productData.map(item => <div key={item.id} className='box-2 product-box'> <img className='responsive-img' src={item.url} />   </div>)}
            </div>
            <div className='load-more'>
                <button className='btn-primary' onClick={handleShowMoreImages}                >
                    Load More
                </button>
            </div>
        </>
    )
}

export default Product
