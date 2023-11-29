import logo from "../../assets/fhdtrans.png";
import Table from "react-bootstrap/Table";
import React from "react";
const ReceiptComponent = (props) => {
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
        <b>INVOICE</b>
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
            <p>{props.data.now}</p>
          </div>
          <div className="row" style={{ textAlign: "end" }}>
            <p>{props.data.invoice_number}</p>
          </div>
          <div className="row" style={{ textAlign: "end" }}>
            <p>{props.data.created_by}</p>
          </div>
        </div>
      </div>
      {/* booking detail */}
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">ID Booking</div>
        <div className="col-4">{props.data.id_booking}</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Nama</div>
        <div className="col-4">{props.data.name}</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Alamat</div>
        <div className="col-4">{props.data.address}</div>
      </div>
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b>DETAIL</b>
      <hr style={{ border: "3px solid black" }} />
      {/* DETAIL */}
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Check In</div>
        <div className="col-4">{props.data.check_in}</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Check Out</div>
        <div className="col-4">{props.data.check_out}</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Dewasa</div>
        <div className="col-4">{props.data.adult}</div>
      </div>
      <div className="container row" style={{ textAlign: "start" }}>
        <div className="col-2">Anak-anak</div>
        <div className="col-4">{props.data.child}</div>
      </div>
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b>KAMAR</b>
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
            {props.data.summary.map((a, index) => (
              <tr style={{ borderColor: "black", border: "1px solid" }}>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {a.type_name}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {a.bed}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {a.total}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {a.actual_price}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {a.price}
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
                {props.data.totalRoom}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/*  */}
      <hr style={{ border: "3px solid black" }} />
      <b>LAYANAN</b>
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
            {props.data.addon.map((b, index) => (
              <tr style={{ borderColor: "black", border: "1px solid" }}>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {b.add_on_name}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {b.date}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {b.price}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {b.price}
                </td>
                <td style={{ borderColor: "black", border: "1px solid" }}>
                  {b.subTotal}
                </td>
              </tr>
            ))}
            <tr style={{ borderColor: "black", border: "1px solid" }}>
              <td
                colSpan={4}
                style={{ borderColor: "black", border: "1px solid" }}
              >
                TOTAL
              </td>
              <td style={{ borderColor: "black", border: "1px solid" }}>
                {props.data.totalAddOn}
              </td>
            </tr>
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
          <p>{props.data.tax}</p>
          <p style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            {props.data.grandTotal}
          </p>
          <p>{props.data.totalRoom}</p>
          <p>Rp300,000</p>
          <p style={{ fontWeight: "bold", fontSize: "1.15rem" }}>
            {props.data.cash}
          </p>
        </div>
      </div>
      <p>Thank You For Your Visit!</p>
    </>
  );
};

export default ReceiptComponent;
