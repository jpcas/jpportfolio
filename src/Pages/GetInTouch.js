import React from 'react'
import {Card} from 'react-bootstrap'
import '../components/styles/getintouch.css';
import Footer from '../components/Footer'



function GetInTouch() {
    return (
        <Card className="bg-dark text-white">
        <Card.Img src="https://i.imgur.com/Dt2LNcN.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="title10">Let's Get in Touch!</Card.Title>
          <Card.Title className="phone">Phone: (843) 290-2038</Card.Title>
          <Card.Title className="email">Email: jpcas001@gmail.com</Card.Title>
        </Card.ImgOverlay>
        <Footer />

      </Card>
    )
}

export default GetInTouch
