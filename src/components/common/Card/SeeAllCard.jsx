//! ---------------------------------------- Import
import { useState } from "react";
import ProjectIcons from "../Icon/ProjectIcons";
//! ---------------------------------------- Variables
const DEFAULT_IMAGE =
  "https://cdn.jabama.com/image/jabama-images/1629675/39dd5b88-9e07-49ae-be40-c1bcbb304f57.jpg?x-img=v1%2Fformat%2Ctype_webp%2Fresize%2Cw_1200";
//! ---------------------------------------- Component (SeeAllCard)
function SeeAllCard({ data, to }) {
  //! ---------------------------------------- Hooks
  const [loaded, setLoaded] = useState(false);
  //! ---------------------------------------- Variables
  const previewImages = data
    ?.slice(to, to + 4)
    .map((card) => card?.primary_image ?? card?.image);
  //! ---------------------------------------- Return
  return (
    <div className="relative group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white">
        <div className="h-60 grid grid-cols-2 grid-rows-2 gap-1 overflow-hidden">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div
                key={index}
                className="relative w-full h-full flex justify-center items-center text-center"
              >
                {previewImages[index] ? (
                  <>
                    {!loaded && <div className="skeleton-box" />}
                    <img
                      className="w-full h-full object-cover"
                      src={previewImages[index] ?? DEFAULT_IMAGE}
                      alt={`Preview-${index + 1}`}
                      onError={(event) => {
                        event.currentTarget.src = DEFAULT_IMAGE;
                        setLoaded(true);
                      }}
                      onLoad={() => setLoaded(true)}
                    />
                  </>
                ) : (
                  <div className="flex w-full h-full justify-center items-center bg-gray-200" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1">
            <h3 className="text-[15px] font-medium text-gray-900 group-hover:underline leading-tight">
              See all
            </h3>
            <ProjectIcons className={"text-sm"} type={`forward`} />
          </div>
        </div>
      </div>
    </div>
  );
}
//! ---------------------------------------- Export
export default SeeAllCard;
