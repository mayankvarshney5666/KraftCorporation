import React from 'react'
import './styles/Navbar.css'
import { MDBIcon } from 'mdb-react-ui-kit'

const NavbarProducts = () => {
    return (
        <>
            <div className="nav-header sticky-top">
                <div className="head-img ">
                    <a href="/">
                        <img src="https://catalog.wlimg.com/1/3166335/other-images/12569-comp-image.png" className='nav-img' alt="head-img" />
                    </a>
                </div>

                <div className="head-r-side">
                    <table className='' >
                        <tbody >
                            <tr className='nav-row'>
                                <a href='/home' className="home" >
                                    <td title='Home'>
                                        Home
                                    </td>
                                </a>
                                <a href='/about us' className="about-us" >
                                    <td className='' title='About Us'>
                                        About Us
                                    </td>
                                </a>
                                <a href='/products' className="products" >
                                    <td title='Products' className='active'>
                                        Products
                                    </td>
                                </a>
                                <a href='/current jobs' className="current-jobs">
                                    <td title='Current Jobs'>
                                        Current Jobs
                                    </td>
                                </a>
                                <a href='/contact us' className="contact-us" >
                                    <td title='Contact Us'>
                                        Contact Us
                                    </td>
                                </a>
                                <a href='/search' className="search-btn" >
                                    <td title='Search Your Query'>
                                        <MDBIcon className=' fa-search'></MDBIcon>
                                    </td>
                                </a>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default NavbarProducts