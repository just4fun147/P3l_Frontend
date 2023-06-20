import { data } from "autoprefixer";
import axios from "axios";
import Cookies from "universal-cookie";

const headers = {
  "Content-Type": "application/json",
  apikey: "1234567890",
};

export const auth = async (email, password) => {
  axios
    .post(
      process.env.REACT_APP_BASEURL + "logins",
      {
        email: email,
        password: password,
        user_agent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
      },
      {
        headers: headers,
      }
    )
    .then((response) => {
      const cookies = new Cookies();
      cookies.set("token", response.data.OUT_DATA.token, { path: "/" });
      console.log(cookies.get("token"));
      window.location = "/home";
    })
    .catch((error) => {
      alert(error.response.data.OUT_STAT);
    });
};

export const check = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (token === undefined || token === null) {
    window.location = "/login";
  }
};

export const logged = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  if (token !== undefined || token !== null) {
    window.location = "/home";
  }
};

export const token = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  console.log(token);
  return token;
};
