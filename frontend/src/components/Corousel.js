import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import KraftPaper from './media/Kraft Paper.jpg'
import DUPLEXBOARDS from './media/DUPLEX BOARDS.jpg'
import IMPORTEDGREYBOARDS from './media/IMPORTED GREY BOARDS.jpg'
import WHITETOPKRAFTLINER from './media/WHITE TOP KRAFT LINER.jpg'


import './styles/Corousel.css'

const Corousel = () => {
    return (
        <>
            <MDBCarousel showControls fade className='carousel'>
                <MDBCarouselItem
                    className='w-1 d-block'
                    itemId={1}
                >
                    <img src={KraftPaper} className='corousel-img' alt="" />
                    <h2 className='corousel-txt'>Kraft Paper</h2>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-1 d-block'
                    itemId={2}
                >
                    <img src={DUPLEXBOARDS} className='corousel-img' alt="DUPLEX BOARDS" />

                    <h5 className='corousel-txt'>DUPLEX BOARDS</h5>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-1 d-block'
                    itemId={3}
                >
                    <img src={IMPORTEDGREYBOARDS} className='corousel-img' alt="IMPORTED GREY BOARDS" />
                    <h2 className='corousel-txt'>IMPORTED GREY BOARDS</h2>
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-1 d-block'
                    itemId={3}
                >
                    <img src={WHITETOPKRAFTLINER} className='corousel-img' alt="WHITE TOP KRAFT LINER" />
                    <h2 className='corousel-txt'>WHITE TOP KRAFT LINER</h2>
                </MDBCarouselItem>
            </MDBCarousel>

        </>
    );
}
export default Corousel;