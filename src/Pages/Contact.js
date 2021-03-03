import React from 'react'
import {Card, Button, Form, Col} from 'react-bootstrap';
import '../components/styles/contact.css'
import Footer from '../components/Footer';

function Contact() {
    return (
        <>
          <Card className="bg-dark text-white">
          <Card.Img src="https://i.imgur.com/36qhXiz.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="title10">Let's Get in Touch!</Card.Title>
            <Card.Title className="phone">Phone: (843) 290-2038</Card.Title>
            <Card.Title className="email">Email: jpcas001@gmail.com</Card.Title>
            <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label className="form-text">First Name</Form.Label>
        <Form.Control type="email" placeholder="First Name" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label className="form-text">Last Name</Form.Label>
        <Form.Control type="password" placeholder="Last Name" />
      </Form.Group>
    </Form.Row>
  
    <Form.Group controlId="formGridAddress1">
      <Form.Label className="form-text">Email</Form.Label>
      <Form.Control placeholder="Email Address" />
    </Form.Group>
  
    <Form.Group controlId="formGridAddress2">
      <Form.Label className="form-text">Comments</Form.Label>
      <Form.Control as="textarea" placeholder="Leave your comments here!" />
    </Form.Group>
  
    
    <Button variant="light" type="submit" className="comment-button">
      Submit
    </Button>
  </Form>
          </Card.ImgOverlay>
        </Card>
  
        <Footer />
  
        </>
      )
  }
  
  export default Contact