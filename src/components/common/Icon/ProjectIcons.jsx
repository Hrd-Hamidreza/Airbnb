//! ---------------------------------------- Import
<<<<<<< HEAD
<<<<<<< HEAD
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
=======
import { FaStar } from "react-icons/fa";
>>>>>>> 9c415d42b72344a2e6ec1f3d321b293fbb18ce4e
=======
import { FaStar } from "react-icons/fa";
>>>>>>> 9c415d42b72344a2e6ec1f3d321b293fbb18ce4e
//! ---------------------------------------- Component (ProjectIcons)
function ProjectIcons({ type, ...rest }) {
  switch (type) {
    case "star":
      return <FaStar {...rest} />;
<<<<<<< HEAD
<<<<<<< HEAD
    case "like":
      return <FcLikePlaceholder {...rest} />;
    case "liked":
      return <FcLike {...rest} />;
=======
>>>>>>> 9c415d42b72344a2e6ec1f3d321b293fbb18ce4e
=======
>>>>>>> 9c415d42b72344a2e6ec1f3d321b293fbb18ce4e
  }
}
//! ---------------------------------------- Export
export default ProjectIcons;
