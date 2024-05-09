import React from 'react'
import './styles/ProductItems.css'

const ProductItems = () => {
    const products = [
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
        }
    ];
    const productsRow2 = [
        {
            title: "Kraft Paper",
            imageUrl: "https://2.wlimg.com/product_images/bc-small/dir_106/3166335/kraft-paper-1261621.jpg"
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
    return (
        <>
            <div className=" product-items max-w-7xl my-3 sm:px-6 lg:px-8">
                <div className="product-row-1 ">
                    <div className="title-text-part">
                        <h2 className="title product-title">Rigid Boards</h2>
                        <hr />
                        <p className="title-text">
                            We are supplying rigid broad according to customer need and specifications.
                        </p>
                    </div>
                    <div className="products mt-4 d-flex mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((product, index) => (
                            <div key={index} className="flex flex-col items-center product-item tada">
                                <div className="product-img  w-100">
                                    <img src={product.imageUrl} alt={product.title} className="w-100 h-auto" />
                                </div>

                                <p className="mt-3 text-center">{product.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product-row-2 mt-5">

                    <div className="title-text-part">
                        <h2 className="title product-title">Other Products</h2>
                        <hr />
                        {/* <p className="title-text">
                            We are supplying rigid broad according to customer need and specifications.
                        </p> */}
                    </div>
                    <div className="products mt-4 d-flex mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {productsRow2.map((product, index) => (
                            <div key={index} className="flex flex-col items-center product-item">
                                <div className="product-img h-75 w-100">
                                    <img src={product.imageUrl} alt={product.title} className="w-100 h-auto" />
                                </div>

                                <p className="mt-3 text-center">{product.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div >

        </>
    )
}

export default ProductItems
