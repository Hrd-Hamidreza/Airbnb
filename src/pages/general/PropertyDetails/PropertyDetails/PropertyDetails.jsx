//! ---------------------------------------- Import
import { useEffect, useRef, useState } from "react";
import {
  //! Components
  PropertyDescriptions,
  PropertyFeatures,
  PropertyHostSummary,
  PropertyHouseSummary,
  PropertyIntroductions,
  PropertyNav,
  PropertyPreview,
  PropertyPhotoes,
  PropertyCalendar,
  PropertyAmenities,
  PropertyReview,
  PropertyLocation,
  PropertyHost,
  PropertyRegulations,
  PropertyBooking,
  PropertySpaceModal,
  PropertyAmenitiesModal,
  PropertyReviewModal,
  //! Utils
} from "@/pages";
import { GalleryModal } from "@/components";
//! ---------------------------------------- Component (PropertyDetails)
function PropertyDetails({ propertyData, propertyIsSuccess }) {
  //! ---------------------------------------- Hooks
  const [arrive, setArrive] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);

  const [openGallery, setOpenGallery] = useState(false);

  const [openSpace, setOpenSpace] = useState(false);

  const [openAmenities, setOpenAmenities] = useState(false);

  const [openReviews, setOpenReviews] = useState(false);

  const [checkIn, setCheckIn] = useState(null);

  const [checkOut, setCheckOut] = useState(null);

  //! --------------------
  const element = useRef(null);

  //! --------------------
  useEffect(() => {
    if (!element?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setArrive(entry.boundingClientRect.top <= 320);
      },
      { threshold: 1, rootMargin: `-320px 0px 0px 0px` },
    );

    observer.observe(element?.current);

    return () => observer.disconnect();
  }, [propertyIsSuccess]);

  //! ---------------------------------------- Functions
  const handleGallery = (index) => {
    setOpenGallery(true);
    setImageIndex(index);
  };

  //! --------------------
  const handleSpace = () => {
    setOpenSpace(true);
  };

  //! --------------------
  const handleAmenities = () => {
    setOpenAmenities(true);
  };

  //! --------------------
  const handleReviews = () => {
    setOpenReviews(true);
  };

  //! ---------------------------------------- Variables
  const property = propertyData?.data;

  //! ---------------------------------------- Return
  return (
    <>
      <section className="w-8/12 flex flex-col gap-5 mx-auto">
        {/* Introductions */}
        <PropertyIntroductions {...{ property, handleGallery }} />
        <div className="grid xl:grid-cols-3 gap-5 items-start">
          <div className="xl:col-span-2 flex flex-col gap-5">
            {/* PropertyHouseSummary */}
            <PropertyHouseSummary {...{ property }} />
            <hr className="border-gray-300" />
            {/* PropertyHostSummary */}
            <PropertyHostSummary {...{ property }} />
            <hr className="border-gray-300" />
            {/* PropertyFeatures */}
            <PropertyFeatures {...{ property }} />
            <hr className="border-gray-300" />
            {/* PropertyDescriptions */}
            <PropertyDescriptions {...{ property, handleSpace }} />
            <hr className="border-gray-300" />
            {/* PropertyNav */}
            <PropertyNav {...{ arrive, property }} />
            {/* PropertyPhotoes */}
            <PropertyPreview />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyPreview */}
            <PropertyPhotoes {...{ property, handleGallery }} />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyCalendar */}
            <PropertyCalendar
              {...{ property, setCheckIn, setCheckOut, checkIn, checkOut }}
            />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyAmenities */}
            <PropertyAmenities {...{ property, handleAmenities }} />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyReview */}
            <PropertyReview {...{ property, handleReviews }} />
            <hr className="border-gray-200 w-1/2 self-center" />
            {/* PropertyLocation */}
            <PropertyLocation ref={element} {...{ property }} />
            <hr className="border-gray-300" />
            {/* PropertyHost */}
            <PropertyHost {...{ property }} />
            <hr className="border-gray-300" />
            {/* PropertyRegulations */}
            <PropertyRegulations />
          </div>
          {/* PropertyBooking */}
          <PropertyBooking
            {...{ property, checkIn, checkOut }}
            className={`xl:col-span-1 self-start h-full`}
          />
        </div>
      </section>
      {/* PropertyGallaryModal */}
      <GalleryModal
        {...{
          openGallery,
          data: property?.images,
          imageIndex,
          setImageIndex,
          close: () => setOpenGallery(false),
        }}
      />
      {/* PropertySpaceModal */}
      <PropertySpaceModal
        {...{ property, openSpace, close: () => setOpenSpace(false) }}
      />
      {/* PropertyAmenitiesModal */}
      <PropertyAmenitiesModal
        {...{
          property,
          openAmenities,
          close: () => setOpenAmenities(false),
        }}
      />
      {/* PropertyReviewModal */}
      <PropertyReviewModal
        {...{ property, openReviews, close: () => setOpenReviews(false) }}
      />
    </>
  );
}
//! ---------------------------------------- Export
export default PropertyDetails;
