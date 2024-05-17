import React from 'react';
import './styles/KraftPaper.css'

const KraftPaperProductDetails = () => {
    return (
        <>
            <div className="max-w-4xl  p-4 bg-whitesmoke shadow-md products-details" id='products-details'>
                <p className="mb-4 head-text">Product Details</p>
                <div className="d-flex  product-detail">
                    <div className='w-50 mb-4'>
                        <ProductDetail title="Application" content="Multi Use" />
                        <div className="color-detail">

                            <ProductDetail title="Color" content="Brown, NATURAL SHADE, GOLDEN AND YELLOW, WHITE TOP, KOREAN" />
                        </div>
                        <ProductDetail title="Country of Origin" content="India" />
                        <ProductDetail title="Condition" content="Made To Order" />
                    </div>
                    <div className=' w-50'>
                        <div className="weight-detail">

                            <ProductDetail title="Weight" content="100-110GSM,110-120GSM,120-130GSM,130-140GSM,140-150GSM,150-160GSM,160-170GSM,170-180GSM,80-90GSM,90-100GSM" />
                        </div>
                        <ProductDetail title="Feature" content="Recyclable" />
                        <ProductDetail title="Brand Name" content="Multi Brand" />
                    </div>
                </div>
                <p className=" detail-txt mb-4">
                    The company is the known Supplier of high quality Kraft Paper, which is a sturdy machine-made paper created using wood pulp. It is widely used for the purpose of packaging, paper bag, carton boxes, wrapping product, packing materials, insulating agent in electrical equipment and various others. Kraft Paper that we offer is sourced from reliable manufacturers, who make use of only ultramodern corrugating technologies. We make it available as per the requirements of the buyers, courtesy our associations with more than 25 paper mills across the nation. Buyers can purchase bulk quantities of Kraft Paper Rolls from us at market leading prices.
                </p>
                <span className='btn-yes text-center'>

                    <button className="text-white py-2 px-4 ">Yes! I am interested</button>
                </span>
            </div>



        </>
    )
}

export default KraftPaperProductDetails

const ProductDetail = ({ title, content }) => {
    return (
        <>
            <div className=' one-detail px-1 mt-'  >
                <span className="detail-title font-semibold ">{title}</span>
                <p className='b content' >{content}</p>
            </div>
            <hr className='hr-below mt-2' />
        </>
    );
};