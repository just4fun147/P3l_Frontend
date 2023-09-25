import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const EditFacility = () => {
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
            Facility Name : <b>Summer</b>
          </p>
          <p>
            Price : <b>ABC</b>
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
          <h4>Edit Facility</h4>
          <hr />
          <p style={{ textAlign: "left" }}>Facility Name</p>
          <input
            type="text"
            placeholder="A123"
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
          <p className="mt-3" style={{ textAlign: "left" }}>
            Price
          </p>
          <input
            type="number"
            placeholder="50"
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

export default EditFacility;
