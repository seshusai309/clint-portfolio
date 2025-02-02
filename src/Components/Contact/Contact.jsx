import { Component } from "react";
import lastImg from '../../../img/WhatsApp Image 2025-02-01 at 17.48.27.jpeg'
import './Contact.css'

class Contact extends Component{
    render() {
        return (
            <div id="contact" className="min">
                <div className="contact-container">
                <img className="nani-last" src={lastImg} />
                <div className="contact-card">
                    <div>
                        <h1>Reach Out</h1>
                    </div>
                    <div>
                        <h2>Nandu Gopal Reddy</h2>
                        <h3>chundinandagopal@gmail.com</h3>
                    </div>
                    <div>
                        <h3>Connect With Me</h3>
                        <div className="wow">
                            <div className="iconed">
                                <a href="instagram.com" target="_blank"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                            </div>
                            <div className="iconed">
                                <a href="instagram.com" target="_blank"><i class="fa-brands fa-whatsapp fa-2xl"></i></a>
                            </div>
                            <div className="iconed">
                                <a href="instagram.com" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                            </div>
                            <div className="iconed">
                                <a href="instagram.com" target="_blank"><i class="fa-brands fa-facebook fa-2xl"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Contact