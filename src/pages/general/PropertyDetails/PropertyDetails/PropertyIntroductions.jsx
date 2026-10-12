//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { useState } from "react";
//! ---------------------------------------- Component (PropertyIntroductions)
function PropertyIntroductions({ property, handleGallery }) {
  //! ---------------------------------------- Hooks
  const [status, setStatus] = useState({});
  //! ---------------------------------------- Variables
  const maximum = 5;
  //! ---------------------------------------- Functions
  const loadedFn = (index) => {
    setStatus((pre) => ({ ...pre, [index]: "loaded" }));
  };
  //! --------------------
  const errorFn = (index) => {
    setStatus((pre) => ({ ...pre, [index]: "error" }));
  };
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Title */}
        <div className="flex-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            {property?.title}
          </h1>
          <div className="flex items-center justify-center gap-5 text-lg">
            {/* Share */}
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline cursor-pointer">
              <ProjectIcons type={`share`} />
              Share
            </button>

            {/* Save */}
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline cursor-pointer">
              <ProjectIcons type={`mark`} />
              Save
            </button>

            {/* Interest */}
            <button
              type="button"
              className="group/favorite cursor-pointer rounded-full flex-center"
              aria-label="Save"
            >
              <ProjectIcons
                type={`favorite`}
                className="transition ease-in-out text-red-200 group-hover/favorite:text-red-500"
              />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative grid grid-cols-4 grid-rows-2 grid-flow-col gap-2 mb-8 h-100">
          {Array.from({ length: maximum }).map((_, index) => {
            const image = property?.images?.[index];
            const imageStatus = status[index] ?? "loading";
            return (
              <div
                key={index}
                className={`relative ${image?.is_primary && "row-span-2 col-span-2"} flex justify-center items-center rounded-2xl overflow-hidden cursor-pointer`}
              >
                {image ? (
                  <>
                    {imageStatus === "loading" && (
                      <div className="skeleton-box" />
                    )}

                    {status[index] === "error" ? (
                      <div className="absolute inset-0 bg-gray-500 flex-col-center">
                        <ProjectIcons type={`stop`} className={`text-7xl`} />
                        <span className="font-bold">Not uploaded</span>
                      </div>
                    ) : (
                      <img
                        onClick={() => handleGallery(index)}
                        src={image?.url}
                        alt="Image"
                        className={`object-cover w-full h-full opacity-0 ${status[index] === "loaded" && "opacity-100"}`}
                        onError={() => errorFn(index)}
                        onLoad={() => loadedFn(index)}
                      />
                    )}
                  </>
                ) : (
                  <div className="flex text-sm w-full h-full justify-center items-center bg-gray-200 cursor-auto">
                    There is no image to display
                  </div>
                )}
              </div>
            );
          })}
          {property?.images.length > maximum && (
            <div className="absolute bottom-5 right-7 text-sm flex-center rounded-2xl bg-white px-4 py-1 shadow-2xl cursor-pointer gap-1 text-black font-medium hover:bg-orange-300 hover:text-white">
              <span>Show all photos</span>
              <ProjectIcons
                type={`gallery`}
                className={`relative top-[1.5px]`}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyIntroductions;
