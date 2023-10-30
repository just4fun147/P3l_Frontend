import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaDollarSign, FaMoneyBill, FaHistory } from "react-icons/fa";
import "./MyReservation.css";
import MyReservationList from "../../../components/Reservation/MyReservationList";
import { toast, ToastContainer } from "react-toastify";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { headersAuth } from "../../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
const MyReservation = () => {
  const [status, setStatus] = useState(0);
  const [itemsUnpaid, setItemsUnpaid] = useState([]);
  const [dataUnpaid, setDataUnpaid] = useState();
  const [totalUnpaid, setTotalUnpaid] = useState(0);
  const [itemsPaid, setItemsPaid] = useState([]);
  const [dataPaid, setDataPaid] = useState();
  const [totalPaid, setTotalPaid] = useState(0);
  const [itemsFinished, setItemsFinished] = useState([]);
  const [dataFinished, setDataFinished] = useState();
  const [totalFinished, setTotalFinished] = useState(0);

  const [loading, setLoading] = useState(true);
  const getReservationUnpaid = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation",
          {
            id: null,
            search: null,
            is_group: false,
            is_open: true,
            is_paid: false,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setDataUnpaid(response.data.OUT_DATA.data);
          setTotalUnpaid(response.data.OUT_DATA.total);
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
                  changePageUnpaid(response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItemsUnpaid(temp);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  const changePageUnpaid = (url) => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          url,
          {
            id: null,
            search: null,
            is_group: false,
            is_open: true,
            is_paid: false,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setDataUnpaid(response.data.OUT_DATA.data);
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
                  changePageUnpaid(response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItemsUnpaid(temp);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const getReservationPaid = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation",
          {
            id: null,
            search: null,
            is_group: false,
            is_open: true,
            is_paid: true,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setDataPaid(response.data.OUT_DATA.data);
          setTotalPaid(response.data.OUT_DATA.total);
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
                  changePagePaid(response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItemsPaid(temp);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  const changePagePaid = (url) => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          url,
          {
            id: null,
            search: null,
            is_group: false,
            is_open: true,
            is_paid: true,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setDataPaid(response.data.OUT_DATA.data);
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
                  changePagePaid(response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItemsPaid(temp);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  const getReservationFinished = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation",
          {
            id: null,
            search: null,
            is_group: false,
            is_open: false,
            is_paid: false,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setDataFinished(response.data.OUT_DATA.data);
          setTotalFinished(response.data.OUT_DATA.total);
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
                  changePageFinished(response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItemsFinished(temp);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  const changePageFinished = (url) => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          url,
          {
            id: null,
            search: null,
            is_group: false,
            is_open: false,
            is_paid: false,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setDataFinished(response.data.OUT_DATA.data);
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
                  changePageFinished(response.data.OUT_DATA.links[number].url)
                }
              >
                {number}
              </Pagination.Item>
            );
          }
          setItemsFinished(temp);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  useEffect(() => {
    getReservationUnpaid();
    getReservationPaid();
    getReservationFinished();
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="container mt-5">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-3" style={{ textAlign: "start" }}>
                <Button
                  id="unpaid"
                  onClick={() => {
                    setStatus(0);
                    document
                      .getElementById("unpaid")
                      .classList.remove("btn-outline-primary");
                    document.getElementById("unpaid").style.color = "white";
                    document
                      .getElementById("paid")
                      .classList.remove("btn-primary");
                    document
                      .getElementById("finished")
                      .classList.remove("btn-primary");
                    document
                      .getElementById("unpaid")
                      .classList.add("btn-primary");
                    document
                      .getElementById("paid")
                      .classList.add("btn-outline-primary");
                    document
                      .getElementById("finished")
                      .classList.add("btn-outline-primary");
                    document.getElementById("paid").style.color =
                      "rgba(104,113,118,1.00)";
                    document.getElementById("finished").style.color =
                      "rgba(104,113,118,1.00)";
                  }}
                  variant="primary"
                  style={{
                    width: "100%",
                    border: "none",
                    color: "white",
                    textAlign: "start",
                    fontSize: "1.25rem",
                  }}
                >
                  <span>
                    <FaDollarSign
                      style={{ marginRight: "1rem", fontSize: "1.5rem" }}
                    />
                  </span>
                  Unpaid
                </Button>
                <Button
                  id="paid"
                  onClick={() => {
                    setStatus(1);
                    document
                      .getElementById("paid")
                      .classList.remove("btn-outline-primary");
                    document.getElementById("paid").style.color = "white";
                    document
                      .getElementById("unpaid")
                      .classList.remove("btn-primary");
                    document
                      .getElementById("finished")
                      .classList.remove("btn-primary");
                    document
                      .getElementById("paid")
                      .classList.add("btn-primary");
                    document
                      .getElementById("unpaid")
                      .classList.add("btn-outline-primary");
                    document
                      .getElementById("finished")
                      .classList.add("btn-outline-primary");
                    document.getElementById("unpaid").style.color =
                      "rgba(104,113,118,1.00)";
                    document.getElementById("finished").style.color =
                      "rgba(104,113,118,1.00)";
                  }}
                  variant="outline-primary"
                  style={{
                    width: "100%",
                    border: "none",
                    color: "rgba(104,113,118,1.00)",
                    textAlign: "start",
                    fontSize: "1.25rem",
                  }}
                >
                  <span>
                    <FaMoneyBill
                      style={{ marginRight: "1rem", fontSize: "1.5rem" }}
                    />
                  </span>
                  Paid
                </Button>
                <Button
                  id="finished"
                  onClick={() => {
                    setStatus(2);
                    document
                      .getElementById("finished")
                      .classList.remove("btn-outline-primary");
                    document.getElementById("finished").style.color = "white";
                    document
                      .getElementById("unpaid")
                      .classList.remove("btn-primary");
                    document
                      .getElementById("paid")
                      .classList.remove("btn-primary");
                    document
                      .getElementById("finished")
                      .classList.add("btn-primary");
                    document
                      .getElementById("unpaid")
                      .classList.add("btn-outline-primary");
                    document
                      .getElementById("paid")
                      .classList.add("btn-outline-primary");
                    document.getElementById("unpaid").style.color =
                      "rgba(104,113,118,1.00)";
                    document.getElementById("paid").style.color =
                      "rgba(104,113,118,1.00)";
                  }}
                  variant="outline-primary"
                  style={{
                    width: "100%",
                    border: "none",
                    color: "rgba(104,113,118,1.00)",
                    textAlign: "start",
                    fontSize: "1.25rem",
                  }}
                >
                  <span>
                    <FaHistory
                      style={{ marginRight: "1rem", fontSize: "1.5rem" }}
                    />
                  </span>
                  Finished
                </Button>
              </div>
              <div className="col-9 mb-3">
                <Card
                  style={{
                    padding: "1rem",
                  }}
                >
                  {status == 0 ? (
                    <MyReservationList
                      data={dataUnpaid}
                      total={totalUnpaid}
                      item={itemsUnpaid}
                    />
                  ) : (
                    <>
                      {status == 1 ? (
                        <MyReservationList
                          data={dataPaid}
                          total={totalPaid}
                          item={itemsPaid}
                        />
                      ) : (
                        <MyReservationList
                          data={dataFinished}
                          total={totalFinished}
                          item={itemsFinished}
                        />
                      )}
                    </>
                  )}
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyReservation;
