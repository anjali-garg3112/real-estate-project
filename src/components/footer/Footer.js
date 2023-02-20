import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
               <a href="https://www.facebook.com/shivilatechnologies"><FaFacebook className='icon' /></a>
              <a href="https://www.instagram.com/shivilatechnologies/"><FaInstagram className='icon' /></a>
             <a href="https://twitter.com/ShivilaIndia">   <FaTwitter className='icon' /></a>
              <a href="https://www.youtube.com/channel/UCyPZKDK2nabtQFNr7YnYMjA">  <FaYoutube className='icon' /></a>
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
                <div className='col'>
                    <h3>Information</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
