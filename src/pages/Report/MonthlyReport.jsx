import JsPDF from "jspdf";
import Button from "react-bootstrap/Button";
import Monthly from "../../components/report/Monthly";
import html2canvas from "html2canvas";
const MonthlyReport = () => {
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
        <div className="row mt-5" style={{ justifyContent: "end" }}>
          <Button style={{ width: "fit-content" }} onClick={generatePDF}>
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
        }}
        id="report"
      >
        <Monthly />
      </div>
    </>
  );
};

export default MonthlyReport;
