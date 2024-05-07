import React from 'react'
import SendSMS from '../assets/Modals/SendSMS'
import SendEmail from '../assets/Modals/SendEmail'

const HomeNavHeader = () => {
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
                        <SendSMS />
                    </div>
                    <div className="email-btn">
                        <SendEmail />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNavHeader
