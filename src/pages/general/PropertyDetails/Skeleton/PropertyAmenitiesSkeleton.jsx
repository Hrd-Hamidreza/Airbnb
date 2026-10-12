//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Variables
const featuresLength = 8;
//! ---------------------------------------- Component (PropertyAmenitiesSkeleton)
function PropertyAmenitiesSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-stretch gap-5">
        <h3 className="text-xl font-semibold skeleton w-5/12">.</h3>
        <div className="grid xl:grid-cols-2 grid-rows-4 grid-flow-row gap-3">
          {Array.from({ length: featuresLength }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <ProjectIcons className={`skeleton-text`} />
              <span className="skeleton w-4/12">.</span>
            </div>
          ))}
        </div>
        <button className="text-sm font-semibold self-start skeleton w-2/12">
          .
        </button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyAmenitiesSkeleton;
