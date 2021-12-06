import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Testimonials from "./components/testimonals/Testimonials";
// import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import SAIT from "./components/sait/Sait";
import STop from "./components/sait/STop";
import SAITG from "./components/SAITG/SAITG";


import Capstone from "./components/sait/projects/Capstone";
import Courses from "./components/sait/projects/Courses";
import IOT from "./components/sait/projects/Iot";
import Malware from "./components/sait/projects/Malware";
import Network from "./components/sait/projects/Network";
import Pentest from "./components/sait/projects/Pentest"
import Web from "./components/sait/projects/Web";
import Activity from "./components/sait/Activity";






import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

import "./app.scss"
import {useState} from "react";

function App() {
  const [menuOpen,setMenuOpen]=useState(false)

  return (
    <Router>
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Switch>
          <Route exact path="/">
            <Intro/>
            <Portfolio/>
            <Works/>
            <Testimonials/>
            <SAITG/>
          </Route>
          <Route exact path="/SAIT" >
            <STop/>
            <SAIT/>
            <Capstone/>
            <Activity/>
            <Courses/>
            <IOT/> 
            <Malware/>
            <Network/>
            <Pentest/>
            <Web/>
          </Route>
        
        </Switch>
        
      </div>
      
    
    </div>
    </Router>
  );
}

export default App;
