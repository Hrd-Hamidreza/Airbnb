//! ---------------------------------------- Import
import { Outlet } from "react-router-dom";
import Header from "/src/layouts/Header/Header";
import ScrollSettings from "/src/utils/General/ScrollSettings";
//! ---------------------------------------- Component (MainLayout)
function MainLayout() {
  return (
    <>
      <ScrollSettings />
      <Header />
      <Outlet />
    </>
  );
}
//! ---------------------------------------- Export
export default MainLayout;
