//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Component (PropertyIntroductionsSkeleton)
function PropertyIntroductionsSkeleton() {
  //! ---------------------------------------- Variables
  const maximum = 5;
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Title */}
        <div className="flex-center justify-between">
          <h1 className="text-2xl font-semibold skeleton w-3/12">.</h1>
          <div className="flex items-center justify-center gap-5 text-lg">
            {/* Share */}
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline cursor-pointer">
              <ProjectIcons type={`share`} className={`skeleton-text`} />
            </button>

            {/* Save */}
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline cursor-pointer">
              <ProjectIcons type={`mark`} className={`skeleton-text`} />
            </button>

            {/* Interest */}
            <button
              type="button"
              className="group/favorite cursor-pointer rounded-full flex-center"
              aria-label="Save"
            >
              <ProjectIcons type={`favorite`} className={`skeleton-text`} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative grid grid-cols-4 grid-rows-2 grid-flow-col gap-2 mb-8 h-100">
          {Array.from({ length: maximum }).map((_, index) => {
            return (
              <div
                key={index}
                className={`${index === 0 && "col-span-2 row-span-2"} relative flex justify-center items-center rounded-2xl overflow-hidden cursor-pointer skeleton`}
              >
                <img className={`object-cover w-full h-full opacity-0`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyIntroductionsSkeleton;
