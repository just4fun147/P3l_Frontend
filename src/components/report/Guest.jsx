import logo from "../../assets/fhdtrans.png";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { headersAuth } from "../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";

const NewCust = (props) => {
  const [loadings, setLoadings] = useState(false);
  const [total, setTotal] = useState();
  const [today, setToday] = useState();
  const [data, setData] = useState();
  const getData = () => {
    setLoadings(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "report/guest",
          { year: props.search, month: props.month },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setData(response.data.OUT_DATA.data);
          setTotal(response.data.OUT_DATA.total);
          setToday(response.data.OUT_DATA.today);
          setLoadings(false);
        })
        .catch((error) => {
          setLoadings(false);
        });
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {!loadings ? (
        <>
          <div className="container" style={{ alignItems: "center" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", maxWidth: "500px" }}
            ></img>
            <p style={{ fontSize: "1.25rem" }}>
              Jl. P. Mangkubumi No.18, Yogyakarta 55233
            </p>
            <p style={{ fontSize: "1.25rem", lineHeight: "0.5" }}>
              Telp. (0274) 487711
            </p>
            <hr />
          </div>
          <div className="row">
            <h3 style={{ fontWeight: "bold", fontSize: "3rem" }}>
              LAPORAN JUMLAH TAMU
            </h3>
          </div>
          <div className="container row" style={{ textAlign: "start" }}>
            <p style={{ fontSize: "1.2rem" }}>Tahun : {props.search}</p>
          </div>
          <div className="container row" style={{ textAlign: "start" }}>
            <p style={{ fontSize: "1.2rem" }}>Bulan : {props.month}</p>
          </div>
          <div className="container mb-5">
            <Table
              bordered
              striped
              style={{ borderColor: "black", border: "3px solid" }}
            >
              <thead style={{ borderColor: "black", border: "3px solid" }}>
                <tr style={{ borderColor: "black", border: "1px solid" }}>
                  <th style={{ borderColor: "black", border: "1px solid" }}>
                    No
                  </th>
                  <th style={{ borderColor: "black", border: "1px solid" }}>
                    Jenis Kamar
                  </th>
                  <th style={{ borderColor: "black", border: "1px solid" }}>
                    Grup
                  </th>
                  <th style={{ borderColor: "black", border: "1px solid" }}>
                    Personal
                  </th>
                  <th style={{ borderColor: "black", border: "1px solid" }}>
                    Total
                  </th>
                </tr>
              </thead>
              <tbody style={{ borderColor: "black", border: "3px solid" }}>
                {data.map((d) => (
                  <tr
                    key={d.id}
                    style={{ borderColor: "black", border: "1px solid" }}
                  >
                    <td style={{ borderColor: "black", border: "1px solid" }}>
                      {" "}
                      {d.no}{" "}
                    </td>
                    <td
                      style={{
                        borderColor: "black",
                        border: "1px solid",
                        textAlign: "start",
                      }}
                    >
                      {" "}
                      {d.type_name}
                    </td>
                    <td style={{ borderColor: "black", border: "1px solid" }}>
                      {" "}
                      {d.group}
                    </td>
                    <td style={{ borderColor: "black", border: "1px solid" }}>
                      {" "}
                      {d.personal}
                    </td>
                    <td style={{ borderColor: "black", border: "1px solid" }}>
                      {" "}
                      {d.total}
                    </td>
                  </tr>
                ))}
                <tr style={{ borderColor: "black", border: "1px solid" }}>
                  <td
                    colSpan={4}
                    style={{ borderColor: "black", border: "1px solid" }}
                  >
                    Total
                  </td>
                  <td style={{ borderColor: "black", border: "1px solid" }}>
                    {total}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <p style={{ textAlign: "end" }}>Dicetak tanggal {today}</p>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default NewCust;
