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
import superior from "../../../assets/superior.jpg";

const AddReservationGroup = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const [book, setBook] = useState();
  const [groupName, setGroupName] = useState();
  const [groupAddress, setGroupAddress] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [leaderName, setLeaderName] = useState();
  const [leaderIdentity, setLeaderIdentity] = useState();
  const [leaderPhoneNumber, setPhoneNumber] = useState();
  const [leaderEmail, setLeaderEmail] = useState();
  const [rooms, setRooms] = useState();
  const [child, setChild] = useState();
  const [adult, setAdult] = useState();
  const [total, setTotal] = useState(0);
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
          setFacilities(response.data.OUT_DATA.data);
          setLoading(false);
        })
        .catch((error) => {
          toast.error("Something Went Wrong!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };
  const handleDateChangeStart = (e) => {
    setStartDate(document.getElementById("date-start").value);
  };
  const handleDateChangeEnd = (e) => {
    setEndDate(document.getElementById("date-end").value);
  };
  const createRoom = () => {
    handleClose();
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation/create/g",
          {
            group_name: groupName,
            group_address: groupAddress,
            leader_name: leaderName,
            identity: leaderIdentity,
            email: leaderEmail,
            phone_number: leaderPhoneNumber,
            adult: adult,
            child: child,
            start_date: startDate,
            end_date: endDate,
            room: rooms,
            add_on: facility,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          toast.success(response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setBook(response.data.OUT_DATA);
          setLoad(true);
          setLoading(false);
          handleShow();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setLoading(false);
        });
    });
  };

  const getRoomType = (search) => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms/avail",
          {
            start_date: startDate,
            end_date: endDate,
            night: 0,
            adult: 0,
            child: 0,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRooms(response.data.OUT_DATA);
          setLoad(true);
        })
        .catch((error) => {
          toast.error("Something Went Wrong!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };
  useEffect(() => {
    if (startDate != undefined && endDate != undefined) {
      getRoomType();
    }
  }, [startDate, endDate]);
  useEffect(() => {
    getFacilities();
  }, []);
  useEffect(() => {
    console.log(total);
  }, [total]);
  return (
    <>
      <ToastContainer />
      {!load ? (
        <></>
      ) : (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {book != null ? (
                  <>Group Detail Reservation</>
                ) : (
                  <>Are You Sure The Data Is Correct?</>
                )}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {book != null ? (
                <>
                  <p>
                    Booking ID : <b>{book}</b>
                  </p>
                </>
              ) : (
                <></>
              )}
              <p>
                Group Name : <b>{groupName}</b>
              </p>
              <p>
                Group Addres : <b>{groupAddress}</b>
              </p>
              <p>
                Leader Name : <b>{leaderName}</b>
              </p>
              <p>
                Room :
                {rooms.map((room) => (
                  <>
                    {room.total != 0 ? (
                      <>
                        <p>
                          <b>
                            {room.type_name} : {room.qty}
                          </b>
                        </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </p>
            </Modal.Body>
            <Modal.Footer>
              {book == null ? (
                <>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      window.location.href = "reservation-management";
                    }}
                  >
                    Close
                  </Button>
                </>
              )}

              {book == null ? (
                <>
                  <Button
                    style={{ marginLeft: "1rem" }}
                    onClick={() => {
                      createRoom();
                    }}
                  >
                    Confirm
                  </Button>
                </>
              ) : (
                <></>
              )}
            </Modal.Footer>
          </Modal>
        </>
      )}

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
                    id="date-start"
                    onChange={(e) => handleDateChangeStart(e)}
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
                    id="date-end"
                    onChange={(e) => handleDateChangeEnd(e)}
                  ></input>
                </div>
              </div>
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
              <div className="row">
                <div className="col-6">
                  <p style={{ textAlign: "left" }}>Adult</p>
                  <input
                    type="number"
                    placeholder="Adult"
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
                    value={adult}
                    onInput={(e) => setAdult(e.target.value)}
                  ></input>
                </div>
                <div className="col-6">
                  <p style={{ textAlign: "left" }}>Child</p>
                  <input
                    type="number"
                    placeholder="child"
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
                    value={child}
                    onInput={(e) => setChild(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row mt-3">
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
                        placeholder="asep@gmail.com"
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
                      {load ? (
                        <>
                          {rooms.map((room) => (
                            // start
                            <div
                              className="shadow bg-white rounded"
                              style={{
                                width: "100%",
                                marginRight: "auto",
                                marginLeft: "auto",
                              }}
                            >
                              <Card
                                style={{
                                  borderRadius: "10px",
                                  paddingRight: "3%",
                                }}
                              >
                                <div className="row">
                                  <div className="col-3">
                                    <img
                                      src={superior}
                                      alt="foto"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "10px 0 0 10px",
                                      }}
                                    ></img>
                                  </div>
                                  <div
                                    className="col-7 border-end"
                                    style={{
                                      textAlign: "start",
                                      paddingTop: "1rem",
                                      paddingBottom: "1rem",
                                    }}
                                  >
                                    <div className="row">
                                      <p
                                        style={{
                                          fontWeight: "bolder",
                                          fontSize: "1.5rem",
                                        }}
                                      >
                                        {room.type_name}
                                      </p>
                                    </div>
                                    <div
                                      className="row"
                                      style={{ fontWeight: "normal" }}
                                    ></div>
                                  </div>
                                  <div
                                    className="col-2 border-start"
                                    style={{
                                      marginTop: "auto",
                                      paddingRight: "1rem",
                                      paddingBottom: "1rem",
                                    }}
                                  >
                                    <div
                                      className="row"
                                      style={{ textAlign: "end" }}
                                    >
                                      <h4>{room.price}</h4>
                                    </div>
                                    <div
                                      className="row"
                                      style={{ justifyContent: "end" }}
                                    >
                                      {room.qty > 0 ? (
                                        <Button
                                          variant="danger"
                                          style={{
                                            color: "#0C1738",
                                            width: "fit-content",
                                          }}
                                          onClick={() => {
                                            room.qty--;
                                            setRooms([...rooms]);
                                          }}
                                        >
                                          <b>-</b>
                                        </Button>
                                      ) : (
                                        <Button
                                          variant="danger"
                                          style={{
                                            color: "#0C1738",
                                            width: "fit-content",
                                          }}
                                          disabled
                                        >
                                          <b>-</b>
                                        </Button>
                                      )}
                                      <Button
                                        style={{
                                          backgroundColor: "transparent",
                                          color: "#0C1738",
                                          width: "3rem",
                                          marginLeft: "1rem",
                                          textAlign: "center",
                                        }}
                                      >
                                        <b style={{ textAlign: "center" }}>
                                          {room.qty}
                                        </b>
                                      </Button>
                                      <Button
                                        style={{
                                          backgroundColor: "#FBBC05",
                                          color: "#0C1738",
                                          width: "fit-content",
                                          marginLeft: "1rem",
                                        }}
                                        onClick={() => {
                                          room.qty++;
                                          setRooms([...rooms]);
                                        }}
                                      >
                                        <b>+</b>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </div>
                            // end
                          ))}
                        </>
                      ) : (
                        <>
                          <p>Select Date First</p>
                        </>
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Request</Accordion.Header>
                    <Accordion.Body>
                      {facility.map((f) => (
                        <div
                          className="shadow bg-white rounded"
                          style={{
                            width: "100%",
                            marginRight: "auto",
                            marginLeft: "auto",
                          }}
                        >
                          <Card
                            style={{ borderRadius: "10px", paddingRight: "3%" }}
                          >
                            <div className="row">
                              <div className="col-3">
                                <img
                                  src={superior}
                                  alt="foto"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "10px 0 0 10px",
                                  }}
                                ></img>
                              </div>
                              <div
                                className="col-7 border-end"
                                style={{
                                  textAlign: "start",
                                  paddingTop: "1rem",
                                  paddingBottom: "1rem",
                                }}
                              >
                                <div className="row">
                                  <p
                                    style={{
                                      fontWeight: "bolder",
                                      fontSize: "1.5rem",
                                    }}
                                  >
                                    {f.add_on_name}
                                  </p>
                                </div>
                              </div>
                              <div
                                className="col-2 border-start"
                                style={{
                                  marginTop: "auto",
                                  paddingRight: "1rem",
                                  paddingBottom: "1rem",
                                }}
                              >
                                <div
                                  className="row"
                                  style={{ textAlign: "end" }}
                                >
                                  <h4>
                                    Rp{" "}
                                    {f.price
                                      .toString()
                                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                  </h4>
                                </div>
                                <div
                                  className="row"
                                  style={{ justifyContent: "end" }}
                                >
                                  {total > 0 ? (
                                    <Button
                                      variant="danger"
                                      style={{
                                        color: "#0C1738",
                                        width: "fit-content",
                                      }}
                                      onClick={() => {
                                        f.total--;
                                        setFacilities([...facility]);
                                      }}
                                    >
                                      <b>-</b>
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="danger"
                                      style={{
                                        color: "#0C1738",
                                        width: "fit-content",
                                      }}
                                      disabled
                                    >
                                      <b>-</b>
                                    </Button>
                                  )}

                                  <Button
                                    style={{
                                      backgroundColor: "transparent",
                                      color: "#0C1738",
                                      width: "3rem",
                                      marginLeft: "1rem",
                                      textAlign: "center",
                                    }}
                                  >
                                    <b style={{ textAlign: "center" }}>
                                      {f.total}
                                    </b>
                                  </Button>
                                  <Button
                                    style={{
                                      backgroundColor: "#FBBC05",
                                      color: "#0C1738",
                                      width: "fit-content",
                                      marginLeft: "1rem",
                                    }}
                                    onClick={() => {
                                      f.total++;
                                      setFacilities([...facility]);
                                    }}
                                  >
                                    <b>+</b>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      ))}
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
          </>
        )}
      </div>
    </>
  );
};

export default AddReservationGroup;
