//! ---------------------------------------- Import
import ScrollSettings from "@/utils/General/ScrollSettings";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//! ---------------------------------------- Component (MainLayout)
function MainLayout() {
  return (
    <div>
      <ScrollSettings />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
//! ---------------------------------------- Export
export default MainLayout;
