//! ---------------------------------------- Import
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (SearchBox)
function SearchBox() {
  return (
    <>
      <div className="flex items-center justify-between bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow w-full max-w-[850px] relative">
        <div className="flex-1 px-6 py-4 text-left hover:bg-gray-50 rounded-full transition-colors">
          <div className="text-xs font-semibold text-gray-900">Where</div>
          <div className="text-sm text-gray-500 truncate">Tampere, Finland</div>
        </div>
        <div className="w-px h-8 bg-gray-300"></div>
        <div className="flex-1 px-6 py-4 text-left hover:bg-gray-50 rounded-full transition-colors">
          <div className="text-xs font-semibold text-gray-900">When</div>
          <div className="text-sm text-gray-500 truncate">Add dates</div>
        </div>
        <div className="w-px h-8 bg-gray-300"></div>
        <div className="flex-1 px-6 py-4 text-left hover:bg-gray-50 rounded-full transition-colors">
          <div className="text-xs font-semibold text-gray-900">Who</div>
          <div className="text-sm text-gray-500 truncate">Add guests</div>
        </div>
        <Link
          to={`/searchResult`}
          className="m-2 p-3 bg-[#FF385C] text-white rounded-full hover:bg-[#E61E4D] transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default SearchBox;
