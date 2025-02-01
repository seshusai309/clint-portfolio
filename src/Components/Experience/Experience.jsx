import { Component } from "react";
import './Experience.css'

class Experience extends Component {
    render() {
        return (
            <div id="experience" className="exp-container">
                <div className="exp-container1">
                    <h1 className="exp-head1">Work <br/>Experience</h1>
                </div>
                <div className="exp-container2">
                <div className="exp-card">
                        <div className="exp-sub-card1">
                            <h2>2024 - 2025</h2>
                        </div>
                        <div className="exp-sub-card2">
                            <h2>Data Scientist Intern  </h2>
                            <h3>Company: Rubixe</h3>
                            <ul>
                                <li>Model Development: Designed and implemented machine learning models to solve real-world problems,
                                enhancing predictive accuracy and efficiency.</li>
                                <li>Data Preprocessing: Performed data cleaning, feature engineering, and data transformation to prepare
                                datasets for analysis.</li>
                                <li>Algorithm Optimization: Fine-tuned hyperparameters and optimized algorithms for better model
                                performance.</li>
                                <li>Tool Proficiency: Gained expertise in Python, libraries like NumPy, Pandas, scikit-learn, and visualization tools
                                such as Matplotlib and Seaborn.</li>
                                <li>Exploratory Data Analysis (EDA): Conducted EDA to extract valuable insights and understand data trends.</li>
                                <li>Project Collaboration: Worked in a collaborative environment, managing tasks and contributing effectively to
                                group projects.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp-card">
                        <div className="exp-sub-card1">
                            <h2>2023 - 2024</h2>
                        </div>
                        <div className="exp-sub-card2">
                            <h2>Data Analyst Intern </h2>
                            <h3>Company: ITC ABD</h3>
                            <ul>
                                <li>Collected, cleaned, and processed large datasets, improving data accuracy for actionable insights.</li>
                                <li>Analysed and visualized data using SQL, Python, Power BI, Excel and Tableau to identify trends and patterns to generate meaningful reports.</li>
                                <li>Managed and maintained auditing data, ensuring compliance with organizational standards and regulatory
                                norms.</li>
                                <li>Enhanced data reliability and transparency through efficient record-keeping practices.</li>
                                <li>Suggest budgets and improvements based on the above Information.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience