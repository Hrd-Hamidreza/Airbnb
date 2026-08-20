//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (MainProfile)
function MainProfile() {
  return (
    <>
      <Link to={`profileAbout`}>Go to Profile</Link>
    </>
  );
}
//! ---------------------------------------- Export
export default MainProfile;
