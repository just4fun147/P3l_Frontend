import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { headersAuth } from "../../../Api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";

const EditUser = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [fullName, setFullName] = useState();
  const [identity, setIdentity] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [ids, setIds] = useState(useParams().id);

  const showModal = () => {
    if (fullName == null || fullName === "") {
      toast.error("Invalid Name!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (identity == null || identity === "") {
      toast.error("Invalid Identity!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (email == null || email === "") {
      toast.error("Invalid Email Type!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      handleShow();
    }
  };

  const editUser = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "users/edit",
          {
            id: ids,
            email: email,
            password: password,
            full_name: fullName,
            phone_number: phoneNumber,
            identity: identity,
            address: address,
            image: "",
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          toast.success(response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setLoading(true);
          setTimeout((window.location.href = "/customer-management"), 5000);
        })
        .catch((error) => {
          setLoading(false);
        });
    });
  };
  const getCustomer = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "users",
          { id: ids },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setFullName(response.data.OUT_DATA[0].full_name);
          setIdentity(response.data.OUT_DATA[0].identity);
          setEmail(response.data.OUT_DATA[0].email);
          setAddress(response.data.OUT_DATA[0].address);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    });
  };
  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <>
      <ToastContainer />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure The Data Is Correct?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Customer Name : <b>{fullName}</b>
          </p>
          <p>
            Identity : <b>{identity}</b>
          </p>
          <p>
            Email : <b>{email}</b>
          </p>

          <p>
            Address : <b>{address}</b>
          </p>
          <p>
            Phone Number : <b>{phoneNumber}</b>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ marginLeft: "1rem" }} onClick={() => editUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container mt-3 mb-3">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Card
              style={{
                padding: "3rem",
              }}
            >
              <h4>Edit User</h4>
              <hr />
              <p style={{ textAlign: "left" }}>Full Name</p>
              <input
                type="text"
                placeholder="Markus Libert"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
                value={fullName}
                onInput={(e) => setFullName(e.target.value)}
              ></input>
              <p style={{ textAlign: "left" }}>Residential Identity</p>
              <input
                type="text"
                placeholder="33022123213122"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
                value={identity}
                onInput={(e) => setIdentity(e.target.value)}
              ></input>
              <p style={{ textAlign: "left" }}>Email</p>
              <input
                type="text"
                placeholder="gmail@gmail.com"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              ></input>
              <p style={{ textAlign: "left" }}>Password</p>
              <input
                type="password"
                placeholder="Password"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></input>
              <p style={{ textAlign: "left" }}>Address</p>
              <input
                type="text"
                placeholder="Garuda Street 34, Yogyakarta"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
                value={address}
                onInput={(e) => setAddress(e.target.value)}
              ></input>
              <p style={{ textAlign: "left" }}>Phone Number</p>
              <input
                type="number"
                placeholder="081xxxxxxx"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
                value={phoneNumber}
                onInput={(e) => setPhoneNumber(e.target.value)}
              ></input>
              <div
                className="row mt-3"
                style={{ justifyContent: "end", marginRight: "0.25rem" }}
              >
                <Button
                  href="javascript:history.back()"
                  variant="warning"
                  style={{ width: "fit-content" }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    showModal();
                  }}
                  style={{ width: "fit-content", marginLeft: "1rem" }}
                >
                  Confirm
                </Button>
              </div>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default EditUser;
