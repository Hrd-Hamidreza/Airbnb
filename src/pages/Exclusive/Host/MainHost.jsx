//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (MainHost)
function MainHost() {
  return (
    <>
      <p>
        Redirecting to <Link to={`hostAbout`}>Host dashboard</Link>…
      </p>
    </>
  );
}
//! ---------------------------------------- Export
export default MainHost;
