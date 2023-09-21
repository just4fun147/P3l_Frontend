import logo from "../../assets/fhdtrans.png";
import superior from "../../assets/superior.jpg";
import double from "../../assets/double.jpg";
import ballroom from "../../assets/ballroom.jpg";
import CarouselHome from "../../components/CarouselHome";
import "./Landingpage.css";
import SearchCard from "../../components/common/SearchCard";
const LandingPage = () => {
  return (
    <>
      <div className="container mb-5 mt-5" style={{ borderRadius: "25px" }}>
        <CarouselHome style={{ borderRadius: "25px" }} />
      </div>
      <div className="container mt-5 mb-5" style={{ width: "75%" }}>
        <SearchCard />
      </div>
      <p
        className="mb-5"
        style={{ fontWeight: "bold", fontSize: "2rem", color: "black" }}
      >
        Our Service
      </p>
      <div
        class="row  mr-5"
        style={{
          justifyContent: "center",
          backgroundColor: "none",
          width: "100%",
          padding: "0 5% 0 5%",
        }}
      >
        <div className="col">
          <a href="#" style={{ textDecoration: "none" }}>
            <div
              className="card shadow-lg col ml-3 mb-3"
              style={{
                padding: "50px",
                borderRadius: "25px",
                width: "100%",
                minWidth: "300px",
              }}
            >
              <div>
                <div className="">
                  <img
                    src={superior}
                    alt=""
                    srcset=""
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      backgroundColor: "white",
                      height: "224px",
                    }}
                  ></img>
                </div>
              </div>
              <h5 className="fw-bold mt-4">Personal Reservation</h5>
              <div
                style={{
                  textAlign: "left",
                }}
              ></div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" style={{ textDecoration: "none" }}>
            <div
              className="card shadow-lg col ml-3 mb-3"
              style={{
                padding: "50px",
                borderRadius: "25px",
                width: "100%",
                minWidth: "300px",
              }}
            >
              <div>
                <div className="">
                  <img
                    src={double}
                    alt=""
                    srcset=""
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      backgroundColor: "white",
                      height: "224px",
                    }}
                  ></img>
                </div>
              </div>
              <h5 className="fw-bold mt-4">Group Reservation</h5>
              <div
                style={{
                  textAlign: "left",
                }}
              ></div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" style={{ textDecoration: "none" }}>
            <div
              className="card shadow-lg col ml-3 mb-3"
              style={{
                padding: "50px",
                borderRadius: "25px",
                width: "100%",
                minWidth: "300px",
              }}
            >
              <div>
                <div className="">
                  <img
                    src={ballroom}
                    alt=""
                    srcset=""
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      backgroundColor: "white",
                      height: "224px",
                    }}
                  ></img>
                </div>
              </div>
              <h5 className="fw-bold mt-4">Meeting Room</h5>
              <div
                style={{
                  textAlign: "left",
                }}
              ></div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
