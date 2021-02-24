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
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
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
