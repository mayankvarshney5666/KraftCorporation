import React from 'react';
import './styles/TopProducts.css';
import { MDBBtn } from 'mdb-react-ui-kit';

const TopProducts = () => {
    return (
        <div className='top-products mt20px mb20px'>
            <div className="head-txt mb20px">
                <h2 className='ac mb20px'>
                    Top Products
                </h2>
            </div>
            <div className="products">
                <div className="product-row">

                    <div className="product product1 ">
                        <div className="product-img">
                            <img src="https://2.wlimg.com/product_images/bc-small/dir_106/3166335/kraft-paper-1261621.jpg" alt="product1-img" />
                        </div>
                        <ul className='product-details'>
                            <li className='b dif xlarge hd01 lh14em'>Kraft Paper</li>
                            <li className='mt5px'>
                                <span className="b">Thickness: </span>
                                80 GSM TO 450GSM
                            </li>
                            <li className='mt5px'>
                                <span className="b">Type: </span>
                                Kraft Paper Roll,Kraft Paper
                            </li>
                            <li className='mt5px'>
                                <span className="b">Place of Origin: </span>
                                India
                            </li>
                            <li className='mt5px'>
                                <span className="b">Application: </span>
                                Multi Use
                            </li>
                            <li className='mt5px'>
                                <span className="b">Weight: </span>
                                100-110GSM,110-120GSM,120-130GSM,
                                130-140GSM,140-150GSM,150-160GSM,
                                160-170GSM,170-180GSM,80-90GSM,
                                90-100GSM
                            </li>
                            <li className='mt5px'>
                                <MDBBtn className='btn   bg-danger' rippleColor='warning'>Enquiry Now</MDBBtn>
                            </li>
                        </ul>
                    </div>
                    <div className="product product2 ">
                        <div className="product-img">

                            <img src="https://2.wlimg.com/product_images/bc-small/dir_106/3166335/duplex-boards-1502358144-1310788.jpeg" alt="product2-img" />
                        </div>
                        <ul className='product-details'>
                            <li className='b dif xlarge hd01 lh14em'>Duplex Boards</li>
                            <li className='mt5px'>
                                <span className="b">Brand Name: </span>Multi Brands
                            </li>
                            <li className='mt5px'>
                                <span className="b">Application: </span>
                                Mono carton
                            </li>
                            <li className='mt5px'>
                                <span className="b">Feature:  </span>
                                Sheets
                            </li>
                            <li className='mt5px'>
                                <span className="b">Place of Origin: </span>
                                : India
                            </li>
                            <li className='mt5px'>
                                <span className="b">Coating: </span>Yes
                            </li>

                            <li className='mt5px'>
                                <MDBBtn className='btn  bg-danger' rippleColor='warning'>Enquiry Now</MDBBtn>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product-row">
                    <div className="product product3">
                        <div className="product-img">
                            <img src="https://2.wlimg.com/product_images/bc-small/dir_106/3166335/white-top-kraft-liner-1502356680-3211941.jpeg" alt="product3-img" />
                        </div>
                        <ul className='product-details'>
                            <li className='b dif xlarge hd01 lh14em '>
                                White Top Kraft Liner
                            </li>
                            <li className='mt5px'>
                                <span className="b">
                                    Brand Name: </span>
                                W T K L
                            </li>
                            <li className='mt5px'>
                                <span className="b">Material: </span>
                                Paper
                            </li>
                            <li className='mt5px'>
                                <span className="b">
                                    Feature: </span>
                                Box Making
                            </li>
                            <li className='mt5px'>
                                <span className="b">Place of Origin: </span>
                                India
                            </li>
                            <li className='mt5px'>
                                <span className="b">
                                    Industrial Use: </span>Corrugation
                            </li>
                            <li className='mt5px'>
                                <MDBBtn className='btn bg-danger' rippleColor='warning'>Enquiry Now</MDBBtn>
                            </li>
                        </ul>
                    </div>

                    <div className="product product4">
                        <div className="product-img">
                            <img src="https://2.wlimg.com/product_images/bc-small/2021/6/3166335/grey-board-1624942383-5875863.jpeg" alt="product4-img" />
                        </div>
                        <ul className='product-details '>
                            <li className='b dif xlarge hd01 lh14em'>Grey Rigid Board
                            </li>
                            <li className='mt5px'>
                                <span className="b">
                                    Type: </span>Board
                            </li>
                            <li className='mt5px'>
                                <span className="b">
                                    Thickness: </span>
                                1mm to 4mm
                            </li>
                            <li className='mt5px'>
                                <span className="b">Application:  </span>
                                Making Box</li>
                            <li className='mt5px'>
                                <span className="b">
                                    Color: </span>Grey
                            </li>
                            <li className='mt5px'>
                                <span className="b">Pattern: </span> Plain
                            </li>

                            <li className='mt5px'>
                                <MDBBtn className='btn  bg-danger' rippleColor='warning'>Enquiry Now</MDBBtn>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopProducts;
