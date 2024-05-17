import React from 'react'
import './styles/ProductMainContent.css'
import { MDBBtn } from 'mdb-react-ui-kit';



const ProductMainContent = () => {
    return (
        <>
            <div className='main-content'>
                <div className="max-w-4xl p-4 shadow-lg ">
                    <div className="d-flex ">
                        <div className="w-full md:w-1/3">
                            <img src="https://2.wlimg.com/product_images/bc-full/dir_106/3166335/kraft-paper-1261621.jpg" alt="Kraft Paper" className="w-full border main-img" />
                            <div className="d-flex ms-5 space-x-2 mt-2">
                                <img src="https://2.wlimg.com/product_images/bc-full/dir_106/3166335/kraft-paper-1261621.jpg" alt="Kraft Paper Thumbnail 1" className={"sub-imgs "} />
                                <img src="https://2.wlimg.com/product_images/bc-full/dir_106/3166335/image-01_p_1261621_142578.jpg" alt="Kraft Paper Thumbnail 2" className={"sub-imgs"} />
                                <img src="https://2.wlimg.com/product_images/bc-full/dir_106/3166335/image-02_p_1261621_142579.jpg" alt="Kraft Paper Thumbnail 3" className={"sub-imgs"} />
                            </div>
                        </div>

                        <div className="w-100 detail-content  md:w-2/3 md:pl-4">
                            <h4 className="mb-0">Kraft Paper</h4>

                            <MDBBtn outline size='sm' className={'btn danger  mb-1 '} color='danger'>Get Best Price</MDBBtn>
                            <p className="mb-1">
                                MOQ : <span className='b'>10000 Kilogram</span>
                            </p>

                            <tr className="mt-3 d-flex small-detail">
                                <td className='w-25'>Business Type</td>
                                <td className='b'>Exporter, Supplier, Retailer, Wholesaler, Trader, Importer</td>
                            </tr>
                            <hr className='mt-2' />

                            <tr className="d-flex small-detail">
                                <td className='w-25'>Thickness</td>
                                <td className='b'>80 GSM TO 450GSM</td>
                            </tr>
                            <hr className='mt-2' />

                            <tr className="d-flex small-detail">
                                <td className='w-25'>Type</td>
                                <td className='b'>Kraft Paper Roll, Kraft Paper</td>
                            </tr>
                            <hr className='mt-2' />

                            <tr className="d-flex small-detail">
                                <td className='w-25'>Place of Origin</td>
                                <td className='b'>India</td>
                            </tr>
                            <hr className='mt-2' />


                            <u className='title' >
                                <a href="#products-details" className="title  u mb-4">Click to view more</a>
                            </u>
                            <p className="title mt-5">Preferred Buyer From</p>
                            <div className="mb-2 d-flex small-detail">
                                <td className='w-25'>Location:</td>
                                <td className='b'>Worldwide</td>
                            </div>
                            <hr className='mt-2' />

                            <div className="d-flex">
                                <MDBBtn outline size='lg' color='dark' className={'request-call px-5'}>
                                    REQUEST TO CALL
                                </MDBBtn>
                                <MDBBtn size='lg' className={'bg-danger ms-2 send-enquiry px-5'}>
                                    SEND ENQUIRY
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductMainContent
