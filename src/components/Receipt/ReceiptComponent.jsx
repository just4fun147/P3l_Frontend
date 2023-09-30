import logo from "../../assets/fhdtrans.png";
import Table from "react-bootstrap/Table";
import React from "react";
const ReceiptComponent = () => {
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
        <hr style={{ border: "3px solid black" }} />
        <b>Invoice</b>
        <hr style={{ border: "3px solid black" }} />
      </div>
      {/* tanggal */}
      <div className="row">
        <div className="col-8"></div>
        <div className="col-2">
          <div className="row" style={{ textAlign: "start" }}>
            <p>Tanggal</p>
          </div>
          <div className="row" style={{ textAlign: "start" }}>
            <p>No. Invoice</p>
          </div>
          <div className="row" style={{ textAlign: "start" }}>
            <p>Front Office</p>
          </div>
        </div>
        <div className="col-2" style={{ paddingRight: "1.25rem" }}>
          <div className="row" style={{ textAlign: "end" }}>
            <p>30/Jan/2023</p>
          </div>
          <div className="row" style={{ textAlign: "end" }}>
            <p>P300118-024</p>
          </div>
          <div className="row" style={{ textAlign: "end" }}>
            <p>Rickon</p>
          </div>
        </div>
      </div>
      {/* booking detail */}
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">ID Booking</div>
        <div className="col-4">P150123-141</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Nama</div>
        <div className="col-4">Daenerys Targaryen</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Alamat</div>
        <div className="col-4">Dragonstone Castle, Westeros</div>
      </div>
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b>Detail</b>
      <hr style={{ border: "3px solid black" }} />
      {/* DETAIL */}
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Check In</div>
        <div className="col-4">29/Jan/2023</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Check Out</div>
        <div className="col-4">30/Jan/2023</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Dewasa</div>
        <div className="col-4">5</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Anak-anak</div>
        <div className="col-4">0</div>
      </div>
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b>Kamar</b>
      <hr style={{ border: "3px solid black" }} />
      {/* KAMAR */}
      <div className="container mb-5 mt-3">
        <Table
          bordered
          striped
          style={{ borderColor: "black", border: "3px solid" }}
        >
          <thead style={{ borderColor: "black", border: "3px solid" }}>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Jenis Kamar
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>Bed</th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Jumlah
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Harga
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                SubTotal
              </th>
            </tr>
          </thead>
          <tbody style={{ borderColor: "black", border: "3px solid" }}>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Superior
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Twin
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>1</td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp400.000
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp400.000
              </td>
            </tr>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Double Deluxe
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Double
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>1</td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp450.000
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp450.000
              </td>
            </tr>

            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td
                colSpan={4}
                style={{ borderColor: "black", border: "1px solid" }}
              >
                Total
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp850.000
              </td>
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
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b>Layanan</b>
      <hr style={{ border: "3px solid black" }} />
      {/* LAYANAN */}
      <div className="container mt-3">
        <Table
          bordered
          striped
          style={{ borderColor: "black", border: "3px solid" }}
        >
          <thead style={{ borderColor: "black", border: "3px solid" }}>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Layanan
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Tanggal
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Jumlah
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                Harga
              </th>
              <th style={{ borderColor: "black", border: "1px solid" }}>
                SubTotal
              </th>
            </tr>
          </thead>
          <tbody style={{ borderColor: "black", border: "3px solid" }}>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Extra Bed
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                29/Jan/2023
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>1</td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp150.000
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp150.000
              </td>
            </tr>
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Message
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                29/Jan/2023
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>1</td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp75.000
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp75.000
              </td>
            </tr>

            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td
                colSpan={4}
                style={{ borderColor: "black", border: "1px solid" }}
              >
                Total
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                Rp225.000
              </td>
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
      <div className="row" style={{ marginRight: "1rem" }}>
        <div className="col-9"></div>
        <div className="col-1" style={{ textAlign: "start" }}>
          <p>Tax</p>
          <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Total</p>
          <p>Jaminan</p>
          <p>Deposit</p>
          <p style={{ fontWeight: "bold", fontSize: "1.15rem" }}>Cash</p>
        </div>
        <div className="col-2" style={{ textAlign: "end" }}>
          <p>Rp42.500</p>
          <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Rp42.500</p>
          <p>Rp42.500</p>
          <p>Rp42.500</p>
          <p style={{ fontWeight: "bold", fontSize: "1.15rem" }}>Rp42.500</p>
        </div>
      </div>
      <p>Thank You For Your Visit!</p>
    </>
  );
};

export default ReceiptComponent;
