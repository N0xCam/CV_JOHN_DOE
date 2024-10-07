import React from "react";
import "./home.css";


const Footer = () => {
return (

<div id="footer">
<h2 id="Name"> John Doe</h2>
<address> 
<em>40 Rue Laure Diebold </em> 
<em>69009 Lyon, France </em>
<em> Téléphone : 06 20 30 40 50 </em>
</address>

<div id="medias">
    <a href="https://github.com/github-john-doe" id="github"><img src="./src/assets/github_logo.png"></img></a>
    <a href="https://x.com/?lang=fr" id="X"><img src="./src/assets/footer_X.png"></img></a>
    <a href="https://fr.linkedin.com/" id="linkedin"><img src="./src/assets/footer_LINKEDin.png"></img></a>

</div>



<h2> Liens utiles</h2>
<ul>
    <li> Accueil </li>
    <li> À propos </li>
    <li> Services </li>
    <li> Me contacter </li>
    <li> Mentions légales </li>
</ul>

<h2> Mes dernières réalisations</h2>
<ul>
    <li> Fresh food</li>
    <li> Restaurant Akira</li>
    <li> Espace bien-être</li>
</ul>

<h2> Mes derniers articles</h2>
<ul>
    <li> Coder son site en HTML/CSS</li>
    <li> Vendre ses produits sur le web</li>
    <li> Se positionner sur Google</li>
</ul>

<button> Designed by John Doe</button>

</div>
);
}


export default Footer;