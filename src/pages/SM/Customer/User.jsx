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

const CustomerManagement = () => {
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(true);
  const [customer, setCustomers] = useState();
  const [selectedName, setSelectedName] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [debounceValue] = useDebounce(search, 2000);

  const getCustomer = () => {
    setLoadings(true);
    setCustomers();
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "users",
          { id: null, name: search },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setCustomers(response.data.OUT_DATA.data);
          setLoadings(false);
        })
        .catch((error) => {
          setLoadings(false);
          setCustomers("0");
        });
    });
  };
  useEffect(() => {
    getCustomer();
  }, [debounceValue]);

  const deleteUser = () => {
    handleClose();
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "users/delete",
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
          getCustomer();
        })
        .catch((error) => {
          toast.error(error.response.data.OUT_MESS, {
            position: toast.POSITION.TOP_RIGHT,
          });
          getCustomer();
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
            onClick={() => deleteUser()}
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
              placeholder="Search User By Name"
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
              href="/customer-management/add"
              style={{ width: "fit-content" }}
            >
              Add Customer
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
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customer === "0" ? (
                  <>
                    <tr>
                      <td colspan={3}>Data Is Empty</td>
                    </tr>
                  </>
                ) : (
                  <>
                    {customer.map((custome, index) => (
                      <tr key={custome.id}>
                        <td style={{ textAlign: "start" }}>
                          {custome.full_name}
                        </td>
                        <td style={{ textAlign: "start" }}>{custome.email}</td>
                        <td style={{ textAlign: "start" }}>
                          {custome.phone_number}
                        </td>
                        <td>
                          <Button
                            // href=""
                            onClick={() => {
                              window.location.href = `/customer-management/edit/${custome.id}`;
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            style={{ marginLeft: "1rem" }}
                            onClick={() => {
                              setSelectedName(custome.full_name);
                              setSelectedId(custome.id);
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

export default CustomerManagement;
