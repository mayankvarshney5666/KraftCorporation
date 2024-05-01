import React from 'react'
import AboutItem from '../components/AboutItem'
import NavbarHeader from '../components/NavbarHeader'

function AboutUs() {
    return (
        <>
            <NavbarHeader />
            <section className="headBg theme2 bread-right">
                <div className="wrap">
                    <div className="page-title-inner about-head fo">
                        <div className="h1 head">
                            <h2>About Us</h2>
                        </div>
                        <div className="breadcrumb ar uu small">
                            <a href="/home" title="Home">Home</a> <b className="ffv p2px"> › </b> About Us
                        </div>
                    </div>
                </div>
            </section>


            <AboutItem />
        </>


    )
}

export default AboutUs
