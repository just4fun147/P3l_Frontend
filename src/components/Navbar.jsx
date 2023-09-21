import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { token, logout, name } from "../Api";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

function BasicExample() {
  const [tokens, setTokens] = useState(token());
  const [names, setNames] = useState(name());
  const path = window.location.pathname === "/login";
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#0C1738" }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ height: "75px" }}>
          <img src={logo} alt="logo.png" style={{ height: "75px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {tokens ? (
            <Nav className="ml-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/test">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <></>
          )}

          {tokens ? (
            <Nav className=" justify-content-end" style={{ width: "100%" }}>
              <Nav.Link disabled style={{ color: "white", opacity: "0.8" }}>
                {names}
              </Nav.Link>
              <NavDropdown title={<FaUser></FaUser>}>
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => logout()}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <>
              {path ? (
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <Button
                    href="/signup"
                    style={{
                      backgroundColor: "#FBBC05",
                      color: "#0C1738",
                    }}
                  >
                    <b>Signup</b>
                  </Button>
                </Nav>
              ) : (
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <Button
                    href="/login"
                    style={{
                      backgroundColor: "#FBBC05",
                      color: "#0C1738",
                    }}
                  >
                    <b>Login</b>
                  </Button>
                </Nav>
              )}
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
