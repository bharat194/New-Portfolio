import React from 'react'
import CTA from './CTA'
import ME from '../../pics/me.png'
import HaeaderSocials from './HaeaderSocials'
import './header.css'
const header = () => {
    return (
        <header>
            <div className="container header__container">
            <h5>Hello I'm</h5>
                <h1>Bharat Joshi</h1>
                <h5 className="text-light">Fullstact Web Developer</h5>
                <CTA />
                <HaeaderSocials/>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className = 'scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default header
