import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import "../blog/blog.css";
=======
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622

const Blog = () => {
    return (
        <div className="Blog">
<<<<<<< HEAD
            <img src="/src/assets/realisations/background.jpg" alt="fond" id="fond"></img>

        <div id="title">
        <h2> BLOG</h2>
        <h3> Retrouvez ici quelques articles sur le développement web.</h3>
        </div>

      <div id="blog">
      <div className='card'>
      <Card style={{ width: '0rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art1.png" className='realisations'/>
      <Card.Body>
        <Card.Title className='card.title'>Coder son site en HTML/CSS</Card.Title>
        <Card.Text>
        <div className="card.text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </div>
        </Card.Text>
        <Button variant="primary" className='btn'>Lire la suite</Button>
=======
            <h2> BLOG</h2>
            <p> Retrouvez ici quelques articles sur le développement web.</p>
       
 
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art1.png" />
      <Card.Body>
        <Card.Title className='blog'>Coder son site en HTML/CSS</Card.Title>
        <Card.Text className='text'> 
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
        <Card.Text>
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
<<<<<<< HEAD
    </div>

    <div className='card'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art2.png" className='realisations' />
      <Card.Body>
        <Card.Title className='card.title'>Vendre ses produits sur le web</Card.Title>
        <Card.Text>
        <div className="card.text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
         </div>
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
         Publié le 20 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='card'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art3.png" className='realisations' />
      <Card.Body>
        <Card.Title className='Card.title'>Se positionner sur Google</Card.Title>
        <Card.Text>
          <div className="card.text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </div>
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 1 août 2022
=======

    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art2.png" />
      <Card.Body>
        <Card.Title className='blog'>Vendre ses produits sur le web</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 22 août 2022
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
        </Card.Text>
      </Card.Body>
    </Card>

<<<<<<< HEAD
    <div className='card'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art4.png" className='realisations' />
      <Card.Body>
        <Card.Title className='Card.title'>Techniques de référencement</Card.Title>
        <Card.Text>
          <div className="card.text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </div>
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 30 juillet 2022
=======


    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art4.png" />
      <Card.Body>
        <Card.Title className='blog'>Coder en responsive design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 22 août 2022
>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
        </Card.Text>
      </Card.Body>
    </Card>

<<<<<<< HEAD
    <div className='card'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art5.png" className='realisations' />
      <Card.Body>
        <Card.Title className='Card.title'>Apprendre à coder</Card.Title>
        <Card.Text>
          <div className="card.text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </div>
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 12 juillet 2022
        </Card.Text>
      </Card.Body>
    </Card>

    <div className='card'>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art6.png" className='realisations' />
      <Card.Body>
        <Card.Title className='Card.title'>Se positionner sur Google</Card.Title>
        <Card.Text>
          <div className="card.text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </div>
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 1 août 2022
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
    </div>
        </div>
      </div>
      </div>
    </div>
    );
}
    

=======

    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art5.png" />
      <Card.Body>
        <Card.Title className='blog'>Techniques de référencement</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    

    
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art6.png" />
      <Card.Body>
        <Card.Title className='blog'>Apprendre à coder </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="/src/assets/blog/art3.png" />
      <Card.Body>
        <Card.Title className='blog'>Se positionner sur Google</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Lire la suite</Button>
        <Card.Text>
          Publié le 22 août 2022
        </Card.Text>
      </Card.Body>
    </Card>
    
    </div>
       
       
        
    );
}

>>>>>>> d75c2450fc9abf8fad8c00ce2ce31dc6c3261622
export default Blog;