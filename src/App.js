import React from "react";
import { Card } from "react-bootstrap";
import './App.css'
import Navigation from './components/Navbar'
import Goal from './components/Goal'
import PivotPoint from './components/PivotPoint'
import Comcast from './components/Comcast'
import Dreyers from './components/Dreyers'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'
import Skills from './components/Skills'
import professionalPicture from './images/ProfessionalPicture.jpg'


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
      <div>
        <Card className='profile-setup' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={professionalPicture}/>
          <Card.Body>
            <Card.Title>Ryan Hillier</Card.Title>
            <Card.Text>
              Aspiring Software Engineer
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <PivotPoint />
      <Dreyers />
      <Comcast />
      <div>
      </div>
      {[
        'light',
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'dark'}
          style={{maxWidth: 800 }}
          className="mb-2 skills"
        >
          <div>
            <div>
              <Card class='aboutMe'>
                <Card.Header>A little bit about me.</Card.Header>
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
        </Card>
      ))}
      <div>
        <Skills/>
        <Hobbies />
        <Footer />
      </div>
    </div>
  );
};

export default App;