import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

const SeasonManagement = () => {
  const [show, setShow] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure Want To Delete {selectedName}</Modal.Title>
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
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-10">
            <input
              type="text"
              placeholder="Search Season By Name"
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
          <div className="col-2">
            <Button
              href="/season-management/add"
              style={{ width: "fit-content" }}
            >
              Add Season
            </Button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Season Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> No </td>
              <td> Summer</td>
              <td> 19-09-2023</td>
              <td> 19-10-2023</td>
              <td>
                <Button href="/season-management/edit">Edit</Button>
                <Button
                  variant="danger"
                  style={{ marginLeft: "1rem" }}
                  onClick={() => {
                    setSelectedName("Summer");
                    handleShow();
                  }}
                >
                  delete
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
        <div>{/* <Pagination>{items}</Pagination> */}</div>
      </div>
    </>
  );
};

export default SeasonManagement;
