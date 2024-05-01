import React, { useState } from 'react'
import axios from 'axios';
import './styles/ContactContent.css'

const ContactContent = () => {
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
            await axios.post('http://localhost:5000/contactus/', formData);
            alert('Query submitted successfully!');
        } catch (error) {
            console.error('Submission Error  :', error);
        }
    };
    return (
        <>
            <div className="contact-content">
                <div className="contact-details" style={{ fontSize: "14px" }}>
                    <u className='title b'>
                        Kraft India
                    </u><br /><br />
                    Mr. Dinesh Jain (+91-9868017886)
                    <br /><br />
                    Mr. Suresh Kr Jain (+91-9891026739)
                    <br /><br />
                    C118, Lajpat Nagar - II, New Delhi - 110024
                    <br /><br />
                    <span className='b'>Phone : </span>
                    +91-11-29813401 / 29812593 / 41717396 / 41717397
                    <br /><br />
                    <span className='b'>Email ID : </span> kraftcorporation@gmail.com
                    <br /><br />
                    <u className='b'>
                        View Other Contact Details
                    </u><br />
                </div>

                <div className="contact-form">
                    <span className='b'>Send us a Message</span>
                    <br /><br />
                    <form onSubmit={handleSubmit} className='form'>
                        <div className="containerClasses inputCombined">
                            <div>
                                <input type="text" name="name" className="inputClasses inputs " placeholder="* Name" onChange={handleChange} />

                            </div>
                            <div>
                                <input type="email" name="email" className='inputClasses inputs' placeholder="* Email" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="containerClasses inputCombined">
                            <div className="flexContainerClasses">
                                <input type="tel" name="phone" id='inputPhone' className="inputClasses inputs input-phone rounded-r-lg" placeholder="* Phone" onChange={handleChange} />
                            </div>
                            <div>
                                <select id="country" name='country' className="selectClasses">
                                    <option onChange={handleChange}>
                                        * Select Country
                                    </option>
                                </select>
                                {/* <input type="text" name="country" placeholder="Country"  /> */}

                            </div>
                        </div>
                        <div className="mb-4">
                        </div>
                        <div className=" d-flex justify-content-center align-items-center">
                            <textarea name="message" className=" textareaClasses textarea" placeholder="* Leave a Message for us" onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="buttonClasses send-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactContent
