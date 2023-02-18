import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'
import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Shivila</span>Estate</h1>
                <h1><span><BsFillTelephoneOutboundFill /> +91 9843232323</span></h1>
                
                <button className='btn'>Sign In</button>
                
                <button className='btn'>Log In</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='Buy'>Buy</a></li>
                    <li><a href='Sell'>Sell</a></li>
                    <li><a href='Rent'>Rent</a></li>
                    <li><a href='Mortgage'>Mortgage</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
