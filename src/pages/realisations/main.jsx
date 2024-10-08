import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../realisations/realisations.css";


const Realisations = () => {
    return (
        <div className="Realisations">
            <img src="/src/assets/realisations/background.jpg" alt="fond" id="fond"></img>

        <div id="title">
        <h2> PORTFOLIO</h2>
        <h3> Voici quelques-unes de mes réalisations.</h3>
        </div>

      <div id="realisations">
      <div className='card'>
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/src/assets/realisations/fresh-food.png" className='realisations'/>
      <Card.Body>
        <Card.Title className='card.title'>Fresh Food</Card.Title>
        <Card.Text>
        <div className="card.text">
          Réalisation d'un site avec commande en ligne.
        </div>
        </Card.Text>
        <Button variant="primary" className='btn'>Voir</Button>
        <Card.Text>
          Site réalisé avec PHP et MySQL
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='card'>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/src/assets/realisations/restaurant-akira.png" className='realisations' />
      <Card.Body>
        <Card.Title className='card.title'>Restaurant Akira</Card.Title>
        <Card.Text>
        <div className="card.text">
         Réalisation d'un site vitrine.
         </div>
        </Card.Text>
        <Button variant="primary">Voir</Button>
        <Card.Text>
         Site réalisé avec WordPress
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='card'>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src="/src/assets/realisations/bien-etre.png" className='realisations' />
      <Card.Body>
        <Card.Title className='Card.title'>Espace bien-être</Card.Title>
        <Card.Text>
          <div className="card.text">
          Réalisation d'un site vitrine pour un patricien de bien-être.
          </div>
        </Card.Text>
        <Button variant="primary">Voir</Button>
        <Card.Text>
          Site réalisé en HTML/CSS
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}



export default Realisations;