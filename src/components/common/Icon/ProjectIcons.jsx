//! ---------------------------------------- Import
import { FaStar } from "react-icons/fa";
//! ---------------------------------------- Component (ProjectIcons)
function ProjectIcons({ type, ...rest }) {
  switch (type) {
    case "star":
      return <FaStar {...rest} />;
  }
}
//! ---------------------------------------- Export
export default ProjectIcons;
