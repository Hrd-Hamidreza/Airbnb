//! ---------------------------------------- Import
import { useParams } from "react-router-dom";
import { useProperty } from "@/hooks";
import { NotFound, PropertyDetails, PropertyDetailsSkeleton } from "@/pages";
//! ---------------------------------------- Component (PropertyHandler)
function PropertyHandler() {
  //! ---------------------------------------- Hooks
  const { id } = useParams();
  //! --------------------
  const {
    data: propertyData,
    isLoading: propertyIsLoading,
    isSuccess: propertyIsSuccess,
    isError: propertyIsError,
    error: propertyError,
  } = useProperty(id);
  //! ---------------------------------------- Return
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        {/* Loading  */}
        {propertyIsLoading && <PropertyDetailsSkeleton />}

        {/* Error  */}
        {propertyIsError && <NotFound type={propertyError?.response?.status} />}

        {/* Success  */}
        {propertyIsSuccess && (
          <PropertyDetails {...{ propertyData, propertyIsSuccess }} />
        )}
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyHandler;
