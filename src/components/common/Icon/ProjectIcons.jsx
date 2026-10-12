//! ---------------------------------------- Import
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaSearch,
  FaLock,
  FaShareAlt,
  FaBookmark,
  FaRegCheckCircle,
  FaPlus,
  FaMinus,
  FaCheck,
  FaParking,
  FaTv,
  FaWifi,
  FaSwimmingPool,
  FaHeart,
  FaBookOpen,
  FaCalendarAlt,
  FaFlag,
  FaFirstAid,
} from "react-icons/fa";
import {
  FaEarthAmericas,
  FaMapLocationDot,
  FaKitchenSet,
  FaKey,
  FaComments,
  FaShield,
  FaHouseCircleExclamation,
  FaDiamond,
  FaCircle,
} from "react-icons/fa6";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import {
  MdBlock,
  MdFreeCancellation,
  MdFeaturedPlayList,
} from "react-icons/md";
import { LuServerCog, LuHeater } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { FcGallery } from "react-icons/fc";
import { TbAirConditioning, TbAlarmSmoke } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { RiAlarmWarningFill } from "react-icons/ri";
import { GiVacuumCleaner, GiMagnifyingGlass, GiPriceTag } from "react-icons/gi";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { AiFillSafetyCertificate, AiOutlineStop } from "react-icons/ai";
import { BiSolidWasher, BiSolidDryer } from "react-icons/bi";
import { memo } from "react";
//! ---------------------------------------- Component (ProjectIcons)
function ProjectIcons({ type, ...rest }) {
  switch (type) {
    //! -------------------- star
    case "star":
      return <FaStar {...rest} />;
    //! -------------------- favorite
    case "favorite":
      return <FaHeart {...rest} />;
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
    //! -------------------- share
    case "share":
      return <FaShareAlt {...rest} />;
    //! -------------------- mark
    case "mark":
      return <FaBookmark {...rest} />;
    //! -------------------- mark
    case "check":
      return <FaRegCheckCircle {...rest} />;
    //! -------------------- location
    case "location":
      return <FaMapLocationDot {...rest} />;
    //! -------------------- stars
    case "stars":
      return <BsStars {...rest} />;
    //! -------------------- gallery
    case "gallery":
      return <FcGallery {...rest} />;
    //! -------------------- increase
    case "increase":
      return <FaPlus {...rest} />;
    //! -------------------- decrease
    case "decrease":
      return <FaMinus {...rest} />;
    //! -------------------- tick
    case "tick":
      return <FaCheck {...rest} />;
    //! -------------------- ac
    case "ac":
      return <TbAirConditioning {...rest} />;
    //! -------------------- heating
    case "heating":
      return <LuHeater {...rest} />;
    //! -------------------- kitchen
    case "kitchen":
      return <FaKitchenSet {...rest} />;
    //! -------------------- parking
    case "parking":
      return <FaParking {...rest} />;
    //! -------------------- tv
    case "tv":
      return <FaTv {...rest} />;
    //! -------------------- wifi
    case "wifi":
      return <FaWifi {...rest} />;
    //! -------------------- gym
    case "gym":
      return <CgGym {...rest} />;
    //! -------------------- pool
    case "pool":
      return <FaSwimmingPool {...rest} />;
    //! -------------------- co-alarm
    case "co-alarm":
      return <RiAlarmWarningFill {...rest} />;
    //! -------------------- smoke-alarm
    case "smoke-alarm":
      return <TbAlarmSmoke {...rest} />;
    //! -------------------- cleanliness
    case "cleanliness":
      return <GiVacuumCleaner {...rest} />;
    //! -------------------- accuracy
    case "accuracy":
      return <GiMagnifyingGlass {...rest} />;
    //! -------------------- checkin
    case "checkin":
      return <FaKey {...rest} />;
    //! -------------------- communication
    case "communication":
      return <FaComments {...rest} />;
    //! -------------------- value
    case "value":
      return <GiPriceTag {...rest} />;
    //! -------------------- book
    case "book":
      return <FaBookOpen {...rest} />;
    //! -------------------- bag
    case "bag":
      return <PiSuitcaseSimpleFill {...rest} />;
    //! -------------------- protect
    case "protect":
      return <AiFillSafetyCertificate {...rest} />;
    //! -------------------- shield
    case "shield":
      return <FaShield {...rest} />;
    //! -------------------- date
    case "date":
      return <MdFreeCancellation {...rest} />;
    //! -------------------- calendar
    case "calendar":
      return <FaCalendarAlt {...rest} />;
    //! -------------------- house
    case "house":
      return <FaHouseCircleExclamation {...rest} />;
    //! -------------------- diamond
    case "diamond":
      return <FaDiamond {...rest} />;
    //! -------------------- flag
    case "flag":
      return <FaFlag {...rest} />;
    //! -------------------- close
    case "close":
      return <IoCloseSharp {...rest} />;
    //! -------------------- circle
    case "circle":
      return <FaCircle {...rest} />;
    //! -------------------- stop
    case "stop":
      return <AiOutlineStop {...rest} />;
    //! -------------------- washer
    case "washer":
      return <BiSolidWasher {...rest} />;
    //! -------------------- dryer
    case "dryer":
      return <BiSolidDryer {...rest} />;
    //! -------------------- first-aid
    case "first-aid":
      return <FaFirstAid {...rest} />;
    //! -------------------- default
    default:
      return <MdFeaturedPlayList {...rest} />;
  }
}
//! ---------------------------------------- Export
export default memo(ProjectIcons);
