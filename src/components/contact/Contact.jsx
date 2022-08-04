import React from 'react'
import './contact.css'
import {HiOutlineMail} from '../../../../node_modules/react-icons/hi'
import {FaWhatsapp} from '../../../../node_modules/react-icons/fa'
const contact = () => {
    return (
        <section id = 'contact'>
            <h5>Get In Touch</h5>
            <h1>Contact Me</h1>
            <div className="comtainer contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <HiOutlineMail className = 'contact_icon'/>
                        <h4>Email</h4>
                        <h5>iamyash194@gmail.com</h5>
                        <a href="mailto:iamyash194@gmail.com" target= '_blank'>Send Message</a>
                    </article>
                    <article className="contact_option">
                        <HiOutlineMail className = 'contact_icon'/>
                        <h4>Linkedin</h4>
                        <h5>iamyash194@gmail.com</h5>
                        <a href="mailto:iamyash194@gmail.com" target= '_blank'>Send Message</a>
                    </article>
                    <article className="contact_option">
                        <FaWhatsapp className = 'contact_icon'/>
                        <h4>WhatsApp</h4>
                        <h5>9667432838</h5>
                        <a href="https://api.whatsapp.com/send?phone+919667432838" target= '_blank'>Send Message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name= 'name' placeholder = 'Your Full Name' required />
                    <input type="email" name= 'email' placeholder = 'Your Email' required />
                    <textarea type="text" name = 'message' rows = "7" placeholder = 'Your Message' required/>
                    <button type = 'submit' className = 'btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default contact
