//! ---------------------------------------- Import
import { ProjectIcons, PropertyReviewCard } from "@/components";
import { pluralFixer } from "@/utils";
//! ---------------------------------------- Variables
const selective = [
  "Most relevant",
  "Newest",
  "Highest rating",
  "Lowest rating",
  "Oldest",
];
//! ---------------------------------------- Component (PropertyReviewModal)
function PropertyReviewModal({ property, openReviews, close }) {
  if (!openReviews) return null;
  //! ---------------------------------------- Return
  return (
    <div
      id="reviews-modal"
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative mx-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between z-10">
          <h2 className="text-2xl font-semibold text-gray-900">Reviews</h2>
          <button
            type="button"
            onClick={close}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <ProjectIcons type={`close`} className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="space-y-5 p-8">
          <div className="flex items-start justify-between pb-8">
            <div className="flex items-start gap-6">
              <div className="text-7xl font-semibold text-gray-900">
                {property?.average_rating}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <ProjectIcons
                    type={`star`}
                    className={`w-10 h-10 text-rose-500`}
                  />
                </div>
                {property?.is_guest_favorite && (
                  <>
                    <div className="text-base font-semibold text-gray-900">
                      Guest favorite
                    </div>
                    <div className="text-sm text-gray-600 max-w-md leading-relaxed">
                      This home is in the top 5% of eligible listings based on
                      ratings, reviews, and reliability.
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-xl font-semibold text-gray-900">
                {pluralFixer(property?.reviews.length, "review")}
              </div>
              <div className="text-sm text-gray-600 hover:underline">
                How reviews work
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search all reviews"
                className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent"
              />
              <ProjectIcons
                type={`search`}
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
              />
            </div>
            <select className="px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF385C] focus:border-transparent">
              {selective.map((option) => (
                <option selected={option === "Most relevant"} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-2">
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
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-900">
                  Detailed ratings
                </div>
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
                          {rate.toFixed(1)}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-8 max-h-100 overflow-auto">
                {property?.reviews.map((review) => (
                  <PropertyReviewCard
                    key={review?.id}
                    {...{ review, property }}
                    lineHeight={`line-clamp-2`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//! ---------------------------------------- Export
export default PropertyReviewModal;
