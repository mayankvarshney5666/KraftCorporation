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
import axios from 'axios';

const SendEmail = () => {
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleOpenModal = () => setOptSmModal(!optSmModal);

    const [formData, setFormData] = useState({
        product: '',
        estQuantity: '',
        unitType: '',
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
            await axios.post('http://localhost:5000/send-email/', formData);
            alert('Thank You for sending Email to us!');
            setFormData({
                product: '', estQuantity: '', unitType: '', requirement: '', name: '', email: '', countryNumber: '', phone: '',
            });
        } catch (error) {
            console.error('Submission Error :', error);
        }
    };

    return (
        <>
            <MDBBtn onClick={toggleOpenModal}>
                <MDBIcon far icon="envelope" /> &nbsp; Send Email           </MDBBtn>
            <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
                <MDBModalDialog size='sm' >
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle className=''>
                                Send Email
                            </MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpenModal}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>

                            <form onSubmit={handleSubmit} className="p-6 send-sms-form  rounded-lg shadow-lg max-w-sm mx-auto">
                                <select name='product' className="options" onChange={handleChange} >
                                    <option value="Select">
                                        Product / Service Looking For
                                    </option>
                                    <option value="Black Coated Rigid Boards">
                                        Black Coated Rigid Boards
                                    </option>
                                    <option value="Brown Kraft Paper">
                                        Brown Kraft Paper
                                    </option>
                                    <option value="DUPLEX BOARDS">
                                        Duplex Boards
                                    </option>
                                    <option value="Grey Rigid Board">
                                        Grey Rigid Board
                                    </option>
                                    <option value="Grey White Rigid Board">
                                        Grey White Rigid Board
                                    </option>
                                    <option value="Imported Grey Borads">
                                        Imported Grey Borads
                                    </option>
                                    <option value="Kraft Paper">
                                        Kraft Paper
                                    </option>
                                    <option value="PE Coated Rigid Boards">
                                        PE Coated Rigid Boards
                                    </option>
                                    <option value="White Top Kraft Linear">
                                        White Top Kraft Linear
                                    </option>
                                </select>

                                <div className="quantity d-flex ">
                                    <div className="est">
                                        <input type="text" name='estQuantity' placeholder="Est Quantity" className="inputClass" onChange={handleChange} />
                                    </div>
                                    <div className="unit">
                                        <select name='unitType' className="options" onChange={handleChange}>
                                            <option value="Unit Type">
                                                Unit Type
                                            </option>
                                            <option value="kg">
                                                Kilogram (kg)
                                            </option>
                                            <option value="g">
                                                Gram (g)
                                            </option>
                                            <option value="ton">
                                                Tonne (ton)
                                            </option>
                                            <option value="quintal">
                                                Quintal (q)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <textarea name='requirement' className="taxtarea text-sm p-3 text-zinc-600 mb-2" placeholder='Describe your requirement in detail. We will get back soon.' onChange={handleChange} >
                                </textarea>

                                <div className="space-y-3 mb-4">
                                    <input type="text" name='name' placeholder="Enter Name" className="inputClass" onChange={handleChange} />
                                    <input type="email" name='email' placeholder="Enter Email" className="inputClass" onChange={handleChange} />
                                    <div className="d-flex align-items-center">
                                        <select name='countryNumber' className="country-number" onChange={handleChange} >
                                            <option value={+91}>+91</option>
                                            <option value={+1}>+1</option>
                                            <option value={+44}>+44</option>
                                        </select>
                                        <input type="tel" name='phone' placeholder="Mobile No" className="input-phone inputClass rounded-r-md" onChange={handleChange} />
                                    </div>
                                </div>
                                <div onClick={handleSubmit} className="buttonClass text-center">
                                    Send Email
                                </div>
                            </form>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    )
}

export default SendEmail
