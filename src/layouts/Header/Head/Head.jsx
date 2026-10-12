//! ---------------------------------------- Import
import Logo from "./Logo";
import NavBar from "./NavBar";
import UserBox from "./UserBox";
//! ---------------------------------------- Component (Head)
function Head() {
  //! ---------------------------------------- Return
  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between items-center">
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
