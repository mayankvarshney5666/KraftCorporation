import React from 'react'
import './styles/ContactContent.css'
import HomeQuickEnquiry from './HomeQuickEnquiry';
const INPUT_CLASS = "mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";
const LABEL_CLASS = "block text-sm font-medium text-zinc-700";
const REQUIRED_CLASS = "text-red-500";

const ContactContent = () => {
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
                    {/* <div className="max-w-4xl mx-auto p-6 bg-white">
                        <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                        <form>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Name" required />
                                <input type="email" placeholder="Email" required /><br />
                                <input type="tel" placeholder="Phone" required />
                                <div>

                                    <span className={REQUIRED_CLASS}>*</span>
                                    <select className={INPUT_CLASS}>
                                        <option>Select Country</option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>United Kingdom</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="mb-6">
                                <span className={REQUIRED_CLASS}>*</span>
                                <textarea className={INPUT_CLASS} placeholder="Leave a Message for us">
                                </textarea>
                            </div>
                            <button type="submit" className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </form>
                    </div> */}
                    <HomeQuickEnquiry />


                </div>
            </div>
        </>
    )
}

export default ContactContent
