//! ---------------------------------------- Import
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//! ---------------------------------------- Component (ScrollSettings)
const ScrollSettings = () => {
  //! ---------------------------------------- Hooks
  const pathName = useLocation();
  //! --------------------
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathName]);
  //! ---------------------------------------- Return
  return null;
};
//! ---------------------------------------- Export
export default ScrollSettings;
