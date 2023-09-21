import image1 from "../assets/fhd.png";
import { name } from "../Api";
import React, { useState } from "react";

const Home = () => {
  const [names, setNames] = useState(name());
  return (
    <>
      <div className="mt-3">
        <div className=" row">
          <div className="col-md-7" style={{ backgroundColor: "#fbfbfb" }}>
            <div className="row mt-5">
              <div
                className="col-md-5"
                // style={{ backgroundColor: "red" }}
              ></div>
              <div className="col-md-7">
                <h1 style={{ textAlign: "right", marginRight: "10%" }}>
                  Welcome {names}!
                </h1>
                <h3 style={{ textAlign: "right", marginRight: "10%" }}>
                  ---Tagline---
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-5" style={{ backgroundColor: "yellow" }}>
            <p>Gambar</p>
            {/* <img src={image1} alt="Image Home"></img> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
