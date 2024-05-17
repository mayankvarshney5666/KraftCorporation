import React from 'react'
import NavbarHeader from '../../components/NavbarHeader'
import NavbarProducts from '../../components/NavbarProducts'
import Footer from '../../components/Footer'
import NavFoot from '../../components/NavFoot'
import KraftPaperProductDetails from '../../components/ProductPage Components/KraftPaperProductDetails'
import ProductPageEnquiry from '../../components/ProductPage Components/ProductPageEnquiry'
import ProductCardSlider from '../../components/ProductPage Components/ProductCardSlider'
import ProductMainContent from '../../components/ProductPage Components/ProductMainContent'

const KraftPaper = () => {
    const cat = "Products"
    const arrow = "›"
    const item = "Kraft Paper"

    return (
        <>
            <NavbarHeader />
            <NavbarProducts />
            <NavFoot cat={cat} arrow={arrow} item={item} />
            <ProductMainContent />
            <KraftPaperProductDetails />
            <ProductPageEnquiry item={item} />
            <ProductCardSlider />
            <Footer />
        </>
    )
}

export default KraftPaper
