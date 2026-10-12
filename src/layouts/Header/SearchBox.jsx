//! ---------------------------------------- Import
import { ProjectIcons } from "@/components";
import { Link } from "react-router-dom";
//! ---------------------------------------- Component (SearchBox)
function SearchBox() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="w-8/12 mx-auto flex items-center justify-between bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow relative">
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
          className="m-2 p-3 bg-[#FF385C] text-white rounded-full hover:bg-rose-700 transition-colors"
        >
          <ProjectIcons type={"search"} />
        </Link>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default SearchBox;
