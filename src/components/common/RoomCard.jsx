import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import superior from "../../assets/superior.jpg";
import double from "../../assets/double.jpg";
import { FaWifi, FaTv, FaBed, FaShower } from "react-icons/fa";

const RoomCard = (props) => {
  return (
    <div
      className="shadow bg-white rounded mb-3"
      style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}
    >
      <Card style={{ borderRadius: "10px", paddingRight: "3%" }}>
        <div className="row">
          <div className="col-3">
            <img
              src={superior}
              alt="foto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px 0 0 10px",
              }}
            ></img>
          </div>
          <div
            className="col-7 border-end"
            style={{
              textAlign: "start",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <div className="row">
              <p style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
                {props.name}
              </p>
            </div>
            <div className="row" style={{ fontWeight: "normal" }}>
              <div className="col-1" style={{ textAlign: "center" }}>
                <FaWifi style={{ fontSize: "2rem" }} /> Wifi
              </div>
              <div className="col-1" style={{ textAlign: "center" }}>
                <FaTv style={{ fontSize: "2rem" }} />
                Tv
              </div>
              <div className="col-1" style={{ textAlign: "center" }}>
                <FaBed style={{ fontSize: "2rem" }} /> Bed
              </div>
              <div
                className="col"
                style={{ maxWidth: "100px", textAlign: "center" }}
              >
                <FaShower style={{ fontSize: "2rem" }} /> Shower
              </div>
            </div>
          </div>
          <div
            className="col-2 border-start"
            style={{
              marginTop: "auto",
              paddingRight: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <div
              className="row"
              style={{
                textAlign: "end",
                textDecoration: "line-through",
                opacity: "0.75",
              }}
            >
              {props.normal != 0 ? (
                <>
                  <h5>{props.normal}</h5>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="row" style={{ textAlign: "end" }}>
              <h4>{props.price}</h4>
            </div>
            <div className="row" style={{ justifyContent: "end" }}>
              <Button
                onClick={() => {
                  window.location.href = `/room-detail/${props.uid}/${props.start}/${props.end}/${props.adult}/${props.child}/${props.night}`;
                }}
                style={{
                  backgroundColor: "#FBBC05",
                  color: "#0C1738",
                  width: "fit-content",
                }}
              >
                <b>Select Room</b>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RoomCard;
