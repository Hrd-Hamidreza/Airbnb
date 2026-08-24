//! ---------------------------------------- Import
import CitySlides from "@/pages/general/Home/CitySlides";
import Inspiration from "@/pages/general/Home/Inspiration";
//! ---------------------------------------- Component (Home)
function Home() {
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-5 p-10">
        {/* CitySlides */}
        <CitySlides />
        {/* Inspiration  */}
        <Inspiration />
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Home;
