//! ---------------------------------------- Import
import { SwiperBox } from "@/components";
//! ---------------------------------------- Component (CitySlides)
function CitySlides() {
  //! ---------------------------------------- Variales
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-10 p-10">
        <div className="w-full flex flex-col gap-5">
          <SwiperBox />
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default CitySlides;
