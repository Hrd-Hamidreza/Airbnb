//! ---------------------------------------- Import
//! ---------------------------------------- Component (PropertyDescriptions)
function PropertyDescriptions({ property, handleSpace }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex-col-stretch gap-3">
        <p className="text-sm text-gray-500">
          Some info has been automatically translated.
          <a className="underline">Show original</a>
        </p>
        <p className="text-gray-900 leading-relaxed">{property?.description}</p>
        <div className="flex-col-stretch gap-2">
          <div className="text-sm text-gray-600">
            K-Market Pyynikinkulma 100 m
          </div>
          <div className="text-sm text-gray-600">Railway station 1.5 km</div>
        </div>
        <button
          onClick={handleSpace}
          className="text-sm font-semibold text-gray-900 underline hover:text-gray-700 cursor-pointer"
        >
          Show more
        </button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyDescriptions;
