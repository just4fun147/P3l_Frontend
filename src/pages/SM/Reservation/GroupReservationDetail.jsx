import "./MyReservation.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { headersAuth } from "../../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import SummaryGroup from "../../../components/Booking/SummaryGroup";
import Summary from "../../../components/Booking/Summary";
import Detail from "../../../components/Booking/Detail";
import "./GroupReservationDetail.css";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const GroupReservationDetail = () => {
  const [ids, setIds] = useState(useParams().id);
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const getReservation = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "reservation",
          {
            id: ids,
            search: null,
            is_group: true,
            is_open: true,
            is_paid: true,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setData(response.data.OUT_DATA[0]);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  useEffect(() => {
    getReservation();
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
            <h1
              style={{
                fontSize: "20px",
                color: "#31353B",
                fontWeight: "bold",
                marginBottom: "29px",
                textAlign: "start",
              }}
            >
              Reservation Detail
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
                    {data.summary.map((summary, index) => (
                      <Detail
                        text={summary.type_name}
                        price={summary.price}
                        total={summary.total}
                      ></Detail>
                    ))}
                    {data.addon.map((addon, index) => (
                      <Detail
                        text={addon.add_on_name}
                        price={addon.price}
                        total={addon.total}
                      ></Detail>
                    ))}
                  </div>
                  <div className="row">
                    <SummaryGroup
                      text="Total"
                      price={data.total_price}
                    ></SummaryGroup>
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
                  <p style={{ fontWeight: "700px" }}>{data.id_booking}</p>
                </div>
                <div
                  style={{
                    padding: "16px",
                    borderBottom: "1px solid var(--N100,#DBDEE2)",
                  }}
                >
                  <SummaryGroup
                    text="Group Name"
                    price={data.group_name}
                  ></SummaryGroup>
                  <SummaryGroup
                    text="Leader Name"
                    price={data.full_name}
                  ></SummaryGroup>
                  <SummaryGroup
                    text="Start Date"
                    price={data.start_date}
                  ></SummaryGroup>
                  <SummaryGroup
                    text="End Date"
                    price={data.end_date}
                  ></SummaryGroup>
                  <SummaryGroup text="Adult" price={data.adult}></SummaryGroup>
                  <SummaryGroup text="Child" price={data.child}></SummaryGroup>
                </div>
                <div
                  style={{
                    fontWeight: "700",
                    padding: "16px",
                  }}
                >
                  <SummaryGroup
                    text="Status"
                    price={
                      data.status == 0
                        ? "Expired"
                        : data.status == 1 || data.status == 2
                        ? "Not Paid"
                        : data.status == 3 || data.status == 4
                        ? "Paid"
                        : data.status == 5
                        ? "Success"
                        : "Cancel"
                    }
                  ></SummaryGroup>
                  {data.status == 3 || data.status == 4 ? (
                    <>
                      <Button
                        onClick={() => {
                          window.location.href = `/group-bill/${ids}`;
                        }}
                      >
                        Bill
                      </Button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GroupReservationDetail;
