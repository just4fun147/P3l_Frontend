import Card from "react-bootstrap/Card";
import {
  FaUserGroup,
  FaCalendar,
  FaMoon,
  FaChild,
  FaMinus,
  FaPlus,
} from "react-icons/fa6";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { headersAuth } from "../../Api";
import Cookies from "universal-cookie";

const SearchCard = () => {
  // date
  const now = new Date();
  const [endDate, setEndDate] = useState(
    new Date(new Date(now).setDate(now.getDate() + 1)).toDateString()
  );
  const [startDate, setStartDate] = useState(now);
  const [night, setNight] = useState(1);
  const handleDateChange = (e) => {
    setNight(document.getElementById("night").value);
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
    if (adult != 0) {
    }
    document.getElementById("date-input").valueAsDate = startDate;
  }, []);

  // person
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  return (
    <div style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}>
      <Card style={{ padding: "1rem" }}>
        <div className="row">
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
        {/* seaction */}
        <div className="row mt-3">
          <div className="col-4">
            <div className="row">
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <FaUserGroup style={{ marginRight: "5px" }} />
                Adult
              </p>
            </div>
            <div
              className="row mt-3"
              style={{ position: "relative", justifyContent: "center" }}
            >
              <div className="col-2">
                {adult > 0 ? (
                  <FaMinus
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setAdult(adult - 1);
                    }}
                  />
                ) : (
                  <FaMinus />
                )}
              </div>
              <div className="col-2">
                <Card style={{ width: "fit-content", padding: "5px" }}>
                  {adult}
                </Card>
              </div>
              <div className="col-2">
                {adult < 30 ? (
                  <FaPlus
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setAdult(adult + 1);
                    }}
                  />
                ) : (
                  <FaPlus />
                )}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <p style={{ textAlign: "left", marginBottom: "0px" }}>
                <FaChild style={{ marginRight: "5px" }} />
                Child
              </p>
            </div>
            <div
              className="row mt-3"
              style={{ position: "relative", justifyContent: "center" }}
            >
              <div className="col-2">
                {child > 0 ? (
                  <FaMinus
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setChild(child - 1);
                    }}
                  />
                ) : (
                  <FaMinus />
                )}
              </div>
              <div className="col-2">
                <Card style={{ width: "fit-content", padding: "5px" }}>
                  {child}
                </Card>
              </div>
              <div className="col-2">
                {child < 30 ? (
                  <FaPlus
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setChild(child + 1);
                    }}
                  />
                ) : (
                  <FaPlus />
                )}
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="mt-3">
              <Button
                onClick={() => {
                  window.location.href = `/search/date_start=${startDate}&night=${night}&adult=${adult}&child=${child}`;
                }}
                style={{
                  backgroundColor: "#FBBC05",
                  color: "#0C1738",
                  width: "100%",
                }}
              >
                <b>Search</b>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SearchCard;
