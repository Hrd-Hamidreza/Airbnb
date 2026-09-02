//! ---------------------------------------- Import
import { OriginalCard, PopularCard, SwiperBox } from "@/components";
import { fetchExperiencesData } from "@/services";
//! ---------------------------------------- Component (Experience)
function Experience() {
  //! ---------------------------------------- Variables
  const experiencesData = fetchExperiencesData();
  const componentsCard = {
    Popular: PopularCard,
    Original: OriginalCard,
  };
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-10 p-10">
        <section className="w-full flex flex-col gap-5">
          {experiencesData.map((experience) => (
            <SwiperBox
              key={experience.id}
              title={experience.title}
              ComponentCard={componentsCard[experience.category]}
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
