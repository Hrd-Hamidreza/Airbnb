//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { pluralFixer } from "@/utils";
//! ---------------------------------------- Component (PropertyHouseSummary)
function PropertyHouseSummary({ property }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-center flex-col items-stretch gap-1">
        <h2 className="text-xl font-semibold text-gray-900">
          {property?.property_type?.name}
          {` in ${property?.city}, ${property?.country}`}
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{pluralFixer(property?.max_guests, "Guest")}</span>
          <span>·</span>
          <span>{pluralFixer(property?.bedrooms, "bedroom")}</span>
          <span>·</span>
          <span>{pluralFixer(property?.beds, "bed")}</span>
          <span>·</span>
          <span>{pluralFixer(property?.bathrooms, "bathroom")}</span>
        </div>
        <div className="flex items-center gap-2">
          <ProjectIcons type={"star"} />
          <span className="text-sm font-medium text-gray-900">
            {property?.average_rating}
          </span>
          <span className="text-sm text-gray-600">·</span>
          <a href="#reviews" className="text-sm text-gray-600 underline">
            {pluralFixer(property?.reviews_count, "review")}
          </a>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyHouseSummary;
