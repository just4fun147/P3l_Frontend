import Circular from "../../assets/circular.gif";
const LoadingButton = () => {
  return (
    <>
      <button
        className="btn btn-primary rounded-pill mb-2"
        name="login"
        disabled
        style={{
          width: "50%",
          minWidth: "250px",
          backgroundColor: "#0C1738",
          fontFamily: "Ubuntu",
          fontWeight: "bold",
        }}
      >
        <img
          src={Circular}
          alt="loading..."
          style={{ maxHeight: "1rem" }}
        ></img>
      </button>
    </>
  );
};

export default LoadingButton;
