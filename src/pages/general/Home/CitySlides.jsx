//! ---------------------------------------- Import
import { PropertyCard, SwiperBox, SwiperBoxSkeleton } from "@/components";
import { useDestinations, useProperties } from "@/hooks";
import { NotFound } from "@/pages";
//! ---------------------------------------- Variables
const skeletonsCount = 5;
//! ---------------------------------------- Component (CitySlides)
function CitySlides() {
  //! ---------------------------------------- Query
  const {
    data: destinationsData,
    isLoading: destinationsIsLoading,
    isSuccess: destinationsIsSuccess,
    isError: destinationsIsError,
    error: destinationsError,
  } = useDestinations();
  const queries = useProperties(destinationsData);
  //! ---------------------------------------- variables
  const destinationsResponse = destinationsError?.response;
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-full flex flex-col gap-5">
        {/* Destinations Loading */}
        {destinationsIsLoading &&
          Array.from({ length: skeletonsCount }).map((_, index) => (
            <SwiperBoxSkeleton key={index} />
          ))}

        {/* Destinations Error */}
        {destinationsIsError && (
          <NotFound type={destinationsResponse?.status} />
        )}

        {/* Destinations Success */}
        {destinationsIsSuccess &&
          destinationsData?.map((destination, index) => {
            //! Variables
            const {
              data: propertyData,
              isLoading: propertyIsLoading,
              isSuccess: propertyIsSuccess,
              isError: propertyIsError,
              error: propertyError,
            } = queries[index];
            const propertyResponse = propertyError?.response;

            //! Property Loading
            if (propertyIsLoading) {
              return Array.from({ length: skeletonsCount }).map((_, index) => (
                <SwiperBoxSkeleton key={`${destination.city_id}-${index}`} />
              ));
            }

            //! Property Error
            if (propertyIsError) {
              return (
                <NotFound
                  key={destination.city_id}
                  type={propertyResponse?.status}
                />
              );
            }

            //! Property Success
            if (propertyIsSuccess) {
              return (
                <SwiperBox
                  key={destination.city_id}
                  title={`Houses in ${destination.city_name}, ${destination.country_name}`}
                  ComponentCard={PropertyCard}
                  {...{ data: propertyData }}
                />
              );
            }

            return null;
          })}
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default CitySlides;
