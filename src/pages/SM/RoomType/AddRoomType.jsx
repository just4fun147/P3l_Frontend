import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { headersAuth } from "../../../Api";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";

const AddRoomType = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [rooms, setRooms] = useState();
  const [roomNumber, setRoomNumber] = useState();
  const [typeName, setTypeName] = useState();
  const [isSmoking, setIsSmoking] = useState();
  const [isDouble, setIsDouble] = useState("0");

  const showModal = () => {
    if (roomNumber == null || roomNumber === "") {
      toast.error("Invalid Type Name!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (typeName == null || typeName === "") {
      toast.error("Invalid Price!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (isSmoking == null || isSmoking === "") {
      toast.error("Invalid Smoking Room Type!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      handleShow();
    }
  };
  const createRoom = () => {
    handleClose();
    setLoading(true);
    let s = true;
    let d = true;
    if (isSmoking !== "1") {
      s = false;
    }
    if (isDouble !== "1") {
      d = false;
    }
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms-type/create",
          {
            type_name: roomNumber,
            price: typeName,
            is_smoking: s,
            is_double: d,
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
          setTimeout((window.location.href = "/room-type-management"), 5000);
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          reset();
        });
    });
  };
  const getRoomType = (search) => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms-type",
          { room_number: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRooms(response.data.OUT_DATA);
          setTypeName(response.data.OUT_DATA[0].type_name);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const reset = () => {
    setRoomNumber();
    setTypeName();
    setIsSmoking();
    setIsDouble("0");
    getRoomType();
  };

  useEffect(() => {
    getRoomType();
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
            Room Type : <b>{roomNumber}</b>
          </p>
          <p>
            Room Price : <b>{typeName}</b>
          </p>
          <p>
            {isSmoking === "1" ? <b>Smoking Room</b> : <b>Non Smoking Room</b>}
          </p>
          <p>Bed Type : {isDouble === "1" ? <b>Double</b> : <b>Single</b>}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ marginLeft: "1rem" }} onClick={() => createRoom()}>
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
              <h4>Create Room Type</h4>
              <hr />
              <p style={{ textAlign: "left" }}>Room Type</p>
              <input
                type="text"
                placeholder="Superior"
                className="form-control mb-3"
                onInput={(e) => setRoomNumber(e.target.value)}
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
              <p style={{ textAlign: "left" }}>Price</p>
              <input
                type="text"
                placeholder="1000000"
                className="form-control mb-3"
                onInput={(e) => setTypeName(e.target.value)}
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
              <Form className="mt-4" style={{ textAlign: "start" }}>
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    label="Smoking Room"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                    onClick={() => setIsSmoking("1")}
                  />
                  <Form.Check
                    inline
                    label="Non Smoking Room"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                    onClick={() => setIsSmoking("0")}
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
                onChange={(e) => setIsDouble(e.target.value)}
              >
                <option value="0">Single</option>
                <option value="1">Double</option>
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

export default AddRoomType;
