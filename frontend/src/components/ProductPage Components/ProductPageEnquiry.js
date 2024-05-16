import React from 'react'
import './styles/ProductPageEnquiry.css'

const ProductPageEnquiry = ({ item }) => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8 product-page-enquiry">
                <h4 className="text-center mt-4">Looking for "<span className='title'>{item}</span>" ?</h4>


                <form className="space-y-4 pp-enquiry p-4">
                    <div className="two-input d-flex">

                        <div className='label-input'>
                            <label className="label">Name</label>
                            <input type="text" placeholder="Name" className={"input-class nameClass"} />
                        </div>
                        <div className='label-input' >
                            <label className="label">Email</label>
                            <input type="email" placeholder="Email" className={"input-class "} />
                        </div>
                    </div>

                    <div className="two-input d-flex">
                        <div className='label-input mobile'>
                            <label className="label">Mobile No.</label>
                            <div className="d-flex ">
                                <select className={"select-class mobile-options"}>
                                    <option value={+91}>+91</option>
                                    <option value={+92}>+92</option>
                                    <option value={+1}>+1</option>
                                    <option value={+44}>+44</option>
                                </select>
                                <input type="tel" placeholder="Enter Mobile Number" className={`flex-1 input-class mobile`} />
                            </div>
                        </div>

                        <div className='label-input estimation'>
                            <label className="label">Quantity</label>
                            <div className="d-flex ">

                                <input type="number" name='estQuantity' placeholder="Estimated Quantity" className="input-class" required />
                                <select name='unitType' className="select-class type-option" required>
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
                    </div>

                    <div className='label-input d-flex'>
                        <label className={"label purpose"}>
                            Purpose of Requirement
                        </label>
                        <div className="purpose-choices">

                            <div className="d-flex items-center space-x-2 radio-btn">
                                <input type="radio" name="purpose" className="text-blue-600 " />
                                <span>Reselling</span>
                            </div>
                            <div className="d-flex items-center space-x-2 radio-btn">
                                <input type="radio" name="purpose" className="text-blue-600" title='End Use' />
                                <span>End Use</span>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex requirement-detail'>
                        <label className="label detail">Requirement Details</label>
                        <textarea placeholder="I am interested. Kindly send the quotation for the same." className={"taxtarea"}></textarea>
                    </div>

                    <div className="text-center mt-5">
                        <button type="submit" className={"bg-black  text-white px-5 py-2 rounded-md"}>
                            Send Enquiry
                        </button>
                    </div>
                </form >
            </div >
        </>
    )
}

export default ProductPageEnquiry
