import React, { useState, useEffect } from "react";
import SearchCardSearch from "../components/common/SearchCardSearch";
import RoomCard from "../components/common/RoomCard";
import { useParams } from "react-router-dom";
import { headers } from "../Api";
import axios from "axios";
import Loading from "../components/Loading";
import { toast, ToastContainer } from "react-toastify";
const Home = (props) => {
  const [date_start, setDateStart] = useState(useParams().date);
  const [night, setNight] = useState(useParams().night);
  const [adult, setAdult] = useState(useParams().adult);
  const [child, setChild] = useState(useParams().child);
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const [endDate, setEndDate] = useState();

  const getRoom = () => {
    const temp = new Date(document.getElementById("date-input").value);
    const endDt = new Date(
      new Date(temp).setDate(
        temp.getDate() + parseInt(document.getElementById("night").value)
      )
    );
    setEndDate(
      new Date(
        new Date(temp).setDate(
          temp.getDate() + parseInt(document.getElementById("night").value)
        )
      )
    );
    return new Promise((resolve) => {
      axios
        .post(
          process.env.REACT_APP_BASEURL + "rooms/avail",
          {
            start_date: date_start,
            end_date: endDt,
            adult: adult,
            child: child,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          setRoom(response.data.OUT_DATA);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    getRoom();
  }, []);
  return (
    <>
      <div className="mt-3">
        <div className=" mb-5" style={{ width: "100%" }}>
          <SearchCardSearch
            date={date_start}
            night={night}
            adult={adult}
            child={child}
          />
        </div>
        <div className="mb-5">
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              {room.map((r, index) => (
                <>
                  {r.total > 0 ? (
                    <RoomCard
                      name={r.type_name}
                      price={r.price}
                      normal={r.normal_price}
                      uid={r.uuid}
                      start={date_start}
                      end={endDate.toISOString().split("T")[0]}
                      child={child}
                      adult={adult}
                      night={night}
                    />
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
