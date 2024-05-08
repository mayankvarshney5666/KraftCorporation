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
import axios from 'axios';

const SendSMS = () => {
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleOpenModal = () => setOptSmModal(!optSmModal);

    const [formData, setFormData] = useState({
        requirement: '',
        name: '',
        email: '',
        phone: '',
        countryNumber: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/send-sms/', formData);
            alert('Thank You for sending SMS Request!');
            setFormData({ requirement: '', name: '', email: '', countryNumber: '', phone: '', });
        } catch (error) {
            console.error('Submission Error :', error);
        }
    };

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

                            <form onSubmit={handleSubmit} className="p-6 send-sms-form rounded-lg shadow-lg max-w-sm mx-auto">
                                <textarea name='requirement' className="taxtarea text-sm p-3 text-zinc-600 mb-2" placeholder='Get best quote quickly by sending your requirement through SMS directly.' onChange={handleChange} required >
                                </textarea>

                                <div className="space-y-3 mb-4">
                                    <input type="text" name="name" placeholder="Enter Name" className="inputClass" onChange={handleChange} required />

                                    <input type="email" placeholder="Enter Email" name="email" className="inputClass" onChange={handleChange} required />

                                    <div className="d-flex align-items-center">
                                        <select className="country-number" name='countryNumber' onChange={handleChange} required>
                                            <option value={+91}>+91</option>
                                            <option value={+1}>+1</option>
                                            <option value={+44}>+44</option>
                                        </select>

                                        <input type="tel" name='phone' minLength={10} maxLength={10} placeholder="Mobile No" required className="input-phone inputClass rounded-r-md" onChange={handleChange} />
                                    </div>
                                </div>
                                <button type='submit' className="buttonClass text-center">
                                    Send SMS
                                </button>
                            </form>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default SendSMS;
