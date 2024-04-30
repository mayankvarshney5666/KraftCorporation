import React from 'react'
import ContactContent from '../components/ContactContent'

function ContactUs() {
    return (
        <>
            <section className="headBg theme2 bread-right">
                <div className="wrap">
                    <div className="page-title-inner about-head fo">
                        <div className="h1 head"><h2>Kraft India</h2>
                        </div>
                        <div className="breadcrumb ar uu small">
                            <a href="/home" title="Home">Home</a> <b className="ffv p2px">›</b> Contact Us
                        </div>
                    </div>
                </div>
            </section>
            <ContactContent />
        </>
    )
}

export default ContactUs
