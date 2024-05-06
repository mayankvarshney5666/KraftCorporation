import React from 'react'
import "./styles/Footer.css"
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="mt-5 p-3 footer">
                    <div className="container">
                        <div><MDBIcon flag='us' />


                            <MDBIcon flag='poland' />

                            <MDBIcon flag='china' />Kraft Corporation</div>
                        <div className="visitor">
                            <span>Visitor No.:</span>
                            <span>26004</span>
                        </div>

                    </div>

                    <div className='navs '>
                        <table>
                            <tr className=''>

                                <td className="home"> Home </td>
                                <td>|</td>
                                <td className="about-us">
                                    About Us
                                </td>
                                <td>|</td>
                                <td className="products">
                                    Products
                                </td>
                                <td>|</td>
                                {/* <td className="jobs">
                                    Current Jobs
                                </td> */}
                                <td className='current-jobs'>Current Jobs</td>
                                <td>|</td>
                                <td className="contact-us">
                                    Contact Us
                                </td>
                                <td>|</td>
                                <td className="enquiry">
                                    Enquiry
                                </td>
                                <td>|</td>
                                <td className="site-map">
                                    Site Map
                                </td>
                                <td className="rss">
                                    <img src="https://catalog.wlimg.com/templates-images/12569/common/rss_icon.png" alt="RSS IMG" />
                                </td>
                            </tr>
                        </table>

                    </div>
                    {/* <hr className='hr hr-dotted' /> */}
                    <hr className='hrs' />
                    <div className="footer-end">

                        <div className="mt-1 pt-1 text-center">
                            <p>All Rights Reserved.
                                <a href="#!" className="link">Kraft India</a>
                                (<a href="#!" className="link">Terms of Use</a>). <br /> Developed & Managed By
                                <a href="#!" className="link"> Weblink.In Pvt. Ltd. </a></p>
                        </div>
                        <div className="img-foot">
                            <a href="#!"><img src="https://catalog.wlimg.com/main-common/ei.png" alt="foot img" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
