import React from 'react'
import NavbarHeader from '../../components/NavbarHeader'
import NavbarProducts from '../../components/NavbarProducts'
import Footer from '../../components/Footer'
import NavFoot from '../../components/NavFoot'
import KraftPaperProductDetails from '../../components/ProductPage Components/KraftPaperProductDetails'
import ProductPageEnquiry from '../../components/ProductPage Components/ProductPageEnquiry'

const KraftPaper = () => {
    const cat = "Products"
    const arrow = "›"
    const item = "Kraft Paper"

    return (
        <>
            <NavbarHeader />
            <NavbarProducts />
            <NavFoot cat={cat} arrow={arrow} item={item} />
            <KraftPaperProductDetails />
            <ProductPageEnquiry item={item} />
            <Footer />
        </>
    )
}

export default KraftPaper
