import Card from "react-bootstrap/Card";
import { FaLocationDot, FaCalendar, FaMoon } from "react-icons/fa6";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState, useEffect } from "react";

const SearchCard = () => {
  const now = new Date();
  const [endDate, setEndDate] = useState(
    new Date(new Date(now).setDate(now.getDate() + 1)).toDateString()
  );
  const [startDate, setStartDate] = useState(now);

  const handleDateChange = (e) => {
    const temp = new Date(document.getElementById("date-input").value);
    setEndDate(
      new Date(
        new Date(temp).setDate(
          temp.getDate() + parseInt(document.getElementById("night").value)
        )
      ).toDateString()
    );
    setStartDate(document.getElementById("date-input").value);
  };
  useEffect(() => {
    document.getElementById("date-input").valueAsDate = startDate;
  }, []);

  return (
    <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}>
      <Card style={{ padding: "1rem" }}>
        <p style={{ textAlign: "left", marginBottom: "0px" }}>
          City or Hotel Name
        </p>
        <div style={{ position: "relative" }}>
          <FaLocationDot
            style={{
              height: "1.5rem",
              width: "1.5rem",
              padding: "4px",
              position: "absolute",
              boxSizing: "border-box",
              top: "50%",
              left: "2px",
              transform: "translateY(-50%)",
            }}
          />
          <input
            style={{
              width: "100%",
              border: "solid 1px #BFC9D9",
              borderRadius: "5px",
              height: "2.5rem",
              paddingLeft: "1.5rem",
            }}
          ></input>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <p style={{ textAlign: "left", marginBottom: "0px" }}>Check-in</p>
            <div className="mt-3" style={{ position: "relative" }}>
              <FaCalendar
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  padding: "4px",
                  position: "absolute",
                  boxSizing: "border-box",
                  top: "50%",
                  left: "2px",
                  transform: "translateY(-50%)",
                }}
              />
              <input
                className="date-input"
                id="date-input"
                style={{
                  width: "100%",
                  border: "solid 1px #BFC9D9",
                  borderRadius: "5px",
                  height: "2.5rem",
                  paddingLeft: "1.5rem",
                }}
                onChange={(e) => handleDateChange(e)}
                type="date"
              ></input>
            </div>
          </div>
          <div className="col-4">
            <p style={{ textAlign: "left", marginBottom: "0px" }}>Duration</p>
            <div className="mt-3" style={{ position: "relative" }}>
              <FaMoon
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                  padding: "4px",
                  position: "absolute",
                  boxSizing: "border-box",
                  top: "50%",
                  left: "2px",
                  transform: "translateY(-50%)",
                }}
              />
              <select
                id="night"
                style={{
                  width: "100%",
                  border: "solid 1px #BFC9D9",
                  borderRadius: "5px",
                  height: "2.5rem",
                  paddingLeft: "2rem",
                }}
                onChange={(e) => handleDateChange(e)}
              >
                <option value="1">1 Night</option>
                <option value="2">2 Night</option>
                <option value="3">3 Night</option>
                <option value="4">4 Night</option>
                <option value="5">5 Night</option>
                <option value="6">6 Night</option>
                <option value="7">7 Night</option>
                <option value="8">8 Night</option>
                <option value="9">9 Night</option>
                <option value="10">10 Night</option>
                <option value="11">11 Night</option>
                <option value="12">12 Night</option>
                <option value="13">13 Night</option>
                <option value="14">14 Night</option>
                <option value="15">15 Night</option>
                <option value="16">16 Night</option>
                <option value="17">17 Night</option>
                <option value="18">18 Night</option>
                <option value="19">19 Night</option>
                <option value="20">20 Night</option>
                <option value="21">21 Night</option>
                <option value="22">22 Night</option>
                <option value="23">23 Night</option>
                <option value="24">24 Night</option>
                <option value="25">25 Night</option>
                <option value="26">26 Night</option>
                <option value="27">27 Night</option>
                <option value="28">28 Night</option>
                <option value="29">29 Night</option>
                <option value="30">30 Night</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <p style={{ textAlign: "left", marginBottom: "0px" }}>Check-out</p>
            <div className="mt-3">
              <p style={{ textAlign: "left" }}>{endDate}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SearchCard;
