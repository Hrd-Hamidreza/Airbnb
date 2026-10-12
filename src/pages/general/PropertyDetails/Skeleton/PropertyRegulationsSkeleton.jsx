//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Variables
const lineLength = 3;
//! ---------------------------------------- Component (PropertyRegulationsSkeleton)
function PropertyRegulationsSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-center items-stretch gap-5">
        <h3 className="text-xl font-semibold skeleton w-3/12">.</h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ProjectIcons type={`date`} className={`skeleton-text`} />
              <span className="font-semibold skeleton w-full">.</span>
            </div>
            {Array.from({ length: lineLength }).map((_, index) => (
              <p
                key={index}
                className={`text-sm skeleton ${index === lineLength - 1 ? "w-6/>12" : "w-full"}`}
              >
                .
              </p>
            ))}
            <div className="text-sm skeleton w-5/12">.</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ProjectIcons type={`house`} className={`skeleton-text`} />
              <span className="font-semibold skeleton w-full">.</span>
            </div>
            {Array.from({ length: lineLength }).map((_, index) => (
              <p
                key={index}
                className={`text-sm skeleton ${index === lineLength - 1 ? "w-6/12" : "w-full"}`}
              >
                .
              </p>
            ))}

            <div className="text-sm skeleton w-5/12">.</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <ProjectIcons type={`protect`} className={`skeleton-text`} />
              <span className="font-semibold skeleton w-full">.</span>
            </div>
            {Array.from({ length: lineLength }).map((_, index) => (
              <p
                key={index}
                className={`text-sm skeleton ${index === lineLength - 1 ? "w-6/12" : "w-full"}`}
              >
                .
              </p>
            ))}
            <div className="text-sm skeleton w-5/12">.</div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyRegulationsSkeleton;
