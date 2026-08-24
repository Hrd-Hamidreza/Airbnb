//! ---------------------------------------- Import
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HotelCard from "../Card/HotelCard";
import NavigationBtn from "../Btn/NavigationBtn";
//! ---------------------------------------- Component (SwiperBox)
function SwiperBox({ type }) {
  //! ---------------------------------------- Hooks
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  //! ---------------------------------------- Return
  return (
    <>
      {/* Title */}
      <div className="flex items-center justify-between">
        {/* Title Text */}
        <h2 className="text-2xl font-semibold text-gray-900">{type?.title}</h2>
        {/* Navigation Buttons */}
        <NavigationBtn {...{ prevRef, nextRef }} />
      </div>
      {/* Swiper */}
      <div>
        <Swiper
          modules={[Navigation]}
          navigation
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef?.current;
            swiper.params.navigation.nextEl = nextRef?.current;
          }}
          spaceBetween={8}
          slidesPerView="auto"
        >
          {type?.properties?.map((property) => (
            <SwiperSlide key={property?.id} className="!w-[240px]">
              <HotelCard {...{ property }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
//! ---------------------------------------- Export
export default SwiperBox;
