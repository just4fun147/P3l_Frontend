import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import superior from "../../assets/superior.jpg";
import double from "../../assets/double.jpg";
import React, { useEffect, useState } from "react";

const AddOnCard = (props) => {
  const [total, setTotal] = useState(0);

  return (
    <div
      className="shadow bg-white rounded"
      style={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
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
          </div>
          <div
            className="col-2 border-start"
            style={{
              marginTop: "auto",
              paddingRight: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <div className="row" style={{ textAlign: "end" }}>
              <h4>
                Rp{" "}
                {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h4>
            </div>
            <div className="row" style={{ justifyContent: "end" }}>
              {total > 0 ? (
                <Button
                  variant="danger"
                  style={{
                    color: "#0C1738",
                    width: "fit-content",
                  }}
                  onClick={() => {
                    setTotal(total - 1);
                  }}
                >
                  <b>-</b>
                </Button>
              ) : (
                <Button
                  variant="danger"
                  style={{
                    color: "#0C1738",
                    width: "fit-content",
                  }}
                  disabled
                >
                  <b>-</b>
                </Button>
              )}

              <Button
                style={{
                  backgroundColor: "transparent",
                  color: "#0C1738",
                  width: "3rem",
                  marginLeft: "1rem",
                  textAlign: "center",
                }}
              >
                <b style={{ textAlign: "center" }}>{total}</b>
              </Button>
              <Button
                style={{
                  backgroundColor: "#FBBC05",
                  color: "#0C1738",
                  width: "fit-content",
                  marginLeft: "1rem",
                }}
                onClick={() => {
                  setTotal(total + 1);
                }}
              >
                <b>+</b>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddOnCard;
