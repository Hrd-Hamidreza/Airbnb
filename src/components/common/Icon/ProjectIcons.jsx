//! ---------------------------------------- Import
import {
  FaStar,
  FaRegHeart,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaSearch,
  FaLock,
} from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { LuServerCog } from "react-icons/lu";
//! ---------------------------------------- Component (ProjectIcons)
function ProjectIcons({ type, ...rest }) {
  switch (type) {
    //! -------------------- star
    case "star":
      return <FaStar {...rest} />;
    //! -------------------- like
    case "like":
      return <FcLikePlaceholder {...rest} />;
    //! -------------------- liked
    case "liked":
      return <FcLike {...rest} />;
    //! -------------------- rewind
    case "rewind":
      return <FaChevronLeft {...rest} />;
    //! -------------------- forward
    case "forward":
      return <FaChevronRight {...rest} />;
    //! -------------------- forward
    case "search":
      return <FaSearch {...rest} />;
    //! -------------------- globe
    case "globe":
      return <FaEarthAmericas {...rest} />;
    //! -------------------- menu
    case "menu":
      return <IoMenu {...rest} />;
    //! -------------------- down
    case "down":
      return <FaChevronDown {...rest} />;
    //! -------------------- lock
    case "lock":
      return <FaLock {...rest} />;
    //! -------------------- block
    case "block":
      return <MdBlock {...rest} />;
    //! -------------------- server
    case "server":
      return <LuServerCog {...rest} />;
  }
}
//! ---------------------------------------- Export
export default ProjectIcons;
