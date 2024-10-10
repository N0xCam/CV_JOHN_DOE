import React from "react";
import {Link} from "react-router-dom";
import "./home.css";


const Footer = () => {
return (

<div id="footer">
<<<<<<< HEAD
<h2 id="Name"> John Doe</h2>
<address> 
<em>40 Rue Laure Diebold </em> 
<em>69009 Lyon, France </em>
<em> Téléphone : 06 20 30 40 50 </em>
</address>

<div>
    <a href="https://github.com/github-john-doe" className="medias"><img src="./src/assets/github_logo.png"></img></a>
    <a href="https://x.com/?lang=fr" className="medias"><img src="./src/assets/footer_X.png"></img></a>
    <a href="https://fr.linkedin.com/" className="medias"><img src="./src/assets/footer_LINKEDin.png"></img></a>
=======

<div className="container">
        <div className="box">
          <div className="address">
            <h3 id="brandfooter">John Doe</h3>
            <address>
            <em>40 Rue Laure Diebold </em> 
            <em>69009 Lyon, France </em>
            <em> Téléphone : 06 20 30 40 50 </em>
            </address>
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622

            <div className="medias">
              <img src="./src/assets/github_logo.png" href="https://github.com"></img>
              <img src="./src/assets/footer_X.png" href="https://github.com"></img>
              <img src="./src/assets/footer_LINKEDin.png" href="https://github.com"></img>

              <div className="liens-utiles">
            <h3>Liens utiles</h3>
            <Link to={"/"}>
              Accueil
            </Link>
            <a href={"#about"}>
              À propos
            </a>
            <Link to={"/services"}>
              Services
            </Link>
            <Link to={"/contact"}>
              Me contacter
            </Link>
            <Link to={"/mentions"}>
              Mentions légales
            </Link>
          </div>
          
          <div className="liens-realisations">
            <h3>Mes réalisations</h3>
            <Link to={"/realisations"}>
              Fresh Food
            </Link>
            <Link to={"/realisations"}>
              Restaurant akira
            </Link>
            <Link to={"/realisations"}>
              Espace bien-être
            </Link>
          </div>

          <div className="liens-articles">
            <h3>Mes derniers articles</h3>
            <Link to={"/blog"}>
              Coder son site en HTML/CSS
            </Link>
            <Link to={"/blog"}>
              Vendre ses produits sur le web
            </Link>
            <Link to={"/blog"}>
              Se positionner sur google
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright">&copy; Designed by John Doe</div>
    </div>
    </div>
    </div>
  );
}


export default Footer;