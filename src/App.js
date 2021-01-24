import React from 'react';
import './App.css';
import './default.css';
import './fonts.css'
import LogoWithTitle from './components/logo_with_title';
import Menu from './components/menu'
import Services from "./components/services";
import Welcome from "./components/welcome";
import EstimateForm from "./components/estimate_form";
import Social from "./components/social";
import Copyright from "./components/copyright";

function App() {
  return (
    <div className="App">
       <div id="header-wrapper">
          <div id="header" className="container">
            <LogoWithTitle/>
            <Menu/>
          </div>
        </div>
      <Welcome/>
      <Services/>
      <EstimateForm/>
      <div id="wrapper4">
        <Social/>
        <Copyright/>
      </div>
    </div>
  );
}

export default App;
