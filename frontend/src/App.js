import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './Home';
import Insert from './Insert';
import Display from "./Display";
import Delete from './Delete';
import './styles.css';

function App() {
  return (
    <Router style={{backgroundColor:"#F2F2F2"}}>
      <Navbar bg='light' expand="lg"style={{color:"#fff"}} >
        <Container>
          <Navbar.Brand href="#home">Abhi Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
              <Nav.Link as={Link} to="/display">Display</Nav.Link>
              <Nav.Link as={Link} to="/delete">Delete</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/display" element={<Display />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;