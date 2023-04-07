import React from 'react'
import './Header.css'
import logo from '../logo.png'

function Header() {
    return (
        <header className='header--main'>
            <img src={logo} alt="header" className='header--img'/>
            <span className='header--mainText'>Meme Generator</span>

            <h3 className='header--authorName'>By Shlok Prajapati</h3>
        </header>
    )
}

export default Header