import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './styles/NavbarHeader.css'
const NavbarHeader = () => {
    return (
        <div>
            <div className="header heeder">
                <div className="head-img">
                    <MDBIcon fas icon="map-marker-alt" />&nbsp;
                    <span> Lajpat Nagar, Delhi</span>
                    <span className='b gstno'>&nbsp;&nbsp;
                        GST No. 07AFRPJ5370E1ZA</span>
                </div>
                <div className="head-r-side heed-r-side">
                    <div className="email-btn emeil-btn">
                        <button>  <MDBIcon far icon="envelope" />&nbsp; Send Email </button>
                    </div>
                    <div className="smss-btn">
                        <button>  <MDBIcon fas icon="mobile-alt" />&nbsp; Send SMS </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader
