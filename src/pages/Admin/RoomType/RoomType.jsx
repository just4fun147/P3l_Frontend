import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { headersAuth } from "../../../Api";
import { useDebounce } from "use-debounce";

const RoomTypeManagement = () => {
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(true);
  const [rooms, setRooms] = useState();
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [debounceValue] = useDebounce(search, 2000);

  const getRoom = () => {
    setLoadings(true);
    setRooms();
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms-type",
          { id: -1, type_name: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setRooms(response.data.OUT_DATA);
          setLoadings(false);
        })
        .catch((error) => {
          setLoadings(false);
          setRooms("0");
        });
    });
  };
  useEffect(() => {
    getRoom();
  }, [debounceValue]);

  const deleteRoom = () => {
    handleClose();
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms-type/delete",
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
          getRoom();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          getRoom();
        });
    });
  };

  return (
    <>
      <ToastContainer />

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
            onClick={() => deleteRoom()}
          >
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-10">
            <input
              type="text"
              placeholder="Search Room Type By Name"
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
              value={search}
            ></input>
          </div>
          <div className="col-2">
            <Button
              href="/room-type-management/add"
              style={{ width: "fit-content" }}
            >
              Add Room Type
            </Button>
          </div>
        </div>
        {loadings ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Bed Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {rooms === "0" ? (
                  <>
                    <tr>
                      <td colspan={3}>Data Is Empty</td>
                    </tr>
                  </>
                ) : (
                  <>
                    {rooms.map((room, index) => (
                      <tr key={room.id}>
                        <td style={{ textAlign: "start" }}>
                          <div className="row">
                            <div className="col-3"></div>
                            <div className="col-8">{room.type_name}</div>
                          </div>
                        </td>
                        <td> {room.bed}</td>
                        <td>
                          <Button
                            // href=""
                            onClick={() => {
                              window.location.href = `/room-type-management/edit/${room.id}`;
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            style={{ marginLeft: "1rem" }}
                            onClick={() => {
                              setSelectedName(room.type_name);
                              setSelectedId(room.id);
                              handleShow();
                            }}
                          >
                            delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </>
  );
};

export default RoomTypeManagement;
