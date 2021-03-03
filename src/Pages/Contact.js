import React, {useState} from 'react'
import {Card, Button, Form, Col} from 'react-bootstrap';
import '../components/styles/contact.css'
import Footer from '../components/Footer';

function Contact() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        console.log(first);
        console.log(last);
        console.log(phone);
        console.log(email);
        console.log(comments);
        
    }
    return (
        <>
          <Card className="bg-dark text-white">
          <Card.Img src="https://i.imgur.com/36qhXiz.jpg" alt="Card image" />
          <Card.ImgOverlay>    font-family: 'Heebo', sans-serif;

            <Card.Title className="title10">Contact JP</Card.Title>
            <Card.Title className="phone">Phone: (843) 290-2038</Card.Title>
            <Card.Title className="email">Email: jpcas001@gmail.com</Card.Title>
            <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail" >
        <Form.Label className="form-text">First Name</Form.Label>
        <Form.Control required onChange ={(e) => setFirst(e.target.value)} id="first" type="first-name" placeholder="First Name" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label className="form-text">Last Name</Form.Label>
        <Form.Control required onChange ={(e) => setLast(e.target.value)} id="last" type="last-name" placeholder="Last Name" />
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress1" >
      <Form.Label className="form-text">Phone Number</Form.Label>
      <Form.Control required onChange ={(e) => setPhone(e.target.value)} id="phone" placeholder="Phone Number" />
    </Form.Group>
  
    <Form.Group controlId="formGridAddress1" >
      <Form.Label className="form-text">Email</Form.Label>
      <Form.Control required onChange ={(e) => setEmail(e.target.value)} id="email" placeholder="Email Address" />
    </Form.Group>
  
    <Form.Group controlId="formGridAddress2" >
      <Form.Label className="form-text">Comments</Form.Label>
      <Form.Control  required onChange ={(e) => setComments(e.target.value)} id="comments" as="textarea" placeholder="Leave your comments here!" />
    </Form.Group>
  
    
    <Button onClick={handleSubmit} variant="light" type="submit" className="comment-button">
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