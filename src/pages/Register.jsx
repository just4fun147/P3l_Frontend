import logo from ".././assets/apple_logo_10-t2.jpg";

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
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ minWidth: "100%", flexShrink: "0", minHeight: "100%" }}
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
                Registrasi
              </h5>
              <p style={{ textAlign: "left", color: "white" }}>Nama Lengkap</p>
              <input
                type="text"
                placeholder="Nama Lengkap"
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
              <p style={{ textAlign: "left", color: "white" }}>No Handphone</p>
              <input
                type="text"
                placeholder="No Handphone"
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
