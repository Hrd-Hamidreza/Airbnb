//! ---------------------------------------- Import
import { ProjectIcons, PropertyReviewCardSkeleton } from "@/components";
//! ---------------------------------------- Variables
const score = 5;
const reviewLength = 2;
//! ---------------------------------------- Component (PropertyReviewSkeleton)
function PropertyReviewSkeleton() {
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
          <div>
            <div className="flex justify-start items-center gap-3">
              <ProjectIcons
                type={`star`}
                className={`text-2xl skeleton-text`}
              />
              <span className="text-4xl font-semibold skeleton w-1/12">.</span>
              <span className="font-bold">.</span>
              <span className="text-lg skeleton w-2/12">·</span>
            </div>
          </div>
          {/* Rates */}
          <div className="grid md:grid-cols-2 grid-cols-1 flex-center items-start gap-5">
            <div className="flex-center flex-col items-stretch gap-3">
              <div className="text-sm font-semibold skeleton w-4/12">.</div>
              <div className="flex-col-stretch gap-1">
                {Array.from({ length: score }).map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3"
                  >
                    <span className="skeleton w-1/12">.</span>
                    <span className="skeleton w-10/12">.</span>
                    <span className="skeleton w-1/12">.</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-center flex-col items-stretch gap-3">
              <div className="flex-col-stretch gap-5">
                {Array.from({ length: score }).map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3 w-6/12">
                      <ProjectIcons className={`w-fit skeleton-text`} />
                      <span className="skeleton w-7/12">.</span>
                    </div>
                    <span className="skeleton w-1/12">.</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="grid grid-cols-2 gap-5">
          {Array.from({ length: reviewLength }).map((_, index) => (
            <PropertyReviewCardSkeleton key={index} />
          ))}
        </div>
        <hr className="border-gray-200 w-1/2 self-center" />
        <div className="self-center text-sm skeleton w-3/12">.</div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyReviewSkeleton;
