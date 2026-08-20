//! ---------------------------------------- Import
//! -------------------- Exclusive
import MainLayout from "@/layouts/MainLayout";
//! Admin
import AdminBookings from "@/pages/Exclusive/Admin/AdminBookings";
import AdminMain from "@/pages/Exclusive/Admin/AdminMain";
import AdminProperties from "@/pages/Exclusive/Admin/AdminProperties";
import Amenities from "@/pages/Exclusive/Admin/Amenities";
import Locations from "@/pages/Exclusive/Admin/Locations";
import Support from "@/pages/Exclusive/Admin/Support";
import Users from "@/pages/Exclusive/Admin/Users";
//! Host
import HostAbout from "@/pages/Exclusive/Host/HostAbout";
import HostBookings from "@/pages/Exclusive/Host/HostBookings";
import HostConnections from "@/pages/Exclusive/Host/HostConnections";
import HostConnectionsDetails from "@/pages/Exclusive/Host/HostConnectionsDetails";
import HostProperties from "@/pages/Exclusive/Host/HostProperties";
import MainHost from "@/pages/Exclusive/Host/MainHost";
import Review from "@/pages/Exclusive/Host/Review";
//! Profile
import Favorites from "@/pages/Exclusive/Profile/Favorites";
import MainProfile from "@/pages/Exclusive/Profile/MainProfile";
import ProfileAbout from "@/pages/Exclusive/Profile/ProfileAbout";
import ProfileConnections from "@/pages/Exclusive/Profile/ProfileConnections";
import ProfileConnectionsDetails from "@/pages/Exclusive/Profile/ProfileConnectionsDetails";
import Trips from "@/pages/Exclusive/Profile/Trips";
//! -------------------- Main
import Admin from "@/pages/Main/Admin";
import Experience from "@/pages/Main/Experience";
import Home from "@/pages/Main/Home";
import Host from "@/pages/Main/Host";
import ListDetails from "@/pages/Main/ListDetails";
import Login from "@/pages/Main/Login";
import NotFound from "@/pages/Main/NotFound";
import Payment from "@/pages/Main/Payment";
import Profile from "@/pages/Main/Profile";
import Register from "@/pages/Main/Register";
import SearchResult from "@/pages/Main/SearchResult";
import Services from "@/pages/Main/Services";
import UnAthorized from "@/pages/Main/UnAthorized";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//! ---------------------------------------- Component (Router)
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main */}
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/listDetails" element={<ListDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/services" element={<Services />} />
          <Route path="/unAthorized" element={<UnAthorized />} />
          {/* Exclusive */}
          {/* Admin */}
          <Route path="/admin" element={<Admin />}>
            <Route path="adminBookings" element={<AdminBookings />} />
            <Route path="adminMain" element={<AdminMain />} />
            <Route path="adminProperties" element={<AdminProperties />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="locations" element={<Locations />} />
            <Route path="support" element={<Support />} />
            <Route path="users" element={<Users />} />
          </Route>
          {/* Host */}
          <Route path="/host" element={<Host />}>
            <Route path="hostAbout" element={<HostAbout />} />
            <Route path="hostBookings" element={<HostBookings />} />
            <Route path="hostConnections" element={<HostConnections />} />
            <Route
              path="hostConnectionsDetails"
              element={<HostConnectionsDetails />}
            />
            <Route path="hostProperties" element={<HostProperties />} />
            <Route path="mainHost" element={<MainHost />} />
            <Route path="review" element={<Review />} />
          </Route>
          {/* Profile */}
          <Route path="/profile" element={<Profile />}>
            <Route path="favorites" element={<Favorites />} />
            <Route path="mainProfile" element={<MainProfile />} />
            <Route path="profileAbout" element={<ProfileAbout />} />
            <Route path="profileConnections" element={<ProfileConnections />} />
            <Route
              path="profileConnectionsDetails"
              element={<ProfileConnectionsDetails />}
            />
            <Route path="trips" element={<Trips />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//! ---------------------------------------- Export
export default Router;
