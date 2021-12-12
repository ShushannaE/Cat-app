import React from 'react';
import { useGetProductData } from '../../Hooks/useProductData';
import ProductBox from '../ProductBox';
import SideBar from '../SideBar';

function Layout() {
    const {  chooseCategory, ...productDataProps }=useGetProductData();

    return (
        <div className='conatiner-box'>
            <div className='flex-box'>
                <div className='box-3'>
                    <SideBar chooseCategory={chooseCategory} />
                </div>
                <div className='box-9'>
                    <ProductBox {...productDataProps}/>
                </div>
            </div>
        </div>
    )
}

export default Layout
