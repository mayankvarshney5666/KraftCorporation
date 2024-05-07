import React from 'react'

const HomeNavbar = () => {
    return (
        <>
            <div className="nav sticky-top">
                <table className='nav-table'>
                    <tr>
                        <a href="/">
                            <td className='home'>
                                Home
                            </td>
                        </a>
                        &nbsp; &nbsp;  &nbsp;
                        | &nbsp; &nbsp; &nbsp;
                        <a href="/about us">
                            <td>
                                AboutUs   &nbsp; &nbsp;  &nbsp;
                            </td>
                        </a>
                        | &nbsp; &nbsp; &nbsp;
                        <a href="/products">
                            <td>
                                Products  &nbsp; &nbsp; &nbsp;
                            </td>
                        </a>
                        | &nbsp; &nbsp; &nbsp;
                        <a href="/current jobs">
                            <td>
                                Current Jobs   &nbsp; &nbsp; &nbsp;
                            </td>
                        </a>
                        | &nbsp; &nbsp; &nbsp;
                        <a href="/contact us">
                            <td>
                                Contact Us
                            </td>
                        </a>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default HomeNavbar
