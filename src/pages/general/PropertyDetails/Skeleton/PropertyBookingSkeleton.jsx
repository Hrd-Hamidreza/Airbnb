//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
//! ---------------------------------------- Component (PropertyBookingSkeleton)
function PropertyBookingSkeleton({ ...rest }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div {...rest}>
        <div className="sticky xl:top-58 w-full flex flex-col gap-5">
          <div className="xl:min-h-21 rounded-xl p-4 flex items-start gap-3 skeleton">
            <ProjectIcons
              type={`diamond`}
              className="relative top-1 skeleton-text-bold"
            />
            <div className="space-y-1 w-full">
              <div className="font-semibold skeleton-bold w-4/12">.</div>
              <div className="text-sm skeleton-bold w-full">.</div>
            </div>
          </div>
          <div className="rounded-xl p-6 space-y-2 skeleton">
            <div className="flex-col-stretch gap-2">
              <div className="text-2xl font-semibold skeleton-bold w-6/12">
                .
              </div>
              <div className="text-sm skeleton-bold w-5/12">.</div>
              <div className="space-y-2 text-sm">
                <hr className="border-gray-400" />
                <div className="flex justify-between">
                  <span className="skeleton-bold w-5/12">.</span>
                  <div className="flex-center gap-3">
                    <button className="flex-center px-1 py-1 skeleton-text-bold">
                      <ProjectIcons type={`decrease`} />
                    </button>
                    <span className="font-bold skeleton-bold">.</span>
                    <button className="flex-center pl-1 py-1 skeleton-text-bold">
                      <ProjectIcons type={`increase`} />
                    </button>
                  </div>
                </div>
                <hr className="border-gray-400" />
                <div className="flex justify-between font-semibold">
                  <span className="skeleton-bold w-5/12">.</span>
                  <span className="skeleton-bold w-3/12">.</span>
                </div>
                <hr className="border-gray-400" />
                <div className="flex justify-between font-semibold">
                  <span className="skeleton-bold w-3/12">Total</span>
                  <span className="skeleton-bold w-3/12">.</span>
                </div>
                <hr className="border-gray-400" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 rounded-lg p-3 skeleton-bold">
                <div className="space-y-1 text-sm">
                  <div className="skeleton-extraBold w-7/12">.</div>
                  <div className="skeleton-extraBold w-7/12">.</div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="skeleton-extraBold w-7/12">.</div>
                  <div className="skeleton-extraBold w-7/12">.</div>
                </div>
              </div>
              <div className="space-y-1 rounded-lg p-3 text-xs skeleton skeleton-bold">
                <div className="font-semibold skeleton-extraBold w-3/12">.</div>
                <div className="font-semibold skeleton-extraBold w-3/12">.</div>
              </div>
            </div>
            <div className="block w-full font-semibold py-3 rounded-lg text-center skeleton-bold">
              .
            </div>
            <div className="flex-col-center gap-2 text-sm">
              <p className=" skeleton-bold w-6/12">.</p>
              <div className="flex-center gap-2 w-full">
                <ProjectIcons type={`flag`} className={`skeleton-text-bold`} />
                <div className="skeleton-bold w-4/12">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyBookingSkeleton;
