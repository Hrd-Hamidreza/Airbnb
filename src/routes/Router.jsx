//! ---------------------------------------- Import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "/src/layouts/MainLayout/MainLayout";
import Home from "/src/pages/Home/Home";
//! ---------------------------------------- Component (Router)
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//! ---------------------------------------- Export
export default Router;
