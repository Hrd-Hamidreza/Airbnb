//! ---------------------------------------- Import
//! ---------------------------------------- Component (NavigationBtn)
function NavigationBtn({ prevRef, nextRef }) {
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
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Next */}
        <button
          ref={nextRef}
          type="button"
          aria-label="Next"
          className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-full border border-gray-400 font-extrabold bg-white transition-all duration-200 hover:shadow-md disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default NavigationBtn;
