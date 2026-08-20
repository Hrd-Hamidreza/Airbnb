//! ---------------------------------------- Import
import ScrollSettings from "@/utils/General/ScrollSettings";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//! ---------------------------------------- Component (MainLayout)
function MainLayout() {
  return (
    <div className="flex flex-col gap-5">
      <ScrollSettings />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
//! ---------------------------------------- Export
export default MainLayout;
