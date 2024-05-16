import React, { useState } from 'react';
import axios from 'axios';
import './styles/HomeQuickEnquiry.css'

const HomeQuickEnquiry = () => {
    const [formData, setFormData] = useState({
        product: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        country: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/inquiries/', formData);
            alert('Query submitted successfully!');
        } catch (error) {
            console.error('Submission Error  :', error);
        }
    };

    return (
        <section className="max-w-4xl mx-auto p-8 shadow-lg section-quick-enquiry" id='homeEnquiry'>

            <h2 className="text-2xl pt-5 mb-6 text-center">Quick Enquiry</h2>
            <div className="quick-enquiry d-flex justify-content-center align-items-center ">

                <form onSubmit={handleSubmit}>
                    <div className="containerClasses">
                        <div>
                            <select name='product' className="selectClasses product-n-services" onChange={handleChange} required>
                                <option value="Not Selected">
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

                        </div>
                        <div>
                            <input type="text" name="name" className="inputClasses" placeholder="Your Name" onChange={handleChange} required />

                        </div>
                    </div>
                    <div className="containerClasses">
                        <div>

                            <input type="email" name="email" className='inputClasses' placeholder="Email" onChange={handleChange} required />

                        </div>
                        <div>
                            <select name='country' className="selectClasses country" onChange={handleChange}>
                                <option value={"India"}>India</option>
                                <option value={"Pakistan"}>Pakistan</option>
                                <option value={"United Kingdom"} >United Kingdom</option>
                                <option value={"United States"}>
                                    United States
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flexContainerClasses">
                            <select name='phone-country' className="selectClasses d-flex p-2" required>
                                <option value={+91}>+91</option>
                                <option value={+92}>+92</option>
                                <option value={+1}>+1</option>
                                <option value={+44}>+44</option>
                            </select>
                            <input type="tel" name="phone" id='input-phone' maxLength={10} minLength={10} className="inputClasses" placeholder="Phone / Mobile" onChange={handleChange} required />

                        </div>
                    </div>
                    <div className="">
                        <textarea name="message" className="txtarea" placeholder="Leave a Message for us" onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="buttonClasses">Send Message</button>
                </form>
            </div >
        </section >
    );
};

export default HomeQuickEnquiry;