import { Component } from "react";
import './Navbar.css'



class Navbar extends Component{
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-header">
                    <li  className="listItem"><a  href="#home" >Home</a></li>
                    <li className="listItem"><a  href="#about" >About</a></li>
                    <li className="listItem"><a  href="#experience" >Experiance</a></li>
                    <li className="listItem"><a  href="#skills" >Skills</a></li>
                    <li  className="listItem"><a  href="#projects" >Projects</a></li>
                    <li className="listItem"><a  href="#contact" > <button class="button-54" role="button">Hire me</button></a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar