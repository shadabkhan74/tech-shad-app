
import {  Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar1 from "./Navbar";
import "./index.css"

const App = () => {
  return (<>
    
    <Navbar1/>
    
      <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route   path="service" element={<Service />} />
          <Route  path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        
      </Routes>
    
    </>
  );
}
export default App;

