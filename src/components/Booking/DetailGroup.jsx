const Detail = (props) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "normal",
        }}
      >
        <div
          style={{
            flex: "1 1 0%",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <p style={{ margin: "0" }}>
            ({props.total}x{props.night}) {props.text}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <p style={{ margin: "0" }}>{props.price.toString()}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
