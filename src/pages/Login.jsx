import logo from ".././assets/logo.png";
import { auth } from "../Api";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div style={{ padding: "2% 5% 0 5%", width: "100%" }}>
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
                height: "440px",
                flexShrink: "0",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            className="col-md-5 d-flex  justify-content-center"
            style={{
              backgroundColor: "#313131",
              padding: "5% 5% 0 5%",
            }}
          >
            <div className="mb-5" style={{ width: "100%" }}>
              <p style={{ color: "white" }}>Welcome</p>
              <p style={{ color: "white" }}>Please Login To Continue</p>
              <input
                type="text"
                placeholder="Email"
                className="form-control rounded-pill"
                onInput={(e) => setEmail(e.target.value)}
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
                type="password"
                placeholder="Password"
                className="form-control rounded-pill mt-2"
                onInput={(e) => setPassword(e.target.value)}
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
                onClick={() => auth(email, password)}
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
