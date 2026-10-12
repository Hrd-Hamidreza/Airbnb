//! ---------------------------------------- Import
import { CitySlides, Inspiration } from "@/pages";
//! ---------------------------------------- Component (Home)
function Home() {
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-11/12 mx-auto flex flex-col gap-10">
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
