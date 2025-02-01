import { Component } from "react";
import img1 from '../../../flaticons/python (3).png'
import img2 from '../../../flaticons/458193.webp'
import img3 from '../../../flaticons/brain.png'
import img4 from '../../../flaticons/dashboard.png'
import img5 from '../../../flaticons/database.png'
import img6 from '../../../flaticons/friends.png'
import img7 from '../../../flaticons/office.png'
import img8 from '../../../flaticons/report-business.png'
import img9 from '../../../flaticons/project-management.png'
import img10 from '../../../flaticons/server.png'
import './Skill.css'


class Skill extends Component {
    render() {
        return (
            <div id="skills" className="skill-container">
                <div className="skillCard1">
                    <h3>expertise</h3>
                    <h1>Skills & Proficiencies</h1>
                </div>
                <div className="centering">
                    <div className="skillCard2">
                        <div className="subed">
                            <div className="icons">
                                <img src={img1} />
                            </div>
                            <h4>Python</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img2} />
                            </div>
                            <h4>PySpark</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img3} />
                            </div>
                            <h4>Machine Learning</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img4} />
                            </div>
                            <h4>Power Bi</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img5} />
                            </div>
                            <h4>MySql</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img6} />
                            </div>
                            <h4>Scikit learn
                            </h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img7} />
                            </div>
                            <h4>Microsoft office</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img8} />
                            </div>
                            <h4>Tableau</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img9} />
                            </div>
                            <h4>Canva</h4>
                        </div>
                        <div className="subed">
                            <div className="icons">
                                <img src={img10} />
                            </div>
                            <h4>Spark</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Skill