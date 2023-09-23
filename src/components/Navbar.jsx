import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { token, logout, name, role } from "../Api";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
function BasicExample() {
  const [tokens, setTokens] = useState(token());
  const [names, setNames] = useState(name());
  const path = window.location.pathname === "/login";
  return (
    <Navbar
      className="shadow"
      expand="lg"
      data-bs-theme="dark"
      style={{
        backgroundColor: "#0C1738",
        position: "sticky",
        top: "0",
        zIndex: "1",
      }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ height: "75px" }}>
          <img src={logo} alt="logo.png" style={{ height: "75px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* ADMIN */}
          {role() == process.env.REACT_APP_ADMIN ? (
            <Nav className="ml-auto">
              <Nav.Link href="/room">Room</Nav.Link>
            </Nav>
          ) : (
            // OWNER
            <>
              {role() == process.env.REACT_APP_OWNER ? (
                <Nav className="ml-auto">
                  <NavDropdown title="Report" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Income Report
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Guest Report
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      New Customer Report
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              ) : (
                <>
                  {role() == process.env.REACT_APP_SM ? (
                    <Nav className="ml-auto">
                      <Nav.Link href="/room">Season</Nav.Link>
                      <Nav.Link href="/test">Facility</Nav.Link>
                      <Nav.Link href="/test">Promo</Nav.Link>
                      <NavDropdown title="Reservation" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Group
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Personal
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  ) : (
                    <>
                      {role() == process.env.REACT_APP_GM ? (
                        <Nav className="ml-auto">
                          <NavDropdown title="Report" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                              Income Report
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              Guest Report
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              New Customer Report
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              Loyal Customer Report
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      ) : (
                        <>
                          {role() == process.env.REACT_APP_FO ? (
                            <Nav className="ml-auto">
                              <Nav.Link href="/room">Reservation</Nav.Link>
                            </Nav>
                          ) : (
                            <>
                              {role() == process.env.REACT_APP_CONSUMEN ? (
                                <Nav
                                  className="ml-auto"
                                  style={{ width: "100%" }}
                                >
                                  <Nav.Link href="/room">
                                    My Reservation
                                  </Nav.Link>
                                </Nav>
                              ) : (
                                <></>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
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
