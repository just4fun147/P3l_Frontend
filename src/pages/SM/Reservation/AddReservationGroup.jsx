import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import RoomGroupCard from "../../../components/common/RoomGroupCard";
import AddOnCard from "../../../components/common/AddOnCard";

const AddReservationGroup = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure The Data Is Correct?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Promo Name : <b>Summer</b>
          </p>
          <p>
            Code : <b>ABC</b>
          </p>
          <p>
            Capacity : <b>50</b>
          </p>
          <p>
            Price Type : <b>Discount</b>
          </p>
          <p>
            Price : <b>Discount</b>
          </p>
          <p>
            Minimum Price : <b>100000</b>
          </p>
          <p>
            Maximum Price : <b>100000</b>
          </p>
          <p>
            Start Date : <b>19-09-2023</b>
          </p>
          <p>
            End Date : <b>19-09-2023</b>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ marginLeft: "1rem" }} onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container mt-3 mb-3">
        <Card
          style={{
            padding: "3rem",
          }}
        >
          <h4>Create Group Reservation</h4>
          <hr />
          <p style={{ textAlign: "left" }}>Group Name</p>
          <input
            type="text"
            placeholder="Tadika Mesra"
            className="form-control mb-3"
            style={{
              width: "100%",
              minWidth: "250px",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              backgroundColor: "#D9D9D9",
              borderRadius: "5px",
              lineHeight: "0.25",
            }}
          ></input>
          <p style={{ textAlign: "left" }}>Group Address</p>
          <input
            type="text"
            placeholder="garuda"
            className="form-control mb-3"
            style={{
              width: "100%",
              minWidth: "250px",
              display: "block",
              marginRight: "auto",
              marginLeft: "auto",
              backgroundColor: "#D9D9D9",
              borderRadius: "5px",
              lineHeight: "0.25",
            }}
          ></input>
          <div className="row mt-3">
            <div className="col-6">
              <p style={{ textAlign: "left" }}>Start Date</p>
              <input
                type="date"
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
              ></input>
            </div>
            <div className="col-6">
              <p style={{ textAlign: "left" }}>End Date</p>
              <input
                type="date"
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
              ></input>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Leader</Accordion.Header>
                <Accordion.Body>
                  <p style={{ textAlign: "left" }}>Full Name</p>
                  <input
                    type="text"
                    placeholder="Asep"
                    className="form-control mb-3"
                    style={{
                      width: "100%",
                      minWidth: "250px",
                      display: "block",
                      marginRight: "auto",
                      marginLeft: "auto",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "5px",
                      lineHeight: "0.25",
                    }}
                  ></input>
                  <p style={{ textAlign: "left" }}>Identity</p>
                  <input
                    type="number"
                    placeholder="33022"
                    className="form-control mb-3"
                    style={{
                      width: "100%",
                      minWidth: "250px",
                      display: "block",
                      marginRight: "auto",
                      marginLeft: "auto",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "5px",
                      lineHeight: "0.25",
                    }}
                  ></input>
                  <p style={{ textAlign: "left" }}>Phone Number</p>
                  <input
                    type="number"
                    placeholder="0812222"
                    className="form-control mb-3"
                    style={{
                      width: "100%",
                      minWidth: "250px",
                      display: "block",
                      marginRight: "auto",
                      marginLeft: "auto",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "5px",
                      lineHeight: "0.25",
                    }}
                  ></input>
                  <p style={{ textAlign: "left" }}>Email</p>
                  <input
                    type="text"
                    placeholder="0812222"
                    className="form-control mb-3"
                    style={{
                      width: "100%",
                      minWidth: "250px",
                      display: "block",
                      marginRight: "auto",
                      marginLeft: "auto",
                      backgroundColor: "#D9D9D9",
                      borderRadius: "5px",
                      lineHeight: "0.25",
                    }}
                  ></input>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Detail Reservation</Accordion.Header>
                <Accordion.Body>
                  <RoomGroupCard />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Request</Accordion.Header>
                <Accordion.Body>
                  <AddOnCard />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div
            className="row mt-3"
            style={{ textAlign: "end", marginRight: "0.25rem" }}
          >
            <h4>
              Total : <b>Rp.1.200.000</b>
            </h4>
          </div>
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
              onClick={handleShow}
              style={{ width: "fit-content", marginLeft: "1rem" }}
            >
              Confirm
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AddReservationGroup;
