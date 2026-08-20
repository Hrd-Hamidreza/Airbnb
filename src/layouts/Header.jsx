//! ---------------------------------------- Import
import Head from "@/components/common/Header/Head";
import Search from "@/components/common/Header/SearchBox";
//! ---------------------------------------- Component (Header)
function Header() {
  return (
    <>
      <header className="w-full sticky top-0 right-0 left-0 flex flex-col gap-5 items-center justify-center shadow-2xl z-50 p-10 bg-white">
        {/* Head */}
        <Head />
        {/* Search */}
        <Search />
      </header>
    </>
  );
}
//! ---------------------------------------- Export
export default Header;
