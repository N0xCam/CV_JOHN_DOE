

const Home = () => {

    return (
        
        <div className="home">
           
           <header id="Introduction">
            <h1 id="Hello"> Bonjour, je suis John Doe</h1>
            <h2 id="Job"> Développeur web full stack</h2>
            <button className="button"> En savoir plus </button>
            </header>

            <section id="Presentation">
                <h2> À propos </h2>
                <article className="mypresentation">
                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.

                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeut web full stack.

                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.

                </article>

                <img src="./src/assets/home-presentation.jpg" alt="me"></img>
                <article>
                    <h3> Mes compétences </h3>
                    <img src="./src/assets/home-skills.png" alt="my skills"></img>
                </article>
            </section>
        </div>
    );
}



export default Home;
