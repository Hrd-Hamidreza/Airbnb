//! ---------------------------------------- Import
import { ExperiencesCard, MainSwiperBox } from "@/components";
import { fetchExperiencesData } from "@/services";
//! ---------------------------------------- Component (Experience)
function Experience() {
  //! ---------------------------------------- Variables
  const experiencesData = fetchExperiencesData();
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-11/12 mx-auto flex flex-col gap-10">
        <section className="w-full flex flex-col gap-5">
          {experiencesData.map((experience) => (
            <MainSwiperBox
              key={experience.id}
              title={experience.title}
              ComponentCard={ExperiencesCard}
              {...{ data: experience.data }}
            />
          ))}
        </section>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Experience;
