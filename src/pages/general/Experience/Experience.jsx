//! ---------------------------------------- Import
import SwiperBox from "@/components/common/Box/SwiperBox";
import { fetchExperiencesData } from "@/services/Genral/experienceService";
//! ---------------------------------------- Component (Experience)
function Experience() {
  //! ---------------------------------------- Variables
  const experienceTypes = fetchExperiencesData();
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-10 p-10">
        {/* Popular */}
        {experienceTypes.map((type) => (
          <div key={type.id} className="w-full flex flex-col gap-5">
            <SwiperBox {...{ type }} />
          </div>
        ))}
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Experience;
