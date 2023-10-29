import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Loading from "../../../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { headersAuth } from "../../../Api";
import { useDebounce } from "use-debounce";

const FacilityManagement = () => {
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(true);
  const [facility, setFacility] = useState();
  const [items, setItems] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [debounceValue] = useDebounce(search, 2000);

  const changePage = (search, url) => {
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          url,
          { add_on_name: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setFacility(response.data.OUT_DATA.data);
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
  const getFacility = () => {
    setLoadings(true);
    setFacility();
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "add-on",
          { add_on_name: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setFacility(response.data.OUT_DATA.data);
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
          setFacility("0");
        });
    });
  };
  const deleteFacility = () => {
    handleClose();
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "add-on/delete",
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
          getFacility();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          getFacility();
        });
    });
  };
  useEffect(() => {
    getFacility();
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
              deleteFacility();
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
              placeholder="Search Facility By Name"
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
              href="/facility-management/add"
              style={{ width: "fit-content" }}
            >
              Add Facility
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
                  <th>Facility Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {facility === "0" ? (
                  <>
                    <tr>
                      <td colspan={3}>Data Is Empty</td>
                    </tr>
                  </>
                ) : (
                  <>
                    {facility.map((f, index) => (
                      <tr key={f.id}>
                        <td style={{ textAlign: "start" }}>{f.add_on_name} </td>
                        <td> Rp.{f.price}</td>
                        <td>
                          <Button
                            // href=""
                            onClick={() => {
                              window.location.href = `/facility-management/edit/${f.id}`;
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            style={{ marginLeft: "1rem" }}
                            onClick={() => {
                              setSelectedName(f.add_on_name);
                              setSelectedId(f.id);
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
            {facility === "0" ? (
              <></>
            ) : (
              <>
                <div>
                  <Pagination>{items}</Pagination>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FacilityManagement;
