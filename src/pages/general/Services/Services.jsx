//! ---------------------------------------- Import
import { DiscoverCard, ServicesCard, SwiperBox } from "@/components";
import { fetchServicesData } from "@/services";
//! ---------------------------------------- Component (Services)
function Services() {
  //! ---------------------------------------- Variables
  const servicesData = fetchServicesData();
  //! --------------------
  const componentsCard = {
    Discover: DiscoverCard,
    Services: ServicesCard,
  };
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-10 p-10">
        <section className="w-full flex flex-col gap-5">
          {servicesData.map((service) => (
            <SwiperBox
              key={service.id}
              title={service.category}
              subTitle={service.subTitle}
              ComponentCard={componentsCard[service.category]}
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
