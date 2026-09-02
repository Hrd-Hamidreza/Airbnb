//! ---------------------------------------- Import
//! ---------------------------------------- Component (CardsSkeleton)
function CardsSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <div
        to={`/listDetails`}
        className="flex flex-col gap-2 justify-center items-stretch"
      >
        <div className="rounded-xl overflow-hidden skeleton">
          {/* Image */}
          <img className="w-full h-60" />
        </div>

        <div className="flex flex-col gap-1">
          {/* Title */}
          <h3 className="skeleton w-5/12">.</h3>

          <div className="flex flex-col gap-0.5">
            {/* Status */}
            <p className="skeleton w-2/12">.</p>

            {/* Duration */}
            <p className="skeleton w-3/12">.</p>

            {/* HostType */}
            <p className="skeleton w-4/12">.</p>

            {/* Price Per Night */}
            <div className="flex items-center justify-between">
              <span className="truncate skeleton w-8/12">.</span>
              <span className="skeleton w-3/12">.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default CardsSkeleton;
