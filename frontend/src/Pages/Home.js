import React, { useState } from 'react';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
import './styles/Home.css';

const Home = () => {
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
        <>
            <div className="header">
                <div className="head-img">
                    <img src="https://catalog.wlimg.com/1/3166335/other-images/12569-comp-image.png" alt="head-img" />
                </div>
                <div className="head-r-side">
                    <div className="gstno">
                        GST No. 07AFRPJ5370E1ZA
                    </div>
                    <div className="sms-btn">
                        <button>  <MDBIcon fas icon="mobile-alt" /> Send SMS </button>
                    </div>
                    <div className="email-btn">
                        <button>  <MDBIcon far icon="envelope" /> Send Email </button>
                    </div>
                </div>
            </div>

            <div className="nav">
                <ul className='nav-ul'>
                    <li className='home'>Home</li>|
                    <li className='about'>About Us</li>|
                    <li className='products'>Products</li>|
                    <li className='jobs'>Current Jobs</li>|
                    <li className='contact'>Contact Us</li>
                </ul>
            </div>

            <div>
                <h2>Inquiry Form</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="product" placeholder="Product" onChange={handleChange} />
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
                    <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                    <input type="text" name="country" placeholder="Country" onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Home;
