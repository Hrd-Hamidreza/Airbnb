//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Component (PropertyFeatures)
function PropertyFeatures({ property }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <ProjectIcons type={`check`} className={`text-xl`} />
          <div className="flex-col-center items-start gap-1">
            <div className="font-semibold text-gray-900">
              Great check-in experience
            </div>
            <div className="text-sm text-gray-600">
              Recent guests loved the smooth start to this stay.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ProjectIcons type={`location`} className={`text-xl`} />
          <div className="flex-col-center items-start gap-1">
            <div className="font-semibold text-gray-900 mb-1">
              Peace and quiet
            </div>
            <div className="text-sm text-gray-600">
              Guests say this home is in a quiet area.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ProjectIcons type={`stars`} className={`text-xl`} />
          <div className="flex-col-center items-start gap-1">
            <div className="font-semibold text-gray-900 mb-1">
              Oskar is a Superhost
            </div>
            <div className="text-sm text-gray-600">
              Superhosts are experienced, highly rated Hosts.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyFeatures;
