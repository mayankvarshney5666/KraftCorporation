import React from 'react'


const NavFoot = (props) => {
    const { item } = props

    return (
        <div>
            <section className="headBg theme2 bread-right">
                <div className="wrap">
                    <div className="page-title-inner about-head fo">
                        <div className="h1 head mt-2 d-flex align-items-center">
                            <h3>{item}</h3>
                        </div>
                        <div className="breadcrumb ar uu small">
                            <a href="/home" title="Home">Home</a> <b className="ffv p2px"> › </b> {item}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavFoot
