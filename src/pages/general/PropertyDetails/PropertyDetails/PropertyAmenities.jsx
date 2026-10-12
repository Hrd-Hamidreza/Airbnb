//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Variables
const featuresLength = 8;
//! ---------------------------------------- Component (PropertyAmenities)
function PropertyAmenities({ property, handleAmenities }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div id="amenities" className="scroll-mt-83 flex-col-stretch gap-5">
        <h3 className="text-xl font-semibold text-gray-900">
          What this place offers
        </h3>
        <div className="grid xl:grid-cols-2 grid-rows-4 grid-flow-row gap-3">
          {property?.amenities?.slice(0, featuresLength)?.map((amenity) => (
            <div key={amenity?.id} className="flex items-center gap-3">
              <ProjectIcons type={amenity?.icon} />
              <span className="text-gray-900">{amenity.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleAmenities}
          className="text-sm font-semibold text-gray-900 underline hover:text-gray-700 self-start cursor-pointer"
        >
          Show all {property?.amenities?.length} amenities
        </button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyAmenities;
