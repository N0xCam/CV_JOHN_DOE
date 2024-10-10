import "./services.css"

function Services() {
    return (
        <div id="services">

        <div id="fond"></div>

        <h2> MON OFFRE DE SERVICES</h2>
        <h3> Voici les prestations sur lesquelles je peux intervenir.</h3>

        <article className="services">
            <img src="./src/assets/services/1.png" className="img-article"></img>
            <h4> UX DESIGN </h4>
            <p> L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
        </article>

        <article className="services">
            <img src="./src/assets/services/2.png" className="img-article"></img>
            <h4> Développement web </h4>
            <p> Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP</p>
        </article>

        <article className="services">
            <img src="./src/assets/services/3.png" className="img-article"></img>
            <h4> Référencement</h4>
            <p> Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
        </article>

        </div>
    )
}

export default Services
