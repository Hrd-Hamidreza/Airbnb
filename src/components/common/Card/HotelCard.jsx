//! ---------------------------------------- Import
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ProjectIcons from "../Icon/ProjectIcons";
//! ---------------------------------------- Component (HotelCard)
function HotelCard({ property }) {
  //! ---------------------------------------- Return
  return (
    <>
      <Link
        to={`/listDetails`}
        className="relative group cursor-pointer flex flex-col gap-1 justify-center items-stretch"
      >
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={property?.image}
            alt={property?.title}
            className="w-full h-[242px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
            Guest favorite
          </div>
          <button
            type="button"
            className="absolute cursor-pointer top-3 right-3 w-10 h-10 rounded-full bg-white hover:bg-gray-100 z-10 flex justify-center items-center"
            aria-label="Save"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <div className="flex items-center justify-center gap-1 w-10 h-10 absolute bottom-3 right-3 bg-white rounded-full">
            <ProjectIcons type={"star"} />
            <span className="text-[15px] text-gray-900 font-medium">
              {property?.rating}
            </span>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-[15px] font-medium text-gray-900 truncate group-hover:underline leading-tight">
            {property?.title}
          </h3>
          <p className="text-[15px] text-gray-600 mt-1 leading-tight">
            Jan 9-11
          </p>
          <p className="text-[15px] text-gray-600 leading-tight">
            {property?.hostType}
          </p>
          <div className="flex items-center justify-between mt-1.5">
            <div className="flex items-baseline gap-1">
              <span className="text-[15px] font-semibold text-gray-900">
                {property.price}
              </span>
              <span className="text-[15px] text-gray-600">for 2 nights</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
//! ---------------------------------------- Export
export default HotelCard;
