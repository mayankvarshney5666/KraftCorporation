import React from 'react'
import './styles/AboutItem.css';

const SidePanel = () => {
    const style = {
        color: "#333333",
        fontSize: "13px",
        "text-align": "justify;"
    }
    return (
        <div>
            <div className="column_Box mc thinColumnLink" style={style}>
                <div className="tcl bullet divider">
                    <div className="h h2">
                        <b className="plusMinus"></b>
                        <p className="b dif rHead pt-3 pb-3">
                            <a href="/products" title="Products">Products</a>
                        </p>
                    </div>
                    <div className="ic showHide_rp">
                        <ul>
                            <li>
                                <p className="ofh b">
                                    <a href="https://www.kraftcorporation.in/kraft-paper.htm" title="Kraft Paper">Kraft Paper</a></p>
                            </li>
                            <li>

                                <b className="b2 fl"></b>
                                <b className="b2 fl"></b>
                                <p className="ofh b  mt-">
                                    <a href="https://www.kraftcorporation.in/duplex-boards.htm" title="Duplex Boards">Duplex Boards</a></p>
                            </li>
                            <li>
                                <b className="b2 fl"></b>
                                <p className="ofh b  mt-"><a href="https://www.kraftcorporation.in/white-top-kraft-liner.htm" title="White Top Kraft Liner">White Top Kraft Liner</a></p>
                            </li>
                            <li>
                                <b className="b2 fl"></b>
                                <p className="ofh b  mt-"><a href="https://www.kraftcorporation.in/brown-craft-paper.htm" title="Brown Kraft Paper">Brown Kraft Paper</a></p>
                            </li>
                            <li>
                                <b className="b2 fl"></b>
                                <b className="plus"></b>
                                <p className="ofh b  mt-">
                                    <a href="https://www.kraftcorporation.in/rigid-boards.htm" title="Rigid Boards">Rigid Boards</a>
                                </p>
                                <ul className="dn" style={{ display: "none;" }}>
                                    <li><b className="b3 fl"></b><p className="ofh"><a href="https://www.kraftcorporation.in/grey-rigid-board.htm" title="Grey Rigid Board">Grey Rigid Board</a></p>
                                    </li>
                                    <li><b className="b3 fl"></b><p className="ofh"><a href="https://www.kraftcorporation.in/pe-coated-rigid-board.htm" title="PE Coated Rigid Board">PE Coated Rigid Board</a></p>
                                    </li>
                                    <li><b className="b3 fl"></b><p className="ofh"><a href="https://www.kraftcorporation.in/black-coated-rigid-board.htm" title="Black Coated Rigid Board">Black Coated Rigid Board</a></p>
                                    </li>
                                    <li><b className="b3 fl"></b><p className="ofh"><a href="https://www.kraftcorporation.in/grey-white-rigid-board.htm" title="Grey White Rigid Board">Grey White Rigid Board</a></p>
                                    </li>
                                </ul>
                            </li>
                        </ul></div>
                </div>

            </div>

            {/* Sencond Table */}
            <div className="column_Box mt-3 mc thinColumnLink" style={style}>
                <div className="tcl bullet  divider">
                    <div className="h h2 ">
                        <b className="plusMinus"></b>
                        <p className="b dif rHead pt-3 pb-3">
                            Contact Us
                        </p>
                    </div>
                    <div className="ic showHide_rp">
                        <ul>
                            <li className='border-bottom-dashed'>
                                <p className="ofh dif b">
                                    Kraft India
                                </p>
                            </li>
                            <li>

                                <b className="b2 fl"></b>
                                <p className="ofh   mt-">
                                    C118, Lajpat Nagar - II, New Delhi - 110024, Lajpat Nagar, - 110024, India
                                </p>
                            </li>
                            <li>
                                <b className="b2 fl"> </b>
                                <p className="ofh  mt-">
                                    <span className='b'>Mobile : </span>
                                    +91-9891026739, +91-9773983738
                                </p>
                            </li>
                            <li>
                                <b className="b2 fl"></b>
                                <p className="ofh  mt-">
                                    <span className='b'>Call Us : </span>
                                    <span className='title'>08048771316</span></p>
                            </li>
                            <li>
                                <b className="b2 fl"></b>
                                {/* <b className="plus"></b> */}
                            </li>
                        </ul></div>
                </div>
            </div>
        </div>


    )
}

export default SidePanel
