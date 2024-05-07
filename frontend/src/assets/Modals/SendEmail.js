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

const SendEmail = () => {

    const [optSmModal, setOptSmModal] = useState(false);
    const toggleOpenModal = () => setOptSmModal(!optSmModal);
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

                            <form className="p-6 send-sms-form rounded-lg shadow-lg max-w-sm mx-auto">
                                <select className="selectClass" >
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
                                        <input type="text" placeholder="Est Quantity" className="inputClass" />
                                    </div>
                                    <div className="unit">
                                        <input type="text" placeholder="Unit Type" className="inputClass" />
                                    </div>
                                </div>
                                <textarea className="taxtarea text-sm p-3 text-zinc-600 mb-2" placeholder='Describe your requirement in detail. We will get back soon.'>
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
