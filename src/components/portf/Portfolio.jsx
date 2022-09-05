import React from 'react'
import './portfolio.css'
import Ashu from '../../pics/ashu.JPEG'
import Karan from '../../pics/karan.JPEG'
import Rishu from '../../pics/rishubhai.png'
import Raghu from '../../pics/raghu.JPEG'
import Sarthak from '../../pics/sarthak.JPEG'
const portf = () => {
    return (
        <section id = 'portfolio'>
            <h5>My Awesome</h5>
            <h1>Team</h1>
            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Ashu} alt="" />
                    </div>
                    <h3>Ashutosh Yadav</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://www.linkedin.com/in/ashutoshyadav77/"className = 'btn' target = '_blank'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Karan} alt="" />
                    </div>
                    <h3>Karan Singh</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://www.linkedin.com/in/karansingh194/"className = 'btn' target = '_blank'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Rishu} alt="" />
                    </div>
                    <h3>Rishab Aghrahari</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://www.linkedin.com/in/rishabh-agrahari09/"className = 'btn' target = '_blank'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Raghu} alt="" />
                    </div>
                    <h3>Ujjwal Raghuvanshi</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://www.linkedin.com/in/ujjwal-verma-352327203/"className = 'btn' target = '_blank'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Sarthak} alt="" />
                    </div>
                    <h3>Sarthak Saxena</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://www.linkedin.com/in/sarthaksaxena9/"className = 'btn' target = '_blank'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default portf
