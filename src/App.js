import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './App.css'
import Navigation from './components/Navbar'
import Goal from './components/Goal'
import SkillsList from "./components/SkillsList";

/**
 * @author
 * @function App
 **/

const App = (props) => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //   });
  // }, []);

  

  return (
    <div>
      <Navigation />
      <Goal />
      <div classname='profile-setup'>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://media.istockphoto.com/vectors/default-placeholder-man-vector-id844000458?b=1&k=20&m=844000458&s=612x612&w=0&h=xSyzC1Fm1pvX07lsz50QB3CkGHE89p8kR34Hx9Gq9eM=" />
          <Card.Body>
            <Card.Title>Ryan Hillier</Card.Title>
            <Card.Text>
              Aspiring Software Engineer
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>State: Illinois</ListGroupItem>
            <ListGroupItem>City: Loves Park</ListGroupItem>
            <ListGroupItem>Zipcode: 6111</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://www.linkedin.com/in/ryan-hillier-782216167/">LinkedIn</Card.Link>
            <Card.Link href="https://github.com/Ryan1992186?tab=repositories">GitHub</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <SkillsList/>
      </div>
      {[
        'light',
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'dark'}
          style={{ width: '50rem' }}
          className="mb-2 skills"
        >
          <div classname='experience'>
            <div>
              <Card border="dark" style={{ width: '50rem' }}>
                <Card.Header>Work Experience:</Card.Header>
                <Card.Body>
                  <Card.Title>Technical Professional 5+ years of Logistics and Networking Experience</Card.Title>
                  <Card.Text>
                    Prior to seeking a career within the coding web development industry I worked as a network technician for Comcast, shortly after I found myself working OSD Logistics for Dreyers Grand Ice Cream, during the covid pandemic I was eventually laid off which led me to finding a position as a level 1 technical support for Pivot Point Consulting.
                    My passion for computers and technology eventually lead me to where I am today to pursue a career within the software and web development industry.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <Card className='shadow-box z-depth-5' border='dark'>
            <Card.Header>Proficient Skills:</Card.Header>
            <Card.Body>
              <Card.Title>Bootstrap, HTML5, React.js, Node.js, Mongoose, Javascript</Card.Title>
              <Card.Text>
                I have a fundemental understanding in the above listed languages, having attended Northwestern Bootcamp (2021) and with each passing day I am learning more and more. Most notably React.js which I used to create this portfolio.
              </Card.Text>
            </Card.Body>
          </Card>
        </Card>
      ))};
    </div>
  );
};

export default App;