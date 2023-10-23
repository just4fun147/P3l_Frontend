import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";
import { headersAuth } from "../../../Api";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";

const SeasonManagement = () => {
  const [show, setShow] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState("");
  const [season, setSeason] = useState();
  const [items, setItems] = useState([]);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [loadings, setLoadings] = useState(true);

  const [debounceValue] = useDebounce(search, 2000);
  const deleteSeason = () => {
    handleClose();
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "seasons/delete",
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
          getSeason();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          getSeason();
        });
    });
  };
  const changePage = (search, url) => {
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          url,
          { season_name: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setSeason(response.data.OUT_DATA.data);
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
  const getSeason = () => {
    setLoadings(true);
    setSeason();
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "seasons",
          { season_name: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setSeason(response.data.OUT_DATA.data);
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
          setLoadings(false);
          setSeason("0");
        });
    });
  };
  useEffect(() => {
    getSeason();
  }, [debounceValue]);
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
            onClick={() => {
              deleteSeason();
            }}
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
              placeholder="Search Season By Name"
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
              href="/season-management/add"
              style={{ width: "fit-content" }}
            >
              Add Season
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
                  <th>Season Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {season === "0" ? (
                  <>
                    <tr>
                      <td colspan={3}>Data Is Empty</td>
                    </tr>
                  </>
                ) : (
                  <>
                    {season.map((s, index) => (
                      <tr key={s.id}>
                        <td style={{ textAlign: "start" }}>{s.season_name}</td>
                        <td> {s.start_date}</td>
                        <td> {s.end_date}</td>
                        <td>
                          <Button
                            onClick={() => {
                              window.location.href = `/season-management/edit/${s.id}`;
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            style={{ marginLeft: "1rem" }}
                            onClick={() => {
                              setSelectedName(s.season_name);
                              setSelectedId(s.id);
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
            <div>
              <Pagination>{items}</Pagination>{" "}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SeasonManagement;
