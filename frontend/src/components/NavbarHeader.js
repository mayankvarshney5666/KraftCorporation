import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './styles/NavbarHeader.css'
import SendSMS from '../assets/Modals/SendSMS';
import SendEmail from '../assets/Modals/SendEmail';

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
                        <SendEmail />
                    </div>
                    <div className="smss-btn">
                        <SendSMS />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader
