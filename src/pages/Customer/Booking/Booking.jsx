import { Button, Stack } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import Summary from "../../../components/Booking/Summary";
import Detail from "../../../components/Booking/Detail";
import "./Booking.css";
import Accordion from "react-bootstrap/Accordion";

const Booking = () => {
  return (
    <>
      <div className="container mt-5" style={{ textAlign: "start" }}>
        <div
          className="container"
          style={{ paddingLeft: "75px", paddingRight: "75px" }}
        >
          <h1
            style={{
              fontSize: "20px",
              color: "#31353B",
              fontWeight: "bold",
              marginBottom: "29px",
            }}
          >
            Price Detail
          </h1>
          <div className="row">
            <div
              className="left col-md-6"
              style={{ width: "calc(100% - 350px - 45px)" }}
            >
              <div
                className="stotal"
                style={{
                  paddingTop: "14px",
                  fontWeight: "bold",
                  borderBottom: "6px solid var(--N50,#F3F4F5)",
                }}
              >
                <div className="row mb-3">
                  <Detail text="(1x)Superior" price="Rp222.222"></Detail>
                </div>
                <div className="row">
                  <Summary text="Total" price="Rp222.222"></Summary>
                </div>
              </div>
            </div>
            <div
              className="summary col-md-3"
              style={{
                paddingRight: "0",
                paddingLeft: "0",
                width: "350px",
                boxShadow: "rgba(141, 150, 170, 0.4) 0px 1px 4px",
                borderRadius: "8px",
                backgroundColor: "var(--NN0,#FFFFFF)",
                height: "fit-content",
                position: "relative",
              }}
            >
              <div
                style={{
                  borderBottom: "6px solid var(--N50,#F3F4F5)",
                  padding: "16px",
                }}
              >
                <div
                  className="row"
                  style={{ alignItems: "center", justifyItems: "center" }}
                >
                  <div className="col-9">
                    <input
                      className="form-control"
                      placeholder="Enter your voucher code"
                      style={{
                        marginRight: "auto",
                        marginLeft: "auto",
                        textAlign: "center",
                      }}
                    ></input>
                  </div>
                  <div className="col-3">
                    <Button
                      style={{ width: "fit-content" }}
                      onClick={() => {
                        // service();
                        // Courieres("jne");
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "16px",
                  borderBottom: "1px solid var(--N100,#DBDEE2)",
                }}
              >
                <p style={{ fontWeight: "700px" }}>Summary</p>
                <Summary text="Total Price" price=" Rp222.222"></Summary>
                <Summary
                  text="Administration Cost"
                  price=" Rp222.222"
                ></Summary>
                <Summary text="Season Discount" price="-Rp222.222"></Summary>
                <Summary text="Coupon Discount" price="-Rp222.222"></Summary>
              </div>
              <div
                style={{
                  fontWeight: "700",
                  padding: "16px",
                }}
              >
                <Summary text="Total Belanja" price="Rp222.222"></Summary>
                <Button style={{ width: "100%", marginTop: "24px" }}>
                  Pilih Pembayaran
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
