// Utils
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import RoomDetail from "./pages/RoomDetail";
// CUSTOMER
import Booking from "./pages/Customer/Booking/Booking";
import MyReservation from "./pages/Customer/Reservation/MyReservation";
import MyReservationDetail from "./pages/Customer/Reservation/MyReservationDetail";
import Receipt from "./pages/Customer/Receipt/Receipt";
import Bill from "./pages/Customer/Receipt/Bill";
import GroupBill from "./pages/Customer/Receipt/GroupBill";
// ADMIN
import RoomManagement from "./pages/Admin/Room";
import AddRoom from "./pages/Admin/AddRoom";
import EditRoom from "./pages/Admin/EditRoom";
import RoomTypeManagement from "./pages/SM/RoomType/RoomType";
import AddRoomType from "./pages/SM/RoomType/AddRoomType";
import EditRoomType from "./pages/SM/RoomType/EditRoomType";
// SM Season
import SeasonManagement from "./pages/SM/Season/Season";
import AddSeason from "./pages/SM/Season/AddSeason";
import EditSeason from "./pages/SM/Season/EditSeason";
// SM Promo
import PromoManagement from "./pages/SM/Promo/Promo";
import AddPromo from "./pages/SM/Promo/AddPromo";
import EditPromo from "./pages/SM/Promo/EditPromo";
// SM Add On
import FacilityManagement from "./pages/SM/Facility/Facility";
import AddFacility from "./pages/SM/Facility/AddFacility";
import EditFacility from "./pages/SM/Facility/EditFacility";
// SM Reservation
import ReservationManagement from "./pages/SM/Reservation/Reservation";
import GroupReservationDetail from "./pages/SM/Reservation/GroupReservationDetail";
import AddReservationGroup from "./pages/SM/Reservation/AddReservationGroup";
import EditReservationGroup from "./pages/SM/Reservation/EditReservationGroup";

// Report
import NewCustReport from "./pages/Report/NewCustReport";
import GuestReport from "./pages/Report/GuestReport";
import MonthlyReport from "./pages/Report/MonthlyReport";
import LoyalCustReport from "./pages/Report/LoyalCustReport";

// AUTH
import Authenticated from "./components/middleware/Authenticated";
import Universal from "./components/middleware/Universal";
import AdminAuth from "./components/middleware/AdminAuth";
import FOAuth from "./components/middleware/FOAuth";
import GMAuth from "./components/middleware/GMAuth";
import OwnerAuth from "./components/middleware/OwnerAuth";
import SMAuth from "./components/middleware/SMAuth";
import ReportAuth from "./components/middleware/ReportAuth";
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
            <Route
              path="/"
              element={
                <Universal>
                  <LandingPage />
                </Universal>
              }
            />
            <Route
              path="/room-detail"
              element={
                <Universal>
                  <RoomDetail />{" "}
                </Universal>
              }
            />
            <Route
              path="/search"
              element={
                <Universal>
                  <Home />
                </Universal>
              }
            ></Route>
            {/* AUTH */}
            {/* Customer */}
            <Route
              path="/profile"
              element={
                // <Authenticated>
                <Profile />
                // </Authenticated>
              }
            ></Route>
            <Route
              path="/booking-confirmation"
              element={
                // <Authenticated>
                <Booking />
                // </Authenticated>
              }
            ></Route>
            <Route
              path="/my-reservation/p"
              element={
                <Authenticated>
                  <MyReservation />
                </Authenticated>
              }
            ></Route>
            <Route
              path="/my-reservation/p/:id"
              element={
                <Authenticated>
                  <MyReservationDetail />
                </Authenticated>
              }
            ></Route>
            <Route
              path="/my-receipt/p"
              element={
                // <Authenticated>
                <Receipt />
                // </Authenticated>
              }
            ></Route>
            <Route
              path="/my-bill/p"
              element={
                // <Authenticated>
                <Bill />
                // </Authenticated>
              }
            ></Route>
            <Route
              path="/my-bill/g"
              element={
                // <Authenticated>
                <GroupBill />
                // </Authenticated>
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
                <AdminAuth>
                  <RoomManagement />
                </AdminAuth>
              }
            ></Route>
            <Route
              path="/room-management/add"
              element={
                <AdminAuth>
                  <AddRoom />
                </AdminAuth>
              }
            ></Route>
            <Route
              path="/room-management/edit/:id"
              element={
                <AdminAuth>
                  <EditRoom />
                </AdminAuth>
              }
            ></Route>
            {/* SM */}
            <Route
              path="/room-type-management"
              element={
                <SMAuth>
                  <RoomTypeManagement />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/room-type-management/add"
              element={
                <SMAuth>
                  <AddRoomType />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/room-type-management/edit/:id"
              element={
                <SMAuth>
                  <EditRoomType />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/season-management"
              element={
                <SMAuth>
                  <SeasonManagement />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/season-management/add"
              element={
                <SMAuth>
                  <AddSeason />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/season-management/edit"
              element={
                <SMAuth>
                  <EditSeason />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/promo-management"
              element={
                <SMAuth>
                  <PromoManagement />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/promo-management/add"
              element={
                <SMAuth>
                  <AddPromo />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/promo-management/edit"
              element={
                <SMAuth>
                  <EditPromo />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/facility-management"
              element={
                <SMAuth>
                  <FacilityManagement />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/facility-management/add"
              element={
                <SMAuth>
                  <AddFacility />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/facility-management/edit/:id"
              element={
                <SMAuth>
                  <EditFacility />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/reservation-management"
              element={
                <SMAuth>
                  <ReservationManagement />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/reservation-management/g/:id"
              element={
                <SMAuth>
                  <GroupReservationDetail />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/reservation-management/add-group"
              element={
                <SMAuth>
                  <AddReservationGroup />
                </SMAuth>
              }
            ></Route>
            <Route
              path="/reservation-management/edit-group"
              element={
                <SMAuth>
                  <EditReservationGroup />
                </SMAuth>
              }
            ></Route>
            {/* Owner */}
            <Route
              path="/report/new-customer"
              element={
                <ReportAuth>
                  <NewCustReport />
                </ReportAuth>
              }
            ></Route>
            <Route
              path="/report/guest"
              element={
                <ReportAuth>
                  <GuestReport />
                </ReportAuth>
              }
            ></Route>
            <Route
              path="/report/monthly"
              element={
                <ReportAuth>
                  <MonthlyReport />
                </ReportAuth>
              }
            ></Route>
            <Route
              path="/report/loyal-customer"
              element={
                <GMAuth>
                  <LoyalCustReport />
                </GMAuth>
              }
            ></Route>
            <Route path="*" element={<Navigate replace to="/" />} />
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
