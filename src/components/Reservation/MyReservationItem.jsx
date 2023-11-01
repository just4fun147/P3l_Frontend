import Button from "react-bootstrap/Button";
const MyReservationItem = (props) => {
  return (
    <>
      <div
        className="container"
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href = `/my-reservation/p/${props.id}`;
        }}
      >
        <div className="row" style={{ width: "100%", textAlign: "start" }}>
          <div className="col-9">
            <b>{props.start}</b>
            <p style={{ marginBottom: "0" }}>{props.end}</p>
            <p>
              Adult : {props.adult} | Child : {props.child}
            </p>
          </div>
          <div className="col-3">
            {props.identifier == "0" || props.identifier == "3" ? (
              <>
                <Button style={{ width: "100%" }} href="/my-bill">
                  Cancel
                </Button>
              </>
            ) : (
              <></>
            )}
            {props.identifier == "3" || props.identifier == "4" ? (
              <>
                <Button
                  style={{ width: "100%", marginTop: "1rem" }}
                  href="/my-bill"
                >
                  Bill
                </Button>
              </>
            ) : (
              <></>
            )}
            {props.identifier == "4" ? (
              <>
                <Button
                  style={{ width: "100%", marginTop: "1rem" }}
                  href="/my-receipt"
                >
                  Receipt
                </Button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MyReservationItem;
