import React from 'react'
import './about.css'
import Me from '../../pics/meAbout.jpg'
import {FaAward} from '../../../../node_modules/react-icons/fa'
import {AiOutlineUserSwitch} from '../../../../node_modules/react-icons/ai'
import {AiOutlineProject} from '../../../../node_modules/react-icons/ai'
const about = () => {
    return (
        <section id = 'about'>
            <h5>Get To Know</h5>
            <h1 >About Me</h1>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-img">
                        <img src={Me} alt="About Image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <article className = 'about_card'>
                            <FaAward className = 'about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>
                        <article className = 'about_card'>
                            <AiOutlineUserSwitch className = 'about_icon'/>
                            <h5>Clients</h5>
                            <small>300+ Worldwide</small>
                        </article>
                        <article className = 'about_card'>
                            <AiOutlineProject className = 'about_icon'/>
                            <h5>Projects</h5>
                            <small>5+ Projects</small>
                        </article>
                    </div>
                    <p>I'm a final year student at GL Bajaj institute Of Technology And Management.
                        I've completed my AISSCE with CGPA 10 and Intermediate with 88%. I am a
                        Fullstack web developer and a competitive programmer. I have created a total of 4 projects and
                        I have 4 starts and 1000+ problem solved at leetcode. My global contest rating at leetcode is 20k and 
                        national rank is 3.7k. I have a good command in the following langages - Java, C++, C, JavaScript, CSS, HTML,
                        and Typescript. 

                    </p>
                    <a href="#contact" className = 'btn btn-primary'>Let's Discuss</a>
                </div>
            </div>
        </section>
    )
}

export default about
