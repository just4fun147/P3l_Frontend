import JsPDF from "jspdf";
import Button from "react-bootstrap/Button";
import NewCust from "../../components/report/NewCust";
import html2canvas from "html2canvas";
import axios from "axios";
import { headersAuth } from "../../Api";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";

const NewCustReportPublic = () => {
  const [search, setSearch] = useState(useParams().year);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState();
  const [select, setSelect] = useState(false);
  const getYear = () => {
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "report/getYearUser",
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
      <div className="container mt-3">
        <div className="col-2">
          <Button style={{ width: "fit-content" }} onClick={generatePDF}>
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
          <NewCust search={search} />
        </div>
      </div>
    </>
  );
};

export default NewCustReportPublic;
