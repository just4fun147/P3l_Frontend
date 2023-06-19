import logo from ".././assets/apple_logo_10-t2.jpg";

const Login = () => {
  return (
    <>
      <div style={{ padding: "2% 5% 0 5%" }}>
        <div className="row mb-5 d-flex ">
          <div className="col-md-7" style={{ padding: "0" }}>
            <img src={logo} alt="Logo" style={{ width: "100%" }}></img>
          </div>
          <div
            className="col-md-5 d-flex  justify-content-center"
            style={{
              backgroundColor: "#313131",
              padding: "10% 5% 0 5%",
            }}
          >
            <div style={{ width: "100%" }}>
              <p style={{ color: "white" }}>Selamat Datang</p>
              <p style={{ color: "white" }}>Silahkan Masuk Untuk Melanjutkan</p>
              <input
                type="text"
                placeholder="Email"
                className="form-control rounded-pill"
                style={{
                  width: "50%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  textAlign: "center",
                }}
              ></input>
              <input
                type="text"
                placeholder="Password"
                className="form-control rounded-pill mt-2"
                style={{
                  width: "50%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#D9D9D9",
                  textAlign: "center",
                }}
              ></input>
              <div className="mt-2">
                <a
                  href="/signup"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      width: "50%",
                      marginLeft: "15%",
                      color: "white",
                      opacity: "0.6",
                      fontSize: "0.75rem",
                    }}
                  >
                    Didn't have account?
                  </p>
                </a>
              </div>
              <button
                className="btn btn-primary rounded-pill mb-2"
                name="login"
                style={{
                  width: "50%",
                  minWidth: "250px",
                  backgroundColor: "#0C1738",
                  fontFamily: "Ubuntu",
                  fontWeight: "bold",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
