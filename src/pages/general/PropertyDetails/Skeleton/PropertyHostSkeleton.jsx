//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Variables
const lineLength = 3;
//! ---------------------------------------- Component (PropertyHostSkeleton)
function PropertyHostSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-center flex-col gap-5 items-stretch">
        <h2 className="text-2xl font-semibold skeleton w-4/12">.</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex-center justify-start gap-5">
              <div className="relative">
                <img className="min-w-24 min-h-24 rounded-full object-cover skeleton" />
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-white p-1 skeleton-bold">
                  <ProjectIcons type={`tick`} className={`skeleton-text`} />
                </div>
              </div>
              <div className="w-full">
                <div className="font-semibold text-2xl skeleton w-8/12">.</div>

                <div className="space-y-1">
                  <div className="text-sm text-gray-600">.</div>
                  <div className="text-sm flex items-center gap-1">
                    <span className="skeleton w-3/12">.</span>
                    <ProjectIcons type={`star`} className={`skeleton-text`} />
                    <span className="skeleton w-3/12">.</span>
                  </div>
                  <div className="text-sm text-gray-600">.</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex-center justify-start gap-3 text-lg cursor-pointer">
                <ProjectIcons type={`book`} className={`skeleton-text`} />
                <div className="relative text-sm text-gray-900 w-full">
                  <p className="skeleton w-full">.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="min-w-5 h-auto">
                <ProjectIcons
                  type={`protect`}
                  className={`skeleton-text w-full h-full`}
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                {Array.from({ length: lineLength }).map((_, index) => (
                  <p
                    key={index}
                    className={`text-xs skeleton ${index === lineLength - 1 ? "w-6/12" : "w-full"}`}
                  >
                    .
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyHostSkeleton;
