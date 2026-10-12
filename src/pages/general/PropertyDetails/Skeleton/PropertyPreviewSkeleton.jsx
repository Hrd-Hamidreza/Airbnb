//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Variables
const boxLength = 3;
//! ---------------------------------------- Component (PropertyPreviewSkeleton)
function PropertyPreviewSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-stretch gap-5">
        <h3 className="text-xl font-semibold skeleton w-4/12">.</h3>
        <div className="overflow-scroll flex flex-nowrap gap-4 py-5">
          {Array.from({ length: boxLength }).map((_, index) => (
            <div
              key={index}
              className="min-w-72.5 h-fit rounded-xl p-4 gap-2 flex-center flex-col items-stretch skeleton"
            >
              <div className="rounded-xl overflow-hidden skeleton-bold">
                <img className="w-full h-48 object-cover" />
              </div>
              <div className="flex-center flex-col items-stretch gap-1">
                <div className="font-semibold skeleton-bold w-3/12">.</div>
                <div className="text-sm skeleton-bold w-6/12">.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyPreviewSkeleton;
