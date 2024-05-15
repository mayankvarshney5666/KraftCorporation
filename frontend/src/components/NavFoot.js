import React from 'react';

const NavFoot = (props) => {
    const { cat, arrow, item } = props

    return (
        <div>
            <section className="headBg theme2 bread-right">
                <div className="nav-foot">
                    <div className="page-title-inner about-head fo">
                        <div className="h1 head mt-2 d-flex align-items-center">
                            <h3>{cat}</h3>
                        </div>
                        <div className="breadcrumb nav-passer ar uu small">
                            <a href="/home" title="Home">Home</a> <span className="ffv p2px"> › </span> {cat} <span className="ffv p2px"> {arrow}  </span>  {item}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavFoot
