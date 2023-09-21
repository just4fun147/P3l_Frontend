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
              path="/home"
              element={
                <Authenticated>
                  <Home />
                </Authenticated>
              }
            ></Route>
            <Route
              path="/test"
              element={
                <Authenticated>
                  <Test />
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
