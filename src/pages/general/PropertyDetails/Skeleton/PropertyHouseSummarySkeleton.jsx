//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Component (PropertyHouseSummarySkeleton)
function PropertyHouseSummarySkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-center flex-col items-stretch gap-1">
        <h2 className="text-xl font-semibold skeleton w-4/12">.</h2>
        <div className="flex items-center gap-4 text-sm">
          <span className="skeleton w-1/12">.</span>
          <span>·</span>
          <span className="skeleton w-1/12">.</span>
          <span>·</span>
          <span className="skeleton w-1/12">.</span>
          <span>·</span>
          <span className="skeleton w-1/12">.</span>
        </div>
        <div className="flex items-center gap-2">
          <ProjectIcons type={`star`} className="skeleton-text" />
          <span className="text-sm font-medium">.</span>
          <span className="text-sm skeleton w-1/12">·</span>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyHouseSummarySkeleton;
