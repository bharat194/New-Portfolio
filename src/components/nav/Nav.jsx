import React from 'react'
import './nav.css'
import {AiOutlineHome} from '../../../../node_modules/react-icons/ai'
import {BiUser} from '../../../../node_modules/react-icons/bi'
import {BsBook} from '../../../../node_modules/react-icons/bs'
import {MdOutlineMiscellaneousServices} from '../../../../node_modules/react-icons/md'
import {AiFillContacts} from '../../../../node_modules/react-icons/ai'
import {useState} from 'react'

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick = {() =>setActiveNav('#') } className = {activeNav === '#'?'active':'' }><AiOutlineHome/></a>
            <a href="#about" onClick = {() =>setActiveNav('#about') } className = {activeNav === '#about'?'active':'' }><BiUser/></a>
            <a href="#experience" onClick = {() =>setActiveNav('#experience') } className = {activeNav === '#experience'?'active':'' }><BsBook/></a>
            <a href="#services" onClick = {() =>setActiveNav('#services') } className = {activeNav === '#services'?'active':'' }><MdOutlineMiscellaneousServices/></a>
            <a href="#contact" onClick = {() =>setActiveNav('#contact') } className = {activeNav === '#contact'?'active':'' }><AiFillContacts/></a>
        </nav>
    )
}

export default Nav
