import React from "react";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Footer from "./components/Footer";
// import Card from './components/UI'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './App.css'
import Navigation from './components/Navbar'
import Goal from './components/Goal'
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
      <Card style={{ width: '18rem' }}>
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
          <Card.Link href="#">LinkedIn</Card.Link>
          <Card.Link href="#"></Card.Link>
        </Card.Body>
      </Card>
      <div>
        <Goal/>
      </div>

      {[
        'Light',
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light'}
          style={{ width: '50rem' }}
          className="mb-2 skills"
        >
          <Card.Header>Proficient Skills</Card.Header>
          <Card.Body>
            <Card.Title>Bootstrap, HTML5, React.js, Node.js, Mongoose, Javascript</Card.Title>
            <Card.Text>
                I have a fundemental understanding in the above listed languages, having attended Northwestern Bootcamp (2021) and with each passing day I am learning more and more. Most notably React.js which I used to create this portfolio.
            </Card.Text>
          </Card.Body>
        </Card>
        
      ))};

      {/* <About />
      <UI/>
      <Experience />
      <Projects />
      <Skills />
      <Footer /> */}
    </div>
  );
};

export default App;