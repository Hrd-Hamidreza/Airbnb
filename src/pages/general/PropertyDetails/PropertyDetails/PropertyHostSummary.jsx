//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { pluralFixer } from "@/utils";
import { useState } from "react";
//! ---------------------------------------- Component (PropertyHostSummary)
function PropertyHostSummary({ property }) {
  //! ---------------------------------------- Hook
  const [status, setStatus] = useState({ loading: true });
  const avatar = property?.host?.avatar;
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex items-center gap-4">
        {/* Image */}
        <div className="relative w-16 h-16">
          {/* Loading */}
          {!avatar
            ? null
            : status.loading && <div className="skeleton-box rounded-full" />}
          {/* Error */}
          {!avatar || status.error ? (
            <div className="absolute inset-0 bg-gray-500 flex-col-center">
              <ProjectIcons type={`stop`} className={`text-7xl`} />
              <span className="font-bold">Not uploaded</span>
            </div>
          ) : (
            <img
              src={avatar}
              alt={property?.host?.name}
              className={`w-16 h-16 rounded-full object-cover ${status.loaded ? "opacity-100" : "opacity-0"}`}
              onError={() => setStatus({ loading: false, error: true })}
              onLoad={() => setStatus({ loading: false, loaded: true })}
            />
          )}
          {/* Loaded */}
        </div>

        {/* Rest */}
        <div>
          <div className="font-semibold text-gray-900">
            Hosted by {property?.host?.name}
          </div>
          <div className="text-sm text-gray-600">
            {property?.host?.is_superhost && "Superhost ·"}
            {`${pluralFixer(property?.host?.years_hosting, "year")} of hosting`}
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyHostSummary;
