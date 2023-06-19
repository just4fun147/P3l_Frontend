import logo from ".././assets/apple_logo_10-t2.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="mb-5">
        <img
          src={logo}
          alt="logo"
          style={{ width: "100%", overflow: "hidden" }}
        ></img>
      </div>
      <p
        className="mb-5"
        style={{ fontWeight: "bold", fontSize: "2rem", color: "black" }}
      >
        Layanan Kami
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
                    src={logo}
                    alt=""
                    srcset=""
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      backgroundColor: "white",
                    }}
                  ></img>
                </div>
              </div>
              <h5 className="fw-bold mt-4">Event</h5>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <p style={{ alignText: "right" }}>testing</p>
              </div>
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
                    src={logo}
                    alt=""
                    srcset=""
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      backgroundColor: "white",
                    }}
                  ></img>
                </div>
              </div>
              <h5 className="fw-bold mt-4">Event</h5>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <p style={{ alignText: "right" }}>testing</p>
              </div>
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
                    src={logo}
                    alt=""
                    srcset=""
                    style={{
                      width: "100%",
                      borderRadius: "25px",
                      backgroundColor: "white",
                    }}
                  ></img>
                </div>
              </div>
              <h5 className="fw-bold mt-4">Event</h5>
              <div
                style={{
                  textAlign: "left",
                }}
              >
                <p style={{ alignText: "right" }}>testing</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
