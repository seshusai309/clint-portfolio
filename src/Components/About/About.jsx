import { Component } from "react";
import image from '../../../img/image.png'
import './About.css'

class About extends Component{
    render() {
        return (
            <div id="about" className="about-container">
                <div className="div1">
                    <h1 className="heading">About Me</h1>
                    <p className="para1">Motivated and detail-oriented person with skills in system troubleshooting, 
                        and application support and strong foundation in data analysis, machine learning, 
                        and system management. Proficient in Python, SQL, and data visualization tools. 
                        Skilled at extracting insights, ensuring data integrity, and driving data-driven
                         decision-making. Passionate about solving real-world problems and contributing to 
                         team success in dynamic environments.</p>
                </div>
                <div className="div2">
                    <img className="nani2-img" src={image}/>
                </div>
            </div>
        )
    }
}

export default About