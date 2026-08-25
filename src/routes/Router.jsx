//! ---------------------------------------- Import
//! -------------------- Layout
import { MainLayout } from "@/layouts";
//! -------------------- Pages
import {
  //! Main
  Home,
  Admin,
  Experience,
  Host,
  ListDetails,
  Login,
  NotFound,
  Payment,
  Profile,
  Register,
  SearchResult,
  Services,
  UnAthorized,
  //! Admin
  AdminBookings,
  AdminMain,
  AdminProperties,
  Amenities,
  Locations,
  Support,
  Users,
  //! Host
  HostAbout,
  HostBookings,
  HostConnections,
  HostConnectionsDetails,
  HostProperties,
  MainHost,
  Review,
  //! Profile
  Favorites,
  MainProfile,
  ProfileAbout,
  ProfileConnections,
  ProfileConnectionsDetails,
  Trips,
} from "@/pages";
//! -------------------- Structure
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
