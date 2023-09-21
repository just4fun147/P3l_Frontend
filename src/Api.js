import axios from "axios";
import Cookies from "universal-cookie";
import { atom, selector, useRecoilState, useSetRecoilState } from "recoil";
import { authenticated } from "./store";
import {
  browserName,
  osName,
  deviceType,
  osVersion,
} from "react-device-detect";

const headers = {
  "Content-Type": "application/json",
  apikey: "1234567890",
};

const cookies = new Cookies();
export const headersAuth = {
  "Content-Type": "application/json",
  apikey: "1234567890",
  Authorization: "Bearer " + cookies.get("token"),
};
function DoLogin(status) {
  const setAuth = useSetRecoilState(authenticated);
  setAuth((check) => status);
}
export const auth = async (email, password) => {
  axios
    .post(
      process.env.REACT_APP_BASEURL + "logins",
      {
        email: email,
        password: password,
        user_agent:
          browserName + " " + osName + " " + osVersion + " " + deviceType,
      },
      {
        headers: headers,
      }
    )
    .then((response) => {
      cookies.set("token", response.data.OUT_DATA.token);
      cookies.set("name", response.data.OUT_DATA.name);
      window.location = "/home";
    })
    .catch((error) => {
      // alert(error.response.data.OUT_STAT);
      // console.log(error.response.data.OUT_STAT);
    });
};

export const authUser = async () => {
  axios
    .post(
      process.env.REACT_APP_BASEURL + "authUser",
      {},
      {
        headers: headersAuth,
      }
    )
    .then((response) => {
      const temp = "abc";
      // console.log(response.data.OUT_DATA[0].name);
      console.log(temp);
      return temp;
    })
    .catch((error) => {
      // alert(error.response.data.OUT_STAT);
      console.log(error.response.data.OUT_STAT);
    });
};

export const check = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (token === undefined || token === null) {
    window.location = "/login";
  }
};

export const logout = () => {
  console.log(cookies.get("token"));
  axios
    .post(
      process.env.REACT_APP_BASEURL + "logouts",
      {
        user_agent:
          browserName + " " + osName + " " + osVersion + " " + deviceType,
      },
      {
        headers: headersAuth,
      }
    )
    .then((response) => {
      cookies.remove("token");
      cookies.remove("name");
      window.location = "/";
    })
    .catch((error) => {
      // alert(error.response.data.OUT_STAT);
      console.log(error.response.data.OUT_STAT);
    });
};

export const token = () => {
  const token = cookies.get("token");
  // console.log(token);
  return token;
};

export const name = () => {
  const name = cookies.get("name");
  // console.log(token);
  return name;
};
