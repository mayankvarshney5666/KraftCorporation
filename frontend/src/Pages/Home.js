import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './styles/Home.css';
import Corousel from '../components/Corousel';
import TopProducts from '../components/TopProducts';
import HomeQuickEnquiry from '../components/HomeQuickEnquiry'
import HomeFooter from '../components/HomeFooter';

const Home = () => {
    return (
        <>
            <div className="header">
                <div className="head-img">
                    <a href="/">
                        <img src="https://catalog.wlimg.com/1/3166335/other-images/12569-comp-image.png" alt="head-img" />
                    </a>
                </div>
                <div className="head-r-side">
                    <div className="gstno">
                        GST No. 07AFRPJ5370E1ZA
                    </div>
                    <div className="sms-btn">
                        <button>  <MDBIcon fas icon="mobile-alt" /> Send SMS </button>
                    </div>
                    <div className="email-btn">
                        <button>  <MDBIcon far icon="envelope" /> Send Email </button>
                    </div>
                </div>
            </div>

            <div className="nav sticky-top">
                <ul className='nav-ul'>
                    <li className='home' >
                        <a href="/">
                            Home
                        </a>
                    </li>|
                    <li className='about'>
                        <a href="/about us">
                            About Us
                        </a>
                    </li>|
                    <li className='products'>
                        <a href="/products">
                            Products
                        </a>
                    </li>|
                    <li className='jobs'>

                        <a href="/">
                            Current Jobs
                        </a>
                    </li>|
                    <li className='contact'>
                        <a href="/contact us">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            <Corousel />

            <div className="wrap welcome-part">
                <div className="ac h hd_h2 mb20px">
                    <h1 className="hd_NT ttu">Welcome to our Website</h1>
                </div>
                <br />
                <div className="mc horizontal237693 hot bdr0 mt20px">

                    <div className="ic mt5px" id="1107_3-1">
                        <div className="slider lh15em ac idv_eqheight">
                            <ul className=" bxslider237693 no-scroll237693 floatNone dib abc">
                                <li style={{ "height": "92px;" }}>
                                    <div className="fact-icon w100" style={{ "height": "92px;" }}>
                                        <div className="dtc w60px vat">
                                            <div className="iconBox ac">
                                                <span className="ei-fact nature-of-business"></span>
                                            </div>
                                        </div>
                                        <div className="dtc pl15px vam">
                                            <div className="b xlarge lh14em al">Nature of Business</div>
                                            <div className="mt5px lh13em al">
                                                Dealer &amp; Distributor
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ "height": "92px;" }}>
                                    <div className="fact-icon w100" style={{ "height": "92px;" }}>
                                        <div className="dtc w60px vat">
                                            <div className="iconBox ac">
                                                <span className="ei-fact year-of-establishment"></span>
                                            </div>
                                        </div>
                                        <div className="dtc pl15px vam">
                                            <div className="b xlarge lh14em al">
                                                Year of Establishment
                                            </div>
                                            <div className="mt5px lh13em al">
                                                2001
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ "height": "92px;" }}>
                                    <div className="fact-icon w100" style={{ "height": "92px;" }}>
                                        <div className="dtc w60px vat">
                                            <div className="iconBox ac">
                                                <span className="ei-fact market-covered"></span>
                                            </div>
                                        </div>
                                        <div className="dtc pl15px vam">
                                            <div className="b xlarge lh14em al">
                                                Market Covered
                                            </div>
                                            <div className="mt5px lh13em al">
                                                Pan India
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="welcome welcome-txt aj ls large lh17em">
                    <p style={{ "text-align": "justify;" }}>
                        <strong>Kraft Corporation</strong> is bracketed with one of the fast-growing Suppliers of a comprehensive assortment of Products inclusive of Duplex Boards, Imported Grey Board, Kraft Paper and White Top Kraft Liner. Our company is driven by the aim to provide premium Paper Rolls all over India. Thus, we have associated with more than 25 paper mills throughout the country. In addition, we have collaborated with several logistics service providers. Backed by this efficient network, we provide Paper Rolls as per requirement at competitive prices and meet delivery deadlines of bulk or retail orders with ease.
                        <b className="dif ml7px">
                            <a href="#!">Read more...</a>
                        </b>
                    </p>
                </div>
            </div>

            <TopProducts />

            <div className="contact-bg">
                <div className="wrap ac">
                    <table className="w100 formTable bdr0 pr zi9">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="contact-icon mb5px">
                                        <div className="icon-inner">
                                            <i className="fa fa-location"></i>
                                        </div>
                                    </div>
                                    <div className="xlarge b mb7px">
                                        Location
                                    </div>
                                    <p>Lajpat Nagar, Delhi</p>
                                </td>
                                <td>
                                    <div className="contact-icon mb5px">
                                        <div className="icon-inner">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className="xlarge b mb7px">
                                        Mobile
                                    </div>
                                    <p> 08048771316</p>
                                </td>
                                <td>
                                    <div className="contact-icon mb5px">
                                        <div className="icon-inner">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                    </div>
                                    <div className="xlarge b mb7px">
                                        Email
                                    </div>
                                    <div>
                                        <a href="mailto:kraftcorporation@gmail.com" target="_blank" rel='noreferrer' style={{ "color": "white" }}>
                                            kraftcorporation@gmail.com
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="contact-icon mb5px">
                                        <div className="icon-inner">
                                            <i className="fa fa-desktop"></i>
                                        </div>
                                    </div>
                                    <div className="xlarge b mb7px">
                                        Web
                                    </div>
                                    <p>www.kraftcorporation.in</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <HomeQuickEnquiry />

            <HomeFooter />
        </>
    );
};

export default Home;
