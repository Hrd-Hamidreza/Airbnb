//! ---------------------------------------- Import
import Available from "@/components/Main/Home/Available";
import Popular from "@/components/Main/Home/Popular";
import Inspiration from "@/components/Main/Home/Inspiration";
//! ---------------------------------------- Component (Home)
function Home() {
  //! ---------------------------------------- Return
  return (
    <>
      <main className="w-full">
        {/* Popular */}
        <Popular />
        {/* Available */}
        <Available />
        {/* Inspiration  */}
        <Inspiration />
      </main>
    </>
  );
}
//! ---------------------------------------- Export
export default Home;
