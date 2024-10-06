import "../home/home.css";
import React from "react";

import {Link, useLocation} from "react-router-dom";

const Header = () => {
  const position = useLocation();
  return (

    <div id="navigation">
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid navmarge">
      <Link className="brand" to="/">
        JOHN DOE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa-solid fa-bars" style={{ color: "#AAAAAA" }}></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav  ms-auto">
          <li className="active"><a href="./src/pages/home.jsx">Accueil</a></li>
          <li><a href="./src/pages/realisations.jsx">Réalisations</a></li>
          <li><a href="./src/pages/blog.jsx">Blog</a></li>
          <li><a href="./src/pages/services.jsx">Mes services</a></li>
          <li><a href="./src/pages/contact.jsx">Me contacter</a></li>
        </ul>
      </div>
    </div>
    </nav>
    </div>

  );
}


export default Header;