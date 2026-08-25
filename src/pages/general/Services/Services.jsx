//! ---------------------------------------- Import
import { SwiperBox } from "@/components";
import { fetchServicesData } from "@/services";
//! ---------------------------------------- Component (Services)
function Services() {
  //! ---------------------------------------- Variables
  const servicesData = fetchServicesData();
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full bg-white flex flex-col gap-10 p-10">
        <div className="w-full flex flex-col gap-5">
          {servicesData.map((service) => (
            <SwiperBox key={service.id} {...{ box: service }} />
          ))}
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default Services;
