// Utils
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

// PARTIAL
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// ADMIN
import RoomManagement from "./pages/Admin/Room";
import AddRoom from "./pages/Admin/AddRoom";
import EditRoom from "./pages/Admin/EditRoom";
// Report
import NewCustReport from "./pages/Report/NewCustReport";
import GuestReport from "./pages/Report/GuestReport";
import MonthlyReport from "./pages/Report/MonthlyReport";
import LoyalCustReport from "./pages/Report/LoyalCustReport";

// AUTH
import Authenticated from "./components/middleware/Authenticated";
import AdminAuth from "./components/middleware/AdminAuth";
import FOAuth from "./components/middleware/FOAuth";
import GMAuth from "./components/middleware/GMAuth";
import OwnerAuth from "./components/middleware/OwnerAuth";
import SMAuth from "./components/middleware/SMAuth";
import Guest from "./components/middleware/Guest";

function App() {
  return (
    <div className="App">
      <div>
        <Navigationbar />
      </div>
      <div className="body">
        <Router>
          <Routes>
            {/* UNIVERSAL */}
            <Route path="/" element={<LandingPage />} />
            {/* AUTH */}
            {/* Consumen */}
            <Route
              path="/profile"
              element={
                <Authenticated>
                  <Profile />
                </Authenticated>
              }
            ></Route>
            <Route
              path="/search"
              element={
                <Authenticated>
                  <Home />
                </Authenticated>
              }
            ></Route>
            {/* GUEST */}
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
            {/* ADMIN */}
            <Route
              path="/room-management"
              element={
                // <AdminAuth>
                <RoomManagement />
                // </AdminAuth>
              }
            ></Route>
            <Route
              path="/room-management/add"
              element={
                // <AdminAuth>
                <AddRoom />
                // </AdminAuth>
              }
            ></Route>
            <Route
              path="/room-management/edit"
              element={
                // <AdminAuth>
                <EditRoom />
                // </AdminAuth>
              }
            ></Route>
            {/* Owner */}
            <Route
              path="/report/new-customer"
              element={
                // <AdminAuth>
                <NewCustReport />
                // </AdminAuth>
              }
            ></Route>
            <Route
              path="/report/guest"
              element={
                // <AdminAuth>
                <GuestReport />
                // </AdminAuth>
              }
            ></Route>
            <Route
              path="/report/monthly"
              element={
                // <AdminAuth>
                <MonthlyReport />
                // </AdminAuth>
              }
            ></Route>
            <Route
              path="/report/loyal-customer"
              element={
                // <AdminAuth>
                <LoyalCustReport />
                // </AdminAuth>
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
