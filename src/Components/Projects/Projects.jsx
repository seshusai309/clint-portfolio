import { Component } from "react";
import imaged11 from '../../../project pics/b554c0da4b0db1b9c69ce25aa25b9310.jpg'
import imaged12 from '../../../project pics/DSC_4639 (1).jpg'
import imaged13 from '../../../project pics/fe181d8491a6eddae6eb78f69751676e (1).jpg'
import imaged14 from '../../../project pics/istockphoto-652997680-612x612 (1).jpg'
import imaged15 from '../../../project pics/submission_7687_7633_coverImage_en_US (1).png'
import imaged16 from '../../../project pics/04a0be8d-e610-4d10-b502-7a2062b0df8f (1).jpg'
import imaged17 from '../../../project pics/5a93ebe9-0acb-44fc-9007-caae8bf4f13a (1).jpg'
import imaged18 from '../../../project pics/HD-wallpaper-best-doctor-blue-medical-logo-thumbnail.jpg'
import imaged19 from '../../../project pics/pngtree-concept-of-e-commerce-sales-online-shopping-digital-marketing-vector-illustration-png-image_1952808 (1).jpg'
import imaged20 from '../../../project pics/How-a-Debt-Free-Vision-Board-Will-Help-You-Achieve-Financial-Freedom.webp'



import './Projects.css'

class Projects extends Component{
    render() {
        return (
            <div id="projects" className="projects-Container">
                <h1>My Projects <br/> 
                <span className="spaned">Scroll side to see all my projects {`-->`} </span></h1>
                <div className="carduu">
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged11}/>
                        <div className="project-sub-card">
                            <h3>Breast Cancer Classification </h3>
                            <p>Developed a predictive model using machine learning algorithms like SVM and Logistic Regression to classify
                            cancer as benign or malignant, leveraging Python and data visualization</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged12}/>
                        <div className="project-sub-card">
                            <h3>Handwritten Digits Recognition</h3>
                            <p>Implemented a CNN-based model for accurate classification of handwritten digits using MNIST dataset.</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged13}/>
                        <div className="project-sub-card">
                            <h3>PUBG Game Winner Prediction   </h3>
                            <p>Designed a predictive analytics model leveraging feature engineering and regression techniques to forecast
                            PUBG match outcomes.</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged14}/>
                        <div className="project-sub-card">
                            <h3>Auto Price Prediction   </h3>
                            <p>Developed a Machine learning model to predict the price of cars with the available independent variables
                            such as Horsepower, no-of-cylinders, engine-type, city mileage, highway mileage, etc</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged15}/>
                        <div className="project-sub-card">
                            <h3>Rice Leaf Disease Detection  </h3>
                            <p>Deployed a computer vision model utilizing deep learning techniques for precise identification and
                            classification of rice leaf diseases.</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged16}/>
                        <div className="project-sub-card">
                            <h3>Data Analysis of Amazon Electronics Product Salesn </h3>
                            <p>Analysed Amazon electronics sales data to uncover trends, top-performing products, and customer
                            preferences using Python, SQL, and visualization tools.</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged17}/>
                        <div className="project-sub-card">
                            <h3>Music Store Analysis </h3>
                            <p>An SQL-based project to analyse sales, customer behaviour, top-selling artists, and revenue trends in a digital
                            music store.</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged18}/>
                        <div className="project-sub-card">
                        <h3>Music Store Analysis </h3>
                        <p>An SQL-based project to analyse sales, customer behaviour, top-selling artists, and revenue trends in a digital
                        music store</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged19}/>
                        <div className="project-sub-card">
                           
                            <h3>E-Commerce sales </h3>
                            <p>An interactive dashboard providing actionable insights into sales performance, customer behaviour, and
                            revenue trends for data-driven decision-making.</p>
                            
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                <div className="all-cards">
                    <div className="project-card">
                        <img src={imaged20}/>
                        <div className="project-sub-card">
                            <h3>International Debt Statistics </h3>
                            <p>Data analysis of PPG bilateral debt, examining repayment trends and financial obligations between countries
                            and their government creditors.</p>
                            <button className="btn">Link to project</button>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Projects