//! ---------------------------------------- Import
//! ---------------------------------------- Component (PropertyHostSummarySkeleton)
function PropertyHostSummarySkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex items-center gap-4">
        <img className="w-16 h-16 rounded-full object-cover skeleton" />
        <div className="w-3/12 skeleton">
          <div className="font-semibold">.</div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyHostSummarySkeleton;
