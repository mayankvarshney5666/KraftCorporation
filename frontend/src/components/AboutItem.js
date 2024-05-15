import React from 'react';
import './styles/AboutItem.css';
import SidePanel from './SidePanel';

const AboutItem = () => {
    const style = {
        color: "#333333",
        fontSize: "13px",
        "text-align": "justify;"
    }
    const liStyle = {
        margin: "0px 0px 5px",
        listStyleType: "disc",
    }
    return (
        <>
            <div className="about-item" style={{ "textAlign": "justify" }}>
                <div className="about-lhs">
                    <p>
                        <strong style={style}>Kraft Corporation</strong>
                        <span style={style}> &nbsp;is counted amidst the renowned Suppliers of a wide variety of Paper Reels inclusive of Agro Paper reel, Recycled Kraft Paper Reels and Duplex Board. We are capable of supplying Kraft paper ranging from 12BF to 45 BF and from 80 GSM to450 GSM Kraft paper &amp; Duplex Board throughout pan India. Our aim is to provide premium Kraft Paper Reels all over India. We have associations with more than 25 paper mills throughout the country. Additionally, we have collaborations with several logistics service providers and efficient network. The company was established in the year 2001 by brothers, Shri Dinesh Jain &amp; Suresh Kumar Jain. We are associated with more than 25 paper mills located at Meerut, Moradabad, Muzaffarnagar, Basti, Gorakhpur, Kashipur, Punjab, Haryana, Jammu, Rajasthan, Gujarat, Maharashtra Chhattisgarh, Bihar, West Bengal, Assam, etc., and accordingly we serve our customers located all over India.</span>
                        <br /><br />
                        <strong style={style}>Our Sister Company</strong> <br />
                        <span style={style}>KRAFT INDIA</span><br />
                        <span style={style}>Our company has another venture namely Kraft India. We established the venture to meet the ever growing demands of Paper Products in market and disperse load on the parent company. Through this venture, we have made associations with the esteemed corrugators and leading paper mills having latest technologies. Moreover, our associations help us boost our ability to meet the high-end Kraft Paper requirements of MNCs and the corporate world.</span>
                        <br /><br /><br />
                        <strong style={style}>What Distinguishes Us :</strong>
                    </p>
                    <ul style={style}><br />
                        <li style={liStyle}>Distributor of around 25 leading paper mills throughout India</li>
                        <li style={liStyle}>In-house major paper testing equipment for consistent quality control and check</li>
                        <li style={liStyle}>Wide variety of Kraft Paper &amp; Duplex Board under one roof</li>
                        <li style={liStyle}>Direct Access to Paper Mills in every region</li>
                        <li style={liStyle}>Strong marketing networks at all the leading Indian States</li>
                        <li style={liStyle}>Dedicated logistic department to ensure safe and timely delivery</li>
                        <li style={liStyle}>Innovative ideas relating to paper application</li>
                        <li style={liStyle}>Anticipate changes and understand the pulse of the rapidly growing market</li>
                        <li style={liStyle}>Management Skills for Operational Excellence</li>
                        <li style={liStyle}>Decentralized control and office network in leading markets for better services to our customer</li>
                        <li style={liStyle}>To achieve customer loyalty by providing the highest standards of quality products suitable for various business segment</li>
                        <li style={liStyle}>Leveraging the talents for competitive success</li>
                        <li style={liStyle}>Spreading out view to use recycled paper for sustainable development of environment</li>
                        <li style={liStyle}>Knowledge of each and every region of India</li>
                        <li style={liStyle}>Diversified client portfolio across various industries</li>
                    </ul>
                    <br />
                    <p>
                        <br style={style} />
                        <strong style={style}>Quality Assurance</strong>
                        <br style={style} />
                        <span style={style}>Quality is the prime objective of our company that helps us in winning the trust of the clients. We follow a well-developed quality management system and thus leave no room for errors at any stage. Moreover, our team of quality auditors holds expertise in handling the entire distributions system in a systematic manner. The company has a well-equipped lab for the testing of all quality parameters of Kraft Papers and thus we ensure that the quality of our products is up to the industry standards.</span>
                        <br style={style} />
                        <br />
                        <strong style={style}>Our Vision</strong>
                        <br />
                        <span style={style}>Our management foresightedness keeps us to analyze our working environment at every step so that we can achieve our goal as a valued player in the global pulp, paper and paperboard industry through:</span><br />
                    </p>


                    <ul style={style}>
                        <li style={liStyle}>Satisfaction of Customer and other Stakeholders</li>
                        <li style={liStyle}>Cost Effectiveness</li>
                        <li style={liStyle}>Conforming to larger sustainability values</li>
                        <li style={liStyle}>Safety and Environment</li>
                        <li style={liStyle}>Continuous enhancement of Value for all stakeholders,</li>
                        <li style={liStyle}>Leadership in Quality Products, Processes, Service and People</li>
                    </ul>

                    <p>
                        <br />
                        <strong style={style}>Our Mission</strong><br />
                        <span style={style}>It is our mission to provide high quality and cost effective Kraft Paper &amp; Duplex Board along with innovative solutions to meet the needs of our customers, while at the same time we are equally committed to carry out our business activities in accordance with fair business practices and the high ethical code of conduct standards we have set for ourselves. It is also our commitment to give our customers a rich and fulfilling experience and we endeavor to build a strong and lasting relationship based on the solid foundation of mutual trust and understanding, both with our principals as well as our customers</span>
                        <br /><br />
                        <strong style={style}>Why Prefer Us?</strong>
                        <br />
                        <span style={style}>There are numerous reasons for our immense acknowledgement by the clients. Some of them are:</span><br />
                    </p>
                    <ul style={
                        style
                    }><br />
                        <li style={liStyle}>We have dedicated team of professionals for quick access and response to queries.</li>
                        <li style={liStyle}>We deliver the procured order on time.</li>
                        <li style={liStyle}>We have organized logistic department to serve all over country to ensure safe and timely deliveries.</li>
                        <li style={liStyle}>We have in-house major testing equipment for consistent quality check and control.</li>
                        <li style={liStyle}>We own fully computerized and automated office with the latest technology for quick and correct information deliveries.</li>
                        <li style={liStyle}>We have strong marketing channel at all leading states to prompt deliveries.</li>
                    </ul>
                    <br />
                    <p>
                        <br />
                        <strong style={style}>Our Clientele</strong>
                        <br />
                        <span style={style}>We are dealing in Kraft paper corrugators having manual, semi-automatic &amp; fully-automatic plants. We are involved in supplying of the Kraft Paper to these paper corrugating plants, which converts these papers into corrugated carton boxes used in all major industries for packing of the products. Our clients have been nurtured by us over two decades by building and maintaining very close rapport at all levels. We cater to:</span>
                        <br />
                    </p>
                    <br />
                    <ul style={style}>
                        <li style={liStyle}>FMCG</li>
                        <li style={liStyle}>Beverages</li>
                        <li style={liStyle}>Appliances &amp; Consumer Durables</li>
                        <li style={liStyle}>Processed Foods</li>
                        <li style={liStyle}>Consumer Lighting &amp; Electronics</li>
                        <li style={liStyle}>Garments &amp; Footwear</li>
                        <li style={liStyle}>Paints</li>
                        <li style={liStyle}>Pharmaceuticals &amp; Crop Sciences</li>
                        <li style={liStyle}>Automotive Sector</li>
                    </ul>
                    <p className="cb">&nbsp;</p>
                    <br /><br />

                    <table className="w100 formTable">
                        <tbody><tr>
                            <td className="headVr w40 ar b p5px">Name of CEOs</td>
                            <td className="data p5px">Shri Dinesh Jain &amp; Mr. Suresh Kumar Jain</td>
                        </tr>
                            <tr>
                                <td className="headVr w40 ar b p5px">Year of Establishment</td>
                                <td className="data p5px">2001</td>
                            </tr>
                            <tr>
                                <td className="headVr w40 ar b p5px">Nature of Business</td>
                                <td className="data p5px">Dealer &amp; Distributor</td>
                            </tr>
                            <tr>
                                <td className="headVr w40 ar b p5px">Market Covered</td>
                                <td className="data p5px">Pan India</td>
                            </tr>
                        </tbody></table>


                </div>
                <div className="about-rhs">
                    <SidePanel />
                </div>
            </div>
        </>
    )
}

export default AboutItem;
