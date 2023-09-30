import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { FaDollarSign, FaMoneyBill, FaHistory } from "react-icons/fa";
import "./MyReservation.css";
import MyReservationList from "../../../components/Reservation/MyReservationList";

const MyReservation = () => {
  const [status, setStatus] = useState(0);
  return (
    <>
      <div className="container mt-5">
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
                document.getElementById("paid").classList.remove("btn-primary");
                document
                  .getElementById("finished")
                  .classList.remove("btn-primary");
                document.getElementById("unpaid").classList.add("btn-primary");
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
                document.getElementById("paid").classList.add("btn-primary");
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
                document.getElementById("paid").classList.remove("btn-primary");
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
          <div className="col-9">
            <Card
              style={{
                padding: "1rem",
              }}
            >
              {status == 0 ? (
                <MyReservationList list="unpaid" />
              ) : (
                <>
                  {status == 1 ? (
                    <MyReservationList list="paid" />
                  ) : (
                    <MyReservationList list="finished" />
                  )}
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReservation;
