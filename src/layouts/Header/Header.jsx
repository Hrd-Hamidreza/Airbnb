//! ---------------------------------------- Import
import { Head, SearchBox } from "@/layouts";
//! ---------------------------------------- Component (Header) (xl)
function Header() {
  //! ---------------------------------------- Return
  return (
    <>
      <header
        className={`w-full xl:min-h-57 sticky top-0 right-0 left-0 flex flex-col gap-5 items-center justify-center bg-gray-50 shadow-[0_5px_18px_var(--color-gray-200)] z-50 py-10`}
      >
        {/* Head */}
        <Head />
        {/* Search */}
        <SearchBox />
      </header>
    </>
  );
}
//! ---------------------------------------- Export
export default Header;
