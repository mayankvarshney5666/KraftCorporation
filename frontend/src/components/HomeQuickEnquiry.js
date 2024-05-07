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
        <section className="max-w-4xl mx-auto p-8 shadow-lg section-quick-enquiry">

            <h2 className="text-2xl pt-5 mb-6 text-center">Quick Enquiry</h2>
            <div className="quick-enquiry d-flex justify-content-center align-items-center ">

                <form onSubmit={handleSubmit}>
                    <div className="containerClasses">
                        <div>
                            <input type="text" name="product" className="inputClasses"
                                placeholder="Product / Services Looking For " onChange={handleChange} required />

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
                            <select name='country' className="selectClasses country">
                                <option onChange={handleChange}>United Kingdom</option>
                                <option value={"India"} onChange={handleChange}>
                                    India
                                </option>
                                <option value={"United States"} onChange={handleChange}>
                                    United States
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flexContainerClasses">
                            <select name='phone-country' className="selectClasses inline-flex p-2 text-sm bg-zinc-200 border " required>
                                <option value="+44" >+91</option>
                            </select>
                            <input type="tel" name="phone" id='input-phone' className="inputClasses input-phone rounded-r-lg" placeholder="Phone / Mobile" onChange={handleChange} required />

                        </div>
                    </div>
                    <div className="m5 ">
                        <textarea name="message" className="txtarea" placeholder="Leave a Message for us" onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="buttonClasses">Send Message</button>
                </form>
            </div >
        </section >
    );
};

export default HomeQuickEnquiry;