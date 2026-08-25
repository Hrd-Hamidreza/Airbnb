//! ---------------------------------------- Import
import { Outlet } from "react-router-dom";
import { ScrollSettings } from "@/utils";
import { Footer, Header } from "@/layouts";
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
