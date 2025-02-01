import { Component } from "react";
import Navbar from "../Navbar/navbar"
import { TypeAnimation } from 'react-type-animation';
import whatsapp from '../../../img/WhatsApp Image 2025-01-29 at 14.40.44.jpeg'
import './Home.css'

class Home extends Component{
    render() {
        return (
            <div id="home" className="main-container">
        <img className="img1" src={whatsapp} />
        <div className="naved">
            <Navbar/>

            <div className="header">
              <div>
              <p className="para2">I am</p>
            <h1 className="name-head">Nandu Gopal Reddy</h1>
                <TypeAnimation 
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Data Analysit specialist",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Power Bi',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '40px', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
            </div>

        </div>
      </div>
        )
    }
}

export default Home