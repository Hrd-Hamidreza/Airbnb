//! ---------------------------------------- Import
import { Outlet, useLocation } from "react-router-dom";
import { ScrollSettings } from "@/utils";
import { Footer, Header } from "@/layouts";
import { useEffect } from "react";
//! ---------------------------------------- Component (MainLayout)
function MainLayout() {
  //! ---------------------------------------- Return
  return (
    <div>
      <ScrollSettings />
      <Header />
      <main className="py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
//! ---------------------------------------- Export
export default MainLayout;
