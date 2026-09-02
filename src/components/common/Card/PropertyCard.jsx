//! ---------------------------------------- Import
import { Link } from "react-router-dom";
import { ProjectIcons } from "@/components";
import { useState } from "react";
//! ---------------------------------------- Variables
const DEFAULT_IMAGE =
  "https://cdn.jabama.com/image/jabama-images/2096771/d3f6993e-d8ea-4086-a8a3-b319566f1f92.jpg";
//! ---------------------------------------- Component (PropertyCard)
function PropertyCard({ card }) {
  //! ---------------------------------------- Hooks
  const [loaded, setLoaded] = useState(false);
  //! ---------------------------------------- Return
  return (
    <>
      <Link
        to={`/listDetails`}
        className="relative group cursor-pointer flex flex-col gap-2 justify-center items-stretch"
      >
        <div className="relative rounded-xl overflow-hidden">
          {/* Skeleton Image */}
          {!loaded && <div className="skeleton-box" />}

          {/* Image */}
          <img
            src={card?.primary_image ?? DEFAULT_IMAGE}
            alt={card?.title}
            className={`w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
            onError={(event) => {
              event.currentTarget.src = DEFAULT_IMAGE;
            }}
            onLoad={() => setLoaded(true)}
          />

          {/* Popularity */}
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
            Guest favorite
          </div>

          {/* Interest */}

          <button
            type="button"
            className="absolute group/favorite cursor-pointer top-3 right-3 w-10 h-10 rounded-full bg-white hover:bg-gray-100 z-10 flex justify-center items-center"
            aria-label="Save"
          >
            <ProjectIcons
              type={`like`}
              className="absolute transition ease-in-out opacity-100 group-hover/favorite:opacity-0 w-3/5 h-3/5"
            />
            <ProjectIcons
              type={`liked`}
              className="absolute transition ease-in-out opacity-0 group-hover/favorite:opacity-100 w-3/5 h-3/5"
            />
          </button>

          {/* Rate */}

          {card?.average_rating && (
            <div className="flex group/rating items-center justify-center gap-1 w-10 h-10 absolute bottom-3 right-3 bg-white rounded-full">
              <ProjectIcons
                type={"star"}
                className="absolute opacity-100 group-hover/rating:opacity-0 transition-all ease-in-out duration-300 text-xl"
              />
              <span className="absolute opacity-0 group-hover/rating:opacity-100 transition-all ease-in-out duration-300 text-[15px] text-gray-900 font-medium">
                {card?.average_rating}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          {/* Title */}

          <h3 className="text-[15px] font-medium text-gray-900 truncate group-hover:underline leading-tight">
            {card?.title}
          </h3>

          {card?.price_per_night && (
            <div className="flex flex-col gap-0.5">
              {/* Status */}
              <p className="text-[15px] text-gray-600 leading-tight">
                {card?.status}
              </p>

              {/* Duration */}
              <p className="text-[15px] text-gray-600 leading-tight">
                Jan 9-11
              </p>

              {/* HostType */}
              <p className="text-[15px] text-gray-600 leading-tight">
                {card?.hostType}
              </p>

              {/* Price Per Night */}
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-semibold text-gray-900  truncate w-8/12">
                  {`From € ${Number(card?.price_per_night).toFixed(0)} / guest`}
                </span>
                <span className="text-[15px] text-gray-600">
                  For<strong> A </strong>night
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyCard;
