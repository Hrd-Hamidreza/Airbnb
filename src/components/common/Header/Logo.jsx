//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Logo)
function Logo() {
  return (
    <>
      <Link to={`/`} className="flex justify-center items-center">
        <img src="/public/images/air.png" alt="Logo" className="h-8" />
      </Link>
    </>
  );
}
//! ---------------------------------------- Export
export default Logo;
