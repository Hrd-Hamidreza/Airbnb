//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Variables
const days = ["S", "M", "T", "W", "T", "F", "S"];
//! ---------------------------------------- Component (PropertyCalendarSkeleton)
function PropertyCalendarSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-stretch gap-5">
        <span className="flex-center items-stretch flex-col gap-1">
          <h3 className="text-xl font-semibold skeleton w-3/12">.</h3>
          <div className="text-sm flex gap-3">
            <span className="skeleton w-2/12">.</span>
            <span className="font-bold">-</span>
            <span className="skeleton w-2/12">.</span>
          </div>
        </span>
        <div className="flex-center flex-col gap-5 items-stretch">
          <div className="flex items-center justify-between">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Previous month"
            >
              <ProjectIcons type={`rewind`} className={`skeleton-text`} />
            </button>
            <div className="flex-center gap-8 w-full">
              <div className="text-base font-semibold skeleton w-3/12">.</div>
              <div className="text-base font-semibold skeleton w-3/12">.</div>
            </div>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Next month"
            >
              <ProjectIcons type={`forward`} className={`skeleton-text`} />
            </button>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-8">
            {/* <!-- January 2026 --> */}
            <div className="flex-col-stretch justify-start gap-4">
              <div className="grid grid-cols-7 gap-1 font-extrabold">
                {days.map((day, index) => (
                  <div key={index} className="text-xs skeleton-bold">
                    .
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }).map((_, index) => (
                  <button key={index} className="text-sm skeleton">
                    .
                  </button>
                ))}
              </div>
            </div>
            {/* <!-- February 2026 --> */}
            <div className="flex-col-stretch justify-start gap-4">
              <div className="grid grid-cols-7 gap-1 font-extrabold">
                {days.map((day, index) => (
                  <div key={index} className="text-xs skeleton-bold">
                    .
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, index) => (
                  <button key={index} className="text-sm skeleton">
                    .
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="text-sm font-semibold self-start skeleton w-2/12">
            .
          </button>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyCalendarSkeleton;
