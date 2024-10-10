import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/scss/bootstrap.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import MyHome from "./pages/home/myhome"
import Blog from "./pages/blog/blog"
import Contact from "./pages/contact/contact"
import Realisations from "./pages/realisations/realisations"
import Services from "./pages/realisations/realisations"

import Home from "./pages/home/home"
import Blog from "./pages/blog/blog"
import Contact from "./pages/contact/contact"
import Realisations from "./pages/realisations/realisations"
import Services from "./pages/services/services"
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
import Mentions from "./pages/mentions/mentions"

function App() {
  return (
    
    <div className="App">
<div className="home"></div>
 

      <BrowserRouter>
      <Routes>

      <Route path="/" element={<MyHome />} />
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/services" element={<Services />} />
      <Route path="/mentions" element={<Mentions />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
