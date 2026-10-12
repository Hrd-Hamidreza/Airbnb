//! ---------------------------------------- Import
import ProjectIcons from "../../Icon/ProjectIcons";
//! ---------------------------------------- Variables
const score = 5;
const passageLength = 5;
//! ---------------------------------------- Component (PropertyReviewCardSkeleton)
function PropertyReviewCardSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-stretch gap-3">
        <div className="flex-center gap-3">
          <img className="min-w-12 min-h-12 rounded-full object-cover skeleton" />
          <div className="flex-col-stretch gap-2 w-full">
            <div className="font-semibold skeleton w-3/12">.</div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center">
                {Array.from({ length: score }).map((_, index) => (
                  <ProjectIcons
                    key={index}
                    type={`star`}
                    className={`skeleton-text`}
                  />
                ))}
              </div>
              <span className="text-sm">·</span>
              <span className="text-sm skeleton w-3/12">.</span>
            </div>
          </div>
        </div>
        <div className="text-sm flex flex-col gap-1">
          {Array.from({ length: passageLength }).map((_, index) => (
            <p
              key={index}
              className={`skeleton  ${index === passageLength - 1 ? "w-6/12" : "w-full"}`}
            >
              .
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyReviewCardSkeleton;
