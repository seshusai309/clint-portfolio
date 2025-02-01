import { Component } from "react";
import Home from "./Components/Home/Home";
import About from './Components/About/About'
import Experience from "./Components/Experience/Experience";
import Skill from "./Components/Skill/Skill";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";


import './App.css'

class App extends Component{
  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Experience/>
        <Skill/>
        <Projects/>
        <Contact/>
      </div>
    )
  }
}

export default App