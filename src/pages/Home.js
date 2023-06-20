const Home = () => {
  return (
    <>
      <div
        className="mt-3"
        // style={{ backgroundColor: "red" }}
      >
        <div className=" row">
          <div
            className="col-md-7"
            // style={{ backgroundColor: "blue" }}
          >
            <div className="row mt-5">
              <div
                className="col-md-5"
                // style={{ backgroundColor: "red" }}
              ></div>
              <div className="col-md-6">
                <h1 style={{ textAlign: "left" }}>Welcome NAMA👋!</h1>
                <h3 style={{ textAlign: "right", marginRight: "10%" }}>
                  ---Tagline---
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-5" style={{ backgroundColor: "yellow" }}>
            <p>Gambar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
