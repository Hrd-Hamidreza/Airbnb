//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { useState } from "react";
//! ---------------------------------------- Component (PropertyPhotoes)
function PropertyPhotoes({ property, handleGallery }) {
  //! ---------------------------------------- Hooks
  const [status, setStatus] = useState({ loading: true });
  //! ---------------------------------------- Return
  return (
    <>
      <div id="photos" className="scroll-mt-83">
        <div className="grid xl:grid-cols-3 grid-flow-row max-h-145 overflow-auto gap-4">
          {property?.images?.length > 0 ? (
            property?.images?.map((image, index) => (
              <div
                onClick={() => handleGallery(index)}
                key={image?.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer ${image?.order}`}
              >
                {/* Error */}
                {status.error && (
                  <div className="absolute inset-0 bg-gray-500 flex-col-center">
                    <ProjectIcons type={`stop`} className={`text-7xl`} />
                    <span className="font-bold">Not uploaded</span>
                  </div>
                )}

                {/* Loaded */}
                <img
                  src={image?.url}
                  alt={`Image-${index + 1}`}
                  className={`xl:h-70 w-full object-cover ${status.loaded ? "opacity-100" : "opacity-0"}`}
                  onError={() => setStatus({ error: true })}
                  onLoad={() => setStatus({ loaded: true })}
                />
              </div>
            ))
          ) : (
            <div className="flex-center">There is no image to display</div>
          )}
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyPhotoes;
