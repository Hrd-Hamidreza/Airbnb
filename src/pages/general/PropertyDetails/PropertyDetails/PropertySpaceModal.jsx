//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Component (PropertySpaceModal)
function PropertySpaceModal({ property, openSpace, close }) {
  if (!openSpace) return null;
  //! ---------------------------------------- Return
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
        <div className="bg-white rounded-xl xl:h-2/3 xl:w-2/3 xl:max-w-2/3 xl:max-h-2/3 overflow-auto flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center justify-between sticky top-0 bg-white border-b border-gray-200 py-5 px-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              About this space
            </h2>
            <button
              onClick={close}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-2xl"
              aria-label="Close"
            >
              <ProjectIcons type={`close`} />
            </button>
          </div>
          {/* Context */}
          <div className="space-y-6 px-8">
            <p className="text-gray-900 leading-relaxed">
              {property?.description}
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                K-Market Pyynikinkulma 100 m
              </div>
              <div className="text-sm text-gray-600">
                Railway station 1.5 km
              </div>
              <div className="text-sm text-gray-600">Bus station 1.4 km</div>
              <div className="text-sm text-gray-600">Nokia Arena 1.8 km</div>
              <div className="text-sm text-gray-600">City Square 1.2 km</div>
              <div className="text-sm text-gray-600">
                Pyynikki Observation Tower 1.1 km
              </div>
              <div className="text-sm text-gray-600">
                Tampere-Pirkkala Airport (TMP) 16.8 km
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Guest access</h3>
              <p className="text-sm text-gray-600">
                You'll have the entire apartment to yourself during your stay.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Other things to note
              </h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  Check-in is usually possible by 3:00 p.m. Please confirm the
                  schedule before arrival.
                </li>
                <li className="text-sm text-gray-600">
                  Please note that this is an old house with relatively poor
                  sound insulation.
                </li>
                <li className="text-sm text-gray-600">
                  Parking in the area is subject to a fee (1.20/h) on weekdays
                  from 8 am to 6 pm and on Saturdays from 8 am to 4 pm. Sundays
                  and public holidays are free.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertySpaceModal;
