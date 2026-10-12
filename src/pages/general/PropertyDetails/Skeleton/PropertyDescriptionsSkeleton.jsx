//! ---------------------------------------- Import
//! ---------------------------------------- Variables
const passageLength = 5;
//! ---------------------------------------- Component (PropertyDescriptionsSkeleton)
function PropertyDescriptionsSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-stretch gap-3">
        <p className="text-sm skeleton w-7/12">.</p>
        <div className="w-full flex-col-stretch gap-1">
          {Array.from({ length: passageLength }).map((_, index) => (
            <p
              key={index}
              className={`skeleton ${index === passageLength - 1 ? "w-6/12" : "w-full"} `}
            >
              .
            </p>
          ))}
        </div>
        <div className="flex-col-stretch gap-2 w-full">
          <div className="text-sm skeleton w-4/12">.</div>
          <div className="text-sm skeleton w-3/12">.</div>
        </div>
        <button className="text-sm font-semibold self-start skeleton w-2/12">
          .
        </button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyDescriptionsSkeleton;
