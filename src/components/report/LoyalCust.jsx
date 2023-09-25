import logo from "../../assets/fhdtrans.png";
import Table from "react-bootstrap/Table";
import React from "react";
// import "./Table.css";
const LoyalCust = () => {
  return (
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
        <h3 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
          LAPORAN 5 CUSTOMER RESERVASI TERBANYAK
        </h3>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <p style={{ fontSize: "1.2rem" }}>Tahun : xxxx</p>
      </div>
      <div className="container mb-5">
        <Table
          bordered
          striped
          style={{ borderColor: "black", border: "3px solid" }}
        >
          <thead style={{ borderColor: "black", border: "3px solid" }}>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <th style={{ borderColor: "black", border: "1px solid" }}>No</th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Nama Customer
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Jumlah Reservasi
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Total Pembayaran
              </th>
            </tr>
          </thead>
          <tbody style={{ borderColor: "black", border: "3px solid" }}>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td style={{ borderColor: "black", border: "1px solid" }}> 1 </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                ASEP
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>20</td>
              <td style={{ borderColor: "black", border: "1px solid" }}>10</td>
            </tr>
            <tr>
              <td> 1 </td>
              <td> Superior </td>
              <td> 20 </td>
              <td> 10 </td>
            </tr>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td
                colSpan={3}
                style={{ borderColor: "black", border: "1px solid" }}
              >
                Total
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>300</td>
            </tr>
            {/* {users.map((user) => (
                      <tr key={user.id}>
                        <td> {user.full_name} </td>
                        <td> {user.name}</td>
                        <td> {user.email}</td>
                        <td> {user.domisili}</td>
                        <td> {user.pekerjaan}</td>
                        <td> {user.no_telp}</td>
                        <td> {user.sosmed}</td>
                      </tr>
                    ))} */}
          </tbody>
        </Table>
      </div>
      <p style={{ textAlign: "end" }}>Dicetak tanggal xx Januari 2023</p>
    </>
  );
};

export default LoyalCust;
