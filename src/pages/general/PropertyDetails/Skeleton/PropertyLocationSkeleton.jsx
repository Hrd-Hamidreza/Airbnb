//! ---------------------------------------- Import
//! ---------------------------------------- Component (PropertyLocationSkeleton)
function PropertyLocationSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div id="location" className="scroll-mt-83 flex-col-center items-stretch">
        <div className="opacity-0 pointer-events-none" />
        <div className="flex-col-stretch gap-1 mb-3">
          <h3 className="text-xl font-semibold skeleton w-3/12">.</h3>
          <div className="text-lg w-full flex gap-1">
            <span className="skeleton w-2/12">.</span>
            <span>,</span>
            <span className="skeleton w-2/12">.</span>
          </div>
        </div>
        <div className="w-full h-150 rounded-xl skeleton"></div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyLocationSkeleton;
