import React from 'react';
import {Card, CardGroup, Button } from 'react-bootstrap'
import '../components/styles/project.css';
import Footer from '../components/Footer';




function Projects() {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    return (
        <>
        <h1 className="titleprojects">Projects</h1>
<CardGroup>
  <Card>
    <Card.Link>
    <Card.Img variant="top" src="https://i.imgur.com/mlsPfpi.jpeg" className="bike" />
    </Card.Link>
    <Card.Body className="bikeshop">
      <Card.Title>The Bike Shop</Card.Title>
      <Card.Text>
      The Bike Shop is the most reliable place to track your bike repairs for both cyclist and bike shop owners by adding your zipcode, selecting your bike shop, choosing your repairs, and tracking them.
      </Card.Text>
      <Button variant="dark" onClick={() => openInNewTab('https://bikeshop305.herokuapp.com/')}>View Site</Button>{' '}
      <Button variant="dark" onClick={() => openInNewTab('https://github.com/wyncode/c39_bike_shop')}>View Code</Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Link>
    <Card.Img variant="top" src="https://i.imgur.com/17omv2q.jpeg" className="beer" />
    </Card.Link>
    <Card.Body className="brew">
      <Card.Title>Git Brew'd</Card.Title>
      <Card.Text>
      Is the the most reliable place to search for local Breweries by city name wherever you are in United States. It's the best place to find your next Brewery visit.
      </Card.Text>
      <Button variant="dark" onClick={() => openInNewTab('https://gitbrewd.herokuapp.com/Home')}>View Site</Button>{' '}
      <Button variant="dark" onClick={() => openInNewTab('https://github.com/wyncode/c39_midterm_jp_traci_jose_ulises')}>View Code</Button>{' '}
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.imgur.com/VMShf52.jpg"  className="boxer"/>
    <Card.Body className="punch">
      <Card.Title>Mike Tyson Game</Card.Title>
      <Card.Text>
        Mike Tyson game is JavaScript REPL Game built with switch and case statements. 
        I used Javascript Variables along with control flow.
      </Card.Text>
      <Button variant="dark" onClick={() => openInNewTab('https://github.com/jpcas/miketysongame')}>View Site</Button>{' '}
    </Card.Body>
  </Card>
</CardGroup>  
<CardGroup>
  <Card>
    <Card.Body className="bikeshop">
      <Card.Title>Tech Used</Card.Title>
      <Card.Text>
      <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React Bootstrap</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>mapbox</li>
            <li>heroku</li>
            <li>Mongo-DB</li>
            <li>Express</li>
            <li>JWT Passport</li>
        </ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Body className="brew">
      <Card.Title>Tech Used</Card.Title>
      <Card.Text>
      <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>mapbox</li>
            <li>heroku</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body className="punch">
      <Card.Title>Tech Used</Card.Title>
      <Card.Text>
        <ul>
            <li>NodeJs</li>
            <li>Readline Sync</li>
            <li>JavaScript</li>
        </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup> 
<Footer />
 </>
    )
}

export default Projects
