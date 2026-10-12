//! ---------------------------------------- Import
import { ServicesCard, MainSwiperBox } from "@/components";
import { fetchServicesData } from "@/services";
//! ---------------------------------------- Component (Services)
function Services() {
  //! ---------------------------------------- Variables
  const servicesData = fetchServicesData();
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-11/12 mx-auto flex flex-col gap-10">
        <section className="w-full flex flex-col gap-5">
          {servicesData.map((service) => (
            <MainSwiperBox
              key={service.id}
              title={service.category}
              subTitle={service.subTitle}
              ComponentCard={ServicesCard}
              {...{ data: service.data }}
            />
          ))}
        </section>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Services;
