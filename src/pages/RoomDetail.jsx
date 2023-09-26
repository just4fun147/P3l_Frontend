import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import double from "../assets/double.jpg";
const RoomDetail = () => {
  return (
    <>
      <div
        className="mt-3 p-5"
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
        <Card
          style={{
            alignContent: "center",
          }}
        >
          <div className="row">
            <div
              className="col-9 border-end"
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingTop: "1rem",
              }}
            >
              <div
                className="row"
                style={{
                  paddingLeft: "5rem",
                  paddingRight: "5rem",
                  textAlign: "start",
                  fontSize: "1.5rem",
                }}
              >
                <b>Superior</b>
              </div>
              <div
                className="row mt-3"
                style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
              >
                <img
                  src={double}
                  alt="double"
                  style={{
                    maxHeight: "500px",
                    borderRadius: "2.5%",
                  }}
                ></img>
              </div>
            </div>
            <div
              className="col-3"
              style={{ textAlign: "start", padding: "1rem" }}
            >
              <div className="row">
                <p>
                  <b>Room Detail</b>
                </p>
                <p>40m</p>
                <p>2 guest</p>
                <hr
                  style={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <div className="row">
                <p>
                  <b>Room Feature</b>
                </p>
                <p>40m</p>
                <p>2 guest</p>
                <hr
                  style={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <div className="row">
                <p>
                  <b>Room Facility</b>
                </p>
                <p>40m</p>
                <p>2 guest</p>
                <hr
                  style={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <div className="row">
                <p>
                  <b>About Room</b>
                </p>
                <p>40m</p>
                <p>2 guest</p>
                <hr
                  style={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </div>
              <div
                className="row"
                style={{
                  justifyContent: "center",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                  <span style={{ color: "red" }}>Rp</span> 1.200.000
                  <span style={{ fontSize: "0.75rem" }}>/ room / nights</span>
                </p>
                <Button variant="danger" style={{ width: "100%" }}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default RoomDetail;
