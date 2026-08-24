//! ---------------------------------------- Import
import { NavLink } from "react-router-dom";
//! ---------------------------------------- Component (NavBar)
function NavBar() {
  return (
    <>
      <div className="flex justify-center items-center relative left-15">
        <NavLink
          to={`/`}
          className="relative flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors h-full font-semibold text-gray-900"
        >
          <img src="/src/assets/images/2.png" alt="Homes" className="h-10" />
          <span>Homes</span>
        </NavLink>
        <NavLink
          to={`/experience`}
          className="relative flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors h-full text-gray-900"
        >
          <img
            src="/src/assets/images/3.png"
            alt="Experiences"
            className="h-10"
          />
          <span>Experiences</span>
          <span className="absolute top-0 left-14 bg-[#2224AF] text-white text-[10px] px-[6px] py-[2px] rounded-full font-bold leading-none">
            NEW
          </span>
        </NavLink>
        <NavLink
          to={`/services`}
          className="relative flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition-colors h-full text-gray-900"
        >
          <img src="/src/assets/images/1.png" alt="Services" className="h-10" />
          <span>Services</span>
          <span className="absolute top-0 left-14 bg-[#2224AF] text-white text-[10px] px-[6px] py-[2px] rounded-full font-bold leading-none">
            NEW
          </span>
        </NavLink>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default NavBar;
