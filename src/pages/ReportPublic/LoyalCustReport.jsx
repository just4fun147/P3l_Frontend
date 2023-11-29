import JsPDF from "jspdf";
import Button from "react-bootstrap/Button";
import LoyalCust from "../../components/report/LoyalCust";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LoyalCustReportPublic = () => {
  const [search, setSearch] = useState(useParams().year);

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
      pdf.save("download.pdf");
    });
  };
  return (
    <div className="container mt-3">
      <div className="col-10"></div>
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
        <LoyalCust search={search} />
      </div>
    </div>
  );
};

export default LoyalCustReportPublic;
