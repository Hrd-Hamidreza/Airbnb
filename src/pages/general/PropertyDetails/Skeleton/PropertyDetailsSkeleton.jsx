//! ---------------------------------------- Import
import {
  PropertyAmenitiesSkeleton,
  PropertyBookingSkeleton,
  PropertyCalendarSkeleton,
  PropertyDescriptionsSkeleton,
  PropertyFeaturesSkeleton,
  PropertyHostSkeleton,
  PropertyHostSummarySkeleton,
  PropertyHouseSummarySkeleton,
  PropertyIntroductionsSkeleton,
  PropertyLocationSkeleton,
  PropertyNavSkeleton,
  PropertyPhotoesSkeleton,
  PropertyPreviewSkeleton,
  PropertyRegulationsSkeleton,
  PropertyReviewSkeleton,
} from "@/pages";
//! ---------------------------------------- Component (PropertyDetailsSkeleton)
function PropertyDetailsSkeleton() {
  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-8/12 flex flex-col gap-5 mx-auto">
        {/* Introductions */}
        <PropertyIntroductionsSkeleton />
        <div className="grid xl:grid-cols-3 gap-5 items-start">
          <div className="xl:col-span-2 flex flex-col gap-5">
            {/* PropertyHouseSummary */}
            <PropertyHouseSummarySkeleton />
            <hr className="border-gray-300" />
            {/* PropertyHostSummary */}
            <PropertyHostSummarySkeleton />
            <hr className="border-gray-300" />
            {/* PropertyFeatures */}
            <PropertyFeaturesSkeleton />
            <hr className="border-gray-300" />
            {/* PropertyDescriptions */}
            <PropertyDescriptionsSkeleton />
            <hr className="border-gray-300" />
            {/* PropertyNav */}
            <PropertyNavSkeleton />
            {/* PropertyPreviewSkeleton */}
            <PropertyPreviewSkeleton />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyPhotoesSkeleton */}
            <PropertyPhotoesSkeleton />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyCalendarSkeleton */}
            <PropertyCalendarSkeleton />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyAmenitiesSkeleton */}
            <PropertyAmenitiesSkeleton />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyReview */}
            <PropertyReviewSkeleton />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyLocation */}
            <PropertyLocationSkeleton />
            <hr className="border-gray-300" />
            {/* PropertyHost */}
            <PropertyHostSkeleton />
            <hr className="border-gray-300" />
            {/* PropertyRegulations */}
            <PropertyRegulationsSkeleton />
          </div>
          {/* PropertyBooking */}
          <PropertyBookingSkeleton
            className={`xl:col-span-1 self-start h-full`}
          />
        </div>
      </section>
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyDetailsSkeleton;
