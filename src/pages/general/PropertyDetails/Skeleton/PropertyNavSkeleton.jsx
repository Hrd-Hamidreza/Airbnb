//! ---------------------------------------- Import
//! ---------------------------------------- Component (PropertyNavSkeleton)
function PropertyNavSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <nav className={`xl:min-h-21 py-7 font-bold rounded-xl skeleton`}>
        <div className="flex items-center justify-center gap-7">
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
      </nav>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyNavSkeleton;
