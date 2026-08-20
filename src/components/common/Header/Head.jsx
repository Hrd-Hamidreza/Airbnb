//! ---------------------------------------- Import
import Logo from "./Logo";
import NavBar from "./NavBar";
import UserBox from "./UserBox";
//! ---------------------------------------- Component (Head)
function Head() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Logo />
        {/* Navbar */}
        <NavBar />
        {/* UserBox */}
        <UserBox />
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default Head;
