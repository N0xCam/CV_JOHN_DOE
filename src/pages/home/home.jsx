

const Home = () => {

    return (
        
        <div className="home">
           
           <header id="Introduction">
            <h2 id="Hello"> Bonjour, je suis John Doe</h2>
            <h2 id="Job"> Développeur web full stack</h2>
            <div id="bouton">
            <button className="button"> En savoir plus </button>
            </div>
            </header>

            <section id="Presentation">
                <h2 id="about"> À propos </h2>
                <article className="mypresentation">
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d' <strong>intégrateur-développeur web </strong>au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. </p>

                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>

                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>

                </article>

                <img src="./src/assets/home-presentation.jpg" alt="me"></img>
                <article>
                    <h3> Mes compétences </h3>
                    <img src="./src/assets/home-skills.png" alt="my skills" id="skills"></img>
                </article>
            </section>
        </div>
    );
}



export default Home;
