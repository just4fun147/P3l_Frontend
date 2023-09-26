import logo from ".././assets/apple_logo_10-t2.jpg";
import { headersAuth } from "../Api";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import blank from "../assets/blankUserImage.jpg";
import Loading from "../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const [users, setUser] = useState();
  const [images, setImages] = useState();
  const [loaded, setLoades] = useState(true);
  const [waiting, setWaiting] = useState(true);
  const base = process.env.REACT_APP_BASEIMGUSERURL;
  const [namalengkap, setNamaLengkap] = useState("Nama Lengkap");
  const [photo, setPhotos] = useState("");
  const [email, setEmail] = useState("Email");
  const [ktp, setKtp] = useState("ktp");
  const [noHp, setNoHp] = useState("081232312312");
  const [alamat, setAlamat] = useState("alamatnya");
  const [tgl_lahir, setTgl_Lahir] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // const UpdateProfile = (
  //   name,
  //   full_name,
  //   domisili,
  //   tgl_lahir,
  //   email,
  //   no_handphone,
  //   password,
  //   pekerjaan,
  //   sosmed,
  //   image
  // ) => {
  //   axios
  //     .post(
  //       process.env.REACT_APP_EDITUSER,
  //       {
  //         name: name,
  //         full_name: full_name,
  //         domisili: domisili,
  //         tgl_lahir: tgl_lahir,
  //         email: email,
  //         no_handphone: no_handphone,
  //         password: password,
  //         pekerjaan: pekerjaan,
  //         sosmed: sosmed,
  //         image: image,
  //       },
  //       {
  //         headers: headersAuth,
  //       }
  //     )
  //     .then((response) => {
  //       toast.success("Update Profile Success!", {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     })
  //     .catch((error) => {
  //       toast.error("Update Profile Failed!", {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     });
  // };

  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);

  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  // const getUser = () => {
  //   return new Promise((resolve) => {
  //     axios
  //       .post(
  //         process.env.REACT_APP_AUTHUSER,
  //         {},
  //         {
  //           headers: headersAuth,
  //         }
  //       )
  //       .then((response) => {
  //         setUser(response.data.OUT_DATA[0]);
  //         setWaiting(true);
  //       })
  //       .catch((error) => {});
  //   });
  // };
  // useEffect(() => {
  //   if (waiting) {
  //     if (users["image"]) {
  //       const temp =
  //         process.env.REACT_APP_BASEIMGUSERURL +
  //         "/public/storage/" +
  //         users["image"];
  //       setImages(temp);
  //     }
  //     setNamaLengkap(users["full_name"]);
  //     setPanggilan(users["name"]);
  //     setEmail(users["email"]);
  //     setDomisili(users["domisili"]);
  //     setTgl_Lahir(users["tgl_lahir"]);
  //     setInstagram(users["sosmed"]);
  //     setNoHp(users["no_telp"]);
  //     setProfesi(users["pekerjaan"]);
  //     setImages(
  //       process.env.REACT_APP_BASEIMGUSERURL +
  //         "/public/storage/" +
  //         users["image"]
  //     );
  //     setLoades(true);
  //   } else {
  //     const temp = getUser();
  //   }
  // }, [waiting]);
  // const getBase64 = (file) => {
  //   return new Promise((resolve) => {
  //     let fileInfo;
  //     let baseURL = "";
  //     let reader = new FileReader();

  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       baseURL = reader.result;
  //       resolve(baseURL);
  //     };
  //   });
  // };
  // const onSelectFile = async (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);
  //     return;
  //   }

  //   setSelectedFile(e.target.files[0]);
  //   var file = e.target.files[0];
  //   const b64 = await getBase64(file);
  //   setPhotos(b64);
  // };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure The Data Is Correct?</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginLeft: "auto" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ marginLeft: "1rem" }} onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Body>
      </Modal>
      {loaded ? (
        <div className="container mt-3">
          <Card className="mb-3">
            <Card.Header
              style={{ backgroundColor: "#0C1738", color: "whitesmoke" }}
            >
              Profile
            </Card.Header>
            <Card.Body>
              <div className="row mt-4">
                <div className="col-md-4 border-end border-secondary d-flex align-items-center justify-content-center">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5 align-me">
                    <span>
                      <div>
                        {selectedFile && (
                          <img
                            src={preview}
                            style={{ clipPath: "circle()", width: "300px" }}
                          />
                        )}
                        {!selectedFile ? (
                          <div>
                            {images ? (
                              <img
                                src={images}
                                style={{
                                  clipPath: "circle()",
                                  width: "60%",
                                  minWidth: "200px",
                                }}
                              />
                            ) : (
                              <img
                                src={blank}
                                style={{
                                  clipPath: "circle()",
                                  width: "60%",
                                  minWidth: "200px",
                                }}
                              />
                            )}
                          </div>
                        ) : (
                          <></>
                        )}
                        {/* <input
                          className="mt-2"
                          type="file"
                          onChange={onSelectFile}
                          style={{ marginLeft: "15%" }}
                        /> */}
                      </div>
                    </span>
                    {namalengkap ? (
                      <span className="font-weight-bold mt-2">
                        {namalengkap}
                      </span>
                    ) : (
                      <span className="font-weight-bold mt-2">Full Name</span>
                    )}
                    {email ? (
                      <span className="text-black-50">{email}</span>
                    ) : (
                      <span className="font-weight-bold mt-2">Email</span>
                    )}
                    <span></span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div style={{ width: "100%" }}>
                    <p style={{ textAlign: "left" }}>Full Name</p>
                    <input
                      type="text"
                      onInput={(e) => setNamaLengkap(e.target.value)}
                      value={namalengkap}
                      className="form-control mb-3"
                      style={{
                        width: "100%",
                        minWidth: "250px",
                        display: "block",
                        marginRight: "auto",
                        marginLeft: "auto",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "5px",
                      }}
                    ></input>
                    <p style={{ textAlign: "left" }}>Residential Identity</p>
                    <input
                      type="text"
                      onInput={(e) => setKtp(e.target.value)}
                      value={ktp}
                      className="form-control mb-3"
                      style={{
                        width: "100%",
                        minWidth: "250px",
                        display: "block",
                        marginRight: "auto",
                        marginLeft: "auto",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "5px",
                      }}
                    ></input>
                    <p style={{ textAlign: "left" }}>Email</p>
                    <input
                      type="text"
                      onInput={(e) => setEmail(e.target.value)}
                      value={email}
                      className="form-control mb-3"
                      style={{
                        width: "100%",
                        minWidth: "250px",
                        display: "block",
                        marginRight: "auto",
                        marginLeft: "auto",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "5px",
                      }}
                    ></input>
                    <p style={{ textAlign: "left" }}>Address</p>
                    <input
                      type="text"
                      value={alamat}
                      onInput={(e) => setAlamat(e.target.value)}
                      placeholder="Alamatnya"
                      className="form-control mb-3"
                      style={{
                        width: "100%",
                        minWidth: "250px",
                        display: "block",
                        marginRight: "auto",
                        marginLeft: "auto",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "5px",
                      }}
                    ></input>
                    <p style={{ textAlign: "left" }}>Phone Number</p>
                    <input
                      type="number"
                      value={noHp}
                      onInput={(e) => setNoHp(e.target.value)}
                      placeholder="081xxxxx"
                      className="form-control mb-3"
                      style={{
                        width: "100%",
                        minWidth: "250px",
                        display: "block",
                        marginRight: "auto",
                        marginLeft: "auto",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "5px",
                      }}
                    ></input>
                    <p style={{ textAlign: "left" }}>Birth Of Date</p>
                    <input
                      type="date"
                      onInput={(e) => setTgl_Lahir(e.target.value)}
                      value={tgl_lahir}
                      className="form-control mb-3"
                      style={{
                        width: "100%",
                        minWidth: "250px",
                        display: "block",
                        marginRight: "auto",
                        marginLeft: "auto",
                        backgroundColor: "#D9D9D9",
                        borderRadius: "5px",
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <button
                className="rounded-pill mb-1"
                name="login"
                onClick={
                  handleShow
                  // UpdateProfile(
                  //   panggilan,
                  //   namalengkap,
                  //   domisili,
                  //   tgl_lahir,
                  //   email,
                  //   noHp,
                  //   password,
                  //   profesi,
                  //   instagram,
                  //   photo
                  // );
                }
                style={{
                  width: "5%",
                  minWidth: "75px",
                  minHeight: "40px",
                  backgroundColor: "#FBBC05",
                  color: "#0C1738",
                  fontFamily: "Ubuntu",
                  fontWeight: "bold",
                  right: "0",
                  marginLeft: "85%",
                  border: "0",
                }}
              >
                Save
              </button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <>
          <Loading />
          <p>loading</p>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Profile;
