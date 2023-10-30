import logo from ".././assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import Circular from "../assets/circular.gif";

const Register = () => {
  const [fullName, setFullName] = useState();
  const [identity, setIdentity] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [birthday, setBirthday] = useState();
  const [loading, setLoading] = useState(false);
  const headers = {
    "Content-Type": "application/json",
    apikey: "1234567890",
  };
  const regist = async () => {
    setLoading(true);
    axios
      .post(
        process.env.REACT_APP_BASEURL + "register",
        {
          email: email,
          password: password,
          full_name: fullName,
          phone_number: phoneNumber,
          identity: identity,
          address: address,
          image: "",
          is_group: false,
          role: "6",
        },
        {
          headers: headers,
        }
      )
      .then((response) => {
        setLoading(false);
        toast.success(response.data.OUT_MESS, {
          position: toast.POSITION.TOP_RIGHT,
        });

        window.location = "/login";
      })
      .catch((error) => {
        toast.error(error.response.data.OUT_MESS, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };
  return (
    <>
      <ToastContainer />

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
                width: "100%",
                height: "75%",
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
                value={fullName}
                onInput={(e) => setFullName(e.target.value)}
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
                value={identity}
                onInput={(e) => setIdentity(e.target.value)}
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
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>Password</p>
              <input
                type="password"
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
                value={password}
                onInput={(e) => setPassword(e.target.value)}
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
                value={address}
                onInput={(e) => setAddress(e.target.value)}
              ></input>
              <p style={{ textAlign: "left", color: "white" }}>Phone Number</p>
              <input
                type="number"
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
                value={phoneNumber}
                onInput={(e) => setPhoneNumber(e.target.value)}
              ></input>
              {/* <p style={{ textAlign: "left", color: "white" }}>Birth Of Date</p>
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
                value={birthday}
                onInput={(e) => setBirthday(e.target.value)}
              ></input> */}
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
              {loading ? (
                <>
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
                    disabled
                  >
                    <img
                      src={Circular}
                      alt="loading..."
                      style={{ maxHeight: "1rem" }}
                    ></img>
                  </button>
                </>
              ) : (
                <>
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
                    onClick={() => {
                      regist();
                    }}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
