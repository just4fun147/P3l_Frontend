import logo from ".././assets/logo.png";

const Register = () => {
  return (
    <>
      <div style={{ padding: "2% 5% 0 5%" }}>
        <div className="row mb-5 d-flex ">
          <div
            className="col-md-7"
            style={{
              padding: "0",
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              height: "50%",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "825px",
                height: "890px",
                flexShrink: "0",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            className="col-md-5 d-flex"
            style={{
              backgroundColor: "#313131",
              padding: "2% ",
            }}
          >
            <div style={{ width: "100%" }}>
              <h5 className="mb-2" style={{ color: "white" }}>
                Registration
              </h5>
              <p style={{ textAlign: "left", color: "white" }}>Full Name</p>
              <input
                type="text"
                placeholder="Markus Libert"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>
                Residential Identity
              </p>
              <input
                type="text"
                placeholder="33022123213122"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>Email</p>
              <input
                type="text"
                placeholder="gmail@gmail.com"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>Password</p>
              <input
                type="text"
                placeholder="Password"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>Address</p>
              <input
                type="text"
                placeholder="Garuda Street 34, Yogyakarta"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>Phone Number</p>
              <input
                type="text"
                placeholder="081xxxxxxx"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>Tanggal Lahir</p>
              <input
                type="date"
                placeholder="Email"
                className="form-control mb-3"
                style={{
                  width: "100%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "5px",
                }}
              ></input>
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    textAlign: "left",
                    color: "white",
                    opacity: "0.6",
                    fontSize: "0.75rem",
                  }}
                >
                  Already have account?
                </p>
              </a>
              <button
                className="btn btn-primary rounded-pill mb-1"
                name="login"
                style={{
                  width: "20%",
                  minWidth: "100px",
                  backgroundColor: "#0C1738",
                  fontFamily: "Ubuntu",
                  fontWeight: "bold",
                  right: "0",
                  marginLeft: "75%",
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
