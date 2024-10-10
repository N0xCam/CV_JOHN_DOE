<<<<<<< HEAD
import ProgressBar from 'react-bootstrap/ProgressBar';
=======
import Header from "./header";
import Home from "./main";
import Footer from "./footer";

function MyHome () {
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622

        return (
        <>
        
<<<<<<< HEAD
        <div className="home">
           
           <header id="Introduction">
            <h2 id="hello"> Bonjour, je suis John Doe</h2>
            <h2 id="job"> Développeur web full stack</h2>
            <div id="btn">
            <button className="button"> En savoir plus </button>
            </div>
            </header>

            <section id="Presentation">
                <div id="col-first">
                <h2 id="about"> À propos </h2>
                <ProgressBar variant="info" now={80} />
                <article className="mypresentation">
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d' <strong>intégrateur-développeur web </strong>au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. </p>

                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>

                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>

                </article>
                </div>

                <div id="col-second">
                <img src="./src/assets/home-presentation.jpg" alt="me" id="me-home"></img>
                <article>
                    <h3 id="skills-title"> Mes compétences </h3>

                <div id="skills">
                    <div className='pourcent'> HTML 90%</div>
                    <ProgressBar variant="danger" now={90} />
                    <div className='pourcent'> CSS3 80%</div>
                    <ProgressBar variant="info" now={80} />
                    <div className='pourcent'> JAVASCRIPT 70%</div>
                    <ProgressBar variant="warning" now={70} />
                    <div className='pourcent'> PHP 60%</div>
                    <ProgressBar variant="success" now={60} />
                    <div className='pourcent'> REACT 50%</div>
                    <ProgressBar variant="primary" now={50} />
                </div>
                </article>
                </div>
            </section>
        </div>
    );
}





export default Home;
=======
        <Header/>
        <Home/>
        <Footer/>
        </>
);
}

export default MyHome;
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
