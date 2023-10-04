import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import axios from "axios";
import { headersAuth } from "../../Api";

const RoomManagement = () => {
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(true);
  const [rooms, setRooms] = useState();
  const [items, setItems] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const changePage = (search, url) => {
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          url,
          { room_number: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRooms(response.data.OUT_DATA.data);
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
          setLoadings(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const getRoom = (search) => {
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms",
          { room_number: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRooms(response.data.OUT_DATA.data);
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
          setLoadings(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  useEffect(() => {
    getRoom();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure Want To Delete {selectedName}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            style={{ marginLeft: "1rem" }}
            onClick={handleClose}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
      <div className="container mt-5">
        {loadings ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="row mb-3">
              <div className="col-10">
                <input
                  type="text"
                  placeholder="Search Room By Name"
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
                ></input>
              </div>
              <div className="col-2">
                <Button
                  href="/room-management/add"
                  style={{ width: "fit-content" }}
                >
                  Add Room
                </Button>
              </div>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Room Number</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => (
                  <tr key={room.id}>
                    <td> {room.room_number} </td>
                    <td> {room.type_name}</td>
                    <td>
                      <Button href="/room-management/edit">Edit</Button>
                      <Button
                        variant="danger"
                        style={{ marginLeft: "1rem" }}
                        onClick={() => {
                          setSelectedName("123");
                          handleShow();
                        }}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div>
              <Pagination>{items}</Pagination>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RoomManagement;
