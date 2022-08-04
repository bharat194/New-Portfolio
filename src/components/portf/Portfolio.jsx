import React from 'react'
import './portfolio.css'
import Ashu from '../../pics/ashu.JPEG'
import Karan from '../../pics/karan.JPEG'
import Rishu from '../../pics/rishubhai.jpg'
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
                        <a href="https://linkedin.com"className = 'btn'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Karan} alt="" />
                    </div>
                    <h3>Karan Singh</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://linkedin.com"className = 'btn'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Rishu} alt="" />
                    </div>
                    <h3>Rishab Aghrahari</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://linkedin.com"className = 'btn'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Raghu} alt="" />
                    </div>
                    <h3>Raghu Varma</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://linkedin.com"className = 'btn'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
                <article className="portfolio_item">
                    <div className="portfolio_item-img">
                        <img src={Sarthak} alt="" />
                    </div>
                    <h3>Sarthak Saxena</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://linkedin.com"className = 'btn'>Linkedin</a>
                        <a href="https://linkedin.com"className = 'btn btn-primary' target = '_blank'>Profile</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default portf
