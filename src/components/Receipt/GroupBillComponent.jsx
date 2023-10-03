import logo from "../../assets/fhdtrans.png";
import Table from "react-bootstrap/Table";
import React from "react";
const GroupBillComponent = () => {
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
        <b>TANDA TERIMA PEMESANAN</b>
        <hr style={{ border: "3px solid black" }} />
      </div>
      {/* tanggal */}
      <div className="container row">
        <div className="col-3" style={{ textAlign: "start" }}>
          ID Booking
        </div>
        <div className="col-2" style={{ textAlign: "start" }}>
          P150123-141
        </div>
        <div className="col-3"></div>
        <div className="col-2" style={{ textAlign: "end" }}>
          Tanggal
        </div>
        <div className="col-2" style={{ textAlign: "end" }}>
          15/Jan/2023
        </div>
      </div>
      {/* booking detail */}
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">
          <p>PIC</p>
        </div>
        <div className="col-2">
          <p>Brandon</p>
        </div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}></div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">Nama</div>
        <div className="col-4">Daenerys Targaryen</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">Alamat</div>
        <div className="col-4">Dragonstone Castle, Westeros</div>
      </div>
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b>DETAIL PEMESANAN</b>
      <hr style={{ border: "3px solid black" }} />
      {/* DETAIL */}
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">Check In</div>
        <div className="col-4">29/Jan/2023</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">Check Out</div>
        <div className="col-4">30/Jan/2023</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">Dewasa</div>
        <div className="col-4">5</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">Anak-anak</div>
        <div className="col-4">0</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-3">Tanggal Pembayaran</div>
        <div className="col-4">14/Jan/2023</div>
      </div>
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b style={{ opacity: "0" }}>a</b>
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
                Total
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
                style={{
                  borderColor: "black",
                  border: "1px solid",
                  opacity: "0",
                }}
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
      <div className="container row">
        <div className="col-8"></div>
        <div className="col-2" style={{ textAlign: "start" }}>
          <p>Uang Jaminan</p>
        </div>
        <div className="col-2" style={{ textAlign: "start" }}>
          <b>Rp5.000.000</b>
        </div>
      </div>
      <div className="container row" style={{ marginRight: "1rem" }}>
        <div className="col-9" style={{ textAlign: "start" }}>
          <p>Permintaan Khusus :</p>
          <p>- 1 ekstra bed</p>
          <p>- Massage</p>
        </div>
      </div>
    </>
  );
};

export default GroupBillComponent;
