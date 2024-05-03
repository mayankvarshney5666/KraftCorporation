import React from 'react'
import AboutItem from '../components/AboutItem'
import NavbarHeader from '../components/NavbarHeader'
import Navbar from '../components/NavbarAbout'
import NavFoot from '../components/NavFoot'

function AboutUs() {
    return (
        <>
            <NavbarHeader />
            <Navbar />
            <NavFoot item={"About Us"} />
            <AboutItem />
        </>
    )
}

export default AboutUs