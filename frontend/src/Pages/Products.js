import React from 'react'
import NavbarHeader from '../components/NavbarHeader'
import NavbarProducts from '../components/NavbarProducts'
import NavFoot from '../components/NavFoot'

const Products = () => {
    const item = "Products"
    return (
        <>
            <NavbarHeader />
            <NavbarProducts />
            <NavFoot item={item} />

        </>
    )
}

export default Products
