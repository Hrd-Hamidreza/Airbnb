//! ---------------------------------------- Import
import { useState } from "react";
import ProjectIcons from "../../Icon/ProjectIcons";
//! ---------------------------------------- Component (PropertyReviewCard)
function PropertyReviewCard({ review, property, lineHeight }) {
  //! ---------------------------------------- Hooks
  const [status, setStatus] = useState({ loading: true });
  //! ---------------------------------------- Variables
  const avarageRate = Math.round(Number(property?.average_rating));
  const avatar = review?.user?.avatar;
  //! ---------------------------------------- Return
  return (
    <>
      <div className={`flex-col-stretch justify-start gap-3`}>
        <div className="flex-center gap-3">
          {/* Image */}
          <div className="relative w-12 h-12">
            {/* Loading */}
            {!avatar
              ? null
              : status.loading && <div className="skeleton-box rounded-full" />}

            {/* Error / No Image */}
            {!avatar || status.error ? (
              <div className="absolute inset-0 bg-gray-500 flex-col-center rounded-full text-[6px]">
                <ProjectIcons type="stop" className="text-xs" />
                <span className="font-bold">Not uploaded</span>
              </div>
            ) : (
              <img
                src={avatar}
                alt={review?.user?.name}
                className={`w-12 h-12 object-cover rounded-full ${
                  status.loaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setStatus({ loading: false, loaded: true })}
                onError={() => setStatus({ loading: false, error: true })}
              />
            )}
          </div>

          {/* Rest */}
          <div className="flex-1">
            <div className="font-semibold text-gray-900">
              {review?.user?.name}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <ProjectIcons
                    key={index}
                    type={`star`}
                    className={`${avarageRate > index ? "text-rose-500" : "text-rose-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">·</span>
              <span className="text-sm text-gray-600">{review?.date}</span>
            </div>
          </div>
        </div>
        <p
          className={`text-gray-900 leading-relaxed text-sm text-justify ${lineHeight}`}
        >
          {review?.text}
        </p>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyReviewCard;
