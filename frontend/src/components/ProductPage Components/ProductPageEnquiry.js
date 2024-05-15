import React from 'react'
import './styles/ProductPageEnquiry.css'

const inputClasses = "w-full border-zinc-300 rounded-md shadow-sm";
const selectClasses = "border-zinc-300 rounded-md shadow-sm";
const buttonClasses = "bg-black text-white px-5 py-2 rounded-md";

const ProductPageEnquiry = ({ item }) => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8 product-page-enquiry">
                <h2 className="text-2xl font-semibold text-center mt-4">Looking for "<span className='title'>{item}</span>" ?</h2>


                <form className="space-y-4 pp-enquiry">
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="two-input d-flex">

                        <div className='label-input'>
                            <label className="block mb-1">Name</label>
                            <input type="text" placeholder="Name" className={"inputClass"} />
                        </div>
                        <div className='label-input' >
                            <label className="block mb-1">Email</label>
                            <input type="email" placeholder="Email" className={"inputClass"} />
                        </div>
                    </div>

                    <div className="two-input d-flex">

                        <div className='label-input'>
                            <label className="block mb-1">Mobile No.</label>
                            <div className="d-flex space-x-2">
                                <select className={"selectClass"}>
                                    <option>+1</option>
                                    <option>+44</option>
                                    <option>+91</option>
                                </select>
                                <input type="tel" placeholder="Enter Mobile No." className={`flex-1 inputClass`} />
                            </div>
                        </div>

                        <div className='label-input'>
                            <label className="block mb-1">Quantity</label>
                            <div className="d-flex space-x-2">
                                <input type="number" placeholder="Estimated Quantity" className={`flex-1 inputClass`} />
                                <select className={"selectClass"}>
                                    <option>Kilogram</option>
                                    <option>Ton</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}

                    <div className='label-input'>
                        <label className={"labelClasses"}>Purpose of Requirement</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="purpose" className="text-blue-600" />
                                <span>Reselling</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="purpose" className="text-blue-600" />
                                <span>End Use</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-1">Requirement Details</label>
                        <textarea placeholder="I am interested. Kindly send the quotation for the same." className={"inputClass"}></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className={buttonClasses}>
                            Send Enquiry
                        </button>
                    </div>

                </form >
            </div >
        </>
    )
}

export default ProductPageEnquiry
