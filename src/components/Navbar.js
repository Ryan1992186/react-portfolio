
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Ryan Hillier Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home"></Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://thegoodneighbor.herokuapp.com/">GoodNeighbor</NavDropdown.Item>
                                <NavDropdown.Item href="https://github.com/Ryan1992186/ReadmeGenerator">ReadMe Generator</NavDropdown.Item>
                                <NavDropdown.Item href="https://vicebrary.herokuapp.com/login">Vicebrary</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation