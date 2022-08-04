import React from 'react'
import {BsLinkedin} from '../../../../node_modules/react-icons/bs'
import {BsGithub} from '../../../../node_modules/react-icons/bs'
import {SiLeetcode} from '../../../../node_modules/react-icons/si'
const HaeaderSocials = () => {
    return (
        <div className ='header_socials'>
            <a href="https://linkedin.com" target= "_blank"><BsLinkedin/></a>
            <a href="https://github.com" target= "_blank"><BsGithub/></a>
            <a href="https://leetcode.com/bharat194" target= "_blank"><SiLeetcode/></a>
        </div>
    )
}

export default HaeaderSocials
