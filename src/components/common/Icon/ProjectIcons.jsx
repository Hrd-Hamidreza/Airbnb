//! ---------------------------------------- Import
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
//! ---------------------------------------- Component (ProjectIcons)
function ProjectIcons({ type, ...rest }) {
  switch (type) {
    case "star":
      return <FaStar {...rest} />;
    case "like":
      return <FcLikePlaceholder {...rest} />;
    case "liked":
      return <FcLike {...rest} />;
  }
}
//! ---------------------------------------- Export
export default ProjectIcons;
