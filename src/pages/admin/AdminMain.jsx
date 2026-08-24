//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (AdminMain)
function AdminMain() {
  return (
    <>
      <Link to={`users`}>Go to Admin Panel</Link>
    </>
  );
}
//! ---------------------------------------- Export
export default AdminMain;
