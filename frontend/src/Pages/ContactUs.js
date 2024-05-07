import React from 'react'
import ContactContent from '../components/ContactContent'
import NavbarHeader from '../components/NavbarHeader'
import NavbarContact from '../components/NavbarContact'
import NavFoot from '../components/NavFoot'
import Footer from '../components/Footer'

function ContactUs() {
    return (
        <>
            <NavbarHeader />
            <NavbarContact />
            <NavFoot item={"Contact Us"} />
            <ContactContent />
            <Footer />
        </>
    )
}

export default ContactUs