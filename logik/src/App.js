import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Technologes from "./components/Technologies";
import Wrapper from "./components/Wrapper";
import Contract from "./components/Contact";
import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import Technologies from "./components/pages/Technologies";
import Contact from "./components/pages/Contact";

function App() {
    return (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
  
    );
  }

export default App;
