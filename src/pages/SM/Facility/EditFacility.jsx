import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { headersAuth } from "../../../Api";
import axios from "axios";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";

const EditFacility = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ids, setIds] = useState(useParams().id);
  const [addOnName, setAddOnName] = useState();
  const [price, setPrice] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const showModal = () => {
    if (addOnName == null || addOnName === "") {
      toast.error("Invalid Facility Name!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (price == null || price === "" || price <= 0) {
      toast.error("Invalid Price!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      handleShow();
    }
  };
  const getFacility = () => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "add-on",
          { id: ids },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setAddOnName(response.data.OUT_DATA[0].add_on_name);
          setPrice(response.data.OUT_DATA[0].price);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  const editFacility = () => {
    handleClose();
    setLoading(true);

    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "add-on/edit",
          {
            id: ids,
            add_on_name: addOnName,
            price: price,
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
          setTimeout((window.location.href = "/facility-management"), 5000);
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
    getFacility();
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
            Facility Name : <b>{addOnName}</b>
          </p>
          <p>
            Price : <b>{price}</b>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ marginLeft: "1rem" }} onClick={() => editFacility()}>
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
              <h4>Edit Facility</h4>
              <hr />
              <p style={{ textAlign: "left" }}>Facility Name</p>
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
                value={addOnName}
                onInput={(e) => setAddOnName(e.target.value)}
              ></input>
              <p className="mt-3" style={{ textAlign: "left" }}>
                Price
              </p>
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
                value={price}
                onInput={(e) => setPrice(e.target.value)}
              ></input>
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

export default EditFacility;
