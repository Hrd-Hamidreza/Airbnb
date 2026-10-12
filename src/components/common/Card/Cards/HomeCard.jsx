//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { useState } from "react";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (HomeCard)
function HomeCard({ card }) {
  //! ---------------------------------------- Hooks
  const [status, setStatus] = useState({ loading: true });
  //! ---------------------------------------- Return
  return (
    <>
      <Link to={`/property-details/${card?.id}`}>
        <div className="relative group cursor-pointer flex flex-col gap-2 justify-center items-stretch">
          <div className="relative rounded-xl overflow-hidden">
            {/* Skeleton Image */}
            {status.loading && <div className="skeleton-box" />}

            {/* Error Image */}
            {status.error && (
              <div className="absolute inset-0 bg-gray-500 flex-col-center">
                <ProjectIcons type={`stop`} className={`text-7xl`} />
                <span className="font-bold">Not uploaded</span>
              </div>
            )}

            {/* Image */}
            <img
              src={card?.primary_image}
              alt={card?.title || ""}
              className={`w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 ${status.loading || status.error ? "opacity-0" : "opacity-100"}`}
              onLoad={() => setStatus({ loaded: true })}
              onError={() => setStatus({ error: true })}
            />

            {/* Popularity */}
            <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
              Guest favorite
            </div>

            {/* Interest */}
            <button
              type="button"
              className="absolute group/favorite cursor-pointer top-3 right-3 w-10 h-10 rounded-full bg-white z-10 flex-center"
              aria-label="Save"
            >
              <ProjectIcons
                type={`favorite`}
                className="transition ease-in-out text-red-200 w-3/6 h-3/6 group-hover/favorite:text-red-500"
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
        </div>
      </Link>
    </>
  );
}
//! ---------------------------------------- Export
export default HomeCard;
