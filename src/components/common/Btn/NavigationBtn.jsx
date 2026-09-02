//! ---------------------------------------- Import
import ProjectIcons from "../Icon/ProjectIcons";
//! ---------------------------------------- Component (NavigationBtn)
function NavigationBtn({ prevRef, nextRef }) {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous"
          className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-full border border-gray-400 bg-white  transition-all duration-200 hover:shadow-md disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ProjectIcons type={`rewind`} />
        </button>
        {/* Next */}
        <button
          ref={nextRef}
          type="button"
          aria-label="Next"
          className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-full border border-gray-400 font-extrabold bg-white transition-all duration-200 hover:shadow-md disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ProjectIcons type={`forward`} />
        </button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default NavigationBtn;
