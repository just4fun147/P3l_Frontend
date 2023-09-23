import image1 from "../assets/fhd.png";
import { name } from "../Api";
import React, { useState } from "react";
import SearchCard from "../components/common/SearchCard";
import RoomCard from "../components/common/RoomCard";

const Home = () => {
  const [names, setNames] = useState(name());
  return (
    <>
      <div className="mt-3">
        <div className=" mb-5" style={{ width: "100%" }}>
          <SearchCard />
        </div>
        <div className="mb-5">
          <RoomCard />
        </div>
      </div>
    </>
  );
};

export default Home;
