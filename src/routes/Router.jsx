//! ---------------------------------------- Import
//! -------------------- Exclusive
import MainLayout from "@/layouts/MainLayout/MainLayout";
//! Admin
import AdminBookings from "@/pages/admin/AdminBookings";
import AdminMain from "@/pages/admin/AdminMain";
import AdminProperties from "@/pages/admin/AdminProperties";
import Amenities from "@/pages/admin/Amenities";
import Locations from "@/pages/admin/Locations";
import Support from "@/pages/admin/Support";
import Users from "@/pages/admin/Users";
//! Host
import HostAbout from "@/pages/host/HostAbout";
import HostBookings from "@/pages/host/HostBookings";
import HostConnections from "@/pages/host/HostConnections";
import HostConnectionsDetails from "@/pages/host/HostConnectionsDetails";
import HostProperties from "@/pages/host/HostProperties";
import MainHost from "@/pages/host/MainHost";
import Review from "@/pages/host/Review";
//! Profile
import Favorites from "@/pages/profile/Favorites";
import MainProfile from "@/pages/profile/MainProfile";
import ProfileAbout from "@/pages/profile/ProfileAbout";
import ProfileConnections from "@/pages/profile/ProfileConnections";
import ProfileConnectionsDetails from "@/pages/profile/ProfileConnectionsDetails";
import Trips from "@/pages/profile/Trips";
//! -------------------- Main
import Admin from "@/pages/general/Admin";
import Experience from "@/pages/general/Experience/Experience";
import Home from "@/pages/general/Home/Home";
import Host from "@/pages/general/Host";
import ListDetails from "@/pages/general/ListDetails";
import Login from "@/pages/general/Login/Login";
import NotFound from "@/pages/general/NotFound";
import Payment from "@/pages/general/Payment";
import Profile from "@/pages/general/Profile";
import Register from "@/pages/general/Register";
import SearchResult from "@/pages/general/SearchResult";
import Services from "@/pages/general/Services/Services";
import UnAthorized from "@/pages/general/UnAthorized";
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
