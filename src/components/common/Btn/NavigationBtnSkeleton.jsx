//! ---------------------------------------- Import
//! ---------------------------------------- Component (NavigationBtnSkeleton)
function NavigationBtnSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous"
          className="w-9 h-9 rounded-full overflow-hidden skeleton"
        ></button>
        {/* Next */}
        <button
          type="button"
          aria-label="Next"
          className="w-9 h-9 rounded-full overflow-hidden skeleton"
        ></button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default NavigationBtnSkeleton;
