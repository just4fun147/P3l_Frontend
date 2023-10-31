import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import { headersAuth } from "../../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { useDebounce } from "use-debounce";
import { toast, ToastContainer } from "react-toastify";

const ReservationManagement = () => {
  const [isGroup, setIsGroup] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState();
  const [selectedName, setSelectedName] = useState("");
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleShowConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);

  const [debounceValue] = useDebounce(search, 2000);

  const getReservation = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation",
          {
            id: null,
            search: search,
            is_group: isGroup,
            is_open: isOpen,
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
            id: null,
            search: search,
            is_group: isGroup,
            is_open: isOpen,
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
  }, []);
  useEffect(() => {
    getReservation();
  }, [debounceValue]);
  useEffect(() => {
    setLoading(true);
    getReservation();
  }, [isGroup]);
  useEffect(() => {
    getReservation();
  }, [isOpen]);

  const cancelReservation = () => {
    handleClose();
    setLoading(true);
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
          getReservation();
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
            Are You Sure Want To Cancel {selectedName} Reservation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button variant="secondary" onClick={handleClose}>
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
      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are You Sure Want To Confirm {selectedName} Reservation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button variant="secondary" onClick={handleCloseConfirm}>
            Close
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: "1rem" }}
            onClick={handleCloseConfirm}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>

      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-8">
            <input
              type="text"
              placeholder="Search Reservation By Name"
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
        <div className="container">
          <div className="row mb-3" style={{ justifyContent: "end" }}>
            <Button
              href="/reservation-management/add-group"
              style={{ width: "fit-content" }}
            >
              Create Group Reservation
            </Button>
          </div>
        </div>
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
                              {d.status != 1 ? (
                                <></>
                              ) : (
                                <>
                                  <Button
                                    variant="danger"
                                    onClick={() => {
                                      setSelectedName(d.group_name);
                                      setSelectedId(d.id);
                                      handleShow();
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                </>
                              )}

                              <Button
                                variant="secondary"
                                href="/reservation-management/edit-group"
                                style={{ marginLeft: "1rem" }}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  window.location.href = `/reservation-management/g/${d.id}`;
                                }}
                                style={{ marginLeft: "1rem" }}
                              >
                                View
                              </Button>

                              <Button
                                onClick={() => {
                                  setSelectedName("Grup Confirm");
                                  handleShowConfirm();
                                }}
                                style={{ marginLeft: "1rem" }}
                              >
                                Confirm
                              </Button>
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
            ) : (
              <>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
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
                              {d.status != 1 ? (
                                <></>
                              ) : (
                                <>
                                  <Button
                                    variant="danger"
                                    onClick={() => {
                                      setSelectedName(d.full_name);
                                      setSelectedId(d.id);
                                      handleShow();
                                    }}
                                  >
                                    Cancel
                                  </Button>
                                </>
                              )}

                              <Button
                                variant="secondary"
                                style={{ marginLeft: "1rem" }}
                              >
                                Edit
                              </Button>
                              {d.status != 1 && d.status != 2 ? (
                                <></>
                              ) : (
                                <>
                                  <Button
                                    onClick={() => {
                                      setSelectedName(d.full_name);
                                      setSelectedId(d.id);
                                      handleShowConfirm();
                                    }}
                                    style={{ marginLeft: "1rem" }}
                                  >
                                    Confirm
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
                          <td colSpan={5}>Data Is Empty</td>
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

export default ReservationManagement;
