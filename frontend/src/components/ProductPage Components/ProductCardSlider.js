import React, { useEffect, useState } from 'react'

const SLIDE_WIDTH = 400; // Width of each slide
const TOTAL_SLIDES = 3; // Total number of slides

const ProductCardSlider = () => {
    const productsDetails = [
        {
            title: "Black Coated Rigid Board",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/2021/6/3166335/black-coated-paper-board-1624942910-5875876.jpeg"
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
            title: "PE Coated Rigid Board",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/2021/6/3166335/pe-coated-board-1624942718-5875869.jpeg"
        }, {
            title: "Kraft Paper",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/kraft-paper-1261621.jpg",
            productUrl: "/kraft-paper"
        },
        {
            title: "Duplex Boards",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/duplex-boards-1502358144-1310788.jpeg"
        },
        {
            title: "White Top Kraft Linear",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/white-top-kraft-liner-1502356680-3211941.jpeg"
        },
        {
            title: "Brown Kraft Paper",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/brown-craft-paper-1502357688-3213211.jpeg"
        }
    ];

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        setSlideIndex((slideIndex + 1) % TOTAL_SLIDES);
    };

    const previousSlide = () => {
        setSlideIndex((slideIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
    };

    const updateSlidePosition = () => {
        const slideWidth = document.querySelector('#slider > div').clientWidth;
        document.getElementById('slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    };

    useEffect(() => {
        updateSlidePosition();
    }, [slideIndex]);

    return (
        <>
            <div className="max-w-4xl mx-auto p-4" id="productSlider">
                <h2 className="text-xl font-semibold text-center mb-6">Explore More Products</h2>
                <span className="d-flex items-center justify-between">
                    <button onClick={previousSlide} className="text-3xl">&#x3C;</button>
                    <div className="overflow-hidden d-flex flex-grow" id="slider">
                        <div className="d-flex transition-transform duration-300 ease-in-out">
                            {productsDetails.map((productDetail, index) => (
                                <div key={index} className="flex flex-direction-col items-center p-4">
                                    <img src={productDetail.imageUrl} alt={`Slide ${index + 1}`} />
                                    <p className="mt-2 font-semibold">{productDetail.title}</p>
                                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Get Best Quote</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={nextSlide} className="text-3xl">&#x3E;</button>
                </span>
            </div>
        </>
    )
}

export default ProductCardSlider
