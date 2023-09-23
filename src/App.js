import "./App.css";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Authenticated from "./components/middleware/Authenticated";
import AdminAuth from "./components/middleware/AdminAuth";
import FOAuth from "./components/middleware/FOAuth";
import GMAuth from "./components/middleware/GMAuth";
import OwnerAuth from "./components/middleware/OwnerAuth";
import SMAuth from "./components/middleware/SMAuth";
import Guest from "./components/middleware/Guest";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <Navigationbar />
      </div>
      <div className="body">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/search"
              element={
                <Authenticated>
                  <Home />
                </Authenticated>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Authenticated>
                  <Profile />
                </Authenticated>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <Guest>
                  <Login />
                </Guest>
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <Guest>
                  <Register />
                </Guest>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
