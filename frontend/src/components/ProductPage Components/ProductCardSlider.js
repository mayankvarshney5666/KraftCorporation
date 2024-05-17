import React, { useState, useRef } from 'react';
import { Container, Card } from 'react-bootstrap';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import './styles/ProductCardSlider.css';

const ProductCardSlider = () => {
    const productsDetails = [
        {
            title: "Black Coated Rigid Board",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/2021/6/3166335/black-coated-paper-board-1624942910-5875876.jpeg"
        },
        {
            title: "Imported Grey Boards",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/imported-grey-board-1517483819-3622990.jpeg"
        },
        {
            title: "Grey Rigid Board",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/2021/6/3166335/grey-board-1624942383-5875863.jpeg"
        },
        {
            title: "Grey White Rigid Board",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/2021/12/3166335/grey-white-rigid-board-1639397280-6115209.jpeg"
        },
        {
            title: "Kraft Paper",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/kraft-paper-1261621.jpg",
            productUrl: "/kraft-paper"
        },
        {
            title: "White Top Kraft Linear",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/white-top-kraft-liner-1502356680-3211941.jpeg"
        },
        {
            title: "Brown Kraft Paper",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/brown-craft-paper-1502357688-3213211.jpeg"
        },
        {
            title: "PE Coated Rigid Board",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/2021/6/3166335/pe-coated-board-1624942718-5875869.jpeg"
        },
        {
            title: "Duplex Boards",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/duplex-boards-1502358144-1310788.jpeg"
        },
    ];

    return (
        <>
            <div id="productSlider" >
                <ItemsSlider title="Explore More Products" >
                    {productsDetails.map((productDetail, index) => (
                        <span key={index} >
                            <Card className='item-card' style={{ width: '15.2rem', marginBottom: '2px' }}>
                                <div className="hover-zoom">

                                </div>
                                <Card.Img variant="top" className='card-img h-75' src={productDetail.imageUrl} alt={productDetail.title} title={productDetail.title} />
                                <Card.Body >
                                    <Card.Title className='title card-title text-center mt-3 mb-2 b'>{productDetail.title}
                                    </Card.Title>
                                    <Card.Text className='card-text text-center'>
                                        <button className='bg-danger text-light btn px-3 py-2 quote-btn'>
                                            Get Best Quote
                                        </button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </span>
                    ))}
                </ItemsSlider>
            </div>
        </>
    );
};

export default ProductCardSlider;

const ItemsSlider = ({ title, children }) => {
    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);

    const slide = (shift) => {
        scrl.current.scrollBy({
            left: shift,
            behavior: 'smooth'
        });

        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);
        if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setScrollEnd(true);
        } else {
            setScrollEnd(false);
        }
    };

    return (
        <Container fluid className=' p-3 item-slider-container'>
            <h4 className='px-3 mb-3 item-title text-center'>{title}</h4>
            <div className='item-slider'>
                <div onClick={() => slide(-100)} className={`left-arrow-left ${(scrollX < 1) ? 'is-disabled-hide' : ''}`}>
                    <MdArrowBackIos size="50px" />
                </div>
                <div ref={scrl} onScroll={scrollCheck} className="item-container">
                    {children}
                </div>
                <div className={`right-arrow-right ${(!scrollEnd) ? '' : 'is-disabled-hide'}`} onClick={() => slide(+100)}>
                    <MdArrowForwardIos size="50px" />
                </div>
            </div>
        </Container>
    );
};