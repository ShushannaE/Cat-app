import React from 'react';
import { useGetCategory } from '../../Hooks/useCategory';
import Category from './components/Category';

function SideBar({ chooseCategory }) {
    const { category } = useGetCategory();
    return <Category category = { category }
    chooseCategory = { chooseCategory }
    />
}

export default SideBar