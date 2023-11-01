import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import RoomGroupCard from "../../../components/common/RoomGroupCard";
import AddOnCard from "../../../components/common/AddOnCard";
import { headersAuth } from "../../../Api";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";

const AddReservationGroup = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [groupName, setGroupName] = useState();
  const [groupAddress, setGroupAddress] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [leaderName, setLeaderName] = useState();
  const [leaderIdentity, setLeaderIdentity] = useState();
  const [leaderPhoneNumber, setPhoneNumber] = useState();
  const [leaderEmail, setLeaderEmail] = useState();
  const [rooms, setRooms] = useState();
  const [facility, setFacilities] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const getFacilities = (search) => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "add-on",
          { room_number: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setFacilities(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {
          toast.error("Something Went Wrong!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };
  const getRoomType = (search) => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms/avail",
          { start_date: startDate, end_date: endDate },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRooms(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {
          toast.error("Something Went Wrong!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };
  useEffect(() => {
    getRoomType();
    getFacilities();
  }, []);
  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure The Data Is Correct?</Modal.Title>
        </Modal.Header>
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
                value={groupName}
                onInput={(e) => setGroupName(e.target.value)}
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
                value={groupAddress}
                onInput={(e) => setGroupAddress(e.target.value)}
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
                    value={startDate}
                    onInput={(e) => setStartDate(e.target.value)}
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
                    value={endDate}
                    onInput={(e) => setEndDate(e.target.value)}
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
                        value={leaderName}
                        onInput={(e) => setLeaderName(e.target.value)}
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
                        value={leaderIdentity}
                        onInput={(e) => setLeaderIdentity(e.target.value)}
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
                        value={leaderPhoneNumber}
                        onInput={(e) => setPhoneNumber(e.target.value)}
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
                        value={leaderEmail}
                        onInput={(e) => setLeaderEmail(e.target.value)}
                      ></input>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Detail Reservation</Accordion.Header>
                    <Accordion.Body>
                      {rooms.map((room) => (
                        <RoomGroupCard
                          uuid={room.uuid}
                          room={room.type_name}
                          total={room.total}
                          price={room.price}
                        />
                      ))}
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
          </>
        )}
      </div>
    </>
  );
};

export default AddReservationGroup;
