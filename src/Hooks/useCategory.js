import React, { useState, useEffect } from 'react';
import { getCategories } from '../api/categoryApi';

export const useGetCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategories(setCategory);
    }, [])
    return { category }
}