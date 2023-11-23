import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import double from "../assets/double.jpg";
import { useParams } from "react-router-dom";
import { headers, token, role, headersAuth } from "../Api";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Cookies from "universal-cookie";
import Form from "react-bootstrap/Form";

const RoomDetail = () => {
  const [uid, setUid] = useState(useParams().id);
  const [start, setStart] = useState(useParams().start);
  const [end, setEnd] = useState(useParams().end);
  const [adult, setAdult] = useState(useParams().adult);
  const [child, setChild] = useState(useParams().child);
  const [night, setNight] = useState(useParams().night);
  const [room, setRoom] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const [addOn, setAddOn] = useState();
  const cookies = new Cookies();

  const auth = useRecoilValue(authenticated);
  const [roles, setRoles] = useState(role());
  const [tokens, setTokens] = useState(token());
  const [isSmoking, setIsSmoking] = useState(true);
  const [isDouble, setIsDouble] = useState(true);
  const [size, setSize] = useState();
  const [about, setAbout] = useState();
  const checkAuth = () => {
    if (tokens === undefined || roles != process.env.REACT_APP_CONSUMEN) {
      window.location.href = "/login";
    } else {
      handleShow();
    }
  };
  const getRoom = () => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms/avail",
          {
            id: uid,
            night: night,
            start_date: start,
            end_date: end,
            adult: adult,
            child: child,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          setRoom(response.data.OUT_DATA[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const adjust = () => {
    if (
      uid == process.env.REACT_APP_SUPERIOR_SMOKE_DOUBLE ||
      uid == process.env.REACT_APP_SUPERIOR_NON_DOUBLE ||
      uid == process.env.REACT_APP_SUPERIOR_SMOKE_TWIN ||
      uid == process.env.REACT_APP_SUPERIOR_NON_TWIN
    ) {
      setSize(22);
      setAbout("Kamar terjangkau namun tetap nyaman");
    }
    if (
      uid == process.env.REACT_APP_DOUBLEDELUXE_SMOKE_DOUBLE ||
      uid == process.env.REACT_APP_DOUBLEDELUXE_NON_DOUBLE ||
      uid == process.env.REACT_APP_DOUBLEDELUXE_SMOKE_TWIN ||
      uid == process.env.REACT_APP_DOUBLEDELUXE_NON_TWIN
    ) {
      setSize(24);
      setAbout("Kamar terjangkau yang luas");
    }
    if (
      uid == process.env.REACT_APP_EXECUTIVEDELUXE_SMOKE_KING ||
      uid == process.env.REACT_APP_EXECUTIVEDELUXE_NON_DOUBLE
    ) {
      setSize(36);
      setAbout("Kamar yang cocok untuk bisnis");
    }
    if (
      uid == process.env.REACT_APP_JUNIORSUITE_SMOKE_KING ||
      uid == process.env.REACT_APP_JUNIORSUITE_NON_KING
    ) {
      setSize(46);
      setAbout("Kamar nyaman untuk keluarga");
    }
  };

  const getAddOn = () => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "add-on/all",
          {},
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setAddOn(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const book = () => {
    if (total == 0) {
      toast.error("Invalid Total Room", {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleClose();
    } else {
      room.smoke = isSmoking;
      room.double = isDouble;
      room.qty = total;
      room.child = child;
      room.adult = adult;
      cookies.remove("addOn");
      cookies.set("addOn", addOn, { path: "/" });
      cookies.set("book", room, { path: "/" });
      window.location.href = "/booking-confirmation";
    }
  };
  useEffect(() => {
    getRoom();
    adjust();
    if (tokens === undefined || roles != process.env.REACT_APP_CONSUMEN) {
    } else {
      getAddOn();
    }
  }, []);
  return (
    <>
      <ToastContainer />
      {loading ? (
        <></>
      ) : (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Want to add a service??</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
                {addOn.map((a, index) => (
                  <>
                    <div
                      className="row mt-3"
                      style={{ position: "relative", justifyContent: "center" }}
                    >
                      <div className="col-4">
                        <p>{a.add_on_name}</p>
                      </div>
                      <div className="col-2">
                        {a.total > 0 ? (
                          <FaMinus
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              a.total--;
                              setAddOn([...addOn]);
                            }}
                          />
                        ) : (
                          <FaMinus />
                        )}
                      </div>
                      <div className="col-2">
                        <Card style={{ width: "fit-content", padding: "5px" }}>
                          {a.total}
                        </Card>
                      </div>
                      <div className="col-2">
                        <FaPlus
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            a.total++;
                            setAddOn([...addOn]);
                          }}
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button style={{ marginLeft: "1rem" }} onClick={() => book()}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}

      <div
        className="mt-3 p-5"
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
        {!loading ? (
          <>
            <Card
              style={{
                alignContent: "center",
              }}
            >
              <div className="row">
                <div
                  className="col-9 border-end"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    className="row"
                    style={{
                      paddingLeft: "5rem",
                      paddingRight: "5rem",
                      textAlign: "start",
                      fontSize: "1.5rem",
                    }}
                  >
                    <b>{room.type_name}</b>
                  </div>
                  <div
                    className="row mt-3"
                    style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
                  >
                    <img
                      src={double}
                      alt="double"
                      style={{
                        maxHeight: "500px",
                        borderRadius: "2.5%",
                      }}
                    ></img>
                  </div>
                  <div className="row mt-5" style={{ textAlign: "center" }}>
                    <div className="col">
                      <p>
                        <b>Smoking Room</b>
                      </p>
                      <Form className="mt-4" style={{ textAlign: "start" }}>
                        <div key="inline-radio" className="mb-3">
                          <>
                            <Form.Check
                              inline
                              label="Smoking Room"
                              name="group1"
                              type="radio"
                              checked
                              id="inline-radio-1"
                              onClick={() => setIsSmoking(true)}
                            />
                            <Form.Check
                              inline
                              label="Non Smoking Room"
                              name="group1"
                              type="radio"
                              id="inline-radio-2"
                              onClick={() => setIsSmoking(false)}
                            />
                          </>
                        </div>
                      </Form>
                      <hr
                        style={{
                          width: "90%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      />
                    </div>
                    <div
                      className="col"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <div
                        className="row"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p>
                          <b>Total Room</b>
                        </p>
                        <div className="col-2">
                          {total > 0 ? (
                            <>
                              <FaMinus
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setTotal(total - 1);
                                }}
                              />
                            </>
                          ) : (
                            <FaMinus />
                          )}
                        </div>
                        <div className="col-2">
                          <Card
                            style={{ width: "fit-content", padding: "5px" }}
                          >
                            {total}
                          </Card>
                        </div>
                        <div className="col-2">
                          <FaPlus
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setTotal(total + 1);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <div className="row">
                        <p>
                          <b>Bed Type</b>
                        </p>
                        <Form className="mt-4" style={{ textAlign: "center" }}>
                          <div key="inline-radio" className="mb-3">
                            <>
                              <Form.Check
                                inline
                                label="Double"
                                name="group1"
                                type="radio"
                                checked
                                id="inline-radio-1"
                                onClick={() => setIsDouble(true)}
                              />
                              <Form.Check
                                inline
                                label="Single"
                                name="group1"
                                type="radio"
                                id="inline-radio-2"
                                onClick={() => setIsDouble(false)}
                              />
                            </>
                          </div>
                        </Form>
                        <hr
                          style={{
                            width: "90%",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-3"
                  style={{ textAlign: "start", padding: "1rem" }}
                >
                  <div className="row">
                    <p>
                      <b>Room Detail</b>
                    </p>
                    <p>{size}m</p>
                    <p>2 guest</p>
                    <hr
                      style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                  <p>
                    <b>Room Feature</b>
                  </p>
                  <div className="row p-3" style={{ textAlign: "justify" }}>
                    <p>
                      <b>Internet</b> - WiFi Gratis
                    </p>

                    <p>
                      <b>Hiburan</b> - Televisi LCD dengan channel TV premium
                      channels
                    </p>

                    <p>
                      <b>Makan Minum</b> - Pembuat kopi/teh, minibar, layanan
                      kamar 24-jam, air minum kemasan gratis, termasuk sarapan
                    </p>

                    <p>
                      <b>Untuk tidur</b> - Seprai kualitas premium dan
                      gorden/tirai kedap cahaya
                    </p>

                    <p>
                      <b>Kamar Mandi</b> - Kamar mandi pribadi dengan shower,
                      jubah mandi, dan sandal
                    </p>

                    <p>
                      <b>Kemudahan</b> - Brankas (muat laptop), Meja tulis, dan
                      Telepon; tempat tidur lipat/tambahan tersedia berdasarkan
                      permintaan
                    </p>

                    <p>
                      <b>Kenyamanan</b> - AC dan layanan pembenahan kamar harian
                    </p>
                    <hr
                      style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                  <div className="row">
                    <p>
                      <b>About Room</b>
                    </p>
                    <p>{about}</p>
                    <hr
                      style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>

                  <div
                    className="row"
                    style={{
                      justifyContent: "center",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                      <span style={{ color: "red" }}>
                        Rp{" "}
                        {room.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <span style={{ fontSize: "0.75rem" }}>
                        / room / nights
                      </span>
                    </p>
                    <Button
                      variant="danger"
                      style={{ width: "100%" }}
                      onClick={() => {
                        checkAuth();
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </>
  );
};
export default RoomDetail;
