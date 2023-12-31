const Summary = (props) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
          <p style={{ margin: "0" }}>{props.text}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <p style={{ margin: "0" }}>
            Rp {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
