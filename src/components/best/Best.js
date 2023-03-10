import React from 'react'

import Carousel from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <carousel>
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
            </carousel>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best
