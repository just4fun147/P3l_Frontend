import JsPDF from "jspdf";
import Button from "react-bootstrap/Button";
import Guest from "../../components/report/Guest";
import html2canvas from "html2canvas";
import axios from "axios";
import { headersAuth } from "../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
const GuestReport = () => {
  const [search, setSearch] = useState("0");
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [select, setSelect] = useState(false);
  const checkSelect = () => {
    if (month != null && year != null) {
      setSelect(true);
    }
    if (month != "" && year != "") {
      setSelect(true);
    }
  };
  const getYear = () => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "report/getYear",
          {},
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setYear(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  useEffect(() => {
    getYear();
  }, []);
  const generatePDF = () => {
    const input = document.getElementById("report");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF(
        "landscape",
        "px",
        [canvas.width, canvas.height],
        true
      );
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="container">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="row mt-5" style={{ textAlign: "start" }}>
              <div className="col-5">
                <p>Select Year</p>
              </div>
              <div className="col-5">
                <p>Select Month</p>
              </div>
            </div>
            <div className="row" style={{ textAlign: "start" }}>
              <div className="col-5">
                <select
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "5px",
                    lineHeight: "0.25",
                  }}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                >
                  {year.map((y) => (
                    <option value={y.year}>{y.year}</option>
                  ))}
                </select>
              </div>
              <div className="col-5">
                <select
                  style={{
                    width: "100%",
                    minWidth: "250px",
                    display: "block",
                    marginRight: "auto",
                    marginLeft: "auto",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "5px",
                    lineHeight: "0.25",
                  }}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                >
                  <option value="1">Januari</option>
                  <option value="2">Februari</option>
                  <option value="3">Maret</option>
                  <option value="4">April</option>
                  <option value="5">Mei</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">Agustus</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </select>
              </div>
              {month == null || search == null ? (
                <></>
              ) : (
                <>
                  <div className="col-2">
                    <Button
                      style={{ width: "fit-content" }}
                      onClick={generatePDF}
                    >
                      {" "}
                      download
                    </Button>
                  </div>
                  <div
                    className="container mt-5 mb-3"
                    style={{
                      width: "100%",
                      paddingRight: "5rem",
                      paddingLeft: "5rem",
                      paddingTop: "3rem",
                      paddingBottom: "3rem",
                      backgroundColor: "white",
                      textAlign: "center",
                    }}
                    id="report"
                  >
                    <Guest search={search} month={month} />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GuestReport;
