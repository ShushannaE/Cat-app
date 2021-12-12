import React, { useState } from 'react';
import './Category.css';

function Category({ category, chooseCategory }) {
   
    return (
        <ul className='category-bar'>
            {category.map(item => <li key={item.id}><button  id={item.id} onClick={chooseCategory}>{item.name}</button></li>)}
        </ul>
    )
}

export default Category
