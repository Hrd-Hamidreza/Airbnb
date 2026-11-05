//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (Logo)
function Logo() {
  return (
    <>
      <Link to={`/`} className="flex-center gap-2">
        <ProjectIcons type={"logo"} className={"w-10 h-10 text-rose-500"} />
        <span className="text-2xl font-bold text-rose-500">Airbnb</span>
      </Link>
    </>
  );
}
//! ---------------------------------------- Export
export default Logo;
