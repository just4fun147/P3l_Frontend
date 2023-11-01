import logo from ".././assets/logo.png";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import {
  browserName,
  osName,
  deviceType,
  osVersion,
} from "react-device-detect";
import LoadingButton from "../components/common/LoadingButton";
import { toast, ToastContainer } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const headers = {
    "Content-Type": "application/json",
    apikey: "1234567890",
  };
  const auth = async () => {
    setLoading(true);
    axios
      .post(
        process.env.REACT_APP_BASEURL + "users/reset",
        {
          email: email,
          full_name: fullName,
          phone_number: phoneNumber,
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
        setTimeout((window.location.href = "/login"), 5000);
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
                width: "100%",
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
              <p style={{ color: "white" }}>Please Authenticate Yourself</p>
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
                type="text"
                placeholder="Full Name"
                className="form-control rounded-pill"
                onInput={(e) => setFullName(e.target.value)}
                style={{
                  width: "50%",
                  minWidth: "250px",
                  display: "block",
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginTop: "1rem",
                  backgroundColor: "#D9D9D9",
                  textAlign: "center",
                }}
              ></input>
              <input
                type="text"
                placeholder="Phone Number"
                className="form-control rounded-pill"
                onInput={(e) => setPhoneNumber(e.target.value)}
                style={{
                  width: "50%",
                  minWidth: "250px",
                  marginTop: "1rem",
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
              {loading ? (
                <>
                  <LoadingButton />
                </>
              ) : (
                <>
                  <button
                    onClick={() => auth()}
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
                    Reset Password
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

export default ResetPassword;
