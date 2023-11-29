import JsPDF from "jspdf";
import Button from "react-bootstrap/Button";
import Monthly from "../../components/report/Monthly";
import MonthlyBar from "../../components/report/MonthlyBar";
import html2canvas from "html2canvas";
import axios from "axios";
import { headersAuth } from "../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const MonthlyReport = () => {
  const [search, setSearch] = useState("0");
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState();
  const [select, setSelect] = useState(false);
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
        "potrait",
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
              <p>Select Year</p>
            </div>
            <div className="row">
              <div className="col-10">
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
                    setSelect(true);
                  }}
                >
                  <option disable hidden>
                    Please Select Year
                  </option>
                  {year.map((y) => (
                    <option value={y.year}>{y.year}</option>
                  ))}
                </select>
              </div>
              {!select ? (
                <></>
              ) : (
                <>
                  <div className="col-2">
                    <Button
                      style={{ width: "fit-content" }}
                      onClick={generatePDF}
                    >
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
                    }}
                    id="report"
                  >
                    <Monthly search={search} />
                  </div>
                  <div>
                    <MonthlyBar search={search} />
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

export default MonthlyReport;
