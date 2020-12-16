import React from 'react'
import {Card, Button} from 'react-bootstrap'
import '../components/styles/mainpage.css';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';



function MainPage() {
    return (
        <>
        <Card className="mainpage" >
  <Card.Img src="https://i.imgur.com/Cca4ugH.jpeg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className="title1">Hi, I'm JP.</Card.Title>
    <Card.Text className="description">
      I'm a full stack web developer. 
    </Card.Text>
    <div className="button">
 <Link to="/getintouch">
    <Button variant="light" size="lg" >Get in Touch</Button> {' '}
</Link>
    </div>
  </Card.ImgOverlay>
  <Footer />

</Card>
        </>
        
    )
}

export default MainPage
