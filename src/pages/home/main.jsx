import ProgressBar from 'react-bootstrap/ProgressBar';

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

            <div id="presentation">
            <div className='colonnes'>
            <section id="Presentation">
                <h2 id="about"> À propos </h2>
                <article className="mypresentation">
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d' <strong>intégrateur-développeur web </strong>au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. </p>

                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>

                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>

                </article>

            </section>
            </div>

            <div id="second">
            <div className='colonnes'>
                <img src="./src/assets/home-presentation.jpg" alt="me" id="me"></img>
               
                <article id="skills2">
                    <h3> Mes compétences </h3>     

                <div id="skills"></div>
                <div className='progress'> HTML 90% 
                <ProgressBar variant="danger" now={90} />
                

                <div className='progress'> CSS3 80% </div>
                <ProgressBar variant="info" now={80} />
                

                <div className='progress'> JAVASCRIPT 70% </div>
                <ProgressBar variant="warning" now={70} />
                

                <div className='progress'> PHP 60% </div>
                <ProgressBar variant="success" now={60} />
                

                <div className='progress'> REACT 50% </div>
                <ProgressBar variant="danger" now={50} />
                
                </div>
                
            </article>
            </div>
            </div>
            </div>
            </div>
  );
}




export default Home;
