import { Bar } from "react-chartjs-2";
import axios from "axios";
import { headersAuth } from "../../Api";
import React, { useEffect, useState } from "react";

const GuestBar = (props) => {
  const [data, setData] = useState("0");
  const [loading, setLoadings] = useState();

  const getData = () => {
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "report/guest/chart",
          { year: props.search, month: props.month },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setData(response.data.OUT_DATA.data);
          setLoadings(false);
        })
        .catch((error) => {
          setLoadings(false);
        });
    });
  };
  useEffect(() => {
    getData();
  }, [props.search, props.month]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Laporan Jumlah Tamu",
      },
    },
  };
  return (
    <>
      {loading || data === "0" ? (
        <></>
      ) : (
        <>
          <div className="chart-container">
            {/* <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
            <Bar data={data} options={options} />
          </div>
        </>
      )}
    </>
  );
};

export default GuestBar;
