import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { headersAuth } from "../../Api";
import axios from "axios";
import Loading from "../../components/Loading";

const Edit = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ids, setIds] = useState(useParams().id);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [roomNumber, setRoomNumber] = useState();
  const [typeName, setTypeName] = useState();
  const [isSmoking, setIsSmoking] = useState();
  const [isDouble, setIsDouble] = useState("0");

  const getRoom = () => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms",
          { id: ids },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRoomNumber(response.data.OUT_DATA[0].room_number);
          setTypeName(response.data.OUT_DATA[0].type_name);
          // setIsSmoking(response.data.OUT_DATA[0].type_name);
          // setTypeName(response.data.OUT_DATA[0].type_name);

          setTimeout(setLoading(false), 5000);
          console.log(roomNumber);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  useEffect(() => {
    getRoom();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure The Data Is Correct?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Room Number : <b>123</b>
          </p>
          <p>
            Room Type : <b>Superior</b>
          </p>
          <p>
            <b>Smoking Room</b>
          </p>
          <p>
            Bed Type : <b>Single</b>
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
              <h4>Edit Room</h4>
              <hr />
              <p style={{ textAlign: "left" }}>Room Number</p>
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
              <p style={{ textAlign: "left" }}>Room Type</p>
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
                <option value="">Superior</option>
              </select>

              <Form className="mt-4" style={{ textAlign: "start" }}>
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    label="Smoking Room"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                  />
                  <Form.Check
                    inline
                    label="Non Smoking Room"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                  />
                </div>
              </Form>
              <p style={{ textAlign: "left" }}>Bed Type</p>
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
                <option value="">Single</option>
              </select>
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
          </>
        )}
      </div>
    </>
  );
};

export default Edit;
