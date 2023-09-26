import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ReservationManagement = () => {
  const [isGroup, setIsGroup] = useState(true);
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleShowConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are You Sure Want To Cancel {selectedName} Reservation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: "1rem" }}
            onClick={handleClose}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are You Sure Want To Confirm {selectedName} Reservation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Close
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: "1rem" }}
            onClick={handleCloseConfirm}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>

      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-8">
            <input
              type="text"
              placeholder="Search Reservation By Name"
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
          </div>
          {/* type */}
          <div className="col-2">
            <ButtonGroup size="lg" className="mb-2">
              <Button
                id="group"
                onClick={() => {
                  setIsGroup(true);
                  document
                    .getElementById("group")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("personal")
                    .classList.remove("btn-primary");
                  document.getElementById("group").classList.add("btn-primary");
                  document
                    .getElementById("personal")
                    .classList.add("btn-outline-primary");
                }}
                variant="primary"
              >
                Group
              </Button>
              <Button
                id="personal"
                onClick={() => {
                  setIsGroup(false);
                  document
                    .getElementById("personal")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("group")
                    .classList.remove("btn-primary");
                  document
                    .getElementById("personal")
                    .classList.add("btn-primary");
                  document
                    .getElementById("group")
                    .classList.add("btn-outline-primary");
                }}
                variant="outline-primary"
              >
                Personal
              </Button>
            </ButtonGroup>
          </div>
          {/* cancelable */}
          <div className="col-2">
            <ButtonGroup size="lg" className="mb-2">
              <Button
                id="open"
                onClick={() => {
                  document
                    .getElementById("open")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("close")
                    .classList.remove("btn-primary");
                  document.getElementById("open").classList.add("btn-primary");
                  document
                    .getElementById("close")
                    .classList.add("btn-outline-primary");
                }}
                variant="primary"
              >
                Open
              </Button>
              <Button
                id="close"
                onClick={() => {
                  document
                    .getElementById("close")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("open")
                    .classList.remove("btn-primary");
                  document.getElementById("close").classList.add("btn-primary");
                  document
                    .getElementById("open")
                    .classList.add("btn-outline-primary");
                }}
                variant="outline-primary"
              >
                Close
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="container">
          <div className="row mb-3" style={{ justifyContent: "end" }}>
            <Button
              href="/reservation-management/add-group"
              style={{ width: "fit-content" }}
            >
              Create Group Reservation
            </Button>
          </div>
        </div>
        {/* GROUP TABLE */}
        {isGroup ? (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Group Name</th>
                  <th>Group Leader</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> No </td>
                  <td> Tadika Mesra</td>
                  <td> Asep</td>
                  <td> 19-09-2023</td>
                  <td> 19-10-2023</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setSelectedName("Grup Cancel");
                        handleShow();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="secondary"
                      href="/reservation-management/edit-group"
                      style={{ marginLeft: "1rem" }}
                    >
                      Edit
                    </Button>

                    <Button
                      onClick={() => {
                        setSelectedName("Grup Confirm");
                        handleShowConfirm();
                      }}
                      style={{ marginLeft: "1rem" }}
                    >
                      Confirm
                    </Button>
                  </td>
                </tr>
                {/* {users.map((user) => (
                      <tr key={user.id}>
                        <td> {user.full_name} </td>
                        <td> {user.name}</td>
                        <td> {user.email}</td>
                        <td> {user.domisili}</td>
                        <td> {user.pekerjaan}</td>
                        <td> "test"</td>
                        <td> "test"</td>
                      </tr>
                    ))} */}
              </tbody>
            </Table>
          </>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name Leader</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> No </td>
                  <td> Asep</td>
                  <td> 19-09-2023</td>
                  <td> 19-10-2023</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setSelectedName("Pesonal Cancel");
                        handleShow();
                      }}
                    >
                      Cancel
                    </Button>

                    <Button variant="secondary" style={{ marginLeft: "1rem" }}>
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedName("Personal Confirm");
                        handleShowConfirm();
                      }}
                      style={{ marginLeft: "1rem" }}
                    >
                      Confirm
                    </Button>
                  </td>
                </tr>
                {/* {users.map((user) => (
                      <tr key={user.id}>
                        <td> {user.full_name} </td>
                        <td> {user.name}</td>
                        <td> {user.email}</td>
                        <td> {user.domisili}</td>
                        <td> {user.pekerjaan}</td>
                        <td> "test"</td>
                        <td> "test"</td>
                      </tr>
                    ))} */}
              </tbody>
            </Table>
          </>
        )}

        <div>{/* <Pagination>{items}</Pagination> */}</div>
      </div>
    </>
  );
};

export default ReservationManagement;
