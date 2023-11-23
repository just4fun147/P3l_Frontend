import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { token, name, role, headersAuth } from "../Api";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import Loading from "../assets/loading.gif";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {
  browserName,
  osName,
  deviceType,
  osVersion,
} from "react-device-detect";
import Cookies from "universal-cookie";

function BasicExample() {
  const [tokens, setTokens] = useState(token());
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState(name());
  const [roles, setRoles] = useState(role());
  const [oldPassword, setOldPasswords] = useState("");
  const [newPassword, setNewPasswords] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const path = window.location.pathname === "/login";

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const cookies = new Cookies();

  const logout = async () => {
    axios
      .post(
        process.env.REACT_APP_BASEURL + "logouts",
        {
          user_agent:
            browserName + " " + osName + " " + osVersion + " " + deviceType,
        },
        {
          headers: headersAuth,
        }
      )
      .then((response) => {
        document.cookie.split(";").forEach(function (c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        window.location = "/";
      })
      .catch((error) => {
        document.cookie.split(";").forEach(function (c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        window.location = "/";
      });
  };
  const changePassword = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "changePassword",
          {
            old_password: oldPassword,
            new_password: newPassword,
            confirm_new_password: confirmPassword,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setLoading(false);
          toast.success(response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          handleClose();
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };
  return (
    <>
      <ToastContainer />

      <Modal show={show} onHide={handleClose}>
        {loading ? (
          <>
            <Modal.Body style={{ textAlign: "center" }}>
              <img src={Loading} alt="loading" style={{ width: "25%" }}></img>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Change Your Password</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ justifyContent: "start" }}>
              <Container>
                <b>Old Password</b>
                <input
                  type="password"
                  placeholder="Old Password"
                  className="form-control"
                  onInput={(e) => setOldPasswords(e.target.value)}
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    display: "block",
                    textAlign: "start",
                    marginBottom: "5%",
                  }}
                ></input>
                <b>New Password</b>
                <input
                  type="password"
                  placeholder="New Password"
                  className="form-control"
                  onInput={(e) => setNewPasswords(e.target.value)}
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    display: "block",
                    marginBottom: "5%",
                    textAlign: "start",
                  }}
                ></input>
                <b>Confirm New Password</b>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="form-control"
                  onInput={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    display: "block",
                    textAlign: "start",
                  }}
                ></input>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  changePassword();
                }}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
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
            {roles === process.env.REACT_APP_ADMIN ? (
              <Nav className="ml-auto">
                <Nav.Link href="/room-management">Room</Nav.Link>
              </Nav>
            ) : (
              // OWNER
              <>
                {roles === process.env.REACT_APP_OWNER ? (
                  <Nav className="ml-auto">
                    <NavDropdown title="Report" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/report/monthly">
                        Income Report
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/report/guest">
                        Guest Report
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/report/new-customer">
                        New Customer Report
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ) : (
                  <>
                    {roles === process.env.REACT_APP_SM ? (
                      <Nav className="ml-auto">
                        <Nav.Link href="/season-management">Season</Nav.Link>
                        <Nav.Link href="/facility-management">
                          Facility
                        </Nav.Link>
                        <Nav.Link href="/room-type-management">Price</Nav.Link>
                        <Nav.Link href="/customer-management">User</Nav.Link>
                        <Nav.Link href="/test">Promo</Nav.Link>
                        <Nav.Link href="/reservation-management">
                          Reservation
                        </Nav.Link>
                      </Nav>
                    ) : (
                      <>
                        {roles === process.env.REACT_APP_GM ? (
                          <Nav className="ml-auto">
                            <NavDropdown title="Report" id="basic-nav-dropdown">
                              <NavDropdown.Item href="/report/monthly">
                                Income Report
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/report/guest">
                                Guest Report
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/report/new-customer">
                                New Customer Report
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/report/loyal-customer">
                                Loyal Customer Report
                              </NavDropdown.Item>
                            </NavDropdown>
                          </Nav>
                        ) : (
                          <>
                            {roles === process.env.REACT_APP_FO ? (
                              <Nav className="ml-auto">
                                <Nav.Link href="/room">Reservation</Nav.Link>
                              </Nav>
                            ) : (
                              <>
                                {roles === process.env.REACT_APP_CONSUMEN ? (
                                  <Nav
                                    className="ml-auto"
                                    style={{ width: "100%" }}
                                  >
                                    <Nav.Link href="/my-reservation/p">
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
              <Nav
                className=" justify-content-end"
                style={{ width: "100%", marginRight: "1.5rem" }}
              >
                <Nav.Link disabled style={{ color: "white", opacity: "0.8" }}>
                  {names}
                </Nav.Link>
                <NavDropdown title={<FaUser></FaUser>}>
                  {roles === process.env.REACT_APP_CONSUMEN ? (
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  ) : (
                    <></>
                  )}

                  <NavDropdown.Item onClick={handleShow}>
                    Change Password
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <>
                {path ? (
                  <Nav
                    className="justify-content-end"
                    style={{ width: "100%" }}
                  >
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
                  <Nav
                    className="justify-content-end"
                    style={{ width: "100%" }}
                  >
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
    </>
  );
}

export default BasicExample;
