//! ---------------------------------------- Import
import { ProjectIcons, PropertyReviewCard } from "@/components";
import { pluralFixer } from "@/utils";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (PropertyReview)
function PropertyReview({ property, handleReviews }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div
        id="reviews"
        className="scroll-mt-83 flex-center flex-col items-stretch gap-5"
      >
        {/* Average Rate */}
        <div className="flex-center flex-col gap-5 items-stretch">
          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <ProjectIcons
                type={`star`}
                className={`text-2xl text-rose-500`}
              />
              {property?.average_rating != null && (
                <>
                  <span className="text-4xl font-semibold text-gray-900">
                    {property?.average_rating}
                  </span>
                  <span className="text-lg text-gray-600">.</span>
                </>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-lg text-gray-600">
                {pluralFixer(property?.reviews?.length, "review")}
              </span>
            </div>
          </div>
          {/* Rates */}
          <div className="grid md:grid-cols-2 grid-cols-1 flex-center items-start gap-5">
            <div className="flex-center flex-col items-stretch gap-3">
              <div className="text-sm font-semibold text-gray-900">
                Overall rating
              </div>
              <div className="space-y-2">
                {Object.entries(property?.review_distribution)
                  .reverse()
                  .map(([score, number], index) => {
                    const width = (number / property?.reviews?.length) * 100;
                    return (
                      <div key={index} className="flex items-center gap-5">
                        <span className="text-sm text-gray-600">{score}</span>
                        <div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${width}%` }}
                            className={`h-full bg-gray-900`}
                          />
                        </div>
                        <span className="text-sm text-gray-600 text-right">
                          {number}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <div className="space-y-3">
                {Object.entries(property?.rating_breakdown ?? {}).map(
                  ([name, rate], index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <ProjectIcons type={name} />
                        <span className="text-sm text-gray-900">{name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {rate}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="grid grid-cols-2 gap-5">
          {property?.reviews?.slice(0, 2)?.map((review) => (
            <PropertyReviewCard
              key={review?.id}
              {...{ review, property }}
              lineHeight={`line-clamp-4`}
            />
          ))}
        </div>
        {/* More  */}
        {property?.reviews?.length > 2 && (
          <button
            onClick={handleReviews}
            className="text-sm font-semibold text-gray-900 underline self-start cursor-pointer"
          >
            Show all {property?.reviews?.length} reviews
          </button>
        )}
        <hr className="border-gray-200 w-1/2 self-center" />
        <div className="flex flex-wrap items-center gap-4 self-center">
          <Link to={``} className="text-sm text-gray-600 hover:underline">
            How reviews work
          </Link>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyReview;
