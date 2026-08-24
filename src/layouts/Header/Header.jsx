//! ---------------------------------------- Import
import Head from "./Head/Head";
import SearchBox from "./SearchBox";
//! ---------------------------------------- Component (Header)
function Header() {
  return (
    <>
      <header className="w-full sticky top-0 right-0 left-0 flex flex-col gap-5 items-center justify-center bg-gray-50 shadow-[0_5px_18px_var(--color-gray-200)] z-50 p-10">
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
