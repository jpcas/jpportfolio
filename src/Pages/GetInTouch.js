import React from 'react'
import {Card, Form, Col, Button} from 'react-bootstrap'
import '../components/styles/getintouch.css';
import Footer from '../components/Footer'



function GetInTouch() {

    return (
      <>
        <Card className="bg-dark text-white">
        <Card.Img src="https://i.imgur.com/Dt2LNcN.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="title10">Let's Get in Touch!</Card.Title>
          <Card.Title className="phone">Phone: (843) 290-2038</Card.Title>
          <Card.Title className="email">Email: jpcas001@gmail.com</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="email" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="password" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Email Address" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Comments</Form.Label>
    <Form.Control placeholder="Leave your comments here!" />
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      <Footer />

      </>
    )
}

export default GetInTouch
