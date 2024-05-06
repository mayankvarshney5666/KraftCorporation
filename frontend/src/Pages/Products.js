import React from 'react'
import NavbarHeader from '../components/NavbarHeader'
import NavbarProducts from '../components/NavbarProducts'
import NavFoot from '../components/NavFoot'
import ProductItems from '../components/ProductItems'
import Footer from '../components/Footer'
const Products = () => {

    const item = "Products"
    return (
        <>
            <NavbarHeader />
            <NavbarProducts />
            <NavFoot item={item} />
            <ProductItems />
            <Footer />
        </>
    )
}

export default Products
