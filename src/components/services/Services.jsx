import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from '../../../../node_modules/react-icons/ai'
const Services = () => {
    return (
        <section id = 'services'>
            <h5>What I Offer</h5>
            <h1>Services</h1>
            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Desigh</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Highly Inovative, Creative and Orignal</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Figma</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Abobe Xd</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Adobe Premiere</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Adobe Photoshop</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Adobe Illustrator</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>Web Debelopement</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Typescript</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>React JS</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Redux</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Next JS</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>HTML</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Tailwind CSS</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>SCSS</p>
                        </li>
                        
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Node JS</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Express JS</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Deno</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>MongodB</p>
                        </li>
                    </ul>
                </article>

                <article className="service">
                    <div className="service_head">
                        <h3>Software Developement</h3>
                    </div>
                    <ul className="service_list">
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Java</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Python</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>C++</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>C</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>C#</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className = 'service_icon'/>
                            <p>Functional Programming</p>
                        </li>
                    </ul>
                </article>


            </div>
        </section>
    )
}

export default Services
