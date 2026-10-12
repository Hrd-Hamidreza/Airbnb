//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { useState } from "react";
//! ---------------------------------------- Variables
const boxLength = 3;
//! ---------------------------------------- Component (PropertyPreview)
function PropertyPreview() {
  //! ---------------------------------------- Hooks
  const [status, setStatus] = useState({});
  //! ---------------------------------------- Functions
  const loadHandler = (index) => {
    setStatus((pre) => ({ ...pre, [index]: "loaded" }));
  };
  //! --------------------
  const errorHandler = (index) => {
    setStatus((pre) => ({ ...pre, [index]: "error" }));
  };
  //! ---------------------------------------- Return
  return (
    <>
      <div id="preview" className="scroll-mt-83 flex-col-stretch">
        <h3 className="text-xl font-semibold text-gray-900">
          Where you'll sleep
        </h3>
        <div className="overflow-scroll flex flex-nowrap gap-4 py-5">
          {Array.from({ length: boxLength }).map((_, index) => {
            const imageStatus = status[index] ?? "loading";
            return (
              <div
                key={index}
                className="min-w-72.5 border h-fit border-gray-200 rounded-xl p-4 gap-2 flex-center flex-col items-stretch"
              >
                <div className="relative rounded-xl overflow-hidden">
                  {/* Loading */}
                  {imageStatus === "loading" && (
                    <div className="skeleton-box" />
                  )}

                  {/* Error */}
                  {status[index] === "error" && (
                    <div className="absolute inset-0 bg-gray-500 flex-col-center">
                      <ProjectIcons type={`stop`} className={`text-7xl`} />
                      <span className="font-bold">Not uploaded</span>
                    </div>
                  )}

                  {/* loaded */}
                  <img
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop"
                    alt="Living area"
                    className={`w-full h-48 object-cover ${status[index] === "loaded" ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => loadHandler(index)}
                    onError={() => errorHandler(index)}
                  />
                </div>
                <div className="flex-center flex-col items-stretch gap-1">
                  <div className="font-semibold text-gray-900">Living area</div>
                  <div className="text-sm text-gray-600">
                    1 queen bed, 1 air mattress
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyPreview;
