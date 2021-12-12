import React, { useState, useEffect } from 'react';
import { getProduct } from '../api/productApi';

export const useGetProductData = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const [productData, setProductData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [categoryId, setCategoryId] = useState(1);

    useEffect(() => {
        getProduct(categoryId, limit, ({ result, error }) => {
            setProductData(result);
            setError(error);
            setIsLoaded(false)
        });
    }, [limit, categoryId]);

    const handleShowMoreImages = () => {
        setLimit(limit + 10);
    };

    const chooseCategory = (event) => {
        const id = event.target.id;
        setCategoryId(id);
    }

    return { productData, isLoaded, error, limit, handleShowMoreImages, chooseCategory }
}