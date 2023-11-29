import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import { headersAuth } from "../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useDebounce } from "use-debounce";
import { toast, ToastContainer } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Card from "react-bootstrap/Card";

const ReservationManagementF = () => {
  const [isGroup, setIsGroup] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [checkIn, setCheckIn] = useState(true);
  const [deposit, setDeposit] = useState();
  const [data, setData] = useState();
  const [selectedName, setSelectedName] = useState("");
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadings, setLoadings] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleShowConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);
  const [showFacility, setShowFacility] = useState(false);
  const handleShowFacility = () => setShowFacility(true);
  const handleCloseFacility = () => setShowFacility(false);

  const [debounceValue] = useDebounce(search, 2000);
  const [addOn, setAddOn] = useState();

  const getAddOn = () => {
    setLoadings(true);
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
          setLoadings(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const getReservation = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation/FO",
          {
            search: search,
            is_group: isGroup,
            is_open: isOpen,
            check_in: checkIn,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setData(response.data.OUT_DATA.data);
          setTotal(response.data.OUT_DATA.total);
          let temp = [];
          let active = response.data.OUT_DATA.current_page;
          for (
            let number = 1;
            number <= response.data.OUT_DATA.last_page;
            number++
          ) {
            temp.push(
              <Pagination.Item
                key={number}
                active={number === active}
                onClick={() =>
                  changePage(search, response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItems(temp);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  const changePage = (search, url) => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          url,
          {
            search: search,
            is_group: isGroup,
            is_open: isOpen,
            check_in: checkIn,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setData(response.data.OUT_DATA.data);
          let temp = [];
          let active = response.data.OUT_DATA.current_page;
          for (
            let number = 1;
            number <= response.data.OUT_DATA.last_page;
            number++
          ) {
            temp.push(
              <Pagination.Item
                key={number}
                active={number === active}
                onClick={() =>
                  changePage(search, response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItems(temp);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  useEffect(() => {
    getReservation();
    getAddOn();
  }, []);
  useEffect(() => {
    getReservation();
    setLoading(true);
    getAddOn();
  }, [debounceValue, isGroup, isOpen, checkIn]);
  const ins = () => {
    handleClose();
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation/in",
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
          getReservation();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };

  const outs = () => {
    handleCloseConfirm();
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation/out",
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
          getReservation();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    });
  };

  const insAddOn = () => {
    handleCloseFacility();
    setLoading(true);
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation/FO/facility",
          {
            id: selectedId,
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
          getReservation();
          getAddOn();
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are You Sure Want To CheckIn This {selectedName} Reservation?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="row">
            <p>Customer Already deposit Rp 300.000 ?</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              ins();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are You Sure Want To CheckOut This {selectedName} Reservation?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="row">
            <p>Deposit refunded : {deposit}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Close
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              outs();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showFacility} onHide={handleCloseFacility}>
        <Modal.Header closeButton>
          <Modal.Title>Want to add a service??</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadings ? (
            <></>
          ) : (
            <>
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
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFacility}>
            Close
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              insAddOn();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-8">
            <input
              type="text"
              placeholder="Search Reservation By Name or Id Booking"
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
              onInput={(e) => setSearch(e.target.value)}
            ></input>
          </div>
          {/* type */}
          <div className="col-2">
            <ButtonGroup size="lg" className="mb-2">
              <Button
                id="group"
                onClick={() => {
                  setIsGroup(true);
                  document
                    .getElementById("group")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("personal")
                    .classList.remove("btn-primary");
                  document.getElementById("group").classList.add("btn-primary");
                  document
                    .getElementById("personal")
                    .classList.add("btn-outline-primary");
                }}
                variant="primary"
              >
                Group
              </Button>
              <Button
                id="personal"
                onClick={() => {
                  setIsGroup(false);
                  document
                    .getElementById("personal")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("group")
                    .classList.remove("btn-primary");
                  document
                    .getElementById("personal")
                    .classList.add("btn-primary");
                  document
                    .getElementById("group")
                    .classList.add("btn-outline-primary");
                }}
                variant="outline-primary"
              >
                Personal
              </Button>
            </ButtonGroup>
          </div>
          {/* cancelable */}
          <div className="col-2">
            <ButtonGroup size="lg" className="mb-2">
              <Button
                id="open"
                onClick={() => {
                  setIsOpen(true);
                  document
                    .getElementById("open")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("close")
                    .classList.remove("btn-primary");
                  document.getElementById("open").classList.add("btn-primary");
                  document
                    .getElementById("close")
                    .classList.add("btn-outline-primary");
                }}
                variant="primary"
              >
                Open
              </Button>
              <Button
                id="close"
                onClick={() => {
                  setIsOpen(false);
                  document
                    .getElementById("close")
                    .classList.remove("btn-outline-primary");
                  document
                    .getElementById("open")
                    .classList.remove("btn-primary");
                  document.getElementById("close").classList.add("btn-primary");
                  document
                    .getElementById("open")
                    .classList.add("btn-outline-primary");
                }}
                variant="outline-primary"
              >
                Close
              </Button>
            </ButtonGroup>
          </div>
        </div>
        {isOpen ? (
          <>
            <div className="container">
              <div className="row mb-3" style={{ justifyContent: "end" }}>
                <ButtonGroup className="mb-2" style={{ width: "max-content" }}>
                  <Button
                    id="in"
                    onClick={() => {
                      setCheckIn(true);
                      document
                        .getElementById("in")
                        .classList.remove("btn-outline-primary");
                      document
                        .getElementById("out")
                        .classList.remove("btn-primary");
                      document
                        .getElementById("in")
                        .classList.add("btn-primary");
                      document
                        .getElementById("out")
                        .classList.add("btn-outline-primary");
                    }}
                    variant="primary"
                  >
                    Check-In
                  </Button>
                  <Button
                    id="out"
                    onClick={() => {
                      setCheckIn(false);
                      document
                        .getElementById("out")
                        .classList.remove("btn-outline-primary");
                      document
                        .getElementById("in")
                        .classList.remove("btn-primary");
                      document
                        .getElementById("out")
                        .classList.add("btn-primary");
                      document
                        .getElementById("in")
                        .classList.add("btn-outline-primary");
                    }}
                    variant="outline-primary"
                  >
                    Check-Out
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            {/* GROUP TABLE */}
            {isGroup ? (
              <>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Group Name</th>
                      <th>Group Leader</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {total != 0 ? (
                      <>
                        {data.map((d) => (
                          <tr key={d.id}>
                            <td> {d.no} </td>
                            <td style={{ textAlign: "start" }}>
                              {" "}
                              {d.group_name}
                            </td>
                            <td> {d.full_name}</td>
                            <td> {d.start_date}</td>
                            <td> {d.end_date}</td>
                            <td>
                              {d.status == 1 || d.status == 2 ? (
                                <>
                                  <Button variant="danger">Not Paid</Button>
                                </>
                              ) : (
                                <>
                                  {d.status == 3 || d.status == 4 ? (
                                    <>
                                      <Button variant="info">Paid</Button>
                                    </>
                                  ) : (
                                    <>
                                      {d.status == 5 ? (
                                        <>
                                          <Button variant="success">
                                            Success
                                          </Button>
                                        </>
                                      ) : (
                                        <>
                                          <Button variant="warning">
                                            Cancel
                                          </Button>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </td>
                            <td>
                              <Button
                                variant="danger"
                                onClick={() => {
                                  setSelectedName(d.group_name);
                                  setSelectedId(d.id);
                                  handleShow();
                                }}
                              >
                                Check In
                              </Button>

                              <Button
                                variant="secondary"
                                style={{ marginLeft: "1rem" }}
                                onClick={() => {
                                  setSelectedName(d.group_name);
                                  setSelectedId(d.id);
                                  setDeposit(d.depo);
                                  handleShowConfirm();
                                }}
                              >
                                Check Out
                              </Button>
                              <Button
                                variant="secondary"
                                style={{ marginLeft: "1rem" }}
                                onClick={() => {
                                  setSelectedName(d.group_name);
                                  setSelectedId(d.id);
                                  handleShowFacility();
                                }}
                              >
                                Add Facility
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <>
                        <tr>
                          <td colSpan={7}>Data Is Empty</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </Table>
              </>
            ) : (
              <>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {total != 0 ? (
                      <>
                        {data.map((d) => (
                          <tr key={d.id}>
                            <td> {d.no} </td>
                            <td style={{ textAlign: "start" }}>
                              {" "}
                              {d.full_name}
                            </td>
                            <td> {d.start_date}</td>
                            <td> {d.end_date}</td>
                            <td>
                              {d.in == 1 && d.out == 0 && d.facility == 0 ? (
                                <>
                                  <Button variant="info">Paid</Button>
                                </>
                              ) : (
                                <>
                                  {d.in == 0 &&
                                  d.out == 1 &&
                                  d.facility == 1 ? (
                                    <>
                                      <Button variant="info">Check In</Button>
                                    </>
                                  ) : (
                                    <>
                                      {d.in == -1 ? (
                                        <>
                                          <Button variant="info">
                                            Can't Check In Yet
                                          </Button>
                                        </>
                                      ) : (
                                        <>
                                          <Button variant="success">
                                            Success
                                          </Button>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </td>
                            <td>
                              {d.in == 1 ? (
                                <>
                                  <Button
                                    variant="danger"
                                    onClick={() => {
                                      setSelectedName(d.group_name);
                                      setSelectedId(d.id);
                                      handleShow();
                                    }}
                                  >
                                    Check In
                                  </Button>
                                </>
                              ) : (
                                <></>
                              )}
                              {d.out == 1 ? (
                                <>
                                  <Button
                                    variant="secondary"
                                    style={{ marginLeft: "1rem" }}
                                    onClick={() => {
                                      setSelectedName(d.group_name);
                                      setSelectedId(d.id);
                                      setDeposit(d.depo);
                                      handleShowConfirm();
                                    }}
                                  >
                                    Check Out
                                  </Button>
                                </>
                              ) : (
                                <></>
                              )}
                              {d.facility == 1 ? (
                                <>
                                  <Button
                                    variant="secondary"
                                    style={{ marginLeft: "1rem" }}
                                    onClick={() => {
                                      setSelectedName(d.group_name);
                                      setSelectedId(d.id);
                                      handleShowFacility();
                                    }}
                                  >
                                    Add Facility
                                  </Button>
                                </>
                              ) : (
                                <></>
                              )}
                              {isOpen ? (
                                <></>
                              ) : (
                                <>
                                  <Button
                                    variant="secondary"
                                    style={{ marginLeft: "1rem" }}
                                    href={
                                      isGroup
                                        ? `/receipt/g/${d.id}`
                                        : `/receipt/p/${d.id}`
                                    }
                                  >
                                    Receipt
                                  </Button>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <>
                        <tr>
                          <td colSpan={6}>Data Is Empty</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </Table>
              </>
            )}
            {total != 0 ? (
              <>
                <div>
                  <Pagination>{items}</Pagination>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ReservationManagementF;
