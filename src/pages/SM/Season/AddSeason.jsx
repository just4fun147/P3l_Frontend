import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import { headersAuth } from "../../../Api";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";

const AddSeason = () => {
  const [show, setShow] = useState(false);
  const [allType, setAllType] = useState();
  const [roomType, setRoomType] = useState();
  const [seasonName, setSeasonName] = useState();
  const [capacity, setCapacity] = useState(0);
  const [capacityType, setCapacityType] = useState();
  const [price, setPrice] = useState();
  const [priceType, setPriceType] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [finStartDate, setFinStartDate] = useState();
  const [finEndDate, setFinEndDate] = useState();
  const [loading, setLoading] = useState(true);
  const now = new Date();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const validate = async () => {
    if (seasonName == null || seasonName == "") {
      toast.error("Invalid Season Name!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    } else if (capacityType) {
      if (capacity == null || capacity <= 0 || capacity == "") {
        toast.error("Invalid Capacity!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return false;
      }
    } else if (priceType == null || priceType == "") {
      toast.error("Invalid Price Type!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    } else if (startDate == null || startDate == "") {
      toast.error("Invalid Start Date!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    } else if (endDate == null || startDate > endDate || endDate == "") {
      toast.error("Invalid End Date!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    } else if (allType == null) {
      toast.error("Please Select Room Type!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return false;
    } else if (allType) {
      if (price == null || price == "") {
        toast.error("Invalid Price!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  };
  const showModal = async () => {
    const validates = await validate();
    if (validates == true) {
      var months;
      months = (startDate.getFullYear() - now.getFullYear()) * 12 * 30;
      months -= now.getMonth() * 30;
      months += startDate.getMonth() * 30;
      months -= now.getDate() + 1;
      months += startDate.getDate();
      if (months < 60) {
        toast.error("The season starts in less than 2 months!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        var dd = String(startDate.getDate()).padStart(2, "0");
        var mm = String(startDate.getMonth() + 1).padStart(2, "0");
        setFinStartDate(startDate.getFullYear() + "-" + mm + "-" + dd);
        var dd = String(endDate.getDate()).padStart(2, "0");
        var mm = String(endDate.getMonth() + 1).padStart(2, "0");
        setFinEndDate(endDate.getFullYear() + "-" + mm + "-" + dd);
        handleShow();
      }
    }
  };
  const createSeason = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "/seasons/create",
          {
            season_name: seasonName,
            capacity: capacity,
            capacity_type: capacityType,
            price: price,
            price_type: priceType,
            start_date: startDate,
            end_date: endDate,
            data: roomType,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRoomType(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const getRoomType = (search) => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms-type",
          {},
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRoomType(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
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
            Season Name : <b>{seasonName}</b>
          </p>
          <p>
            Capacity : <b>{capacity}</b>
          </p>
          <p>
            Price Type :{" "}
            <b>
              {priceType == "1" ? (
                <>Discount</>
              ) : (
                <>
                  {priceType == 2 ? (
                    <>Potongan</>
                  ) : (
                    <>{priceType == 3 ? <>Harga</> : <></>}</>
                  )}
                </>
              )}
            </b>
          </p>
          <p>
            Start Date : <b>{finStartDate}</b>
          </p>
          <p>
            End Date : <b>{finEndDate}</b>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              createSeason();
            }}
          >
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
              <h4>Create Season</h4>
              <hr />
              <p style={{ textAlign: "left" }}>Season Name</p>
              <input
                type="text"
                placeholder="Lebaran"
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
                onInput={(e) => setSeasonName(e.target.value)}
                value={seasonName}
              ></input>
              <p style={{ textAlign: "left" }}>Have Capacity</p>
              <Form style={{ textAlign: "start" }}>
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    label="Yes"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                    onClick={() => {
                      setCapacityType(true);
                    }}
                  />
                  <Form.Check
                    inline
                    label="No"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                    onClick={() => {
                      setCapacityType(false);
                    }}
                  />
                </div>
              </Form>
              {capacityType ? (
                <>
                  <p style={{ textAlign: "left" }}>Capacity</p>
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
                    onInput={(e) => setCapacity(e.target.value)}
                    value={capacity}
                  ></input>
                </>
              ) : (
                <></>
              )}
              <p style={{ textAlign: "left" }}>Price Type</p>
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
                onChange={(e) => setPriceType(e.target.value)}
              >
                <option hidden>Select Price Type</option>
                <option value="1">Discount</option>
                <option value="2">Potongan</option>
                <option value="3">Harga</option>
              </select>
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
                    onChange={(e) => {
                      setStartDate(new Date(e.target.value));
                    }}
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
                    onChange={(e) => {
                      setEndDate(new Date(e.target.value));
                    }}
                  ></input>
                </div>
              </div>
              <p style={{ textAlign: "left" }}>Apply For All Room Type</p>
              <Form style={{ textAlign: "start" }}>
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    label="Yes"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                    onClick={() => {
                      setAllType(true);
                    }}
                  />
                  <Form.Check
                    inline
                    label="No"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                    onClick={() => {
                      setAllType(false);
                    }}
                  />
                </div>
              </Form>
              {allType ? (
                <>
                  <p style={{ textAlign: "left" }}>Price</p>
                  <input
                    type="number"
                    placeholder="123"
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
                    onInput={(e) => setPrice(e.target.value)}
                    value={price}
                  ></input>
                </>
              ) : (
                <>
                  {allType == false ? (
                    <>
                      <div>
                        <p style={{ textAlign: "left" }}>Room Type</p>

                        <Accordion defaultActiveKey="0">
                          {roomType.map((rt, index) => (
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header>
                                {rt.type_name}
                              </Accordion.Header>
                              <Accordion.Body>
                                <p style={{ textAlign: "left" }}>Price</p>
                                <input
                                  type="number"
                                  placeholder="123"
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
                                  onInput={(e) => (rt.price = e.target.value)}
                                ></input>
                              </Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}

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
                  onClick={showModal}
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

export default AddSeason;
