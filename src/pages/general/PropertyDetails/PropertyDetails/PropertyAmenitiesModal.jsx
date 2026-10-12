//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { amenitySeparator } from "./utils/propertyDetails";
//! ---------------------------------------- Component (PropertyAmenitiesModal)
function PropertyAmenitiesModal({ property, openAmenities, close }) {
  if (!openAmenities) return null;
  //! ---------------------------------------- Amenity Separator
  const result = amenitySeparator(property?.amenities);
  //! ---------------------------------------- Review
  return (
    <>
      <div
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            close();
          }
        }}
        className="fixed inset-0 z-51 bg-black/90 flex-center"
      >
        <div className="bg-white rounded-xl xl:h-2/3 xl:w-2/3 xl:max-w-2/3 xl:max-h-2/3 p-5 overflow-auto">
          <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">
              What this place offers
            </h2>
            <button
              onClick={close}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-2xl cursor-pointer"
              aria-label="Close"
            >
              <ProjectIcons type={`close`} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {result.map(
              ({ title, items }, index) =>
                items.length > 0 && (
                  <div key={index} className="flex flex-col gap-1">
                    <h2 className="font-semibold text-lg">{title}:</h2>
                    <ul className="grid xl:grid-cols-4 grid-flow-row gap-3">
                      {items.map((item) => (
                        <li key={item.id} className="flex items-center gap-3">
                          <ProjectIcons type={item.icon} />
                          <span
                            title={item.name}
                            className="text-gray-900 truncate"
                          >
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyAmenitiesModal;
