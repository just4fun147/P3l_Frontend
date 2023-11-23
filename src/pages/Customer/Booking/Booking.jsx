import { Button, Stack } from "react-bootstrap";
import axios from "axios";
import Summary from "../../../components/Booking/Summary";
import Detail from "../../../components/Booking/Detail";
import DetailAddOn from "../../../components/Booking/DetailAddOn";
import "./Booking.css";
import Accordion from "react-bootstrap/Accordion";
import Cookies from "universal-cookie";
import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { headersAuth } from "../../../Api";

const Booking = () => {
  const cookies = new Cookies();

  const addOn = cookies.get("addOn");
  const room = cookies.get("book");
  const [total, setTotal] = useState(0);
  const [totals, setTotals] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShows = () => setShows(true);
  const handleCloses = () => {
    window.location.href = "/my-reservation/p";
  };
  const [shows, setShows] = useState(false);
  const [idBook, setIdBook] = useState();
  console.log(room);
  const countTotal = (async) => {
    var t = room.total * room.qty;
    for (var k in addOn) {
      var p = addOn[k]["price"] * addOn[k]["total"];
      t = t + p;
    }
    setTotal(t);
    var tot = t + 5000;
    setTotals(tot);
    setLoading(false);
  };
  const book = () => {
    handleClose();
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation/create/p",
          {
            type_name: room.type_name,
            night: room.night,
            adult: room.adult,
            child: room.child,
            start_date: room.start_date,
            end_date: room.end_date,
            is_smoking: room.smoke,
            is_double: room.double,
            qty: room.qty,
            add_on: addOn,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          toast.success(response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setLoading(false);
          setIdBook(response.data.OUT_DATA);
          handleShows();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setLoading(false);
        });
    });
  };
  useEffect(() => {
    countTotal();
  }, []);
  return (
    <>
      <ToastContainer />
      <Modal show={shows} onHide={handleCloses}>
        <Modal.Header closeButton>
          <Modal.Title>Your Detail Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-3">
            <p>ID : {idBook}</p>
            <Detail
              total={room.night}
              text={room.type_name}
              price={room.total}
            ></Detail>
          </div>
          {addOn.map((a, index) => (
            <>
              {a.total != 0 ? (
                <>
                  <DetailAddOn
                    total={a.total}
                    text={a.add_on_name}
                    price={a.total * a.price}
                  ></DetailAddOn>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
          <Summary text="Administration Cost" price="5,000"></Summary>
          <hr />
          <Summary text="Total" price={totals}></Summary>
          <hr />
          <p style={{ fontWeight: "bold" }}>
            Please Fullfill Your Payment to :
          </p>
          <p style={{ fontWeight: "bold" }}>
            770011770022 Bank Diamond atas nama PT Atma Jaya
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloses}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure The Data Is Correct?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-3">
            <Detail
              total={room.night}
              text={room.type_name}
              price={room.total}
            ></Detail>
          </div>
          {addOn.map((a, index) => (
            <>
              {a.total != 0 ? (
                <>
                  <DetailAddOn
                    total={a.total}
                    text={a.add_on_name}
                    price={a.total * a.price}
                  ></DetailAddOn>
                </>
              ) : (
                <></>
              )}
            </>
          ))}
          <Summary text="Administration Cost" price="5,000"></Summary>
          <hr />
          <Summary text="Total" price={totals}></Summary>
          <p style={{ fontSize: "0.75rem" }}>
            *Administration Cost will be exclude from bill
          </p>
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
      <div className="container mt-5" style={{ textAlign: "start" }}>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div
              className="container"
              style={{ paddingLeft: "75px", paddingRight: "75px" }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  color: "#31353B",
                  fontWeight: "bold",
                  marginBottom: "29px",
                }}
              >
                Price Detail
              </h1>
              <div className="row">
                <div
                  className="left col-md-6"
                  style={{ width: "calc(100% - 350px - 45px)" }}
                >
                  <div
                    className="stotal"
                    style={{
                      paddingTop: "14px",
                      fontWeight: "bold",
                      borderBottom: "6px solid var(--N50,#F3F4F5)",
                    }}
                  >
                    <div className="row mb-3">
                      <Detail
                        total={room.qty}
                        night={room.night}
                        text={room.type_name}
                        price={room.total * room.qty}
                      ></Detail>
                    </div>
                    {addOn.map((a, index) => (
                      <>
                        {a.total != 0 ? (
                          <>
                            <DetailAddOn
                              total={a.total}
                              text={a.add_on_name}
                              price={a.total * a.price}
                            ></DetailAddOn>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                    <div className="row">
                      <Summary text="Total" price={total}></Summary>
                    </div>
                  </div>
                </div>
                <div
                  className="summary col-md-3"
                  style={{
                    paddingRight: "0",
                    paddingLeft: "0",
                    width: "350px",
                    boxShadow: "rgba(141, 150, 170, 0.4) 0px 1px 4px",
                    borderRadius: "8px",
                    backgroundColor: "var(--NN0,#FFFFFF)",
                    height: "fit-content",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "6px solid var(--N50,#F3F4F5)",
                      padding: "16px",
                    }}
                  >
                    <div
                      className="row"
                      style={{ alignItems: "center", justifyItems: "center" }}
                    >
                      <div className="col-9">
                        <input
                          className="form-control"
                          placeholder="Enter your voucher code"
                          style={{
                            marginRight: "auto",
                            marginLeft: "auto",
                            textAlign: "center",
                          }}
                        ></input>
                      </div>
                      <div className="col-3">
                        <Button
                          style={{ width: "fit-content" }}
                          onClick={() => {}}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "16px",
                      borderBottom: "1px solid var(--N100,#DBDEE2)",
                    }}
                  >
                    <p style={{ fontWeight: "700px" }}>Summary</p>
                    <Summary text="Total Price" price={total}></Summary>
                    <Summary text="Administration Cost" price="5,000"></Summary>
                    {room.normal_price != 0 ? (
                      <>
                        <Summary
                          text="Season Discount"
                          price={room.normal_price * room.night - room.total}
                        ></Summary>
                      </>
                    ) : (
                      <></>
                    )}

                    {/* <Summary
                      text="Coupon Discount"
                      price="-Rp222.222"
                    ></Summary> */}
                  </div>
                  <div
                    style={{
                      fontWeight: "700",
                      padding: "16px",
                    }}
                  >
                    <Summary text="Total Belanja" price={totals}></Summary>
                    <Button
                      style={{ width: "100%", marginTop: "24px" }}
                      onClick={() => handleShow()}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Booking;
