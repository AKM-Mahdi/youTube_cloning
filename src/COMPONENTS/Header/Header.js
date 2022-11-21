import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png"
              height={40}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">{<Search></Search>}</Nav>
            <Nav>
              <Link className="nav-link" to="/login">
                LOGIN
              </Link>
              <Link className="nav-link" to="/login">
                REGISTER
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
