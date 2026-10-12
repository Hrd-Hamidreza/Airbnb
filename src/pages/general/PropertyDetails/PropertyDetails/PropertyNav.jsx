//! ---------------------------------------- Import
//! ---------------------------------------- Component (PropertyNav)
function PropertyNav({ arrive, property }) {
  //! ---------------------------------------- Return
  return (
    <>
      <nav
        className={`xl:min-h-21 ${arrive ? "relative" : `sticky xl:top-58 z-40`} py-7 font-bold bg-gray-50 rounded-xl shadow-sm shadow-gray-200`}
      >
        <div className="flex items-center justify-center gap-7">
          <a
            href="#preview"
            className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
          >
            Preview
          </a>
          <a
            href="#photos"
            className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
          >
            Photos
          </a>
          <a
            href="#calendar"
            className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
          >
            Calendar
          </a>
          <a
            href="#amenities"
            className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
          >
            Amenities
          </a>
          <a
            href="#reviews"
            className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
          >
            Reviews
          </a>
          <a
            href="#location"
            className="border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
          >
            Location
          </a>
        </div>
      </nav>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyNav;
