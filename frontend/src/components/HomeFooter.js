import React from 'react';
import './styles/HomeFooter.css'

const footerLinks = [
    {
        title: 'Quick Contact',
        items: [
            'Kraft India',
            'Mr. Suresh Kumar Jain',
            'C118, Lajpat Nagar - II, New Delhi - 110024, India',
            '08048771316'
        ]
    },
    {
        title: 'General Links',
        items: [
            'Home',
            'About Us',
            'Products',
            'Current Jobs',
            'Contact Us',
            'Enquiry',
            'Site Map',
            'RSS'
        ]
    },
    {
        title: 'Products',
        items: [
            'Kraft Paper',
            'White Top Kraft Liner',
            'Rigid Boards'
        ]
    }
    ,
    {
        title: '',
        items: [
            ' ',
            'Duplex Boards',
            'Brown Kraft Paper'
        ]
    }
];


const HomeFooter = () => {
    return (
        <footer className="p-8 home-footer pb-2 pt-5">
            <div className="container">
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <h5 className="heading">{section.title}</h5>
                        <ul className="list">
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    {section.title === 'General Links' ? (
                                        <a href={item} className="link links">{item}</a>
                                    ) : (
                                        <span className="font-semibold">{item}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <hr />
            <div className="footer-end">

                <div className="mt-1 pt-1 text-center">
                    <p>All Rights Reserved.
                        <a href="#!" className="link">Kraft India</a>
                        (<a href="#!" className="link">Terms of Use</a>). Developed & Managed By
                        <a href="#!" className="link"> Weblink.In Pvt. Ltd.</a></p>
                </div>
                <div className="img-foot">
                    <a href="#!"><img src="https://catalog.wlimg.com/main-common/ei.png" alt="foot img" /></a>
                </div>
            </div>
        </footer>
    );
};

export default HomeFooter;