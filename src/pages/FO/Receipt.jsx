import JsPDF from "jspdf";
import Button from "react-bootstrap/Button";
import ReceiptComponent from "../../components/Receipt/ReceiptComponent";
import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { headersAuth } from "../../Api";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const ReceiptFOP = () => {
  const [ids, setIds] = useState(useParams().id);
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const getReservation = () => {
    setLoading(true);
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "receipt",
          {
            id: ids,
            is_group: false,
          },
          {
            headers: headersAuth,
          }
        )
        .then((response) => {
          setData(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {});
    });
  };
  useEffect(() => {
    getReservation();
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
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="container">
            <div className="row mt-5" style={{ justifyContent: "end" }}>
              <Button style={{ width: "fit-content" }} onClick={generatePDF}>
                {" "}
                download
              </Button>
            </div>
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
              minWidth: "1320px",
              minHeight: "1334px",
              overflow: "scroll",
            }}
            id="report"
          >
            <ReceiptComponent data={data} />
          </div>
        </>
      )}
    </>
  );
};

export default ReceiptFOP;
