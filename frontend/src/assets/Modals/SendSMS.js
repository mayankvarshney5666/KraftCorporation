import React, { useState } from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBIcon
} from 'mdb-react-ui-kit';
import './styles/SendSMS.css'

const SendSMS = () => {
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleOpenModal = () => setOptSmModal(!optSmModal);
    return (
        <>

            <MDBBtn onClick={toggleOpenModal}>
                <MDBIcon fas icon="mobile-alt" /> &nbsp; Send SMS
            </MDBBtn>
            <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
                <MDBModalDialog size='sm' >
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className=''>
                                Send SMS Enquiry
                            </MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpenModal}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>

                            <form className="p-6 send-sms-form rounded-lg shadow-lg max-w-sm mx-auto">
                                <textarea className="taxtarea text-sm p-3 text-zinc-600 mb-2" placeholder='Get best quote quickly by sending your requirement through SMS directly.'>
                                </textarea>

                                <div className="space-y-3 mb-4">
                                    <input type="text" placeholder="Enter Name" className="inputClass" />
                                    <input type="email" placeholder="Enter Email" className="inputClass" />
                                    <div className="d-flex align-items-center">
                                        <select className="country-number">
                                            <option value={+91}>+91</option>
                                            <option value={+1}>+1</option>
                                            <option value={+44}>+44</option>
                                        </select>
                                        <input type="tel" placeholder="Mobile No" className="input-phone inputClass rounded-r-md" />
                                    </div>
                                </div>
                                <div className="buttonClass text-center">
                                    Send SMS
                                </div>
                            </form>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default SendSMS;
