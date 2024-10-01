import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import Realisations from "./pages/realisations"
import Services from "./pages/realisations"




function App() {
  return (
    
    <div className="App">
<h1>Coucou</h1>
<div className="home"></div>
 

      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/services" element={<Services />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
