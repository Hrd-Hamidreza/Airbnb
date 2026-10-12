//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Component (PropertyFeaturesSkeleton)
function PropertyFeaturesSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <ProjectIcons
            type={`check`}
            className={`text-xl skeleton-text min-w-fit`}
          />
          <div className="flex-col-center items-start gap-1 w-full">
            <div className="font-semibold skeleton w-4/12">.</div>
            <div className="text-sm skeleton w-6/12">.</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ProjectIcons
            type={`location`}
            className={`text-xl skeleton-text min-w-fit`}
          />
          <div className="flex-col-center items-start gap-1 w-full">
            <div className="font-semibold skeleton w-4/12">.</div>
            <div className="text-sm skeleton w-6/12">.</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ProjectIcons
            type={`stars`}
            className={`text-xl skeleton-text min-w-fit`}
          />
          <div className="flex-col-center items-start gap-1 w-full">
            <div className="font-semibold skeleton w-4/12">.</div>
            <div className="text-sm skeleton w-6/12">.</div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyFeaturesSkeleton;
