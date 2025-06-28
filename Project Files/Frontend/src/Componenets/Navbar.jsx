// src/Componenets/Navbar.jsx (or Home.jsx, if you renamed it)
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "red" }}>
      <Container>
        {/* BookStore with logo image */}
        <Navbar.Brand as={Link} to="/" style={{ color: 'white', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2f982d29452373.55f36265e0376.png"
            alt="Book Icon"
            style={{ width: '60px', height: '40px', marginRight: '10px' }}
          />
          <span style={{ fontWeight: 'bold' }}>BookStore</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none" }}>User</Link>
            <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Seller</Link>
            <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;