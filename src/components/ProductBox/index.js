import React from 'react';
import Error from '../Error';
import Loading from '../Loading';
import Product from './components/Product';

function ProductBox({ productData, limit, handleShowMoreImages, isLoaded, error }) {
    if (isLoaded) {
        return <Loading />
    }
    if (error) {
        return <Error message={error.message} />
    }
    return <Product productData={productData} limit={limit} handleShowMoreImages={handleShowMoreImages} />
}

export default ProductBox
