import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { headersAuth } from "../../Api";
const MyReservationItem = (props) => {
  const handleShowConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(props.id);
  const [selectedName, setSelectedName] = useState("");

  const cancelReservation = () => {
    handleCloseConfirm();
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation/cancel",
          {
            id: selectedId,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          toast.success(response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          handleCloseConfirm();
          setTimeout((window.location.href = "/my-reservation/p"), 7500);
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };

  return (
    <>
      <ToastContainer />
      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are You Sure Want To Cancel {props.show} Reservation?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Close
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              cancelReservation();
            }}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div
          className="row"
          style={{ width: "100%", textAlign: "start", cursot: "pointer" }}
        >
          <div
            className="col-9"
            onClick={() => {
              window.location.href = `/my-reservation/p/${props.id}`;
            }}
          >
            <b>{props.start}</b>
            <p style={{ marginBottom: "0" }}>{props.end}</p>
            <p>
              Adult : {props.adult} | Child : {props.child}
            </p>
          </div>
          <div className="col-3">
            {props.identifier != "4" ||
            props.identifier != "5" ||
            props.identifier != "6" ? (
              <>
                {/* show={props.showConfirm}
              selectedId={props.selectedId}
              selectedName={props.selectedName} */}
                <Button style={{ width: "100%" }} onClick={handleShowConfirm}>
                  Cancel
                </Button>
              </>
            ) : (
              <></>
            )}
            <Button
              style={{ width: "100%", marginTop: "1rem" }}
              onClick={() => {
                window.location.href = `/my-bill/p/${props.id}`;
              }}
            >
              Bill
            </Button>
            {props.identifier == "3" || props.identifier == "4" ? (
              <>
                <Button
                  style={{ width: "100%", marginTop: "1rem" }}
                  href="/my-bill"
                >
                  Receipt
                </Button>
              </>
            ) : (
              <></>
            )}
            {props.identifier == "4" ? (
              <>
                <Button
                  style={{ width: "100%", marginTop: "1rem" }}
                  href="/my-receipt"
                >
                  Receipt
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MyReservationItem;
