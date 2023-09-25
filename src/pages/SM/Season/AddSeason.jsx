import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const AddSeason = () => {
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
            Season Name : <b>Summer</b>
          </p>
          <p>
            Capacity : <b>50</b>
          </p>
          <p>
            Price Type : <b>Discount</b>
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
          <h4>Create Season</h4>
          <hr />
          <p style={{ textAlign: "left" }}>Season Name</p>
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
          <p style={{ textAlign: "left" }}>Capacity</p>
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

          <p style={{ textAlign: "left" }}>Price Type</p>
          <select
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
          >
            <option value="">Discount</option>
            <option value="">Potongan</option>
            <option value="">Harga</option>
          </select>
          <div className="row">
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
          </div>
          <p style={{ textAlign: "left" }}>Apply For All Room Type</p>
          <Form style={{ textAlign: "start" }}>
            <div key="inline-radio" className="mb-3">
              <Form.Check
                inline
                label="Yes"
                name="group1"
                type="radio"
                id="inline-radio-1"
              />
              <Form.Check
                inline
                label="No"
                name="group1"
                type="radio"
                id="inline-radio-2"
              />
            </div>
          </Form>
          <div>
            <p style={{ textAlign: "left" }}>Room Type</p>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Superior</Accordion.Header>
                <Accordion.Body>
                  <p style={{ textAlign: "left" }}>Price</p>
                  <input
                    type="number"
                    placeholder="123"
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
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Junior Suite</Accordion.Header>
                <Accordion.Body>
                  <p style={{ textAlign: "left" }}>Price</p>
                  <input
                    type="number"
                    placeholder="123"
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
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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

export default AddSeason;
