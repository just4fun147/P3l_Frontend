import Button from "react-bootstrap/Button";
const MyReservationItem = (props) => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ width: "100%", textAlign: "start" }}>
          <div className="col-9">
            <b>Start Date</b>
            <p style={{ marginBottom: "0" }}>End Date</p>
            <p>Adult : xx | Child : xx</p>
          </div>
          <div className="col-3">
            <Button style={{ width: "100%" }}>Bill</Button>
            <Button style={{ width: "100%", marginTop: "1rem" }}>
              Receipt
            </Button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MyReservationItem;
