import React from 'react'
import {Card, CardGroup} from 'react-bootstrap'
import '../components/styles/aboutme.css';
import Footer from '../components/Footer'


function AboutMe() {
    return (
        <>
 <Card className="bg-dark text-white">
  <Card.Img src="https://i.imgur.com/IyCyAZr.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className="title">About Me</Card.Title>
    <Card.Text className="paragraph">
      JP is a full-stack web developer graduate from Wyncode Academy. He enjoys designing and building front-end websites through detail crafterd code and user friendly design. 
      During his time at Wyncode, JP has built full-stack websites. He has specialized in HTML, CSS, JavaScript, MongoDB, Express.JS, React, Node.js. 
      When JP is not writing code or/and debugging, he can be found in Miami, Florida riding his bike, taking long walks with his girlfriend Amanda and terrier Addison. 
    </Card.Text>
  </Card.ImgOverlay>
</Card>
 
<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://i.imgur.com/44L92rN.jpg?1" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.imgur.com/3qN81vq.jpeg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.imgur.com/5MLLixV.jpeg" />
  </Card>
</CardGroup>
<Footer />
        </>
        
    )
}

export default AboutMe
