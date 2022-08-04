import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from '../../../../node_modules/react-icons/bs'
const exp = () => {
    return (
        <section id = 'experience'>
            <h5>Skills I Have</h5>
            <h1>My Experience</h1>
            <div className="container experience_container">
                <div className="experience_progamming">
                    <h3>FullStack Developement</h3>
                    <div className="experience_content">
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>React Js</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>Node Js</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>Mongo dB</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_fullstack">
                <h3>Problem Solving</h3>
                    <div className="experience_content">
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>Java</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>C++</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>C</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className = 'experience_details'>
                            <BsFillBookmarkCheckFill className = 'experience_details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className = 'text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default exp
